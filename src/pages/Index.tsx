import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationHero from "@/components/ConsultationHero";
import ServiceCategoriesSection from "@/components/ServiceCategoriesSection";
import ConsultationValueAndTrust from "@/components/ConsultationValueAndTrust";
import ConsultationForm from "@/components/ConsultationForm";
import ConsultationProcess from "@/components/ConsultationProcess";
import ConsultationWhyCortekResults from "@/components/ConsultationWhyCortekResults";
import ConsultationIndustries from "@/components/ConsultationIndustries";
import ConsultationIntegrateAutomateAccelerate from "@/components/ConsultationIntegrateAutomateAccelerate";
import ConsultationTestimonial from "@/components/ConsultationTestimonial";
import ConsultationFAQ from "@/components/ConsultationFAQ";
import ConsultationClosingCTA from "@/components/ConsultationClosingCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CORTEK - Business Automation & Custom CRM Solutions | Save 10-15 Hours Weekly</title>
        <meta name="description" content="Transform your business with CORTEK's bespoke CRM systems and automation. Built for gyms, construction, restaurants & retail. Save 10–15 hours weekly with smart automation." />
        <meta name="keywords" content="business automation, custom CRM, automation solutions, business efficiency, save time, reduce admin, CRM systems, workflow automation" />
        <meta property="og:title" content="CORTEK - Business Automation & Custom CRM Solutions" />
        <meta property="og:description" content="Transform your business with CORTEK's bespoke CRM systems and automation. Save 10–15 hours weekly with smart automation built around your workflows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cortek.io/" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CORTEK - Business Automation & Custom CRM Solutions" />
        <meta name="twitter:description" content="Transform your business with CORTEK's bespoke CRM systems and automation. Save 10–15 hours weekly with smart automation built around your workflows." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <link rel="canonical" href="https://www.cortek.io/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CORTEK",
              "url": "https://www.cortek.io",
              "logo": "https://www.cortek.io/lovable-uploads/favicon-ct-512.png",
              "description": "CORTEK provides bespoke CRM systems and business automation solutions that help companies save 10–15 hours a week, cut admin, reduce costs, and scale smarter.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["en"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/cortek"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CORTEK",
              "url": "https://www.cortek.io",
              "description": "Business Automation & Custom CRM Solutions",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.cortek.io/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the consultation really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every CORTEK consultation is completely free with no obligation or hidden costs. You'll walk away with real insights whether you decide to move forward or not."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens after the consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After your session, we'll send a tailored automation plan summarising opportunities, tools to use, and an estimated ROI impact so you can act confidently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "I'm not technical — will this make sense?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We simplify every recommendation, explaining exactly what each automation does and how it helps your business — no jargon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work with 250+ popular platforms including WhatsApp, Google Sheets, Shopify, Slack, Playtomic, and more. Our systems connect to your existing tools seamlessly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How soon can we see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most clients see measurable time savings and workflow improvements within the first 2–4 weeks after implementation."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main>
        <ConsultationHero />
        <ConsultationValueAndTrust />
        <ServiceCategoriesSection />
        <ConsultationForm />
        <ConsultationProcess />
        <ConsultationWhyCortekResults />
        <ConsultationIndustries />
        <ConsultationIntegrateAutomateAccelerate />
        <ConsultationTestimonial />
        <ConsultationFAQ />
        <ConsultationClosingCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
