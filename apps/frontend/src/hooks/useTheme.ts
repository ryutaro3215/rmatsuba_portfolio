import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

let currentTheme: Theme = getInitialTheme();
const listeners = new Set<() => void>();

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  currentTheme = theme;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
  for (const listener of listeners) listener();
}

// モジュール読み込み時に初期テーマを適用
applyTheme(currentTheme);

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return currentTheme;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot);
  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggleTheme } as const;
}
