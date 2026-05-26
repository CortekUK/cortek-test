import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CortekLogo from "@/components/ui/cortek-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/BookingModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const location = useLocation();

  const BLAB_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

  // Handle scroll effect for sticky navbar shadow and compact mode
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
      setIsCompact(scrollY > 100); // Switch to compact mode after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ease-in-out",
          "border-b border-border h-16",
          isScrolled && "shadow-lg"
        )}
      >
        <div className="section-container h-full">
          <div className={cn(
            "flex items-center h-full transition-all duration-300 ease-in-out",
            "justify-between"
          )}>
            {/* Logo - fades out in compact mode */}
            <Link 
              to="/" 
              className="group transition-all duration-300 ease-in-out opacity-100"
            >
              <CortekLogo size="lg" />
            </Link>

            {/* Navigation Links - repositioned in compact mode */}
            <div className="hidden md:flex items-center space-x-8 transition-all duration-300 ease-in-out ml-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-foreground font-medium text-sm tracking-wide transition-all duration-200 relative",
                    "hover:text-secondary focus:text-secondary focus:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm px-1 py-1",
                    isActive(link.href) && "text-secondary"
                  )}
                >
                  {link.name}
                  {/* Active indicator underline */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop actions - theme toggle and CTA button */}
            <div className="hidden md:flex items-center space-x-3 transition-all duration-300 ease-in-out">
              <Button 
                size="default"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold min-h-[44px]"
                onClick={() => setShowBookingModal(true)}
                onTouchStart={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.opacity = '';
                }}
              >
                Book Consultation
              </Button>
              <ThemeToggle variant="default" />
            </div>

            {/* Mobile Menu Toggle - positioned absolutely in compact mode */}
            <div className="flex items-center space-x-2 md:hidden transition-all duration-300 ease-in-out">
              <ThemeToggle variant="compact" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground hover:text-secondary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Sheet */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sheet */}
          <div 
            className={cn(
              "fixed top-0 left-0 right-0 bg-background shadow-2xl",
              "transform transition-transform duration-200 ease-out"
            )}
            style={{ 
              animation: 'slide-in-from-top 200ms ease-out forwards'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <CortekLogo size="md" />
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground hover:text-secondary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-6 py-4">
              <nav>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center h-14 px-4 text-foreground text-lg font-medium rounded-lg transition-all duration-200 relative",
                          "hover:bg-muted hover:text-secondary",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                          isActive(link.href) && "text-secondary"
                        )}
                      >
                        {/* Active indicator bar */}
                        {isActive(link.href) && (
                          <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary rounded-full" />
                        )}
                        <span className={cn(isActive(link.href) && "ml-3")}>
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-border mt-4">
              <Button
                className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground font-medium py-4 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-lg min-h-[44px]"
                onClick={() => {
                  setIsOpen(false);
                  setShowBookingModal(true);
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.opacity = '';
                }}
              >
                Book Consultation
              </Button>
            </div>

          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        blabUrl={BLAB_URL}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;