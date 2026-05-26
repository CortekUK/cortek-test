import { Dumbbell, Hammer, UtensilsCrossed, ShoppingBag, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Gyms",
    icon: Dumbbell,
    description: "Manage memberships, class bookings, and client engagement in one place."
  },
  {
    title: "Construction",
    icon: Hammer,
    description: "Track projects, clients, and site progress with custom dashboards."
  },
  {
    title: "Restaurants",
    icon: UtensilsCrossed,
    description: "Centralise reservations, feedback, and supplier management seamlessly."
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    description: "Connect sales, inventory, and customer data for smoother operations."
  },
  {
    title: "Offices",
    icon: Building2,
    description: "Organise client communications and internal workflows effortlessly."
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    description: "Streamline client onboarding, billing, and reporting."
  }
];

const IndustriesSection = () => {
  return (
    <section className="section-divider section-spacing bg-background-light animate-section-enter">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We <span className="text-deep-purple">Support</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-8 mb-6">
            Tailored CRM Systems Built for Your Industry
          </h3>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Cortek creates custom CRM platforms designed around the unique needs of each sector — from gyms and restaurants to construction and professional services. Every system integrates seamlessly with your existing tools and includes smart automation to simplify your daily operations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="relative bg-background rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up group text-center overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowEffect
                  colors={['#8B5CF6', '#3B82F6']}
                  mode="rotate"
                  blur="soft"
                  duration={8}
                  className="inset-0 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMaskComposite: 'xor',
                    padding: '2px'
                  }}
                />
                <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-deep-purple/[0.12] to-transparent border border-foreground/[0.08] flex items-center justify-center group-hover:border-deep-purple/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-foreground-secondary group-hover:text-deep-purple transition-colors duration-200" />
                </div>
                <h3 className="relative z-10 text-sm lg:text-base font-semibold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="relative z-10 text-xs lg:text-sm text-foreground-secondary">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground-secondary mb-8 font-inter">
            Don't see your industry?
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="text-base md:text-xl lg:text-2xl px-6 py-3 md:px-12 md:py-6 lg:px-16 lg:py-8 font-semibold">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;