import { useState, useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { imageOptimization } from '@/lib/image-optimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  responsive?: boolean;
  sizes?: string;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  showErrorState?: boolean;
  quality?: number;
  aspectRatio?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  responsive = true,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fallback,
  onLoad,
  onError,
  showErrorState = true,
  quality = 85,
  aspectRatio
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(
    fallback || imageOptimization.generatePlaceholder(width || 400, height || 300)
  );
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

  // Load optimized image when in view
  useEffect(() => {
    if (!src || !isInView) return;

    const optimalFormat = imageOptimization.getOptimalFormat();
    const optimizedSrc = imageOptimization.optimizeImageUrl(src, { 
      width, 
      height, 
      quality,
      format: optimalFormat
    });

    const img = new Image();
    
    // Add responsive srcSet if enabled
    if (responsive && !width) {
      const srcSet = imageOptimization.generateSrcSet(src);
      img.srcset = srcSet;
      img.sizes = sizes;
    }
    
    img.onload = () => {
      setImageSrc(optimizedSrc);
      setIsLoading(false);
      onLoad?.();
    };

    img.onerror = () => {
      // Try fallback without optimization
      if (optimizedSrc !== src) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setImageSrc(src);
          setIsLoading(false);
          onLoad?.();
        };
        fallbackImg.onerror = () => {
          setHasError(true);
          setIsLoading(false);
          onError?.();
        };
        fallbackImg.src = src;
      } else {
        setHasError(true);
        setIsLoading(false);
        onError?.();
      }
    };

    img.src = optimizedSrc;
  }, [src, isInView, width, height, quality, responsive, sizes, onLoad, onError]);

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const optimizedSrc = imageOptimization.optimizeImageUrl(src, { 
        width, 
        height, 
        quality,
        format: imageOptimization.getOptimalFormat()
      });
      imageOptimization.preloadImages([optimizedSrc], true);
    }
  }, [src, priority, width, height, quality]);

  if (hasError && showErrorState) {
    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center bg-gray-100 text-gray-500 rounded-lg",
          className
        )}
        style={{ 
          width, 
          height,
          aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined)
        }}
        role="img"
        aria-label={`Error loading image: ${alt}`}
      >
        <AlertCircle className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-sm text-center px-2">Image failed to load</p>
        <button
          onClick={() => {
            setHasError(false);
            setIsLoading(true);
            setIsInView(true);
          }}
          className="mt-2 text-xs text-orange-600 hover:text-orange-800 underline transition-colors"
          aria-label="Retry loading image"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined)
      }}
    >
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{
            backgroundImage: `url("${imageOptimization.generatePlaceholder(width || 400, height || 300, '#f3f4f6')}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={responsive ? sizes : undefined}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          isLoading && "opacity-0 scale-105",
          !isLoading && !hasError && "opacity-100 scale-100",
          hasError && "opacity-50"
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
    </div>
  );
} 