import { type CSSProperties, Fragment, useEffect, useRef } from "react";

interface KineticTextProps {
  text: string;
  by?: "word" | "char";
  step?: number; // ms per item
  delay?: number; // initial delay ms
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

export function KineticText({
  text,
  by = "word",
  step = 40,
  delay = 0,
  as: Tag = "span",
  className = "",
  style,
}: KineticTextProps) {
  const ref = useRef<HTMLElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: text is a valid dep — effect must re-run when text changes to reveal new spans
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let fired = false;
    const dur = by === "char" ? 600 : 800;

    const reveal = () => {
      if (fired) return;
      fired = true;
      const cls = by === "char" ? ".kt-char" : ".kt-word";
      const items = el.querySelectorAll<HTMLElement>(cls);
      items.forEach((it, i) => {
        const d = delay + i * step;
        setTimeout(() => it.classList.add("in"), d);
        // Safety net — force final state if transitions stall
        setTimeout(
          () => {
            it.style.transition = "none";
            it.style.opacity = "1";
            it.style.transform = "none";
            if (by !== "char") it.style.filter = "none";
          },
          d + dur + 60,
        );
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal();
            io.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const tryReveal = () => {
      if (fired) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) reveal();
    };
    const t = setTimeout(tryReveal, 50);
    const onScroll = () => {
      tryReveal();
      if (fired) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay, step, by, text]);

  const inlineStyle: CSSProperties = { display: "inline-block", ...style };

  if (by === "char") {
    return (
      // @ts-expect-error dynamic tag
      <Tag ref={ref} className={className} style={inlineStyle}>
        {text.split("").map((ch, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: stable array
          <span key={i} className="kt-char">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(/\s+/).filter((w) => w.length > 0);
  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={inlineStyle}>
      {words.map((w, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: stable array
        <Fragment key={i}>
          <span className="kt-word">{w}</span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
