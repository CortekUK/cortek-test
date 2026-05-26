import { motion } from "framer-motion";
import { Shield, Handshake, Zap, Building2, TrendingUp, Clock } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const TrustSection = () => {
  const trustMarkers = [
    {
      icon: Shield,
      text: "No hidden costs",
      subtext: "Transparent CRM pricing — tailored to your exact requirements."
    },
    {
      icon: Handshake,
      text: "Dedicated support",
      subtext: "Hands-on onboarding, training, and UK-based customer success."
    },
    {
      icon: Zap,
      text: "Flexible & scalable",
      subtext: "Your CRM evolves with your business — from single sites to multi-location teams."
    }
  ];

  const stats = [
    {
      icon: Building2,
      value: 500,
      suffix: "+",
      label: "Bespoke CRM systems delivered across multiple industries."
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: "x",
      label: "Higher customer and team engagement through unified CRM workflows."
    },
    {
      icon: Clock,
      value: 60,
      suffix: "%",
      label: "Average time saved on admin and communication tasks each week."
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-deep-purple/10 via-transparent to-electric-blue/10"></div>
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 font-sora">
            Trusted by Businesses
            <br />
            of <span className="text-deep-purple">All Sizes</span>
          </h2>
          <div className="w-24 h-1 bg-deep-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed">
            From start-ups to national enterprises, hundreds of teams rely on Cortek's bespoke CRM systems 
            to simplify operations, improve communication, and deliver measurable results.
          </p>
        </motion.div>

        {/* Trust Markers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {trustMarkers.map((marker, index) => {
            const IconComponent = marker.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-left"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-deep-purple" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{marker.text}</p>
                  <p className="text-sm text-foreground-secondary">{marker.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Stats - Horizontal Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const { ref: counterRef, value: animatedValue } = useAnimatedCounter({
                value: stat.value,
                suffix: stat.suffix,
                duration: 2500
              });
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center py-8 px-6 ${
                    index < stats.length - 1 ? 'md:border-r md:border-neutral-border/20' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10">
                      <IconComponent className="w-8 h-8 text-deep-purple" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Number with counter animation */}
                  <div 
                    ref={counterRef}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent font-sora mb-2"
                  >
                    {animatedValue}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-foreground max-w-[280px] mx-auto">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;