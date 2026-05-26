import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import adamMillerAvatar from "@/assets/avatars/adam-miller.jpg";
import carlitoGrahamAvatar from "@/assets/avatars/carlito-graham.jpg";
import sunnySinghAvatar from "@/assets/avatars/sunny-singh.jpg";

const ConsultationTestimonial = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // First 3 testimonials (always visible) - from homepage
  const initialTestimonials = [
    {
      quote: "CORTEK built us a CRM that makes running the business so much easier. Everything is in one place now with jobs, quotes, and client details all organized, and it's cut our admin time right down.",
      image: adamMillerAvatar,
      name: "Adam Miller",
      position: "Director",
      company: "AM Secure Ltd",
      industry: "Security",
      initials: "AM",
    },
    {
      quote: "The new CRM fits our business perfectly. We can now manage clients, inventory, and inquiries in one place. It's made everything far more organized and lets us focus on growing Lost In Time.",
      image: carlitoGrahamAvatar,
      name: "Carlito Graham",
      position: "Founder",
      company: "Lost In Time",
      industry: "Jewellers",
      initials: "CG",
    },
    {
      quote: "Working with CORTEK has been a great experience. They understood our business from day one and built a CRM that handles every part of our leasing operation perfectly.",
      image: sunnySinghAvatar,
      name: "Sunny Singh",
      position: "Director",
      company: "RTechUK",
      industry: "Vehicle Leasing",
      initials: "SS",
    },
  ];

  // Additional 6 testimonials (revealed on toggle) - from homepage
  const additionalTestimonials = [
    {
      quote: "The CRM setup was straightforward and the impact was immediate — faster responses, better handovers, and total visibility of client activity.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Priya S.",
      position: "Operations Lead",
      company: "Legal Services",
      industry: "",
      initials: "PS",
    },
    {
      quote: "Cortek integrated our CRM with invoicing and project tools perfectly. Now our team can focus on clients instead of admin — night and day difference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Adam R.",
      position: "Director",
      company: "Property Management",
      industry: "",
      initials: "AR",
    },
    {
      quote: "Clear plan, no jargon. We cut admin by about 10 hours a week within the first fortnight.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Lucy P.",
      position: "Owner",
      company: "Creative Studio",
      industry: "",
      initials: "LP",
    },
    {
      quote: "Support was brilliant. Our new CRM connected seamlessly with existing systems — no disruption at all.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Daniel K.",
      position: "Head of Customer Success",
      company: "SaaS",
      industry: "",
      initials: "DK",
    },
    {
      quote: "Reliable automation within our custom CRM means our team finally stopped firefighting spreadsheets.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Hannah T.",
      position: "Clinic Manager",
      company: "Healthcare",
      industry: "",
      initials: "HT",
    },
    {
      quote: "We've sped up onboarding and reduced manual steps through a fully tailored CRM. The ROI matched what we saw in practice.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      name: "Owen J.",
      position: "Founder",
      company: "Training Provider",
      industry: "",
      initials: "OJ",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-background"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(106,56,194,0.03)_0%,transparent_50%,rgba(59,130,246,0.03)_100%)]"></div>
      
      {/* Subtle floating dots pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="section-container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sora">
            What <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">Our Clients</span> Say
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Real businesses using Cortek's bespoke CRMs to streamline their operations.
          </p>
        </motion.div>

        {/* Initial 3 testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {initialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col
                            bg-gradient-to-br from-background/80 to-background-light/60
                            dark:from-[#0f0f2a] dark:via-[#0a0a1f] dark:to-[#050510]
                            backdrop-blur-sm
                            border border-neutral-border/30 dark:border-white/5
                            hover:border-electric-blue/40 dark:hover:border-electric-blue/30
                            transition-all duration-500
                            shadow-sm hover:shadow-lg
                            dark:hover:shadow-[0_0_30px_rgba(106,56,194,0.15)]
                            hover:-translate-y-1">
                
                {/* Purple-blue glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Upper content that can grow */}
                <div className="flex-grow">
                  {/* Quote icon */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-deep-purple/40 dark:text-deep-purple/60" />
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-foreground text-base md:text-lg leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author section - anchored to bottom */}
                <div className="flex items-center gap-4 relative z-10 mt-6">
                  {/* Avatar with photo */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ 
                      scale: [0.8, 1.1, 1],
                      opacity: 1
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.35,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    viewport={{ once: true }}
                  >
                    <Avatar className="w-12 h-12 border-2 border-neutral-border/20 dark:border-white/10 shadow-[0_0_20px_rgba(106,56,194,0.3)] dark:shadow-[0_0_25px_rgba(106,56,194,0.4)]">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} loading="lazy" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 text-sm font-bold bg-gradient-to-br from-deep-purple to-electric-blue bg-clip-text text-transparent">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  {/* Author info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground-secondary">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-foreground-secondary/80">
                      {testimonial.company}{testimonial.industry && ` (${testimonial.industry})`}
                    </p>
                  </div>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(v => !v)}
            aria-expanded={isExpanded}
            aria-controls="more-testimonials"
            className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium 
                     bg-gradient-to-r from-deep-purple/10 to-electric-blue/10
                     hover:from-deep-purple/20 hover:to-electric-blue/20
                     text-deep-purple dark:text-electric-blue
                     border border-deep-purple/20 dark:border-electric-blue/20
                     transition-all duration-300
                     hover:scale-105 hover:shadow-lg"
          >
            {isExpanded ? "Show Fewer" : "See More Testimonials"}
          </button>
        </div>

        {/* Expandable area with additional testimonials */}
        <div
          id="more-testimonials"
          className={`
            transition-all duration-500 ease-out overflow-hidden
            ${isExpanded ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"}
            motion-reduce:transition-none
          `}
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {additionalTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col
                              bg-gradient-to-br from-background/80 to-background-light/60
                              dark:from-[#0f0f2a] dark:via-[#0a0a1f] dark:to-[#050510]
                              backdrop-blur-sm
                              border border-neutral-border/30 dark:border-white/5
                              hover:border-electric-blue/40 dark:hover:border-electric-blue/30
                              transition-all duration-500
                              shadow-sm hover:shadow-lg
                              dark:hover:shadow-[0_0_30px_rgba(106,56,194,0.15)]
                              hover:-translate-y-1">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Upper content that can grow */}
                  <div className="flex-grow">
                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-deep-purple/40 dark:text-deep-purple/60" />
                    </div>
                    
                    <p className="text-foreground text-base md:text-lg leading-relaxed relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Author section - anchored to bottom */}
                  <div className="flex items-center gap-4 relative z-10 mt-6">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ 
                        scale: [0.8, 1.1, 1],
                        opacity: 1
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.35,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <Avatar className="w-12 h-12 border-2 border-neutral-border/20 dark:border-white/10 shadow-[0_0_20px_rgba(106,56,194,0.3)] dark:shadow-[0_0_25px_rgba(106,56,194,0.4)]">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} loading="lazy" className="object-cover" />
                        <AvatarFallback className="bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 text-sm font-bold bg-gradient-to-br from-deep-purple to-electric-blue bg-clip-text text-transparent">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-foreground-secondary/80">
                        {testimonial.company}{testimonial.industry && ` (${testimonial.industry})`}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTestimonial;