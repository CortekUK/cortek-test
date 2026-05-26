import { motion } from "framer-motion";
import { Mail, MessageCircle, ShoppingBag, CreditCard, Calendar, Linkedin, Facebook, Instagram, Layers } from "lucide-react";

const IntegrationFlowAnimation = () => {
  const integrations = [
    { icon: MessageCircle, name: "WhatsApp", position: "top-[10%] left-[15%]", delay: 0 },
    { icon: Mail, name: "Gmail", position: "top-[10%] left-[40%]", delay: 0.15 },
    { icon: Calendar, name: "Google Calendar", position: "top-[10%] right-[15%]", delay: 0.3 },
    { icon: ShoppingBag, name: "Shopify", position: "top-[45%] right-[8%]", delay: 0.45 },
    { icon: CreditCard, name: "Stripe", position: "bottom-[10%] right-[15%]", delay: 0.6 },
    { icon: Linkedin, name: "LinkedIn", position: "bottom-[10%] left-[40%]", delay: 0.75 },
    { icon: Facebook, name: "Facebook", position: "bottom-[10%] left-[15%]", delay: 0.9 },
  ];

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      role="img"
      aria-label="CORTEK automation integrating WhatsApp, Gmail, Stripe, Google Calendar, and LinkedIn into one seamless hub"
    >
      {/* Central Hub - CORTEK Automation Engine */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-deep-purple via-electric-blue to-deep-purple shadow-[0_0_80px_rgba(106,56,194,0.6)] flex items-center justify-center backdrop-blur-sm animate-gradient-shift">
          <div className="w-24 h-24 rounded-xl bg-background/95 flex items-center justify-center border border-deep-purple/20">
            <Layers className="w-12 h-12 text-transparent bg-gradient-to-br from-deep-purple to-electric-blue bg-clip-text" style={{ strokeWidth: 2.5, stroke: 'url(#hubGradient)' }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--deep-purple))" />
                  <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-deep-purple/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-electric-blue/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Integration Icons */}
      {integrations.map((integration, index) => {
        const Icon = integration.icon;
        return (
          <div key={integration.name} className={`absolute ${integration.position}`}>
            {/* Connecting Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '100vw', height: '100vh', left: '-50%', top: '-50%' }}>
              <motion.line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: integration.delay + 1,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--deep-purple))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon Container */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: integration.delay,
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
              className="relative"
            >
              {/* Smooth flowing particle from icon to hub */}
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-electric-blue to-bright-cyan shadow-[0_0_10px_rgba(79,209,197,0.8)]"
                animate={{
                  x: ["0%", "calc(50vw - 50%)", "calc(50vw - 50%)"],
                  y: ["0%", "calc(50vh - 50%)", "calc(50vh - 50%)"],
                  scale: [1, 0.8, 0],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: integration.delay + 2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />

              <div className="w-16 h-16 rounded-xl bg-background border-2 border-deep-purple/30 shadow-lg flex items-center justify-center group hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(106,56,194,0.3)] transition-all duration-300">
                <Icon className="w-8 h-8 text-deep-purple group-hover:text-electric-blue transition-colors duration-300" />
              </div>
              
              {/* App name label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-semibold text-foreground-secondary bg-background/80 px-2 py-1 rounded-md">
                  {integration.name}
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Floating particles - Data flowing */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'linear-gradient(135deg, hsl(var(--deep-purple)), hsl(var(--electric-blue)))'
              : 'linear-gradient(135deg, hsl(var(--electric-blue)), hsl(var(--bright-cyan)))',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default IntegrationFlowAnimation;
