import type { ParsedPost } from "@mysite/shared";
import { useConfig } from "vike-react/useConfig";
import { useData } from "vike-react/useData";
import { DetailBlogCard } from "../../../components/DetailBlogCard";
import "../../../style.css";

/** マークダウン記法を除去してプレーンテキストに変換 */
function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/\n+/g, " ")
    .trim();
}

function toDescription(body: string, maxLen = 160): string {
  const text = stripMarkdown(body);
  return text.length > maxLen ? `${text.slice(0, maxLen).trimEnd()}…` : text;
}

const BlogDetail = () => {
  const post = useData<ParsedPost>();
  const config = useConfig();

  if (!post) return null;

  const { frontMatter: fm, body } = post;
  const description = toDescription(body);

  config({
    title: `${fm.title} | rmatsuba.com`,
    description,
  });

  return (
    <div>
      <DetailBlogCard {...post} />
    </div>
  );
};

export default BlogDetail;
