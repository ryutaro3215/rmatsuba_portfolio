import favicon from "../assets/favicon.png";
export default function Head() {
  return (
    <>
      <link rel="icon" href={favicon} />
      <script
        // biome-ignore lint: This code is intentionally written in a way that it can set the theme before React hydration to prevent a flash of incorrect theme.
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && supportDarkMode)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
        }}
      />
    </>
  );
}
