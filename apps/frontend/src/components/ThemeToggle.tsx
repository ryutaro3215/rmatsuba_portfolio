import { IoMdMoon, IoMdSunny } from "react-icons/io";
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
      className="rounded-full p-2 text-2xl transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      {theme === "dark" ? <IoMdSunny /> : <IoMdMoon />}
    </button>
  );
}
