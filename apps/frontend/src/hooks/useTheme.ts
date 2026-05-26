import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

let currentTheme: Theme = getInitialTheme();
const listeners = new Set<() => void>();

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  currentTheme = theme;
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  for (const listener of listeners) listener();
}

// モジュール読み込み時に初期テーマを適用
if (typeof window !== "undefined") {
  applyTheme(currentTheme);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return currentTheme;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark");
  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggleTheme } as const;
}
