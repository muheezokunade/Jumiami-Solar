// Image optimization service for CDN and compression
export interface ImageOptimizationConfig {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  cdn?: string;
}

export class ImageOptimizationService {
  private static instance: ImageOptimizationService;
  private cdnBaseUrl: string = '';
  private defaultQuality: number = 80;
  private defaultFormat: 'webp' | 'jpeg' | 'png' = 'webp';

  private constructor() {}

  static getInstance(): ImageOptimizationService {
    if (!ImageOptimizationService.instance) {
      ImageOptimizationService.instance = new ImageOptimizationService();
    }
    return ImageOptimizationService.instance;
  }

  // Set CDN configuration
  setCDN(baseUrl: string): void {
    this.cdnBaseUrl = baseUrl;
  }

  // Optimize image URL for CDN
  optimizeImageUrl(
    originalUrl: string, 
    config: ImageOptimizationConfig = {}
  ): string {
    const {
      width,
      height,
      quality = this.defaultQuality,
      format = this.defaultFormat,
      cdn = this.cdnBaseUrl
    } = config;

    // If no CDN is configured, return original URL
    if (!cdn) {
      return originalUrl;
    }

    // For Cloudinary CDN
    if (cdn.includes('cloudinary')) {
      return this.optimizeForCloudinary(originalUrl, { width, height, quality, format });
    }

    // For other CDNs, you can add more providers here
    return originalUrl;
  }

  // Cloudinary optimization
  private optimizeForCloudinary(
    originalUrl: string, 
    config: { width?: number; height?: number; quality?: number; format?: string }
  ): string {
    const { width, height, quality, format } = config;
    
    // Extract Cloudinary transformation parameters
    const transformations = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (quality) transformations.push(`q_${quality}`);
    if (format) transformations.push(`f_${format}`);
    
    // Add auto-optimization
    transformations.push('f_auto', 'q_auto');
    
    const transformationString = transformations.join(',');
    
    // Replace the original URL with Cloudinary URL
    return originalUrl.replace(
      /^https?:\/\/[^\/]+/,
      'https://res.cloudinary.com/your-cloud-name/image/fetch'
    ) + `/${transformationString}/${encodeURIComponent(originalUrl)}`;
  }

  // Generate responsive image URLs
  generateResponsiveUrls(
    originalUrl: string,
    breakpoints: { [key: string]: number } = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  ): { [key: string]: string } {
    const urls: { [key: string]: string } = {};
    
    Object.entries(breakpoints).forEach(([breakpoint, width]) => {
      urls[breakpoint] = this.optimizeImageUrl(originalUrl, { width });
    });
    
    return urls;
  }

  // Preload critical images
  preloadImages(urls: string[]): void {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  // Lazy load configuration
  getLazyLoadConfig(): IntersectionObserverInit {
    return {
      rootMargin: '50px 0px',
      threshold: 0.1
    };
  }

  // Generate placeholder for images
  generatePlaceholder(width: number, height: number, text: string = 'Loading...'): string {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='system-ui' font-size='14'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
  }
}

// Export singleton instance
export const imageOptimization = ImageOptimizationService.getInstance(); 