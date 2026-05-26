import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Lightbulb, Rocket } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
const ConsultationProcess = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const blabUrl = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll animation for rocket
  const sectionRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Responsive timing: delayed on mobile, original on desktop
  const startProgress = isMobile ? 0.45 : 0.3;
  const endProgress = isMobile ? 0.85 : 0.7;
  const midProgress1 = isMobile ? 0.65 : 0.5;
  const midProgress2 = isMobile ? 0.75 : 0.6;
  const midProgress3 = isMobile ? 0.8 : 0.65;

  // Transform scroll progress to rocket animation values - LAUNCH!
  const rocketY = useTransform(scrollYProgress, [startProgress, endProgress], [0, -300]);
  const rocketX = useTransform(scrollYProgress, [startProgress, endProgress], [0, 150]); // Move right on launch
  const rocketRotate = useTransform(scrollYProgress, [startProgress, endProgress], [0, -30]);
  const rocketScale = useTransform(scrollYProgress, [startProgress, midProgress1, endProgress], [1, 1.3, 1.8]);
  const rocketOpacity = useTransform(scrollYProgress, [startProgress, midProgress2, endProgress], [1, 1, 0]);
  const flameScale = useTransform(scrollYProgress, [startProgress, midProgress1, endProgress], [0, 1, 1.5]);
  const flameOpacity = useTransform(scrollYProgress, [startProgress, midProgress1, midProgress3, endProgress], [0, 1, 1, 0]);
  const steps = [{
    icon: MessageCircle,
    number: "1",
    title: "Discovery",
    description: "Understand your business and your goals."
  }, {
    icon: Lightbulb,
    number: "2",
    title: "Automation Plan",
    description: "Design and build your CRM system."
  }, {
    icon: Rocket,
    number: "3",
    title: "Launch",
    description: "CORTEK launches your system for you — no tech stress, no DIY."
  }];
  return <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 relative">
      <div className="section-container px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sora">
            How{" "}
            <span className="bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A clear process for getting your custom CRM live fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.08
        }} viewport={{
          once: true
        }} className="relative">
              {/* Connection line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-14 left-[calc(50%+3.5rem)] w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-deep-purple/30 to-electric-blue/30"></div>}

              <div className="relative text-center">
                {/* Icon circle */}
                <div className="w-28 h-28 mx-auto mb-6 relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 animate-pulse-slow"></div>
                  
                  {/* Main circle */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-deep-purple/10 via-electric-blue/10 to-deep-purple/5 border-2 border-deep-purple/30 flex items-center justify-center shadow-sm dark:shadow-[0_0_20px_rgba(106,56,194,0.2)]">
                    {step.icon === Rocket ? <motion.div className="relative" style={{
                  y: rocketY,
                  x: rocketX,
                  rotate: rocketRotate,
                  scale: rocketScale,
                  opacity: rocketOpacity
                }}>
                        <Rocket className="w-10 h-10 text-deep-purple relative z-10" />
                        {/* Rocket flame trail */}
                        <motion.div className="absolute top-6 left-[1%] -translate-x-1/2 w-6 h-12 rounded-full" style={{
                    scaleY: flameScale,
                    opacity: flameOpacity,
                    rotate: useTransform(rocketRotate, (r) => r + 65),
                    background: "linear-gradient(to bottom, hsl(var(--electric-blue)), hsl(var(--deep-purple)), transparent)",
                    filter: "blur(4px)",
                    transformOrigin: "top center"
                  }} />
                      </motion.div> : <step.icon className="w-10 h-10 text-deep-purple" />}
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-deep-purple to-electric-blue text-white font-bold flex items-center justify-center text-sm">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-sora">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* CTA Button */}
        
      </div>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} blabUrl={blabUrl} />
    </section>;
};
export default ConsultationProcess;