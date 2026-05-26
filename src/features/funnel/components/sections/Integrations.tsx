import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";

type Tool = {
  name: string;
  src?: string | null;
  darkSrc?: string;
  icon?: React.ReactNode;
};

const row1: Tool[] = [
  { name: "Google Sheets", src: "/funnel/icons/sheets.svg" },
  { name: "Gmail", src: "/funnel/icons/gmail.svg" },
  { name: "Stripe", src: null, icon: <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.849-6.591-7.305z" fill="#635BFF" /> },
  { name: "WhatsApp", src: "/funnel/icons/whatsapp.svg" },
  { name: "Shopify", src: "/funnel/icons/shopify.svg" },
  { name: "Calendly", src: "/funnel/icons/calendly.svg" },
  { name: "OpenAI", src: "/funnel/icons/openai.svg", darkSrc: "/funnel/icons/openai-dark.svg" },
  { name: "Auth.js", src: "/funnel/icons/authjs.svg" },
  { name: "Slack", src: "/funnel/icons/slack.svg" },
  { name: "Mailchimp", src: "/funnel/icons/mailchimp.svg" },
];

const row2: Tool[] = [
  { name: "Loom", src: "/funnel/icons/loom.svg" },
  { name: "Excel", src: "/funnel/icons/excel.svg" },
  { name: "Twilio", src: "/funnel/icons/twilio.svg" },
  { name: "Asana", src: "/funnel/icons/asana.svg" },
  { name: "Claude", src: "/funnel/icons/claude.svg" },
  { name: "Google Calendar", src: "/funnel/icons/calendar.svg" },
  { name: "Whop", src: "/funnel/icons/whop.svg", darkSrc: "/funnel/icons/whop-dark.svg" },
  { name: "Microsoft", src: "/funnel/icons/microsoft.svg" },
  { name: "HubSpot", src: "/funnel/icons/hubspot.svg" },
  { name: "Zapier", src: "/funnel/icons/zapier.svg" },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="shrink-0">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-card card-surface border border-navy-700/40 flex items-center justify-center hover:border-brand-purple/25 transition-colors">
        {tool.darkSrc ? (
          <>
            <img src={tool.darkSrc} alt="" width={44} height={44} className="w-11 h-11 object-contain icon-dark-only" />
            <img src={tool.src!} alt="" width={44} height={44} className="w-11 h-11 object-contain icon-light-only" />
          </>
        ) : tool.src ? (
          <img src={tool.src} alt="" width={44} height={44} className="w-11 h-11 object-contain" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="none">
            {tool.icon}
          </svg>
        )}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <SectionWrapper id="integrations" sectionName="Integrations" className="!py-14 sm:!py-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
          Connect the tools you&nbsp;<span className="gradient-text">already&nbsp;use</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          Your custom system can connect forms, calendars, payments, email, SMS, dashboards and the tools already running your business.
        </p>
      </div>

      <div className="relative overflow-hidden mx-auto max-w-6xl">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none carousel-fade-left" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none carousel-fade-right" />

        <div
          className="flex gap-5 sm:gap-7 pt-4 pb-3 integration-carousel"
          style={{ width: "max-content" }}
        >
          {[...row1, ...row1, ...row1].map((tool, i) => (
            <ToolCard key={`r1-${tool.name}-${i}`} tool={tool} />
          ))}
        </div>

        <div
          className="flex gap-5 sm:gap-7 pt-3 pb-4 integration-carousel-reverse"
          style={{ width: "max-content" }}
        >
          {[...row2, ...row2, ...row2].map((tool, i) => (
            <ToolCard key={`r2-${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-8">
        If a tool has an API, webhook or export, we can usually connect&nbsp;it.
      </p>
    </SectionWrapper>
  );
}
