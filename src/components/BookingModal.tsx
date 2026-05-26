import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  blabUrl: string;
};

const BookingModal = ({ isOpen, onClose, blabUrl }: BookingModalProps) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setIframeLoaded(false);
      return;
    }

    // Load GHL embed script if not already present
    const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }

    // Store the current scroll position
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // Create a more robust scroll lock
    const preventScroll = () => {
      window.scrollTo(scrollX, scrollY);
    };

    // Lock scrolling
    document.body.style.overflow = 'hidden';

    // Add scroll prevention listener
    window.addEventListener('scroll', preventScroll, { passive: false });

    return () => {
      // Unlock scrolling
      document.body.style.overflow = '';

      // Remove scroll prevention
      window.removeEventListener('scroll', preventScroll);

      // Restore scroll position
      window.scrollTo(scrollX, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Portal container with flex centering */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999,
          padding: '2rem'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            zIndex: 1000000
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shrink-0">
            <h2
              id="booking-modal-title"
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              Book Your Free Consultation
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
              <span className="text-sm font-medium">Close</span>
            </button>
          </div>

          {/* GHL Booking Widget */}
          <div className="flex-1 relative overflow-hidden bg-gray-50 dark:bg-gray-800">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-500 rounded-full animate-spin" />
                <p className="text-gray-500 dark:text-gray-400 text-sm">Loading booking calendar&hellip;</p>
              </div>
            )}
            <iframe
              src={blabUrl}
              title="Book Your Free Consultation"
              style={{ width: '100%', height: '100%', border: 'none' }}
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
