import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { Link, useNavigate } from "react-router";
import { bookCoverModules, createImagesByFilename } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

export const DetailBookCard = (data: Book) => {
  const coverUrl = createImagesByFilename(bookCoverModules)[data.cover];
  const genreBgColor = genreTheme[data.genre]?.bgColor || "bg-slate-200";
  const genreTextColor = genreTheme[data.genre]?.textColor || "text-slate-900";

  const navigate = useNavigate();
  const genreSlug = (Object.keys(BookGenres) as GenreSlug[]).find(
    (key) => BookGenres[key] === data.genre,
  );

  const handleGenreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (genreSlug) {
      navigate(`/books?genre=${genreSlug}#genre-selector`);
    }
  };
  return (
    <article className="flex w-full flex-col gap-8 sm:flex-row sm:items-start">
      <div className="mx-auto w-full shrink-0 sm:w-1/3">
        <div className="overflow-hidden rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <img
            src={coverUrl}
            alt={`Cover of ${data.title}`}
            className="mx-auto block w-full object-contain"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 sm:w-2/3">
        <Link
          to="/books"
          className="text-slate-500 text-sm transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          &larr; Library に戻る
        </Link>
        <h1 className="font-bold font-source-serif-4 text-2xl text-slate-900 tracking-tight sm:text-3xl md:text-4xl dark:text-white">
          {data.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {data.author}
        </p>
        <button
          type="button"
          className={`${genreBgColor} ${genreTextColor} w-fit max-w-full truncate rounded-full px-3 py-1 text-sm`}
          onClick={handleGenreClick}
        >
          # {data.genre}
        </button>
        {data.tags && data.tags.length > 0 && (
          <>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
            <div className="flex flex-wrap gap-1.5">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600 text-xs dark:bg-slate-800 dark:text-slate-400"
                >
                  # {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
};
