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

  !(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
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
  window.gtag = window.gtag || function() { dataLayer.push(arguments); };
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
  if (document.getElementById('cookieBanner')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookieBanner';
  banner.innerHTML = `
    <h3 class="cookie-banner__title">Usamos cookies y herramientas de medicion</h3>
    <p class="cookie-banner__text">
      Usamos cookies para que el sitio funcione bien y, si aceptas, medir visitas y publicidad. Mas informacion en nuestra
      <a href="./cookies.html">Politica de Cookies</a> y
      <a href="./privacidad.html">Politica de Privacidad</a>.
    </p>
    <div class="cookie-banner__actions">
      <button class="cookie-btn cookie-btn--primary" id="acceptAllCookies">Aceptar</button>
      <button class="cookie-btn cookie-btn--secondary" id="rejectCookies">Rechazar</button>
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
}

function scheduleBanner() {
  let shown = false;

  const showBanner = () => {
    if (shown) return;
    shown = true;
    window.removeEventListener('scroll', showBanner);
    window.removeEventListener('pointerdown', showBanner);
    window.removeEventListener('keydown', showBanner);
    createBanner();
  };

  window.setTimeout(showBanner, 5000);
  window.addEventListener('scroll', showBanner, { once: true, passive: true });
  window.addEventListener('pointerdown', showBanner, { once: true });
  window.addEventListener('keydown', showBanner, { once: true });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = getConsent();

  if (saved) {
    applyConsent(saved);
    return;
  }

  if (document.readyState === 'complete') {
    scheduleBanner();
    return;
  }

  window.addEventListener('load', scheduleBanner, { once: true });
});
