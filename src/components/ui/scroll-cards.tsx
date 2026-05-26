"use client";
import { FC } from "react";
import { LucideIcon } from "lucide-react";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
  features?: string[];
  image: string;
  icon: LucideIcon;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
  image: string;
  icon: LucideIcon;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  i,
  src,
  features,
  image,
  icon: Icon,
}) => {
  return (
    <div className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <div className="relative flex flex-col w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px] mx-auto bg-[#F5F6F8] dark:bg-card rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden">
        {/* Image Header */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Icon Badge */}
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-sora font-bold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-foreground dark:text-card-foreground">
            {title}
          </h3>

          {/* Description */}
          <p className="font-inter text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          {features && (
            <ul className="space-y-2 md:space-y-3">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm md:text-base font-inter text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

export { CardsParallax, type iCardItem };