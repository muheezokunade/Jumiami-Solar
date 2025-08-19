import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}

export default function Heading({ children, className, level = 1 }: HeadingProps) {
  const Tag = ("h" + level) as keyof JSX.IntrinsicElements;
  const base = "font-light tracking-tight text-gray-900";
  const sizes = {
    1: "text-5xl sm:text-6xl md:text-7xl",
    2: "text-4xl sm:text-5xl",
    3: "text-2xl sm:text-3xl",
  } as const;

  return <Tag className={cn(base, sizes[level], className)}>{children}</Tag>;
} 