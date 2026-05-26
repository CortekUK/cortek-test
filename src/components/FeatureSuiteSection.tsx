import { Calendar, CreditCard, QrCode, MessageSquare, Mail, Share2, BarChart3, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FeatureGroup = ({ title, features, delay }: {
  title: string;
  features: Array<{ icon: any; name: string; description: string }>;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-background rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-border/50"
    >
      <h3 className="text-xl font-bold text-foreground mb-6 font-sora flex items-center">
        <span className="w-2 h-8 bg-deep-purple rounded mr-3"></span>
        {title}
      </h3>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 group">
            <div className="w-8 h-8 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/15 transition-colors">
              <feature.icon className="w-4 h-4 text-electric-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{feature.name}</h4>
              <p className="text-foreground-secondary text-xs leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const featureGroups = [
  {
    title: "Club Management",
    features: [
      {
        icon: Calendar,
        name: "Court Booking",
        description: "Seamless court reservations with real-time availability"
      },
      {
        icon: CreditCard,
        name: "Payments",
        description: "Automated billing and secure payment processing"
      },
      {
        icon: QrCode,
        name: "QR Check-In",
        description: "Quick facility access with branded QR codes"
      }
    ]
  },
  {
    title: "Member Engagement", 
    features: [
      {
        icon: MessageSquare,
        name: "WhatsApp Automation",
        description: "Smart messaging for bookings and community updates"
      },
      {
        icon: Mail,
        name: "Email Campaigns",
        description: "Targeted communications to boost engagement"
      },
      {
        icon: Share2,
        name: "Social Media Automation",
        description: "Automatic posting to grow your online presence"
      }
    ]
  },
  {
    title: "Growth Tools",
    features: [
      {
        icon: BarChart3,
        name: "Player Ranking System",
        description: "Automated leaderboards and player progression tracking"
      },
      {
        icon: Target,
        name: "Marketing Tools",
        description: "Data-driven campaigns to attract new members"
      },
      {
        icon: Zap,
        name: "Performance Analytics",
        description: "Insights to optimise operations and member experience"
      }
    ]
  }
];

const FeatureSuiteSection = () => {
  return (
    <section className="section-spacing bg-background animate-section-enter">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
            Every Tool You Need —{" "}
            <span className="text-deep-purple">In One Platform</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto font-inter">
            Complete automation suite designed specifically for business operations and customer engagement.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featureGroups.map((group, index) => (
            <FeatureGroup
              key={group.title}
              {...group}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSuiteSection;