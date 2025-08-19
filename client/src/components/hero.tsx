import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  overlay?: "orange" | "black";
  className?: string;
}

export default function Hero({ title, subtitle, image, overlay = "orange", className }: HeroProps) {
  const overlayClass = overlay === "orange"
    ? "bg-gradient-to-br from-orange-500/90 via-orange-400/85 to-yellow-400/80"
    : "bg-gradient-to-b from-black/50 via-black/30 to-black/60";

  return (
    <section className={cn("relative py-20 text-white overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={cn("absolute inset-0", overlayClass)}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
} 