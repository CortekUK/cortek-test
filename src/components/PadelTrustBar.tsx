import { motion } from "framer-motion";
import { Shield, Headphones, Clock, Award, Zap, Link2 } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "GDPR Compliant"
  },
  {
    icon: Headphones,
    title: "UK-Based Support"
  },
  {
    icon: Clock,
    title: "99.9% Uptime"
  },
  {
    icon: Award,
    title: "Trusted by 100+ Clubs"
  },
  {
    icon: Zap,
    title: "Fast Setup (Minutes, not weeks)"
  },
  {
    icon: Link2,
    title: "Seamless Playtomic Sync"
  }
];

const PadelTrustBar = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
        >
          Trusted, Secure &{" "}
          <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
            Built for Padel Clubs
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 max-w-6xl mx-auto">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-deep-purple/10 border border-deep-purple/20 flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-deep-purple" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{badge.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PadelTrustBar;
