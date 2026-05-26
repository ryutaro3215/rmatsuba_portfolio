import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { getBookCoverUrl } from "../app/importImages";

const DetailBookCard = (data: Book) => {
  const coverUrl = getBookCoverUrl(data.cover);

  const genreSlug = (Object.keys(BookGenres) as GenreSlug[]).find(
    (key) => BookGenres[key] === data.genre,
  );

  return (
    <div
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "120px 40px 160px",
      }}
    >
      {/* Back link */}
      <a
        href="/books"
        className="u-link"
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          display: "inline-block",
          marginBottom: 60,
        }}
      >
        ← Library
      </a>

      {/* Hero: cover + metadata */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 64,
          paddingBottom: 80,
          borderBottom: "1px solid var(--rule)",
          marginBottom: 80,
        }}
        className="book-detail-hero"
      >
        {/* Cover */}
        <div>
          <div
            style={{
              aspectRatio: "2/3",
              background: "var(--rule)",
              position: "relative",
              boxShadow: "6px 6px 24px rgba(0,0,0,0.5)",
              border: "1px solid var(--rule)",
              overflow: "hidden",
            }}
          >
            {data.cover && (
              <img
                src={coverUrl}
                alt={data.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            {data.genre}
          </div>
        </div>

        {/* Metadata */}
        <div>
          {/* Genre kicker */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {genreSlug ? (
              <a
                href={`/books?genre=${genreSlug}`}
                style={{ color: "inherit" }}
              >
                {data.genre}
              </a>
            ) : (
              data.genre
            )}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 200,
              fontSize: "clamp(40px, 5.6vw, 76px)",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              margin: "0 0 16px",
            }}
          >
            {data.title}
          </h1>

          {/* Metadata DL */}
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "16px 24px",
              margin: "32px 0",
            }}
          >
            {[
              ["著者", data.author],
              ["ジャンル", data.genre],
              [
                "ステータス",
                data.status === "read"
                  ? "読了"
                  : data.status === "reading"
                    ? "読書中"
                    : "未読",
              ],
            ].map(([dt, dd]) => (
              <div key={dt} style={{ display: "contents" }}>
                <dt
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {dt}
                </dt>
                <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                  {dd}
                </dd>
              </div>
            ))}
            {data.tags && data.tags.length > 0 && (
              <div style={{ display: "contents" }}>
                <dt
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Tags
                </dt>
                <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                  {data.tags.map((t) => `#${t}`).join("  ")}
                </dd>
              </div>
            )}
          </dl>

          {/* Rating dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background:
                    n <= (data.rating ?? 0) ? "var(--accent)" : "var(--rule)",
                }}
              />
            ))}
          </div>

          {/* External link */}
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link"
              style={{
                display: "inline-block",
                marginTop: 32,
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              詳細を見る →
            </a>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .book-detail-hero { grid-template-columns: 1fr !important; gap: 40px !important; }
          div[style*="padding: 120px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </div>
  );
};

export default DetailBookCard;
