import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, ArrowRight, MessageCircle, FileText, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-to-make', {
        body: {
          name: formData.fullName,
          email: formData.email,
          businessName: formData.businessName,
          message: formData.message,
          formType: 'contact'
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks! We'll be in touch within 2 hours during business hours.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        businessName: "",
        message: ""
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      const description =
        error?.message ||
        "Something went wrong. Please email us directly at support@cortek.io";
      toast({
        title: "Error sending message",
        description,
        variant: "destructive",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-visible">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light/20"></div>
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto min-w-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="w-full min-w-0 box-border bg-background/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-neutral-border/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-sora">
                Send Us a Message
              </h2>
              <p className="text-foreground-secondary mb-6">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-background border-neutral-border/30 focus:border-deep-purple"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background border-neutral-border/30 focus:border-deep-purple"
                  />
                </div>
                
                <div>
                  <Label htmlFor="businessName" className="text-foreground mb-2 block">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="ABC Business"
                    className="bg-background border-neutral-border/30 focus:border-deep-purple"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your CRM goals or workflow challenges..."
                    required
                    rows={5}
                    className="bg-background border-neutral-border/30 focus:border-deep-purple resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-10 py-6 text-lg font-semibold shadow-[0_10px_40px_rgba(106,56,194,0.2)] hover:shadow-[0_15px_50px_rgba(106,56,194,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Alternative CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center min-w-0"
          >
            <div className="w-full min-w-0 box-border bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-deep-purple/20">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 mb-6">
                  <Calendar className="w-8 h-8 text-deep-purple" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-sora">
                  Prefer to Talk Directly?
                </h3>
                <p className="text-base md:text-lg text-foreground-secondary leading-relaxed">
                  Interested in learning how a bespoke CRM system could streamline your operations? 
                  Book a free 30-minute consultation with one of our specialists.
                </p>
              </div>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
                onClick={() => setShowBookingModal(true)}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Button>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-deep-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">No commitment required</p>
                    <p className="text-sm text-foreground-secondary">
                      Just an open chat about your business needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-deep-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Get a custom proposal</p>
                    <p className="text-sm text-foreground-secondary">
                      Tailored CRM solution and transparent pricing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-deep-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">See a live demo</p>
                    <p className="text-sm text-foreground-secondary">
                      Explore what a Cortek system could do for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
        blabUrl={BLAB_URL} 
      />
    </section>
  );
};

export default ContactFormSection;