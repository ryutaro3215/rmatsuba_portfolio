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
      className="rounded-full p-2 text-2xl transition-all duration-200 hover:rotate-12 hover:bg-slate-200 active:scale-90 dark:hover:bg-slate-700"
    >
      {theme === "dark" ? <IoMdSunny /> : <IoMdMoon />}
    </button>
  );
}
