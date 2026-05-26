import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/PricingHero";
import PricingPackages from "@/components/PricingPackages";
import WhyCortek from "@/components/WhyCortek";
import TrustSection from "@/components/TrustSection";
import PricingFAQ from "@/components/PricingFAQ";
import PricingCTA from "@/components/PricingCTA";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - CORTEK | Simple, Transparent Pricing for Business Automation</title>
        <meta name="description" content="Transparent pricing for bespoke CRM systems and business automation. Custom solutions tailored to your business needs. Free consultation to discuss your requirements." />
        <meta name="keywords" content="CRM pricing, automation pricing, cortek pricing, business automation cost, custom CRM pricing" />
        <meta property="og:title" content="Pricing - CORTEK | Simple, Transparent Pricing" />
        <meta property="og:description" content="Transform your business with our bespoke CRM and automation solutions. Transparent pricing tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cortek.io/pricing" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - CORTEK | Simple, Transparent Pricing" />
        <meta name="twitter:description" content="Transform your business with our bespoke CRM and automation solutions. Transparent pricing tailored to your needs." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <link rel="canonical" href="https://www.cortek.io/pricing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "CORTEK Pricing",
              "url": "https://www.cortek.io/pricing",
              "description": "Transparent pricing for bespoke CRM systems and business automation solutions."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="overflow-x-hidden">
        <PricingHero />
        <PricingPackages />
        <WhyCortek />
        <TrustSection />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
};

export default Pricing;