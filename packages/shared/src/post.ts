import z from "zod";

export const ArgsSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
});

export const FrontMatterSchema = z.object({
  title: z.string().min(1),
  date: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  draft: z.boolean(),
  slug: z.string(),
  tags: z.array(z.string()),
  emoji: z.string(),
});

export type Args = z.infer<typeof ArgsSchema>;
export type FrontMatter = z.infer<typeof FrontMatterSchema>;
export type ParsedPost = {
  filePath: string;
  frontMatter: FrontMatter;
  body: string;
};
