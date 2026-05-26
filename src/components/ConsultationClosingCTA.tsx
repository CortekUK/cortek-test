import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const ConsultationClosingCTA = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const BLAB_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";
  
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-bright-cyan/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 via-transparent to-deep-purple/10"></div>
      
      <div className="section-container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-sora leading-tight">
            Ready to Build Your
            <br />
            <span className="bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
              CRM System
            </span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Join hundreds of businesses transforming their operations with Cortek's bespoke CRM systems.
          </p>
          
          {/* CTA Button with Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 w-full max-w-[90%] md:max-w-none mx-auto"
          >
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-4 md:px-10 py-3.5 md:py-6 text-sm md:text-lg font-semibold shadow-[0_20px_60px_rgba(106,56,194,0.3)] hover:shadow-[0_20px_80px_rgba(106,56,194,0.4)] transition-all duration-300 w-full md:w-auto"
              onClick={() => setShowBookingModal(true)}
            >
              Book My Consultation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-3 text-sm text-foreground-secondary/80">
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-electric-blue" />
                Free
              </span>
              <span className="text-foreground-secondary/40">•</span>
              <span>No obligation</span>
              <span className="text-foreground-secondary/40">•</span>
              <span>Avg response: 2 hours</span>
            </div>
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

export default ConsultationClosingCTA;