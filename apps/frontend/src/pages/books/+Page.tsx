import {
  type Book,
  BookGenreSchema,
  BookGenres,
  type GenreSlug,
} from "@mysite/shared";
import { useCallback, useEffect, useRef, useState } from "react";
import { useData } from "vike-react/useData";
import { usePageContext } from "vike-react/usePageContext";
import { BookCard } from "../../components/BookCard";
import { useStaggerChildren } from "../../hooks/useStaggerChildren";
import "../../style.css";

const Library = () => {
  const { books } = useData<{ books: Book[] }>();
  const { urlParsed } = usePageContext();
  // ジャンルフィルタはクライアントサイドのみで管理（Vikeのnavigate()を使うとdata loaderが再実行されるため）
  const [selectedGenreSlugs, setSelectedGenreSlugs] = useState<string[]>(
    urlParsed.searchAll.genre || [],
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const genreList = BookGenreSchema.options.map((label) => {
    const slug = (Object.keys(BookGenres) as GenreSlug[]).find(
      (key) => BookGenres[key] === label,
    );
    return { label, slug };
  });

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll]);

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const toggleGenre = (slug: string) => {
    setSelectedGenreSlugs((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((g) => g !== slug)
        : [...prev, slug];

      // URLをVike navigation無しで更新（data loader再実行を防ぐ）
      const newParams = new URLSearchParams();
      for (const genre of next) {
        newParams.append("genre", genre);
      }
      const queryString = newParams.toString();
      const newUrl = queryString
        ? `${urlParsed.pathname}?${queryString}`
        : urlParsed.pathname;
      window.history.replaceState({}, "", newUrl);

      return next;
    });
  };

  const filteredBooks =
    selectedGenreSlugs.length === 0
      ? books
      : books.filter((book) => {
          return selectedGenreSlugs.some(
            (slug) => BookGenres[slug as GenreSlug] === book.genre,
          );
        });

  const genreKey = selectedGenreSlugs.join(",");
  const gridRef = useStaggerChildren<HTMLElement>({
    staggerDelay: 40,
  });

  return (
    <div className="mx-auto w-full">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-8 sm:pt-40">
        <h1 className="reveal-up revealed font-bold font-source-serif-4 text-4xl text-slate-900 tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
          Library
        </h1>
        <p className="reveal-up revealed reveal-delay-100 mt-3 text-base text-slate-600 leading-relaxed dark:text-slate-400">
          読んだ本の記録
        </p>
      </section>

      <div className="sticky top-[64px] z-10 bg-white/80 py-4 backdrop-blur-md dark:bg-slate-900/80">
        <div className="group relative mx-auto max-w-7xl px-6">
          <div
            className={`pointer-events-none absolute top-0 bottom-0 left-6 z-20 flex items-center transition-opacity duration-300 ${showLeftArrow ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
            <button
              type="button"
              onClick={() => scrollBy(-200)}
              className="pointer-events-auto relative ml-1 rounded-full border border-slate-200 bg-white/90 p-1 shadow-md transition-transform hover:scale-110 dark:border-slate-700 dark:bg-slate-800"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600 dark:text-slate-400"
              >
                <title>Previous</title>
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div
            className={`pointer-events-none absolute top-0 right-6 bottom-0 z-20 flex items-center transition-opacity duration-300 ${showRightArrow ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />
            <button
              type="button"
              onClick={() => scrollBy(200)}
              className="pointer-events-auto relative mr-1 rounded-full border border-slate-200 bg-white/90 p-1 shadow-md transition-transform hover:scale-110 dark:border-slate-700 dark:bg-slate-800"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600 dark:text-slate-400"
              >
                <title>Next</title>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="no-scrollbar custom-scrollbar flex flex-nowrap gap-2 overflow-x-auto scroll-smooth pb-2"
          >
            {genreList.map(({ label, slug }) => {
              if (!slug) return null;
              const isActive = selectedGenreSlugs.includes(slug);

              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => toggleGenre(slug)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 font-medium text-sm transition-all active:scale-95 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section
        ref={gridRef}
        key={genreKey}
        className="mx-auto mt-8 mb-20 grid max-w-7xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {filteredBooks.map((book) => (
          <div key={book.id} className="stagger-child">
            <BookCard {...book} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Library;
