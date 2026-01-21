import type { Genre } from "@mysite/shared";

export const genreTheme: Record<Genre, { bgColor: string; textColor: string }> =
  {
    数学: { bgColor: "bg-blue-200", textColor: "text-black" },
    経済学: { bgColor: "bg-green-200", textColor: "text-black" },
    経営学: { bgColor: "bg-yellow-200", textColor: "text-black" },
    語学: { bgColor: "bg-red-200", textColor: "text-black" },
    プログラミング: { bgColor: "bg-purple-200", textColor: "text-black" },
    その他: { bgColor: "bg-gray-200", textColor: "text-black" },
  };
