import { FrontMatterSchema, type ParsedPost } from "@mysite/shared";
import { parse as parseYaml } from "yaml";

type RawMdModule = Record<string, string>;

const blogPostModule = import.meta.glob("../../contents/posts/*.md", {
  eager: true,
  as: "raw",
});

const extractFrontMatter = (md: string): { yamlText: string; body: string } => {
  // Remove BOM if present
  const s = md.replace(/^\uFEFF/, "");

  if (!s.startsWith("---\n")) {
    throw new Error("No front matter found (file does not start with '---').");
  }

  const lines = s.split("\n");
  let endIndex = -1;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line === "---" || line === "...") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    throw new Error(
      "FrontMatter start '---' found but no closing '---' or '...' found.",
    );
  }

  const yamlText = lines.slice(1, endIndex).join("\n");
  const body = lines.slice(endIndex + 1).join("\n");

  return { yamlText, body };
};

export const importBlogData = (): ParsedPost[] => {
  const modules = blogPostModule as RawMdModule;
  const posts: ParsedPost[] = [];
  const errors: { file: string; message: string }[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    try {
      const { yamlText, body } = extractFrontMatter(raw);
      const data = parseYaml(yamlText);
      const fm = FrontMatterSchema.parse(data);
      posts.push({
        filePath: path,
        frontMatter: fm,
        body,
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      errors.push({ file: path, message: msg });
    }
  }

  if (errors.length > 0) {
    const detail = errors.map((e) => `- ${e.file}: ${e.message}`).join("\n");
    throw new Error(`Errors occurred while importing blog data:\n${detail}`);
  }
  return posts;
};
