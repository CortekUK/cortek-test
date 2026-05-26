import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background effects - matching pricing CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-bright-cyan/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-deep-purple/5 animate-gradient-shift"></div>
      
      {/* Animated gradient orbs - Responsive with proper containment */}
      <div className="absolute top-10 md:top-20 -left-[72px] sm:-left-[96px] md:left-0 w-36 sm:w-48 md:w-72 lg:w-96 h-36 sm:h-48 md:h-72 lg:h-96 bg-deep-purple/20 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-10 md:bottom-20 -right-[72px] sm:-right-[96px] md:right-0 w-36 sm:w-48 md:w-72 lg:w-96 h-36 sm:h-48 md:h-72 lg:h-96 bg-electric-blue/20 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] animate-float-slow"></div>
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 font-sora">
            Ready to Automate Your{" "}
            <span className="text-deep-purple">Business?</span>
          </h2>
          
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Join hundreds of businesses saving time and growing faster with Cortek automation.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-6 sm:px-10 py-6 text-lg font-semibold shadow-[0_20px_60px_rgba(106,56,194,0.3)] hover:shadow-[0_20px_80px_rgba(106,56,194,0.4)] transition-all duration-300"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Book Consultation
            </Button>
            
            <Link to="/pricing" className="w-full sm:w-auto">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-6 sm:px-10 py-6 text-lg font-semibold transition-all duration-300"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                View Pricing
              </Button>
            </Link>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-foreground-muted mt-8"
          >
            Free consultation • No credit card required • Start in days
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;