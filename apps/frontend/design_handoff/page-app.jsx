/* page-app.jsx — shared wrapper for About / Blog / Library
   Always uses Editorial (Variation B) style. No variation switcher. */

const { useEffect } = React;

const PAGE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  theme: "dark",
  accent: "#1F4E79",
  grain: true,
  light: true,
} /*EDITMODE-END*/;

const ACCENT_OPTIONS_PAGE = [
  {
    hex: "#1F4E79",
    okDark: "oklch(0.58 0.13 250)",
    okLight: "oklch(0.42 0.14 250)",
  },
  {
    hex: "#A6313D",
    okDark: "oklch(0.55 0.13 25)",
    okLight: "oklch(0.42 0.13 25)",
  },
  {
    hex: "#2E6B47",
    okDark: "oklch(0.58 0.10 155)",
    okLight: "oklch(0.42 0.10 155)",
  },
  {
    hex: "#B07C2A",
    okDark: "oklch(0.66 0.13 75)",
    okLight: "oklch(0.52 0.14 75)",
  },
];

function PageApp({ children }) {
  const [t, setTweak] = useTweaks(PAGE_TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme || "dark");
  }, [t.theme]);

  useEffect(() => {
    const chosen =
      ACCENT_OPTIONS_PAGE.find((a) => a.hex === t.accent) ||
      ACCENT_OPTIONS_PAGE[0];
    document.documentElement.style.setProperty(
      "--accent",
      t.theme === "light" ? chosen.okLight : chosen.okDark,
    );
  }, [t.accent, t.theme]);

  return (
    <>
      <MouseLayers grain={!!t.grain} light={!!t.light} />
      <ScrollProgress />
      <Header />

      <main className="page">{children}</main>

      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={t.theme}
            options={[
              { value: "dark", label: "Dark" },
              { value: "light", label: "Light" },
            ]}
            onChange={(v) => setTweak("theme", v)}
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor
            label="Color"
            value={t.accent}
            options={ACCENT_OPTIONS_PAGE.map((a) => a.hex)}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection label="Atmosphere">
          <TweakToggle
            label="Grain"
            value={!!t.grain}
            onChange={(v) => setTweak("grain", v)}
          />
          <TweakToggle
            label="Cursor light"
            value={!!t.light}
            onChange={(v) => setTweak("light", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

window.PageApp = PageApp;
