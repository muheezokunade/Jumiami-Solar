import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for performance API to be available
    if (!('PerformanceObserver' in window)) {
      setIsLoading(false);
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            lcp: entry.startTime
          }));
        }
        
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev,
            fid: firstInputEntry.processingStart - firstInputEntry.startTime
          }));
        }
        
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({
            ...prev,
            cls: (prev?.cls || 0) + (entry as any).value
          }));
        }
      });
    });

    // Observe different performance metrics
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Get FCP (First Contentful Paint)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      setMetrics(prev => ({
        ...prev,
        fcp: fcpEntry.startTime
      }));
    }

    // Get TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart
      }));
    }

    setIsLoading(false);

    return () => observer.disconnect();
  }, []);

  return { metrics, isLoading };
}

// Performance warning component
export function PerformanceWarning({ threshold = 3000 }: { threshold?: number }) {
  const { metrics } = usePerformanceMonitor();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (metrics?.lcp && metrics.lcp > threshold) {
      setShowWarning(true);
    }
  }, [metrics, threshold]);

  if (!showWarning) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <p className="text-sm">
        ⚠️ Slow loading detected. Consider optimizing images and content.
      </p>
    </div>
  );
}

// Image loading performance tracker
export function useImagePerformance() {
  const [imageLoadTimes, setImageLoadTimes] = useState<Map<string, number>>(new Map());

  const trackImageLoad = (src: string, startTime: number) => {
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      setImageLoadTimes(prev => new Map(prev).set(src, loadTime));
    };

    img.src = src;
  };

  const getAverageLoadTime = () => {
    const times = Array.from(imageLoadTimes.values());
    return times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0;
  };

  return { trackImageLoad, getAverageLoadTime, imageLoadTimes };
}

// Bundle size analyzer (development only)
export function useBundleAnalyzer() {
  const [bundleInfo, setBundleInfo] = useState<any>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // This would integrate with webpack-bundle-analyzer or similar
      // For now, we'll just track basic metrics
      const scripts = document.querySelectorAll('script[src]');
      const totalSize = Array.from(scripts).reduce((total, script) => {
        const src = script.getAttribute('src');
        // This is a simplified approach - in reality you'd need to fetch and measure
        return total + (src?.includes('chunk') ? 1 : 0);
      }, 0);

      setBundleInfo({ scriptCount: scripts.length, chunkCount: totalSize });
    }
  }, []);

  return bundleInfo;
} 