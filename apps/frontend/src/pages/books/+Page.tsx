import {
  type Book,
  BookGenreSchema,
  BookGenres,
  type GenreSlug,
} from "@mysite/shared";
import { useState } from "react";
import { useData } from "vike-react/useData";
import { usePageContext } from "vike-react/usePageContext";
import { BookCard } from "../../components/BookCard";
import "../../style.css";

const Library = () => {
  const { books } = useData<{ books: Book[] }>();
  const { urlParsed } = usePageContext();
  const [selectedGenreSlugs, setSelectedGenreSlugs] = useState<string[]>(
    urlParsed.searchAll.genre || [],
  );

  const genreList = BookGenreSchema.options.map((label) => {
    const slug = (Object.keys(BookGenres) as GenreSlug[]).find(
      (key) => BookGenres[key] === label,
    );
    return { label, slug };
  });

  const toggleGenre = (slug: string) => {
    setSelectedGenreSlugs((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((g) => g !== slug)
        : [...prev, slug];
      const params = new URLSearchParams();
      for (const g of next) params.append("genre", g);
      const qs = params.toString();
      window.history.replaceState(
        {},
        "",
        qs ? `${urlParsed.pathname}?${qs}` : urlParsed.pathname,
      );
      return next;
    });
  };

  const filteredBooks =
    selectedGenreSlugs.length === 0
      ? books
      : books.filter((book) =>
          selectedGenreSlugs.some(
            (slug) => BookGenres[slug as GenreSlug] === book.genre,
          ),
        );

  const genreLabel =
    selectedGenreSlugs.length === 0
      ? "All"
      : selectedGenreSlugs.map((s) => BookGenres[s as GenreSlug]).join(", ");

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
          fol. 004 / Library
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(56px, 8vw, 120px)",
            letterSpacing: "-0.022em",
            lineHeight: 1,
            margin: "0 0 40px",
          }}
        >
          Bibliotheca.
        </h1>
        <div className="rule-draw in" />
      </section>

      {/* Genre filter (sticky) */}
      <div
        style={{
          position: "sticky",
          top: "var(--header-h)",
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
            overflowX: "auto",
          }}
        >
          <button
            type="button"
            onClick={() => {
              setSelectedGenreSlugs([]);
              window.history.replaceState({}, "", urlParsed.pathname);
            }}
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
              background:
                selectedGenreSlugs.length === 0 ? "var(--ink)" : "transparent",
              color:
                selectedGenreSlugs.length === 0
                  ? "var(--bg)"
                  : "var(--ink-mute)",
              transition: "none",
            }}
          >
            All
          </button>
          {genreList.map(({ label, slug }) => {
            if (!slug) return null;
            const isActive = selectedGenreSlugs.includes(slug);
            const count = books.filter((b) => b.genre === label).length;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => toggleGenre(slug)}
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
                  background: isActive ? "var(--ink)" : "transparent",
                  color: isActive ? "var(--bg)" : "var(--ink-mute)",
                  transition: "none",
                }}
              >
                {label}
                <span style={{ opacity: 0.55, marginLeft: 6, fontSize: 10 }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "20px 40px 12px",
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
        }}
      >
        {genreLabel} — {filteredBooks.length} volumes
      </div>

      {/* Book grid */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "8px 40px 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 16,
        }}
      >
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>

      <style>{`
        @media (max-width: 720px) {
          section { padding-left: 22px !important; padding-right: 22px !important; }
          div[style*="padding: 140px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
          div[style*="padding: 20px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
          div[style*="padding: 12px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </div>
  );
};

export default Library;
