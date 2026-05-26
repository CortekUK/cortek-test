import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BOOKING_WIDGET_URL } from "@/features/funnel/lib/constants";
import { trackBookingClicked } from "@/features/funnel/lib/analytics";
import { useQualification } from "@/features/funnel/contexts/QualificationContext";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

interface CompletionScreenProps {
  email?: string;
}

export function CompletionScreen({ email }: CompletionScreenProps = {}) {
  const tracked = useRef(false);
  const navigate = useNavigate();
  const qualification = useQualification();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const bookingUrl = email
    ? `${BOOKING_WIDGET_URL}${BOOKING_WIDGET_URL.includes("?") ? "&" : "?"}email=${encodeURIComponent(email)}`
    : BOOKING_WIDGET_URL;

  useEffect(() => {
    if (!tracked.current) {
      trackBookingClicked();
      tracked.current = true;
    }

    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }

    // Listen for GHL booking confirmation message from the iframe
    function handleMessage(e: MessageEvent) {
      // GHL/LeadConnector widgets post messages on booking completion
      if (
        typeof e.data === "string" &&
        (e.data.includes("booked") || e.data.includes("scheduled") || e.data.includes("confirmed"))
      ) {
        qualification?.closeQualification();
        navigate("/audit-booked");
        return;
      }
      if (typeof e.data === "object" && e.data !== null) {
        const str = JSON.stringify(e.data);
        if (str.includes("booked") || str.includes("scheduled") || str.includes("confirmed")) {
          qualification?.closeQualification();
          navigate("/audit-booked");
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate, qualification]);

  return (
    <div className="step-forward text-center">
      <div className="check-animate inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple/15 border border-brand-purple/20 mb-4">
        <svg className="w-7 h-7 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 leading-tight">
        You&apos;re all set
      </h2>
      <p className="text-slate-400 text-sm max-w-sm mx-auto mb-5 leading-relaxed">
        We&apos;ll use your answers to tailor the audit to your business. Choose a time that works for you.
      </p>

      <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden relative">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-900/50 rounded-xl" style={{ minHeight: "600px" }}>
            <div className="w-8 h-8 border-2 border-brand-purple/30 border-t-brand-purple rounded-full animate-spin" />
            <p className="text-slate-400 text-xs">Loading booking calendar&hellip;</p>
          </div>
        )}
        <iframe
          src={bookingUrl}
          style={{ width: "100%", height: "calc(100vh - 280px)", minHeight: "600px", border: "none" }}
          title="Book your free systems audit"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>

      <p className="text-slate-500 text-xs mt-3">
        Free 20-minute audit. No pressure. No&nbsp;commitment.
      </p>
    </div>
  );
}
