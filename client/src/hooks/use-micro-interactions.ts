import { useState, useEffect, useCallback } from 'react';

export interface MicroInteractionConfig {
  duration?: number;
  delay?: number;
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  scale?: number;
  translateY?: number;
  opacity?: number;
  rotate?: number;
}

export function useMicroInteractions() {
  const [hoveredElements, setHoveredElements] = useState<Set<string>>(new Set());
  const [clickedElements, setClickedElements] = useState<Set<string>>(new Set());

  // Hover interaction
  const handleHover = useCallback((elementId: string, isHovering: boolean) => {
    setHoveredElements(prev => {
      const newSet = new Set(prev);
      if (isHovering) {
        newSet.add(elementId);
      } else {
        newSet.delete(elementId);
      }
      return newSet;
    });
  }, []);

  // Click interaction
  const handleClick = useCallback((elementId: string) => {
    setClickedElements(prev => {
      const newSet = new Set(prev);
      newSet.add(elementId);
      return newSet;
    });

    // Remove click state after animation
    setTimeout(() => {
      setClickedElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(elementId);
        return newSet;
      });
    }, 300);
  }, []);

  // Scroll-triggered animations
  const useScrollAnimation = (threshold: number = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );

      const element = document.getElementById('scroll-trigger');
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, []);

    return isVisible;
  };

  // Typing animation
  const useTypingAnimation = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    }, [currentIndex, text, speed]);

    return displayText;
  };

  // Pulse animation
  const usePulseAnimation = (interval: number = 2000) => {
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 500);
      }, interval);

      return () => clearInterval(timer);
    }, [interval]);

    return isPulsing;
  };

  // Floating animation
  const useFloatingAnimation = (amplitude: number = 10, speed: number = 2000) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const newOffset = Math.sin(elapsed / speed) * amplitude;
        setOffset(newOffset);
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [amplitude, speed]);

    return offset;
  };

  // Ripple effect
  const useRippleEffect = () => {
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

    const createRipple = useCallback((event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { id, x, y }]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    }, []);

    return { ripples, createRipple };
  };

  // Parallax effect
  const useParallaxEffect = (speed: number = 0.5) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        setOffset(scrolled * speed);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
  };

  // Magnetic effect
  const useMagneticEffect = (strength: number = 0.3) => {
    const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (event.clientX - centerX) * strength;
      const y = (event.clientY - centerY) * strength;
      
      setMagneticOffset({ x, y });
    }, [strength]);

    const handleMouseLeave = useCallback(() => {
      setMagneticOffset({ x: 0, y: 0 });
    }, []);

    return { magneticOffset, handleMouseMove, handleMouseLeave };
  };

  return {
    hoveredElements,
    clickedElements,
    handleHover,
    handleClick,
    useScrollAnimation,
    useTypingAnimation,
    usePulseAnimation,
    useFloatingAnimation,
    useRippleEffect,
    useParallaxEffect,
    useMagneticEffect,
  };
} 