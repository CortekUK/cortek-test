import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { STEPS } from "@/features/funnel/lib/constants";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <SectionWrapper id="how-it-works" sectionName="How It Works" className="bg-section-base !py-20 sm:!py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start max-w-5xl mx-auto">
        <div className="md:sticky md:top-32">
          <span className="text-[11px] uppercase tracking-[0.15em] text-brand-cyan font-semibold mb-3 block">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
            How your free workflow review&nbsp;<span className="gradient-text">works</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            In 20 minutes we&apos;ll map your workflow. In <span className="text-brand-cyan font-semibold">4&nbsp;weeks</span> you&apos;re live.
          </p>

          <div className="hidden md:block">
            <CalendlyButton text="Start the 4-week clock" section="how-it-works" size="lg" />
            <p className="mt-3 text-sm text-slate-500">Free 20-minute workflow review. No pressure. No commitment.</p>
          </div>
        </div>

        <div ref={ref} className={cn("stagger-children relative", isVisible && "is-visible")}>
          <div className="hidden md:block absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-cyan/25 via-brand-purple/15 to-transparent pointer-events-none" />

          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="relative glass-card rounded-xl px-5 py-5 card-surface border border-navy-700/40 hover:border-brand-purple/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.12)]">
                    <span className="text-sm font-bold text-brand-cyan">{step.number}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-foreground leading-tight">{step.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden text-center">
          <CalendlyButton text="Start the 4-week clock" section="how-it-works" size="lg" />
          <p className="mt-3 text-sm text-slate-500">Free 20-minute workflow review. No pressure. No commitment.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
