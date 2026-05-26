import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { FlipWords } from "@/components/ui/flip-words";
import { Link } from "react-router-dom";
// Icons now use Simple Icons CDN for professional quality
import { cn } from "@/lib/utils";

const ConsultationHero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const { scrollY } = useScroll();
  const BLAB_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

  // Define the icons with their unique positions and SEO labels
  type HeroIcon = {
    id: number;
    url: string;
    label: string;
    className: string;
  };

  const heroIcons: HeroIcon[] = [
    { id: 1, url: 'https://cdn.simpleicons.org/whatsapp', label: 'WhatsApp business automation', className: 'top-[5%] left-[8%]' },
    { id: 2, url: 'https://cdn.simpleicons.org/mailchimp', label: 'Mailchimp email marketing automation', className: 'top-[6%] left-[25%]' },
    { id: 3, url: '/icons/slack.svg', label: 'Slack team collaboration', className: 'top-[2%] right-[22%]' },
    { id: 4, url: 'https://cdn.simpleicons.org/stripe', label: 'Stripe payment processing', className: 'top-[10%] right-[8%]' },
    { id: 5, url: 'https://cdn.simpleicons.org/googlecalendar', label: 'Google Calendar scheduling automation', className: 'bottom-[15%] right-[10%]' },
    { id: 6, url: 'https://cdn.simpleicons.org/shopify', label: 'Shopify e-commerce integration', className: 'bottom-[12%] right-[28%]' },
    { id: 7, url: 'https://cdn.simpleicons.org/asana', label: 'Asana project management automation', className: 'bottom-[22%] left-[25%]' },
    { id: 8, url: 'https://cdn.simpleicons.org/facebook', label: 'Facebook social media automation', className: 'bottom-[10%] left-[10%]' },
    { id: 9, url: 'https://cdn.simpleicons.org/hubspot', label: 'HubSpot CRM automation', className: 'top-[25%] left-[5%]' },
    { id: 10, url: 'https://cdn.simpleicons.org/zapier', label: 'Zapier workflow automation', className: 'top-[47%] right-[7%]' },
    { id: 11, url: 'https://cdn.simpleicons.org/square', label: 'Square payment automation', className: 'top-[28%] right-[15%]' },
    { id: 12, url: 'https://cdn.simpleicons.org/quickbooks', label: 'QuickBooks accounting automation', className: 'top-[30%] left-[8%] md:top-[6%] md:left-[48%]' },
    { id: 13, url: 'https://cdn.simpleicons.org/gmail', label: 'Gmail email automation', className: 'top-[55%] left-[12%]' },
  ];
  
  // Handle scroll indicator fade out
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 120) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth"
    });
  };

  return (
    <section 
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-background via-deep-purple/5 to-electric-blue/8"
      role="img"
      aria-label="Background animation showing CORTEK business automation connecting WhatsApp, Gmail, Google Calendar, Stripe, Shopify, LinkedIn, and Facebook into one streamlined system"
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/90 z-[1]"></div>
      
      {/* Floating Icons Background */}
      <div className="absolute inset-0 w-full h-full">
        {heroIcons.map((iconData, index) => {
          return (
              <motion.div
                key={iconData.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${iconData.className}`}
                role="img"
                aria-label={iconData.label}
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-3xl bg-background/80 backdrop-blur-md border border-deep-purple/40"
                  style={{
                    boxShadow: '0 0 30px rgba(106, 56, 194, 0.5), 0 0 60px rgba(106, 56, 194, 0.3), 0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                  animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 6, 0, -6, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                >
                  <img 
                    src={iconData.url} 
                    alt={iconData.label}
                    className="w-8 h-8 md:w-10 md:h-10 brightness-110"
                  />
                </motion.div>
              </motion.div>
          );
        })}
      </div>
      
      <div className="section-container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <style>{`
            .hero-h1 {
              max-width: 1040px;
              margin: 0 auto;
              text-align: center;
              font-size: clamp(32px, 9vw, 40px);
              line-height: 1.12;
              letter-spacing: -0.015em;
              text-wrap: balance;
              hyphens: none;
              margin-bottom: 1.5rem;
            }
            @media (min-width: 768px) {
              .hero-h1 {
                max-width: 920px;
                font-size: clamp(32px, 6.2vw, 56px);
                line-height: 1.06;
                margin-bottom: 1rem;
              }
            }
            @media (min-width: 1024px) {
              .hero-h1 {
                max-width: 1040px;
                font-size: clamp(36px, 5.6vw, 68px);
                line-height: 1.06;
                margin-bottom: 0;
              }
            }
            .hero-gradient {
              background: linear-gradient(135deg, #6A38C2 0%, #4169E1 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-weight: 700;
              display: inline-block;
            }
            .hero-cta-button {
              font-size: 12.5px;
              padding: 0.5rem 0.9rem;
              font-weight: 500;
              height: auto;
            }
            @media (min-width: 768px) {
              .hero-cta-button {
                font-size: 18px;
                padding: 1.5rem 2.5rem;
                font-weight: 700;
              }
            }
          `}</style>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Bespoke CRM Systems for Every <FlipWords words={["Business", "Industry", "Company", "Enterprise", "Organisation"]} duration={1000} className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-purple" />
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">
            Smarter. Faster. Fully Connected.
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            From construction to healthcare, retail to restaurants — Cortek designs custom CRM systems that centralise your data, enhance customer relationships, and streamline your workflow. Built-in automation takes care of repetitive tasks so you can focus on growth.
          </p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setShowBookingModal(true)}
              >
                Book Consultation
              </Button>
              <Link to="/industries">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                  See CRM Examples
                </Button>
              </Link>
            </div>
            
            {/* Reassurance Badges */}
            <div className="flex items-center gap-3 text-sm text-foreground-secondary/90 font-medium">
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-electric-blue" />
                Free
              </span>
              <span className="text-foreground-secondary/40">•</span>
              <span>No obligation</span>
              <span className="text-foreground-secondary/40">•</span>
              <span>Avg response: 2 hours</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Simple Mouse Icon */}
        <motion.button
          onClick={scrollToNextSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollIndicatorVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "mt-12 md:mt-16 mx-auto",
            "w-6 h-9 md:w-7 md:h-10",
            "rounded-full",
            "border-2 border-deep-purple",
            "bg-transparent",
            "hover:scale-110 hover:border-electric-blue",
            "transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-deep-purple focus:ring-offset-2 focus:ring-offset-background",
            "flex items-start justify-center pt-2",
            !scrollIndicatorVisible && "pointer-events-none"
          )}
          aria-label="Scroll to discover how CORTEK helps your business scale smarter with automation"
        >
          <motion.div
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 rounded-full bg-deep-purple"
          />
        </motion.button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        blabUrl={BLAB_URL}
      />
    </section>
  );
};

export default ConsultationHero;