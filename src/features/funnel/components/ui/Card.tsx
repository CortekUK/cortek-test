import { cn } from "@/features/funnel/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 card-surface gradient-border card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
