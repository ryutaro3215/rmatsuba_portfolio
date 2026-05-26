import type { Genre } from "@mysite/shared";

export const genreTheme: Record<
  Genre,
  { bgColor: string; textColor: string; coverBg: string; spineColor: string }
> = {
  数学: {
    bgColor: "bg-blue-200 dark:bg-blue-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1e3a5f",
    spineColor: "#2563eb",
  },
  物理学: {
    bgColor: "bg-sky-200 dark:bg-sky-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#0c4a6e",
    spineColor: "#0284c7",
  },
  化学: {
    bgColor: "bg-cyan-200 dark:bg-cyan-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#164e63",
    spineColor: "#0891b2",
  },
  生物学: {
    bgColor: "bg-emerald-200 dark:bg-emerald-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#14532d",
    spineColor: "#059669",
  },
  経済学: {
    bgColor: "bg-green-200 dark:bg-green-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1a3c2e",
    spineColor: "#16a34a",
  },
  経営学: {
    bgColor: "bg-yellow-200 dark:bg-yellow-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#3d2a04",
    spineColor: "#ca8a04",
  },
  社会学: {
    bgColor: "bg-lime-200 dark:bg-lime-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1e3a0a",
    spineColor: "#65a30d",
  },
  政治学: {
    bgColor: "bg-teal-200 dark:bg-teal-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#0d3d38",
    spineColor: "#0d9488",
  },
  哲学: {
    bgColor: "bg-violet-200 dark:bg-violet-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#2e1065",
    spineColor: "#7c3aed",
  },
  宗教学: {
    bgColor: "bg-fuchsia-200 dark:bg-fuchsia-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#4a044e",
    spineColor: "#a21caf",
  },
  歴史学: {
    bgColor: "bg-amber-200 dark:bg-amber-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#451a03",
    spineColor: "#b45309",
  },
  心理学: {
    bgColor: "bg-pink-200 dark:bg-pink-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#500724",
    spineColor: "#db2777",
  },
  思考法: {
    bgColor: "bg-rose-200 dark:bg-rose-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#4c0519",
    spineColor: "#e11d48",
  },
  自己啓発: {
    bgColor: "bg-orange-200 dark:bg-orange-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#431407",
    spineColor: "#ea580c",
  },
  語学: {
    bgColor: "bg-red-200 dark:bg-red-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#450a0a",
    spineColor: "#dc2626",
  },
  デザイン: {
    bgColor: "bg-indigo-200 dark:bg-indigo-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1e1b4b",
    spineColor: "#4f46e5",
  },
  コンピュータサイエンス: {
    bgColor: "bg-indigo-200 dark:bg-indigo-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1e1b4b",
    spineColor: "#4f46e5",
  },
  プログラミング: {
    bgColor: "bg-purple-200 dark:bg-purple-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#2e1065",
    spineColor: "#9333ea",
  },
  その他: {
    bgColor: "bg-slate-200 dark:bg-slate-800",
    textColor: "text-slate-900 dark:text-white",
    coverBg: "#1e293b",
    spineColor: "#64748b",
  },
};
