/**
 * AetherStream Official Brand Website & Interactive Systems
 * Version: 1.0.4
 * Architecture: Vanilla Modern ES6+ (Zero external bloat)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageDetection();
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
  const select = document.getElementById('lang-select');
  if (select && window.aetherI18n) {
    select.value = window.aetherI18n.getLang();
  }
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

    // Solid Black Background (100% Flat Swiss Minimalist)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);

    // Horizon line
    const horizonY = h * 0.62;
    const vanishX = w / 2;

    ctx.strokeStyle = '#222222';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(w, horizonY);
    ctx.stroke();

    // Perspective 3D Grid on ground (Hairline solid)
    angle = (angle + 1.2) % 30;

    // Radial perspective lines
    ctx.strokeStyle = '#181818';
    for (let x = -w * 0.5; x <= w * 1.5; x += 45) {
      ctx.beginPath();
      ctx.moveTo(vanishX, horizonY);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Horizontal receding lines
    for (let d = angle; d < h - horizonY; d += 22) {
      const y = horizonY + Math.pow(d / (h - horizonY), 2) * (h - horizonY);
      ctx.strokeStyle = '#1C1C1C';
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Dynamic Technical Crosshair Reticle (Electric Signal Cyan)
    const mouseX = w / 2 + Math.sin(Date.now() * 0.002) * 50;
    const mouseY = h * 0.42 + Math.cos(Date.now() * 0.003) * 20;

    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 18, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(mouseX - 26, mouseY);
    ctx.lineTo(mouseX - 6, mouseY);
    ctx.moveTo(mouseX + 6, mouseY);
    ctx.lineTo(mouseX + 26, mouseY);
    ctx.moveTo(mouseX, mouseY - 26);
    ctx.lineTo(mouseX, mouseY - 6);
    ctx.moveTo(mouseX, mouseY + 6);
    ctx.lineTo(mouseX, mouseY + 26);
    ctx.stroke();

    // Subtle Live HUD watermark
    ctx.fillStyle = '#666666';
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

    // Pure Solid Flat Minimalist Sparkline (0% Gradient)
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
    ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.fill();

    // Stroke line (Electric Signal Cyan #00F0FF)
    ctx.beginPath();
    history.forEach((val, i) => {
      const x = i * step;
      const normalized = (val - min) / (max - min);
      const y = h - normalized * (h - 8) - 4;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // Pulse dot at current point (Matrix Neon Emerald #00FF88)
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

  // Hero Room Connect Button trigger (Opens Quick Join Modal)
  const heroRoomConnectBtn = document.getElementById('btn-hero-room-connect');
  if (heroRoomConnectBtn) {
    heroRoomConnectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('join-modal');
      if (modal) {
        modal.classList.add('open');
        const firstBox = modal.querySelector('.modal-box');
        if (firstBox) firstBox.focus();
      } else {
        const quickJoinBtn = document.getElementById('btn-quick-join');
        if (quickJoinBtn) quickJoinBtn.click();
      }
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

function getActiveLang() {
  if (window.aetherI18n && typeof window.aetherI18n.getLang === 'function') {
    return window.aetherI18n.getLang();
  }
  return localStorage.getItem('zerodoc_lang') || (document.documentElement.lang || 'ko');
}

/* ==========================================================================
   5. Interactive Latency Measurement Simulator Widget
   ========================================================================== */
function initLatencySimulator() {
  const netBtns = document.querySelectorAll('#sim-network-select .sim-btn');
  const codecBtns = document.querySelectorAll('#sim-codec-select .sim-toggle-btn');
  const fpsBtns = document.querySelectorAll('#sim-fps-select .sim-toggle-btn');

  let currentNetKey = 'lan'; // 'lan' | '5g' | 'wan'
  let currentCodecKey = 'hevc'; // 'hevc' | 'avc'
  let currentFpsKey = '120'; // '60' | '120' | '144'

  const captureTime = 1.20; // DXGI 1.2+ Direct VRAM hardware capture

  function recalculate() {
    // Network latency
    let netTime = 1.8;
    if (currentNetKey === 'lan') netTime = 1.8;
    else if (currentNetKey === '5g') netTime = 7.2;
    else if (currentNetKey === 'wan') netTime = 16.5;

    // Encoder latency
    let encTime = 2.4;
    if (currentCodecKey === 'hevc') encTime = 2.4;
    else if (currentCodecKey === 'avc') encTime = 1.4;

    // Decoder latency
    let decTime = 1.9;
    if (currentCodecKey === 'hevc') decTime = 1.9;
    else if (currentCodecKey === 'avc') decTime = 1.5;

    // Display V-Sync Render latency
    let renTime = 1.5;
    if (currentFpsKey === '60') renTime = 2.8;
    else if (currentFpsKey === '120') renTime = 1.5;
    else if (currentFpsKey === '144') renTime = 1.1;

    const total = +(captureTime + encTime + netTime + decTime + renTime).toFixed(1);

    // Update Total Latency Display
    const totalEl = document.getElementById('calc-total-latency');
    if (totalEl) totalEl.textContent = total.toFixed(1);

    const legacyTotalEl = document.querySelector('#sim-total-latency .latency-figure');
    if (legacyTotalEl) legacyTotalEl.textContent = total.toFixed(1);

    // Update Breakdown Values & Progress Bars
    const updatePart = (valId, pbId, time) => {
      const valEl = document.getElementById(valId);
      const pbEl = document.getElementById(pbId);
      if (valEl) valEl.textContent = `${time.toFixed(1)}ms`;
      if (pbEl) {
        const pct = Math.max(5, Math.min(100, (time / total) * 100));
        pbEl.style.width = `${pct.toFixed(1)}%`;
      }
    };

    updatePart('bd-capture', 'pb-capture', captureTime);
    updatePart('bd-encode', 'pb-encode', encTime);
    updatePart('bd-network', 'pb-network', netTime);
    updatePart('bd-decode', 'pb-decode', decTime);
    updatePart('bd-render', 'pb-render', renTime);
  }

  netBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      netBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentNetKey = btn.dataset.net || 'lan';
      recalculate();
    });
  });

  codecBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codecBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCodecKey = btn.dataset.codec || 'hevc';
      recalculate();
    });
  });

  fpsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fpsBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFpsKey = btn.dataset.fps || '120';
      recalculate();
    });
  });

  recalculate();
}

/* ==========================================================================
   6. Click-to-Reaction Human Reflex Tester (Supercharged & Zero-Touch-Lag)
   ========================================================================== */
function getReflexCopy(lang) {
  const dict = (window.aetherI18n && window.aetherI18n.dict && window.aetherI18n.dict[lang]) || {};
  return {
    idle: dict["reflex.btn_idle"] || "⚡ 반응속도 측정 시작",
    waiting: dict["reflex.btn_waiting"] || "⏳ 대기... 초록색으로 변할 때 탭!",
    primed: dict["reflex.btn_primed"] || "⚡ 지금 탭하세요! (TAP NOW!)",
    premature: dict["reflex.btn_premature"] || "⚡ 너무 빨랐습니다! 다시 시도",
    again: dict["reflex.btn_again"] || "⚡ 다시 테스트하기",
    cardPlaceholder: dict["reflex.card_placeholder"] || "준비 완료 · 버튼을 눌러 측정을 시작하세요",
    statusPriming: dict["reflex.status_priming"] || "센서 반응 대기 중... (초록색이 켜질 때 즉시 탭하세요)",
    errPremature: dict["reflex.err_premature"] || "<strong>너무 빨랐습니다!</strong> 초록색이 켜진 후 탭하세요.",
    lblUser: dict["reflex.lbl_user"] || "당신의 반응속도",
    lblAether: dict["reflex.lbl_aether"] || "AetherStream 초저지연",
    noteFaster: dict["reflex.note_faster"] || "인간 시각 반응속도보다 약 20배 이상 빠릅니다"
  };
}

function initReflexTester() {
  const btn = document.getElementById('btn-reflex-trigger');
  const result = document.getElementById('reflex-result');
  if (!btn || !result) return;

  let state = 'idle'; // 'idle' | 'waiting' | 'primed'
  let startTime = 0;
  let timeoutId = null;
  let lastReflexTime = null;

  function renderResult(reflexTime) {
    const copy = getReflexCopy(getActiveLang());
    result.style.color = '';
    result.innerHTML = `
      <div class="reflex-grid">
        <div class="reflex-col user">
          <span class="reflex-label">${copy.lblUser}</span>
          <span class="reflex-val user-val">${reflexTime}<small>ms</small></span>
        </div>
        <div class="reflex-vs">VS</div>
        <div class="reflex-col aether">
          <span class="reflex-label">${copy.lblAether}</span>
          <span class="reflex-val aether-val">8.8<small>ms</small></span>
        </div>
      </div>
      <div class="reflex-comparison-badge">
        ⚡ ${copy.noteFaster}
      </div>
    `;
  }

  function updateIdleText() {
    const copy = getReflexCopy(getActiveLang());
    if (state === 'idle') {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
      btn.innerHTML = `<span class="reflex-btn-text">${lastReflexTime !== null ? copy.again : copy.idle}</span>`;
      if (lastReflexTime !== null) {
        renderResult(lastReflexTime);
      } else {
        result.style.color = '';
        result.innerHTML = `<span class="reflex-status-text reflex-status-idle" data-i18n="reflex.card_placeholder">${copy.cardPlaceholder}</span>`;
      }
    }
  }

  window.addEventListener('aetherLangChanged', () => {
    updateIdleText();
  });

  function handleTrigger(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const copy = getReflexCopy(getActiveLang());

    if (state === 'idle') {
      state = 'waiting';
      btn.style.background = '#FF5500';
      btn.style.borderColor = '#FF5500';
      btn.style.color = '#000000';
      btn.style.fontWeight = '800';
      btn.innerHTML = `<span class="reflex-btn-text">${copy.waiting}</span>`;

      result.style.color = '';
      result.innerHTML = `<span class="reflex-status-text reflex-status-waiting">${copy.statusPriming}</span>`;

      const delay = Math.floor(Math.random() * 2200) + 1200;
      timeoutId = setTimeout(() => {
        state = 'primed';
        startTime = performance.now();
        btn.style.background = '#00FF88';
        btn.style.borderColor = '#00FF88';
        btn.style.color = '#000000';
        btn.style.fontWeight = '800';
        btn.innerHTML = `<span class="reflex-btn-text">${copy.primed}</span>`;
      }, delay);

    } else if (state === 'waiting') {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      state = 'idle';
      btn.style.background = '#FF3366';
      btn.style.borderColor = '#FF3366';
      btn.style.color = '#FFFFFF';
      btn.innerHTML = `<span class="reflex-btn-text">${copy.premature}</span>`;

      result.style.color = '';
      result.innerHTML = `<span class="reflex-status-text reflex-status-error">${copy.errPremature}</span>`;

    } else if (state === 'primed') {
      const reflexTime = Math.round(performance.now() - startTime);
      lastReflexTime = reflexTime;
      state = 'idle';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
      btn.innerHTML = `<span class="reflex-btn-text">${copy.again}</span>`;

      renderResult(reflexTime);
    }
  }

  // Pointerdown for zero touch latency on mobile + click fallback
  let lastTrigger = 0;
  const onPointerOrClick = (e) => {
    const now = performance.now();
    if (now - lastTrigger < 150) return;
    lastTrigger = now;
    handleTrigger(e);
  };

  btn.addEventListener('pointerdown', onPointerOrClick);
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
