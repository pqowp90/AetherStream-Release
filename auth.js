/**
 * AetherStream Google Auth & Device Cloud Sync Module
 * 주식회사 제로독 (zerodoc Inc.)
 * Aesthetic & Logic: Neo-Brutalism, 0px Radius, Instant High-Performance State
 */

(function () {
  'use strict';

  // Language Detection
  const isEn = (document.documentElement.lang === 'en') || 
               window.location.pathname.endsWith('index.html');

  // Bilingual Dictionary
  const T = {
    signInBtn: isEn ? 'Sign in with Google' : '구글 계정 연동',
    modalBrand: isEn ? 'zerodoc AetherStream Account Link' : 'zerodoc AetherStream 계정 연동',
    modalTitle: isEn ? 'Sign in with Google' : 'Google 계정으로 연동',
    modalSubtitle: isEn 
      ? 'Select a Google Account to continue to AetherStream Cloud Pairing service.' 
      : 'AetherStream 클라우드 페어링 서비스에 계속하려면 연동할 Google 계정을 선택하십시오.',
    scopeHeading: isEn ? 'Required Permissions for Account Pairing' : '연동 시 요청되는 필수 접근 권한',
    scopeProfile: isEn 
      ? 'Basic Profile Info: Account identification & host device registry sync' 
      : '기본 프로필 정보: 계정 식별 및 호스트 기기 목록 동기화',
    scopeDrive: isEn 
      ? 'Google Drive File Sync: Installer backup and virtual controller profile storage' 
      : 'Google Drive 파일 연동: AetherStream 설치본 및 가상 컨트롤러 매핑 백업',
    continueBtn: isEn ? 'Continue with Google' : 'Google 계정으로 계속',
    cancelBtn: isEn ? 'Cancel' : '취소',
    securityNotice: isEn 
      ? 'zerodoc Inc. never collects or transmits your password to external servers.' 
      : 'zerodoc Inc.는 사용자의 비밀번호를 절대 수집하거나 외부 서버에 전송하지 않습니다.',
    verifying: isEn ? 'Authenticating Google token & verifying credentials...' : '구글 계정 인증 및 토큰 검증 중...',
    loginSuccess: name => isEn ? `Google account '${name}' successfully linked.` : `'${name}' 구글 계정이 성공적으로 연동되었습니다.`,
    logoutSuccess: isEn ? 'Google account disconnected successfully.' : '구글 계정 연동이 해제되었습니다.',
    connectingHost: host => isEn ? `[Ultra Low-Latency Stream] Connecting directly to host '${host}'...` : `[초저지연 스트림] '${host}' 호스트에 즉시 연결 중...`,
    newHostAdded: host => isEn ? `New host device '${host}' registered to account.` : `신규 호스트 기기 '${host}'이(가) 계정에 등록되었습니다.`,
    registeredHosts: count => isEn ? `Registered Host Devices (${count})` : `내 등록 호스트 기기 (${count})`,
    connect: isEn ? 'Connect' : '연결',
    streamLaunch: isEn ? 'Launch Ultra Low-Latency Stream' : '원클릭 초저지연 스트림 개시',
    driveSync: isEn ? 'Google Drive Sync' : '구글 드라이브 동기화',
    driveActive: isEn ? 'Sync Active' : '동기화 활성',
    addHost: isEn ? '+ Add Host PC' : '+ 새 호스트 PC 추가',
    pairingTag: isEn ? '[Pairing]' : '[페어링]',
    signOut: isEn ? 'Sign Out (Disconnect Google)' : '로그아웃 (구글 연동 해제)',
    online: isEn ? 'Online' : '실시간 온라인',
    standby: isEn ? 'Standby' : '대기 모드',
    // Join page specific
    joinGuestTitle: isEn ? 'Direct Connect to Your Host PC' : '내 호스트 PC 바로 접속하기',
    joinGuestDesc: isEn 
      ? 'Sign in with Google to auto-sync your registered host PCs and connect with 1-click without typing room codes.' 
      : 'Google 계정으로 로그인하면 내 PC 목록이 자동 동기화되어 룸코드 입력 없이 원클릭으로 연결됩니다.',
    joinGuestBtn: isEn ? 'Sign in with Google' : 'Google 계정으로 로그인',
    joinSignOut: isEn ? 'Sign Out' : '로그아웃',
    joinDetectedHosts: count => isEn ? `Registered Host PCs (${count} Detected)` : `내 등록 호스트 기기 (${count}대 감지됨)`,
    joinOrManual: isEn ? 'Or enter a 6-digit room code manually' : '또는 다른 호스트의 6자리 룸코드 직접 입력',
    joinDirectStreamBtn: isEn ? 'Instant 1-Click Stream Connect' : '지금 바로 원클릭 연결'
  };

  // Demo / Initial State
  const DEMO_ACCOUNTS = [
    {
      name: isEn ? 'Alex Kim' : '김태현 (Alex Kim)',
      email: 'alex.zerodoc@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      plan: 'PRO',
      planLabel: isEn ? 'AetherStream PRO · Annual' : 'AetherStream PRO · 연간 라이선스',
      devices: [
        {
          id: 'host-pc-01',
          name: 'STUDIO-DESKTOP (RTX 4090)',
          ip: '192.168.1.120',
          status: 'online',
          ping: '1.2ms',
          fps: '144Hz',
          codec: 'NVENC HEVC 4:4:4',
          resolution: '3840x2160'
        },
        {
          id: 'host-pc-02',
          name: 'MOBILE-RIG (RTX 4070 Ti)',
          ip: '192.168.1.145',
          status: 'standby',
          ping: '1.1ms',
          fps: '120Hz',
          codec: 'NVENC H.264',
          resolution: '2560x1440'
        }
      ],
      driveSync: {
        active: true,
        driveLetter: 'G:\\내 드라이브\\AetherStream_Builds',
        lastSync: isEn ? 'Synced just now' : '방금 전 동기화 완료'
      }
    },
    {
      name: isEn ? 'zerodoc Admin' : '제로독 테스트 계정 (zerodoc Admin)',
      email: 'admin@zerodoc.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      plan: 'ENTERPRISE',
      planLabel: isEn ? 'AetherStream ENTERPRISE' : 'AetherStream ENTERPRISE',
      devices: [
        {
          id: 'host-pc-ent-01',
          name: 'ZERODOC-HQ-STATION-01',
          ip: '10.0.1.50',
          status: 'online',
          ping: '0.8ms',
          fps: '240Hz',
          codec: 'NVENC AV1 제로카피',
          resolution: '3840x2160'
        }
      ],
      driveSync: {
        active: true,
        driveLetter: 'H:\\내 드라이브\\AetherStream_Builds',
        lastSync: isEn ? 'Live mirroring active' : '실시간 미러링 중'
      }
    }
  ];

  const STATE_KEY = 'zerodoc_aether_auth_state';

  // Current In-Memory State
  let authState = {
    isAuthenticated: false,
    selectedAccountIndex: 0,
    currentUser: null
  };

  // Load from LocalStorage if present
  function loadStoredAuth() {
    try {
      const stored = localStorage.getItem(STATE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.isAuthenticated && parsed.currentUser) {
          authState.isAuthenticated = true;
          authState.currentUser = parsed.currentUser;
        }
      }
    } catch (e) {
      console.warn('[AetherAuth] Failed to restore session from storage', e);
    }
  }

  function saveAuthToStorage() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify({
        isAuthenticated: authState.isAuthenticated,
        currentUser: authState.currentUser
      }));
    } catch (e) {
      console.warn('[AetherAuth] Failed to persist session', e);
    }
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.getElementById('auth-global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'auth-global-toast';
      toast.className = 'auth-toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF66" stroke-width="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Modal Controls
  function openGoogleAuthModal() {
    const modal = document.getElementById('google-auth-modal');
    if (!modal) return;
    
    // Reset selection UI
    renderAccountOptions();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeGoogleAuthModal() {
    const modal = document.getElementById('google-auth-modal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Dropdown Controls
  function toggleProfileDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('user-profile-dropdown');
    const trigger = document.getElementById('user-profile-trigger');
    if (!dropdown || !trigger) return;

    const isOpen = dropdown.classList.contains('show');
    if (isOpen) {
      dropdown.classList.remove('show');
      trigger.classList.remove('active');
    } else {
      dropdown.classList.add('show');
      trigger.classList.add('active');
    }
  }

  function closeProfileDropdown() {
    const dropdown = document.getElementById('user-profile-dropdown');
    const trigger = document.getElementById('user-profile-trigger');
    if (dropdown) dropdown.classList.remove('show');
    if (trigger) trigger.classList.remove('active');
  }

  // Google Login Execution
  function executeGoogleSignIn(accountIndex) {
    const confirmBtn = document.getElementById('btn-confirm-google-login');
    if (confirmBtn) {
      confirmBtn.disabled = true;
      confirmBtn.textContent = T.verifying;
    }

    setTimeout(() => {
      const selectedAccount = DEMO_ACCOUNTS[accountIndex] || DEMO_ACCOUNTS[0];
      authState.isAuthenticated = true;
      authState.currentUser = JSON.parse(JSON.stringify(selectedAccount));
      saveAuthToStorage();
      closeGoogleAuthModal();
      
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = T.continueBtn;
      }

      renderAuthUI();
      showToast(T.loginSuccess(selectedAccount.name));
    }, 600);
  }

  // Sign out Execution
  function executeSignOut() {
    closeProfileDropdown();
    authState.isAuthenticated = false;
    authState.currentUser = null;
    localStorage.removeItem(STATE_KEY);
    renderAuthUI();
    showToast(T.logoutSuccess);
  }

  // Device Action Execution
  function launchStream(deviceId) {
    const device = authState.currentUser?.devices?.find(d => d.id === deviceId);
    const hostName = device ? device.name : 'Host PC';
    showToast(T.connectingHost(hostName));
    closeProfileDropdown();

    // If on join page, trigger deep link attempt
    try {
      const protocolUrl = `aetherstream://host/${encodeURIComponent(deviceId)}`;
      const link = document.createElement('a');
      link.href = protocolUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => link.remove(), 100);
    } catch (e) {
      // Browser sandbox may catch protocol launch
    }
  }

  function addNewDevice() {
    if (!authState.isAuthenticated || !authState.currentUser) {
      openGoogleAuthModal();
      return;
    }
    const pcNum = authState.currentUser.devices.length + 1;
    const newHost = {
      id: `host-pc-0${pcNum}`,
      name: `NEW-DESKTOP-RTX-${pcNum}`,
      ip: `192.168.1.${120 + pcNum}`,
      status: 'online',
      ping: '1.2ms',
      fps: '144Hz',
      codec: 'NVENC v12.2 HEVC',
      resolution: '2560x1440'
    };
    authState.currentUser.devices.push(newHost);
    saveAuthToStorage();
    renderAuthUI();
    showToast(T.newHostAdded(newHost.name));
  }

  // Render Account Options inside Modal
  function renderAccountOptions() {
    const container = document.getElementById('auth-account-options-list');
    if (!container) return;

    container.innerHTML = DEMO_ACCOUNTS.map((acc, idx) => `
      <div class="account-select-option ${idx === authState.selectedAccountIndex ? 'selected' : ''}" data-idx="${idx}">
        <div class="account-opt-avatar">
          <img src="${acc.avatar}" alt="${acc.name}">
        </div>
        <div class="account-opt-info">
          <div class="account-opt-name">${acc.name}</div>
          <div class="account-opt-email">${acc.email}</div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to options
    container.querySelectorAll('.account-select-option').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-idx'), 10);
        authState.selectedAccountIndex = idx;
        container.querySelectorAll('.account-select-option').forEach(item => item.classList.remove('selected'));
        el.classList.add('selected');
      });
    });
  }

  // Main UI Syncer
  function renderAuthUI() {
    const navAuthContainer = document.getElementById('nav-auth-slot');
    const heroDashboardSlot = document.getElementById('auth-dashboard-slot');
    const joinAuthBarSlot = document.getElementById('join-auth-bar-slot');
    const stateBadgeStatus = document.getElementById('demo-state-badge');

    if (stateBadgeStatus) {
      stateBadgeStatus.textContent = authState.isAuthenticated 
        ? (isEn ? 'Google Account Linked (Active)' : '구글 연동 완료 상태 (인증됨)') 
        : (isEn ? 'Guest Mode (Unlinked)' : '게스트 상태 (미연동)');
      stateBadgeStatus.style.color = authState.isAuthenticated ? '#00FF66' : '#888888';
    }

    // 1. Navigation Auth Slot Render
    if (navAuthContainer) {
      if (!authState.isAuthenticated || !authState.currentUser) {
        // Unauthenticated State: Minimal Google Button
        navAuthContainer.innerHTML = `
          <button class="google-auth-btn" id="btn-nav-google-login" type="button">
            <svg class="google-icon-svg" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>${T.signInBtn}</span>
          </button>
        `;

        const btnLogin = document.getElementById('btn-nav-google-login');
        if (btnLogin) {
          btnLogin.addEventListener('click', openGoogleAuthModal);
        }
      } else {
        // Authenticated State: User Profile Pill & Dropdown
        const user = authState.currentUser;
        navAuthContainer.innerHTML = `
          <div class="user-nav-profile">
            <div class="user-profile-trigger" id="user-profile-trigger">
              <div class="user-avatar-wrap">
                <img src="${user.avatar}" alt="${user.name}" class="user-avatar-img">
              </div>
              <div class="user-meta-summary">
                <span class="user-name-text">${user.name}</span>
                <span class="user-badge-plan">[${user.plan}]</span>
              </div>
              <span class="dropdown-caret">▼</span>
            </div>

            <!-- Profile Dropdown Menu -->
            <div class="user-dropdown-menu" id="user-profile-dropdown">
              <div class="dropdown-header-card">
                <div class="dropdown-user-info">
                  <div class="dropdown-avatar-large">
                    <img src="${user.avatar}" alt="${user.name}">
                  </div>
                  <div class="dropdown-titles">
                    <span class="dropdown-display-name">${user.name}</span>
                    <span class="dropdown-email-text">${user.email}</span>
                  </div>
                </div>
                <div class="account-status-tag">
                  <span class="status-indicator-dot"></span>
                  <span>${user.planLabel || (isEn ? 'PRO Plan Active' : 'PRO 플랜 활성')}</span>
                </div>
              </div>

              <div class="dropdown-section-title">${T.registeredHosts(user.devices?.length || 0)}</div>
              
              <div class="dropdown-devices-list">
                ${(user.devices || []).map(device => `
                  <div class="device-item-card ${device.status === 'online' ? 'active-host' : ''}">
                    <div class="device-info-col">
                      <span class="device-name">${device.name}</span>
                      <span class="device-specs-sub">${device.ip} · ${device.ping} · ${device.fps}</span>
                    </div>
                    <button class="device-connect-btn" data-device-id="${device.id}" type="button">${T.connect}</button>
                  </div>
                `).join('')}
              </div>

              <!-- Google Drive Sync Status -->
              <div class="drive-sync-strip">
                <div class="drive-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 18H6a4 4 0 0 1-4-4 4 4 0 0 1 4-4 1 1 0 0 1 1-1A6 6 0 0 1 19 11a4 4 0 0 1 0 7z"/>
                  </svg>
                  <span>${T.driveSync}</span>
                </div>
                <span class="drive-status">${T.driveActive}</span>
              </div>

              <div class="dropdown-footer">
                <button class="dropdown-action-btn" id="btn-dropdown-add-host" type="button">
                  <span>${T.addHost}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #888;">${T.pairingTag}</span>
                </button>
                <button class="dropdown-action-btn btn-signout" id="btn-dropdown-signout" type="button">
                  <span>${T.signOut}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem;">&times;</span>
                </button>
              </div>
            </div>
          </div>
        `;

        // Event bindings for Dropdown & Profile
        const trigger = document.getElementById('user-profile-trigger');
        if (trigger) {
          trigger.addEventListener('click', toggleProfileDropdown);
        }

        const btnAddHost = document.getElementById('btn-dropdown-add-host');
        if (btnAddHost) {
          btnAddHost.addEventListener('click', () => {
            closeProfileDropdown();
            addNewDevice();
          });
        }

        const btnSignout = document.getElementById('btn-dropdown-signout');
        if (btnSignout) {
          btnSignout.addEventListener('click', executeSignOut);
        }

        // Connect buttons inside dropdown
        navAuthContainer.querySelectorAll('.device-connect-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const devId = btn.getAttribute('data-device-id');
            launchStream(devId);
          });
        });
      }
    }

    // 2. Web Join Page Slot Render (join.html - #join-auth-bar-slot)
    if (joinAuthBarSlot) {
      if (!authState.isAuthenticated || !authState.currentUser) {
        // Guest Banner on Join Page
        joinAuthBarSlot.innerHTML = `
          <div class="join-auth-banner">
            <div class="join-auth-info">
              <div class="join-auth-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF66" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="0"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>${T.joinGuestTitle}</span>
              </div>
              <div class="join-auth-desc">
                ${T.joinGuestDesc}
              </div>
            </div>
            <button class="google-auth-btn btn-white" id="btn-join-google-login" type="button">
              <svg class="google-icon-svg" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>${T.joinGuestBtn}</span>
            </button>
          </div>
        `;

        const btnJoinLogin = document.getElementById('btn-join-google-login');
        if (btnJoinLogin) {
          btnJoinLogin.addEventListener('click', openGoogleAuthModal);
        }
      } else {
        // Authenticated Panel on Join Page: User Profile + Registered Hosts List
        const user = authState.currentUser;
        joinAuthBarSlot.innerHTML = `
          <div class="join-auth-user-panel">
            <div class="join-auth-user-header">
              <div class="join-user-profile">
                <img src="${user.avatar}" alt="${user.name}" class="join-user-avatar">
                <div>
                  <div class="join-user-name">
                    <span>${user.name}</span>
                    <span class="join-user-plan">[${user.plan}]</span>
                  </div>
                  <div class="join-user-email">${user.email} · ${T.driveSync} (${T.driveActive})</div>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="join-signout-btn" id="btn-join-add-host" type="button">${T.addHost}</button>
                <button class="join-signout-btn" id="btn-join-signout" type="button">${T.joinSignOut}</button>
              </div>
            </div>

            <div class="join-hosts-heading">
              <span>${T.joinDetectedHosts(user.devices?.length || 0)}</span>
              <span style="color: #00FF66; font-size: 0.7rem;">● LAN/WAN READY</span>
            </div>

            <div class="join-hosts-grid">
              ${(user.devices || []).map(device => `
                <div class="join-host-card ${device.status === 'online' ? 'is-online' : ''}">
                  <div class="join-host-card-top">
                    <div>
                      <div class="join-host-name">${device.name}</div>
                      <div class="join-host-ip">${device.ip} · UDP 47998</div>
                    </div>
                    <span class="join-host-badge ${device.status}">
                      ● ${device.status === 'online' ? T.online : T.standby}
                    </span>
                  </div>
                  <div class="join-host-specs">
                    <span>${device.codec}</span>
                    <span style="color: #00FF66;">${device.ping}</span>
                    <span>${device.fps}</span>
                  </div>
                  <button class="btn-join-host-connect" data-device-id="${device.id}" type="button">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span>${T.joinDirectStreamBtn}</span>
                  </button>
                </div>
              `).join('')}
            </div>

            <div class="join-divider-or">
              <span>${T.joinOrManual}</span>
            </div>
          </div>
        `;

        const btnJoinSignout = document.getElementById('btn-join-signout');
        if (btnJoinSignout) {
          btnJoinSignout.addEventListener('click', executeSignOut);
        }

        const btnJoinAdd = document.getElementById('btn-join-add-host');
        if (btnJoinAdd) {
          btnJoinAdd.addEventListener('click', addNewDevice);
        }

        joinAuthBarSlot.querySelectorAll('.btn-join-host-connect').forEach(btn => {
          btn.addEventListener('click', () => {
            const devId = btn.getAttribute('data-device-id');
            launchStream(devId);
          });
        });
      }
    }

    // 3. Hero Dashboard Slot Render (Interactive Multi-Device Host Manager)
    if (heroDashboardSlot) {
      if (!authState.isAuthenticated || !authState.currentUser) {
        // Guest State
        heroDashboardSlot.innerHTML = `
          <div class="account-dashboard-card">
            <div class="dashboard-header-bar">
              <div class="dash-title-wrap">
                <span class="dash-title">${isEn ? 'Host PC Cloud Pairing' : '호스트 PC 자동 클라우드 페어링'}</span>
                <span class="dash-badge-live" style="color: #888888; border-color: #333333;">${isEn ? 'Guest Mode' : '게스트 모드'}</span>
              </div>
              <button class="google-auth-btn btn-white" id="btn-hero-google-login" type="button">
                <svg class="google-icon-svg" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>${isEn ? 'Register PC with Google Account' : 'Google 계정으로 내 PC 등록하기'}</span>
              </button>
            </div>
            <p style="color: #888888; font-size: 0.88rem; line-height: 1.6; margin-bottom: 20px;">
              ${isEn 
                ? 'No need to manually type 6-digit room codes every time. Sign in once with Google to auto-detect your studio and home PCs with 1-click 120Hz/144Hz ultra-low latency streaming.' 
                : '매번 6자리 룸코드를 수동으로 입력할 필요 없이, Google 계정 1회 연동으로 집이나 작업실의 호스트 PC들을 실시간 감지하고 원클릭으로 120Hz/144Hz 초저지연 스트림을 개시합니다.'}
            </p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 200px; padding: 14px; background: #000000; border: 1px solid #222222;">
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #888; margin-bottom: 4px;">01. ${isEn ? 'Auto Host Discovery' : '자동 호스트 감지'}</div>
                <div style="font-size: 0.9rem; font-weight: 600; color: #FFF;">${isEn ? 'Cloud Auto Registry' : '클라우드 자동 등록'}</div>
              </div>
              <div style="flex: 1; min-width: 200px; padding: 14px; background: #000000; border: 1px solid #222222;">
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #888; margin-bottom: 4px;">02. ${isEn ? 'Google Drive Cloud Sync' : '구글 드라이브 연동'}</div>
                <div style="font-size: 0.9rem; font-weight: 600; color: #FFF;">${isEn ? 'Builds & Profiles Backup' : '빌드 및 세이브 무제한 백업'}</div>
              </div>
              <div style="flex: 1; min-width: 200px; padding: 14px; background: #000000; border: 1px solid #222222;">
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #888; margin-bottom: 4px;">03. ${isEn ? 'Multi-Client Support' : '멀티태블릿 지원'}</div>
                <div style="font-size: 0.9rem; font-weight: 600; color: #FFF;">${isEn ? 'iPad · Android · Web Ready' : 'iPad · Android 태블릿 즉시 연결'}</div>
              </div>
            </div>
          </div>
        `;

        const btnHeroLogin = document.getElementById('btn-hero-google-login');
        if (btnHeroLogin) {
          btnHeroLogin.addEventListener('click', openGoogleAuthModal);
        }
      } else {
        // Authenticated State
        const user = authState.currentUser;
        heroDashboardSlot.innerHTML = `
          <div class="account-dashboard-card">
            <div class="dashboard-header-bar">
              <div class="dash-title-wrap">
                <span class="dash-title">${isEn ? 'Cloud Registered Host Devices' : '내 클라우드 등록 호스트 기기'}</span>
                <span class="dash-badge-live">● ${isEn ? 'Cloud Real-time Synced' : '클라우드 실시간 동기화 중'}</span>
              </div>
              <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #888;">${user.email}</span>
                <button class="google-auth-btn" id="btn-hero-add-host" style="padding: 6px 12px; font-size: 0.8rem;" type="button">
                  ${T.addHost}
                </button>
              </div>
            </div>

            <div class="device-cards-grid">
              ${(user.devices || []).map(device => `
                <div class="host-pc-card ${device.status === 'online' ? 'is-online' : ''}">
                  <div class="host-pc-top">
                    <div>
                      <div class="host-name">${device.name}</div>
                      <div class="host-ip-badge">LAN IP: ${device.ip} · UDP 47998</div>
                    </div>
                    <span class="host-status-badge ${device.status}">
                      ● ${device.status === 'online' ? T.online : T.standby}
                    </span>
                  </div>

                  <div class="host-telemetry-specs">
                    <div class="spec-cell">
                      <span class="spec-key">${isEn ? 'Hardware Encoder' : '하드웨어 인코더'}</span>
                      <span class="spec-val">${device.codec}</span>
                    </div>
                    <div class="spec-cell">
                      <span class="spec-key">${isEn ? 'Native Latency' : '네이티브 딜레이'}</span>
                      <span class="spec-val" style="color: #00FF66;">${device.ping}</span>
                    </div>
                    <div class="spec-cell">
                      <span class="spec-key">${isEn ? 'Stream Bandwidth' : '스트리밍 대역'}</span>
                      <span class="spec-val">${device.fps} (${device.resolution})</span>
                    </div>
                  </div>

                  <div class="host-card-actions">
                    <button class="btn-stream-launch" data-device-id="${device.id}" type="button">
                      ${T.streamLaunch}
                    </button>
                    <button class="btn-host-config" title="Host Config" type="button">
                      ⚙️
                    </button>
                  </div>
                </div>
              `).join('')}

              <div class="add-host-card" id="btn-grid-add-host">
                <div class="add-host-icon">+</div>
                <div class="add-host-text">${isEn ? 'Pair New Host PC' : '새 호스트 PC 연동하기'}</div>
                <div class="add-host-sub">${isEn ? 'Signing in on Windows server registers automatically' : 'Windows 서버에서 로그인하면 자동 등록됩니다'}</div>
              </div>
            </div>

            <!-- Google Drive Cloud Mirroring Strip -->
            <div style="margin-top: 20px; padding: 14px; background: #000000; border: 1px solid #222222; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF66" stroke-width="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                <div>
                  <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: #FFF;">
                    ${T.driveSync}
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #888;">
                    ${user.driveSync?.driveLetter || 'G:\\내 드라이브\\AetherStream_Builds'} (${user.driveSync?.lastSync || T.driveActive})
                  </div>
                </div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #00FF66; padding: 3px 8px; border: 1px solid #00FF66; background: #001A0A;">
                AUTO-SYNC OK
              </span>
            </div>
          </div>
        `;

        const btnHeroAdd = document.getElementById('btn-hero-add-host');
        if (btnHeroAdd) {
          btnHeroAdd.addEventListener('click', addNewDevice);
        }

        const btnGridAdd = document.getElementById('btn-grid-add-host');
        if (btnGridAdd) {
          btnGridAdd.addEventListener('click', addNewDevice);
        }

        heroDashboardSlot.querySelectorAll('.btn-stream-launch').forEach(btn => {
          btn.addEventListener('click', () => {
            const devId = btn.getAttribute('data-device-id');
            launchStream(devId);
          });
        });
      }
    }
  }

  // Global Click & Esc listeners
  function setupGlobalListeners() {
    // Outside click closes profile dropdown
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('user-profile-dropdown');
      const trigger = document.getElementById('user-profile-trigger');
      if (dropdown && dropdown.classList.contains('show')) {
        if (!dropdown.contains(e.target) && (!trigger || !trigger.contains(e.target))) {
          closeProfileDropdown();
        }
      }
    });

    // Escape closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeGoogleAuthModal();
        closeProfileDropdown();
      }
    });

    // Modal Close button
    const closeBtn = document.getElementById('btn-close-google-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeGoogleAuthModal);
    }

    const cancelBtn = document.getElementById('btn-cancel-google-modal');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeGoogleAuthModal);
    }

    // Modal Confirm button
    const confirmBtn = document.getElementById('btn-confirm-google-login');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        executeGoogleSignIn(authState.selectedAccountIndex);
      });
    }

    // State Switcher (for CEO Demo Convenience)
    const toggleGuest = document.getElementById('demo-toggle-guest');
    if (toggleGuest) {
      toggleGuest.addEventListener('click', () => {
        executeSignOut();
      });
    }

    const toggleAuth = document.getElementById('demo-toggle-auth');
    if (toggleAuth) {
      toggleAuth.addEventListener('click', () => {
        executeGoogleSignIn(0);
      });
    }
  }

  // Initialization
  function init() {
    loadStoredAuth();
    renderAuthUI();
    setupGlobalListeners();
  }

  // Expose to window for external scripting or debugging
  window.AetherAuth = {
    init,
    openModal: openGoogleAuthModal,
    closeModal: closeGoogleAuthModal,
    signIn: executeGoogleSignIn,
    signOut: executeSignOut,
    getState: () => authState,
    render: renderAuthUI
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
