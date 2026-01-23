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
    <article className="mb-10 flex w-full flex-col items-center gap-10 pt-20">
      <div className="flex w-full flex-col items-center gap-2">
        <p className="mb-10 flex items-center justify-center text-6xl">
          {fm.emoji}
        </p>
        <h1 className="mb-5 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
          {fm.title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {fm.created_at} に作成
        </p>
        {fm.updated_at !== fm.created_at && <p>`{fm.updated_at} に更新`</p>}
      </div>
      <div className="prose w-full max-w-none rounded-md border border-gray-400 px-5 py-5 md:px-10 md:py-10 lg:max-w-[55%] 2xl:px-15 2xl:py-15">
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
