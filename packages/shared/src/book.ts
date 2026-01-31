import { z } from "zod";

export const BookStatusSchema = z.enum(["unread", "reading", "read"]);
export const BookGenreSchema = z.enum([
  "数学",
  "経済学",
  "社会学",
  "政治学",
  "経営学",
  "哲学",
  "歴史学",
  "宗教学",
  "生物学",
  "物理学",
  "化学",
  "心理学",
  "語学",
  "思考法",
  "自己啓発",
  "デザイン",
  "コンピュータサイエンス",
  "プログラミング",
  "その他",
]);
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
