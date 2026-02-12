import type { ParsedPost } from "@mysite/shared";
import { Link } from "react-router";

export const PostCard = (data: ParsedPost) => {
  const fm = data.frontMatter;
  const yymmdd = fm.created_at.slice(0, 10).replace(/-/g, "/");
  return (
    <Link to={`/blog/${fm.slug}`} className="h-full">
      <article className="flex h-full flex-row gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-slate-300 hover:shadow-lg sm:gap-4 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
        <p className="flex shrink-0 items-center justify-center text-5xl sm:text-6xl lg:text-7xl">
          {fm.emoji}
        </p>
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="line-clamp-2 font-bold text-slate-900 text-sm leading-snug sm:text-base dark:text-white">
            {fm.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {fm.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600 text-xs dark:bg-slate-800 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="mt-auto text-slate-500 text-xs dark:text-slate-500">
            {yymmdd}
          </p>
        </div>
      </article>
    </Link>
  );
};
