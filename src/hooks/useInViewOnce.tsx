import { useEffect, useRef, useState } from 'react';

interface UseInViewOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook that triggers animations once when element enters viewport
 * Uses IntersectionObserver for performance
 * @param threshold - Percentage of visibility needed to trigger (default: 0.25 = 25%)
 * @param rootMargin - Margin around root for early/late triggering
 * @returns ref to attach to element and isInView state
 */
export const useInViewOnce = ({ 
  threshold = 0.35, 
  rootMargin = '0px' 
}: UseInViewOnceOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If reduced motion is preferred, trigger immediately without animation
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // Fire once and cleanup
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isInView, threshold, rootMargin]);

  return { ref, isInView };
};
