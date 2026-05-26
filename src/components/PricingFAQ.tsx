import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const generalFaqs = [
    {
      question: "Can I cancel my plan at any time?",
      answer: "Yes. Our contracts are flexible, and you can cancel or upgrade with 30 days' notice."
    },
    {
      question: "Are there any setup fees or hidden costs?",
      answer: "No — all costs are transparent and included in your proposal."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can typically begin within 1–2 weeks of your consultation call."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide dedicated support via chat and email, as well as optional on-site or virtual training."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Yes. Cortek CRM systems integrate seamlessly with your existing software — including marketing, sales, and operations platforms."
    }
  ];

  const bespokeFaqs = [
    {
      question: "How is bespoke CRM pricing calculated?",
      answer: "Pricing is based on your specific requirements — including features, integrations, and the number of users. Each proposal is transparent, with no hidden costs."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across all major industries including fitness, retail, construction, healthcare, and creative agencies — tailoring each CRM to your workflows."
    },
    {
      question: "How long does a bespoke CRM project take?",
      answer: "Timelines vary depending on complexity, but most projects go live within 2–6 weeks following consultation and setup."
    },
    {
      question: "Do you provide training for my team?",
      answer: "Yes — every CRM includes onboarding and hands-on training to ensure your team feels confident using the system from day one."
    },
    {
      question: "Will I have a dedicated project manager?",
      answer: "Absolutely. You'll have a dedicated CRM project manager overseeing the build, communication, and implementation."
    },
    {
      question: "What happens after setup?",
      answer: "Our team continues to support you with updates, maintenance, and feature enhancements as your business grows."
    }
  ];

  return (
    <section className="section-spacing relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 font-sora">
            Frequently Asked{" "}
            <span className="text-deep-purple">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-deep-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Find answers to common questions about Cortek's bespoke CRM systems and services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Bespoke Solutions FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-sora">
                Bespoke CRM Solutions{" "}
                <span className="text-deep-purple">FAQs</span>
              </h3>
              <p className="text-foreground-secondary">
                Everything you need to know about Cortek's custom-built CRM systems — designed to simplify operations, connect teams, and save hours each week.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {bespokeFaqs.map((faq, index) => (
                <AccordionItem 
                  key={`bespoke-${index}`} 
                  value={`bespoke-${index}`}
                  className="bg-background rounded-xl border border-neutral-border/20 px-6 overflow-hidden hover:border-deep-purple/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-deep-purple transition-colors duration-200 py-6">
                    <span className="font-medium text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-secondary pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* General FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-sora">
                General{" "}
                <span className="text-deep-purple">FAQs</span>
              </h3>
              <p className="text-foreground-secondary">
                Common questions about our CRM systems and service model.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem 
                  key={`general-${index}`} 
                  value={`general-${index}`}
                  className="bg-background rounded-xl border border-neutral-border/20 px-6 overflow-hidden hover:border-bright-cyan/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-bright-cyan transition-colors duration-200 py-6">
                    <span className="font-medium text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-secondary pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;