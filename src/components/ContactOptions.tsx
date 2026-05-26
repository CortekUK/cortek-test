import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";

const ContactOptions = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "support@cortek.io",
      description: "Drop us a message anytime — our CRM experts are ready to help."
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Manchester, United Kingdom",
      description: "Proudly based in the heart of Manchester, serving clients across the UK and beyond."
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon–Fri, 9AM–6PM GMT",
      description: "We typically respond within 2 hours during business hours."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-visible">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto min-w-0">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group min-w-0"
              >
                <div className="h-full w-full min-w-0 box-border bg-background/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 border border-neutral-border/20 hover:border-deep-purple/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(106,56,194,0.06)] isolate relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 group-hover:from-deep-purple/15 group-hover:to-electric-blue/15 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-deep-purple" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 font-sora">
                    {card.title}
                  </h3>
                  <p className="text-base font-medium text-deep-purple mb-2 break-words">
                    {card.value}
                  </p>
                  <p className="text-sm text-foreground-secondary">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;