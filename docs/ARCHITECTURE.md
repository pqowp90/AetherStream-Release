# AetherStream Architecture Specification

## 1. Overview
AetherStream is an ultra-low latency remote gaming and desktop streaming system engineered specifically for Windows (Host) and iOS (Client).

## 2. Pipeline Design

### 2.1 Host Pipeline (Windows)
1. **Screen Capture (`dxgi_capturer`)**
   - API: DirectX Graphics Infrastructure (DXGI) 1.2+ `IDXGIOutputDuplication`
   - Frame source: Direct3D 11 Render Target Texture (VRAM)
   - Zero-Copy: Retains frame in GPU memory, avoiding CPU RAM roundtrips.

2. **Video Encoding (`nvenc_encoder`)**
   - API: NVIDIA Video Codec SDK (NVENC)
   - Codec: H.264 (Baseline/High) & HEVC (Main10 for HDR)
   - Preset: `NV_ENC_PRESET_P1` (Ultra-low latency, zero B-frames)
   - Rate Control: Low-latency CBR with dynamic slice intra-refresh (avoids IDR frame spikes).

3. **Packet Framing & Network Transport (`udp_transport`)**
   - Protocol: Lightweight custom UDP frame protocol (AetherPacket)
   - FEC: Reed-Solomon / XOR FEC for packet recovery without retransmission wait.
   - Pacing: Leaky-bucket frame packetizer to prevent burst loss.

4. **Input Dispatcher (`input_handler`)**
   - Mouse & Keyboard: Win32 `SendInput` with high-resolution coordinates.
   - Controller: ViGEmClient virtual Xbox 360 / DualShock 4 bus driver.

---

### 2.2 Client Pipeline (iOS)
1. **Transport Receiver (`AetherSocket`)**
   - UDP socket listener running on GCD high-priority dispatch queue.
   - Reassembles video slices and passes to decoder.

2. **Hardware Video Decoding (`VideoDecoder`)**
   - Framework: Apple `VideoToolbox` (`VTDecompressionSession`)
   - Employs zero-copy decoding into `CVPixelBuffer`.

3. **Rendering Engine (`MetalRenderer`)**
   - Framework: Apple `Metal` via `CAMetalLayer`
   - Triple-buffered display pipeline synchronized with iOS ProMotion (up to 120Hz).

4. **Input System (`InputManager`)**
   - On-screen customizable touch controls (Virtual Gamepad / Touchpad).
   - Apple `GameController.framework` for DualSense, Xbox, and MFi gamepads with haptic feedback.
