"use client";

import * as React from "react";
import { useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility Function (from @/lib/utils) ---

/**
 * A utility function to conditionally join class names.
 * Requires `clsx` and `tailwind-merge` to be installed.
 * `npm install clsx tailwind-merge`
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Card Components ---

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export function AnimatedCard({
  className,
  ...props
}: CardProps) {
  return <div role="region" aria-labelledby="card-title" aria-describedby="card-description" className={cn("group/animated-card relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-900 dark:bg-black", className)} {...props} />;
}
export function CardBody({
  className,
  ...props
}: CardProps) {
  return <div role="group" className={cn("flex flex-col space-y-1.5 border-t border-zinc-200 p-4 dark:border-zinc-900", className)} {...props} />;
}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export function CardTitle({
  className,
  ...props
}: CardTitleProps) {
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight text-black dark:text-white", className)} {...props} />;
}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return <p className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)} {...props} />;
}
export function CardVisual({
  className,
  ...props
}: CardProps) {
  return <div className={cn("h-[500px] w-full flex items-center justify-center overflow-hidden", className)} {...props} />;
}

// --- Visual3 Component and its Sub-components ---

interface Visual3Props {
  mainColor?: string;
  secondaryColor?: string;
  blueColor?: string;
  gridColor?: string;
}
export function Visual3({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  blueColor = "#2D81F7",
  gridColor = "#80808015"
}: Visual3Props) {
  const [animationPhase, setAnimationPhase] = useState(0);
  React.useEffect(() => {
    let animationId: number;
    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed % 8000 / 8000; // 8 second cycle
      setAnimationPhase(progress);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  return <>
      <div className="absolute inset-0 z-20" style={{
      "--color": mainColor,
      "--secondary-color": secondaryColor
    } as React.CSSProperties} />

      <div className="relative h-[500px] w-full overflow-hidden rounded-t-lg">
        <Layer4 color={mainColor} secondaryColor={secondaryColor} blueColor={blueColor} hovered={false} animationPhase={animationPhase} />
        <Layer3 color={mainColor} />
        <Layer2 color={mainColor} />
        <Layer1 color={mainColor} secondaryColor={secondaryColor} />
        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
      
      {/* Mobile persistent badge - rendered outside chart container for proper layering */}
      <div className="absolute top-4 right-4 z-[100] lg:hidden">
        
      </div>
    </>;
}
interface LayerProps {
  color: string;
  secondaryColor?: string;
  blueColor?: string;
  hovered?: boolean;
  animationPhase?: number;
}
const GridLayer: React.FC<{
  color: string;
}> = ({
  color
}) => {
  return <div style={{
    "--grid-color": color
  } as React.CSSProperties} className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />;
};
const EllipseGradient: React.FC<{
  color: string;
}> = ({
  color
}) => {
  return <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="500" height="500" fill="url(#paint0_radial_12_207)" />
        <defs>
          <radialGradient id="paint0_radial_12_207" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(250 250)">
            <stop stopColor={color} stopOpacity="0.25" />
            <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>;
};
const Layer1: React.FC<LayerProps> = ({
  color,
  secondaryColor
}) => {
  return <div className="absolute top-4 left-4 z-[8] flex items-center gap-1" style={{
    "--color": color,
    "--secondary-color": secondaryColor
  } as React.CSSProperties}>
      {/* Desktop: Show percentage badges that hide on hover */}
      <div className="hidden lg:flex items-center gap-1">
        <div className="flex shrink-0 items-center rounded-full border border-zinc-200 bg-white/25 px-1.5 py-0.5 backdrop-blur-sm transition-opacity duration-300 ease-in-out group-hover/animated-card:opacity-0 dark:border-zinc-800 dark:bg-black/25">
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--color)]" />
          <span className="ml-1 text-[10px] text-black dark:text-white">
            +15,2%
          </span>
        </div>
        <div className="flex shrink-0 items-center rounded-full border border-zinc-200 bg-white/25 px-1.5 py-0.5 backdrop-blur-sm transition-opacity duration-300 ease-in-out group-hover/animated-card:opacity-0 dark:border-zinc-800 dark:bg-black/25">
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--secondary-color)]" />
          <span className="ml-1 text-[10px] text-black dark:text-white">
            +18,7%
          </span>
        </div>
      </div>
    </div>;
};
const Layer2: React.FC<{
  color: string;
}> = () => {
  return null;
};
const Layer3: React.FC<{
  color: string;
}> = () => {
  return null;
};
const Layer4: React.FC<LayerProps> = ({
  color,
  secondaryColor,
  blueColor,
  hovered,
  animationPhase = 0
}) => {
  const getAnimatedHeight = (baseHeight: number, variance: number, index: number) => {
    // Create smooth wave effect with different phases for each bar
    const phase = (animationPhase + index * 0.08) % 1;
    // Use eased sine wave for smooth movement with maximum amplitude
    const wave = Math.sin(phase * Math.PI * 2) * variance * 1.5;
    // Apply easing function to prevent sudden jumps
    const easedWave = wave * (1 - Math.pow(Math.abs(Math.sin(phase * Math.PI)), 0.3));
    return baseHeight + easedWave;
  };
  const rectsData = [{
    width: 25,
    baseHeight: 120,
    variance: 110,
    y: 200,
    hoverHeight: 80,
    hoverY: 350,
    x: 50,
    fill: "currentColor",
    hoverFill: secondaryColor
  }, {
    width: 25,
    baseHeight: 140,
    variance: 115,
    y: 180,
    hoverHeight: 90,
    hoverY: 340,
    x: 85,
    fill: blueColor,
    hoverFill: blueColor
  }, {
    width: 25,
    baseHeight: 180,
    variance: 120,
    y: 160,
    hoverHeight: 110,
    hoverY: 320,
    x: 120,
    fill: blueColor,
    hoverFill: blueColor
  }, {
    width: 25,
    baseHeight: 160,
    variance: 118,
    y: 170,
    hoverHeight: 130,
    hoverY: 300,
    x: 155,
    fill: color,
    hoverFill: color
  }, {
    width: 25,
    baseHeight: 130,
    variance: 112,
    y: 185,
    hoverHeight: 100,
    hoverY: 330,
    x: 190,
    fill: "currentColor",
    hoverFill: secondaryColor
  }, {
    width: 25,
    baseHeight: 150,
    variance: 115,
    y: 175,
    hoverHeight: 95,
    hoverY: 335,
    x: 225,
    fill: "currentColor",
    hoverFill: secondaryColor
  }, {
    width: 25,
    baseHeight: 200,
    variance: 125,
    y: 150,
    hoverHeight: 120,
    hoverY: 310,
    x: 260,
    fill: blueColor,
    hoverFill: blueColor
  }, {
    width: 25,
    baseHeight: 145,
    variance: 115,
    y: 180,
    hoverHeight: 85,
    hoverY: 345,
    x: 295,
    fill: blueColor,
    hoverFill: blueColor
  }, {
    width: 25,
    baseHeight: 125,
    variance: 110,
    y: 190,
    hoverHeight: 105,
    hoverY: 325,
    x: 330,
    fill: "currentColor",
    hoverFill: secondaryColor
  }, {
    width: 25,
    baseHeight: 190,
    variance: 122,
    y: 155,
    hoverHeight: 140,
    hoverY: 290,
    x: 365,
    fill: color,
    hoverFill: color
  }, {
    width: 25,
    baseHeight: 155,
    variance: 118,
    y: 175,
    hoverHeight: 150,
    hoverY: 280,
    x: 400,
    fill: "currentColor",
    hoverFill: secondaryColor
  }, {
    width: 25,
    baseHeight: 170,
    variance: 120,
    y: 165,
    hoverHeight: 125,
    hoverY: 305,
    x: 435,
    fill: color,
    hoverFill: color
  }];
  return <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex h-full w-full items-center justify-center text-neutral-800/10 transition-transform duration-500 group-hover/animated-card:scale-125 dark:text-white/15">
      <svg width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        {rectsData.map((rect, index) => {
        const animatedHeight = hovered ? rect.hoverHeight : getAnimatedHeight(rect.baseHeight, rect.variance, index);
        const animatedY = hovered ? rect.hoverY : 430 - animatedHeight;
        return <rect key={index} width={rect.width} height={animatedHeight} x={rect.x} y={animatedY} fill={hovered ? rect.hoverFill : rect.fill} rx="2" ry="2" />;
      })}
      </svg>
    </div>;
};