import { cn } from "@/lib/utils";

interface CortekLogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  xs: "w-32",
  sm: "w-36",
  md: "w-40",
  lg: "w-48",
};

const CortekLogo = ({ size = "md", className }: CortekLogoProps) => {
  return (
    <img
      src="/lovable-uploads/525a7ad8-6aa1-49a8-a2ac-97c0d986d8d9.png"
      alt="CORTEK business automation software logo"
      className={cn("h-auto object-contain", sizeClasses[size], className)}
      loading="eager"
      decoding="async"
    />
  );
};

export default CortekLogo;