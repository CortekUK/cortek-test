import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";
import {
  DatabaseIcon,
  BotIcon,
  ZapIcon,
  LinkIcon,
  BarChartIcon,
  MailIcon,
} from "@/features/funnel/components/ui/Icons";
import type { ComponentType } from "react";

const modules: { icon: ComponentType<{ className?: string }>; title: string; desc: string; tag: string }[] = [
  { icon: BarChartIcon, title: "Dashboards", desc: "See what is active, overdue, paid, pending or stuck.", tag: "Clear visibility" },
  { icon: ZapIcon, title: "Workflow automation", desc: "Trigger follow-ups, reminders, handovers and task updates.", tag: "Less manual chasing" },
  { icon: BotIcon, title: "AI assistants", desc: "Draft replies, classify leads and support repetitive admin.", tag: "Faster admin" },
  { icon: LinkIcon, title: "Integrations", desc: "Connect forms, calendars, payments, email, SMS and internal tools.", tag: "Connected tools" },
  { icon: MailIcon, title: "Email & SMS", desc: "Send confirmations, reminders and follow-ups without manual chasing.", tag: "Automatic follow-up" },
];

export function Services() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <SectionWrapper id="services" sectionName="Services" className="bg-navy-900 section-alt !py-12 sm:!py-14">
      <div
        ref={ref}
        className={cn("grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto", isVisible && "is-visible")}
      >
        <div className="lg:sticky lg:top-32">
          <span className="text-[11px] uppercase tracking-[0.15em] text-brand-cyan font-semibold mb-3 block">
            Custom system modules
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
            Build the system&nbsp;<span className="gradient-text">your&nbsp;business</span> actually needs
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            Your workflow review helps us decide what matters first, then we build the right modules around one connected core.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-brand-purple/5 via-brand-blue/4 to-transparent rounded-2xl blur-2xl pointer-events-none" />

          <div className="relative glass-card rounded-xl card-surface border border-navy-700/40 shadow-md shadow-black/10 overflow-hidden">
            <div className="px-4 py-3.5 bg-gradient-to-r from-brand-purple/[0.06] to-brand-blue/[0.04] border-b border-navy-700/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-purple/15 border border-brand-purple/10 flex items-center justify-center shrink-0">
                  <DatabaseIcon className="w-[18px] h-[18px] text-brand-purple" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-foreground">Custom CRM core</h4>
                  <p className="text-slate-400 text-xs leading-snug mt-0.5">One place to manage leads, customers, jobs, tasks and next steps.</p>
                </div>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-brand-purple/8 text-[10px] font-medium text-brand-purple-light shrink-0">
                  One central system
                </span>
              </div>
            </div>

            <div className="px-4 py-2 border-b border-navy-700/30 bg-navy-800/20">
              <p className="text-[11px] text-slate-500 font-medium">Start with the core. Add only the modules your workflow needs.</p>
            </div>

            <div className="relative">
              <div className="absolute left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/15 via-brand-purple/8 to-transparent pointer-events-none" />

              {modules.map(({ icon: Icon, title, desc, tag }, i) => (
                <div
                  key={title}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-2.5 hover:bg-brand-purple/[0.03] transition-colors group",
                    i < modules.length - 1 && "border-b border-navy-700/20"
                  )}
                >
                  <div className="relative z-10 w-6 h-6 rounded-md bg-navy-800 border border-navy-700/50 flex items-center justify-center shrink-0 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/10 transition-colors">
                    <Icon className="w-3 h-3 text-brand-purple" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] font-semibold text-foreground leading-tight">{title}</h4>
                    <p className="text-slate-400 text-[11px] leading-snug mt-0.5">{desc}</p>
                  </div>
                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-brand-purple/6 text-[10px] font-medium text-slate-400 shrink-0 group-hover:text-brand-purple-light group-hover:bg-brand-purple/10 transition-colors">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
