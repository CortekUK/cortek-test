import { useState, useEffect } from 'react';

interface UseCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export const useCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }: UseCounterProps) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const formatValue = (value: number) => {
    const formatted = value.toFixed(decimals);
    return `${formatted}${suffix}`;
  };

  useEffect(() => {
    if (!isAnimating) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(end * easeOutCubic);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isAnimating, end, duration]);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return {
    value: formatValue(count),
    startAnimation
  };
};