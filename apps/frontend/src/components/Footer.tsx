import { useEffect, useRef } from "react";
import { navItems } from "./Header";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      { threshold: 0.1 },
    );
    io.observe(el);
    const tryFire = () => {
      if (fired) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) fire();
    };
    const t1 = setTimeout(tryFire, 80);
    const onScroll = () => {
      tryFire();
      if (fired) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      clearTimeout(t1);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <footer className="site-footer">
      <div
        ref={ref}
        className="rv"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Top grid: big mark + nav/links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "end",
            paddingBottom: 56,
            borderBottom: "1px solid var(--rule-soft)",
          }}
        >
          {/* Left: tagline */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              Colophon · MMXXVI
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontWeight: 200,
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 0.95,
                margin: "20px 0 0",
                letterSpacing: "-0.015em",
              }}
            >
              <span style={{ color: "var(--accent)" }}>—</span> intelligere.
            </h2>
            <p
              style={{
                maxWidth: 520,
                marginTop: 22,
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--ink-mute)",
              }}
            >
              本ブログは、私自身の思考と学びを整理し可視化する場として綴られています。誰かの好奇心のためになれば幸いです。
            </p>
          </div>

          {/* Right: nav + correspondence */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
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
                {navItems.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="u-link"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        color: "var(--ink-mute)",
                        fontSize: 10,
                        marginRight: 8,
                      }}
                    >
                      {item.num}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  marginBottom: 14,
                }}
              >
                Correspondence
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <a
                  href="mailto:mrworks15@icloud.com"
                  className="u-link"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                  }}
                >
                  mrworks15@icloud.com
                </a>
                <a
                  href="https://github.com/ryutaro3215"
                  className="u-link"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                  }}
                >
                  github.com/ryutaro3215
                </a>
                <a
                  href="https://note.com/ma2ri_b2p"
                  className="u-link"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                  }}
                >
                  note.com/ma2ri_b2p
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom colophon row */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          <div>© MMXXVI · Ryutaro Matsuba · All rights reserved</div>
          <div>Set in Newsreader &amp; JetBrains Mono</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .site-footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
