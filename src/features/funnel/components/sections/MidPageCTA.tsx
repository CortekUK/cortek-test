import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";

export function MidPageCTA() {
  return (
    <SectionWrapper id="mid-cta" sectionName="Mid CTA" className="!py-10 sm:!py-12">
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/6 via-brand-blue/4 to-brand-purple/6 rounded-2xl blur-2xl pointer-events-none" />

        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-tight">
            See where your workflow is&nbsp;<span className="gradient-text">leaking&nbsp;time</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed mb-5 max-w-lg mx-auto">
            The free workflow review maps your current process and shows you exactly what to fix first.
          </p>
          <CalendlyButton
            section="mid-cta"
            size="md"
            className="shadow-md shadow-brand-purple/15 hover:shadow-lg hover:shadow-brand-purple/20"
          />
          <p className="mt-2.5 text-xs text-slate-500">Free 20-minute workflow review. No commitment.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
