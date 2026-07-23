import type { ParsedPost } from "@mysite/shared";
import { useConfig } from "vike-react/useConfig";
import { useData } from "vike-react/useData";
import { DetailBlogCard } from "../../../components/DetailBlogCard";
import { toDescription } from "../../../lib/markdown";
import "../../../style.css";

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
