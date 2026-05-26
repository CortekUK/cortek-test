import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { FINAL_CTA_COPY, FINAL_STATS } from "@/features/funnel/lib/constants";

export function FinalCTA() {
  return (
    <SectionWrapper id="final-cta" sectionName="Final CTA" className="bg-navy-900 section-alt !pt-12 !pb-16 sm:!pt-14 sm:!pb-20">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/10 via-brand-blue/8 to-brand-purple/10 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative glass-card rounded-2xl border border-brand-purple/20 p-8 sm:p-10 card-surface shadow-md shadow-brand-purple/8 text-center">
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ padding: '1px', background: 'linear-gradient(135deg, rgba(106,56,194,0.15), rgba(45,129,247,0.1), rgba(106,56,194,0.15))', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }} />

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight">
              Ready to find the&nbsp;<span className="gradient-text">first&nbsp;system</span> your business actually needs?
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-7 max-w-md mx-auto">
              {FINAL_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent mb-2" />
                  <div className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[15px] sm:text-base text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
              {FINAL_CTA_COPY.subheadline}
            </p>
            <CalendlyButton
              text={FINAL_CTA_COPY.cta}
              section="final-cta"
              size="lg"
              className="shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/25"
            />
            <p className="mt-3 text-sm text-slate-500">{FINAL_CTA_COPY.supporting}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
