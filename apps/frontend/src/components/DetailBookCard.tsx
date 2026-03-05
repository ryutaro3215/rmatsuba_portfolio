import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { navigate } from "vike/client/router";
import { getBookCoverUrl } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

const DetailBookCard = (data: Book) => {
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
    <article className="flex w-full flex-col gap-8 sm:flex-row sm:items-start">
      <div className="mx-auto w-full shrink-0 sm:w-1/3">
        <div className="overflow-hidden rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <img
            src={coverUrl}
            alt={`Cover of ${data.title}`}
            // 3. 詳細ページなので loading="eager" か、指定なしでOK
            // aspect-ratio を指定しておくと読み込み時のガタつきを防げます
            className="mx-auto block aspect-[2/3] w-full object-contain"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 sm:w-2/3">
        <a
          href="/books"
          className="text-slate-500 text-sm transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          &larr; Library に戻る
        </a>
        <h1 className="font-bold font-source-serif-4 text-2xl text-slate-900 tracking-tight sm:text-3xl md:text-4xl dark:text-white">
          {data.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {data.author}
        </p>
        <button
          type="button"
          className={`${genreBgColor} ${genreTextColor} w-fit max-w-full cursor-pointer truncate rounded-full px-3 py-1 text-sm transition-all duration-200 hover:shadow-sm hover:brightness-95 active:scale-95`}
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

export default DetailBookCard;
