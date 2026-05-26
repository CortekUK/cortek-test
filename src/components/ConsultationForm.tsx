import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import BookingModal from "@/components/BookingModal";
import { z } from "zod";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  business: z.string().trim().min(1, "Business name is required").max(200, "Business name must be less than 200 characters"),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional()
});

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Theme-aware particle colors
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#6A38C2");
  const [isFormHovered, setIsFormHovered] = useState(false);
  const [attractionPoint, setAttractionPoint] = useState<{ x: number; y: number } | null>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setParticleColor(theme === "dark" ? "#7C4CE0" : "#6A38C2");
  }, [theme]);

  useEffect(() => {
    if (isFormHovered && formBoxRef.current) {
      const rect = formBoxRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setAttractionPoint({ x, y });
    } else {
      setAttractionPoint(null);
    }
  }, [isFormHovered]);

  // BLAB URL with embed parameters for clean iframe experience
  const BLAB_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData);
      
      const { error } = await supabase.functions.invoke('send-to-make', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          businessName: validatedData.business,
          message: validatedData.message || "Request for consultation - no additional message provided",
          formType: 'consultation'
        }
      });

      if (error) throw error;

      toast.success("Thanks! We'll be in touch within 2 hours during business hours.");
      setFormData({ name: "", email: "", business: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form fields");
      } else {
        toast.error("Something went wrong. Please email us directly at support@cortek.io");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      
      {/* Interactive Particles Background */}
      <Particles
        className="absolute inset-0 z-[1]"
        quantity={300}
        ease={80}
        color={particleColor}
        staticity={50}
        size={0.6}
        refresh={false}
        attractionPoint={attractionPoint}
        isAttracted={isFormHovered}
      />
      
      <div className="section-container relative px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            {/* Calendar Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              aria-hidden="true"
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 border border-deep-purple/20 mb-6 hover:shadow-[0_8px_30px_rgba(106,56,194,0.25)] transition-shadow duration-200"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <Handshake className="w-10 h-10 md:w-12 md:h-12 text-deep-purple" strokeWidth={2} />
              </motion.div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sora">
              Let's{" "}
              <span className="bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
                Build Smarter
              </span>
              , Together
            </h2>
            <p className="text-lg text-foreground-secondary max-w-xl mx-auto">
              Tell us about your business or pick a time that suits you — we'll tailor your consultation to deliver maximum value.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div 
              ref={formBoxRef}
              onMouseEnter={() => setIsFormHovered(true)}
              onMouseLeave={() => setIsFormHovered(false)}
              className="relative z-20 bg-white dark:bg-background backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-deep-purple/20 shadow-[0_20px_60px_rgba(106,56,194,0.15)]"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name*
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full h-12 px-4 rounded-2xl border-neutral-border/30 focus:border-deep-purple focus:ring-2 focus:ring-deep-purple/20 hover:border-electric-blue/40 transition-all duration-300 ${
                    errors.name ? "border-electric-blue ring-2 ring-electric-blue/20" : ""
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-electric-blue text-sm mt-1.5 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email*
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full h-12 px-4 rounded-2xl border-neutral-border/30 focus:border-deep-purple focus:ring-2 focus:ring-deep-purple/20 hover:border-electric-blue/40 transition-all duration-300 ${
                    errors.email ? "border-electric-blue ring-2 ring-electric-blue/20" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-electric-blue text-sm mt-1.5 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Business Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Business Name*
                </label>
                <Input
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) => {
                    setFormData({ ...formData, business: e.target.value });
                    if (errors.business) setErrors({ ...errors, business: "" });
                  }}
                  className={`w-full h-12 px-4 rounded-2xl border-neutral-border/30 focus:border-deep-purple focus:ring-2 focus:ring-deep-purple/20 hover:border-electric-blue/40 transition-all duration-300 ${
                    errors.business ? "border-electric-blue ring-2 ring-electric-blue/20" : ""
                  }`}
                  placeholder="Your business name"
                />
                {errors.business && (
                  <p className="text-electric-blue text-sm mt-1.5 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.business}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`w-full min-h-[120px] px-4 py-3 rounded-2xl border-neutral-border/30 focus:border-deep-purple focus:ring-2 focus:ring-deep-purple/20 hover:border-electric-blue/40 transition-all duration-300 resize-none ${
                    errors.message ? "border-electric-blue ring-2 ring-electric-blue/20" : ""
                  }`}
                  placeholder="Tell us about your business and what you'd like to discuss..."
                />
                {errors.message && (
                  <p className="text-electric-blue text-sm mt-1.5 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-4 md:px-8 py-3.5 md:py-6 text-sm md:text-lg font-bold shadow-[0_20px_60px_rgba(106,56,194,0.3)] hover:shadow-[0_20px_80px_rgba(106,56,194,0.4)] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Booking..."
                ) : (
                  <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <Handshake className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Book My Free Consultation</span>
                  </span>
                )}
              </Button>
            </div>

            {/* Trust Reassurance - Below Form */}
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground-secondary/90 mt-6">
              <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0" />
              <span className="font-medium">100% free consultation — no pressure, just results.</span>
            </div>

            {/* Secondary CTA - Pick a Time Directly */}
            <div className="text-center mt-6">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setShowBookingModal(true)}
                className="w-full border-deep-purple/40 text-deep-purple hover:bg-deep-purple/10 hover:border-deep-purple/60 py-6 font-semibold transition-all duration-300"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Pick a Time Directly
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          blabUrl={BLAB_URL}
        />
      </div>
    </section>
  );
};

export default ConsultationForm;