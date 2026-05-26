import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const mainFeatures = ["WhatsApp court availability & booking automation", "Automated marketing & social posts", "Player engagement tracking", "Padel club ranking system (Elo-based)", "QR match result scanning", "Playtomic integration (bookings, availability, player data)", "Central Club Portal dashboard", "Court utilisation & performance insights", "Unlimited automations", "Unlimited team members", "Priority support", "Full onboarding & setup included"];

const addOns = [{
  icon: Building2,
  title: "Multi-Location Upgrade",
  price: "From £99/month",
  priceDetail: "per additional site",
  description: "Perfect for clubs with multiple venues that want to manage everything centrally."
}, {
  icon: Palette,
  title: "White-Label Branding",
  price: "£49/month",
  priceDetail: "",
  description: "Custom branded dashboards, templates, and automated messaging for a fully branded player experience."
}];

const valueStats = [{
  value: "40%",
  label: "Average revenue increase"
}, {
  value: "20+",
  label: "Admin hours saved weekly"
}, {
  value: "100+",
  label: "Clubs using Cortek"
}, {
  value: "0",
  label: "Contracts · Cancel anytime"
}];

const PadelPricingSection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/50 dark:bg-muted/30 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-deep-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-electric-blue/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-16 max-w-[650px] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing for{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
              Padel Clubs
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            No long-term contracts. Start onboarding instantly.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Main Package Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              viewport={{ once: true }} 
              className="lg:col-span-2 relative group"
            >
              {/* Featured Badge */}
              <div className="absolute -top-3 left-6 z-20">
                <span className="bg-gradient-to-r from-deep-purple to-electric-blue text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(91,27,225,0.4)]">
                  Most Popular
                </span>
              </div>
              
              <div className="h-full bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-[0_0_60px_rgba(91,27,225,0.1)] border-2 border-deep-purple/30 relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_80px_rgba(91,27,225,0.2)] group-hover:border-deep-purple/50 group-hover:-translate-y-1">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-transparent to-electric-blue/10 pointer-events-none opacity-50" />
                
                {/* Corner Accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Padel Club Package</h3>
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">From £139</span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {mainFeatures.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.3, delay: index * 0.03 }} 
                        viewport={{ once: true }} 
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-deep-purple to-electric-blue flex items-center justify-center mt-0.5 flex-shrink-0 shadow-[0_0_10px_rgba(91,27,225,0.3)]">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Ideal For */}
                  <p className="text-sm text-muted-foreground/80 mb-6 italic">
                    Ideal for clubs that want to boost bookings, fill empty courts, automate marketing, and reduce admin hours every week.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="flex-1 bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(91,27,225,0.4)] transition-all duration-300">
                      <Link to="/book-consultation">
                        Start Onboarding
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 border-2 border-deep-purple/50 text-deep-purple hover:bg-deep-purple/10 hover:border-deep-purple font-semibold py-6 text-lg hover:shadow-[0_0_20px_rgba(91,27,225,0.2)] transition-all duration-300" onClick={() => setShowBookingModal(true)}>
                      Book a Free Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Add-On Cards Stack */}
            <div className="space-y-6">
              {addOns.map((addOn, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="group bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/10 hover:border-deep-purple/30 hover:shadow-[0_0_30px_rgba(91,27,225,0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Corner Accent */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 flex items-center justify-center shadow-[0_0_15px_rgba(91,27,225,0.2)] group-hover:shadow-[0_0_20px_rgba(91,27,225,0.4)] transition-all duration-300">
                        <addOn.icon className="w-5 h-5 text-deep-purple" />
                      </div>
                      <h4 className="font-bold text-foreground">{addOn.title}</h4>
                    </div>
                    <div className="mb-3">
                      <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{addOn.price}</span>
                      {addOn.priceDetail && <span className="text-sm text-muted-foreground ml-1">{addOn.priceDetail}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{addOn.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Value Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {valueStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-4 md:p-6 bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 shadow-sm flex flex-col items-center justify-center min-h-[120px] hover:shadow-[0_0_30px_rgba(91,27,225,0.15)] hover:-translate-y-2 hover:border-deep-purple/30 transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-deep-purple to-electric-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent mb-1 drop-shadow-[0_0_10px_rgba(91,27,225,0.3)]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(91,27,225,0.4)] transition-all duration-300">
                <Link to="/book-consultation">
                  Start Onboarding
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-deep-purple/50 text-deep-purple hover:bg-deep-purple/10 hover:border-deep-purple px-10 py-6 text-lg font-semibold hover:shadow-[0_0_20px_rgba(91,27,225,0.2)] transition-all duration-300" onClick={() => setShowBookingModal(true)}>
                Book a Free Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No long-term contracts • Full setup included • Trusted by 100+ clubs
            </p>
          </motion.div>
        </div>
      </div>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} blabUrl={BLAB_URL} />
    </section>
  );
};

export default PadelPricingSection;
