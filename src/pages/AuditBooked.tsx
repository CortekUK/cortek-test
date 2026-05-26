import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/features/funnel/components/ui/Button";
import { Footer } from "@/features/funnel/components/layout/Footer";
import "@/features/funnel/funnel.css";

const NEXT_STEPS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Check your email",
    description: "Your calendar invite and booking confirmation should arrive shortly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "We'll review your workflow context",
    description: "We'll use your answers to understand your tools, bottlenecks and priorities before the call.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Bring one messy process",
    description: "Think of one workflow you want to improve first, such as lead follow-up, admin, payments or reporting.",
  },
];

const CALL_BULLETS = [
  "We review your current workflow",
  "We identify the biggest bottlenecks",
  "We map the first system or automation to build",
  "We explain what would be involved if you want to move forward",
];

export default function AuditBooked() {
  const navigate = useNavigate();

  return (
    <div className="funnel-root funnel-light">
      <Helmet>
        <title>Audit Booked — Cortek</title>
        <meta
          name="description"
          content="Your free systems audit is booked. We'll review your answers and prepare a tailored workflow review before the call."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/funnel/logo.svg"
            alt="Cortek"
            width={120}
            height={22}
            className="h-6 w-auto"
          />
        </div>

        {/* Success heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple/10 mb-5">
            <svg className="w-7 h-7 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            <span className="gradient-text">Your systems audit is booked</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We'll review your answers before the call and use them to map where your workflow is leaking time, leads or manual effort.
          </p>
        </div>

        {/* Next-step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {NEXT_STEPS.map((step) => (
            <div
              key={step.title}
              className="glass-card card-surface rounded-2xl p-5 border border-navy-700/40"
            >
              <div className="text-brand-purple mb-3">{step.icon}</div>
              <h3 className="font-semibold text-[15px] mb-1.5">{step.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* What happens on the call */}
        <div className="glass-card card-surface rounded-2xl p-6 sm:p-8 border border-navy-700/40 mb-14">
          <h2 className="text-lg font-semibold mb-4">What happens on the call?</h2>
          <ul className="space-y-3">
            {CALL_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-slate-500/70 text-[13px] mt-5 pt-4 border-t border-navy-700/20 text-center">
            No extra preparation needed. We'll use your audit answers to guide the call.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" onClick={() => navigate("/get-started")}>
            Return to Cortek
          </Button>
          <Button variant="ghost" size="lg" onClick={() => window.open("https://cortek.io", "_blank")}>
            Visit main website
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
