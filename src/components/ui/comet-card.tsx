import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

interface CometCardProps {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}

export function CometCard({
  rotateDepth = 15,
  translateDepth = 20,
  className,
  children,
}: CometCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovering) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotX = (deltaY / rect.height) * rotateDepth;
      const rotY = -(deltaX / rect.width) * rotateDepth;

      const transX = (deltaX / rect.width) * translateDepth;
      const transY = (deltaY / rect.height) * translateDepth;

      setRotation({ x: rotX, y: rotY });
      setTranslate({ x: transX, y: transY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setTranslate({ x: 0, y: 0 });
      setIsHovering(false);
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rotateDepth, translateDepth, isHovering]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative transition-all duration-200 ease-out will-change-transform",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateX(${translate.x}px) translateY(${translate.y}px)`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setRotation({ x: 0, y: 0 });
        setTranslate({ x: 0, y: 0 });
        setIsHovering(false);
      }}
    >
      {children}
    </div>
  );
}