import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え"
      }
      style={{
        background: "none",
        border: "none",
        color: "inherit",
        cursor: "pointer",
        fontFamily: "var(--mono)",
        fontSize: 12,
        padding: "4px 6px",
        opacity: 0.7,
        letterSpacing: "0.1em",
      }}
    >
      {theme === "dark" ? "◑" : "◐"}
    </button>
  );
}
