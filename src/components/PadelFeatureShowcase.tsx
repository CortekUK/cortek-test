import { MessageSquare, Send, QrCode, Trophy, LayoutGrid, Users, Smartphone, Check } from "lucide-react";
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import playtomicLogo from '@/assets/playtomic-logo.png';
import playtomicFeatureImg from '@/assets/playtomic-feature-card.png';
import teamPermissionsImg from '@/assets/team-permissions.png';
import clubDashboardImg from '@/assets/club-dashboard.png';
import marketingAutomationImg from '@/assets/marketing-automation.png';
import smsPlayerInvitationsImg from '@/assets/sms-player-invitations.jpg';

interface FeatureData {
  icon: any;
  iconImage?: string;
  title: string;
  description: string;
  image: string;
  color: string;
  bullets: string[];
}

interface FeatureCardProps extends FeatureData {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const FeatureCard = ({
  i,
  icon: Icon,
  iconImage,
  title,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
  bullets
}: FeatureCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
      <motion.div 
        style={{
          background: `linear-gradient(135deg, ${color}ee, ${color}bb)`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          boxShadow: `0 25px 50px -12px ${color}60, 0 0 60px -15px ${color}40, inset 0 1px 0 0 rgba(255,255,255,0.1)`
        }} 
        className={`flex flex-col relative -top-[25%] min-h-[450px] h-auto w-[92%] sm:w-[88%] md:w-[85%] max-w-6xl rounded-2xl p-6 sm:p-8 md:p-10 origin-top backdrop-blur-md border-2 border-white/25 group overflow-hidden`}
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
        
        {/* Header */}
        <div className="relative flex items-center space-x-3 sm:space-x-4 mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md flex-shrink-0 overflow-hidden border border-white/20 shadow-lg">
            {iconImage ? (
              <img src={iconImage} alt={title} className="w-full h-full object-contain p-2" />
            ) : (
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md" />
            )}
          </div>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white font-sora drop-shadow-md'>{title}</h2>
        </div>
        
        {/* Split content */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
          {/* Image side */}
          <div className="relative w-full md:w-[45%] h-[220px] sm:h-[260px] md:h-[320px] rounded-xl overflow-hidden border border-white/20 shadow-xl flex-shrink-0">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img src={image} alt={title} className="w-full h-full object-cover object-center" />
            </motion.div>
          </div>
          
          {/* Text + Bullets side */}
          <div className="w-full md:w-[55%] flex flex-col justify-center">
            <p className='text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-5 drop-shadow-sm'>{description}</p>
            <ul className="space-y-3">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/30">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-white/95 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const features: FeatureData[] = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Manually messaging players is slow and inconsistent. Cortek automates your player communication so you never miss an opportunity.",
    image: "/lovable-uploads/3ea5d57f-0e62-49b8-8d64-3aadffbe9504.png",
    color: '#00796B',
    bullets: [
      "Availability alerts when courts open up",
      "Instant booking confirmations",
      "Automated reminders before matches",
      "Group chat integration for events"
    ]
  },
  {
    icon: Send,
    title: "Marketing Automation",
    description: "Posting consistently on social media takes time clubs don't have. Cortek auto-generates and posts branded content across your channels.",
    image: marketingAutomationImg,
    color: '#4A148C',
    bullets: [
      "Auto-post court availability to Instagram & Facebook",
      "Branded event promos and highlights",
      "Scheduled content calendar",
      "Attract new players effortlessly"
    ]
  },
  {
    icon: Trophy,
    title: "Player Ranking System",
    description: "Without a ranking system, organising fair matches and keeping players engaged is difficult. Cortek tracks every match and calculates live Elo rankings automatically.",
    image: "/lovable-uploads/b0b1f2b6-d666-432c-b2b0-7caff3cd3345.png",
    color: '#D84315',
    bullets: [
      "Live Elo-based rankings",
      "Automatic score calculations",
      "Fair matchmaking suggestions",
      "Competitive leaderboards"
    ]
  },
  {
    icon: QrCode,
    title: "QR Match Result Logging",
    description: "Manually recording match scores is slow and error-prone. Players scan a QR code at your club and log results themselves in seconds.",
    image: "/lovable-uploads/59d7f794-1c73-4008-8700-a663220d0a38.png",
    color: '#1565C0',
    bullets: [
      "Scan & log in seconds",
      "Zero admin overhead",
      "Accurate match data",
      "Seamless ranking integration"
    ]
  },
  {
    icon: LayoutGrid,
    title: "Cortek Club Portal",
    description: "Scattered tools make it hard to see how your club is really performing. The Cortek Club Portal brings everything into one clean dashboard.",
    image: clubDashboardImg,
    color: '#283593',
    bullets: [
      "Bookings & revenue overview",
      "Player activity tracking",
      "Automation performance stats",
      "Full visibility in one place"
    ]
  },
  {
    icon: null,
    iconImage: playtomicLogo,
    title: "Playtomic Sync",
    description: "Running Playtomic alongside other systems often means double-entry and sync headaches. Cortek connects directly to Playtomic in real time.",
    image: playtomicFeatureImg,
    color: '#00695C',
    bullets: [
      "Real-time booking sync",
      "Automatic availability updates",
      "One source of truth",
      "No manual data entry"
    ]
  },
  {
    icon: Users,
    title: "Team Access & Permissions",
    description: "Sharing login details or restricting access in shared systems is a security risk. Cortek supports secure, role-based access for your entire team.",
    image: teamPermissionsImg,
    color: '#6A1B9A',
    bullets: [
      "Owner, Manager & Staff roles",
      "Granular permission controls",
      "Activity logging & audit trail",
      "Secure individual logins"
    ]
  },
  {
    icon: Smartphone,
    title: "SMS Player Invitations",
    description: "New players often miss out on club activities because they're not connected to the community. Cortek automatically sends SMS invitations to new players.",
    image: smsPlayerInvitationsImg,
    color: '#0097A7',
    bullets: [
      "Automatic welcome messages",
      "Direct to WhatsApp groups",
      "Build community effortlessly",
      "Engage players from day one"
    ]
  }
];

const PadelFeatureShowcase = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <ReactLenis root>
      <div ref={container} className="relative" id="features">
        <section className='text-foreground h-[50vh] w-full bg-background dark:bg-muted/40 grid place-content-center relative overflow-hidden'>
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-deep-purple/10 dark:bg-deep-purple/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 dark:from-deep-purple/10 dark:to-electric-blue/10 rounded-full blur-3xl" />
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center px-8 relative z-10"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-purple/10 dark:bg-deep-purple/20 border border-deep-purple/20 dark:border-deep-purple/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-deep-purple animate-pulse" />
              <span className="text-sm font-medium text-deep-purple dark:text-deep-purple/90">Feature Suite</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
              Everything Your{" "}
              <span className="animate-gradient-shift">Club Needs</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter mb-4">
              Eight powerful modules working together — automatically activated during onboarding.
            </p>
            
            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 mt-8"
            >
              <span className="text-sm text-muted-foreground/70">Scroll to explore</span>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
              >
                <div className="w-1.5 h-2.5 rounded-full bg-deep-purple" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className='w-full bg-background dark:bg-muted/40 pb-32 md:pb-40'>
          {features.map((feature, i) => {
            const targetScale = 1 - (features.length - i) * 0.05;
            return (
              <FeatureCard 
                key={`feature_${i}`} 
                i={i} 
                {...feature} 
                progress={scrollYProgress} 
                range={[i * 0.125, 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </section>
      </div>
    </ReactLenis>
  );
};

export default PadelFeatureShowcase;
