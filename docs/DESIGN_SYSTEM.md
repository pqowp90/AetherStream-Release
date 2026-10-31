# AetherStream Design System: Neo-Brutalist & Swiss Minimalist Theme
**Version:** 3.0.0 (Linear / Teenage Engineering / Vercel Aesthetic Overhaul)  
**Directive:** Executive Direct Command  
**Aesthetic Core:** 100% Flat Solid Monochrome, 0px Radius, Zero Gradients, Zero Shadows, Swiss Monospace Telemetry  

> [!IMPORTANT]
> **Executive Visual Confirmation Protocol (대표님 전사 불변 지침: 아트팀 상시 비주얼 컨펌 의무화 SOP)**
> 
> **대표님 최고 우선순위 지침:** *"아트팀은 항상 비주얼적인걸 만들어와서 나에게 컨펌받도록"*
> 
> 1. **No Text-Only Deliverables:** 아트/디자인팀이 수행하는 모든 UI, 브랜딩, 컴포넌트, 아이콘, 테마 작업은 줄글이나 텍스트 설명만으로 끝내서는 절대 안 됩니다.
> 2. **Interactive Visual Deliverable Mandatory (100% 필수):** 화면에서 직접 눈으로 보고 클릭/터치하며 검증할 수 있는 **[인터랙티브 비주얼 위젯 / 실시간 HTML 프리뷰 / 벡터 SVG 시안]**을 무조건 100% 필수 제작하여 대표님께 직속 컨펌을 요청해야 합니다.
> 3. **Strict Approval Gate:** 대표님의 최종 컨펌("승인")이 떨어지기 전까지는 임의로 프로덕션에 확정하지 않습니다.
> 4. **Permanent Core Rule:** 본 규정은 아트/디자인팀의 불변 제1 행동 수칙으로 영구 저장 및 준수됩니다.

---

## 1. Brand Identity & Design Philosophy

AetherStream's visual design embraces **Pure High-End Neo-Brutalism & Swiss Technical Minimalism** (inspired by Linear, Teenage Engineering, and Vercel):

1. **Zero Gradients (100% Flat Solid):**
   - No `linear-gradient`, no `radial-gradient`, no color ramps.
   - All backgrounds and accents are flat solid fills (`#000000`, `#0A0A0A`, `#111111`, `#FFFFFF`).
2. **Zero Skeuomorphism / Zero Metal Textures:**
   - No brushed metal, no faux chrome, no specular highlights, no glossy materials.
   - Pure structural clarity with 1px hairline borders (`#222222`).
3. **100% Sharp Rectangular Geometry (0px Border Radius):**
   - Absolute elimination of bulbous corners, circular bubbles, or pill shapes.
   - Strict `0px` rectangular framing across buttons, cards, dialogs,HUD elements, and joysticks.
4. **Zero Shadows / Inverted Tactility:**
   - Drop shadows and neon glows are completely eradicated.
   - Interactive feedback uses high-contrast monochrome inversion (idle: black surface with white border -> active press: pure solid white background with pure black text).
5. **Ghost Mode (Zero Stream Occlusion):**
   - In-game overlays default to **35% resting transparency**, allowing the stream content to remain 100% visible.
   - Component dimensions have been reduced by over 30% for a hyper-compact footprint.

```
┌─────────────────────────────────────────────────────────────┐
│          SWISS TECHNICAL MINIMALISM & NEO-BRUTALISM         │
└─────────────────────────────────────────────────────────────┘
                │                             │
   ┌────────────┴────────────┐   ┌────────────┴────────────┐
   │ 100% Flat Monochrome    │   │ 0px Sharp Ghost HUD     │
   │ - #000000 Pure Black    │   │ - 30%+ Scaled Reduction │
   │ - #0A0A0A Surface Black │   │ - 35% Resting Opacity   │
   │ - #222222 1px Hairline  │   │ - 0px Strict Rectangles │
   │ - #FFFFFF High Contrast │   │ - Inverted Key Presses  │
   └─────────────────────────┘   └─────────────────────────┘
```

---

## 2. Color Palette & Semantic Tokens

### 2.1 Flat Solid Monochrome Palette

| Token Name | Hex Code | RGB | Role & Application |
| :--- | :--- | :--- | :--- |
| **Pure Black (Canvas)** | `#000000` | `rgb(0, 0, 0)` | Deepest OLED background, letterbox fill |
| **Surface Black** | `#0A0A0A` | `rgb(10, 10, 10)` | Card, modal, and panel background |
| **Elevated Black** | `#111111` | `rgb(17, 17, 17)` | Input fields, telemetry metric cells |
| **Hairline Border** | `#222222` | `rgb(34, 34, 34)` | 1.0px hairline structural separators |
| **Active Border** | `#444444` | `rgb(68, 68, 68)` | Subtle border emphasis, inactive switches |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)`| Primary text, focused borders, active keys |
| **Text Secondary** | `#888888` | `rgb(136, 136, 136)`| Monospace telemetry labels, secondary units |
| **Text Dim** | `#444444` | `rgb(68, 68, 68)` | Footnotes, disabled captions, chart baselines |

### 2.2 Telemetry Latency Scale (Monochrome Contrast)

| Latency Tier | Threshold | Token Name | Hex Code | Visual Style |
| :--- | :--- | :--- | :--- | :--- |
| **Ultra Sub-5ms** | `< 5.0ms` | `latencyOptimal` | `#FFFFFF` | Solid Pure White 4x4 indicator |
| **Good / Fast** | `5.0ms - 15.0ms` | `latencyGood` | `#CCCCCC` | Solid Light Gray indicator |
| **Normal** | `15.1ms - 30.0ms` | `latencyNormal` | `#888888` | Solid Medium Gray indicator |
| **Degraded** | `> 30.0ms` | `latencyCritical` | `#FFFFFF` | High-contrast inverted block |

---

## 3. Official Logo Specifications & Concepts

### 3.1 Officially Approved Logo: "01. Linear Monogram"
The CEO officially approved **Concept 1: The Linear Monogram 'A'** as the official brandmark for AetherStream.

- **Philosophy:** A monolithic, architectural chevron monogram 'A' bisected by an ultra-fast zero-latency data slit. Uncompromising 2D flat white geometry on deep black.
- **Aesthetic:** 0% Gradient, 0% Metal, 0% Shadow. 100% Solid Flat White Vector.
- **Production Assets Generated:**
  - `assets/logo.svg`
  - `website/logo.svg` & `website/favicon.svg`
  - `client-ios/AetherStream/Sources/Views/AetherLogo.swift`
  - `client-android/app/src/main/res/drawable/ic_aether_logo.xml`

```
           ▲
          / \
         /   \
        / / \ \
       / /   \ \
      / /=====\ \   <-- Precision Zero-Latency Slit
     /_/       \_\
```

### 3.2 Logo Concepts Evaluation Matrix

| Concept | Visual Motif | Geometry & Grid | Primary Applications |
| :--- | :--- | :--- | :--- |
| **01. Linear Monogram (Approved)** | Architectural Twin Chevron 'A' with Data Slit | 45-degree chamfers, 64x64 modular Swiss grid | App Icon, Launch Screen, GitHub Badge, Header |
| **02. Mechanical Linkage** | Rectilinear Cam & Dual Piston Crankshaft | Hard 90-degree industrial transmission | Desktop Client System Tray, Settings Hardware tab |
| **03. Packet Shard Node** | Hard Diamond Shard with 0ms Transit Crosshair | Strict 60-degree rhombus and 1px hairline cuts | Telemetry HUD watermark, Network Diagnostics |
| **04. Stealth Minimal Glyph** | Dual Inverted Brackets `[ // ]` | 1:1 Aspect ratio, Steam Deck rear laser-etch style | In-game micro watermark, Controller center logo |

---

## 4. Component Architectural Standards

### 4.1 In-Game Virtual Controls (GamepadSkin)
- **Geometry:** 100% 0px sharp rectangular frames (`Rectangle()`).
- **Touch Inversion:** Resting state = solid `#111111` with `#222222` border; Pressed state = solid `#FFFFFF` with `#000000` text.
- **Ghost Opacity:** `0.35` idle resting, ramping to `0.85` on active interaction.
- **Footprint:** Scaled down by >30% (Joystick: 42pt radius, Thumbpad: 16pt; ABXY Cluster: 34pt radius, Button: 28pt square).

### 4.2 Telemetry HUD (PerformanceHUD)
- **Layout:** Hyper-compact capsule and dashboard with 1px hairline dividers.
- **Sparkline:** Flat 1.0px hairline line, zero background gradient fill, 1px baseline.
- **Fonts:** SF Mono / JetBrains Mono bold gauges with muted labels.

### 4.3 Web & Android Alignment
- All CSS variables in `website/style.css` mapped to pure `#000000` and `#FFFFFF`.
- Android Jetpack Compose in `CyberTheme` and `CyberComponents.kt` use `RectangleShape` and flat solid color schemes.
