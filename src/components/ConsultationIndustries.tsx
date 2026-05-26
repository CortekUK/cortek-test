import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { 
  Brain, 
  Cloud, 
  ShoppingBag, 
  Briefcase, 
  Stethoscope, 
  Calculator, 
  UtensilsCrossed, 
  GraduationCap, 
  Home, 
  Calendar,
  MessageCircle,
  HardHat
} from "lucide-react";

const ConsultationIndustries = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!api) return;
    
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    onScroll();
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);

    return () => {
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
    };
  }, [api, onScroll]);

  const industries = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Power intelligent workflows and automate decision-making with AI-driven automation. Help your startup scale faster, reduce operational costs, and stay ahead of competitors with smarter systems.",
    },
    {
      icon: Cloud,
      title: "SaaS & Software",
      description: "Streamline onboarding, billing automation, and customer support workflows. Grow your SaaS efficiently with smart integrations and less manual admin.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Automate inventory management, order processing, and customer communications. Boost sales efficiency whilst improving the customer experience from checkout to fulfilment.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Eliminate repetitive admin tasks, automate client communications, and optimise scheduling. Save 10–15 hours a week and focus more on billable work.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Clinics",
      description: "Reduce admin delays with patient booking automation, reminders, and secure record handling. Free up staff time to focus on patient care.",
    },
    {
      icon: Calculator,
      title: "Finance & Accounting",
      description: "Automate invoicing, expense tracking, and reporting. Ensure compliance whilst saving hours every week on manual financial admin.",
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality & Restaurants",
      description: "Simplify reservations, staff scheduling, and customer follow-ups. Deliver better service whilst cutting down back-office workload.",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Automate enrolments, scheduling, and progress tracking. Spend less time on paperwork and more time on teaching and student engagement.",
    },
    {
      icon: Home,
      title: "Property & Real Estate",
      description: "Streamline tenant communications, appointment scheduling, and contract management. Cut admin overhead and focus on closing deals faster.",
    },
    {
      icon: Calendar,
      title: "Events & Venues",
      description: "Automate ticketing, guest communications, and vendor management. Deliver smooth, professional events without drowning in admin tasks.",
    },
    {
      icon: HardHat,
      title: "Construction",
      description: "Streamline project management, subcontractor coordination, and client updates. Keep projects on track with automated workflows and better oversight.",
    },
    {
      icon: MessageCircle,
      title: "Don't See Your Industry?",
      description: "No problem. CORTEK customises automation for businesses of all types. If your industry isn't listed, contact us today — we'll tailor solutions to your needs.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-bold font-sora text-3xl md:text-4xl lg:text-5xl mb-4">
            Industries Using{" "}
            <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">
              Cortek CRMs
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            From AI startups to service businesses, CORTEK helps companies across industries 
            streamline operations and scale smarter with automation.
          </p>
        </motion.div>

        {/* Industry Cards Carousel */}
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full max-w-7xl mx-auto relative"
          aria-label="Browse industries we support"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <CarouselItem 
                  key={industry.title} 
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-[55%] md:basis-1/2 lg:basis-[31%]"
                >
                  <div 
                    className="relative bg-white dark:bg-card border border-border/20 rounded-2xl p-6 md:p-7 h-[420px] md:h-[460px] shadow-sm transition-all duration-300 group will-change-transform
                      hover:shadow-xl hover:-translate-y-1.5
                      focus-within:shadow-xl focus-within:-translate-y-1.5 focus-within:outline focus-within:outline-2 focus-within:outline-deep-purple/50 focus-within:outline-offset-2
                      before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-deep-purple before:to-electric-blue before:opacity-0 before:transition-opacity before:duration-300 before:-z-10
                      hover:before:opacity-30 focus-within:before:opacity-30"
                    tabIndex={0}
                    role="article"
                    aria-labelledby={`industry-${index}`}
                  >
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <linearGradient id={`icon-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--deep-purple))" />
                          <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="flex flex-col items-center text-center h-full pt-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 flex items-center justify-center flex-shrink-0 mb-6 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] group-focus-within:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        <Icon className="w-10 h-10" style={{ stroke: `url(#icon-gradient-${index})` }} />
                      </div>
                      
                      <h3 
                        id={`industry-${index}`}
                        className="text-2xl md:text-3xl font-bold font-sora text-foreground mb-5"
                      >
                        {industry.title}
                      </h3>

                      <p className="text-lg text-muted-foreground leading-normal">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious 
            className="-left-4 lg:-left-12 border-deep-purple/20 hover:bg-deep-purple/10 hover:border-deep-purple/40 transition-colors" 
            aria-label="Scroll industries left"
          />
          <CarouselNext 
            className="-right-4 lg:-right-12 border-deep-purple/20 hover:bg-deep-purple/10 hover:border-deep-purple/40 transition-colors" 
            aria-label="Scroll industries right"
          />
        </Carousel>

      </div>
    </section>
  );
};

export default ConsultationIndustries;
