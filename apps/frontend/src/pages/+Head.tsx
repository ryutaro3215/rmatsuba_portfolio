import favicon from "../assets/favicon.png";
export default function Head() {
  return (
    <>
      <link rel="icon" href={favicon} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* サイト全体のデフォルト OG / Twitter */}
      <meta property="og:site_name" content="rmatsuba.com" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="author" content="Ryutaro Matsuba" />

      <noscript>
        <style>{`
          .kt-word, .kt-char, .rv {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
          .rule-draw { transform: scaleX(1) !important; }
        `}</style>
      </noscript>
      <script
        // biome-ignore lint: This code is intentionally written in a way that it can set the theme before React hydration to prevent a flash of incorrect theme.
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored === 'light' || stored === 'dark'
                  ? stored
                  : (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            })();
          `,
        }}
      />
    </>
  );
}
