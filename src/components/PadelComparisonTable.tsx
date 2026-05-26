import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { name: "Court availability automation", whatsapp: false, generic: false, cortek: "Full automation" },
  { name: "Automated social posting", whatsapp: false, generic: "Manual only", cortek: "Fully automated" },
  { name: "Player ranking system", whatsapp: false, generic: false, cortek: "Built-in Elo system" },
  { name: "QR match result logging", whatsapp: false, generic: false, cortek: "QR scanning" },
  { name: "Playtomic sync", whatsapp: false, generic: false, cortek: "Full sync" },
  { name: "Unified dashboard", whatsapp: false, generic: false, cortek: "Performance dashboard" },
  { name: "Auto reminders & marketing", whatsapp: false, generic: "Basic email", cortek: "Smart automations" },
  { name: "Multi-location support", whatsapp: false, generic: false, cortek: "Multiple venues" },
  { name: "Team access & roles", whatsapp: false, generic: false, cortek: "Full permissions" },
  { name: "Support & onboarding", whatsapp: false, generic: "Some support", cortek: "UK-based support" },
];

// Calculate feature counts
const whatsappCount = features.filter(f => f.whatsapp !== false).length;
const genericCount = features.filter(f => f.generic !== false).length;
const cortekCount = features.length; // All features supported

const FeatureCell = ({ value }: { value: boolean | string }) => {
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <X className="w-5 h-5 text-red-500" />
      </div>
    );
  }
  if (value === true || typeof value === "string") {
    return (
      <div className="flex items-center justify-center gap-2">
        <Check className="w-5 h-5 text-green-500" />
        {typeof value === "string" && (
          <span className="text-xs text-muted-foreground hidden lg:inline">{value}</span>
        )}
      </div>
    );
  }
  return null;
};

const MobileAccordion = () => {
  return (
    <div className="lg:hidden">
      <Accordion type="single" collapsible className="space-y-3">
        {/* WhatsApp Groups */}
        <AccordionItem value="whatsapp" className="border border-border rounded-xl overflow-hidden bg-card">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center justify-between w-full pr-2">
              <span className="font-semibold text-foreground">WhatsApp Groups</span>
              <span className="text-xs text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">{whatsappCount}/{features.length} features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  <X className="w-4 h-4 text-red-500" />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Generic Tools */}
        <AccordionItem value="generic" className="border border-border rounded-xl overflow-hidden bg-card">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center justify-between w-full pr-2">
              <span className="font-semibold text-foreground">Generic Tools</span>
              <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">{genericCount}/{features.length} features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  {feature.generic ? (
                    <div className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-green-500" />
                      {typeof feature.generic === "string" && (
                        <span className="text-xs text-muted-foreground">{feature.generic}</span>
                      )}
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Cortek Padel */}
        <AccordionItem value="cortek" className="border-2 border-deep-purple/50 rounded-xl overflow-hidden bg-gradient-to-br from-deep-purple/5 to-electric-blue/5">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center justify-between w-full pr-2">
              <img 
                src="/lovable-uploads/525a7ad8-6aa1-49a8-a2ac-97c0d986d8d9.png" 
                alt="CORTEK" 
                className="h-20 -my-5 w-auto object-contain"
              />
              <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{cortekCount}/{features.length} features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-deep-purple/10 last:border-0">
                  <span className="text-sm text-foreground">{feature.name}</span>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-deep-purple">{feature.cortek}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Mobile CTA */}
      <div className="mt-8 text-center">
        <Link to="/#book">
          <Button size="lg" className="w-full bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white">
            Get Started with Cortek
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const DesktopTable = () => {
  return (
    <div className="hidden lg:block">
      <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-4 bg-muted/50 border-b border-border">
          <div className="py-3 px-4 font-bold text-sm uppercase tracking-wide text-foreground border-r border-border flex items-center">Features</div>
          <div className="py-3 px-4 font-bold text-sm uppercase tracking-wide text-center text-muted-foreground border-r border-border flex items-center justify-center">WhatsApp Groups</div>
          <div className="py-3 px-4 font-bold text-sm uppercase tracking-wide text-center text-muted-foreground border-r border-border flex items-center justify-center">Generic Tools</div>
          <div className="py-3 px-4 flex items-center justify-center bg-gradient-to-r from-deep-purple/20 to-electric-blue/20">
            <img 
              src="/lovable-uploads/525a7ad8-6aa1-49a8-a2ac-97c0d986d8d9.png" 
              alt="CORTEK" 
              className="h-20 -my-5 w-auto object-contain"
            />
          </div>
        </div>
        
        {/* Rows */}
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`grid grid-cols-4 transition-colors duration-200 hover:bg-muted/50 ${idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'} ${idx !== features.length - 1 ? 'border-b border-border/50' : ''}`}
          >
            <div className="p-4 font-medium text-foreground border-r border-border/50">{feature.name}</div>
            <div className="p-4 border-r border-border/50">
              <FeatureCell value={feature.whatsapp} />
            </div>
            <div className="p-4 border-r border-border/50">
              <FeatureCell value={feature.generic} />
            </div>
            <div className="p-4 bg-gradient-to-r from-deep-purple/5 to-electric-blue/5 hover:from-deep-purple/10 hover:to-electric-blue/10 transition-colors duration-200">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-xs text-deep-purple font-medium">{feature.cortek}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Summary Footer Row */}
        <div className="grid grid-cols-4 bg-muted/70 border-t-2 border-border">
          <div className="p-4 font-bold text-foreground border-r border-border">TOTAL FEATURES</div>
          <div className="p-4 border-r border-border">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-red-500">{whatsappCount}/{features.length}</span>
              <span className="text-xs text-muted-foreground">Limited</span>
            </div>
          </div>
          <div className="p-4 border-r border-border">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-amber-500">{genericCount}/{features.length}</span>
              <span className="text-xs text-muted-foreground">Partial</span>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-deep-purple/15 to-electric-blue/15">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-green-500">{cortekCount}/{features.length}</span>
              <span className="text-xs text-deep-purple font-medium">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop CTA */}
      <div className="mt-10 text-center">
        <p className="text-muted-foreground mb-4">Ready to upgrade your club management?</p>
        <Link to="/#book">
          <Button size="lg" className="bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-8">
            Get Started with Cortek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const PadelComparisonTable = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/40 dark:bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Padel Clubs Choose{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
              Cortek
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            See how Cortek compares to the tools most clubs rely on today — and why an all-in-one platform makes all the difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <DesktopTable />
          <MobileAccordion />
        </motion.div>
      </div>
    </section>
  );
};

export default PadelComparisonTable;
