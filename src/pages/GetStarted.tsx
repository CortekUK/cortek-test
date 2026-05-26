import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Helmet } from "react-helmet-async";
import { QualificationProvider } from "@/features/funnel/contexts/QualificationContext";
import { AuditQualificationOverlay } from "@/features/funnel/components/qualification/AuditQualificationOverlay";
import { StickyHeader } from "@/features/funnel/components/layout/StickyHeader";
import { Footer } from "@/features/funnel/components/layout/Footer";
import { Hero } from "@/features/funnel/components/sections/Hero";
import { DashboardPreview } from "@/features/funnel/components/sections/DashboardPreview";
import { PainPoints } from "@/features/funnel/components/sections/PainPoints";
import { Testimonials } from "@/features/funnel/components/sections/Testimonials";
import { MidPageCTA } from "@/features/funnel/components/sections/MidPageCTA";
import { Services } from "@/features/funnel/components/sections/Services";
import { Integrations } from "@/features/funnel/components/sections/Integrations";
import { HowItWorks } from "@/features/funnel/components/sections/HowItWorks";
import { FAQ } from "@/features/funnel/components/sections/FAQ";
import { FinalCTA } from "@/features/funnel/components/sections/FinalCTA";
import { captureUtmParams } from "@/features/funnel/lib/utm";
import { SITE_CONFIG } from "@/features/funnel/lib/constants";
import { getGTMScript, initConsentMode } from "@/features/funnel/lib/gtm";
import "@/features/funnel/funnel.css";

const hasRealGTM = SITE_CONFIG.gtmId && !SITE_CONFIG.gtmId.includes("XXXXXXX");

interface GetStartedProps {
  showQuiz?: boolean;
}

export default function GetStarted({ showQuiz = false }: GetStartedProps = {}) {
  const { resolvedTheme } = useTheme();

  // Sync funnel-light class on .funnel-root from next-themes
  useEffect(() => {
    document.querySelector(".funnel-root")?.classList.toggle("funnel-light", resolvedTheme === "light");
  }, [resolvedTheme]);

  useEffect(() => {
    captureUtmParams();

    if (hasRealGTM) {
      // Consent mode default
      const consentScript = document.createElement("script");
      consentScript.innerHTML = initConsentMode();
      document.head.appendChild(consentScript);

      // GTM loader
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = getGTMScript();
      document.head.appendChild(gtmScript);

      return () => {
        consentScript.remove();
        gtmScript.remove();
      };
    }
  }, []);

  return (
    <div className="funnel-root">
      <Helmet>
        <title>Cortek — Custom CRMs, AI Assistants & Automation</title>
        <meta
          name="description"
          content="Cortek builds custom CRMs, AI assistants and workflow automations for businesses that want to stop losing leads, automate admin and run operations from one system."
        />
        <meta property="og:title" content="Cortek — Custom CRMs, AI Assistants & Automation" />
        <meta
          property="og:description"
          content="Custom CRMs, AI assistants and workflow automation built around how your business actually works."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {showQuiz && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <QualificationProvider directBooking={!showQuiz}>
        <StickyHeader />
        <main>
          <Hero />
          <DashboardPreview />
          <PainPoints />
          <Testimonials />
          <MidPageCTA />
          <Services />
          <Integrations />
          <HowItWorks />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <AuditQualificationOverlay />
      </QualificationProvider>
    </div>
  );
}
