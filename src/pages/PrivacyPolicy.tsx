import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Cortek</title>
        <meta
          name="description"
          content="Read Cortek's Privacy Policy to understand how we collect, use, and protect your personal data under UK GDPR, EU GDPR and applicable US state privacy laws."
        />
        <link rel="canonical" href="https://www.cortek.io/privacy-policy" />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground-secondary mb-12">Effective Date: 25 May 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground-secondary leading-relaxed mb-4">
                Cortek ("we", "our", "us") is committed to protecting your privacy and handling your personal information responsibly. Cortek Ltd is a UK-registered company serving clients in the UK, the US and internationally.
              </p>
              <p className="text-foreground-secondary leading-relaxed mb-4">
                Depending on where you are based, your personal data is protected under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the EU GDPR, or applicable US state privacy laws (including the California Consumer Privacy Act).
              </p>
              <p className="text-foreground-secondary leading-relaxed mb-4">
                Cortek Ltd is the data controller of your personal data unless otherwise stated. In some cases (for example, where we host or process data on behalf of our clients), Cortek acts as a data processor. In those cases, the client remains the data controller and is responsible for ensuring their end users' data is processed lawfully.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect personal data when you use our websites, services, or engage with us as a client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We may collect the following types of personal data: contact information, billing information, client data entered into Cortek systems, and technical data such as IP address, browser type, cookies, and analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We process your personal data to provide, maintain, and improve our services; process payments; communicate with you about updates, invoices, and support; monitor system performance and security; comply with legal requirements; and send marketing communications where you have consented or where we have a legitimate interest, with the option to opt out at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal Basis for Processing</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We process data under contractual necessity, legitimate interests, legal obligations, or consent where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Marketing Communications</h2>
              <p className="text-foreground-secondary leading-relaxed">
                You may opt out of receiving marketing emails or promotional communications at any time by clicking "unsubscribe" in our emails or contacting us at{" "}
                <a href="mailto:support@cortek.io" className="text-electric-blue hover:text-electric-blue-hover underline">
                  support@cortek.io
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Sharing</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We do not sell personal data. Data may be shared with service providers (e.g., hosting, analytics, payment processors), legal authorities if required, or in the event of a business transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Transfers</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Cortek operates from the UK and may transfer data internationally to deliver services to clients and end users worldwide. Where data is transferred outside the UK or EEA, appropriate safeguards are implemented such as Standard Contractual Clauses or equivalent protections recognized under UK and EU data protection law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Client data is retained only as long as necessary to provide services or comply with legal obligations. Upon termination, data is retained for 90 days before deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Security</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We use appropriate technical and organizational measures to protect personal data. However, no online service is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Your Rights (UK &amp; EU)</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Under UK GDPR and EU GDPR, you have the right to access the personal data we hold about you, request correction or deletion, restrict or object to processing, request data portability, and withdraw consent at any time (where processing is based on consent). To exercise these rights, contact us at{" "}
                <a href="mailto:support@cortek.io" className="text-electric-blue hover:text-electric-blue-hover underline">
                  support@cortek.io
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Your Rights (US Residents)</h2>
              <p className="text-foreground-secondary leading-relaxed">
                If you are a resident of California, Colorado, Connecticut, Virginia, Utah, or another US state with comprehensive privacy legislation, you have additional rights under applicable state law. These may include the right to know what personal information we collect about you, the right to request deletion, the right to correct inaccurate information, and the right to opt out of the sale or sharing of personal information. Cortek does not sell personal information. To exercise these rights, contact us at{" "}
                <a href="mailto:support@cortek.io" className="text-electric-blue hover:text-electric-blue-hover underline">
                  support@cortek.io
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Right to Complain</h2>
              <p className="text-foreground-secondary leading-relaxed">
                If you are based in the UK and believe we have not handled your data correctly, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at{" "}
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-blue hover:text-electric-blue-hover underline"
                >
                  www.ico.org.uk
                </a>
                . If you are based in the EU, you may complain to your local data protection authority. If you are a US resident, you may contact your state attorney general's office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Cookies &amp; Analytics</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Cortek may use cookies and similar technologies to enhance website functionality and analyze usage. Essential cookies are required for the site to function. Analytics and tracking cookies are used only with your consent. You can control or disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Children's Privacy</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Our services are not directed to individuals under 16. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Updates to This Policy</h2>
              <p className="text-foreground-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. The latest version will always be available on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact</h2>
              <p className="text-foreground-secondary leading-relaxed mb-2">
                For any privacy-related questions or requests:{" "}
                <a href="mailto:neema@cortek.uk" className="text-electric-blue hover:text-electric-blue-hover underline">
                  neema@cortek.uk
                </a>
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                Cortek Ltd, registered in England and Wales. Registered office: 4 Willow Close, Whitefield, Bury, BL9 8NU, United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
