import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const ContactHero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  return (
    <section className="relative pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-20 overflow-hidden bg-background">
      {/* Animated gradient background - matching pricing hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-bright-cyan/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-deep-purple/5 animate-gradient-shift-reverse"></div>
      </div>
      
      {/* Abstract communication elements overlay - Animated */}
      <div className="absolute inset-0 z-[1]">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 opacity-5"
          animate={{
            x: [0, 60, -20, 0],
            y: [0, -40, 30, 0],
            rotate: [0, 10, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="w-full h-full text-primary" />
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 opacity-5"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 60, -20, 0],
            rotate: [0, -15, 8, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Calendar className="w-full h-full text-electric-blue" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-1/4 w-28 h-28 opacity-5"
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [0, -30, -60, -30, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Clock className="w-full h-full text-bright-cyan" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-1/3 w-36 h-36 opacity-5"
          animate={{
            x: [0, 70, 0, -70, 0],
            y: [0, -40, 40, -40, 0],
            scale: [1, 1.15, 1, 0.9, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Shield className="w-full h-full text-deep-purple" />
        </motion.div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="20%" y1="60%" x2="50%" y2="80%" stroke="url(#gradient1)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-30 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--deep-purple-rgb) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated gradient orbs for depth - Responsive sizes with proper containment */}
      <div className="absolute top-10 md:top-20 -left-[75px] sm:-left-[100px] md:left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] bg-deep-purple/20 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] animate-float-slow z-[1]"></div>
      <div className="absolute bottom-10 md:bottom-20 -right-[75px] sm:-right-[100px] md:right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] bg-electric-blue/20 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] animate-float-reverse z-[1]"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 font-sora">
            Let's Talk{" "}
            <span className="animate-gradient-shift block sm:inline">CRM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed mb-3">
            Have a question? Our team is here to help you explore bespoke CRM solutions built around your workflows — 
            connecting your data, automating routine tasks, and saving hours every week.
          </p>
          
          {/* Reassurance line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-foreground-secondary/80 mb-8 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            We reply within 2 hours during business hours. No question is too small — we're here to help.
          </motion.p>
          
          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-deep-purple to-electric-blue hover:from-deep-purple/90 hover:to-electric-blue/90 text-white font-semibold px-8 py-6 text-lg shadow-elegant hover:shadow-glow transition-all duration-300 border-0"
              onClick={() => setShowBookingModal(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              size="xl" 
              variant="ghost"
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/5 bg-transparent font-semibold px-8 py-6 text-lg transition-all duration-300"
              asChild
            >
              <Link to="/pricing">
                <span className="mr-2">→</span>
                View Pricing
              </Link>
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

export default ContactHero;