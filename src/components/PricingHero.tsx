import { motion } from "framer-motion";
import { Check, Shield, CreditCardIcon } from "lucide-react";

const PricingHero = () => {
  const trustMarkers = [
    { icon: CreditCardIcon, text: "No hidden costs" },
    { icon: Shield, text: "Dedicated UK-based support" },
    { icon: Check, text: "Flexible & scalable" }
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-bright-cyan/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-deep-purple/5 animate-gradient-shift-reverse"></div>
      </div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--deep-purple-rgb) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Flowing curves pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,261.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
          fill="url(#gradient1)" 
          className="animate-wave-slow">
        </path>
        <path d="M0,512L48,501.3C96,491,192,469,288,474.7C384,480,480,512,576,517.3C672,523,768,501,864,480C960,459,1056,437,1152,442.7C1248,448,1344,480,1392,496L1440,512L1440,256L1392,240C1344,224,1248,192,1152,186.7C1056,181,960,203,864,224C768,245,672,267,576,261.3C480,256,384,224,288,218.7C192,213,96,235,48,245.3L0,256Z" 
          fill="url(#gradient2)" 
          className="animate-wave">
        </path>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--deep-purple-rgb) / 0.1)" />
            <stop offset="50%" stopColor="rgb(var(--electric-blue-rgb) / 0.1)" />
            <stop offset="100%" stopColor="rgb(var(--bright-cyan-rgb) / 0.1)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--electric-blue-rgb) / 0.05)" />
            <stop offset="50%" stopColor="rgb(var(--deep-purple-rgb) / 0.05)" />
            <stop offset="100%" stopColor="rgb(var(--electric-blue-rgb) / 0.05)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Morphing Gradient Blobs - Dynamic Background */}
      {/* Blob 1 - Deep Purple */}
      <motion.div
        className="absolute top-20 left-0 w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[350px] lg:h-[450px] bg-gradient-to-br from-deep-purple/40 to-electric-blue/30 blur-[40px] md:blur-[50px] lg:blur-[60px] rounded-full"
        style={{ willChange: 'transform, border-radius' }}
        animate={{
          x: [0, 100, -50, 100, 0],
          y: [0, -50, 100, 50, 0],
          scale: [1, 1.3, 0.8, 1.1, 1],
          rotate: [0, 45, -30, 60, 0],
          borderRadius: [
            "50% 50% 50% 50%",
            "30% 70% 70% 30%",
            "70% 30% 30% 70%",
            "40% 60% 60% 40%",
            "50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Electric Blue */}
      <motion.div
        className="absolute bottom-20 right-0 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-tl from-electric-blue/35 to-bright-cyan/25 blur-[35px] md:blur-[45px] lg:blur-[55px] rounded-full"
        style={{ willChange: 'transform, border-radius' }}
        animate={{
          x: [0, -80, 60, -100, 0],
          y: [0, 100, -60, 80, 0],
          scale: [1, 0.85, 1.25, 0.95, 1],
          rotate: [0, -60, 40, -80, 0],
          borderRadius: [
            "50% 50% 50% 50%",
            "20% 80% 50% 50%",
            "80% 20% 40% 60%",
            "50% 50% 80% 20%",
            "50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 - Center Cyan */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[550px] h-[300px] md:h-[450px] lg:h-[550px] bg-gradient-to-r from-bright-cyan/20 via-deep-purple/25 to-electric-blue/20 blur-[50px] md:blur-[60px] lg:blur-[70px] rounded-full"
        style={{ willChange: 'transform, border-radius' }}
        animate={{
          x: [-100, 100, 0, -100],
          y: [-50, 50, -100, -50],
          scale: [1, 1.2, 0.75, 1],
          rotate: [0, 360],
          borderRadius: [
            "50% 50% 50% 50%",
            "35% 65% 65% 35%",
            "65% 35% 35% 65%",
            "50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 4 - Top Right */}
      <motion.div
        className="absolute top-10 right-20 w-[180px] md:w-[280px] lg:w-[380px] h-[180px] md:h-[280px] lg:h-[380px] bg-gradient-to-bl from-deep-purple/30 via-electric-blue/20 to-bright-cyan/25 blur-[30px] md:blur-[40px] lg:blur-[50px] rounded-full"
        style={{ willChange: 'transform, border-radius' }}
        animate={{
          x: [0, -120, 80, -60, 0],
          y: [0, 80, -100, 120, 0],
          scale: [1, 1.35, 1, 0.75, 1],
          rotate: [0, -90, 120, -45, 0],
          borderRadius: [
            "50% 50% 50% 50%",
            "25% 75% 45% 55%",
            "75% 25% 55% 45%",
            "45% 55% 75% 25%",
            "50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blob 5 - Bottom Left */}
      <motion.div
        className="absolute bottom-32 left-10 w-[220px] md:w-[320px] lg:w-[420px] h-[220px] md:h-[320px] lg:h-[420px] bg-gradient-to-tr from-electric-blue/30 to-deep-purple/35 blur-[38px] md:blur-[48px] lg:blur-[58px] rounded-full"
        style={{ willChange: 'transform, border-radius' }}
        animate={{
          x: [0, 150, -50, 100, 0],
          y: [0, -80, 120, -40, 0],
          scale: [1, 0.9, 1.3, 1.05, 1],
          rotate: [0, 75, -45, 90, 0],
          borderRadius: [
            "50% 50% 50% 50%",
            "60% 40% 30% 70%",
            "40% 60% 70% 30%",
            "30% 70% 60% 40%",
            "50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 font-sora px-4">
            <span className="text-foreground">Simple, </span>
            <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Whether you need a tailored CRM system or a ready-to-use solution, Cortek keeps pricing clear, fair, and flexible.
          </p>
          
          {/* Trust markers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4"
          >
            {trustMarkers.map((marker, index) => {
              const IconComponent = marker.icon;
              return (
                <div key={index} className="flex items-center gap-2 sm:gap-3 group justify-center sm:justify-start">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 group-hover:from-deep-purple/20 group-hover:to-electric-blue/20 transition-all duration-300">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-deep-purple" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium">{marker.text}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;