import { motion } from "framer-motion";
import { TrendingUp, Shield, HeadphonesIcon, Settings2 } from "lucide-react";

const WhyCortek = () => {
  const benefits = [
    {
      icon: TrendingUp,
      headline: "Proven Results",
      description: "Trusted by ambitious businesses across multiple industries — our CRM systems help teams work smarter and achieve measurable performance gains."
    },
    {
      icon: Shield,
      headline: "Future-Proof",
      description: "Built to scale from small teams to enterprise-level operations, ensuring your CRM grows seamlessly with your business."
    },
    {
      icon: HeadphonesIcon,
      headline: "Expert Support",
      description: "Dedicated UK-based onboarding and ongoing support — from initial build to continuous optimisation."
    },
    {
      icon: Settings2,
      headline: "Flexible Options",
      description: "Choose from fully bespoke builds or pre-configured CRM packages designed for your industry."
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light/30 to-background-light/50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-deep-purple/3 via-transparent to-electric-blue/3"></div>
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 font-sora">
            Why Ambitious Businesses{" "}
            <span className="text-deep-purple">Choose Cortek</span>
          </h2>
          <div className="w-24 h-1 bg-deep-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed">
            From gyms and healthcare providers to retailers and creative agencies, 
            Cortek delivers bespoke CRM systems that connect your business, save time, and support long-term growth.
          </p>
        </motion.div>

        {/* Benefit Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-background/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-neutral-border/20 hover:border-deep-purple/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(106,56,194,0.06)] md:hover:shadow-[0_20px_40px_rgba(106,56,194,0.08)]">
                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 group-hover:from-deep-purple/15 group-hover:to-electric-blue/15 transition-all duration-300">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-deep-purple" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 font-sora">
                    {benefit.headline}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <p className="text-xs md:text-sm text-foreground-muted uppercase tracking-wider font-medium">
            Trusted by industry leaders • Proven ROI • Built to scale
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCortek;