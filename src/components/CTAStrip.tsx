import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const CTAStrip = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollPositionRef = useRef<number>(0);

  // Store scroll position when component mounts
  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent all possible default behaviors
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    // Store current scroll position
    const currentScroll = window.scrollY;
    scrollPositionRef.current = currentScroll;

    console.log("Opening modal at scroll position:", currentScroll);

    // Open the modal
    setShowBookingModal(true);

    // Force maintain position - use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      if (window.scrollY !== currentScroll) {
        console.log("Preventing scroll jump, restoring to:", currentScroll);
        window.scrollTo(0, currentScroll);
      }
    });
  };

  const handleModalClose = () => {
    setShowBookingModal(false);

    // Ensure we stay at the same position after closing
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="section-divider section-spacing bg-background-light animate-section-enter"
      id="cta-strip"
    >
      <div className="section-container text-center animate-fade-in-up max-w-4xl">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-deep-purple">Automate</span>?
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
        </div>

        <p className="text-xl text-foreground-secondary mb-10 max-w-2xl mx-auto mt-8">
          Join hundreds of successful businesses who've transformed their operations with Cortek automation.
        </p>

        {/* Using a div wrapper to isolate the button completely */}
        <div className="inline-block">
          <button
            type="button"
            className="inline-flex items-center justify-center text-lg px-8 py-4 group rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleBookingClick}
            onMouseDown={(e) => e.preventDefault()} // Prevent mousedown default
            aria-label="Book a Consultation"
            style={{ cursor: 'pointer' }} // Explicitly set cursor
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <p className="text-sm text-foreground-muted mt-6">
          Free 30-minute consultation • No commitment required • Trusted by leading businesses
        </p>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={handleModalClose}
        blabUrl={BLAB_URL}
      />
    </section>
  );
};

export default CTAStrip;