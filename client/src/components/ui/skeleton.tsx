import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function Skeleton({ 
  className, 
  width = "w-full", 
  height = "h-4", 
  rounded = true,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200",
        width,
        height,
        rounded && "rounded",
        className
      )}
      style={style}
      {...props}
    />
  );
}

// Predefined skeleton components
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Skeleton className="w-full h-full" height="h-48" />
        <div className="absolute bottom-4 left-4">
          <Skeleton className="w-8 h-8 rounded" />
        </div>
      </div>
      <div className="p-6">
        <Skeleton className="w-3/4 h-6 mb-2" />
        <Skeleton className="w-full h-4 mb-4" />
        <div className="space-y-2">
          <Skeleton className="w-2/3 h-3" />
          <Skeleton className="w-1/2 h-3" />
          <Skeleton className="w-3/4 h-3" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Skeleton className="w-3/4 h-16 mx-auto mb-8 bg-white/20" />
        <Skeleton className="w-2/3 h-8 mx-auto mb-12 bg-white/20" />
        <div className="flex justify-center space-x-4">
          <Skeleton className="w-32 h-12 rounded" />
          <Skeleton className="w-32 h-12 rounded" />
        </div>
      </div>
    </div>
  );
}

export function ServiceAreaSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Skeleton className="w-6 h-6 rounded mr-3" />
            <Skeleton className="w-24 h-6" />
          </div>
          <Skeleton className="w-full h-4 mb-4" />
          <div className="space-y-2">
            <Skeleton className="w-3/4 h-3" />
            <Skeleton className="w-2/3 h-3" />
            <Skeleton className="w-1/2 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
