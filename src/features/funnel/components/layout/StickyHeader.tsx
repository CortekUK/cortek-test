import { useState, useEffect } from "react";
import { trackSecondaryCTA } from "@/features/funnel/lib/analytics";
import { cn } from "@/features/funnel/lib/utils";

export function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleHowItWorksClick(e: React.MouseEvent) {
    e.preventDefault();
    trackSecondaryCTA("sticky-header");
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-navy-950/90 backdrop-blur-md transition-all duration-300 sticky-header",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue" />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <img
          src="/funnel/logo.svg"
          alt="Cortek"
          width={120}
          height={22}
          className="h-6 w-auto"
        />
        <div className="flex items-center gap-3">
          <a
            href="#how-it-works"
            onClick={handleHowItWorksClick}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-purple bg-transparent text-brand-purple hover:bg-brand-purple/10 font-semibold transition-all text-sm cursor-pointer"
          >
            How it works
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
