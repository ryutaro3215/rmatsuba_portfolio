import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { Link, useNavigate } from "react-router";
import { bookCoverModules, createImagesByFilename } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

export const BookCard = (data: Book) => {
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
    <Link to={`/books/${data.id}`} className="group h-full">
      <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
        <div className="overflow-hidden rounded-t-xl bg-slate-50 p-3 dark:bg-slate-800">
          <img
            src={coverUrl}
            alt={`Cover of ${data.title}`}
            className="mx-auto block transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-3">
          <h3 className="line-clamp-1 font-bold text-slate-900 text-sm dark:text-white">
            {data.title}
          </h3>
          <p className="text-slate-500 text-xs dark:text-slate-400">
            {data.author}
          </p>
          <button
            type="button"
            className={`${genreBgColor} ${genreTextColor} mt-auto w-fit max-w-full truncate rounded-full px-2 py-0.5 text-xs`}
            onClick={handleGenreClick}
          >
            # {data.genre}
          </button>
        </div>
      </article>
    </Link>
  );
};
