import type { Genre } from "@mysite/shared";

export const genreTheme: Record<Genre, { bgColor: string; textColor: string }> =
  {
    数学: {
      bgColor: "bg-blue-200 dark:bg-blue-800",
      textColor: "text-slate-900 dark:text-white",
    },
    物理学: {
      bgColor: "bg-sky-200 dark:bg-sky-800",
      textColor: "text-slate-900 dark:text-white",
    },
    化学: {
      bgColor: "bg-cyan-200 dark:bg-cyan-800",
      textColor: "text-slate-900 dark:text-white",
    },
    生物学: {
      bgColor: "bg-emerald-200 dark:bg-emerald-800",
      textColor: "text-slate-900 dark:text-white",
    },

    経済学: {
      bgColor: "bg-green-200 dark:bg-green-800",
      textColor: "text-slate-900 dark:text-white",
    },
    経営学: {
      bgColor: "bg-yellow-200 dark:bg-yellow-800",
      textColor: "text-slate-900 dark:text-white",
    },
    社会学: {
      bgColor: "bg-lime-200 dark:bg-lime-800",
      textColor: "text-slate-900 dark:text-white",
    },
    政治学: {
      bgColor: "bg-teal-200 dark:bg-teal-800",
      textColor: "text-slate-900 dark:text-white",
    },

    哲学: {
      bgColor: "bg-violet-200 dark:bg-violet-800",
      textColor: "text-slate-900 dark:text-white",
    },
    宗教学: {
      bgColor: "bg-fuchsia-200 dark:bg-fuchsia-800",
      textColor: "text-slate-900 dark:text-white",
    },
    歴史学: {
      bgColor: "bg-amber-200 dark:bg-amber-800",
      textColor: "text-slate-900 dark:text-white",
    },

    心理学: {
      bgColor: "bg-pink-200 dark:bg-pink-800",
      textColor: "text-slate-900 dark:text-white",
    },
    思考法: {
      bgColor: "bg-rose-200 dark:bg-rose-800",
      textColor: "text-slate-900 dark:text-white",
    },
    自己啓発: {
      bgColor: "bg-orange-200 dark:bg-orange-800",
      textColor: "text-slate-900 dark:text-white",
    },

    語学: {
      bgColor: "bg-red-200 dark:bg-red-800",
      textColor: "text-slate-900 dark:text-white",
    },
    デザイン: {
      bgColor: "bg-indigo-200 dark:bg-indigo-800",
      textColor: "text-slate-900 dark:text-white",
    },

    コンピュータサイエンス: {
      bgColor: "bg-indigo-200 dark:bg-indigo-800",
      textColor: "text-slate-900 dark:text-white",
    },
    プログラミング: {
      bgColor: "bg-purple-200 dark:bg-purple-800",
      textColor: "text-slate-900 dark:text-white",
    },

    その他: {
      bgColor: "bg-slate-200 dark:bg-slate-800",
      textColor: "text-slate-900 dark:text-white",
    },
  };
