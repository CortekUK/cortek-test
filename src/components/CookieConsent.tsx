import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";


const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem("cortek_cookie_consent");
    if (!consent) {
      setIsVisible(false);
      // Small delay to ensure smooth animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAcceptAll = () => {
    sessionStorage.setItem("cortek_cookie_consent", "accepted");
    sessionStorage.setItem("cortek_cookie_timestamp", new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cortek_cookie_consent", "declined");
    sessionStorage.setItem("cortek_cookie_timestamp", new Date().toISOString());
    setIsVisible(false);
  };


  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:bottom-8 animate-slide-in-up">
      <div className="mx-auto max-w-lg md:max-w-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-2xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-3">
              We use cookies to improve your browsing experience and analyze
              site traffic. By continuing, you agree to our use of cookies.
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-muted rounded-md border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3">Cookie Information</h4>
                <div className="space-y-3 text-xs text-foreground/70">
                  <div>
                    <strong className="text-foreground">Essential Cookies:</strong> Required for site functionality, authentication, and security. These cannot be disabled.
                  </div>
                  <div>
                    <strong className="text-foreground">Analytics Cookies:</strong> Help us understand usage patterns and improve user experience.
                  </div>
                  <div>
                    <strong className="text-foreground">Marketing Cookies:</strong> Used for targeted advertising and campaign tracking.
                  </div>
                </div>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 mt-3"
                >
                  View our Privacy Policy
                  <ChevronDown className="h-3 w-3 -rotate-90" />
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-foreground/50 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAcceptAll}
            variant="primary"
            className="flex-1"
          >
            Accept All Cookies
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1"
          >
            Decline Optional
          </Button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-primary hover:text-primary/80 transition-colors underline"
          >
            {showDetails ? "Hide" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
