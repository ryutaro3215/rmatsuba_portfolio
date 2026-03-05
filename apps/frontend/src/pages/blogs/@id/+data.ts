import type { ParsedPost } from "@mysite/shared";
import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { importBlogData } from "../../../app/importBlogData";

export default function data(pageContext: PageContextServer) {
  const posts = importBlogData();
  const postFileName = pageContext.routeParams?.id;

  const currentPost: ParsedPost | undefined = posts.find(
    (post) => post.frontMatter.slug === postFileName,
  );

  if (!currentPost) {
    throw render(404, `Post with slug "${postFileName}" not found.`);
  }
  return currentPost;
}
