import type { ParsedPost } from "@mysite/shared";
import { useState } from "react";
import { importBlogData } from "../../app/importBlogData";
import "../../style.css";

const Blog = () => {
  const posts: ParsedPost[] = importBlogData().sort(
    (a, b) =>
      new Date(b.frontMatter.created_at).getTime() -
      new Date(a.frontMatter.created_at).getTime(),
  );

  // Collect all tags
  const allTags = Array.from(new Set(posts.flatMap((p) => p.frontMatter.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((p) => p.frontMatter.tags.includes(activeTag))
    : posts;

  return (
    <div>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "140px 40px 60px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          fol. 003 / Blog
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(56px, 8vw, 120px)",
            letterSpacing: "-0.022em",
            lineHeight: 1,
            margin: "0 0 20px",
          }}
        >
          Notebook.
        </h1>
        <p
          style={{ fontSize: 15, color: "var(--ink-mute)", margin: "0 0 40px" }}
        >
          日々の思考と学びの備忘録。
        </p>
        <div className="rule-draw in" />
      </section>

      {/* Tag filter (sticky) */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "color-mix(in oklch, var(--bg) 85%, transparent)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--rule-soft)",
          padding: "12px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid var(--rule)",
              borderRadius: 2,
              padding: "5px 12px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: activeTag === null ? "var(--ink)" : "transparent",
              color: activeTag === null ? "var(--bg)" : "var(--ink-mute)",
              transition: "none",
            }}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border: "1px solid var(--rule)",
                borderRadius: 2,
                padding: "5px 12px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                background: activeTag === tag ? "var(--ink)" : "transparent",
                color: activeTag === tag ? "var(--bg)" : "var(--ink-mute)",
                transition: "none",
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Post list */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 40px 120px",
          borderTop: "1px solid var(--rule)",
        }}
      >
        {filteredPosts.map((post, idx) => {
          const fm = post.frontMatter;
          const date = fm.created_at.slice(0, 10).replace(/-/g, ".");
          return (
            <a
              key={fm.slug}
              href={`/blogs/${fm.slug}`}
              className="blog-row"
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                gap: "0 24px",
                alignItems: "start",
                padding: "28px 0",
                borderBottom: "1px solid var(--rule)",
                textDecoration: "none",
                color: "var(--ink)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Index number */}
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 200,
                  fontSize: 44,
                  color: "var(--ink-quiet)",
                  lineHeight: 1,
                  paddingTop: 4,
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 8,
                  }}
                >
                  {fm.tags.map((t) => `#${t}`).join("  ")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(18px, 2.4vw, 30px)",
                    letterSpacing: "-0.01em",
                    margin: "0 0 8px",
                    lineHeight: 1.2,
                    color: "var(--ink)",
                  }}
                >
                  {fm.title}
                </h3>
              </div>

              {/* Date */}
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: "0.15em",
                  whiteSpace: "nowrap",
                  paddingTop: 4,
                }}
              >
                {date}
              </div>

              {/* Hover accent line */}
              <span
                className="blog-row-accent"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 1,
                  width: 0,
                  background: "var(--accent)",
                  transition: "width 600ms var(--ease)",
                }}
              />
            </a>
          );
        })}
        {filteredPosts.length === 0 && (
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-mute)",
              padding: "60px 0",
              textAlign: "center",
            }}
          >
            No posts found.
          </p>
        )}
      </section>

      <style>{`
        .blog-row:hover .blog-row-accent { width: 100% !important; }
        @media (max-width: 720px) {
          section { padding-left: 22px !important; padding-right: 22px !important; }
          .blog-row { grid-template-columns: 48px 1fr !important; }
          .blog-row > *:last-child { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Blog;
