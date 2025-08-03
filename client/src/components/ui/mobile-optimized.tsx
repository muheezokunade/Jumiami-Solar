import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MobileOptimizedProps {
  children: ReactNode;
  className?: string;
  touchTarget?: boolean;
  ariaLabel?: string;
}

export default function MobileOptimized({ 
  children, 
  className, 
  touchTarget = false,
  ariaLabel 
}: MobileOptimizedProps) {
  return (
    <div
      className={cn(
        "touch-manipulation", // Optimize for touch
        touchTarget && "min-h-[44px] min-w-[44px]", // Minimum touch target size
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

// Mobile-optimized button wrapper
export function MobileButton({ 
  children, 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "touch-manipulation min-h-[44px] min-w-[44px]",
        "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
        "active:scale-95 transition-transform duration-150",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Mobile-optimized card wrapper
export function MobileCard({ 
  children, 
  className 
}: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "touch-manipulation",
        "focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2",
        "rounded-lg transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
} 