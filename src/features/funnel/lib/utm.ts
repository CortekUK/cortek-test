const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "cortek_utm";

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmData: Record<string, string> = {};
  let hasUtm = false;

  for (const param of UTM_PARAMS) {
    const value = params.get(param);
    if (value) {
      utmData[param] = value;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
  }
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
