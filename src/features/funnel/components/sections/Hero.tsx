import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { ThemeToggle } from "@/features/funnel/components/shared/ThemeToggle";
import { HERO_COPY } from "@/features/funnel/lib/constants";
import { trackSecondaryCTA } from "@/features/funnel/lib/analytics";

export function Hero() {
  function handleSecondaryClick(e: React.MouseEvent) {
    e.preventDefault();
    trackSecondaryCTA("hero");
    document.getElementById("dashboard-preview")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleHowItWorksClick(e: React.MouseEvent) {
    e.preventDefault();
    trackSecondaryCTA("hero-nav");
    document.getElementById("dashboard-preview")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 hero-gradient" />

      {/* Ambient background glows — more prominent on mobile where there are no floating icons */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[400px] bg-brand-purple/10 lg:bg-brand-purple/6 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[30%] w-[250px] h-[250px] lg:w-[350px] lg:h-[300px] bg-brand-blue/8 lg:bg-brand-blue/5 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none" />
      <div className="absolute top-[65%] right-0 w-[200px] h-[200px] lg:hidden bg-brand-purple/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="hidden lg:block pointer-events-none" aria-hidden="true">
        {[
          { label: "WhatsApp",        x: "9%",  y: "10%", delay: 0,   src: "/funnel/icons/whatsapp.svg" },
          { label: "Calendly",        x: "27%", y: "12%", delay: 2,   src: "/funnel/icons/calendly.svg", iconSize: "w-12 h-12" },
          { label: "Asana",           x: "72%", y: "14%", delay: 3.5, src: "/funnel/icons/asana.svg" },
          { label: "Loom",            x: "84%", y: "14%", delay: 1,   src: "/funnel/icons/loom.svg" },
          { label: "OpenAI",          x: "3%",  y: "32%", delay: 1.5, src: "/funnel/icons/openai.svg", darkSrc: "/funnel/icons/openai-dark.svg" },
          { label: "Stripe",          x: "93%", y: "24%", delay: 3,   icon: <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.849-6.591-7.305z" fill="#635BFF" /> },
          { label: "Gmail",           x: "7%",  y: "54%", delay: 3.5, src: "/funnel/icons/gmail.svg" },
          { label: "Sheets",          x: "83%", y: "44%", delay: 4,   src: "/funnel/icons/sheets.svg" },
          { label: "Excel",           x: "18%", y: "48%", delay: 0.5, src: "/funnel/icons/excel.svg" },
          { label: "Claude",          x: "4%",  y: "74%", delay: 4.5, src: "/funnel/icons/claude.svg" },
          { label: "Google Calendar", x: "18%", y: "78%", delay: 2.5, src: "/funnel/icons/calendar.svg" },
          { label: "Twilio",          x: "79%", y: "74%", delay: 4.5, src: "/funnel/icons/twilio.svg" },
          { label: "Shopify",         x: "93%", y: "72%", delay: 5,   src: "/funnel/icons/shopify.svg" },
        ].map((item) => (
          <div
            key={item.label}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              animation: `hero-icon-float ${16 + item.delay * 2}s ease-in-out infinite ${item.delay}s`,
            }}
          >
            <div className="hero-icon-card w-[68px] h-[68px] rounded-2xl bg-navy-800/50 backdrop-blur-sm border border-navy-600/25 flex items-center justify-center opacity-[0.75]">
              {"darkSrc" in item && item.darkSrc ? (
                <>
                  <img src={item.darkSrc} alt="" width={36} height={36} className="w-9 h-9 object-contain icon-dark-only" />
                  <img src={item.src} alt="" width={36} height={36} className="w-9 h-9 object-contain icon-light-only" />
                </>
              ) : "src" in item && item.src ? (
                <img src={item.src} alt="" width={36} height={36} className={`${"iconSize" in item && item.iconSize ? item.iconSize : "w-9 h-9"} object-contain`} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="none"
                >
                  {"icon" in item && item.icon}
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex items-center justify-between h-20">
        <img
          src="/funnel/logo.svg"
          alt="Cortek"
          width={140}
          height={26}
          className="h-7 w-auto"
        />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#dashboard-preview"
            onClick={handleHowItWorksClick}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-purple bg-transparent text-brand-purple hover:bg-brand-purple/10 font-semibold transition-all text-sm cursor-pointer"
          >
            How it works
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center pt-12 sm:pt-18 pb-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 mb-7">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] text-brand-purple-light font-semibold">
              Custom CRM &middot; AI &middot; Automation
            </span>
          </div>

          <h1 className="text-[1.65rem] sm:text-[2.1rem] lg:text-[2.5rem] font-bold text-foreground leading-[1.2] mb-5">
            {HERO_COPY.headline}
          </h1>

          <p className="text-[15px] sm:text-base text-slate-400 leading-relaxed mb-9 max-w-xl mx-auto">
            {HERO_COPY.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CalendlyButton
              text={HERO_COPY.cta}
              section="hero"
              size="lg"
              className="px-7 py-3.5 text-[15px] shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/25"
            />
            <a
              href="#dashboard-preview"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl border border-navy-600 bg-navy-800/50 text-slate-300 hover:text-white hover:border-brand-purple/30 hover:bg-navy-700/50 font-medium transition-all text-[15px]"
              onClick={handleSecondaryClick}
            >
              {HERO_COPY.secondaryCta}
              <span className="text-brand-purple-light">&rarr;</span>
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">{HERO_COPY.supporting}</p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto w-full pt-8">
        <p className="text-center text-sm font-medium text-slate-400 mb-5 tracking-wide">
          What you&apos;ll leave with
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { num: "01", title: "Workflow map", desc: "See how leads, tasks and follow-ups move through your business." },
            { num: "02", title: "Bottleneck review", desc: "Find where work gets lost, delayed or repeated manually." },
            { num: "03", title: "First-build recommendation", desc: "Know the most valuable system to build first." },
          ].map((item) => (
            <div
              key={item.num}
              className="glass-card rounded-xl px-4 py-3 card-surface border border-navy-700/40"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-purple/10 text-brand-purple text-[10px] font-bold shrink-0">
                  {item.num}
                </span>
                <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
