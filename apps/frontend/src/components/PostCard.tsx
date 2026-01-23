import type { ParsedPost } from "@mysite/shared";
import { Link } from "react-router";

export const PostCard = (data: ParsedPost) => {
  const fm = data.frontMatter;
  const yymmdd = fm.created_at.slice(0, 10).replace(/-/g, "/");
  return (
    <Link to={`/blog/${fm.slug}`} className="w-full">
      <article className="flex w-full flex-row gap-2 rounded-md border border-gray-400 p-2 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-200 sm:gap-4">
        <p className="flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl">
          {fm.emoji}
        </p>
        <div className="flex min-w-0 flex-col gap-1 p-2">
          <h3 className="line-clamp-2 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            {fm.title}
          </h3>
          <ul className="relative flex gap-1 overflow-x-auto overflow-y-hidden whitespace-nowrap">
            {fm.tags.map((tag) => (
              <li
                key={tag}
                className="shrink-0 rounded-full border border-b px-1.5 py-0.5 font-light text-xs sm:text-sm lg:text-base"
              >
                #{tag}
              </li>
            ))}
            <div className="pointer-events-none sticky top-0 right-0 h-full w-6 bg-gradient-to-l from-white" />
          </ul>
          <p className="w-full text-xs sm:text-sm md:text-base">{yymmdd}</p>
        </div>
      </article>
    </Link>
  );
};
