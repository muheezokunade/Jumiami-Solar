import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  animation = 'fade',
  delay = 0,
  duration = 1000
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'none'
      : animation === 'slide-up'
      ? 'translateY(2rem)'
      : animation === 'slide-down'
      ? 'translateY(-2rem)'
      : animation === 'slide-left'
      ? 'translateX(2rem)'
      : animation === 'slide-right'
      ? 'translateX(-2rem)'
      : animation === 'scale'
      ? 'scale(0.95)'
      : animation === 'rotate'
      ? 'rotate(-5deg)'
      : 'none',
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
  };

  return { ref, isVisible, style: animationStyles };
}

export function useParallaxScroll(speed = 0.5) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const scrollOffset = window.scrollY * speed;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const style = {
    transform: `translateY(${offset}px)`,
    transition: 'transform 0.1s linear'
  };

  return { ref, style };
}

export function useSmoothReveal() {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            setElements((prev) => [...prev, element]);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const children = containerRef.current.children;
    Array.from(children).forEach((child) => {
      observer.observe(child as HTMLElement);
    });

    return () => observer.disconnect();
  }, []);

  return {
    containerRef,
    revealedElements: elements,
    isRevealed: (element: HTMLElement) => elements.includes(element)
  };
} 