import { useCallback, useEffect, useState } from "react";

interface UseStaggerChildrenOptions {
  staggerDelay?: number;
  childSelector?: string;
  threshold?: number;
  rootMargin?: string;
}

export function useStaggerChildren<T extends HTMLElement = HTMLElement>({
  staggerDelay = 80,
  childSelector = ".stagger-child",
  threshold = 0,
  rootMargin = "0px 0px -20px 0px",
}: UseStaggerChildrenOptions = {}) {
  const [container, setContainer] = useState<T | null>(null);
  const ref = useCallback((node: T | null) => setContainer(node), []);

  useEffect(() => {
    if (!container) return;

    const children = container.querySelectorAll<HTMLElement>(childSelector);

    // 再実行時に前回の状態をリセット
    for (const child of children) {
      child.classList.remove("revealed");
      child.style.animationDelay = "";
    }

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
  }, [container, staggerDelay, childSelector, threshold, rootMargin]);

  return ref;
}
