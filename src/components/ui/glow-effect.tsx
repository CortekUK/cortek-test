'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'motion/react';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  blur?: number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
  transition?: Transition;
  scale?: number;
  duration?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const getBlurClass = (blur: GlowEffectProps['blur']) => {
    if (typeof blur === 'number') {
      return `blur-[${blur}px]`;
    }

    const presets = {
      softest: 'blur-sm',
      soft: 'blur',
      medium: 'blur-md',
      strong: 'blur-lg',
      stronger: 'blur-xl',
      strongest: 'blur-xl',
      none: 'blur-none',
    };

    return presets[blur as keyof typeof presets];
  };

  const baseStyle = {
    ...style,
    '--scale': scale,
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  } as React.CSSProperties;

  const animationProps = {
    rotate: {
      style: {
        ...baseStyle,
        background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
      },
      animate: {
        background: [
          `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
          `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
        ],
      },
      transition: transition || {
        repeat: Infinity,
        duration: duration,
        ease: 'linear',
      },
    },
    static: {
      style: {
        ...baseStyle,
        background: `linear-gradient(to right, ${colors.join(', ')})`,
      },
      animate: {},
      transition: {},
    },
  };

  const currentMode = animationProps[mode as keyof typeof animationProps] || animationProps.static;

  return (
    <motion.div
      style={currentMode.style}
      animate={currentMode.animate}
      transition={currentMode.transition}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        'scale-[var(--scale)] transform-gpu',
        getBlurClass(blur),
        className
      )}
    />
  );
}