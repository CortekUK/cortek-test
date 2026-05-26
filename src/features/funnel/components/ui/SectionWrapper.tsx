import { cn } from "@/features/funnel/lib/utils";
import { useInView } from "@/features/funnel/hooks/useInView";
import { useEffect, useRef } from "react";
import { trackSectionView } from "@/features/funnel/lib/analytics";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  sectionName?: string;
}

export function SectionWrapper({ id, children, className, sectionName }: SectionWrapperProps) {
  const { ref, isVisible } = useInView(0.1);
  const tracked = useRef(false);

  useEffect(() => {
    if (isVisible && !tracked.current && sectionName) {
      tracked.current = true;
      trackSectionView(sectionName);
    }
  }, [isVisible, sectionName]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "fade-in-section py-20 sm:py-24 px-4 sm:px-6 lg:px-8",
        isVisible && "is-visible",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
