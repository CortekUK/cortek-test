import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { UserPlus, Link2, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Club Account",
    description: "Start onboarding instantly — no demo required."
  },
  {
    icon: Link2,
    title: "Connect Playtomic",
    description: "Courts, bookings, and player data sync automatically."
  },
  {
    icon: Zap,
    title: "Enable Automations",
    description: "Turn on WhatsApp alerts, marketing, reminders, rankings, and more."
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Your club becomes fully automated and ready to grow."
  }
];

const PadelHowItWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Responsive timing for rocket animation
  const startProgress = isMobile ? 0.5 : 0.38;
  const endProgress = isMobile ? 0.88 : 0.75;
  const midProgress1 = isMobile ? 0.68 : 0.55;
  const midProgress2 = isMobile ? 0.78 : 0.65;
  const midProgress3 = isMobile ? 0.83 : 0.7;

  // Transform values for rocket launch
  const rocketY = useTransform(scrollYProgress, [startProgress, endProgress], [0, -300]);
  const rocketX = useTransform(scrollYProgress, [startProgress, endProgress], [0, 150]);
  const rocketRotate = useTransform(scrollYProgress, [startProgress, endProgress], [0, -30]);
  const rocketScale = useTransform(scrollYProgress, [startProgress, midProgress1, endProgress], [1, 1.3, 1.8]);
  const rocketOpacity = useTransform(scrollYProgress, [startProgress, midProgress2, endProgress], [1, 1, 0]);
  const flameScale = useTransform(scrollYProgress, [startProgress, midProgress1, endProgress], [0, 1, 1.5]);
  const flameOpacity = useTransform(scrollYProgress, [startProgress, midProgress1, midProgress3, endProgress], [0, 1, 1, 0]);
  const flameRotate = useTransform(rocketRotate, (r) => r + 65);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-muted/50 dark:bg-gradient-to-b dark:from-background dark:via-muted/20 dark:to-background relative overflow-hidden">
      {/* Enhanced background with floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-deep-purple/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-electric-blue/5 via-transparent to-transparent" />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-deep-purple/30"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[650px] mx-auto leading-relaxed">
            Get set up in minutes — the onboarding portal guides you step-by-step.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop: horizontal with premium cards */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
            {/* Animated gradient connector line */}
            <div className="absolute top-[72px] left-[calc(12.5%+44px)] right-[calc(12.5%+44px)] h-[3px] overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/20 via-electric-blue/30 to-deep-purple/20" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Glass card wrapper with enhanced hover - better light mode contrast */}
                <motion.div 
                  className="w-full p-6 rounded-2xl bg-white/60 dark:bg-card/30 backdrop-blur-sm border border-border dark:border-border/40 shadow-lg dark:shadow-lg transition-all duration-500 group-hover:bg-white/80 dark:group-hover:bg-card/50 group-hover:border-deep-purple/30 group-hover:shadow-xl dark:group-hover:shadow-2xl group-hover:shadow-deep-purple/10 flex flex-col items-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Icon container - white bg with colored icons in light mode, gradient bg in dark mode */}
                  <div className="relative mx-auto mb-6">
                    <motion.div 
                      className="w-[100px] h-[100px] rounded-2xl bg-white dark:bg-gradient-to-br dark:from-deep-purple dark:to-electric-blue flex items-center justify-center shadow-lg shadow-deep-purple/15 dark:shadow-[0_0_40px_rgba(91,27,225,0.35)] ring-1 ring-deep-purple/20 dark:ring-white/10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-deep-purple/25 dark:group-hover:shadow-[0_0_60px_rgba(91,27,225,0.5)] group-hover:ring-deep-purple/30 dark:group-hover:ring-white/20"
                    >
                      {/* Animated Rocket for Step 4 */}
                      {step.icon === Rocket ? (
                        <motion.div 
                          className="relative"
                          style={{
                            y: rocketY,
                            x: rocketX,
                            rotate: rocketRotate,
                            scale: rocketScale,
                            opacity: rocketOpacity
                          }}
                        >
                          <Rocket className="w-10 h-10 text-deep-purple dark:text-white" strokeWidth={1.5} />
                          {/* Flame trail */}
                          <motion.div 
                            className="absolute top-6 left-[1%] -translate-x-1/2 w-6 h-12 rounded-full"
                            style={{
                              scaleY: flameScale,
                              opacity: flameOpacity,
                              rotate: flameRotate,
                              background: "linear-gradient(to bottom, hsl(var(--electric-blue)), hsl(var(--deep-purple)), transparent)",
                              filter: "blur(4px)",
                              transformOrigin: "top center"
                            }} 
                          />
                        </motion.div>
                      ) : (
                        <step.icon className="w-10 h-10 text-deep-purple dark:text-white" strokeWidth={1.5} />
                      )}
                    </motion.div>
                    {/* Enhanced glow effect behind icon - reduced in light mode */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-deep-purple to-electric-blue opacity-10 dark:opacity-40 blur-2xl -z-10 transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-60" />
                  </div>
                  
                  {/* Step badge with gradient */}
                  <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-deep-purple/15 to-electric-blue/15 text-deep-purple border border-deep-purple/25 mb-4 transition-all duration-300 group-hover:from-deep-purple/25 group-hover:to-electric-blue/25">
                    Step {idx + 1}
                  </span>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-deep-purple">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical stack with premium styling */}
          <div className="lg:hidden space-y-5">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glass card - better light mode contrast */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white/60 dark:bg-card/30 backdrop-blur-sm border border-border dark:border-border/40 shadow-lg transition-all duration-300 active:scale-[0.98]">
                  <div className="flex flex-col items-center">
                    {/* Icon - white bg with colored icons in light mode, gradient bg in dark mode */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-gradient-to-br dark:from-deep-purple dark:to-electric-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-deep-purple/15 dark:shadow-[0_0_25px_rgba(91,27,225,0.3)] ring-1 ring-deep-purple/20 dark:ring-white/10">
                        {/* Animated Rocket for Step 4 on mobile */}
                        {step.icon === Rocket ? (
                          <motion.div 
                            className="relative"
                            style={{
                              y: rocketY,
                              x: rocketX,
                              rotate: rocketRotate,
                              scale: rocketScale,
                              opacity: rocketOpacity
                            }}
                          >
                            <Rocket className="w-7 h-7 text-deep-purple dark:text-white" strokeWidth={1.5} />
                            {/* Flame trail */}
                            <motion.div 
                              className="absolute top-5 left-[1%] -translate-x-1/2 w-4 h-8 rounded-full"
                              style={{
                                scaleY: flameScale,
                                opacity: flameOpacity,
                                rotate: flameRotate,
                                background: "linear-gradient(to bottom, hsl(var(--electric-blue)), hsl(var(--deep-purple)), transparent)",
                                filter: "blur(3px)",
                                transformOrigin: "top center"
                              }} 
                            />
                          </motion.div>
                        ) : (
                          <step.icon className="w-7 h-7 text-deep-purple dark:text-white" strokeWidth={1.5} />
                        )}
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-deep-purple to-electric-blue opacity-10 dark:opacity-30 blur-xl -z-10" />
                    </div>
                    {/* Animated vertical connector */}
                    {idx < steps.length - 1 && (
                      <div className="w-[3px] flex-1 mt-4 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/30 to-electric-blue/20" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue to-transparent"
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.3 }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="pt-1 flex-1">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-deep-purple/15 to-electric-blue/15 text-deep-purple border border-deep-purple/25 mb-2">
                      Step {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <Button asChild size="lg" className="relative bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-10 py-7 text-lg font-semibold shadow-xl shadow-deep-purple/30 hover:shadow-deep-purple/50 transition-all duration-300 hover:scale-105">
            <Link to="/book-consultation">Book a Free Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PadelHowItWorks;
