import { z } from "zod";

export const BookStatusSchema = z.enum(["unread", "reading", "read"]);
export const BookGenres = {
  Mathematics: "数学",
  Economics: "経済学",
  Sociology: "社会学",
  PoliticalScience: "政治学",
  BusinessAdministration: "経営学",
  Philosophy: "哲学",
  History: "歴史学",
  ReligiousStudies: "宗教学",
  Biology: "生物学",
  Physics: "物理学",
  Chemistry: "化学",
  Psychology: "心理学",
  Linguistics: "語学",
  ThinkingMethods: "思考法",
  SelfImprovement: "自己啓発",
  Design: "デザイン",
  ComputerScience: "コンピュータサイエンス",
  Programming: "プログラミング",
  Others: "その他",
} as const;

export const BookGenreSchema = z.enum(
  Object.values(BookGenres) as [string, ...string[]],
);

export const RatingSchema = z.number().min(0).max(5);
export const BookSchema = z.object({
  id: z.number().int().nonnegative(),
  title: z.string().min(1),
  author: z.string().min(1),
  cover: z.string().min(1),
  genre: BookGenreSchema,
  tags: z.array(z.string().min(1)).optional(),
  status: BookStatusSchema,
  rating: RatingSchema,
  url: z.url().optional(),
});

export type GenreOption = { value: Genre; label: string };
export type Book = z.infer<typeof BookSchema>;
export const BooksSchema = z.array(BookSchema);
export type Genre = z.infer<typeof BookGenreSchema>;
export type GenreSlug = keyof typeof BookGenres;
