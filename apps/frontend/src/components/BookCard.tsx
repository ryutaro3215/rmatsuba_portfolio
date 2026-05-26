import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { getBookCoverUrl } from "../app/importImages";

export const BookCard = (data: Book) => {
  const coverUrl = data.cover ? getBookCoverUrl(data.cover) : null;

  const genreSlug = (Object.keys(BookGenres) as GenreSlug[]).find(
    (key) => BookGenres[key] === data.genre,
  );

  const handleGenreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (genreSlug) window.location.href = `/books?genre=${genreSlug}`;
  };

  return (
    <a
      href={`/books/${data.id}`}
      className="book-card-link"
      style={{ display: "block" }}
    >
      <article
        style={{
          border: "1px solid var(--rule)",
          transition:
            "transform 400ms var(--ease), border-color 400ms var(--ease)",
          cursor: "pointer",
        }}
      >
        {/* Cover */}
        <div
          style={{
            aspectRatio: "2/3",
            background: "var(--rule)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {coverUrl && (
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

        {/* Metadata */}
        <div style={{ padding: "10px 12px 12px" }}>
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: 11,
              lineHeight: 1.35,
              marginBottom: 4,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ink-mute)",
            }}
          >
            {data.author}
          </div>
          {data.genre && (
            <button
              type="button"
              onClick={handleGenreClick}
              style={{
                marginTop: 6,
                fontFamily: "var(--mono)",
                fontSize: 9,
                letterSpacing: "0.1em",
                color: "var(--ink-mute)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              # {data.genre}
            </button>
          )}
        </div>
      </article>

      <style>{`
        .book-card-link:hover article {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
        }
      `}</style>
    </a>
  );
};
