import { useEffect, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { to: "/", label: "Home", num: "I" },
  { to: "/about", label: "About", num: "II" },
  { to: "/blogs", label: "Blog", num: "III" },
  { to: "/books", label: "Library", num: "IV" },
  { to: "/bookstores", label: "Bookstores", num: "V" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pageContext = usePageContext();
  const currentPath = pageContext.urlParsed.pathname;

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

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <>
      {/* biome-ignore lint/nursery/useSortedClasses: custom CSS classes, not Tailwind */}
      <header className={`site-header${scrolled ? " condensed" : ""}`}>
        {/* Logo */}
        <a
          href="/"
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
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              opacity: 0.55,
            }}
          >
            — Notebook
          </span>
        </a>

        {/* Desktop nav (sm+) */}
        <nav
          className="header-desktop-nav"
          style={{ display: "none", alignItems: "baseline", gap: 28 }}
        >
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="u-link"
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: 6,
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                opacity: isActive(item.to) ? 1 : 0.65,
                fontWeight: isActive(item.to) ? 600 : 400,
              }}
            >
              <span style={{ opacity: 0.5, fontSize: 9 }}>{item.num}</span>
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div
          className="header-mobile-controls"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "1px solid currentColor",
              color: "inherit",
              padding: "6px 10px",
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
              cursor: "pointer",
            }}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        role="dialog"
        aria-modal="true"
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
              color: "var(--ink)",
            }}
          >
            R. Matsuba
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "1px solid var(--rule)",
              color: "var(--ink)",
              padding: "6px 10px",
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
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
          {navItems.map((item, i) => (
            <a
              key={item.to}
              href={item.to}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 44,
                fontWeight: 300,
                color: "var(--ink)",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms var(--ease) ${i * 80 + 200}ms, transform 600ms var(--ease) ${i * 80 + 200}ms`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  opacity: 0.5,
                  letterSpacing: "0.2em",
                }}
              >
                {item.num}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
        <div
          style={{
            marginTop: "auto",
            fontFamily: "var(--mono)",
            color: "var(--ink-mute)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          mrworks15@icloud.com
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .header-desktop-nav { display: flex !important; }
          .header-mobile-controls { display: none !important; }
        }
      `}</style>
    </>
  );
}
