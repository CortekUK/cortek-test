import { useRef, useEffect } from "react";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { FINAL_CTA_COPY } from "@/features/funnel/lib/constants";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";
import { trackSectionView } from "@/features/funnel/lib/analytics";

const CTA_STATS = [
  { value: "10+", label: "Years building custom systems" },
  { value: "3", label: "Countries — US, UK, UAE" },
  { value: "100%", label: "Senior engineers, no outsourcing" },
];

export function FinalCTA() {
  const { ref, isVisible } = useInView(0.1);
  const tracked = useRef(false);

  useEffect(() => {
    if (isVisible && !tracked.current) {
      tracked.current = true;
      trackSectionView("Final CTA");
    }
  }, [isVisible]);

  return (
    <section id="final-cta" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 final-cta-bg" />
      <div className="absolute inset-0 hero-grid-faint pointer-events-none" />
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          "relative py-24 sm:py-32 lg:py-40 fade-in-section",
          isVisible && "is-visible"
        )}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold text-foreground mb-4 leading-tight">
            Ready to stop running your business across{' '}
            <span className="text-brand-purple-light">12&nbsp;tools?</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Live in <span className="text-brand-purple-light">4&nbsp;weeks.</span>{' '}
            <span className="text-brand-cyan">Guaranteed.</span>
          </p>
          <p className="text-sm sm:text-base lg:text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
            Strategy call slots release weekly. We take on <span className="text-brand-cyan font-semibold">2–3 new builds per&nbsp;month.</span>
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 max-w-2xl mx-auto">
            {CTA_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] font-bold text-white mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent mb-2" />
                <div className="text-[10px] sm:text-xs text-slate-400 leading-normal text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
            {FINAL_CTA_COPY.subheadline}
          </p>

          {/* Static testimonial — Adam Miller */}
          <div className="rounded-2xl bg-navy-800/40 border border-brand-purple/30 p-6 sm:p-8 max-w-xl mx-auto mb-10 text-left testimonial-card-glow testimonial-card" style={{ boxShadow: '0 0 50px rgba(124,58,237,0.22), 0 0 100px rgba(124,58,237,0.10), 0 8px 32px rgba(0,0,0,0.3)' }}>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              &ldquo;Cortek built us a CRM that makes running the business so much easier. Everything is in one place now with jobs, quotes and client details all organized, and it&apos;s cut our admin time right down.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/funnel/images/adam-miller.jpg"
                alt="Adam Miller"
                className="w-14 h-14 rounded-full object-cover object-[center_20%] shrink-0 border-2 border-brand-purple/30 shadow-lg shadow-brand-purple/15"
              />
              <div>
                <p className="text-sm font-semibold text-white leading-tight">Adam Miller</p>
                <p className="text-xs text-slate-300 leading-tight mt-0.5">Founder, AM Secure</p>
              </div>
            </div>
          </div>

          <CalendlyButton
            text="Claim your 4-week guarantee"
            section="final-cta"
            size="lg"
            className="!px-8 sm:!px-16 lg:!px-20 !py-7 !text-lg sm:!text-xl lg:!text-2xl !rounded-2xl !max-w-full btn-glow-lg"
          />
          <p className="mt-4 text-sm text-slate-500">{FINAL_CTA_COPY.supporting}</p>
        </div>
      </div>
    </section>
  );
}
