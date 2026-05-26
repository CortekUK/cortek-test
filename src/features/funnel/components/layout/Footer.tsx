import { SITE_CONFIG } from "@/features/funnel/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src="/funnel/logo.svg"
            alt="Cortek"
            width={100}
            height={18}
            className="h-5 w-auto"
          />
          <p className="text-slate-500 text-[13px] max-w-sm leading-relaxed">
            Bespoke CRM systems, AI assistants and workflow automations for growing businesses.
          </p>
          <div className="flex gap-5 text-[13px] text-slate-500">
            <a href="/privacy-policy" className="hover:text-brand-purple transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-xs text-slate-500/50">
            &copy; {SITE_CONFIG.name} 2024&ndash;{year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
