import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PadelFeatureShowcase from "@/components/PadelFeatureShowcase";
import PadelPricingSection from "@/components/PadelPricingSection";
import PadelComparisonTable from "@/components/PadelComparisonTable";
import PadelFAQSection from "@/components/PadelFAQSection";
import PadelHowItWorks from "@/components/PadelHowItWorks";
import PadelPlaytomicSection from "@/components/PadelPlaytomicSection";
import PadelTrustBar from "@/components/PadelTrustBar";
import { CalendarX2, MessagesSquare, Timer, EyeOff, Unplug, CheckCircle, Star, Quote } from "lucide-react";
import { BLAB_URL } from "@/lib/constants";

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  });
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);
  return {
    ref,
    count
  };
};

// Star rating component
const StarRating = ({
  rating = 5
}: {
  rating?: number;
}) => <div className="flex gap-0.5 mb-4">
    {[...Array(rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
  </div>;
const testimonials = [{
  headline: "We filled our off-peak courts for the first time ever.",
  body: "Before Cortek we had quiet mornings and constant admin work. Now our courts are fuller, our WhatsApp alerts go out automatically, and I save hours every week.",
  author: "Javier M.",
  role: "Club Manager",
  location: "Barcelona",
  initials: "JM"
}, {
  headline: "Player engagement is up and admin time is way down.",
  body: "Automation handles reminders, rankings, and results. Members love the QR system — everything feels more professional and organized.",
  author: "Sarah T.",
  role: "Padel Center Owner",
  location: "UK",
  initials: "ST"
}, {
  headline: "The integration with Playtomic is seamless.",
  body: "No more double-entry or missed bookings. Cortek ties everything together and gives us a true view of performance.",
  author: "Marco D.",
  role: "Operations Lead",
  location: "Italy",
  initials: "MD"
}];
const problems = [{
  icon: CalendarX2,
  text: "Empty courts during off-peak hours draining revenue",
  rotation: -1.5,
  offset: -4
}, {
  icon: MessagesSquare,
  text: "Chaotic WhatsApp groups with no structure",
  rotation: 1.2,
  offset: 6
}, {
  icon: Timer,
  text: "Hours wasted on repetitive admin",
  rotation: -0.8,
  offset: -2
}, {
  icon: EyeOff,
  text: "No visibility on player performance or engagement",
  rotation: 1.5,
  offset: 4
}, {
  icon: Unplug,
  text: "Multiple tools that don't talk to each other",
  rotation: -1,
  offset: -6
}];
const stats = [{
  value: 40,
  suffix: "%+",
  label: "Average revenue increase"
}, {
  value: 20,
  suffix: "+",
  label: "Hours saved weekly"
}, {
  value: 100,
  suffix: "+",
  label: "Clubs using Cortek"
}];

// Animated stat card component - minimal style
const AnimatedStatCard = ({
  value,
  suffix,
  label
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { ref, count } = useAnimatedCounter(value);
  return (
    <div ref={ref} className="text-center py-2 hover:scale-105 transition-transform duration-300">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">
        <span>{count}</span>
        <span className="text-xl sm:text-2xl md:text-3xl">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">{label}</div>
    </div>
  );
};
const PadelClubApp = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  return <>
      <Helmet>
        <title>Padel Club Management Software | CORTEK</title>
        <meta name="description" content="Complete padel club management platform. Automate WhatsApp alerts, social media posts, player rankings, and court bookings. Fill empty courts and save 20+ hours weekly." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.cortek.io/padel-club-app" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-background dark:from-deep-purple/20 dark:via-electric-blue/10 dark:to-background" />
        
        {/* Subtle padel court silhouette - Desktop (horizontal) */}
        <div className="hidden md:block absolute inset-0 opacity-[0.07] dark:opacity-[0.15]">
          <svg viewBox="0 0 1000 650" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Court outline */}
            <rect x="200" y="125" width="600" height="400" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="3" rx="8" />
            {/* Center line */}
            <line x1="500" y1="125" x2="500" y2="525" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            {/* Service lines */}
            <line x1="200" y1="275" x2="800" y2="275" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            <line x1="200" y1="375" x2="800" y2="375" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            {/* Net */}
            <line x1="200" y1="325" x2="800" y2="325" stroke="currentColor" className="text-deep-purple" strokeWidth="4" />
            {/* Service boxes */}
            <rect x="300" y="225" width="150" height="100" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="550" y="225" width="150" height="100" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="300" y="325" width="150" height="100" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="550" y="325" width="150" height="100" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Subtle padel court silhouette - Mobile (vertical) */}
        <div className="md:hidden absolute inset-0 opacity-[0.07] dark:opacity-[0.15]">
          <svg viewBox="0 0 400 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Court outline */}
            <rect x="50" y="50" width="300" height="600" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="3" rx="8" />
            {/* Center line (horizontal) */}
            <line x1="50" y1="350" x2="350" y2="350" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            {/* Service lines (vertical) */}
            <line x1="150" y1="50" x2="150" y2="650" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            <line x1="250" y1="50" x2="250" y2="650" stroke="currentColor" className="text-deep-purple" strokeWidth="2" />
            {/* Net */}
            <line x1="50" y1="350" x2="350" y2="350" stroke="currentColor" className="text-deep-purple" strokeWidth="4" />
            {/* Service boxes */}
            <rect x="100" y="150" width="100" height="150" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="200" y="150" width="100" height="150" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="100" y="400" width="100" height="150" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
            <rect x="200" y="400" width="100" height="150" fill="none" stroke="currentColor" className="text-deep-purple" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Animated electricity effect overlay - Desktop (horizontal) */}
        <div className="hidden md:block absolute inset-0 opacity-40 dark:opacity-60">
          <svg viewBox="0 0 1000 650" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="electricity-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="electricity-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(259, 80%, 58%)" />
                <stop offset="50%" stopColor="hsl(214, 90%, 60%)" />
                <stop offset="100%" stopColor="hsl(259, 80%, 58%)" />
              </linearGradient>
              <linearGradient id="electricity-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(214, 90%, 65%)" />
                <stop offset="50%" stopColor="hsl(259, 80%, 65%)" />
                <stop offset="100%" stopColor="hsl(214, 90%, 65%)" />
              </linearGradient>
            </defs>
            
            {/* Animated court outline */}
            <rect 
              x="200" y="125" width="600" height="400" 
              fill="none" 
              stroke="url(#electricity-gradient-1)" 
              strokeWidth="2" 
              rx="8"
              strokeDasharray="30 700"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow)"
            />
            
            {/* Animated center line */}
            <line 
              x1="500" y1="125" x2="500" y2="525" 
              stroke="url(#electricity-gradient-2)" 
              strokeWidth="2"
              strokeDasharray="25 550"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow)"
            />
            
            {/* Animated service lines */}
            <line 
              x1="200" y1="275" x2="800" y2="275" 
              stroke="url(#electricity-gradient-1)" 
              strokeWidth="2"
              strokeDasharray="25 600"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow)"
            />
            <line 
              x1="200" y1="375" x2="800" y2="375" 
              stroke="url(#electricity-gradient-2)" 
              strokeWidth="2"
              strokeDasharray="25 600"
              className="animate-electricity-flow-medium-reverse"
              filter="url(#electricity-glow)"
            />
            
            {/* Animated net */}
            <line 
              x1="200" y1="325" x2="800" y2="325" 
              stroke="url(#electricity-gradient-1)" 
              strokeWidth="3"
              strokeDasharray="35 500"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow)"
            />
            
            {/* Animated service boxes */}
            <rect 
              x="300" y="225" width="150" height="100" 
              fill="none" 
              stroke="url(#electricity-gradient-2)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow)"
            />
            <rect 
              x="550" y="225" width="150" height="100" 
              fill="none" 
              stroke="url(#electricity-gradient-1)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow)"
            />
            <rect 
              x="300" y="325" width="150" height="100" 
              fill="none" 
              stroke="url(#electricity-gradient-1)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-medium-reverse"
              filter="url(#electricity-glow)"
            />
            <rect 
              x="550" y="325" width="150" height="100"
              fill="none" 
              stroke="url(#electricity-gradient-2)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow)"
            />
          </svg>
        </div>
        
        {/* Animated electricity effect overlay - Mobile (vertical) */}
        <div className="md:hidden absolute inset-0 opacity-40 dark:opacity-60">
          <svg viewBox="0 0 400 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="electricity-glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="electricity-gradient-1-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(259, 80%, 58%)" />
                <stop offset="50%" stopColor="hsl(214, 90%, 60%)" />
                <stop offset="100%" stopColor="hsl(259, 80%, 58%)" />
              </linearGradient>
              <linearGradient id="electricity-gradient-2-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(214, 90%, 65%)" />
                <stop offset="50%" stopColor="hsl(259, 80%, 65%)" />
                <stop offset="100%" stopColor="hsl(214, 90%, 65%)" />
              </linearGradient>
            </defs>
            
            {/* Animated court outline */}
            <rect 
              x="50" y="50" width="300" height="600" 
              fill="none" 
              stroke="url(#electricity-gradient-1-mobile)" 
              strokeWidth="2" 
              rx="8"
              strokeDasharray="30 700"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow-mobile)"
            />
            
            {/* Animated center line (horizontal) */}
            <line 
              x1="50" y1="350" x2="350" y2="350" 
              stroke="url(#electricity-gradient-2-mobile)" 
              strokeWidth="2"
              strokeDasharray="25 400"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow-mobile)"
            />
            
            {/* Animated service lines (vertical) */}
            <line 
              x1="150" y1="50" x2="150" y2="650" 
              stroke="url(#electricity-gradient-1-mobile)" 
              strokeWidth="2"
              strokeDasharray="25 600"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow-mobile)"
            />
            <line 
              x1="250" y1="50" x2="250" y2="650" 
              stroke="url(#electricity-gradient-2-mobile)" 
              strokeWidth="2"
              strokeDasharray="25 600"
              className="animate-electricity-flow-medium-reverse"
              filter="url(#electricity-glow-mobile)"
            />
            
            {/* Animated net */}
            <line 
              x1="50" y1="350" x2="350" y2="350" 
              stroke="url(#electricity-gradient-1-mobile)" 
              strokeWidth="3"
              strokeDasharray="35 350"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow-mobile)"
            />
            
            {/* Animated service boxes */}
            <rect 
              x="100" y="150" width="100" height="150" 
              fill="none" 
              stroke="url(#electricity-gradient-2-mobile)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow-mobile)"
            />
            <rect 
              x="200" y="150" width="100" height="150" 
              fill="none" 
              stroke="url(#electricity-gradient-1-mobile)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-medium"
              filter="url(#electricity-glow-mobile)"
            />
            <rect 
              x="100" y="400" width="100" height="150" 
              fill="none" 
              stroke="url(#electricity-gradient-1-mobile)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-medium-reverse"
              filter="url(#electricity-glow-mobile)"
            />
            <rect 
              x="200" y="400" width="100" height="150"
              fill="none" 
              stroke="url(#electricity-gradient-2-mobile)" 
              strokeWidth="1.5"
              strokeDasharray="20 450"
              className="animate-electricity-flow-slow"
              filter="url(#electricity-glow-mobile)"
            />
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-4xl mx-auto">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-deep-purple/10 dark:bg-deep-purple/20 rounded-full border border-deep-purple/20 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm font-medium text-foreground">Rated 5/5 by club owners</span>
            </div>
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              The{" "}
              <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
                Complete Padel Club
              </span>{" "}
              Management Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-medium mb-10 max-w-[700px] mx-auto leading-relaxed">
              Automate bookings, fill empty courts, and save hours every week — go live today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-deep-purple to-electric-blue hover:opacity-90 text-white px-6 py-4 text-base font-semibold shadow-lg">
                <Link to="/book-consultation">Start Onboarding</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-4 text-base font-semibold border-2 border-deep-purple text-deep-purple dark:text-deep-purple bg-background hover:bg-deep-purple/5"
                onClick={() => setShowBookingModal(true)}
              >
                Book a Free Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Instant setup • No long-term contracts • Built for 100+ clubs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch max-w-6xl mx-auto">
            {/* Problems */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Sound Familiar?
              </h2>
              <div className="space-y-4 flex-1 overflow-visible">
                {problems.map((problem, index) => <motion.div 
                  key={index} 
                  initial={{
                    opacity: 0,
                    x: -20,
                    rotate: problem.rotation * 2
                  }} 
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: problem.rotation
                  }} 
                  whileHover={{
                    rotate: 0,
                    scale: 1.02,
                    boxShadow: "0 8px 30px -8px rgba(239, 68, 68, 0.3)"
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08
                  }} 
                  viewport={{
                    once: true
                  }} 
                  style={{ 
                    transform: `translateX(${problem.offset}px)`,
                  }}
                  className="relative flex items-center gap-3 p-4 bg-red-50 dark:bg-red-500/20 rounded-xl border border-red-300 dark:border-red-500/30 cursor-default transition-all duration-200 shadow-sm shadow-red-100/50 dark:shadow-none hover:shadow-lg overflow-hidden"
                >
                    {/* Paper texture overlay */}
                    <div 
                      className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none mix-blend-multiply dark:mix-blend-soft-light"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    />
                    <problem.icon className="w-5 h-5 text-red-500 flex-shrink-0 relative z-10" />
                    <span className="text-foreground text-sm md:text-base relative z-10">{problem.text}</span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-deep-purple/10 via-electric-blue/5 to-deep-purple/5 dark:from-deep-purple/20 dark:via-electric-blue/10 dark:to-deep-purple/10 rounded-2xl p-8 border-2 border-deep-purple/30 dark:border-deep-purple/20 flex flex-col relative overflow-hidden shadow-[0_0_50px_-10px_hsl(var(--deep-purple)/0.5)] dark:shadow-[0_0_40px_-10px_hsl(var(--deep-purple)/0.4)] group">
              {/* Shimmer animation overlay */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                }}
              />
              {/* Continuous subtle shimmer */}
              <div 
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.08) 50%, transparent 75%)',
                  backgroundSize: '200% 100%',
                }}
              />
              {/* Subtle glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-deep-purple/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-deep-purple to-electric-blue flex items-center justify-center shadow-lg shadow-deep-purple/30">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground"><span className="whitespace-nowrap">One Platform.</span><br />Zero Chaos.</h3>
              </div>
              
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-1 relative z-10">
                One platform to automate bookings, engage players, and fill courts — so your team works less, and your club grows faster.
              </p>
              
              {/* Gradient divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-deep-purple/30 to-transparent mb-8 relative z-10" />
              
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {stats.map((stat, index) => (
                  <div key={index} className="relative">
                    <AnimatedStatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
                    {index < stats.length - 1 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-deep-purple/20 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Stacking Cards */}
      <PadelFeatureShowcase />

      {/* Playtomic Integration */}
      <PadelPlaytomicSection />

      {/* Comparison Table */}
      <PadelComparisonTable />

      {/* How It Works */}
      <PadelHowItWorks />

      {/* Trust Bar */}
      

      {/* Testimonials Section - Premium SaaS */}
      <section className="py-20 lg:py-28 bg-background dark:bg-black/30 relative overflow-hidden">
        {/* Subtle floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-electric-blue/5 to-deep-purple/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted by{" "}
              <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-[length:200%_200%] bg-clip-text text-transparent">
                Leading Padel Clubs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real club owners who transformed their operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30, scale: 0.95 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }} 
                viewport={{ once: true }} 
                className="group relative"
              >
                {/* Card with glassmorphism */}
                <div className="relative h-full bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 
                  border border-white/20 dark:border-white/[0.08]
                  shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_20px_60px_rgba(91,27,225,0.12)] dark:hover:shadow-[0_20px_60px_rgba(91,27,225,0.2)]
                  hover:border-deep-purple/20 dark:hover:border-deep-purple/30
                  hover:-translate-y-2 transition-all duration-500 ease-out
                  flex flex-col overflow-hidden">
                  
                  {/* Corner accent decoration - appears on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-deep-purple/10 to-transparent rounded-bl-[100px]" />
                  </div>
                  
                  {/* Decorative quote mark */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-deep-purple/[0.08] group-hover:text-deep-purple/15 transition-all duration-300 group-hover:scale-110" />
                  
                  {/* Star rating - enhanced */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Headline quote - larger typography */}
                  <h3 className="text-xl lg:text-[22px] font-bold text-foreground mb-4 leading-snug tracking-tight">
                    "{testimonial.headline}"
                  </h3>
                  
                  {/* Body text - improved readability */}
                  <p className="text-muted-foreground leading-[1.7] mb-6 flex-1 text-[15px]">
                    {testimonial.body}
                  </p>
                  
                  {/* Author section - enhanced */}
                  <div className="pt-5 border-t border-border/30 dark:border-white/[0.06] flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-deep-purple/20 ring-offset-2 ring-offset-background shadow-[0_0_20px_rgba(91,27,225,0.15)] group-hover:shadow-[0_0_25px_rgba(91,27,225,0.25)] transition-shadow duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-deep-purple to-electric-blue text-white text-sm font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground tracking-tight">{testimonial.author}</p>
                      <p className="text-sm text-deep-purple font-medium">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PadelPricingSection />

      {/* FAQ Section */}
      <PadelFAQSection />

      {/* CTA Section */}
      <section className="py-[100px] bg-muted/40 dark:bg-muted/20 relative overflow-hidden">
        {/* Section background orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-deep-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-purple via-[#6B21A8] to-electric-blue p-12 md:p-16 shadow-[0_0_80px_rgba(91,27,225,0.35)]"
          >
            {/* Floating gradient orbs inside card */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-electric-blue/30 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-deep-purple/20 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-br-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full pointer-events-none" />
            
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* Glassmorphism decorative shapes */}
            <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-xl rotate-12 backdrop-blur-sm bg-white/5 pointer-events-none hidden md:block" />
            <div className="absolute bottom-12 left-12 w-12 h-12 border border-white/15 rounded-lg -rotate-6 backdrop-blur-sm bg-white/5 pointer-events-none hidden md:block" />
            
            <div className="relative z-10 text-center max-w-[650px] mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
              >
                Ready to Grow Your Padel Club?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
              >
                Start onboarding and get your club fully automated today.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-deep-purple hover:bg-white/95 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <Link to="/book-consultation">Start Onboarding</Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] px-8 py-6 text-lg font-semibold transition-all duration-300"
                  onClick={() => setShowBookingModal(true)}
                >
                  Book a Free Demo
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 text-white/70 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                  Instant setup
                </span>
                <span className="text-white/40">•</span>
                <span>No contracts</span>
                <span className="text-white/40">•</span>
                <span>Trusted by 100+ clubs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
        blabUrl={BLAB_URL} 
      />
    </>;
};
export default PadelClubApp;