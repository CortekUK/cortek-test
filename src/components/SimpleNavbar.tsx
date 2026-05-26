import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CortekLogo from "@/components/ui/cortek-logo";
import BookingModal from "@/components/BookingModal";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const SimpleNavbar = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showScrollCTA, setShowScrollCTA] = useState(false);
  const BLAB_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

  // Analytics event tracking
  const trackAnalytics = (event: string) => {
    console.log(`Analytics: ${event}`, { timestamp: new Date().toISOString() });
  };

  // Handle scroll behavior for mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.65;
      const shouldShow = window.scrollY > threshold;
      
      if (shouldShow !== showScrollCTA) {
        setShowScrollCTA(shouldShow);
        trackAnalytics(shouldShow ? 'nav_cta_shown' : 'nav_cta_hidden');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollCTA]);

  const handleCTAClick = () => {
    trackAnalytics('nav_cta_clicked');
    setShowBookingModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-lg border-b border-border">
        <div className="section-container px-4">
          <div className="flex items-center justify-between h-12 md:h-16">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <CortekLogo size="md" className="md:scale-[1.2]" />
            </a>
            
            {/* Right side - Theme toggle and CTA */}
            <div className="flex items-center gap-1.5 md:gap-2 relative">
              <ThemeToggle variant="compact" className="md:h-9 md:w-9 transition-all duration-200 ease-out" />
              <Button
                onClick={handleCTAClick}
                variant="outline"
                size="sm"
                className={cn(
                  // Mobile: absolute positioning so it doesn't affect layout when hidden
                  "absolute right-0 md:relative",
                  // Desktop: always visible, subtle hover
                  "md:opacity-100 md:translate-x-0",
                  // Custom hover/active/focus states
                  "hover:brightness-[1.06] active:brightness-[1.08]",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4FA3FF]",
                  // Mobile: scroll-based animation
                  "transition-all duration-200 ease-out",
                  "text-xs md:text-sm px-2.5 py-1.5 md:px-3 md:py-2 h-8 md:h-9",
                  showScrollCTA 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full pointer-events-none md:pointer-events-auto"
                )}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        blabUrl={BLAB_URL}
      />
    </>
  );
};

export default SimpleNavbar;
