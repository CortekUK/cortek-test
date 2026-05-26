"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-electric-blue/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <motion.div
                    animate={{
                        rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[3px] border-2 border-white/[0.25]",
                        "shadow-[0_12px_40px_0_rgba(255,255,255,0.15),0_0_20px_0_rgba(106,56,194,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]",
                        "before:absolute before:inset-0 before:rounded-full",
                        "before:bg-gradient-to-br before:from-white/[0.1] before:to-transparent"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

const HeroSection = () => {
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

    useEffect(() => {
        // Respect prefers-reduced-motion
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) {
            document.documentElement.style.setProperty("--animation-duration", "0s");
        }
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-background pt-6">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/[0.03] via-transparent to-electric-blue/[0.02] blur-3xl" />

            {/* Dynamic floating shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-deep-purple/[0.18]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-electric-blue/[0.20]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-deep-purple/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-electric-blue/[0.17]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-deep-purple/[0.16]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                        Bespoke CRM Systems for Every <FlipWords words={["Business", "Industry", "Company", "Enterprise", "Organisation"]} duration={1000} className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-purple" />
                    </h1>
                </motion.div>
                
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.7,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">
                        Smarter. Faster.{" "}
                        <span className="block md:inline">Fully Connected.</span>
                    </h2>
                </motion.div>
                
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 0.9,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    <p className="text-xl md:text-2xl text-foreground-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
                        From construction to healthcare, retail to restaurants — Cortek designs custom CRM systems that centralise your data, enhance customer relationships, and streamline your workflow. Built-in automation takes care of repetitive tasks so you can focus on growth.
                    </p>
                </motion.div>
                
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 1,
                        delay: 1.1,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="text-lg px-8 py-4"
                        onClick={() => setShowBookingModal(true)}
                    >
                        Book Consultation
                    </Button>
                    <Link to="/industries">
                        <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                            See CRM Examples
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/[0.06] via-transparent to-background/[0.04] pointer-events-none" />

            <BookingModal 
                isOpen={showBookingModal} 
                onClose={() => setShowBookingModal(false)} 
                blabUrl={BLAB_URL} 
            />
        </section>
    );
};

export default HeroSection;