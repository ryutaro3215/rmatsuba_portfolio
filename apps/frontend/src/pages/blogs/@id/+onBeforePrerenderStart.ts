import { importBlogData } from "../../../app/importBlogData";

export function onBeforePrerenderStart() {
  const posts = importBlogData();
  return posts.map((post) => `/blogs/${post.frontMatter.slug}`);
}
