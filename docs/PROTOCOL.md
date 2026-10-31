# AetherStream Protocol Specification (v1.0)

## 1. Network Transport
- Default Port: `UDP 47998` (Video Stream), `UDP 47999` (Control & Input)
- Packet MTU: 1400 bytes (to prevent IP fragmentation)
- Byte Order: Big-Endian (Network Byte Order) for all multi-byte integers

## 2. Packet Types

| Opcode | Name | Direction | Description |
| :--- | :--- | :--- | :--- |
| `0x01` | `HANDSHAKE_REQ` | Client -> Host | Handshake request with device capabilities |
| `0x02` | `HANDSHAKE_RESP` | Host -> Client | Handshake response with stream config (Width, Height, FPS, Codec) |
| `0x10` | `VIDEO_FRAME_SLICE` | Host -> Client | Video frame payload slice |
| `0x15` | `FEC_FRAME_SLICE` | Host -> Client | XOR Forward Error Correction parity slice |
| `0x20` | `INPUT_EVENT` | Client -> Host | Mouse, Keyboard, or Gamepad input payload |
| `0x30` | `PING` | Client -> Host / Bidirectional | Latency measurement ping request |
| `0x31` | `PONG` | Host -> Client / Bidirectional | Latency measurement pong response |
| `0x40` | `CLIPBOARD_DATA` | Bidirectional | Synchronized UTF-8 clipboard text payload |

## 3. Video Slice Header (16 bytes)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x10)
[3]      Flags (bit 0: Keyframe [0x01], bit 1: Last slice of frame [0x02])
[4..7]   Frame Index (uint32)
[8..9]   Slice Index (uint16)
[10..11] Total Slices in Frame (uint16)
[12..15] Timestamp (uint32, microsecond timestamp)
[16..]   Payload (NAL Unit data, up to 1384 bytes)
```

## 4. FEC Frame Slice Header (20 bytes)
XOR-based ultra-lightweight parity packet. Slices in each group of size $K$ (default: 4) are bitwise XORed.
If exactly 1 data slice in the group is lost over UDP, it is immediately reconstructed at the receiver with zero retransmission latency:
`missing_len = lengths_xor ^ sum_xor(received_lengths)`
`missing_payload = parity_payload ^ sum_xor(received_payloads)`

```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x15)
[3]      Flags (bit 0: Keyframe [0x01], bit 1: Last slice/group [0x02])
[4..7]   Frame Index (uint32)
[8..9]   Start Slice Index (uint16)
[10..11] Slice Count in FEC group (uint16, e.g. 4)
[12..13] Total Slices in Frame (uint16)
[14..15] Payload Lengths XOR (uint16, XOR sum of slice payload lengths)
[16..19] Timestamp (uint32, microsecond timestamp)
[20..]   Parity Payload (XOR sum of NAL Unit slice payloads)
```

## 5. Input Event Packet (16 bytes)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x20)
[3]      Input Type (1: Mouse Move, 2: Mouse Click, 3: Key, 4: Gamepad)
[4..7]   Param 1 (e.g. X normalized float / Buttons bitmask)
[8..11]  Param 2 (e.g. Y normalized float / Keycode)
[12..15] Sequence Number (uint32)
```

## 6. Ping / Pong Latency Measurement Packet (16 bytes)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x30: PING, 0x31: PONG)
[3]      Subtype / Flags (0: Ping, 1: Pong)
[4..11]  Timestamp (uint64, microsecond timestamp)
[12..15] Sequence Number (uint32)
```

## 7. Handshake Packets (16 bytes)
### Handshake Request (`0x01`)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x01)
[3]      Protocol Version (uint8, default: 1)
[4..7]   Preferred Width (uint32)
[8..11]  Preferred Height (uint32)
[12..13] Preferred FPS (uint16)
[14]     Preferred Codec (0: H264, 1: HEVC, 2: AV1)
[15]     Flags (uint8)
```

### Handshake Response (`0x02`)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x02)
[3]      Status (0: OK, 1: Error)
[4..7]   Negotiated Width (uint32)
[8..11]  Negotiated Height (uint32)
[12..13] Negotiated FPS (uint16)
[14]     Negotiated Codec (0: H264, 1: HEVC, 2: AV1)
[15]     Flags (uint8)
```

## 8. Clipboard Data Packet (`0x50` / `0x40` Legacy) (Bidirectional)
```
[0..1]   Magic (0xAE, 0x54)
[2]      Opcode (0x50 / 0x40)
[3]      Format (1: UTF-8 Text)
[4..7]   Payload Length (uint32 BE)
[8..]    Payload (UTF-8 Text, up to 1384 bytes per packet)
```
