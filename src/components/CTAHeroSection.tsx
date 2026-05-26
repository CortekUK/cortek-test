"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

const CTAHeroSection = () => {
    const [showBookingModal, setShowBookingModal] = useState(false);

    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <section className="section-divider section-spacing bg-background-light animate-section-enter">
            <div className="section-container text-center animate-fade-in-up max-w-4xl">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Ready to <span className="text-deep-purple">Automate</span>?
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <p className="text-xl text-foreground-secondary mb-10 max-w-2xl mx-auto mt-8">
                        Join hundreds of successful businesses who've transformed their operations with Cortek automation.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <Button
                        variant="primary"
                        size="lg"
                        className="text-lg px-8 py-4 group"
                        onClick={() => setShowBookingModal(true)}
                    >
                        Book a Consultation
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                </motion.div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.8,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <p className="text-sm text-foreground-muted mt-6">
                        Free 30-minute consultation • No commitment required • Trusted by leading businesses
                    </p>
                </motion.div>
            </div>

            <BookingModal
                isOpen={showBookingModal}
                onClose={() => setShowBookingModal(false)}
                blabUrl={BLAB_URL}
            />
        </section>
    );
};

export default CTAHeroSection;