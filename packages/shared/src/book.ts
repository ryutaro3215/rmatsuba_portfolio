import { z } from "zod";

export type BookId = number;
export type BookStatus = "unread" | "reading" | "finished";

export type Book = {
  id: BookId;
  title: string;
  author: string;
  cover: string;
  genre: Genre;
  tags?: string[];
  status: BookStatus;
  rating: number;
  url?: string;
};

export const BookStatusSchema = z.enum(["unread", "reading", "completed"]);
export const GenreSchema = z.enum([
  "数学",
  "経済学",
  "経営学",
  "語学",
  "プログラミング",
  "その他",
]);
export const RatingSchema = z.number().min(0).max(5);
export const BookSchema = z.object({
  id: z.number().int().nonnegative(),
  title: z.string().min(1),
  auther: z.string().min(1),
  cover: z.string().min(1),
  genre: GenreSchema,
  tags: z.array(z.string().min(1)).optional(),
  status: BookStatusSchema,
  rating: RatingSchema,
  url: z.url().optional(),
});

export const BooksSchema = z.array(BookSchema);
export type BookFromSchema = z.infer<typeof BookSchema>;
export type Genre = z.infer<typeof GenreSchema>;
