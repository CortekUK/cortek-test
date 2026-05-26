import { SITE_CONFIG } from "./constants";

export function getGTMScript() {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE_CONFIG.gtmId}');`;
}

export function getGTMNoscript() {
  return `<iframe src="https://www.googletagmanager.com/ns.html?id=${SITE_CONFIG.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
}

export function initConsentMode() {
  return `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});`;
}

export function updateConsent(granted: boolean) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
    });
    const consentState = granted ? "granted" : "denied";
    window.dataLayer.push({
      "gtm.consent": {
        ad_storage: consentState,
        ad_user_data: consentState,
        ad_personalization: consentState,
        analytics_storage: consentState,
      },
    });
  }
}
