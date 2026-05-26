import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";

const testimonials: { quote: string; name: string; title: string; company: string; industry: string; photo: string }[] = [
  {
    quote:
      "Cortek built us a CRM that makes running the business so much easier. Everything is in one place now with jobs, quotes and client details all organised, and it’s cut our admin time right down.",
    name: "Adam Miller",
    title: "Founder",
    company: "AM Secure",
    industry: "Security",
    photo: "/funnel/images/adam-miller.jpg",
  },
  {
    quote:
      "The new CRM fits our business perfectly. We can now manage clients, inventory and enquiries in one place. It’s made everything far more organised and lets us focus on growing Lost In Time.",
    name: "Carlito Graham",
    title: "Founder",
    company: "Lost In Time",
    industry: "Jewellers",
    photo: "/funnel/images/carlito-graham.jpg",
  },
  {
    quote:
      "Working with Cortek has been a great experience. They understood our business from day one and built a CRM that handles every part of our car rental operation perfectly.",
    name: "Sunny Singh",
    title: "Director",
    company: "RTech",
    industry: "Car Rentals",
    photo: "/funnel/images/sunny-singh.jpg",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      sectionName="Testimonials"
      className="bg-navy-900 section-alt !py-14 sm:!py-18"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
          What our clients&nbsp;<span className="gradient-text">say</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Real businesses using Cortek systems to organise workflows, reduce
          admin and manage operations in one place.
        </p>
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glass-card card-surface card-hover rounded-xl border border-navy-700/40 flex flex-row overflow-hidden min-h-[220px]"
          >
            <div className="shrink-0 w-44">
              <img
                src={t.photo}
                alt={t.name}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div className="p-5 flex flex-col flex-1 justify-center">
              <p className="text-slate-300 text-[13px] leading-relaxed mb-3 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-foreground leading-tight">
                {t.name}
              </p>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                {t.title}, {t.company}
              </p>
              <p className="text-[11px] text-slate-500 leading-tight">
                {t.industry}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex sm:hidden flex-col gap-4 max-w-md mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glass-card card-surface rounded-xl border border-navy-700/40 p-4"
          >
            <p className="text-slate-300 text-[13px] leading-relaxed mb-3">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.photo}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover object-[center_20%] shrink-0 border border-navy-700/40"
              />
              <div>
                <p className="text-[13px] font-semibold text-foreground leading-tight">
                  {t.name}
                </p>
                <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                  {t.title}, {t.company} &middot; {t.industry}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 mt-8">
        Built around each client&apos;s workflow, not a template.
      </p>
    </SectionWrapper>
  );
}
