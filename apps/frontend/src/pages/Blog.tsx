import type { ParsedPost } from "@mysite/shared";
import { importBlogData } from "../app/importBlogData";
import BlogBgi from "../assets/Blog-bgi.png";
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
      <div className="relative h-screen w-full">
        <img
          src={BlogBgi}
          alt="Home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="felx w-full flex-col items-center justify-center">
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[3rem] text-white sm:text-[6rem] md:text-[10rem] lg:text-[18rem]">
              Blog
            </p>
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[1rem] text-white sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              日々の思考と勉強の備忘録
            </p>
          </div>
        </div>
      </div>
      <section className="mx-auto mt-10 mb-10 grid max-w-[80%] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {descendingPosts.map((post) => {
          return <PostCard key={post.frontMatter.slug} {...post} />;
        })}
      </section>
    </div>
  );
};
