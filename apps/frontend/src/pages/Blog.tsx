import type { ParsedPost } from "@mysite/shared";
import { importBlogData } from "../app/importBlogData";
import { PostCard } from "../components/PostCard";

export const Blog = () => {
  const posts: ParsedPost[] = importBlogData();
  const descendingPosts = posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.created_at);
    const dateB = new Date(b.frontMatter.created_at);
    return dateB.getTime() - dateA.getTime();
  });
  return (
    <div className="mx-auto w-full">
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <h1 className="font-bold font-source-serif-4 text-4xl text-slate-900 tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
          Blog
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed dark:text-slate-400">
          日々の思考と勉強の備忘録
        </p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {descendingPosts.map((post) => {
            return <PostCard key={post.frontMatter.slug} {...post} />;
          })}
        </div>
      </section>
    </div>
  );
};
