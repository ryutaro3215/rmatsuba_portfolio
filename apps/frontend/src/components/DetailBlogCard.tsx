import type { ParsedPost } from "@mysite/shared";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { type JSX, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import rehypeStarryNight from "rehype-starry-night";
import remarkCodeTitles from "remark-flexible-code-titles";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown.css";
import { useTheme } from "../hooks/useTheme";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkAlert)
  .use(remarkCodeTitles, {
    titleTagName: "span",
    containerClassName: "remark-code-container",
    titleClassName: "remark-code-title",
  })
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStarryNight);

function useMarkdown(body: string): JSX.Element | null {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    let cancelled = false;
    processor.run(processor.parse(body)).then((tree) => {
      if (cancelled) return;
      setContent(
        toJsxRuntime(tree, {
          Fragment,
          jsx,
          jsxs,
        }) as JSX.Element,
      );
    });
    return () => {
      cancelled = true;
    };
  }, [body]);

  return content;
}

export const DetailBlogCard = (data: ParsedPost) => {
  const fm = data.frontMatter;
  const body = data.body;
  const { theme } = useTheme();
  const markdownContent = useMarkdown(body);

  return (
    <article className="mx-auto flex max-w-3xl flex-col items-center gap-8 pt-24 pb-16">
      <div className="flex w-full flex-col items-center gap-3">
        <p className="reveal-scale revealed flex items-center justify-center text-6xl">
          {fm.emoji}
        </p>
        <h1 className="reveal-up revealed reveal-delay-100 font-bold font-source-serif-4 text-2xl text-slate-900 tracking-tight sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
          {fm.title}
        </h1>
        <div className="reveal-up revealed reveal-delay-200 flex items-center gap-3 text-slate-500 text-sm dark:text-slate-400">
          <p>{fm.created_at} に作成</p>
          {fm.updated_at !== fm.created_at && <p>{fm.updated_at} に更新</p>}
        </div>
        <div className="reveal-up revealed reveal-delay-200 flex flex-wrap justify-center gap-1.5">
          {fm.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600 text-xs dark:bg-slate-800 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="reveal-divider revealed reveal-delay-300 mt-2 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </div>
      <div
        className="reveal-up revealed reveal-delay-300 markdown-body w-full max-w-none p-10"
        data-color-mode={theme}
      >
        {markdownContent}
      </div>
    </article>
  );
};
