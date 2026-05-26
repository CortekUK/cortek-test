import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does this replace Playtomic?",
    answer: "No — Cortek works alongside Playtomic. We sync bookings, availability, and player data so you can run your club more efficiently. Cortek acts as the automation and engagement layer on top."
  },
  {
    question: "How long does setup take?",
    answer: "Most padel clubs are fully set up within 1–2 weeks, including onboarding, integrations, automations, and training."
  },
  {
    question: "Do you help us onboard our staff?",
    answer: "Yes. Every plan includes full onboarding for your team, plus optional one-to-one training sessions."
  },
  {
    question: "Can we cancel anytime?",
    answer: "Yes — there are no long-term contracts. Cancel anytime with no hidden fees."
  },
  {
    question: "Do you integrate with our existing tools?",
    answer: "Yes. Cortek connects with WhatsApp, Meta, Playtomic, Google Workspace, and a growing list of tools."
  },
  {
    question: "Does it work for multi-location clubs?",
    answer: "Absolutely. You can manage multiple venues from one central dashboard with consistent automations across all locations."
  },
  {
    question: "What makes Cortek different from generic marketing or CRM tools?",
    answer: "Cortek is built specifically for padel clubs — automated court alerts, ranking systems, QR match logging, Playtomic sync, and performance insights that generic tools cannot provide."
  },
  {
    question: "What kind of support do you offer?",
    answer: "UK-based support via chat and email, plus optional one-to-one calls and access to templates, walkthroughs, and best practices."
  }
];

const PadelFAQSection = () => {
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    })
  };

  const AccordionCard = ({ faq, idx, value }: { faq: typeof faqs[0]; idx: number; value: string }) => (
    <motion.div
      custom={idx}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <AccordionItem
        value={value}
        className="group relative border border-white/10 rounded-xl overflow-hidden 
          bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-md
          hover:border-deep-purple/40 hover:shadow-[0_0_30px_rgba(91,27,225,0.15)]
          data-[state=open]:border-deep-purple/50 data-[state=open]:shadow-[0_0_40px_rgba(91,27,225,0.2)]
          data-[state=open]:bg-white/[0.05] dark:data-[state=open]:bg-white/[0.04]
          transition-all duration-300"
      >
        {/* Left accent glow on open */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-deep-purple to-electric-blue opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-300" />
        
        <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group-hover:bg-white/[0.02] transition-colors duration-300 [&[data-state=open]>svg]:text-electric-blue [&[data-state=open]>svg]:drop-shadow-[0_0_8px_rgba(45,129,247,0.5)]">
          <span className="font-semibold text-foreground pr-4 text-base md:text-lg group-hover:text-foreground/90 transition-colors">
            {faq.question}
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed text-base">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );

  return (
    <section className="relative pt-20 pb-[100px] bg-background dark:bg-black/20 overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-deep-purple/20 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-electric-blue/15 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(91,27,225,0.3)]">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80">
            Everything clubs ask before getting started.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: 2 columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, idx) => (
                <AccordionCard key={idx} faq={faq} idx={idx} value={`left-${idx}`} />
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, idx) => (
                <AccordionCard key={idx} faq={faq} idx={idx + 4} value={`right-${idx}`} />
              ))}
            </Accordion>
          </div>

          {/* Mobile: single column */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionCard key={idx} faq={faq} idx={idx} value={`mobile-${idx}`} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PadelFAQSection;
