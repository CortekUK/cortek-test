import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CortekLogo from "@/components/ui/cortek-logo";
interface Footer1Props {
  onBookingClick: () => void;
}
export default function Footer1({
  onBookingClick
}: Footer1Props) {
  return <footer className="w-full bg-background-light text-foreground">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center pt-6 pb-4">
        <div className="flex items-center mb-2">
          <CortekLogo size="md" />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed mb-4">CORTEK helps businesses streamline operations, cut admin, and scale faster with bespoke CRM systems and automation.</p>
        
        <div className="flex flex-col items-center space-y-2 mb-4">
          <a href="mailto:support@cortek.io" className="flex items-center text-foreground-secondary hover:text-electric-blue transition-colors duration-200">
            <Mail className="w-4 h-4 mr-2" />
            support@cortek.io
          </a>
          <div className="flex items-center text-foreground-secondary">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Manchester, United Kingdom
          </div>
          <Link to="/insights" className="text-sm text-foreground-secondary hover:text-electric-blue transition-colors duration-200">
            Insights & Articles
          </Link>
        </div>

        <Button onClick={onBookingClick} className="bg-electric-blue hover:bg-electric-blue-hover text-white font-inter px-8 py-3 rounded-lg transition-colors duration-200">
          Get Started with CORTEK
        </Button>
      </div>
      
      <div className="border-t border-border/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <Link to="/privacy-policy" className="text-sm text-foreground-secondary hover:text-electric-blue transition-colors duration-200 inline-block mb-2">
            Privacy Policy
          </Link>
          <p className="text-sm font-normal text-foreground-muted">
            © 2024 Cortek. All rights reserved
          </p>
        </div>
      </div>
    </footer>;
}