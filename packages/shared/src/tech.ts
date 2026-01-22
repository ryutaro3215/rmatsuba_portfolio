import { z } from "zod";

export const TechCategorySchema = z.enum([
  "Languages",
  "Frameworks / Libraries",
  "Infrastructure / Environments",
  "Tooling / Workflows",
]);

export const TechSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  category: TechCategorySchema,
  cover: z.string().min(1),
  url: z.url().optional(),
});

export type TechCategory = z.infer<typeof TechCategorySchema>;
export type Tech = z.infer<typeof TechSchema>;
