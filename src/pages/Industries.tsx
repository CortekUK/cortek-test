import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  UtensilsCrossed, 
  Hammer, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Building2,
  Coffee,
  Palette,
  Calendar,
  Camera,
  Scissors,
  Home,
  Wrench,
  Calculator,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowEffect } from "@/components/ui/glow-effect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";
import dropdownBackground from "@/assets/dropdown-section-bg.jpg";

// Testimonials data
const testimonials = [
  {
    text: "Cortek completely transformed our club operations. Member booking is seamless, and our revenue has increased by 40% since implementation.",
    image: "https://i.pravatar.cc/150?u=sarah-johnson-cortek",
    name: "Sarah Johnson",
    role: "Padel Club Manager",
  },
  {
    text: "The automation features saved us 20+ hours per week. Our staff can now focus on what matters most - our members' experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Michael Chen",
    role: "Fitness Center Owner",
  },
  {
    text: "Outstanding support team! They guided us through every step and continue to help us optimize our operations. Couldn't be happier.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Emma Rodriguez",
    role: "Operations Director",
  },
  {
    text: "The integration was seamless and the results immediate. Our booking efficiency improved dramatically and members love the new system.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "David Thompson",
    role: "Sports Complex CEO",
  },
  {
    text: "Cortek's automation platform streamlined our entire workflow. We've seen significant improvements in both efficiency and member satisfaction.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Lisa Park",
    role: "Club Operations Manager",
  },
  {
    text: "The implementation exceeded all expectations. Our business processes are now automated, and our team productivity has skyrocketed.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "James Wilson",
    role: "Business Development Lead",
  },
  {
    text: "User-friendly design combined with powerful features. Our online presence and member engagement have significantly improved.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Rachel Kim",
    role: "Marketing Manager",
  },
  {
    text: "Cortek delivered beyond our expectations. They understood our unique needs and created a solution that perfectly fits our business.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Alex Martinez",
    role: "Facility Director",
  },
  {
    text: "Our member retention and satisfaction scores have never been higher. This platform transformed how we connect with our community.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Sophie Anderson",
    role: "Community Manager",
  },
  {
    text: "The financial reporting features alone have saved us countless hours. We now have real-time insights into our business performance.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Robert Singh",
    role: "Finance Director",
  },
  {
    text: "Implementing Cortek was the best decision we made this year. Our operational efficiency has improved by 60% across all departments.",
    image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Maria Santos",
    role: "General Manager",
  },
  {
    text: "The mobile app integration is fantastic. Our members can book, pay, and manage everything from their phones. Game changer!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    name: "Tom Bradley",
    role: "Tech Coordinator",
  }
];

// Industry data with pain points and automation benefits
const mainIndustries = [
  {
    icon: Dumbbell,
    title: "Gyms",
    description: "Manage memberships, class bookings, and client communications in one connected CRM platform.",
    gradient: "from-orange-500/20 to-red-500/20",
    useCase: "Example: A member books a spin class via your portal, receives an automated reminder 1 hour before, and the system updates class capacity in real-time."
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Streamline reservations, orders, and customer loyalty programs with a system tailored to your venue.",
    gradient: "from-green-500/20 to-emerald-500/20",
    useCase: "Example: A customer makes a reservation for 6 people online, your CRM automatically allocates the table, sends confirmation, and notifies your kitchen team."
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Manage projects, teams, and clients seamlessly from a single CRM that keeps everyone on track.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    useCase: "Example: Track multiple site projects with automated client updates when milestones are reached, while your team logs progress directly from their mobile devices."
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Connect sales, inventory, and customer data to create a seamless retail management experience.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    useCase: "Example: When a customer purchases online, your CRM updates inventory across all locations, triggers a loyalty reward, and schedules a follow-up email automatically."
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Simplify patient scheduling, reminders, and billing with secure CRM workflows built for compliance.",
    gradient: "from-red-500/20 to-pink-500/20",
    useCase: "Example: A patient books an appointment online, receives automated reminders via SMS, and your system securely stores their medical history for the next visit."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Manage enrolments, classes, and communication in one easy-to-use CRM for schools and training providers.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    useCase: "Example: Parents enroll their child online, payment is processed automatically, and the system sends class schedules, homework updates, and attendance reports."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Streamline client onboarding, scheduling, and reporting with a CRM designed around your practice.",
    gradient: "from-slate-500/20 to-gray-500/20",
    useCase: "Example: A new client completes an intake form online, your CRM creates their file, schedules their first consultation, and sends them a welcome pack automatically."
  },
  {
    icon: Building2,
    title: "Other Businesses",
    description: "Every business is unique — Cortek builds CRM systems that adapt to your processes and integrate your favorite tools.",
    gradient: "from-deep-purple/20 to-electric-blue/20",
    useCase: "Example: Whether you run a logistics company or creative studio, your CRM adapts to your workflow — integrating tools you already use and automating repetitive tasks."
  }
];

const extendedIndustries = [
  {
    icon: Coffee,
    title: "Cafés & Coffee Shops",
    description: "Manage loyalty schemes, bookings, and day-to-day operations with ease.",
    gradient: "from-amber-500/20 to-brown-500/20",
    useCase: "Example: Customers scan a QR code to join your loyalty program, earn points automatically with each purchase, and receive a personalized birthday discount via email."
  },
  {
    icon: Palette,
    title: "Creative Agencies",
    description: "Keep client projects, briefs, and communications in one central CRM.",
    gradient: "from-pink-500/20 to-purple-500/20",
    useCase: "Example: A client submits a design brief online, your team collaborates in real-time, and the system automatically requests approval at each milestone with version tracking."
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Automate invites, check-ins, and attendee records — all within your CRM system.",
    gradient: "from-teal-500/20 to-green-500/20",
    useCase: "Example: Send personalized event invitations, track RSVPs automatically, manage check-ins via QR codes, and send follow-up surveys to all attendees after the event."
  },
  {
    icon: Camera,
    title: "Photography Studios",
    description: "Simplify bookings, payments, and client follow-ups in one platform.",
    gradient: "from-violet-500/20 to-indigo-500/20",
    useCase: "Example: Clients book sessions online, pay deposits automatically, receive shoot preparation guides, and get notified when their photos are ready for download."
  },
  {
    icon: Scissors,
    title: "Hair & Beauty Salons",
    description: "Keep your chairs full with appointment scheduling and automated reminders.",
    gradient: "from-rose-500/20 to-pink-500/20",
    useCase: "Example: Clients book appointments online viewing real-time availability, receive automatic reminders 24 hours before, and your system tracks their service history for personalized recommendations."
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Track tenants, rent payments, and maintenance tasks effortlessly.",
    gradient: "from-blue-600/20 to-indigo-600/20",
    useCase: "Example: A tenant submits a maintenance request via your portal, the system assigns it to the right contractor, and both parties receive real-time updates until completion."
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Manage jobs, teams, and recurring contracts with a CRM built for field operations.",
    gradient: "from-orange-600/20 to-red-600/20",
    useCase: "Example: Dispatch technicians based on location and expertise, track job status in real-time, and automatically invoice customers once work is marked complete in the mobile app."
  },
  {
    icon: Calculator,
    title: "Financial Services",
    description: "Streamline client onboarding, compliance checks, and performance reporting.",
    gradient: "from-emerald-600/20 to-teal-600/20",
    useCase: "Example: Track client portfolios, automate quarterly review scheduling, and ensure compliance with automated document collection and secure storage of sensitive financial data."
  }
];

// Animation variants for better performance
const cardVariants = {
  default: {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },
  hover: {
    y: -6,
    scale: 1,
    boxShadow: "0 16px 40px rgba(0,0,0,0.10)"
  }
};

const arrowVariants = {
  default: {
    x: 0,
    rotate: 0,
    scale: 1,
    color: "#A0A3A8"
  },
  hover: {
    x: 4,
    rotate: 0,
    scale: 1,
    color: "#2D81F7"
  },
  expanded: {
    x: 0,
    rotate: 90,
    scale: 1.1,
    color: "#2D81F7"
  }
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    height: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto"
  }
};

const IndustryCard = ({ 
  industry, 
  index, 
  showExtended, 
  isExpanded, 
  onToggle, 
  expandedId 
}: { 
  industry: typeof mainIndustries[0];
  index: number;
  showExtended: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  expandedId: string | null;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = industry.icon;
  const cardId = `industry-card-${industry.title.toLowerCase().replace(/\s+/g, '-')}`;
  const revealId = `${cardId}-reveal`;
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
    if (e.key === 'Escape' && isExpanded) {
      onToggle();
    }
  };

  // Handle click outside to close (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isExpanded, onToggle]);

  const shouldShowActive = isHovered || isExpanded;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: showExtended ? (index * 0.05) : (index * 0.1),
        ease: "easeOut" 
      }}
      className="group relative h-full"
    >
      <motion.div
        variants={cardVariants}
        initial="default"
        animate={shouldShowActive ? "hover" : "default"}
        whileFocus="hover"
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="will-change-transform"
        style={{ willChange: "transform, opacity" }}
      >
        <Card
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls={revealId}
          aria-describedby={revealId}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          className={`
            relative overflow-hidden p-5 h-full border-0 cursor-pointer
            transition-all duration-200 ease-out
            bg-gradient-to-br ${industry.gradient} backdrop-blur-sm
            ${shouldShowActive ? 'ring-1 ring-deep-purple/30' : ''}
            focus-visible:ring-2 focus-visible:ring-deep-purple focus-visible:ring-offset-2
            focus-visible:outline-none
            flex flex-col
          `}
        >
          {/* Background glow effect */}
          <GlowEffect
            colors={['hsl(var(--deep-purple))', 'hsl(var(--electric-blue))']}
            mode="rotate"
            blur="soft"
            duration={6}
            className={`
              absolute inset-0 transition-opacity duration-300
              ${shouldShowActive ? 'opacity-15' : 'opacity-0'}
            `}
          />
          
          {/* Icon */}
          <div className="relative z-10 mb-4">
            <div className={`
              w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
              flex items-center justify-center transition-all duration-200
              ${shouldShowActive ? 'bg-white/20 border-deep-purple/30' : ''}
            `}>
              <Icon className={`
                w-6 h-6 transition-colors duration-200
                ${shouldShowActive ? 'text-deep-purple' : 'text-foreground'}
              `} />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className={`
              text-base font-semibold mb-3 transition-colors duration-200
              ${shouldShowActive ? 'text-deep-purple' : 'text-foreground'}
            `}>
              {industry.title}
            </h3>
            
            {/* Always visible preview text */}
            <p className="text-sm text-foreground-secondary mb-3 flex-1">
              {industry.description}
            </p>
            
            {/* Expandable detailed description */}
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  id={revealId}
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ 
                    duration: isExpanded ? 0.24 : 0.18, 
                    ease: isExpanded ? "easeOut" : "easeIn" 
                  }}
                  className="will-change-transform overflow-hidden"
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {industry.useCase}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Interactive arrow - always visible */}
          <motion.div
            variants={arrowVariants}
            initial="default"
            animate={isExpanded ? "expanded" : (isHovered ? "hover" : "default")}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 will-change-transform"
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              transition-colors duration-200
              ${shouldShowActive 
                ? 'bg-electric-blue/15' 
                : 'bg-gray-400/10'
              }
            `}>
              <ArrowRight 
                className="w-4 h-4" 
                style={{ 
                  color: shouldShowActive ? '#2D81F7' : '#A0A3A8',
                  willChange: 'transform, color'
                }}
              />
            </div>
          </motion.div>
          
          {/* Mobile tap indicator */}
          <div className="md:hidden absolute top-3 right-3">
            <div className={`
              w-2 h-2 rounded-full transition-all duration-200
              ${isExpanded ? 'bg-deep-purple' : 'bg-electric-blue/60 animate-pulse'}
            `} />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Industries = () => {
  const [showExtended, setShowExtended] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleCardToggle = (cardTitle: string) => {
    setExpandedCard(current => current === cardTitle ? null : cardTitle);
  };

  return (
    <>
      <Helmet>
        <title>Industries - CORTEK | Bespoke CRM Solutions for Every Sector</title>
        <meta name="description" content="Discover how CORTEK's bespoke CRM systems transform businesses across gyms, restaurants, construction, retail, healthcare, and more. Industry-specific automation tailored to your needs." />
        <meta name="keywords" content="CRM for gyms, restaurant automation, construction CRM, retail management, healthcare CRM, business automation by industry" />
        <meta property="og:title" content="Industries - CORTEK | Bespoke CRM Solutions" />
        <meta property="og:description" content="Bespoke CRM systems tailored to your industry. From gyms to healthcare, we build automation that works the way you do." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cortek.io/industries" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries - CORTEK | Bespoke CRM Solutions" />
        <meta name="twitter:description" content="Bespoke CRM systems tailored to your industry. From gyms to healthcare, we build automation that works the way you do." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/Dqk25JwdNwgm9Ehq0X2tBZVnj8r2/social-images/social-1759593989857-Cortek Logo 05.png" />
        <link rel="canonical" href="https://www.cortek.io/industries" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32"
      >
        {/* FlickeringGrid Background - Enhanced Visibility */}
        <div className="absolute inset-0">
          {/* Base grid layer */}
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={3}
            gridGap={8}
            color="hsl(264, 70%, 50%)" // deep-purple
            maxOpacity={0.25}
            flickerChance={0.12}
          />
          {/* Secondary grid layer */}
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={12}
            color="hsl(214, 90%, 58%)" // electric-blue
            maxOpacity={0.20}
            flickerChance={0.08}
          />
          {/* Accent grid layer for depth */}
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={6}
            gridGap={16}
            color="hsl(288, 84%, 75%)" // lighter purple
            maxOpacity={0.15}
            flickerChance={0.05}
          />
        </div>
        
        {/* Reduced overlay with brand tinting and radial fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/40" />
        <div className="absolute inset-0 bg-gradient-radial from-background/40 via-transparent to-transparent" />
        
        
        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Your Industry,{' '}
              <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
                Connected
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Whether you run a gym, restaurant, clinic, or creative agency, Cortek builds bespoke CRM systems that adapt to how you work. Each system connects your tools, automates key tasks, and delivers insights that help you grow faster.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-deep-purple hover:bg-deep-purple-hover text-white"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Talk to Us About Your Industry
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => {
                  const testimonialsSection = document.getElementById('testimonials');
                  if (testimonialsSection) {
                    testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Case Studies
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="text-lg text-foreground-muted mt-8 mb-24"
            >
              No matter the size of your business — Cortek CRMs scale with you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Industries Grid */}
      <section className="section-spacing bg-background-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Transform Your <span className="text-deep-purple">Industry</span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mt-8">
              Discover how Cortek's bespoke CRM systems solve real problems across every sector — with built-in automation that simplifies your daily operations and improves communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 auto-rows-fr">
            {mainIndustries.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                industry={industry}
                index={index}
                showExtended={false}
                isExpanded={expandedCard === industry.title}
                onToggle={() => handleCardToggle(industry.title)}
                expandedId={expandedCard}
              />
            ))}
          </div>

          {/* Show More Industries */}
          <div className="text-center mb-8">
            <section 
              className="relative py-12 px-6 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${dropdownBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1930] via-[#1E2C5B] to-[#0A1930] opacity-90" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Not Seeing Your Industry?
                </h3>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Cortek adapts to dozens of industries beyond the most common ones. 
                  Expand below to see how we support unique businesses just like yours.
                </p>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowExtended(!showExtended)}
                  className={`
                    text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto
                    border-2 border-white/20 bg-gradient-to-r from-deep-purple to-electric-blue 
                    text-white font-semibold hover:from-electric-blue hover:to-deep-purple 
                    hover:shadow-[0_0_30px_rgba(123,76,224,0.4)] hover:scale-105 
                    transition-all duration-300
                    relative overflow-hidden group
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">Discover More Industries</span>
                    <svg 
                      className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                        showExtended ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </section>
          </div>

          {/* Extended Industries Grid */}
          {showExtended && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden"
            >
              {extendedIndustries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    ease: "easeOut" 
                  }}
                >
                  <IndustryCard
                    industry={industry}
                    index={index}
                    showExtended={true}
                    isExpanded={expandedCard === industry.title}
                    onToggle={() => handleCardToggle(industry.title)}
                    expandedId={expandedCard}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Catch-All CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-deep-purple/5 to-electric-blue/5">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-12 bg-white/80 dark:bg-background-card/80 backdrop-blur-sm border-0 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
                Cortek's flexible CRM platform adapts to any business model. Let's discuss how a bespoke system can simplify your operations, connect your tools, and deliver results tailored to your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button 
                    size="xl" 
                    className="text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 w-full sm:w-auto min-w-[280px] bg-deep-purple hover:bg-deep-purple-hover text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageSquare className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="whitespace-nowrap">Discuss Your Industry With Us</span>
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                  onClick={() => setShowBookingModal(true)}
                >
                  <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">Book a Consultation</span>
                </Button>
              </div>
              
              <p className="text-sm text-foreground-muted mt-6">
                Free consultation • No commitment • Custom CRM solution design
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsCarousel testimonials={testimonials} className="section-divider bg-background animate-section-enter" />
      </div>

      <Footer />
      
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
        blabUrl={BLAB_URL} 
      />
      </div>
    </>
  );
};

export default Industries;