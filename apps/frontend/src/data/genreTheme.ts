import type { Genre } from "@mysite/shared";

export const genreTheme: Record<Genre, { bgColor: string; textColor: string }> =
  {
    数学: { bgColor: "bg-blue-200", textColor: "text-black" },
    物理学: { bgColor: "bg-sky-200", textColor: "text-black" },
    化学: { bgColor: "bg-cyan-200", textColor: "text-black" },
    生物学: { bgColor: "bg-emerald-200", textColor: "text-black" },

    経済学: { bgColor: "bg-green-200", textColor: "text-black" },
    経営学: { bgColor: "bg-yellow-200", textColor: "text-black" },
    社会学: { bgColor: "bg-lime-200", textColor: "text-black" },
    政治学: { bgColor: "bg-teal-200", textColor: "text-black" },

    哲学: { bgColor: "bg-violet-200", textColor: "text-black" },
    宗教学: { bgColor: "bg-fuchsia-200", textColor: "text-black" },
    歴史学: { bgColor: "bg-amber-200", textColor: "text-black" },

    心理学: { bgColor: "bg-pink-200", textColor: "text-black" },
    思考法: { bgColor: "bg-rose-200", textColor: "text-black" },
    自己啓発: { bgColor: "bg-orange-200", textColor: "text-black" },

    語学: { bgColor: "bg-red-200", textColor: "text-black" },
    デザイン: { bgColor: "bg-indigo-200", textColor: "text-black" },

    コンピュータサイエンス: {
      bgColor: "bg-indigo-200",
      textColor: "text-black",
    },
    プログラミング: {
      bgColor: "bg-purple-200",
      textColor: "text-black",
    },

    その他: { bgColor: "bg-gray-200", textColor: "text-black" },
  };
