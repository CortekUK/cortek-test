import { AUDIT_STRIP } from "@/features/funnel/lib/constants";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";
import { ClipboardIcon, ChartDownIcon, ZapIcon } from "@/features/funnel/components/ui/Icons";
import type { ComponentType } from "react";

const icons: ComponentType<{ className?: string }>[] = [ClipboardIcon, ChartDownIcon, ZapIcon];

export function AuditStrip() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="px-4 sm:px-6 lg:px-8 -mt-4 pb-10 sm:pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-2xl card-surface border border-brand-purple/10 shadow-sm shadow-brand-purple/5 py-7 px-6 sm:py-8 sm:px-10">
          <p className="text-center text-[11px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-6">
            What you&apos;ll get in the free audit
          </p>
          <div
            ref={ref}
            className={cn("stagger-children grid sm:grid-cols-3 gap-5 sm:gap-6", isVisible && "is-visible")}
          >
            {AUDIT_STRIP.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-[18px] h-[18px] text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm mb-0.5">{item.title}</h3>
                    <p className="text-slate-400 text-[13px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
