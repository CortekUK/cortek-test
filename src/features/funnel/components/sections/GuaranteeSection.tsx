import { useRef, useEffect } from "react";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";
import { trackSectionView } from "@/features/funnel/lib/analytics";

const PROOF_POINTS = [
  "Fixed-scope contracts agreed before kickoff",
  "Daily progress visibility via dedicated Slack channel",
  "24-hour response time during build phase",
];

export function GuaranteeSection() {
  const { ref, isVisible } = useInView(0.1);
  const tracked = useRef(false);

  useEffect(() => {
    if (isVisible && !tracked.current) {
      tracked.current = true;
      trackSectionView("Guarantee");
    }
  }, [isVisible]);

  return (
    <section id="guarantee" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 guarantee-section-bg" />
      <div className="absolute inset-0 hero-grid-faint pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          "relative py-24 sm:py-32 lg:py-40 fade-in-section",
          isVisible && "is-visible"
        )}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] text-brand-cyan font-semibold mb-6">
            The Cortek Guarantee
          </span>

          <h2 className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-foreground mb-4 leading-tight">
            Live in <span className="text-brand-purple-light">4&nbsp;weeks.</span>{' '}
            <span className="font-medium italic text-slate-300">Or&nbsp;your&nbsp;money&nbsp;back.</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            If we miss the date, you get cash back. That&apos;s not a marketing line — it&apos;s how every Cortek contract is&nbsp;written.
          </p>

          <div className="inline-flex flex-col gap-4 text-left">
            {PROOF_POINTS.map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-brand-cyan shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5),0_0_20px_rgba(34,211,238,0.15)]" />
                <p className="text-[15px] sm:text-base text-slate-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
