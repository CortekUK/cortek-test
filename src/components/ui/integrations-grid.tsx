import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IntegrationsGridProps {
  className?: string;
}

const integrations = [
  { url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/174/174857.png", alt: "LinkedIn", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", alt: "Slack", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/733/733547.png", alt: "Facebook", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", alt: "Stripe", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/174/174855.png", alt: "Instagram", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/888/888853.png", alt: "Dropbox", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/906/906324.png", alt: "Jira", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png", alt: "HubSpot", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", alt: "Square", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/732/732218.png", alt: "Shopify", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968755.png", alt: "Zapier", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", alt: "Google Drive", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", alt: "YouTube", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png", alt: "Airtable", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png", alt: "Discord", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png", alt: "Notion", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/3670/3670071.png", alt: "WhatsApp", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968914.png", alt: "Salesforce", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png", alt: "Mailchimp", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/906/906349.png", alt: "Zoom", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968799.png", alt: "Twilio", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968826.png", alt: "Asana", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", alt: "Trello", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png", alt: "Microsoft Teams", priority: "medium" },
  { url: "https://cdn-icons-png.flaticon.com/512/732/732221.png", alt: "Microsoft", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", alt: "AWS", priority: "high" },
  { url: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", alt: "Zendesk", priority: "medium" },
];

// Icon positions spread across the container - well distributed vertically
const iconPositions = [
  { x: 5, y: 8 }, { x: 15, y: 5 }, { x: 25, y: 12 }, { x: 35, y: 18 },
  { x: 45, y: 10 }, { x: 55, y: 15 }, { x: 65, y: 6 }, { x: 75, y: 20 },
  { x: 85, y: 14 }, { x: 12, y: 32 }, { x: 22, y: 28 }, { x: 32, y: 35 },
  { x: 42, y: 40 }, { x: 52, y: 30 }, { x: 62, y: 38 }, { x: 72, y: 42 },
  { x: 82, y: 36 }, { x: 8, y: 55 }, { x: 18, y: 60 }, { x: 28, y: 52 },
  { x: 38, y: 58 }, { x: 48, y: 65 }, { x: 58, y: 50 }, { x: 68, y: 62 },
  { x: 78, y: 68 }, { x: 88, y: 56 }, { x: 15, y: 78 }, { x: 45, y: 82 },
];

const FloatingIcon = ({ 
  integration, 
  position, 
  index 
}: { 
  integration: typeof integrations[0]; 
  position: typeof iconPositions[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(integration.priority === "high");
  
  useEffect(() => {
    if (integration.priority === "medium") {
      // Medium priority icons fade in/out randomly
      const fadeInterval = setInterval(() => {
        setIsVisible(prev => !prev);
      }, 4000 + Math.random() * 4000);
      
      return () => clearInterval(fadeInterval);
    }
  }, [integration.priority]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.9,
        x: [0, Math.sin(index * 0.5) * 10, 0],
        y: [0, Math.cos(index * 0.5) * 10, 0],
      }}
      transition={{
        opacity: { duration: 2, ease: "easeInOut" },
        scale: { duration: 2, ease: "easeInOut" },
        x: { 
          duration: 8 + (index % 5), 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.2,
        },
        y: { 
          duration: 10 + (index % 4), 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.3,
        },
      }}
    >
      <div
        className="relative w-12 h-12 md:w-16 md:h-16 p-2 bg-white dark:bg-gray-800 shadow-lg border-2 border-border/20 dark:border-border/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <img
          src={integration.url}
          alt={integration.alt}
          className="w-full h-full object-contain p-1"
          width="64"
          height="64"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default function IntegrationsGrid({ className = "" }: IntegrationsGridProps) {
  return (
    <div className={`relative w-full h-[400px] md:h-[500px] overflow-hidden ${className}`}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 pointer-events-none" />
      
      {/* Floating icons */}
      <div className="relative w-full h-full">
        {integrations.map((integration, index) => (
          <FloatingIcon
            key={integration.alt}
            integration={integration}
            position={iconPositions[index]}
            index={index}
          />
        ))}
      </div>
      
      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
