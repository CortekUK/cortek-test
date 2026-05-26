import { motion, useInView } from "framer-motion";
import { Zap, Puzzle, Brain, Clock } from "lucide-react";
import { useRef } from "react";

const ConsultationIntegrateAutomateAccelerate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Individual refs for icon animations
  const zapIconRef = useRef(null);
  const puzzleIconRef = useRef(null);
  const brainIconRef = useRef(null);
  const clockIconRef = useRef(null);

  const isZapIconInView = useInView(zapIconRef, { once: true, amount: 0.3 });
  const isPuzzleIconInView = useInView(puzzleIconRef, { once: true, amount: 0.3 });
  const isBrainIconInView = useInView(brainIconRef, { once: true, amount: 0.3 });
  const isClockIconInView = useInView(clockIconRef, { once: true, amount: 0.3 });

  // Integration logos with SEO-friendly alt text
  const row1Logos = [
    { url: "/funnel/icons/asana.svg", alt: "Integrate Asana with CORTEK automation" },
    { url: "/funnel/icons/hubspot.svg", alt: "Integrate HubSpot with CORTEK automation" },
    { url: "/funnel/icons/whatsapp.svg", alt: "Integrate WhatsApp with CORTEK automation" },
    { url: "/funnel/icons/sheets.svg", alt: "Integrate Google Sheets with CORTEK automation" },
    { url: "/funnel/icons/calendly.svg", alt: "Integrate Calendly with CORTEK automation" },
    { url: "/funnel/icons/slack.svg", alt: "Integrate Slack with CORTEK automation" },
    { url: "/funnel/icons/gmail.svg", alt: "Integrate Gmail with CORTEK automation" },
  ];

  const row2Logos = [
    { url: "/funnel/icons/twilio.svg", alt: "Integrate Twilio with CORTEK automation" },
    { url: "/funnel/icons/shopify.svg", alt: "Integrate Shopify with CORTEK automation" },
    { url: "/funnel/icons/excel.svg", alt: "Integrate Excel with CORTEK automation" },
    { url: "/funnel/icons/zapier.svg", alt: "Integrate Zapier with CORTEK automation" },
    { url: "/funnel/icons/loom.svg", alt: "Integrate Loom with CORTEK automation" },
    { url: "/funnel/icons/claude.svg", alt: "Integrate Claude with CORTEK automation" },
    { url: "/funnel/icons/mailchimp.svg", alt: "Integrate Mailchimp with CORTEK automation" },
  ];

  const automationFeatures = [
    {
      icon: Zap,
      title: "Instant Workflows",
      description: "Turn connected tools into automated workflows that save time from day one.",
      ref: zapIconRef,
      isInView: isZapIconInView,
      index: 0
    },
    {
      icon: Puzzle,
      title: "Custom Connections",
      description: "Easily tailor how apps work together to fit your exact business process.",
      ref: puzzleIconRef,
      isInView: isPuzzleIconInView,
      index: 1
    },
    {
      icon: Brain,
      title: "Smarter Decisions",
      description: "Gain insights from connected data to make faster, more confident moves.",
      ref: brainIconRef,
      isInView: isBrainIconInView,
      index: 2
    },
    {
      icon: Clock,
      title: "Always On",
      description: "Reliable automations that run 24/7 so your systems keep working, even when you don't.",
      ref: clockIconRef,
      isInView: isClockIconInView,
      index: 3
    },
  ];


  return (
    <section ref={ref} className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 via-transparent to-electric-blue/5"></div>
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="section-container relative px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-sora">
            Integrations That{" "}
            <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">
              Power Your CRM
            </span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Seamlessly connect your favorite tools and see how CORTEK automates day-to-day operations — smarter, faster, and effortlessly.
          </p>
        </motion.div>

        {/* Integration Logo Carousel */}
        <div className="relative overflow-hidden mb-12 md:mb-16">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 - Scrolling Left */}
          <div className="mb-6" aria-label="Integration partners row 1">
            <div className="flex gap-6 animate-scroll-left md:animate-scroll-left-desktop [&:hover]:animate-pause">
              {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-32 h-24 bg-white dark:bg-card border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div aria-label="Integration partners row 2">
            <div className="flex gap-6 animate-scroll-right md:animate-scroll-right-desktop [&:hover]:animate-pause">
              {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-32 h-24 bg-white dark:bg-card border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="automation-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" />
              </linearGradient>
            </defs>
          </svg>

          {automationFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 md:p-7 rounded-2xl relative overflow-hidden
                              bg-gradient-to-br from-background/80 to-background-light/60
                              dark:from-[#0f0f2a] dark:via-[#0a0a1f] dark:to-[#050510]
                              backdrop-blur-sm
                              border border-neutral-border/30 dark:border-white/5 
                              hover:border-electric-blue/40 dark:hover:border-electric-blue/30 
                              transition-all duration-500
                              shadow-sm hover:shadow-lg
                              dark:hover:shadow-[0_0_30px_rgba(106,56,194,0.15)]
                              hover:-translate-y-1">
                  
                  {/* Icon with premium glow */}
                  <div className="relative mb-5" ref={feature.ref}>
                    {/* Glow effect behind icon - pulsing animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-deep-purple/30 to-electric-blue/30 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={feature.isInView ? {
                        opacity: [0, 0.8, 0.3, 0],
                        scale: [1.5, 2, 1.8, 1.5]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        times: [0, 0.4, 0.7, 1],
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    
                    {/* Icon container with entrance animation */}
                    <motion.div 
                      className="relative w-12 h-12 rounded-xl 
                                  bg-gradient-to-br from-deep-purple/10 via-electric-blue/10 to-deep-purple/5
                                  dark:from-deep-purple/20 dark:via-electric-blue/20 dark:to-deep-purple/10 
                                  flex items-center justify-center 
                                  group-hover:scale-110 transition-all duration-500
                                  shadow-sm dark:shadow-[0_0_20px_rgba(106,56,194,0.2)]"
                      animate={
                        index === 0 && feature.isInView ? {
                          scale: [1, 1.15, 1.05, 1],
                          opacity: [0, 1]
                        } : index === 1 && feature.isInView ? {
                          rotate: [0, -8, 8, 0],
                          scale: [1, 1.2, 0.95, 1.1, 1]
                        } : index === 2 && feature.isInView ? {
                          y: [8, -4, 0],
                          scale: [1, 1.15, 1]
                        } : index === 3 && feature.isInView ? {
                          y: [10, -5, 0],
                          scale: [1, 1.2, 1]
                        } : {}
                      }
                      transition={{
                        duration: 1.8,
                        times: index === 2 || index === 3 ? [0, 0.5, 1] : index === 0 ? [0, 0.5, 0.8, 1] : [0, 0.25, 0.5, 0.75, 1],
                        ease: "easeOut",
                        delay: 0.4
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple to-electric-blue opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
                      
                      {/* Icon with elaborate entrance animation */}
                      <motion.div
                        animate={
                          index === 0 && feature.isInView ? {
                            opacity: [0, 0, 1],
                            scale: [0.5, 1.2, 1]
                          } : index === 1 && feature.isInView ? {
                            opacity: [0, 0, 1],
                            scale: [0.5, 1.3, 1],
                            rotate: [20, -10, 0]
                          } : index === 2 && feature.isInView ? {
                            opacity: [0, 0, 1],
                            scale: [0.5, 1.2, 1],
                            y: [5, -2, 0]
                          } : index === 3 && feature.isInView ? {
                            opacity: [0, 0, 1],
                            scale: [0.5, 1.3, 1],
                            y: [5, -2, 0]
                          } : {}
                        }
                        transition={{
                          duration: 1.2,
                          times: [0, 0.5, 1],
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: 0.5
                        }}
                      >
                        <Icon className="w-7 h-7 relative z-10" 
                              style={{
                                stroke: 'url(#automation-icon-gradient)',
                                strokeWidth: 2
                              }} />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-sora">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-foreground-secondary text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationIntegrateAutomateAccelerate;
