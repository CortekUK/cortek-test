import { motion } from "framer-motion";
import { Zap, Megaphone, Rocket, ArrowRight, MessageSquare, Trophy, Share2, BarChart3 } from "lucide-react";
import playtomicLogo from "@/assets/playtomic-logo.png";

const features = [
  {
    icon: Zap,
    title: "Automated From Bookings",
    bullets: [
      "Instant booking sync",
      "Auto reminders & follow-ups",
      "Player data enrichment"
    ],
    accentColor: "from-cyan-400 to-electric-blue",
    badgeColor: "bg-cyan-500/20 text-cyan-300"
  },
  {
    icon: Megaphone,
    title: "Availability Broadcasting",
    bullets: [
      "Auto-post spaces to WhatsApp",
      "Instagram & Facebook updates",
      "Real-time availability alerts"
    ],
    accentColor: "from-purple-400 to-deep-purple",
    badgeColor: "bg-purple-500/20 text-purple-300"
  },
  {
    icon: Rocket,
    title: "Works With Playtomic",
    bullets: [
      "Your booking system stays unchanged",
      "All links direct to booking pages",
      "Zero manual syncing required"
    ],
    accentColor: "from-emerald-400 to-teal-500",
    badgeColor: "bg-emerald-500/20 text-emerald-300"
  }
];

const outputItems = [
  { icon: MessageSquare, label: "WhatsApp", gradient: "from-green-500 to-emerald-600", iconColor: "text-white" },
  { icon: Trophy, label: "Rankings", gradient: "from-amber-400 to-yellow-500", iconColor: "text-white" },
  { icon: Share2, label: "Social", gradient: "from-pink-500 via-purple-500 to-indigo-500", iconColor: "text-white" },
  { icon: BarChart3, label: "Reports", gradient: "from-cyan-400 to-blue-500", iconColor: "text-white" }
];

const DataFlowVisualization = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-14">
      {/* Playtomic Source */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
      >
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <img src={playtomicLogo} alt="Playtomic" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <p className="text-white font-semibold text-sm">Playtomic</p>
          <p className="text-white/60 text-xs">Bookings & Players</p>
        </div>
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="hidden md:flex items-center">
          <div className="w-12 h-0.5 bg-gradient-to-r from-white/40 to-white/60" />
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5 text-white/80" />
          </motion.div>
        </div>
        <div className="md:hidden">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5 text-white/80 rotate-90" />
          </motion.div>
        </div>
      </motion.div>

      {/* Cortek Processing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-purple to-electric-blue rounded-xl blur-lg opacity-50" />
        <div className="relative px-6 py-4 bg-gradient-to-r from-deep-purple/80 to-electric-blue/80 rounded-xl border border-white/30">
          <p className="text-white font-bold text-sm">CORTEK</p>
          <p className="text-white/70 text-xs">Automation Engine</p>
        </div>
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="hidden md:flex items-center">
          <div className="w-12 h-0.5 bg-gradient-to-r from-white/60 to-white/40" />
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <ArrowRight className="w-5 h-5 text-white/80" />
          </motion.div>
        </div>
        <div className="md:hidden">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <ArrowRight className="w-5 h-5 text-white/80 rotate-90" />
          </motion.div>
        </div>
      </motion.div>

      {/* Output Icons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        {outputItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1.5"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={2} />
            </div>
            <span className="text-[10px] text-white/80 font-medium whitespace-nowrap">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const PadelPlaytomicSection = () => {
  return (
    <section className="pt-[100px] pb-[120px] bg-gradient-to-br from-deep-purple via-[#6B21A8] to-electric-blue relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Seamless{" "}
            <span className="animate-gradient-shift-blue">
              Playtomic Integration
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-[700px] mx-auto leading-relaxed">
            Power your club with automation and insights — built on top of Playtomic.
          </p>
        </motion.div>

        {/* Data Flow Visualization */}
        <DataFlowVisualization />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border-2 border-white/40 ring-1 ring-white/10 hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number Badge */}
              <span className={`absolute top-4 left-4 text-xs font-bold px-2 py-1 rounded-md ${feature.badgeColor}`}>
                0{idx + 1}
              </span>

              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {feature.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-white/70 text-base md:text-lg"
        >
          Cortek supercharges your Playtomic data — turning it into automation, insights, and growth.
        </motion.p>
      </div>
    </section>
  );
};

export default PadelPlaytomicSection;
