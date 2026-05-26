import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface UseAnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const useAnimatedCounter = ({
  value,
  duration = 2000,
  suffix = "",
  prefix = ""
}: UseAnimatedCounterProps) => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const startTime = Date.now();
      const endValue = value;
      
      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);
        
        setCounter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCounter(endValue);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, duration]);

  const formattedValue = `${prefix}${counter}${suffix}`;
  
  return { ref, value: formattedValue };
};