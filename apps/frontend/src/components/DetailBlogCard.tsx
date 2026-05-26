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
import profileImg from "../assets/profile.jpg";
import { useReadingProgress } from "../hooks/useReadingProgress";

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
      setContent(toJsxRuntime(tree, { Fragment, jsx, jsxs }) as JSX.Element);
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
  const progress = useReadingProgress();
  const markdownContent = useMarkdown(body);

  const dateStr = fm.created_at.slice(0, 10).replace(/-/g, ".");
  const updatedStr = fm.updated_at.slice(0, 10).replace(/-/g, ".");

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="reading-bar"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "120px 40px 160px",
        }}
      >
        {/* Back link */}
        <a
          href="/blogs"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
            display: "inline-block",
            marginBottom: 60,
          }}
          className="u-link"
        >
          ← Blog
        </a>

        {/* Article header */}
        <header
          style={{
            borderBottom: "1px solid var(--rule)",
            paddingBottom: 48,
            marginBottom: 48,
          }}
        >
          {/* Tags */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 20,
            }}
          >
            {fm.tags.map((t) => `#${t}`).join("  ")}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 200,
              fontSize: "clamp(32px, 5.2vw, 72px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "0 0 24px",
            }}
          >
            {fm.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink-mute)",
              letterSpacing: "0.15em",
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <span>{dateStr}</span>
            {fm.updated_at !== fm.created_at && <span>更新: {updatedStr}</span>}
          </div>
        </header>

        {/* Article body */}
        <div className="article-grid">
          {/* Main content */}
          <div>
            <div className="prose">{markdownContent}</div>
          </div>

          {/* Sidebar (≥1140px) */}
          <aside className="article-aside">
            {/* Article info card */}
            <div
              style={{
                border: "1px solid var(--rule)",
                padding: "20px 22px",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  marginBottom: 16,
                }}
              >
                Article info
              </div>
              <dl style={{ margin: 0 }}>
                {[
                  ["Date", dateStr],
                  ["Filed", fm.tags[0] || "—"],
                ].map(([dt, dd]) => (
                  <div key={dt as string} style={{ marginBottom: 12 }}>
                    <dt
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ink-mute)",
                        marginBottom: 2,
                      }}
                    >
                      {dt}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                      }}
                    >
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Author card */}
            <div
              style={{
                border: "1px solid var(--rule)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  marginBottom: 16,
                }}
              >
                Author
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <img
                  src={profileImg}
                  alt="author"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    objectFit: "cover",
                    filter: "grayscale(0.5)",
                    border: "1px solid var(--rule)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: 12,
                  }}
                >
                  Ryutaro Matsuba
                </span>
              </div>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: "var(--ink-mute)",
                  margin: 0,
                }}
              >
                東京理科大学経営学部。思考と学びの記録。
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          div[style*="padding: 120px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </>
  );
};
