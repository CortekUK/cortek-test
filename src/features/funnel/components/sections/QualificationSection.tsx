import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";

const QUALIFICATIONS = [
  {
    number: "01",
    muted: "Your customer info is in HubSpot, your jobs are in a spreadsheet, your invoices are in QuickBooks,",
    punch: "and half your team's decisions live in Slack threads no one can find.",
  },
  {
    number: "02",
    muted: "You're losing leads because something didn't get logged. You're missing follow-ups because the reminder lived in someone's head.",
    punch: "Your team spends hours every week just moving data between tools.",
  },
  {
    number: "03",
    muted: "You've thought about how your business should actually run. Every off-the-shelf tool forces you to bend your process to fit theirs.",
    punch: "You want a system that fits your business \u2014 not the other way round.",
  },
];

export function QualificationSection() {
  return (
    <SectionWrapper id="qualification" sectionName="Qualification" className="bg-section-base !py-20 sm:!py-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 leading-tight text-center">
          Is this for <span className="gradient-text">you?</span>
        </h2>

        <div className="space-y-4">
          {QUALIFICATIONS.map((item) => (
            <div
              key={item.number}
              className="rounded-xl bg-navy-800/40 border border-navy-700/40 border-l-2 border-l-brand-cyan/40 px-5 py-5 sm:px-6 sm:py-6"
            >
              <span className="inline-block text-[11px] font-bold tracking-wider text-brand-cyan/70 mb-3">
                {item.number}
              </span>
              <p className="text-[15px] sm:text-[16px] leading-[1.55] sm:leading-[1.6]">
                <span className="text-slate-400">{item.muted} </span>
                <span className="text-slate-200">{item.punch}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
