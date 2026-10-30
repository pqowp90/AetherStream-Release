/**
 * AetherStream Official Brand Website & Interactive Systems
 * Version: 1.0.4
 * Architecture: Vanilla Modern ES6+ (Zero external bloat)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageDetection();
  initMatrixBackground();
  initHeroStreamCanvas();
  initSparklineTelemetry();
  initQuickJoinInputs();
  initLatencySimulator();
  initReflexTester();
  initPencilDrawingSandbox();
  initPricingToggle();
  initFaqAccordion();
  initQuickJoinModal();
});

/* ==========================================================================
   0. Multi-Language Auto-Detection & Preferences (zerodoc)
   ========================================================================== */
function initLanguageDetection() {
  const currentPath = window.location.pathname;
  const isKoreanPage = currentPath.endsWith('ko.html');

  // Save selection when user clicks language link
  document.querySelectorAll('.lang-switcher a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === 'ko.html') {
        localStorage.setItem('zerodoc_lang', 'ko');
      } else if (link.getAttribute('href') === 'index.html') {
        localStorage.setItem('zerodoc_lang', 'en');
      }
    });
  });

  // First time visitor auto-detection: if Korean browser and on English root, redirect to Korean
  const savedLang = localStorage.getItem('zerodoc_lang');
  if (!savedLang && !isKoreanPage) {
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (userLang.startsWith('ko')) {
      localStorage.setItem('zerodoc_lang', 'ko');
      window.location.replace('ko.html');
    }
  }
}

/* ==========================================================================
   1. Matrix / Cyber Grid Canvas Background
   ========================================================================== */
function initMatrixBackground() {
  const canvas = document.getElementById('matrix-grid-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const gridSize = 48;
  let offset = 0;

  function renderGrid() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
    ctx.lineWidth = 1;

    // Moving horizontal grid lines (isometric cyber vibe)
    offset = (offset + 0.3) % gridSize;

    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = offset; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    requestAnimationFrame(renderGrid);
  }

  renderGrid();
}

/* ==========================================================================
   2. Hero Stream Simulation Canvas (Simulated 120FPS Cyber Scene)
   ========================================================================== */
function initHeroStreamCanvas() {
  const canvas = document.getElementById('hero-game-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth || 600;
    canvas.height = canvas.parentElement.clientHeight || 380;
  }
  resize();
  window.addEventListener('resize', resize);

  // Simulated 3D Cyber Horizon / Synthwave Cityscape
  let angle = 0;
  const stars = Array.from({ length: 60 }, () => ({
    x: Math.random() * 600,
    y: Math.random() * 200,
    size: Math.random() * 1.8 + 0.5,
    speed: Math.random() * 0.4 + 0.1
  }));

  function drawHeroScene() {
    const w = canvas.width;
    const h = canvas.height;

    // Gradient deep sky
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#04060A');
    skyGrad.addColorStop(0.65, '#0D101E');
    skyGrad.addColorStop(1, '#1A0B2E');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // Stars
    ctx.fillStyle = '#00F0FF';
    stars.forEach(s => {
      ctx.fillRect(s.x % w, s.y, s.size, s.size);
      s.x += s.speed;
    });

    // Cyber Neon Sun / Core
    const sunGrad = ctx.createRadialGradient(w / 2, h * 0.58, 10, w / 2, h * 0.58, 110);
    sunGrad.addColorStop(0, '#FF007F');
    sunGrad.addColorStop(0.6, '#8B5CF6');
    sunGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.58, 110, 0, Math.PI * 2);
    ctx.fill();

    // Horizon line
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00F0FF';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.65);
    ctx.lineTo(w, h * 0.65);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Perspective 3D Grid on ground
    angle = (angle + 1.2) % 30;
    const horizonY = h * 0.65;
    const vanishX = w / 2;

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
    ctx.lineWidth = 1;

    // Radial perspective lines
    for (let x = -w * 0.5; x <= w * 1.5; x += 45) {
      ctx.beginPath();
      ctx.moveTo(vanishX, horizonY);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Horizontal receding lines
    for (let d = angle; d < h - horizonY; d += 22) {
      const y = horizonY + Math.pow(d / (h - horizonY), 2) * (h - horizonY);
      ctx.strokeStyle = `rgba(139, 92, 246, ${Math.min(0.7, (y - horizonY) / 100)})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Dynamic HUD Target Reticle
    const mouseX = w / 2 + Math.sin(Date.now() * 0.002) * 50;
    const mouseY = h * 0.45 + Math.cos(Date.now() * 0.003) * 20;

    ctx.strokeStyle = '#00FF88';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 24, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(mouseX - 32, mouseY);
    ctx.lineTo(mouseX - 12, mouseY);
    ctx.moveTo(mouseX + 12, mouseY);
    ctx.lineTo(mouseX + 32, mouseY);
    ctx.moveTo(mouseX, mouseY - 32);
    ctx.lineTo(mouseX, mouseY - 12);
    ctx.moveTo(mouseX, mouseY + 12);
    ctx.lineTo(mouseX, mouseY + 32);
    ctx.stroke();

    // Subtle Live HUD watermark
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '10px JetBrains Mono';
    ctx.fillText('AETHER PROTOCOL // DXGI ZERO-COPY ACTIVE', 20, h - 16);

    requestAnimationFrame(drawHeroScene);
  }

  drawHeroScene();
}

/* ==========================================================================
   3. Telemetry Sparkline & Dynamic Micro-Fluctuations
   ========================================================================== */
function initSparklineTelemetry() {
  const canvas = document.getElementById('sparkline-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const history = Array(40).fill(4.2);
  const livePingEl = document.getElementById('live-ping');
  const liveFpsEl = document.getElementById('live-fps');
  const liveBitrateEl = document.getElementById('live-bitrate');
  const liveJitterEl = document.getElementById('live-jitter');

  function updateTelemetryData() {
    // Generate realistic micro fluctuations around 4.2ms
    const noise = (Math.random() - 0.5) * 0.25;
    const currentPing = +(4.2 + noise).toFixed(2);
    history.push(currentPing);
    history.shift();

    if (livePingEl) livePingEl.innerHTML = `${currentPing}<small>ms</small>`;
    if (liveFpsEl) {
      const fpsNoise = (Math.random() - 0.5) * 0.3;
      liveFpsEl.innerHTML = `${(120.0 + fpsNoise).toFixed(1)}<small>FPS</small>`;
    }
    if (liveBitrateEl) {
      const bitNoise = (Math.random() - 0.5) * 0.4;
      liveBitrateEl.innerHTML = `${(38.4 + bitNoise).toFixed(1)}<small>Mbps</small>`;
    }
    if (liveJitterEl) {
      liveJitterEl.textContent = `${(0.12 + Math.random() * 0.08).toFixed(2)}ms`;
    }

    renderSparkline();
  }

  function renderSparkline() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;
    const min = 3.5;
    const max = 5.0;
    const step = w / (history.length - 1);

    // Gradient Fill under curve
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 240, 255, 0.4)');
    grad.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

    ctx.beginPath();
    ctx.moveTo(0, h);

    history.forEach((val, i) => {
      const x = i * step;
      const normalized = (val - min) / (max - min);
      const y = h - normalized * (h - 8) - 4;
      if (i === 0) ctx.lineTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Stroke line
    ctx.beginPath();
    history.forEach((val, i) => {
      const x = i * step;
      const normalized = (val - min) / (max - min);
      const y = h - normalized * (h - 8) - 4;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // Pulse dot at current point
    const lastX = w;
    const lastNorm = (history[history.length - 1] - min) / (max - min);
    const lastY = h - lastNorm * (h - 8) - 4;

    ctx.fillStyle = '#00FF88';
    ctx.beginPath();
    ctx.arc(lastX - 2, lastY, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  setInterval(updateTelemetryData, 180);
}

/* ==========================================================================
   4. 6-Digit Code Auto-Advance & Quick Join Simulation
   ========================================================================== */
function initQuickJoinInputs() {
  setupCodeInputGroup('code-inputs-group');
  setupCodeInputGroup('hero-code-inputs');
  
  // English index.html Quick Join
  const form = document.getElementById('quick-join-form');
  const feedback = document.getElementById('qj-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const boxes = form.querySelectorAll('.code-box');
      let code = '';
      boxes.forEach(b => (code += b.value.trim().toUpperCase()));

      if (code.length < 6) {
        feedback.style.color = '#FF0055';
        feedback.textContent = '⚠ Please enter all 6 alphanumeric digits.';
        return;
      }

      simulateStreamConnection(code, feedback);
      setTimeout(() => {
        window.location.href = `join.html?room=${encodeURIComponent(code)}`;
      }, 1200);
    });
  }

  // Korean ko.html Hero Direct Connect
  const heroBtn = document.getElementById('btn-hero-connect');
  const heroGroup = document.getElementById('hero-code-inputs');
  const heroStatus = document.getElementById('hero-connect-status');
  if (heroBtn && heroGroup && heroStatus) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const boxes = heroGroup.querySelectorAll('.code-box');
      let code = '';
      boxes.forEach(b => (code += b.value.trim().toUpperCase()));

      if (code.length < 6) {
        heroStatus.style.color = '#FF0055';
        heroStatus.textContent = '⚠ 6자리 룸코드를 모두 입력해주세요.';
        return;
      }

      simulateStreamConnection(code, heroStatus);
      setTimeout(() => {
        window.location.href = `join.html?room=${encodeURIComponent(code)}`;
      }, 1200);
    });
  }
}

function setupCodeInputGroup(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  const boxes = group.querySelectorAll('.code-box');

  boxes.forEach((box, idx) => {
    box.addEventListener('input', (e) => {
      const val = e.target.value.toUpperCase();
      box.value = val;

      if (val && idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && idx > 0) {
        boxes[idx - 1].focus();
      }
    });

    box.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      if (!text) return;
      for (let i = 0; i < boxes.length; i++) {
        if (text[i]) boxes[i].value = text[i];
      }
      if (text.length >= boxes.length) {
        boxes[boxes.length - 1].focus();
      } else {
        boxes[text.length].focus();
      }
    });
  });
}

function isKo() {
  return document.documentElement.lang === 'ko' || window.location.pathname.endsWith('ko.html') || localStorage.getItem('zerodoc_lang') === 'ko';
}

function simulateStreamConnection(code, feedbackEl) {
  const korean = isKo();
  feedbackEl.style.color = '#00F0FF';
  feedbackEl.textContent = korean
    ? `[0.02초] 글로벌 애니캐스트를 통해 룸코드 [${code}] 조회 중...`
    : `[0.02s] Resolving Room Code [${code}] via Global Anycast...`;

  setTimeout(() => {
    feedbackEl.textContent = korean
      ? `[0.08초] 호스트 발견 (RTX 4090 · 2560x1660@120Hz). STUN 홀펀칭 시작...`
      : `[0.08s] Host found (RTX 4090 • 2560x1660@120Hz). Direct STUN hole-punching...`;
  }, 500);

  setTimeout(() => {
    feedbackEl.style.color = '#00FF88';
    feedbackEl.innerHTML = korean
      ? `✓ <strong>Direct UDP 47998 P2P 연결 수립 (3.8ms RTT)!</strong> 클라이언트 세션을 시작합니다...`
      : `✓ <strong>Direct UDP 47998 link established (3.8ms RTT)!</strong> Launching iOS Client...`;
  }, 1100);
}

/* ==========================================================================
   5. Interactive Latency Measurement Simulator Widget
   ========================================================================== */
function initLatencySimulator() {
  const netBtns = document.querySelectorAll('#sim-network-select .sim-btn');
  const codecBtns = document.querySelectorAll('#sim-codec-select .sim-toggle-btn');
  const fpsBtns = document.querySelectorAll('#sim-fps-select .sim-toggle-btn');

  let currentNetPing = 0.6; // LAN default
  let currentEncTime = 0.8; // HEVC NVENC
  let currentDecTime = 1.1; // VideoToolbox
  let currentInterval = 8.33; // 120Hz
  const captureTime = 1.20; // DXGI Direct VRAM capture

  function recalculate() {
    const renderTime = +(currentInterval * 0.12).toFixed(2); // VSYNC sync buffer
    const total = +(captureTime + currentEncTime + currentNetPing + currentDecTime + renderTime).toFixed(2);

    // Update Banner
    const totalEl = document.querySelector('#sim-total-latency .latency-figure');
    const badgeEl = document.getElementById('sim-grade-badge');
    if (totalEl) totalEl.textContent = total.toFixed(2);

    if (badgeEl) {
      const korean = isKo();
      if (total < 10.0) {
        badgeEl.textContent = korean ? '10MS 미만 초저지연 (LAN / 로컬 네트워크)' : 'SUB-10MS ULTRA LOW LATENCY (LAN / LOCAL)';
        badgeEl.style.color = '#00FF88';
        badgeEl.style.borderColor = '#00FF88';
      } else if (total < 20.0) {
        badgeEl.textContent = korean ? '20MS 미만 고속 스트리밍 (5G / 고속 WAN)' : 'SUB-20MS HIGH SPEED (5G / FAST WAN)';
        badgeEl.style.color = '#00F0FF';
        badgeEl.style.borderColor = '#00F0FF';
      } else if (total < 35.0) {
        badgeEl.textContent = korean ? '원활한 원격 플레이 (TURN 릴레이)' : 'COMPETITIVE WAN STREAM (TURN RELAY)';
        badgeEl.style.color = '#FFB800';
        badgeEl.style.borderColor = '#FFB800';
      } else {
        badgeEl.textContent = korean ? '일반 캐주얼 스트리밍' : 'PLAYABLE CASUAL STREAM';
        badgeEl.style.color = '#FF0055';
        badgeEl.style.borderColor = '#FF0055';
      }
    }

    // Update Visual Segments
    const segCap = document.getElementById('seg-capture');
    const segEnc = document.getElementById('seg-encode');
    const segNet = document.getElementById('seg-network');
    const segDec = document.getElementById('seg-decode');
    const segRen = document.getElementById('seg-render');

    const capPct = (captureTime / total) * 100;
    const encPct = (currentEncTime / total) * 100;
    const netPct = (currentNetPing / total) * 100;
    const decPct = (currentDecTime / total) * 100;
    const renPct = (renderTime / total) * 100;

    if (segCap) { segCap.style.width = `${Math.max(4, capPct)}%`; document.getElementById('val-capture').textContent = `${captureTime}ms`; }
    if (segEnc) { segEnc.style.width = `${encPct}%`; document.getElementById('val-encode').textContent = `${currentEncTime}ms`; }
    if (segNet) { segNet.style.width = `${netPct}%`; document.getElementById('val-network').textContent = `${currentNetPing}ms`; }
    if (segDec) { segDec.style.width = `${decPct}%`; document.getElementById('val-decode').textContent = `${currentDecTime}ms`; }
    if (segRen) { segRen.style.width = `${renPct}%`; document.getElementById('val-render').textContent = `${renderTime}ms`; }

    // Benchmark comparison bars
    const benchAether = total;
    const benchToolA = +(total * 2.8 + 4.2).toFixed(1);
    const benchToolB = +(total * 3.2 + 5.0).toFixed(1);
    const benchRdp = +(total * 7.5 + 38.0).toFixed(1);

    const benchToolAEl = document.getElementById('bench-tool-a');
    const benchToolBEl = document.getElementById('bench-tool-b');
    const benchAetherEl = document.getElementById('bench-aether');
    if (benchAetherEl) benchAetherEl.textContent = `${benchAether.toFixed(1)} ms`;
    if (benchToolAEl) benchToolAEl.textContent = `${benchToolA.toFixed(1)} ms`;
    if (benchToolBEl) benchToolBEl.textContent = `${benchToolB.toFixed(1)} ms`;

    const maxScale = Math.max(benchRdp, 60);
    document.getElementById('bench-bar-aether').style.width = `${(benchAether / maxScale) * 100}%`;
    const benchBarAEl = document.getElementById('bench-bar-tool-a');
    const benchBarBEl = document.getElementById('bench-bar-tool-b');
    if (benchBarAEl) benchBarAEl.style.width = `${(benchToolA / maxScale) * 100}%`;
    if (benchBarBEl) benchBarBEl.style.width = `${(benchToolB / maxScale) * 100}%`;
    document.getElementById('bench-bar-rdp').style.width = `${(benchRdp / maxScale) * 100}%`;
  }

  netBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      netBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentNetPing = parseFloat(btn.dataset.ping);
      recalculate();
    });
  });

  codecBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codecBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEncTime = parseFloat(btn.dataset.enc);
      currentDecTime = parseFloat(btn.dataset.dec);
      recalculate();
    });
  });

  fpsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fpsBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentInterval = parseFloat(btn.dataset.interval);
      recalculate();
    });
  });

  recalculate();
}

/* ==========================================================================
   6. Click-to-Reaction Human Reflex Tester
   ========================================================================== */
function initReflexTester() {
  const btn = document.getElementById('btn-reflex-trigger');
  const result = document.getElementById('reflex-result');
  if (!btn || !result) return;

  const korean = isKo();
  let state = 'idle'; // idle, waiting, primed
  let startTime = 0;
  let timeoutId = null;

  btn.addEventListener('click', () => {
    if (state === 'idle') {
      state = 'waiting';
      btn.style.background = '#FFB800';
      btn.style.color = '#000';
      btn.textContent = korean ? '⏳ 대기 중... (아직 누르지 마세요!)' : '⏳ WAIT FOR NEON FLASH (DO NOT CLICK YET)...';
      result.textContent = korean ? '센서 반응 대기 중...' : 'Priming sensor telemetry...';

      const delay = Math.floor(Math.random() * 2500) + 1200;
      timeoutId = setTimeout(() => {
        state = 'primed';
        startTime = performance.now();
        btn.style.background = '#00F0FF';
        btn.style.color = '#000';
        btn.textContent = korean ? '⚡ 지금 클릭! 지금 클릭!' : '⚡ CLICK NOW! CLICK NOW!';
      }, delay);
    } else if (state === 'waiting') {
      clearTimeout(timeoutId);
      state = 'idle';
      btn.style.background = '';
      btn.style.color = '';
      btn.textContent = korean ? '⚡ 너무 빨랐습니다! 다시 시도' : '⚡ Too early! Try Again';
      result.style.color = '#FF0055';
      result.textContent = korean ? '성급한 클릭이 감지되었습니다. 초록색이 켜질 때까지 기다려주세요.' : 'Premature trigger detected. Wait until color turns Cyan.';
    } else if (state === 'primed') {
      const reflexTime = Math.round(performance.now() - startTime);
      state = 'idle';
      btn.style.background = '';
      btn.style.color = '';
      btn.textContent = korean ? '⚡ 한 번 더 테스트' : '⚡ Test Again';
      result.style.color = '#00FF88';
      result.innerHTML = korean
        ? `당신의 반응속도: <strong>${reflexTime}ms</strong>. AetherStream의 <strong>결정론적 초저지연 UDP 스트리밍 파이프라인</strong>은 인간 반응 속도보다 훨씬 민첩하게 프레임을 전달합니다.`
        : `Your human reaction: <strong>${reflexTime}ms</strong>. AetherStream's <strong>deterministic low-latency UDP streaming pipeline</strong> delivers frames far faster than human visual perception!`;
    }
  });
}

/* ==========================================================================
   7. Apple Pencil 4096-Level Pressure Sandbox
   ========================================================================== */
function initPencilDrawingSandbox() {
  const canvas = document.getElementById('drawing-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const fill = document.getElementById('pressure-fill');
  const text = document.getElementById('pressure-text');
  const clearBtn = document.getElementById('btn-clear-drawing');

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function clearCanvas() {
    ctx.fillStyle = '#05060A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw guide grid
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }
  clearCanvas();

  if (clearBtn) clearBtn.addEventListener('click', clearCanvas);

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function startDraw(e) {
    isDrawing = true;
    const { x, y } = getCoords(e);
    lastX = x;
    lastY = y;
  }

  function draw(e) {
    if (!isDrawing) return;
    const { x, y } = getCoords(e);

    // If stylus with pressure (PointerEvent)
    let pressure = e.pressure;
    if (pressure === undefined || pressure === 0) {
      // Simulate dynamic pressure if mouse based on speed
      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      pressure = Math.min(1.0, Math.max(0.15, speed / 18));
    }

    const rawLevels = Math.round(pressure * 4096);
    if (fill) fill.style.width = `${pressure * 100}%`;
    if (text) text.textContent = `${rawLevels} / 4096`;

    // Dynamic stroke based on 4096 pressure levels
    ctx.strokeStyle = `rgba(0, 240, 255, ${0.4 + pressure * 0.6})`;
    ctx.lineWidth = 1.5 + pressure * 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
  }

  function stopDraw() {
    isDrawing = false;
  }

  canvas.addEventListener('pointerdown', startDraw);
  canvas.addEventListener('pointermove', draw);
  canvas.addEventListener('pointerup', stopDraw);
  canvas.addEventListener('pointerleave', stopDraw);
}

/* ==========================================================================
   8. Pricing Tier Billing Toggle (Monthly / Annual)
   ========================================================================== */
function initPricingToggle() {
  const switchBtn = document.getElementById('billing-switch');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');
  const proPrice = document.getElementById('pro-price');
  const proPeriod = document.getElementById('pro-period');
  const studioPrice = document.getElementById('studio-price');
  const studioPeriod = document.getElementById('studio-period');

  let isAnnual = true; // default annual (best conversion)

  function updatePricing() {
    const korean = isKo();
    if (isAnnual) {
      switchBtn.classList.add('annual');
      labelAnnual.classList.add('active');
      labelMonthly.classList.remove('active');
      if (proPrice) proPrice.textContent = korean ? '4,083' : '3.25';
      if (proPeriod) proPeriod.textContent = korean ? '/ 월 (연 ₩49,000 결제)' : '/ mo ($39.00 billed annually)';
      if (studioPrice) studioPrice.textContent = korean ? '39,000' : '30.00';
      if (studioPeriod) studioPeriod.textContent = korean ? '/ 사용자/월' : '/ seat/mo';
    } else {
      switchBtn.classList.remove('annual');
      labelMonthly.classList.add('active');
      labelAnnual.classList.remove('active');
      if (proPrice) proPrice.textContent = korean ? '5,500' : '4.00';
      if (proPeriod) proPeriod.textContent = korean ? '/ 월 (월간 결제)' : '/ mo (billed monthly)';
      if (studioPrice) studioPrice.textContent = korean ? '39,000' : '30.00';
      if (studioPeriod) studioPeriod.textContent = korean ? '/ 사용자/월' : '/ seat/mo';
    }
  }

  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;
      updatePricing();
    });
  }

  let selectedPlan = 'pro'; // 'pro' | 'studio'

  function openCheckout(plan) {
    selectedPlan = plan;
    const modal = document.getElementById('modal-checkout');
    if (!modal) return;

    const korean = isKo();
    const titleEl = document.getElementById('checkout-plan-title');
    const descEl = document.getElementById('checkout-plan-desc');
    const amountEl = document.getElementById('checkout-plan-amount');
    const cycleEl = document.getElementById('checkout-plan-cycle');
    const payTextEl = document.getElementById('btn-pay-text');
    const statusEl = document.getElementById('checkout-status-msg');
    const licenseBox = document.getElementById('checkout-license-box');
    const submitBtn = document.getElementById('btn-submit-payment');

    if (statusEl) {
      statusEl.textContent = '';
      statusEl.className = 'checkout-status-msg';
    }
    if (licenseBox) {
      licenseBox.classList.remove('visible');
    }
    if (submitBtn) {
      submitBtn.disabled = false;
    }

    if (plan === 'pro') {
      if (titleEl) titleEl.textContent = korean ? 'Aether Pro (연간 결제 플랜)' : 'Aether Pro (Annual Plan)';
      if (descEl) descEl.textContent = korean ? '38개 글로벌 TURN 릴레이 · 애플 펜슬 프로 4096 필압 · 120Hz' : '38+ Global TURN Relays · Apple Pencil Pro 4096 Pressure · 120Hz ProMotion';
      if (amountEl) amountEl.textContent = korean ? '₩49,000' : '$39.00';
      if (cycleEl) cycleEl.textContent = korean ? '/ 연간 일시결제 (월 ₩4,083 상당)' : '/ billed yearly ($3.25/mo equivalent)';
      if (payTextEl) payTextEl.textContent = korean ? '₩49,000 결제 승인 및 라이선스 발급' : 'AUTHORIZE $39.00 & ISSUE LICENSE';
    } else {
      if (titleEl) titleEl.textContent = korean ? 'Studio / Enterprise (월간 구독)' : 'Studio / Enterprise (Monthly Seat)';
      if (descEl) descEl.textContent = korean ? '멀티유저 입력 중재 · 동적 포렌식 워터마크 · 온프레미스 TURN' : 'Multi-Seat Input Arbitration · Dynamic Forensic Watermark · On-Prem TURN';
      if (amountEl) amountEl.textContent = korean ? '₩39,000' : '$30.00';
      if (cycleEl) cycleEl.textContent = korean ? '/ 사용자/월' : '/ seat/month';
      if (payTextEl) payTextEl.textContent = korean ? '₩39,000 결제 승인 및 라이선스 발급' : 'AUTHORIZE $30.00 & ISSUE LICENSE';
    }

    modal.classList.add('open');
  }

  const buyPro = document.getElementById('btn-buy-pro');
  if (buyPro) {
    buyPro.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckout('pro');
    });
  }

  const buyStudio = document.getElementById('btn-buy-studio');
  if (buyStudio) {
    buyStudio.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckout('studio');
    });
  }

  // Payment Method Selection Logic
  const payMethods = document.querySelectorAll('.pay-method-btn');
  payMethods.forEach(btn => {
    btn.addEventListener('click', () => {
      payMethods.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Modal Close
  const closeCheckoutBtn = document.getElementById('btn-close-checkout');
  const checkoutModal = document.getElementById('modal-checkout');
  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('open');
    });
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) {
        checkoutModal.classList.remove('open');
      }
    });
  }

  // Submit Payment & Interactive License Key Generation
  const submitPaymentBtn = document.getElementById('btn-submit-payment');
  if (submitPaymentBtn) {
    submitPaymentBtn.addEventListener('click', () => {
      const emailInput = document.getElementById('checkout-email');
      const email = emailInput ? emailInput.value.trim() : '';
      const statusEl = document.getElementById('checkout-status-msg');
      const licenseBox = document.getElementById('checkout-license-box');
      const keyEl = document.getElementById('generated-license-key');
      const tierEl = document.getElementById('license-tier-text');
      const korean = isKo();

      if (!email || !email.includes('@')) {
        if (statusEl) {
          statusEl.textContent = korean ? '유효한 라이선스 발송용 이메일 주소를 입력해주세요.' : 'Please enter a valid email address.';
          statusEl.className = 'checkout-status-msg error';
        }
        if (emailInput) emailInput.focus();
        return;
      }

      submitPaymentBtn.disabled = true;
      if (statusEl) {
        statusEl.textContent = korean ? '결제 대행사(Stripe/PG) 보안 세션 통신 및 서명 검증 중...' : 'Negotiating encrypted payment session with Stripe Gateway...';
        statusEl.className = 'checkout-status-msg';
      }

      setTimeout(() => {
        // Generate pseudo-cryptographic license key
        const randHex = () => Math.random().toString(16).substring(2, 6).toUpperCase();
        const prefix = selectedPlan === 'pro' ? 'AETH-PRO' : 'AETH-STU';
        const licenseKey = `${prefix}-${randHex()}-${randHex()}-${randHex()}`;

        if (keyEl) keyEl.textContent = licenseKey;
        if (tierEl) tierEl.textContent = selectedPlan === 'pro' ? 'Aether Pro (Single User / 1-Year)' : 'Studio Team (Enterprise Multi-Seat)';
        if (licenseBox) licenseBox.classList.add('visible');

        if (statusEl) {
          statusEl.textContent = korean 
            ? `✔ 결제가 안전하게 승인되었습니다. [${email}]로 라이선스 증서가 전송되었습니다.`
            : `✔ Payment authorized. License certificate sent to [${email}].`;
          statusEl.className = 'checkout-status-msg success';
        }
      }, 700);
    });
  }
}

/* ==========================================================================
   9. FAQ Accordion Logic
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

/* ==========================================================================
   10. Quick Join Modal
   ========================================================================== */
function initQuickJoinModal() {
  const modal = document.getElementById('join-modal');
  const openBtn = document.getElementById('btn-quick-join');
  const closeBtn = document.getElementById('modal-close-btn');
  const connectBtn = document.getElementById('btn-modal-connect');
  const statusMsg = document.getElementById('modal-status');

  if (!modal || !openBtn) return;

  setupCodeInputGroup('modal-code-inputs');

  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    const firstBox = modal.querySelector('.modal-box');
    if (firstBox) firstBox.focus();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });

  if (connectBtn && statusMsg) {
    connectBtn.addEventListener('click', () => {
      const boxes = modal.querySelectorAll('.modal-box');
      let code = '';
      boxes.forEach(b => (code += b.value.trim().toUpperCase()));

      if (code.length < 6) {
        const korean = isKo();
        statusMsg.style.color = '#FF0055';
        statusMsg.textContent = korean ? '6자리 룸코드를 모두 입력해주세요.' : 'Please enter complete 6-digit room code.';
        return;
      }

      simulateStreamConnection(code, statusMsg);
      setTimeout(() => {
        setTimeout(() => {
          modal.classList.remove('open');
          window.location.href = `join.html?room=${encodeURIComponent(code)}`;
        }, 1200);
      }, 1200);
    });
  }
}
