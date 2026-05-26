import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: 
          "bg-deep-purple text-white font-semibold hover:bg-deep-purple-hover transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg",
        secondary:
          "border-2 border-electric-blue text-electric-blue bg-transparent font-semibold hover:bg-electric-blue hover:text-white transition-all duration-200 shadow-md hover:shadow-lg rounded-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-electric-blue text-electric-blue bg-background hover:bg-electric-blue hover:text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-deep-purple underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  onTouchStart?: (e: React.TouchEvent<HTMLButtonElement>) => void
  onTouchEnd?: (e: React.TouchEvent<HTMLButtonElement>) => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onTouchStart, onTouchEnd, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Add touch feedback for mobile
    const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
      if (onTouchStart) {
        onTouchStart(e);
      } else {
        e.currentTarget.style.transform = 'scale(0.98)';
        e.currentTarget.style.opacity = '0.8';
      }
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
      if (onTouchEnd) {
        onTouchEnd(e);
      } else {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.opacity = '';
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "min-h-[44px] touch-manipulation")}
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
