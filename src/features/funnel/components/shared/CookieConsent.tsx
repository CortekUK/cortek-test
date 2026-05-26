import { useState, useEffect } from "react";
import { updateConsent } from "@/features/funnel/lib/gtm";
import { cn } from "@/features/funnel/lib/utils";

const CONSENT_KEY = "cortek_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateConsent(true);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className={cn(
        "cookie-banner fixed bottom-4 right-4 z-50 max-w-xs rounded-lg bg-navy-800/90 backdrop-blur-sm border border-navy-700/50 px-4 py-3 shadow-md",
        visible && "is-visible"
      )}
    >
      <p className="text-xs text-slate-400 mb-2 leading-relaxed">
        We use cookies to analyze traffic.{" "}
        <a href="/privacy-policy" className="text-brand-blue underline underline-offset-2 hover:text-brand-blue-light">
          Privacy Policy
        </a>
      </p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={decline}
          className="px-2.5 py-1 text-xs text-slate-400 hover:text-foreground rounded transition-colors cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="px-2.5 py-1 text-xs font-medium bg-brand-purple text-on-brand rounded hover:bg-brand-purple-light transition-colors cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
