import type { ParsedPost } from "@mysite/shared";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

export const DetailBlogCard = (data: ParsedPost) => {
  const fm = data.frontMatter;
  const body = data.body;

  return (
    <article className="mx-auto flex max-w-3xl flex-col items-center gap-8 pt-24 pb-16">
      <div className="flex w-full flex-col items-center gap-3">
        <p className="flex items-center justify-center text-6xl">{fm.emoji}</p>
        <h1 className="font-bold font-source-serif-4 text-2xl text-slate-900 tracking-tight sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
          {fm.title}
        </h1>
        <div className="flex items-center gap-3 text-slate-500 text-sm dark:text-slate-400">
          <p>{fm.created_at} に作成</p>
          {fm.updated_at !== fm.created_at && <p>{fm.updated_at} に更新</p>}
        </div>
        <div className="flex flex-wrap justify-center gap-1.5">
          {fm.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600 text-xs dark:bg-slate-800 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </div>
      <div className="prose dark:prose-invert w-full max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {body}
        </ReactMarkdown>
      </div>
    </article>
  );
};
