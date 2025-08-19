import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Section({ children, className, as: Tag = "section" }: SectionProps) {
  return (
    <Tag className={cn("py-24 sm:py-16", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
} 