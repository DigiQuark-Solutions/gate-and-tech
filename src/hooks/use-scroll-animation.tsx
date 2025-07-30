import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "-100px", triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsInView(true);
          setHasTriggered(true);
          
          // Add glow animation class
          element.classList.add('animate');
        } else if (!triggerOnce) {
          setIsInView(entry.isIntersecting);
          if (!entry.isIntersecting) {
            element.classList.remove('animate');
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isInView };
};

export const useStaggeredAnimation = <T extends HTMLElement = HTMLDivElement>(itemCount: number, delay: number = 150) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { ref, isInView } = useScrollAnimation<T>();

  useEffect(() => {
    if (isInView) {
      const timers: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setActiveIndex(i);
        }, i * delay);
        timers.push(timer);
      }

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [isInView, itemCount, delay]);

  return { ref, activeIndex, isInView };
};