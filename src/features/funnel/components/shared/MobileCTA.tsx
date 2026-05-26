import { useState, useEffect } from "react";
import { trackMobileCTA } from "@/features/funnel/lib/analytics";
import { useQualification } from "@/features/funnel/contexts/QualificationContext";
import { cn } from "@/features/funnel/lib/utils";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const qualification = useQualification();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 800);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    trackMobileCTA();
    qualification?.openQualification("mobile-sticky");
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="bg-navy-950/95 backdrop-blur-md border-t border-navy-700/60 px-4 py-3">
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-brand-purple to-brand-purple-light text-on-brand font-semibold py-4 rounded-xl hover:brightness-110 transition-all btn-glow cursor-pointer text-sm"
        >
          Get your free workflow review &rarr;
        </button>
      </div>
    </div>
  );
}
