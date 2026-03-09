import { useEffect, useRef } from "react";

interface UseStaggerChildrenOptions {
  staggerDelay?: number;
  childSelector?: string;
  threshold?: number;
  rootMargin?: string;
}

export function useStaggerChildren<T extends HTMLElement = HTMLElement>({
  staggerDelay = 80,
  childSelector = ".stagger-child",
  threshold = 0.1,
  rootMargin = "0px 0px -20px 0px",
}: UseStaggerChildrenOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll<HTMLElement>(childSelector);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const child of children) {
        child.classList.add("revealed");
      }
      return;
    }

    // animation-delay を各子要素に設定
    for (let i = 0; i < children.length; i++) {
      children[i].style.animationDelay = `${i * staggerDelay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (const child of children) {
            child.classList.add("revealed");
          }
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerDelay, childSelector, threshold, rootMargin]);

  return ref;
}
