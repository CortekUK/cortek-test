import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// First 3 testimonials (always visible)
const initialTestimonials = [
  {
    quote: "Cortek completely transformed our club operations with a CRM that centralizes bookings and communication. Member engagement is seamless, and our revenue has increased by 40% since implementation.",
    image: "https://i.pravatar.cc/150?u=sarah-johnson-cortek",
    name: "Sarah Johnson",
    role: "Padel Club Manager",
    initials: "SJ",
  },
  {
    quote: "Our custom CRM from Cortek saves us over 20 hours a week. Staff can now focus on what matters most - our members' experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Michael Chen",
    role: "Fitness Centre Owner",
    initials: "MC",
  },
  {
    quote: "Outstanding support team! They built our CRM around our exact workflow, guided us through every step, and helped us optimize operations. Couldn't be happier.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Emma Rodriguez",
    role: "Operations Director",
    initials: "ER",
  },
];

// Additional 6 testimonials (revealed on toggle)
const additionalTestimonials = [
  {
    quote: "The CRM setup was straightforward and the impact was immediate — faster responses, better handovers, and total visibility of client activity.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Priya S.",
    role: "Operations Lead, Legal Services",
    initials: "PS",
  },
  {
    quote: "Cortek integrated our CRM with invoicing and project tools perfectly. Now our team can focus on clients instead of admin — night and day difference.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Adam R.",
    role: "Director, Property Management",
    initials: "AR",
  },
  {
    quote: "Clear plan, no jargon. We cut admin by about 10 hours a week within the first fortnight.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Lucy P.",
    role: "Owner, Creative Studio",
    initials: "LP",
  },
  {
    quote: "Support was brilliant. Our new CRM connected seamlessly with existing systems — no disruption at all.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Daniel K.",
    role: "Head of Customer Success, SaaS",
    initials: "DK",
  },
  {
    quote: "Reliable automation within our custom CRM means our team finally stopped firefighting spreadsheets.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Hannah T.",
    role: "Clinic Manager, Healthcare",
    initials: "HT",
  },
  {
    quote: "We've sped up onboarding and reduced manual steps through a fully tailored CRM. The ROI matched what we saw in practice.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Owen J.",
    role: "Founder, Training Provider",
    initials: "OJ",
  },
];

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string;
  image: string;
  name: string;
  role: string;
  initials: string;
  index?: number;
}

const TestimonialCard = ({ quote, image, name, role, initials, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
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
      <div className="h-full p-6 md:p-8 rounded-2xl relative overflow-hidden
                    bg-gradient-to-br from-background/80 to-background-light/60
                    dark:from-[#0f0f2a] dark:via-[#0a0a1f] dark:to-[#050510]
                    backdrop-blur-sm
                    border border-neutral-border/30 dark:border-white/5
                    hover:border-electric-blue/40 dark:hover:border-electric-blue/30
                    transition-all duration-500
                    shadow-sm hover:shadow-lg
                    dark:hover:shadow-[0_0_30px_rgba(106,56,194,0.15)]
                    hover:-translate-y-1
                    flex flex-col">
        
        {/* Purple-blue glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Quote icon */}
        <div className="relative mb-4">
          <Quote className="w-8 h-8 text-deep-purple/40 dark:text-deep-purple/60" />
        </div>
        
        {/* Review text - flex-grow to push author to bottom */}
        <p className="text-foreground text-base md:text-lg leading-relaxed mb-6 relative z-10 flex-grow">
          "{quote}"
        </p>
        
        {/* Author section - always at bottom */}
        <div className="flex items-center gap-4 relative z-10 mt-auto">
          <Avatar className="w-12 h-12 border-2 border-neutral-border/20 dark:border-white/10 shadow-[0_0_20px_rgba(106,56,194,0.3)] dark:shadow-[0_0_25px_rgba(106,56,194,0.4)]">
            <AvatarImage src={image} alt={name} loading="lazy" />
            <AvatarFallback className="bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 text-sm font-bold bg-gradient-to-br from-deep-purple to-electric-blue bg-clip-text text-transparent">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-semibold text-foreground">
              {name}
            </p>
            <p className="text-sm text-foreground-secondary">
              {role}
            </p>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section-divider section-spacing bg-background animate-section-enter">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What <span className="text-deep-purple">Our Clients</span> Say
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
          </div>
          <p className="text-xl text-foreground-secondary max-w-2xl mt-8">
            See how businesses across industries are transforming their operations with Cortek's bespoke CRM systems — built with automation that works around them.
          </p>
        </motion.div>

        {/* Initial 3 testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {initialTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
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
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;