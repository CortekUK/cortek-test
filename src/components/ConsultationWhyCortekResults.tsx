import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Zap, Lock, TrendingUp, Clock, Target, Users } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Card } from "@/components/ui/card";

const ConsultationWhyCortekResults = () => {
  const userIconRef = useRef(null);
  const zapIconRef = useRef(null);
  const lockIconRef = useRef(null);
  const trendingIconRef = useRef(null);
  
  const isUserIconInView = useInView(userIconRef, { once: true, amount: 0.3 });
  const isZapIconInView = useInView(zapIconRef, { once: true, amount: 0.3 });
  const isLockIconInView = useInView(lockIconRef, { once: true, amount: 0.3 });
  const isTrendingIconInView = useInView(trendingIconRef, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: User,
      title: "Business-First Systems",
      description: "CRMs tailored to your goals and operations — not generic software. Designed for industries from gyms and construction to retail and restaurants.",
      ref: userIconRef,
      isInView: isUserIconInView,
      index: 0
    },
    {
      icon: Zap,
      title: "Fast Wins",
      description: "Launch your custom CRM in as little as 48 hours, complete with core automations that immediately reduce admin.",
      ref: zapIconRef,
      isInView: isZapIconInView,
      index: 1
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "UK-hosted data with 99%+ uptime, encrypted access, and long-term reliability built in.",
      ref: lockIconRef,
      isInView: isLockIconInView,
      index: 2
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Clients consistently save 10–15 hours a week and gain clearer visibility across every team.",
      ref: trendingIconRef,
      isInView: isTrendingIconInView,
      index: 3
    }
  ];

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-background"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(106,56,194,0.03)_0%,transparent_50%,rgba(59,130,246,0.03)_100%)]"></div>
      
      {/* Subtle dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      <div className="section-container relative px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-10 relative">
            {/* Vertical Separator - hidden on mobile, visible on large screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-deep-purple/50 to-transparent"></div>
            </div>

            {/* Left Header: Why Choose CORTEK */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 font-sora">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">
                  CORTEK
                </span>
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary min-h-[3.5rem]">
                Bespoke CRM systems, built around your workflows, with automation fully integrated.
              </p>
            </motion.div>

            {/* Right Header: The Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 font-sora">
                The{" "}
                <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary min-h-[3.5rem]">
                Quantified impact from smarter CRM systems.
              </p>
            </motion.div>
          </div>

          {/* Unified Grid - 4 columns on large screens, 2 on medium, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Vertical Separator - positioned between columns 2 and 3 */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-deep-purple/50 to-transparent"></div>
            </div>

            {/* Row 1: Benefits 1 & 2 */}
            {benefits.slice(0, 2).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <Card className="relative h-full min-h-[280px] p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-deep-purple/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-deep-purple/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div 
                      ref={benefit.ref}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 flex items-center justify-center group-hover:from-deep-purple/20 group-hover:to-electric-blue/20 transition-all duration-300"
                    >
                      <benefit.icon 
                        className="w-7 h-7 text-deep-purple transition-all duration-300"
                        style={{
                          opacity: benefit.isInView ? 1 : 0
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-deep-purple transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}

            {/* Row 1: Stats 1 & 2 */}
            <StatsGrid startIndex={0} endIndex={2} />

            {/* Row 2: Benefits 3 & 4 */}
            {benefits.slice(2, 4).map((benefit, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: (index + 2) * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <Card className="relative h-full min-h-[280px] p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-deep-purple/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-deep-purple/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div 
                      ref={benefit.ref}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 flex items-center justify-center group-hover:from-deep-purple/20 group-hover:to-electric-blue/20 transition-all duration-300"
                    >
                      <benefit.icon 
                        className="w-7 h-7 text-deep-purple transition-all duration-300"
                        style={{
                          opacity: benefit.isInView ? 1 : 0
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-deep-purple transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}

            {/* Row 2: Stats 3 & 4 */}
            <StatsGrid startIndex={2} endIndex={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Grid Component - Now accepts startIndex and endIndex to render specific stats
const StatsGrid = ({ startIndex = 0, endIndex = 4 }: { startIndex?: number; endIndex?: number }) => {
  const stats = [
    {
      icon: TrendingUp,
      value: 85,
      suffix: "%",
      label: "MEMBER ENGAGEMENT",
      description: "Higher engagement through personalized CRM workflows."
    },
    {
      icon: Clock,
      value: 15,
      suffix: "hrs",
      label: "TIME SAVED WEEKLY",
      description: "Average reduction in admin time thanks to built-in task automation."
    },
    {
      icon: Target,
      value: 95,
      suffix: "%",
      label: "PROCESS ACCURACY",
      description: "Improved data consistency and reporting through custom dashboards."
    },
    {
      icon: Users,
      value: 3,
      suffix: "x",
      label: "BUSINESS GROWTH",
      description: "Faster scaling with systems that evolve alongside your business."
    }
  ];

  return (
    <>
      {stats.slice(startIndex, endIndex).map((stat, index) => (
        <StatCard key={startIndex + index} {...stat} index={startIndex + index} />
      ))}
    </>
  );
};

// Individual Stat Card Component
const StatCard = ({ icon: Icon, value, suffix, label, description, index }: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
}) => {
  const { ref, value: animatedValue } = useAnimatedCounter({ 
    value, 
    suffix,
    duration: 2000 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="relative h-full min-h-[280px] p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-deep-purple/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-deep-purple/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-deep-purple/10 to-deep-purple/5 flex items-center justify-center group-hover:from-deep-purple/20 group-hover:to-deep-purple/10 transition-all duration-300">
              <Icon className="w-6 h-6 text-deep-purple" />
            </div>
          </div>
          
          {/* Value */}
          <div className="mb-2">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-deep-purple via-deep-purple/80 to-deep-purple bg-clip-text text-transparent">
              {animatedValue}
            </span>
          </div>
          
          {/* Label */}
          <div className="mb-2">
            <span className="text-xs font-semibold tracking-wider text-deep-purple/70 uppercase">
              {label}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ConsultationWhyCortekResults;
