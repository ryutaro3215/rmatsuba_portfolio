import type { ParsedPost } from "@mysite/shared";
import { useParams } from "react-router";
import { importBlogData } from "../app/importBlogData";
import { DetailBlogCard } from "../components/DetailBlogCard";

export const BlogDetail = () => {
  const slugParam = useParams().slug;
  const posts: ParsedPost[] = importBlogData();
  const currentPost: ParsedPost | undefined = posts.find(
    (post) => post.frontMatter.slug === slugParam,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pt-24">
      {currentPost && <DetailBlogCard {...currentPost} />}
    </div>
  );
};
