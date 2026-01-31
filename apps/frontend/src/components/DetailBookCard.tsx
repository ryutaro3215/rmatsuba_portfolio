import { type Book, BookGenres, type GenreSlug } from "@mysite/shared";
import { useNavigate } from "react-router";
import { bookCoverModules, createImagesByFilename } from "../app/importImages";
import { genreTheme } from "../data/genreTheme";

export const DetailBookCard = (data: Book) => {
  const coverUrl = createImagesByFilename(bookCoverModules)[data.cover];
  const genreBgColor = genreTheme[data.genre]?.bgColor || "bg-gray-200";
  const genreTextColor = genreTheme[data.genre]?.textColor || "text-black";
  const genreClass = `cursor-pointer ${genreBgColor} ${genreTextColor} text-sm sm:text-base md:text-xl lg:text-2xl border border-b rounded-full bg-blue-600 px-2 py-1 truncate text-left self-start w-fit max-w-full mb-2`;

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
    <article className="flex h-[100vh] w-full flex-col items-center gap-5 sm:flex-row">
      <div className="h-[80vh] w-full sm:max-w-[50%]">
        <img
          src={coverUrl}
          alt={`Cover of ${data.title}`}
          className="mx-auto block h-full w-full object-contain"
        />
      </div>
      <div className="flex w-full flex-col gap-1 p-2 text-left sm:border-black sm:border-t sm:border-l">
        <h3 className="mb-3 w-full font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          {data.title}
        </h3>
        <p className="mb-2 w-full text-left text-base sm:text-xl md:text-2xl lg:text-4xl">
          {data.author}
        </p>
        <button type="button" className={genreClass} onClick={handleGenreClick}>
          # {data.genre}
        </button>
        <ul className="flex list-none flex-wrap gap-1 border-black border-t px-2 py-2">
          {data.tags?.map((tag) => (
            <li
              key={data.id}
              className="w-fit max-w-full truncate rounded-full border border-b px-2 py-1 text-xs md:text-base lg:text-lg"
            >
              # {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
