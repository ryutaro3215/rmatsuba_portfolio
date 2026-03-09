import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { navigate } from "vike/client/router";
import { getBookCoverUrl } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

export const BookCard = (data: Book) => {
  const coverUrl = getBookCoverUrl(data.cover);

  const genreBgColor = genreTheme[data.genre]?.bgColor || "bg-slate-200";
  const genreTextColor = genreTheme[data.genre]?.textColor || "text-slate-900";

  const genreSlug = (Object.keys(BookGenres) as GenreSlug[]).find(
    (key) => BookGenres[key] === data.genre,
  );

  const handleGenreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (genreSlug) {
      navigate(`/books?genre=${genreSlug}#genre-selector`, {
        keepScrollPosition: true,
      });
    }
  };

  return (
    <a href={`/books/${data.id}`} className="group h-full">
      <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
        <div className="overflow-hidden rounded-t-xl bg-slate-50 p-3 dark:bg-slate-800">
          <img
            src={coverUrl}
            alt={`Cover of ${data.title}`}
            loading="lazy"
            // 画像サイズを一定に保つために aspect-ratio などを指定しておくと、
            // public 移行後のレイアウトシフトを防げます
            className="mx-auto block aspect-[2/3] object-cover transition-transform duration-200 group-hover:scale-105"
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
            className={`${genreBgColor} ${genreTextColor} mt-auto w-fit max-w-full cursor-pointer truncate rounded-full px-2 py-0.5 text-xs transition-all hover:brightness-95`}
            onClick={handleGenreClick}
          >
            # {data.genre}
          </button>
        </div>
      </article>
    </a>
  );
};
