import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactOptions from "@/components/ContactOptions";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMiniFAQ from "@/components/ContactMiniFAQ";


const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - CORTEK | Get Started with Business Automation</title>
        <meta name="description" content="Get in touch with CORTEK's automation experts. Book a free consultation, send us a message, or call our team to discuss how we can transform your business operations." />
        <meta name="keywords" content="contact cortek, business automation consultation, CRM consultation, automation experts, business efficiency" />
        <meta property="og:title" content="Contact CORTEK - Let's Talk Automation" />
        <meta property="og:description" content="Ready to automate your business? Our team is here to help with bespoke CRM solutions and automation systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cortek.io/contact" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact CORTEK - Let's Talk Automation" />
        <meta name="twitter:description" content="Ready to automate your business? Our team is here to help with bespoke CRM solutions and automation systems." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <link rel="canonical" href="https://www.cortek.io/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact CORTEK",
              "url": "https://www.cortek.io/contact",
              "description": "Get in touch with CORTEK's automation experts for business automation and CRM solutions."
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="overflow-x-hidden">
        <ContactHero />
        <ContactOptions />
        <ContactFormSection />
        <ContactMiniFAQ />
        
      </main>
      <Footer />
    </>
  );
};

export default Contact;