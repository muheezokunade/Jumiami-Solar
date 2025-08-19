// Enhanced image optimization service with multiple CDN support
export interface ImageOptimizationConfig {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  cdn?: string;
  lazy?: boolean;
}

export class ImageOptimizationService {
  private static instance: ImageOptimizationService;
  private cloudinaryCloudName: string = 'dhdjzw88p'; // Your Cloudinary cloud name
  private defaultQuality: number = 85;
  private defaultFormat: 'webp' | 'avif' | 'jpeg' | 'png' = 'webp';

  private constructor() {}

  static getInstance(): ImageOptimizationService {
    if (!ImageOptimizationService.instance) {
      ImageOptimizationService.instance = new ImageOptimizationService();
    }
    return ImageOptimizationService.instance;
  }

  // Set Cloudinary configuration
  setCloudinary(cloudName: string): void {
    this.cloudinaryCloudName = cloudName;
  }

  // Optimize image URL with multiple CDN support
  optimizeImageUrl(
    originalUrl: string, 
    config: ImageOptimizationConfig = {}
  ): string {
    const {
      width,
      height,
      quality = this.defaultQuality,
      format = this.defaultFormat,
    } = config;

    // Handle Pexels images
    if (originalUrl.includes('pexels.com')) {
      return this.optimizePexelsImage(originalUrl, { width, height, quality });
    }

    // Handle other external images via Cloudinary fetch
    if (originalUrl.startsWith('http')) {
      return this.optimizeViaCloudinary(originalUrl, { width, height, quality, format });
    }

    // Return original URL for local images
    return originalUrl;
  }

  // Optimize Pexels images using their API parameters
  private optimizePexelsImage(
    originalUrl: string, 
    config: { width?: number; height?: number; quality?: number }
  ): string {
    const { width, height } = config;
    
    // Extract the image ID from Pexels URL
    const match = originalUrl.match(/\/photos\/(\d+)\//);
    if (!match) return originalUrl;
    
    const imageId = match[1];
    let optimizedUrl = originalUrl;
    
    // Add width parameter if specified
    if (width) {
      optimizedUrl += optimizedUrl.includes('?') ? '&' : '?';
      optimizedUrl += `auto=compress&cs=tinysrgb&w=${width}`;
      
      if (height) {
        optimizedUrl += `&h=${height}&fit=crop`;
      }
    }
    
    return optimizedUrl;
  }

  // Optimize via Cloudinary fetch API
  private optimizeViaCloudinary(
    originalUrl: string, 
    config: { width?: number; height?: number; quality?: number; format?: string }
  ): string {
    const { width, height, quality, format } = config;
    
    const transformations = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height},c_fill`);
    if (quality) transformations.push(`q_${quality}`);
    if (format) transformations.push(`f_${format}`);
    
    // Add progressive JPEG and auto optimization
    transformations.push('f_auto', 'q_auto:good', 'fl_progressive');
    
    const transformationString = transformations.join(',');
    
    return `https://res.cloudinary.com/${this.cloudinaryCloudName}/image/fetch/${transformationString}/${encodeURIComponent(originalUrl)}`;
  }

  // Generate responsive image URLs for different screen sizes
  generateResponsiveUrls(
    originalUrl: string,
    breakpoints: { [key: string]: number } = {
      mobile: 480,
      tablet: 768,
      desktop: 1200,
      large: 1600
    }
  ): { [key: string]: string } {
    const urls: { [key: string]: string } = {};
    
    Object.entries(breakpoints).forEach(([breakpoint, width]) => {
      urls[breakpoint] = this.optimizeImageUrl(originalUrl, { 
        width,
        format: 'webp',
        quality: breakpoint === 'mobile' ? 75 : 85
      });
    });
    
    return urls;
  }

  // Generate srcSet for responsive images
  generateSrcSet(originalUrl: string, widths: number[] = [480, 768, 1200, 1600]): string {
    return widths
      .map(width => {
        const optimizedUrl = this.optimizeImageUrl(originalUrl, { 
          width,
          format: 'webp',
          quality: width <= 768 ? 75 : 85
        });
        return `${optimizedUrl} ${width}w`;
      })
      .join(', ');
  }

  // Preload critical images
  preloadImages(urls: string[], priority: boolean = false): void {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      if (priority) {
        link.setAttribute('fetchpriority', 'high');
      }
      document.head.appendChild(link);
    });
  }

  // Enhanced lazy load configuration
  getLazyLoadConfig(): IntersectionObserverInit {
    return {
      rootMargin: '100px 0px',
      threshold: 0.01
    };
  }

  // Generate modern placeholder with blur effect
  generatePlaceholder(
    width: number, 
    height: number, 
    color: string = '#f3f4f6',
    text: string = ''
  ): string {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'>
        <rect width='${width}' height='${height}' fill='${color}'/>
        <rect width='${width}' height='${height}' fill='url(#shimmer)' opacity='0.3'/>
        ${text ? `<text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='#6b7280' font-family='system-ui' font-size='14'>${text}</text>` : ''}
        <defs>
          <linearGradient id='shimmer' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stop-color='transparent'/>
            <stop offset='50%' stop-color='rgba(255,255,255,0.3)'/>
            <stop offset='100%' stop-color='transparent'/>
            <animateTransform attributeName='gradientTransform' type='translate' values='-100 0;100 0;-100 0' dur='2s' repeatCount='indefinite'/>
          </linearGradient>
        </defs>
      </svg>
    `;
    
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }

  // Get image format support
  getOptimalFormat(): 'avif' | 'webp' | 'jpeg' {
    if (this.supportsAvif()) return 'avif';
    if (this.supportsWebp()) return 'webp';
    return 'jpeg';
  }

  private supportsWebp(): boolean {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  private supportsAvif(): boolean {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }
}

// Export singleton instance
export const imageOptimization = ImageOptimizationService.getInstance(); 