
import { useEffect, useRef } from 'react';

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (config: AnimationConfig = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = config;
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [threshold, rootMargin]);

  return elementsRef;
};
