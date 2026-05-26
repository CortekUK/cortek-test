import { 
  MessageSquare, 
  Send, 
  QrCode, 
  Trophy, 
  LayoutGrid, 
  Link, 
  Users, 
  Unlock
} from "lucide-react";
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import onboardingSupportImg from '@/assets/onboarding-support.jpg';
import cancelAnytimeImg from '@/assets/cancel-anytime.jpg';

interface FeatureCardProps {
  i: number;
  icon: any;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const FeatureCard = ({
  i,
  icon: Icon,
  title,
  problem,
  solution,
  benefits,
  image,
  color,
  progress,
  range,
  targetScale,
}: FeatureCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          background: `linear-gradient(135deg, ${color}dd, ${color}99)`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] min-h-[500px] h-auto w-[92%] sm:w-[88%] md:w-[85%] max-w-6xl rounded-2xl p-6 sm:p-8 md:p-10 origin-top shadow-2xl backdrop-blur-sm border border-white/10`}
      >
        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white font-sora break-words'>{title}</h2>
        </div>
        
        <div className={`flex flex-col md:flex-row h-auto gap-6 sm:gap-8 md:gap-10`}>
          <div className={`w-full md:w-[45%] relative`}>
            <div className="mb-3 sm:mb-4">
              <h4 className="text-xs sm:text-sm font-semibold text-red-200 mb-1.5 sm:mb-2 font-sora">The Problem:</h4>
              <p className='text-xs sm:text-sm text-white/90 leading-relaxed break-words'>{problem}</p>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm font-semibold text-yellow-200 mb-1.5 sm:mb-2 font-sora">The Solution:</h4>
              <p className='text-xs sm:text-sm text-white/90 leading-relaxed break-words'>{solution}</p>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                  <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed break-words">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative w-full md:w-[55%] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden`}>
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={image} alt={title} className='absolute inset-0 w-full h-full object-cover object-center' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    problem: "Clubs often deal with empty courts, missed updates, and players not hearing about events.",
    solution: "Cortek automates WhatsApp posts, keeping your community connected in real time.",
    benefits: [
      "Real-time court updates — instantly fill empty slots",
      "Automated reminders — no match or event is missed",
      "Last-minute promotions — games with vacant spots always go ahead"
    ],
    image: "/lovable-uploads/3ea5d57f-0e62-49b8-8d64-3aadffbe9504.png",
    color: '#00796B'
  },
  {
    icon: Send,
    title: "Social Media Automation",
    problem: "Posting consistently is hard when you're running a busy club. Branding slips, updates miss peak times, and engagement drops.",
    solution: "Cortek automatically creates and posts branded content, tailored for each platform.",
    benefits: [
      "Branded graphics created automatically",
      "Multi-platform posting (Instagram, Facebook & more)",
      "Scheduled updates to hit peak engagement"
    ],
    image: "/lovable-uploads/33304def-6a4c-43c7-a131-a42699d9bed2.png",
    color: '#4A148C'
  },
  {
    icon: QrCode,
    title: "QR Code System",
    problem: "Getting new players into your community groups can be slow and messy.",
    solution: "Cortek's QR system connects players instantly with one scan.",
    benefits: [
      "Instant group access via QR posters",
      "Seamless onboarding for new members",
      "Steady community growth with every scan"
    ],
    image: "/lovable-uploads/59d7f794-1c73-4008-8700-a663220d0a38.png",
    color: '#1565C0'
  },
  {
    icon: Trophy,
    title: "Player Ranking System",
    problem: "Achievements and loyalty often go unnoticed, and players lose motivation outside match days.",
    solution: "Cortek keeps rankings live and rewards loyalty automatically.",
    benefits: [
      "Automated leaderboards powered by Playtomic data",
      "Rewards and incentives for top players",
      "Recognition that builds a stronger community"
    ],
    image: "/lovable-uploads/b0b1f2b6-d666-432c-b2b0-7caff3cd3345.png",
    color: '#D84315'
  },
  {
    icon: LayoutGrid,
    title: "Club Portal & Dashboard",
    problem: "Running multiple systems creates confusion and wasted time.",
    solution: "Cortek centralises everything into one easy-to-use dashboard.",
    benefits: [
      "Manage bookings, rankings, and automation in one place",
      "Flexible scheduling, templates, and settings",
      "Clear insights to keep your club running smoothly"
    ],
    image: "/lovable-uploads/96fdc659-655e-43af-94e9-1ccdfa4df788.png",
    color: '#283593'
  },
  {
    icon: Link,
    title: "Playtomic Integration",
    problem: "Manually updating systems and copying data wastes hours.",
    solution: "Cortek syncs seamlessly with Playtomic so your data flows automatically.",
    benefits: [
      "Automated leaderboards linked to Playtomic",
      "Instant match and booking updates",
      "Less manual work, more focus on growing your club"
    ],
    image: "/lovable-uploads/b352a5f2-02a5-4aa0-9094-6941eb1bd0a7.png",
    color: '#00695C'
  },
  {
    icon: Users,
    title: "Onboarding & Support",
    problem: "New tech can feel overwhelming, and without help, clubs don't get full value.",
    solution: "Cortek provides hands-on onboarding and ongoing support at every step.",
    benefits: [
      "Quick, guided setup tailored to your club",
      "Expert support when you need it",
      "Continuous improvements and feature updates"
    ],
    image: onboardingSupportImg,
    color: '#6A1B9A'
  },
  {
    icon: Unlock,
    title: "Cancel Anytime — No Contracts",
    problem: "Long-term contracts tie you in even if the system doesn't fit.",
    solution: "Cortek is a simple monthly subscription with complete flexibility.",
    benefits: [
      "Flat monthly fee, unlimited use",
      "Cancel whenever you need — no penalties",
      "Freedom and transparency built in"
    ],
    image: cancelAnytimeImg,
    color: '#E65100'
  }
];

const FeatureShowcaseSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div ref={container} className="relative">
        <section className='text-foreground h-[50vh] w-full bg-background grid place-content-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center px-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
              Deep-Dive into{" "}
              <span className="text-deep-purple">Key Features</span>
            </h2>
            <div className="w-24 h-1 bg-deep-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto font-inter">
              Explore how each automation tool transforms your daily operations and member experience.
            </p>
          </motion.div>
        </section>

        <section className='w-full bg-background pb-32 md:pb-40'>
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

export default FeatureShowcaseSection;