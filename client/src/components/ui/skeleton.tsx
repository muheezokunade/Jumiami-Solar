import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "image" | "card" | "testimonial" | "stat";
  height?: string;
}

export function Skeleton({ className, variant = "text", height }: SkeletonProps) {
  const baseStyles = "animate-pulse rounded-md bg-gray-200";
  
  const variantStyles = {
    text: "h-4",
    image: "aspect-video",
    card: "h-[350px]",
    testimonial: "h-[200px]",
    stat: "h-24 w-24"
  };

  return (
    <div 
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      style={height ? { height } : {}}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Skeleton variant="image" className="h-48" />
      <div className="p-6 space-y-4">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-full" />
        <div className="space-y-2">
          <Skeleton variant="text" className="w-1/2" />
          <Skeleton variant="text" className="w-2/3" />
          <Skeleton variant="text" className="w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton variant="stat" className="rounded-full" />
        <div className="space-y-2">
          <Skeleton variant="text" className="w-32" />
          <Skeleton variant="text" className="w-24" />
        </div>
      </div>
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
    </div>
  );
}

export function StatSkeleton() {
  return (
    <div className="text-center space-y-4">
      <Skeleton variant="stat" className="mx-auto rounded-full" />
      <Skeleton variant="text" className="w-24 mx-auto" />
      <Skeleton variant="text" className="w-32 mx-auto" />
      <Skeleton variant="text" className="w-40 mx-auto" />
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Skeleton variant="image" className="h-48" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton variant="text" className="w-20" />
          <Skeleton variant="text" className="w-24" />
        </div>
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-5/6" />
        <div className="flex justify-between items-center">
          <Skeleton variant="text" className="w-16" />
          <Skeleton variant="text" className="w-20" />
        </div>
      </div>
    </div>
  );
}

