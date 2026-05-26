import { TrendingUp, Clock, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MetricCard = ({ icon: Icon, value, suffix, label, description, delay }: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) => {
  const { value: animatedValue, startAnimation } = useCounter({
    end: value,
    duration: 2000,
    suffix
  });

  const cardRef = useRef<HTMLDivElement>(null);

  // Start animation when element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            startAnimation();
          }, delay * 100); // Stagger with delay
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [startAnimation, delay]);

  return (
    <motion.div
      ref={cardRef}
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      // viewport={{ once: true }}
      // onAnimationComplete={() => startAnimation()}
      className="bg-background rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-deep-purple focus-within:ring-offset-2 group"
      tabIndex={0}
      role="article"
      aria-label={`${label}: ${value}${suffix} - ${description}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-deep-purple/10 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-deep-purple/15">
            <Icon className="w-8 h-8 text-deep-purple transition-colors duration-300" />
          </div>
        </div>
        
        <div
          className="text-4xl lg:text-5xl font-bold text-electric-blue mb-2 font-sora"
        >
          {animatedValue}
        </div>
        
        <div className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-3 font-inter">
          {label}
        </div>
        
        <p className="text-foreground-secondary font-inter text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const metrics = [
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Member Engagement",
    description: "Increase in customer and team interaction through personalised CRM workflows."
  },
  {
    icon: Clock,
    value: 15,
    suffix: "hrs",
    label: "Time Saved",
    description: "Average time saved per week through smart task automation built into every Cortek system."
  },
  {
    icon: Target,
    value: 95,
    suffix: "%",
    label: "Process Accuracy",
    description: "Improved data consistency and reporting across custom dashboards."
  },
  {
    icon: Users,
    value: 3,
    suffix: "x",
    label: "Business Growth",
    description: "Faster scaling with systems that adapt to your business needs and reduce manual admin."
  }
];

const WhyCortekSection = () => {
  return (
    <section className="section-spacing bg-background-light animate-section-enter">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
              Cortek <span className="text-deep-purple">Drives Results</span> for Businesses
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
          </div>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mt-12 font-inter">
            See the measurable impact of custom-built CRM systems designed to streamline operations and boost performance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-foreground-secondary mb-6 font-inter">
            See how a bespoke CRM can transform your business.
          </p>
          <Link to="/book-consultation">
            <Button variant="primary" size="lg" className="text-lg px-8 py-4">
              Book Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCortekSection;