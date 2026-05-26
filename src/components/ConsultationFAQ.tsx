import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Particles } from "@/components/ui/particles";

const ConsultationFAQ = () => {
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#6A38C2");

  useEffect(() => {
    setParticleColor(theme === "dark" ? "#7C4CE0" : "#6A38C2");
  }, [theme]);

  const faqs = [
    {
      question: "Is the consultation really free?",
      answer: "Yes. It's a 30-minute session with no obligation. You'll leave with a clear action plan and ideas you can use, even if you don't work with us."
    },
    {
      question: "What happens after the consultation?",
      answer: "We'll send you a short roadmap of recommendations. You can either action it yourself, share it with your team, or let CORTEK build and launch everything for you."
    },
    {
      question: "I'm not technical — will this make sense?",
      answer: "Absolutely. We keep it simple: plain English, real examples, and no jargon. You don't need any technical background — we handle the complexity for you."
    },
    {
      question: "What tools do you work with?",
      answer: "From simple spreadsheets to advanced CRMs and dashboards, we connect the dots. We're tool-agnostic — whether it's email, SMS, WhatsApp, or custom platforms, we adapt to your stack, not the other way around."
    },
    {
      question: "How soon can we see results?",
      answer: "Most clients launch their first automation within 2–4 weeks, depending on the complexity. You'll start noticing time saved almost immediately."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={particleColor}
        staticity={50}
        size={0.6}
        refresh={false}
      />
      <div className="section-container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-sora">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-deep-purple via-electric-blue to-bright-cyan bg-clip-text text-transparent">Questions</span>
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background/80 backdrop-blur-sm rounded-xl border border-neutral-border/20 px-6 hover:border-electric-blue/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-electric-blue py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-secondary pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationFAQ;
