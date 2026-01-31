import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { Link, useNavigate } from "react-router";
import { bookCoverModules, createImagesByFilename } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

export const BookCard = (data: Book) => {
  const coverUrl = createImagesByFilename(bookCoverModules)[data.cover];
  const genreBgColor = genreTheme[data.genre]?.bgColor || "bg-gray-200";
  const genreTextColor = genreTheme[data.genre]?.textColor || "text-black";
  const genreClass = `${genreBgColor} ${genreTextColor} text-xs border border-b rounded-full px-2 py-1 truncate w-fit max-w-full`;

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
    <Link to={`/books/${data.id}`} className="w-full">
      <article className="w-full rounded-md border border-gray-200 p-2 shadow-md hover:border-black">
        <div className="w-full p-2">
          <img src={coverUrl} alt={`Cover of ${data.title}`} />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <h3 className="line-clamp-1 font-bold text-sm">{data.title}</h3>
          <p className="text-xs">{data.author}</p>
          <button
            type="button"
            className={genreClass}
            onClick={handleGenreClick}
          >
            # {data.genre}
          </button>
        </div>
      </article>
    </Link>
  );
};
