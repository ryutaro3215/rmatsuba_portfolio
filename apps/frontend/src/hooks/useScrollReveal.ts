import { useEffect, useRef } from "react";

/**
 * Adds `.in` class to the element when it enters the viewport.
 * Element should have class `rv` (or `rule-draw`) in CSS.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      el.classList.add("in");
      setTimeout(() => {
        el.style.transition = "none";
        el.style.opacity = "1";
        el.style.transform = "none";
      }, 1100);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            io.unobserve(e.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const tryFire = () => {
      if (fired) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) fire();
    };

    const t1 = setTimeout(tryFire, 80);
    const t2 = setTimeout(tryFire, 600);
    const t3 = setTimeout(() => {
      if (!fired) fire();
    }, 4000);

    const onScroll = () => {
      tryFire();
      if (fired) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return ref;
}
