import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, HeadphonesIcon, Briefcase, Clock, Package } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const PricingPackages = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  const bespokeFeatures = [
    "Enterprise-grade infrastructure",
    "Bespoke integrations & APIs",
    "Dedicated account manager",
    "Priority support SLA",
    "Custom training programs",
    "Multi-location management",
    "Advanced analytics & reporting",
    "Bespoke CRM/ORM development",
    "White-label options"
  ];

  const bespokeTrustMarkers = [
    { icon: Shield, text: "Transparent proposals" },
    { icon: Briefcase, text: "Dedicated project manager" },
    { icon: HeadphonesIcon, text: "Full training & ongoing support" }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="section-container px-4">
        {/* Bespoke Solutions - Lead Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 md:mb-4 font-sora">
              Bespoke CRM Solutions
              <br />
              for <span className="text-deep-purple">Any Industry</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-deep-purple mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto px-4">
              Tailored CRM systems built around your workflows. Pricing is based on your goals, integrations, 
              and team size — ensuring you only pay for what your business truly needs. Book a consultation for a personalized proposal.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 border border-deep-purple/20">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 font-sora">What's Included:</h3>
              <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3 mb-6 md:mb-10">
                {/* Features List */}
                <div className="space-y-2 md:space-y-3">
                  {bespokeFeatures.slice(0, 5).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-deep-purple mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  {bespokeFeatures.slice(5).map((feature, index) => (
                    <motion.div
                      key={index + 5}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index + 5) * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-deep-purple mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA and Trust Markers */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto text-white font-semibold px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 text-base md:text-lg rounded-lg md:rounded-xl bg-gradient-to-r from-deep-purple to-electric-blue hover:shadow-[0_10px_30px_rgba(106,56,194,0.2)] md:hover:shadow-[0_20px_40px_rgba(106,56,194,0.3)] hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-200 group mb-6 md:mb-8"
                  onClick={() => setShowBookingModal(true)}
                >
                  Book Bespoke Consultation
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                {/* Trust Markers - Below CTA */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {bespokeTrustMarkers.map((marker, index) => {
                    const IconComponent = marker.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1 md:gap-1.5 justify-center"
                      >
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-deep-purple" />
                        <span className="text-xs sm:text-sm md:text-base text-foreground-secondary font-medium font-['Inter']">{marker.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Standard Packages - Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 md:mb-4 font-sora">
              Standard Packages —
              <br />
              <span className="text-deep-purple">Coming Soon</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-deep-purple mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto px-4">
              We're creating ready-made CRM packages to make powerful, tailored systems accessible to even more businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-deep-purple/5 via-electric-blue/5 to-bright-cyan/5 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 border border-neutral-border/20">
              {/* Content */}
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 mb-6">
                  <Package className="w-12 h-12 text-deep-purple" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-sora">
                  Ready-Made CRM Solutions Coming Soon
                </h3>
                
                <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
                  We're developing standardized CRM packages for specific industries — giving small and growing businesses 
                  access to Cortek's proven systems at an affordable price.
                </p>
                
                <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
                  Each package will include the essential features, automations, and integrations designed to streamline 
                  your daily operations.
                </p>
                
                <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
                  In the meantime, book a consultation to explore how we can customize a solution for your business today.
                </p>

                <div className="space-y-4 mb-8 max-w-md mx-auto">
                  <div className="flex items-start gap-3 justify-center">
                    <Clock className="w-5 h-5 text-deep-purple shrink-0 mt-0.5" />
                    <span className="text-foreground">Launching Q1 2026</span>
                  </div>
                  <div className="flex items-start gap-3 justify-center">
                    <Shield className="w-5 h-5 text-deep-purple shrink-0 mt-0.5" />
                    <span className="text-foreground">Simple, transparent pricing</span>
                  </div>
                  <div className="flex items-start gap-3 justify-center">
                    <Package className="w-5 h-5 text-deep-purple shrink-0 mt-0.5" />
                    <span className="text-foreground">Industry-specific CRM configurations</span>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full sm:w-auto text-white font-semibold px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 text-base md:text-lg rounded-lg md:rounded-xl bg-gradient-to-r from-deep-purple to-electric-blue hover:shadow-[0_10px_30px_rgba(106,56,194,0.2)] md:hover:shadow-[0_20px_40px_rgba(106,56,194,0.3)] hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-200 group"
                  onClick={() => setShowBookingModal(true)}
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <p className="text-sm text-foreground-secondary mt-4">
                  Get started with a bespoke CRM solution today.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
        blabUrl={BLAB_URL} 
      />
    </section>
  );
};

export default PricingPackages;