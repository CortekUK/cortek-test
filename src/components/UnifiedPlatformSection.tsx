import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { 
  Calendar, 
  Trophy, 
  MessageSquare, 
  Mail, 
  Instagram, 
  QrCode, 
  CreditCard,
  Cog,
  Send,
  LayoutGrid,
  Link,
  Users,
  Headphones,
  Unlock
} from "lucide-react";

const individualTools = [
  { icon: Calendar, name: "Court Booking" },
  { icon: Trophy, name: "Player Rankings" },
  { icon: MessageSquare, name: "WhatsApp" },
  { icon: Mail, name: "Email Campaigns" },
  { icon: Send, name: "Social Media" },
  { icon: QrCode, name: "QR Check-in" },
  { icon: CreditCard, name: "Payments" }
];

const ToolCard = ({ icon: Icon, name }: { 
  icon: any; 
  name: string; 
}) => (
  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-border/50 shadow-lg mr-6 flex-shrink-0 w-80">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-electric-blue" />
      </div>
      <h3 className="text-base font-semibold text-foreground leading-tight">{name}</h3>
    </div>
  </div>
);

const UnifiedPlatformSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
            Too Many Tools?
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-purple mb-8 font-sora">
            We've Put Them All in One Place.
          </h3>
          <div className="w-24 h-1 bg-deep-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-inter leading-relaxed">
            Run your padel club without juggling multiple systems. Cortek's Padel Package combines every feature you need into one easy platform.
          </p>
        </motion.div>

        {/* Individual Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-sora">
            Individual Tools
          </h3>
          <div className="w-16 h-1 bg-deep-purple mx-auto mb-12 rounded-full"></div>
          
          {/* Horizontal Scrolling Rows */}
          <div className="space-y-8">
            {/* First Row - Right to Left */}
            <ScrollVelocity velocity={-2} className="py-4">
              {[...individualTools, ...individualTools].map((tool, index) => (
                <ToolCard
                  key={`${tool.name}-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                />
              ))}
            </ScrollVelocity>
            
            {/* Second Row - Left to Right */}
            <ScrollVelocity velocity={3} className="py-4">
              {[...individualTools, ...individualTools].map((tool, index) => (
                <ToolCard
                  key={`${tool.name}-reverse-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                />
              ))}
            </ScrollVelocity>
          </div>
        </motion.div>

        {/* Unified Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 font-sora">
            Manage Your Entire Club in a Single Dashboard
          </h3>
          <div className="w-16 h-1 bg-deep-purple mx-auto mb-12 rounded-full"></div>

          {/* Redesigned Padel Package Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-neutral-border/20 relative overflow-hidden"
            >
              {/* Subtle accent border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-deep-purple/10 via-transparent to-electric-blue/10 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-sora">
                    Cortek Padel Package
                  </h4>
                  <p className="text-lg text-foreground-secondary font-inter">
                    Everything your club needs in one system
                  </p>
                </div>

                {/* Complete Feature Set - 8 Features in Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                   {/* WhatsApp Automation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-electric-blue/20 shadow-[0_8px_25px_rgba(45,129,247,0.15)]">
                      <div className="relative">
                        <MessageSquare className="w-8 h-8 text-electric-blue" />
                        <Cog className="w-3 h-3 text-deep-purple absolute -top-1 -right-1" />
                      </div>
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">WhatsApp Automation</h5>
                    <p className="text-xs text-foreground-secondary">Instant messaging workflows</p>
                  </motion.div>

                  {/* Social Media Automation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-deep-purple/20 to-deep-purple/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-deep-purple/20 shadow-[0_8px_25px_rgba(106,56,194,0.15)]">
                      <Send className="w-8 h-8 text-deep-purple" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Social Media Automation</h5>
                    <p className="text-xs text-foreground-secondary">Effortless scheduling</p>
                  </motion.div>

                  {/* Player Ranking System */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-electric-blue/20 to-deep-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-electric-blue/20 shadow-[0_8px_25px_rgba(45,129,247,0.15)]">
                      <Trophy className="w-8 h-8 text-deep-purple" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Player Ranking System</h5>
                    <p className="text-xs text-foreground-secondary">Automated leaderboards</p>
                  </motion.div>

                  {/* QR Code System */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-deep-purple/20 shadow-[0_8px_25px_rgba(106,56,194,0.15)]">
                      <QrCode className="w-8 h-8 text-electric-blue" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">QR Code System</h5>
                    <p className="text-xs text-foreground-secondary">Easy club access</p>
                  </motion.div>

                  {/* Cortek Club Portal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-electric-blue/20 shadow-[0_8px_25px_rgba(45,129,247,0.15)]">
                      <LayoutGrid className="w-8 h-8 text-electric-blue" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Cortek Club Portal</h5>
                    <p className="text-xs text-foreground-secondary">Manage everything in one hub</p>
                  </motion.div>

                  {/* Playtomic Integration */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-deep-purple/20 to-deep-purple/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-deep-purple/20 shadow-[0_8px_25px_rgba(106,56,194,0.15)]">
                      <Link className="w-8 h-8 text-deep-purple" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Playtomic Integration</h5>
                    <p className="text-xs text-foreground-secondary">Sync with existing systems</p>
                  </motion.div>

                  {/* Onboarding & Support */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-electric-blue/20 to-deep-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-electric-blue/20 shadow-[0_8px_25px_rgba(45,129,247,0.15)]">
                      <div className="relative">
                        <Users className="w-8 h-8 text-electric-blue" />
                        <Headphones className="w-3 h-3 text-deep-purple absolute -top-1 -right-1" />
                      </div>
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Onboarding & Support</h5>
                    <p className="text-xs text-foreground-secondary">Help every step of the way</p>
                  </motion.div>

                  {/* Cancel Anytime */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-deep-purple/20 shadow-[0_8px_25px_rgba(106,56,194,0.15)]">
                      <Unlock className="w-8 h-8 text-deep-purple" />
                    </div>
                    <h5 className="font-semibold text-foreground font-sora mb-1">Cancel Anytime — No Contracts</h5>
                    <p className="text-xs text-foreground-secondary">Full flexibility</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
          >
            <Button 
              variant="default"
              size="lg"
              className="bg-deep-purple hover:bg-deep-purple-hover text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Book My Free Demo
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-deep-purple/5 pointer-events-none"></div>
    </section>
  );
};

export default UnifiedPlatformSection;