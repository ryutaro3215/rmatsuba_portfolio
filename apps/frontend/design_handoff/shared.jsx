/* shared.jsx — Header, Footer, overlays, hooks shared across variations */

const { useEffect, useRef, useState, useCallback } = React;

/* ─────────── Hooks ─────────── */

// Reveal on scroll — adds `.in` class when element enters viewport.
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      el.classList.add("in");
      // Safety net for environments where the CSS transition stalls (rAF throttled).
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
    // Safety nets: probe after a tick + on scroll + force-reveal after max wait.
    // (IO + scroll events can be unreliable in sandbox iframes / instant scrolls.)
    const tryFire = () => {
      if (fired) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (r.top < vh * 0.92 && r.bottom > 0) fire();
    };
    const t1 = setTimeout(tryFire, 80);
    const t2 = setTimeout(tryFire, 600);
    // Final force-reveal — environments that throttle IO + scroll + timers can
    // still get here eventually. After 4s we force-show regardless of viewport.
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

// Stagger children reveal — each child given an animation-delay.
function useStagger(delay = 80) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.children);
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      items.forEach((c, i) => {
        c.style.transitionDelay = `${i * delay}ms`;
        c.classList.add("in");
        setTimeout(
          () => {
            c.style.transition = "none";
            c.style.opacity = "1";
            c.style.transform = "none";
          },
          i * delay + 1100,
        );
      });
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            io.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(root);
    const tryFire = () => {
      if (fired) return;
      const r = root.getBoundingClientRect();
      if (r.top < (window.innerHeight || 0) && r.bottom > 0) fire();
    };
    const t1 = setTimeout(tryFire, 80);
    const t2 = setTimeout(tryFire, 600);
    const t3 = setTimeout(tryFire, 1500);
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
  }, [delay]);
  return ref;
}

// Track scroll progress (0..1) for fixed-top progress bar.
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ─────────── Grain + cursor light overlays ─────────── */

function MouseLayers({ grain, light }) {
  useEffect(() => {
    if (!grain && !light) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };
    const tick = () => {
      raf = 0;
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      const root = document.documentElement;
      root.style.setProperty("--mxabs", `${x}px`);
      root.style.setProperty("--myabs", `${y}px`);
      // Subtle grain parallax — tiny offset (max ±12px)
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const dx = (x / w - 0.5) * 24;
      const dy = (y / h - 0.5) * 24;
      root.style.setProperty("--mx", `${dx}px`);
      root.style.setProperty("--my", `${dy}px`);
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [grain, light]);

  return (
    <>
      {grain && <div className="grain-layer" aria-hidden="true" />}
      {light && <div className="cursor-light" aria-hidden="true" />}
      <div className="vignette" aria-hidden="true" />
    </>
  );
}

/* ─────────── Header ─────────── */

const navItems = [
  { to: "Home.html", label: "Home", num: "I", match: /Home\.html|^\/$/ },
  { to: "About.html", label: "About", num: "II", match: /About\.html/ },
  { to: "Blog.html", label: "Blog", num: "III", match: /Blog\.html/ },
  { to: "Library.html", label: "Library", num: "IV", match: /Library\.html/ },
];

function Header({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = typeof window !== "undefined" ? window.location.href : "";

  const isActive = (item) => item.match.test(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={"site-header" + (scrolled ? " condensed" : "")}>
        <a
          href="Home.html"
          style={{ display: "flex", alignItems: "baseline", gap: 10 }}
        >
          <span
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 22,
              letterSpacing: "-0.01em",
            }}
          >
            R. Matsuba
          </span>
          <span
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            — Notebook
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="header-nav"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 28,
          }}
        >
          {navItems.map((it) => (
            <a
              key={it.to}
              href={it.to}
              className="u-link"
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: 6,
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: isActive(it) ? 1 : 0.65,
                fontWeight: isActive(it) ? 600 : 400,
              }}
            >
              <span style={{ opacity: 0.5, fontSize: 9 }}>{it.num}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="header-burger mono"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{
            background: "none",
            border: "1px solid currentColor",
            color: "inherit",
            padding: "6px 10px",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        role="dialog"
        aria-modal="true"
        className="mobile-nav"
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg)",
          zIndex: 100,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 500ms var(--ease)",
          display: "flex",
          flexDirection: "column",
          padding: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: 22,
            }}
          >
            R. Matsuba
          </span>
          <button
            type="button"
            className="mono"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "1px solid var(--rule)",
              color: "var(--ink)",
              padding: "6px 10px",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
        <nav
          style={{
            marginTop: 80,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {navItems.map((it, i) => (
            <a
              key={it.to}
              href={it.to}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 44,
                fontWeight: 300,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms var(--ease) ${i * 80 + 200}ms, transform 600ms var(--ease) ${i * 80 + 200}ms`,
              }}
            >
              <span
                className="mono"
                style={{ fontSize: 11, opacity: 0.5, letterSpacing: "0.2em" }}
              >
                {it.num}
              </span>
              {it.label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: "auto" }} className="mono muted">
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            mrworks15@icloud.com
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────── Footer ─────────── */

function Footer({ variant }) {
  const ref = useReveal();
  return (
    <footer className="site-footer">
      <div
        ref={ref}
        className="rv"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {/* Big mark */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "end",
            paddingBottom: 56,
            borderBottom: "1px solid var(--rule-soft)",
          }}
          className="footer-grid"
        >
          <div>
            <div
              className="mono muted"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Colophon · MMXXVI
            </div>
            <h2
              className="latin"
              style={{
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 0.95,
                margin: "20px 0 0",
                fontWeight: 200,
              }}
            >
              <span style={{ color: "var(--accent)" }}>—</span> intelligere.
            </h2>
            <p
              className="muted"
              style={{
                maxWidth: 520,
                marginTop: 22,
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              「理解する」。本ブログは、私自身の思考と学びを整理し可視化する場として綴られています。誰かにとっての小さな灯火になれば幸いです。
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div
                className="mono muted"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Index
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px 24px",
                }}
              >
                {navItems.map((it) => (
                  <a
                    key={it.to}
                    href={it.to}
                    className="u-link"
                    style={{ fontSize: 14, fontStyle: "italic" }}
                  >
                    <span
                      className="mono muted"
                      style={{ fontSize: 10, marginRight: 8 }}
                    >
                      {it.num}
                    </span>
                    {it.label}
                  </a>
                ))}
              </div>
            </div>{" "}
            <div>
              <div
                className="mono muted"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Correspondence
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <a
                  href="mailto:mrworks15@icloud.com"
                  className="u-link mono"
                  style={{ fontSize: 12 }}
                >
                  mrworks15@icloud.com
                </a>
                <a
                  href="https://github.com/ryutaro3215"
                  className="u-link mono"
                  style={{ fontSize: 12 }}
                >
                  github.com/ryutaro3215
                </a>
                <a
                  href="https://note.com/ma2ri_b2p"
                  className="u-link mono"
                  style={{ fontSize: 12 }}
                >
                  note.com/ma2ri_b2p
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
          }}
          className="mono muted"
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            © MMXXVI · Ryutaro Matsuba · All rights reserved
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Set in Newsreader &amp; JetBrains Mono
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── Scroll progress bar ─────────── */

function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div
      className="scroll-prog"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden="true"
    />
  );
}

/* ─────────── Kinetic Text — splits a string and reveals word-by-word on view ─────────── */

function KineticText({
  text,
  as = "span",
  className = "",
  style,
  delay = 0,
  step = 40,
  by = "word",
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const reveal = () => {
      if (fired) return;
      fired = true;
      const items = el.querySelectorAll(
        by === "char" ? ".kt-char" : ".kt-word",
      );
      const dur = by === "char" ? 600 : 800;
      items.forEach((it, i) => {
        const d = delay + i * step;
        setTimeout(() => it.classList.add("in"), d);
        // Safety net: if the CSS transition is throttled (some preview sandboxes
        // pause rAF, leaving transitions stuck at the from value), force the
        // final state inline once the expected animation window has elapsed.
        // We also kill `transition` so the stalled interpolation releases.
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
    // IntersectionObserver — works for off-screen content.
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
    // Safety net: probe after a short tick, and again on scroll until fired.
    // IntersectionObserver fires unreliably in some sandboxed iframes — keep a
    // light scroll-position check as the floor.
    const tryReveal = () => {
      if (fired) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (r.top < vh * 0.92 && r.bottom > 0) reveal();
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

  const Tag = as;
  if (by === "char") {
    return (
      <Tag
        ref={ref}
        className={className}
        style={{ display: "inline-block", ...style }}
      >
        {text.split("").map((ch, i) => (
          <span key={i} className="kt-char">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </Tag>
    );
  }
  // Each word is its own inline-block; the SPACE between them lives as its own
  // text node so flow layout renders it correctly. (Adjacent inline-block spans
  // with no text node between them have no visible gap, even when a nbsp lives
  // inside one of the spans — kerning / line-fit can swallow it.)
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style }}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="kt-word">{w}</span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </Tag>
  );
}

/* expose to other scripts */
Object.assign(window, {
  useReveal,
  useStagger,
  useScrollProgress,
  MouseLayers,
  Header,
  Footer,
  ScrollProgress,
  KineticText,
  navItems,
});
