import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";
import Footer1 from "@/components/ui/footer-1";

const Footer = ({ background = "bg-background-light" }: { background?: string }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  return (
    <>
      <Footer1 onBookingClick={() => setShowBookingModal(true)} />
      
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
        blabUrl={BLAB_URL} 
      />
    </>
  );
};

export default Footer;