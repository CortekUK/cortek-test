import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const PricingCTA = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-background to-electric-blue/10"></div>
      
      {/* Animated gradient orbs - Responsive */}
      <div className="absolute top-0 left-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-deep-purple/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-electric-blue/20 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
      
      <div className="section-container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 font-sora">
            Ready to Build Your{" "}
            <span className="text-deep-purple">CRM System?</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-deep-purple mx-auto mb-6 md:mb-8 rounded-full"></div>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Book a free consultation to see how Cortek's bespoke CRM systems can simplify your workflows, connect your data, and save hours every week.
          </p>
          
          <p className="text-sm text-foreground-muted mb-8 md:mb-10 max-w-xl mx-auto px-4">
            No pressure • No obligation • Expert advice tailored to your business
          </p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto text-white font-semibold px-6 md:px-8 py-4 md:py-5 lg:py-6 text-base md:text-lg rounded-lg md:rounded-xl bg-gradient-to-r from-deep-purple to-electric-blue hover:shadow-[0_10px_30px_rgba(106,56,194,0.2)] md:hover:shadow-[0_20px_40px_rgba(106,56,194,0.3)] hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-200 group"
              onClick={() => setShowBookingModal(true)}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
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

export default PricingCTA;