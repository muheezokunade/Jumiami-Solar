import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { imageOptimization } from "@/lib/image-optimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  showErrorState?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fallback,
  onLoad,
  onError,
  showErrorState = true
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(fallback || imageOptimization.generatePlaceholder(width || 400, height || 300));
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      imageOptimization.getLazyLoadConfig()
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Load image when in view
  useEffect(() => {
    if (!src || !isInView) return;

    const optimizedSrc = imageOptimization.optimizeImageUrl(src, { width, height });
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(optimizedSrc);
      setIsLoading(false);
      onLoad?.();
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      onError?.();
    };

    img.src = optimizedSrc;
  }, [src, isInView, width, height, onLoad, onError]);

  if (hasError && showErrorState) {
    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center bg-gray-100 text-gray-500",
          className
        )}
        style={{ width, height }}
        role="img"
        aria-label={`Error loading image: ${alt}`}
      >
        <AlertCircle className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-sm text-center">Image failed to load</p>
        <button
          onClick={() => {
            setHasError(false);
            setIsLoading(true);
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoading(false);
              onLoad?.();
            };
            img.onerror = () => {
              setHasError(true);
              setIsLoading(false);
              onError?.();
            };
            img.src = src;
          }}
          className="mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
          aria-label="Retry loading image"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "transition-opacity duration-300",
        isLoading && "opacity-0",
        !isLoading && !hasError && "opacity-100",
        hasError && "opacity-50",
        className
      )}
      onLoad={() => {
        setIsLoading(false);
        onLoad?.();
      }}
      onError={() => {
        setHasError(true);
        setIsLoading(false);
        onError?.();
      }}
    />
  );
} 