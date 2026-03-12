const CONSENT_KEY = 'cookie_consent_v1';
const LEGAL_CONFIG = window.LEGAL_CONFIG || {};
const META_PIXEL_ID = LEGAL_CONFIG.metaPixelId || '931560752748229';
const GA_ID = LEGAL_CONFIG.gaId || '';

function getConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

function saveConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

function hasAcceptedAnalytics(consent) {
  return !!consent?.analytics;
}

function hasAcceptedMarketing(consent) {
  return !!consent?.marketing;
}

function updateGoogleConsent(consent) {
  if (typeof gtag !== 'function') return;

  gtag('consent', 'update', {
    analytics_storage: hasAcceptedAnalytics(consent) ? 'granted' : 'denied',
    ad_storage: hasAcceptedMarketing(consent) ? 'granted' : 'denied',
    ad_user_data: hasAcceptedMarketing(consent) ? 'granted' : 'denied',
    ad_personalization: hasAcceptedMarketing(consent) ? 'granted' : 'denied'
  });
}

let metaLoaded = false;
let gaLoaded = false;

function loadMetaPixel() {
  if (metaLoaded || !META_PIXEL_ID) return;
  metaLoaded = true;

  !(function(f,b,e,v,n,t,s){
    if(f.fbq) return;
    n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
    if(!f._fbq) f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

function loadGoogleAnalytics() {
  if (gaLoaded || !GA_ID) return;
  gaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true
  });
}

function applyConsent(consent) {
  updateGoogleConsent(consent);

  if (hasAcceptedAnalytics(consent)) {
    loadGoogleAnalytics();
  }

  if (hasAcceptedMarketing(consent)) {
    loadMetaPixel();
  }
}

function createBanner() {
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookieBanner';
  banner.innerHTML = `
    <h3 class="cookie-banner__title">Usamos cookies y herramientas de medición</h3>
    <p class="cookie-banner__text">
      Utilizamos cookies y tecnologías similares para que el sitio funcione correctamente,
      medir visitas, analizar el rendimiento y, si lo aceptás, realizar seguimiento publicitario.
      Podés aceptar, rechazar o configurar tus preferencias. Más información en nuestra
      <a href="./cookies.html">Política de Cookies</a> y
      <a href="./privacidad.html">Política de Privacidad</a>.
    </p>
    <div class="cookie-banner__actions">
      <button class="cookie-btn cookie-btn--primary" id="acceptAllCookies">Aceptar</button>
      <button class="cookie-btn cookie-btn--secondary" id="rejectCookies">Rechazar</button>
      <button class="cookie-btn cookie-btn--ghost" id="configureCookies">Configurar</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('acceptAllCookies').addEventListener('click', () => {
    const consent = { necessary: true, analytics: true, marketing: true };
    saveConsent(consent);
    applyConsent(consent);
    banner.hidden = true;
  });

  document.getElementById('rejectCookies').addEventListener('click', () => {
    const consent = { necessary: true, analytics: false, marketing: false };
    saveConsent(consent);
    applyConsent(consent);
    banner.hidden = true;
  });

  document.getElementById('configureCookies').addEventListener('click', openCookieModal);
}

function createModal() {
  const modal = document.createElement('div');
  modal.className = 'cookie-modal';
  modal.id = 'cookieModal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="cookie-modal__panel" role="dialog" aria-modal="true" aria-labelledby="cookieModalTitle">
      <h3 class="cookie-modal__title" id="cookieModalTitle">Preferencias de cookies</h3>

      <div class="cookie-option">
        <label>
          <input type="checkbox" checked disabled />
          <span>
            <strong>Cookies necesarias</strong>
            Son esenciales para el funcionamiento básico del sitio.
          </span>
        </label>
      </div>

      <div class="cookie-option">
        <label>
          <input type="checkbox" id="analyticsConsent" />
          <span>
            <strong>Cookies analíticas</strong>
            Nos ayudan a entender cómo interactúan las personas con la landing.
          </span>
        </label>
      </div>

      <div class="cookie-option">
        <label>
          <input type="checkbox" id="marketingConsent" />
          <span>
            <strong>Cookies de marketing</strong>
            Permiten medir campañas y realizar seguimiento publicitario.
          </span>
        </label>
      </div>

      <div class="cookie-banner__actions">
        <button class="cookie-btn cookie-btn--primary" id="saveCookiePreferences">Guardar preferencias</button>
        <button class="cookie-btn cookie-btn--secondary" id="closeCookieModal">Cancelar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('closeCookieModal').addEventListener('click', closeCookieModal);

  document.getElementById('saveCookiePreferences').addEventListener('click', () => {
    const consent = {
      necessary: true,
      analytics: document.getElementById('analyticsConsent').checked,
      marketing: document.getElementById('marketingConsent').checked
    };

    saveConsent(consent);
    applyConsent(consent);

    const banner = document.getElementById('cookieBanner');
    if (banner) banner.hidden = true;

    closeCookieModal();
  });
}

function openCookieModal() {
  const modal = document.getElementById('cookieModal');
  const consent = getConsent() || { analytics: false, marketing: false };

  document.getElementById('analyticsConsent').checked = !!consent.analytics;
  document.getElementById('marketingConsent').checked = !!consent.marketing;

  modal.hidden = false;
}

function closeCookieModal() {
  const modal = document.getElementById('cookieModal');
  modal.hidden = true;
}

function bindFooterButton() {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'openCookieSettings') {
      openCookieModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createBanner();
  createModal();
  bindFooterButton();

  const saved = getConsent();

  if (saved) {
    applyConsent(saved);
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.hidden = true;
  }
});
