import { cn } from "@/features/funnel/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer",
        variant === "primary" &&
          "bg-gradient-to-r from-brand-purple to-brand-purple-light text-on-brand hover:brightness-110 btn-glow group",
        variant === "secondary" &&
          "bg-navy-700 text-foreground border border-navy-600 hover:bg-navy-600 hover:border-brand-purple/30",
        variant === "ghost" &&
          "bg-transparent text-brand-blue hover:text-brand-blue-light underline underline-offset-4",
        size === "sm" && "px-5 py-2.5 text-sm",
        size === "md" && "px-7 py-3.5 text-base",
        size === "lg" && "px-9 py-3.5 text-sm sm:text-lg whitespace-nowrap",
        className
      )}
      {...props}
    >
      {children}
      {variant === "primary" && (
        <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      )}
    </button>
  );
}
