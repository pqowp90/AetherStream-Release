/**
 * zerodoc AetherStream - Complete Professional i18n Translation Engine
 * 5 Top Global Gaming Market Languages:
 *   - ko: 한국어 (Korean)
 *   - en: English (Global)
 *   - ja: 日本語 (Japanese)
 *   - zh: 简体中文 (Simplified Chinese)
 *   - es: Español (Spanish)
 * 100% Brand Compliant: Strict Zero-Mention of Competitor Trademarks
 */

const translations = {
  ko: {
    // Nav
    "nav.brand_sub": "초저지연 원격 스트리밍",
    "nav.pillars": "핵심 전략",
    "nav.lab": "지연시간 랩",
    "nav.architecture": "아키텍처",
    "nav.downloads": "다운로드",
    "nav.guide": "공식 가이드",
    "nav.relay_active": "글로벌 릴레이 활성화",

    // Hero
    "hero.version": "v0.1.0 Alpha",
    "hero.badge": "초저지연 120Hz/144Hz 원격 스트리밍 엔진",
    "hero.title": "내 PC 그대로,<br><span style='color:#FFFFFF;'>모바일에서 120Hz · 144Hz 초저지연으로.</span>",
    "hero.lead": "독자적 DXGI VRAM 직접 캡처와 NVENC CBR, Apple Metal 3 및 Android NDK 하드웨어 가속으로 모바일에서 끊김 없는 120Hz · 144Hz 초저지연 게이밍을 즐기세요.",
    "hero.btn_win": "Windows 호스트 다운로드 (.exe)",
    "hero.btn_win_meta": "v0.1.0 Alpha · Win 10/11 x64",
    "hero.btn_room": "6자리 룸코드 빠른 접속",
    "hero.btn_room_meta": "초저지연 P2P 직결",

    // Spec Grid
    "spec.1.label": "GPU VRAM 캡처",
    "spec.2.label": "다중 플랫폼 주사율",
    "spec.3.label": "인코더 파이프라인",
    "spec.4.label": "종단간 지연시간",

    // Monitor HUD
    "hud.ping": "종단간 지연",
    "hud.fps": "동기화 주사율",
    "hud.bitrate": "비트레이트",
    "hud.loss": "패킷 손실",
    "hud.jitter": "프레임 페이싱 지터:",

    // Pillars
    "pillar.tag": "[ CORE STRATEGIC PILLARS ]",
    "pillar.title": "타협 없는 하이엔드 엔지니어링 4대 핵심 전략",
    "pillar.lead": "기존 상용 솔루션의 고질적인 프레임 페이싱 결함과 레이턴시 한계를 극복하기 위해 설계된 독자 파이프라인.",
    "pillar.1.title": "120Hz / 144Hz 하드웨어 주사율 완벽 동기화",
    "pillar.1.desc": "디스플레이 주사율과 V-Sync 하드웨어 클록을 마이크로초 단위로 일치시켜 프레임 드랍과 티어링 현상을 원천 방지합니다.",
    "pillar.2.title": "DXGI 1.2+ VRAM 제로카피 직접 파이프라인",
    "pillar.2.desc": "CPU 시스템 메모리 복사 단계(RAM Copy)를 완전히 제거하고 GPU VRAM 내부에서 NVENC 하드웨어 인코더로 직결합니다.",
    "pillar.3.title": "Apple Pencil Pro 4096레벨 필압 & 틸트",
    "pillar.3.desc": "고가의 전문 액정 타블렛을 대체하는 정밀 입력 파이프라인. 압력, 각도 감도, 호버링 데이터를 무지연 전송합니다.",
    "pillar.4.title": "4인 로컬 코옵 가상 게임패드 (ViGEmBus)",
    "pillar.4.desc": "추가 동글 없이 모바일 기기를 최대 4대의 가상 Xbox 360 게임패드로 PC에 즉시 마운트하여 협동 플레이를 지원합니다.",

    // Latency Lab & Visual Comparison
    "lab.tag": "[ HARDWARE LATENCY LAB & ARCHITECTURE ]",
    "lab.title": "실시간 종단간 지연시간 및 파이프라인 분석",
    "lab.lead": "캡처, 인코딩, 네트워크 패킷팅, 디코딩, 디스플레이 렌더링에 이르는 전 과정 실측 데이터.",
    "pipeline.title": "ZERODOC ZERO-COPY HARDWARE PIPELINE",
    "pipeline.target": "SUB-10MS END-TO-END TARGET",

    // Latency Simulator Controls
    "sim.controls_title": "환경별 시뮬레이션 파라미터",
    "sim.lbl_net": "네트워크 연결 환경",
    "sim.net_lan": "초고속 Wi-Fi 6 (LAN)",
    "sim.net_5g": "5G 모바일 네트워크",
    "sim.net_wan": "광대역 원격 인터넷 (WAN)",
    "sim.lbl_codec": "하드웨어 가속 코덱",
    "sim.lbl_fps": "디스플레이 주사율 동기화",
    "sim.results_tag": "[ 실측 종단간 지연시간 ]",
    "sim.bd_cap": "DXGI 1.2+ VRAM 프레임 캡처",
    "sim.bd_enc": "NVENC 하드웨어 CBR 인코딩",
    "sim.bd_net": "UDP 전송 & FEC 에러 복구",
    "sim.bd_dec": "VideoToolbox / MediaCodec NDK 디코딩",
    "sim.bd_ren": "Metal 3 / Vulkan 하드웨어 V-Sync 렌더링",

    // Reflex Tester
    "reflex.badge": "[ HUMAN VS AETHERSTREAM ]",
    "reflex.title": "인간 시각 반응속도 실측 테스트",
    "reflex.desc": "초록색 신호가 켜지는 즉시 버튼을 탭하여 지연시간과 비교하세요.",
    "reflex.btn_idle": "⚡ 반응속도 측정 시작",
    "reflex.btn_waiting": "⏳ 대기... 초록색으로 변할 때 탭!",
    "reflex.btn_primed": "⚡ 지금 탭하세요! (TAP NOW!)",
    "reflex.btn_premature": "⚡ 너무 빨랐습니다! 다시 시도",
    "reflex.btn_again": "⚡ 다시 테스트하기",
    "reflex.card_placeholder": "준비 완료 · 버튼을 눌러 측정을 시작하세요",
    "reflex.status_priming": "센서 반응 대기 중... (초록색이 켜질 때 즉시 탭하세요)",
    "reflex.err_premature": "<strong>너무 빨랐습니다!</strong> 초록색이 켜진 후 탭하세요.",
    "reflex.result_template": "당신의 반응속도: <strong>{time}ms</strong> | AetherStream 지연시간: <strong>8.8ms</strong> (인간 반응속도보다 20배 이상 빠릅니다)",

    // Downloads
    "dl.tag": "[ MULTI-PLATFORM ECOSYSTEM ]",
    "dl.title": "전 플랫폼 네이티브 클라이언트 다운로드",
    "dl.lead": "Windows 게이밍 호스트와 모든 스마트폰, 태블릿을 연결하는 통합 에코시스템.",
    "dl.win_title": "Windows 호스트 엔진",
    "dl.win_desc": "DXGI 1.2+ VRAM 캡처와 NVENC CBR 초저지연 스트리밍 서버.",
    "dl.win_btn": "Windows 호스트 다운로드 (.exe)",
    "dl.android_title": "Android 네이티브 클라이언트",
    "dl.android_desc": "Jetpack Compose & MediaCodec NDK 가속 144Hz 지원 클라이언트.",
    "dl.android_btn": "Android APK 다운로드 (.apk)",
    "dl.ios_title": "iOS & iPadOS 클라이언트",
    "dl.ios_desc": "Apple VideoToolbox & Metal 3 120Hz ProMotion 렌더러.",
    "dl.ios_btn": "iOS 빌드 가이드 & 소스코드",

    // Footer
    "footer.rights": "주식회사 제로독 (zerodoc Inc.) · AetherStream All Rights Reserved."
  },

  en: {
    // Nav
    "nav.brand_sub": "Ultra-Low Latency Remote Streaming",
    "nav.pillars": "Core Strategy",
    "nav.lab": "Latency Lab",
    "nav.architecture": "Architecture",
    "nav.downloads": "Downloads",
    "nav.guide": "User Guide",
    "nav.relay_active": "GLOBAL RELAYS ACTIVE",

    // Hero
    "hero.version": "v0.1.0 Alpha",
    "hero.badge": "Ultra-Low Latency 120Hz/144Hz Remote Streaming Engine",
    "hero.title": "Your PC, Everywhere.<br><span style='color:#FFFFFF;'>At 120Hz · 144Hz Ultra-Low Latency.</span>",
    "hero.lead": "Proprietary DXGI Direct VRAM capture, NVENC CBR, Apple Metal 3, and Android NDK hardware acceleration enable tear-free 120Hz/144Hz ultra-low latency gaming anywhere.",
    "hero.btn_win": "Download Windows Host (.exe)",
    "hero.btn_win_meta": "v0.1.0 Alpha · Win 10/11 x64",
    "hero.btn_room": "Quick Connect via Room Code",
    "hero.btn_room_meta": "Instant Direct P2P Link",

    // Spec Grid
    "spec.1.label": "GPU VRAM Capture",
    "spec.2.label": "Display Refresh",
    "spec.3.label": "Hardware Encoder",
    "spec.4.label": "End-to-End Latency",

    // Monitor HUD
    "hud.ping": "End-to-End",
    "hud.fps": "Sync Refresh",
    "hud.bitrate": "Bitrate",
    "hud.loss": "Packet Loss",
    "hud.jitter": "Frame Pacing Jitter:",

    // Pillars
    "pillar.tag": "[ CORE STRATEGIC PILLARS ]",
    "pillar.title": "Four Pillars of Uncompromising High-End Engineering",
    "pillar.lead": "A purpose-built proprietary pipeline engineered to overcome conventional remote desktop pacing defects and latency ceilings.",
    "pillar.1.title": "120Hz / 144Hz Hardware Refresh Synchronization",
    "pillar.1.desc": "Microsecond-level alignment between display refresh rates and hardware V-Sync clocks eliminates frame pacing stutter and screen tearing.",
    "pillar.2.title": "DXGI 1.2+ VRAM Zero-Copy Direct Pipeline",
    "pillar.2.desc": "Eliminates intermediate CPU RAM copies entirely, feeding frames directly from GPU VRAM straight into the NVENC hardware encoder.",
    "pillar.3.title": "Apple Pencil Pro 4096-Level Pressure & Tilt",
    "pillar.3.desc": "Turns iPads into high-end graphics drawing tablets with deterministic pressure curve, tilt tracking, and hover detection.",
    "pillar.4.title": "4-Player Local Co-op Virtual Gamepad (ViGEmBus)",
    "pillar.4.desc": "Mounts mobile devices as up to 4 virtual Xbox 360 controllers with zero dongles for seamless local party multiplayer.",

    // Latency Lab & Visual Comparison
    "lab.tag": "[ HARDWARE LATENCY LAB & ARCHITECTURE ]",
    "lab.title": "Real-Time End-to-End Latency & Pipeline Analysis",
    "lab.lead": "Audited real-world telemetry across GPU capture, encoding, packet transit, decoding, and display rendering.",
    "pipeline.title": "ZERODOC ZERO-COPY HARDWARE PIPELINE",
    "pipeline.target": "SUB-10MS END-TO-END TARGET",

    // Latency Simulator Controls
    "sim.controls_title": "Environment Simulation Parameters",
    "sim.lbl_net": "Network Environment",
    "sim.net_lan": "Ultra-Fast Wi-Fi 6 (LAN)",
    "sim.net_5g": "5G Cellular Network",
    "sim.net_wan": "Broadband Internet (WAN)",
    "sim.lbl_codec": "Hardware Acceleration Codec",
    "sim.lbl_fps": "Display Refresh Negotiation",
    "sim.results_tag": "[ AUDITED END-TO-END LATENCY ]",
    "sim.bd_cap": "DXGI 1.2+ VRAM Direct Capture",
    "sim.bd_enc": "NVENC Hardware CBR Encoding",
    "sim.bd_net": "UDP Transit & FEC Error Recovery",
    "sim.bd_dec": "VideoToolbox / MediaCodec NDK Decode",
    "sim.bd_ren": "Metal 3 / Vulkan Hardware V-Sync Render",

    // Reflex Tester
    "reflex.badge": "[ HUMAN VS AETHERSTREAM ]",
    "reflex.title": "Human Visual Reflex Tester",
    "reflex.desc": "Tap the button as fast as you can when the signal turns green to compare against stream latency.",
    "reflex.btn_idle": "⚡ Start Reaction Test",
    "reflex.btn_waiting": "⏳ Wait... Tap when Green!",
    "reflex.btn_primed": "⚡ TAP NOW!",
    "reflex.btn_premature": "⚡ Too Early! Try Again",
    "reflex.btn_again": "⚡ Test Again",
    "reflex.card_placeholder": "Ready · Tap the button to start test",
    "reflex.status_priming": "Sensor priming... (Tap immediately when button turns green)",
    "reflex.err_premature": "<strong>Too fast!</strong> Wait until the button turns green.",
    "reflex.result_template": "Your reaction speed: <strong>{time}ms</strong> | AetherStream latency: <strong>8.8ms</strong> (>20x faster than human perception)",

    // Downloads
    "dl.tag": "[ MULTI-PLATFORM ECOSYSTEM ]",
    "dl.title": "Download Native Clients Across Platforms",
    "dl.lead": "An integrated zero-latency ecosystem connecting Windows host rigs to all smartphones and tablets.",
    "dl.win_title": "Windows Host Engine",
    "dl.win_desc": "Ultra-low latency streaming host engine with DXGI 1.2+ VRAM capture and NVENC CBR.",
    "dl.win_btn": "Download Windows Host (.exe)",
    "dl.android_title": "Android Native Client",
    "dl.android_desc": "Native 144Hz client powered by Jetpack Compose and MediaCodec NDK hardware decoding.",
    "dl.android_btn": "Download Android APK (.apk)",
    "dl.ios_title": "iOS & iPadOS Client",
    "dl.ios_desc": "Apple VideoToolbox zero-copy decoding and Metal 3 120Hz ProMotion renderer.",
    "dl.ios_btn": "iOS Build Guide & Source Code",

    // Footer
    "footer.rights": "zerodoc Inc. · AetherStream All Rights Reserved."
  },

  ja: {
    // Nav
    "nav.brand_sub": "超低遅延リモートストリーミング",
    "nav.pillars": "コア戦略",
    "nav.lab": "遅延ラボ",
    "nav.architecture": "アーキテクチャ",
    "nav.downloads": "ダウンロード",
    "nav.guide": "公式ガイド",
    "nav.relay_active": "グローバルリレー稼働中",

    // Hero
    "hero.version": "v0.1.0 Alpha",
    "hero.badge": "超低遅延 120Hz/144Hz リモートゲーミングエンジン",
    "hero.title": "自宅のPCをそのまま、<br><span style='color:#FFFFFF;'>モバイルで120Hz · 144Hz 超低遅延で。</span>",
    "hero.lead": "独自DXGI VRAM直接キャプチャとNVENC CBR、Apple Metal 3およびAndroid NDKハードウェアアクセラレーションにより、どこでも滑らかな120Hz/144Hzゲーミングを実現します。",
    "hero.btn_win": "Windowsホストをダウンロード (.exe)",
    "hero.btn_win_meta": "v0.1.0 Alpha · Win 10/11 x64",
    "hero.btn_room": "6桁ルームコード高速接続",
    "hero.btn_room_meta": "超低遅延 P2P直結",

    // Spec Grid
    "spec.1.label": "GPU VRAM キャプチャ",
    "spec.2.label": "マルチプラットフォーム周波数",
    "spec.3.label": "エンコーダ管線",
    "spec.4.label": "エンドツーエンド遅延",

    // Monitor HUD
    "hud.ping": "総合遅延",
    "hud.fps": "同期周波数",
    "hud.bitrate": "ビットレート",
    "hud.loss": "パケット損失",
    "hud.jitter": "フレームジッター:",

    // Pillars
    "pillar.tag": "[ CORE STRATEGIC PILLARS ]",
    "pillar.title": "妥協のないハイエンドエンジニアリング4大コア戦略",
    "pillar.lead": "従来の商用ソリューションにおけるフレームペーシング不良と遅延限界を打破するために設計された独自パイプライン。",
    "pillar.1.title": "120Hz / 144Hz ハードウェア同期による滑らかな描画",
    "pillar.1.desc": "ディスプレイのリフレッシュレートとV-Syncクロックをマイクロ秒単位で同期し、カクつきやテアリングを根本から防ぎます。",
    "pillar.2.title": "DXGI 1.2+ VRAM ゼロコピー直接パイプライン",
    "pillar.2.desc": "CPUメモリ経由のコピーを全廃し、GPU VRAMからNVENCハードウェアエンコーダへ直結して超低遅延を実現します。",
    "pillar.3.title": "Apple Pencil Pro 4096段階筆圧＆傾き検知",
    "pillar.3.desc": "高価なプロ向け液晶タブレットを代替する高精度パイプライン。筆圧、傾き、ホバー操作をミリ秒未満で伝送します。",
    "pillar.4.title": "4人ローカルマルチプレイ仮想ゲームパッド (ViGEmBus)",
    "pillar.4.desc": "追加ドングルなしでスマホやタブレットを最大4台の仮想Xbox 360コントローラーとして認識させ、協力プレイを即座に支援します。",

    // Latency Lab & Visual Comparison
    "lab.tag": "[ HARDWARE LATENCY LAB & ARCHITECTURE ]",
    "lab.title": "リアルタイム遅延・パイプライン分析ラボ",
    "lab.lead": "キャプチャ、エンコード、ネットワーク伝送、デコード、画面表示に至る全工程の実測データ。",
    "pipeline.title": "ZERODOC ZERO-COPY HARDWARE PIPELINE",
    "pipeline.target": "SUB-10MS END-TO-END TARGET",

    // Latency Simulator Controls
    "sim.controls_title": "環境別シミュレーションパラメータ",
    "sim.lbl_net": "ネットワーク接続環境",
    "sim.net_lan": "超高速 Wi-Fi 6 (LAN)",
    "sim.net_5g": "5G モバイルネットワーク",
    "sim.net_wan": "広域インターネット (WAN)",
    "sim.lbl_codec": "ハードウェアアクセラレーションコーデック",
    "sim.lbl_fps": "ディスプレイ同期リフレッシュレート",
    "sim.results_tag": "[ 実測総合遅延時間 ]",
    "sim.bd_cap": "DXGI 1.2+ VRAM フレームキャプチャ",
    "sim.bd_enc": "NVENC ハードウェア CBR エンコード",
    "sim.bd_net": "UDP伝送 & FECエラー復元",
    "sim.bd_dec": "VideoToolbox / MediaCodec NDK デコード",
    "sim.bd_ren": "Metal 3 / Vulkan ハードウェア V-Sync 描画",

    // Reflex Tester
    "reflex.badge": "[ HUMAN VS AETHERSTREAM ]",
    "reflex.title": "人間の視覚反応速度測定テスト",
    "reflex.desc": "緑のシグナルが点灯したら即座にボタンをタップして遅延時間と比較してください。",
    "reflex.btn_idle": "⚡ 反応速度テスト開始",
    "reflex.btn_waiting": "⏳ 待機中... 緑に変わったらタップ！",
    "reflex.btn_primed": "⚡ 今すぐタップ！(TAP NOW!)",
    "reflex.btn_premature": "⚡ 早すぎました！やり直してください",
    "reflex.btn_again": "⚡ もう一度テスト",
    "reflex.card_placeholder": "準備完了 · ボタンを押してテストを開始してください",
    "reflex.status_priming": "センサー待機中...（緑色に点灯したら即座にタップしてください）",
    "reflex.err_premature": "<strong>早すぎました！</strong> 緑色に変わった後にタップしてください。",
    "reflex.result_template": "あなたの反応速度: <strong>{time}ms</strong> | AetherStream遅延: <strong>8.8ms</strong>（人間の反応速度より20倍以上高速です）",

    // Downloads
    "dl.tag": "[ MULTI-PLATFORM ECOSYSTEM ]",
    "dl.title": "全プラットフォーム ネイティブクライアント ダウンロード",
    "dl.lead": "Windowsゲーミングホストとすべてのスマートフォン、タブレットを繋ぐ統合エコシステム。",
    "dl.win_title": "Windowsホストエンジン",
    "dl.win_desc": "DXGI 1.2+ VRAMキャプチャとNVENC CBR超低遅延ストリーミングサーバー。",
    "dl.win_btn": "Windowsホストをダウンロード (.exe)",
    "dl.android_title": "Androidネイティブクライアント",
    "dl.android_desc": "Jetpack Compose & MediaCodec NDKアクセラレーションによる144Hz対応クライアント。",
    "dl.android_btn": "Android APKをダウンロード (.apk)",
    "dl.ios_title": "iOS & iPadOS クライアント",
    "dl.ios_desc": "Apple VideoToolboxゼロコピーデコードとMetal 3 120Hz ProMotionレンダラー。",
    "dl.ios_btn": "iOSビルドガイド＆ソースコード",

    // Footer
    "footer.rights": "株式会社ゼロドック (zerodoc Inc.) · AetherStream All Rights Reserved."
  },

  zh: {
    // Nav
    "nav.brand_sub": "超低延迟远程串流",
    "nav.pillars": "核心策略",
    "nav.lab": "延迟实验室",
    "nav.architecture": "系统架构",
    "nav.downloads": "客户端下载",
    "nav.guide": "用户指南",
    "nav.relay_active": "全球中继节点运行中",

    // Hero
    "hero.version": "v0.1.0 Alpha",
    "hero.badge": "超低延迟 120Hz/144Hz 远程游戏引擎",
    "hero.title": "电脑画质原汁原味，<br><span style='color:#FFFFFF;'>移动端 120Hz · 144Hz 超低延迟畅玩。</span>",
    "hero.lead": "独创 DXGI 显存直接捕获与 NVENC CBR 编码，结合 Apple Metal 3 及 Android NDK 硬件加速，随时随地享受丝滑 120Hz/144Hz 超低延迟体验。",
    "hero.btn_win": "下载 Windows 主机端 (.exe)",
    "hero.btn_win_meta": "v0.1.0 Alpha · Win 10/11 x64",
    "hero.btn_room": "6位房间码极速连接",
    "hero.btn_room_meta": "超低延迟 P2P 直连",

    // Spec Grid
    "spec.1.label": "GPU 显存直接捕获",
    "spec.2.label": "多平台超高刷新率",
    "spec.3.label": "硬件编码管线",
    "spec.4.label": "端到端综合延迟",

    // Monitor HUD
    "hud.ping": "综合延迟",
    "hud.fps": "同步刷新率",
    "hud.bitrate": "实时码率",
    "hud.loss": "丢包率",
    "hud.jitter": "帧抖动偏差:",

    // Pillars
    "pillar.tag": "[ CORE STRATEGIC PILLARS ]",
    "pillar.title": "不妥协的高端工程四大核心技术支柱",
    "pillar.lead": "彻底突破传统通用远程桌面由于帧步调失调与高延迟瓶颈而设立的自研专有管线。",
    "pillar.1.title": "120Hz / 144Hz 硬件级刷新率无缝同步",
    "pillar.1.desc": "微秒级对齐屏幕刷新率与垂直同步时钟信号，从根本上杜绝画面卡顿与画面撕裂现象。",
    "pillar.2.title": "DXGI 1.2+ 显存零拷贝直接传输管线",
    "pillar.2.desc": "彻底消灭 CPU 内存搬运环节，画面帧从 GPU 显存直通 NVENC 硬件编码器，实现极速处理。",
    "pillar.3.title": "Apple Pencil Pro 4096 级压感与倾斜角感知",
    "pillar.3.desc": "完美替代昂贵的专业数位屏。以亚毫秒级延迟精准捕获压感、倾斜角与悬停状态，助力数字艺术创作。",
    "pillar.4.title": "4人本地同屏虚拟手柄支持 (ViGEmBus)",
    "pillar.4.desc": "无需任何额外适配器，手机与平板即刻虚拟为多达 4 个 Xbox 360 手柄，畅玩本地同屏联机游戏。",

    // Latency Lab & Visual Comparison
    "lab.tag": "[ HARDWARE LATENCY LAB & ARCHITECTURE ]",
    "lab.title": "实时端到端延迟与全链路分析实验室",
    "lab.lead": "覆盖画面捕获、硬件编码、网络发包、客户端解码到显示渲染全流程的实测数据。",
    "pipeline.title": "ZERODOC ZERO-COPY HARDWARE PIPELINE",
    "pipeline.target": "SUB-10MS END-TO-END TARGET",

    // Latency Simulator Controls
    "sim.controls_title": "多场景模拟参数调节",
    "sim.lbl_net": "网络连接场景",
    "sim.net_lan": "超高速 Wi-Fi 6 (局域网)",
    "sim.net_5g": "5G 移动蜂窝网络",
    "sim.net_wan": "广域宽带互联网 (外网)",
    "sim.lbl_codec": "硬件加速编解码器",
    "sim.lbl_fps": "显示设备刷新率同步",
    "sim.results_tag": "[ 实测端到端综合延迟 ]",
    "sim.bd_cap": "DXGI 1.2+ 显存帧捕获",
    "sim.bd_enc": "NVENC 硬件 CBR 极速编码",
    "sim.bd_net": "UDP 传输与 FEC 纠错恢复",
    "sim.bd_dec": "VideoToolbox / MediaCodec NDK 硬解",
    "sim.bd_ren": "Metal 3 / Vulkan 垂直同步渲染",

    // Reflex Tester
    "reflex.badge": "[ HUMAN VS AETHERSTREAM ]",
    "reflex.title": "人类视觉反应速度实测",
    "reflex.desc": "绿色信号灯亮起时请立即点击按钮，与串流延迟进行实时对比。",
    "reflex.btn_idle": "⚡ 开始反应速度测试",
    "reflex.btn_waiting": "⏳ 等待中... 变成绿色时立即点击！",
    "reflex.btn_primed": "⚡ 立即点击！(TAP NOW!)",
    "reflex.btn_premature": "⚡ 太快了！请重试",
    "reflex.btn_again": "⚡ 再次测试",
    "reflex.card_placeholder": "准备就绪 · 点击按钮开始测试",
    "reflex.status_priming": "传感器准备中...（变绿时请立即点击）",
    "reflex.err_premature": "<strong>太快了！</strong> 请在变绿后再点击。",
    "reflex.result_template": "您的反应速度: <strong>{time}ms</strong> | AetherStream 延迟: <strong>8.8ms</strong>（比人类反应速度快20倍以上）",

    // Downloads
    "dl.tag": "[ MULTI-PLATFORM ECOSYSTEM ]",
    "dl.title": "多平台原生客户端下载",
    "dl.lead": "连接高性能 Windows 主机与智能手机、平板电脑的统一生态系统。",
    "dl.win_title": "Windows 主机端引擎",
    "dl.win_desc": "配备 DXGI 1.2+ 显存直接捕获与 NVENC CBR 超低延迟串流引擎。",
    "dl.win_btn": "下载 Windows 主机端 (.exe)",
    "dl.android_title": "Android 原生客户端",
    "dl.android_desc": "基于 Jetpack Compose 与 MediaCodec NDK 打造的 144Hz 原生客户端。",
    "dl.android_btn": "下载 Android APK (.apk)",
    "dl.ios_title": "iOS & iPadOS 客户端",
    "dl.ios_desc": "基于 Apple VideoToolbox 零拷贝解码与 Metal 3 120Hz ProMotion 渲染引擎。",
    "dl.ios_btn": "iOS 源码与构建指南",

    // Footer
    "footer.rights": "株式会社零狗 (zerodoc Inc.) · AetherStream All Rights Reserved."
  },

  es: {
    // Nav
    "nav.brand_sub": "Streaming Remoto de Latencia Ultrabaja",
    "nav.pillars": "Pilares Clave",
    "nav.lab": "Laboratorio de Latencia",
    "nav.architecture": "Arquitectura",
    "nav.downloads": "Descargas",
    "nav.guide": "Manual Oficial",
    "nav.relay_active": "RELÉS GLOBALES ACTIVOS",

    // Hero
    "hero.version": "v0.1.0 Alpha",
    "hero.badge": "Motor de Streaming Remoto a 120Hz/144Hz de Latencia Ultrabaja",
    "hero.title": "Tu PC en todas partes.<br><span style='color:#FFFFFF;'>A 120Hz · 144Hz con Latencia Ultrabaja.</span>",
    "hero.lead": "Captura directa DXGI VRAM, codificación NVENC CBR, Apple Metal 3 y aceleración Android NDK para disfrutar de juegos a 120Hz/144Hz sin interrupciones en cualquier lugar.",
    "hero.btn_win": "Descargar Servidor Windows (.exe)",
    "hero.btn_win_meta": "v0.1.0 Alpha · Win 10/11 x64",
    "hero.btn_room": "Conexión Rápida por Código de Sala",
    "hero.btn_room_meta": "Enlace Directo P2P Instantáneo",

    // Spec Grid
    "spec.1.label": "Captura GPU VRAM",
    "spec.2.label": "Frecuencia de Pantalla",
    "spec.3.label": "Codificador por Hardware",
    "spec.4.label": "Latencia Extremo a Extremo",

    // Monitor HUD
    "hud.ping": "Latencia Total",
    "hud.fps": "Frecuencia Sincronizada",
    "hud.bitrate": "Tasa de Bits",
    "hud.loss": "Pérdida de Paquetes",
    "hud.jitter": "Jitter de Cuadro:",

    // Pillars
    "pillar.tag": "[ CORE STRATEGIC PILLARS ]",
    "pillar.title": "Cuatro Pilares de Ingeniería de Alto Rendimiento Sin Concesiones",
    "pillar.lead": "Una arquitectura propietaria diseñada para superar los defectos de ritmo de fotogramas y la alta latencia de las soluciones remotas convencionales.",
    "pillar.1.title": "Sincronización de Refresco por Hardware a 120Hz / 144Hz",
    "pillar.1.desc": "La sincronización a nivel de microsegundos con el reloj V-Sync elimina por completo el tartamudeo de fotogramas y el desgarro de pantalla.",
    "pillar.2.title": "Pipeline Directo de Copia Cero DXGI 1.2+ VRAM",
    "pillar.2.desc": "Elimina las copias intermedias en la memoria RAM de la CPU, enviando fotogramas directamente de la VRAM al codificador NVENC.",
    "pillar.3.title": "Apple Pencil Pro con 4096 Niveles de Presión e Inclinación",
    "pillar.3.desc": "Convierte tu iPad en una tableta gráfica profesional de alta gama con latencia sub-milisegundo y seguimiento continuo de inclinación.",
    "pillar.4.title": "Mando Virtual Local para 4 Jugadores (ViGEmBus)",
    "pillar.4.desc": "Monta dispositivos móviles como hasta 4 mandos Xbox 360 virtuales en tu PC sin adaptadores para juego cooperativo instantáneo.",

    // Latency Lab & Visual Comparison
    "lab.tag": "[ HARDWARE LATENCY LAB & ARCHITECTURE ]",
    "lab.title": "Análisis de Latencia Extremo a Extremo en Tiempo Real",
    "lab.lead": "Telemetría real auditada en captura de GPU, codificación, tránsito de red, decodificación y renderizado.",
    "pipeline.title": "ZERODOC ZERO-COPY HARDWARE PIPELINE",
    "pipeline.target": "SUB-10MS END-TO-END TARGET",

    // Latency Simulator Controls
    "sim.controls_title": "Parámetros de Simulación por Entorno",
    "sim.lbl_net": "Entorno de Red",
    "sim.net_lan": "Wi-Fi 6 de Alta Velocidad (LAN)",
    "sim.net_5g": "Red Celular 5G",
    "sim.net_wan": "Internet de Banda Ancha (WAN)",
    "sim.lbl_codec": "Códec de Aceleración por Hardware",
    "sim.lbl_fps": "Sincronización de Refresco de Pantalla",
    "sim.results_tag": "[ LATENCIA EXTREMO A EXTREMO AUDITADA ]",
    "sim.bd_cap": "Captura Directa DXGI 1.2+ VRAM",
    "sim.bd_enc": "Codificación NVENC CBR por Hardware",
    "sim.bd_net": "Tránsito UDP y Recuperación FEC",
    "sim.bd_dec": "Decodificación VideoToolbox / MediaCodec NDK",
    "sim.bd_ren": "Renderizado V-Sync por Hardware Metal 3 / Vulkan",

    // Reflex Tester
    "reflex.badge": "[ HUMAN VS AETHERSTREAM ]",
    "reflex.title": "Test de Reflejos Visuales Humanos",
    "reflex.desc": "Toca el botón tan pronto como se ponga verde para comparar con la latencia del streaming.",
    "reflex.btn_idle": "⚡ Iniciar Test de Reacción",
    "reflex.btn_waiting": "⏳ Espera... ¡Toca cuando esté verde!",
    "reflex.btn_primed": "⚡ ¡TOCA AHORA!",
    "reflex.btn_premature": "⚡ ¡Demasiado pronto! Inténtalo de nuevo",
    "reflex.btn_again": "⚡ Probar de nuevo",
    "reflex.card_placeholder": "Listo · Toca el botón para iniciar",
    "reflex.status_priming": "Preparando sensor... (Toca en cuanto el botón se ponga verde)",
    "reflex.err_premature": "<strong>¡Demasiado rápido!</strong> Espera a que el botón se ponga verde.",
    "reflex.result_template": "Tu velocidad de reacción: <strong>{time}ms</strong> | Latencia de AetherStream: <strong>8.8ms</strong> (más de 20 veces más rápido que la percepción humana)",

    // Downloads
    "dl.tag": "[ MULTI-PLATFORM ECOSYSTEM ]",
    "dl.title": "Descarga Clientes Nativos para Cada Plataforma",
    "dl.lead": "Un ecosistema integrado que conecta tu equipo Windows a todos tus teléfonos y tabletas.",
    "dl.win_title": "Motor Servidor para Windows",
    "dl.win_desc": "Servidor de streaming con captura DXGI 1.2+ VRAM y codificación NVENC CBR.",
    "dl.win_btn": "Descargar Servidor Windows (.exe)",
    "dl.android_title": "Cliente Nativo para Android",
    "dl.android_desc": "Cliente nativo a 144Hz impulsado por Jetpack Compose y MediaCodec NDK.",
    "dl.android_btn": "Descargar APK para Android (.apk)",
    "dl.ios_title": "Cliente para iOS y iPadOS",
    "dl.ios_desc": "Decodificación copia cero Apple VideoToolbox y renderizador Metal 3 a 120Hz.",
    "dl.ios_btn": "Guía de Compilación iOS y Código Fuente",

    // Footer
    "footer.rights": "zerodoc Inc. · AetherStream Todos los derechos reservados."
  }
};

/**
 * Get active language or detect automatically from environment
 */
function getActiveLanguage() {
  const saved = localStorage.getItem('zerodoc_lang');
  if (saved && translations[saved]) {
    return saved;
  }

  // Multi-tier navigator language detection
  const navLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
  for (const l of navLangs) {
    const code = (l || '').toLowerCase();
    if (code.startsWith('ko')) return 'ko';
    if (code.startsWith('ja')) return 'ja';
    if (code.startsWith('zh')) return 'zh';
    if (code.startsWith('es')) return 'es';
  }

  return 'en';
}

/**
 * Apply Language dynamically in-place
 */
function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('zerodoc_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Sync Dropdown select box
  const select = document.getElementById('lang-select');
  if (select && select.value !== lang) {
    select.value = lang;
  }

  // Broadcast event for dynamic canvas/testers
  window.dispatchEvent(new CustomEvent('aetherLangChanged', { detail: { lang, dict } }));
}

/**
 * Initialize Dropdown Switcher and Language Engine
 */
function initI18nEngine() {
  const initialLang = getActiveLanguage();
  applyLanguage(initialLang);

  const select = document.getElementById('lang-select');
  if (select) {
    select.value = initialLang;
    select.addEventListener('change', (e) => {
      const newLang = e.target.value;
      applyLanguage(newLang);
    });
  }
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18nEngine);
} else {
  initI18nEngine();
}

// Global exposure
window.aetherI18n = {
  getLang: getActiveLanguage,
  setLang: applyLanguage,
  dict: translations
};
