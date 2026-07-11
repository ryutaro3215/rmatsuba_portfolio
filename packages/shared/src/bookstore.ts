import { z } from "zod";

export const BookstoreTypes = {
  new: "新本屋",
  used: "古本屋",
} as const;

export const BookstoreTypeSchema = z.enum(
  Object.values(BookstoreTypes) as [string, ...string[]],
);

export type BookstoreTypeSlug = keyof typeof BookstoreTypes;

export const BookstoreRatingSchema = z.number().min(1).max(5);

export const BookstoreSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  address: z.string().min(1),
  prefecture: z.string().min(1),
  nearestStation: z.string().min(1),
  type: BookstoreTypeSchema,
  features: z.string().min(1),
  rating: BookstoreRatingSchema,
  images: z
    .array(z.object({ url: z.string() }))
    .min(1)
    .max(5),
  mapUrl: z.string(),
});

export type Bookstore = z.infer<typeof BookstoreSchema>;
export const BookstoresSchema = z.array(BookstoreSchema);
