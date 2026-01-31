import {
  BookGenreSchema,
  BookGenres,
  type GenreOption,
  type GenreSlug,
} from "@mysite/shared";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Selector from "react-select";
import BookBgi from "../assets/Library-bgi.jpg";
import { BookCard } from "../components/BookCard";
import { books } from "../data/books";

export const Library = () => {
  const genreOptions: GenreOption[] = BookGenreSchema.options.map((genre) => ({
    value: genre,
    label: genre,
  }));

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedOptions, setSelectedOptions] = useState<GenreOption[]>(() => {
    const slugsFromParams = searchParams.getAll("genre");
    return slugsFromParams
      .map((slug) => {
        const label = BookGenres[slug as GenreSlug];
        return label ? { value: label, label: label } : null;
      })
      .filter((opt) => opt !== null);
  });

  useEffect(() => {
    const slugsFromParams = searchParams.getAll("genre");
    const restoredOptions = slugsFromParams
      .map((slug) => {
        const label = BookGenres[slug as GenreSlug];
        return label ? { value: label, label: label } : null;
      })
      .filter((opt) => opt !== null);
    if (JSON.stringify(restoredOptions) !== JSON.stringify(selectedOptions)) {
      setSelectedOptions(restoredOptions as GenreOption[]);
    }
  }, [searchParams, selectedOptions]);

  const handleChange = (newValue: readonly GenreOption[]) => {
    const arrayValue = Array.from(newValue);
    setSelectedOptions(arrayValue);

    const newParams = new URLSearchParams();
    arrayValue.forEach((opt) => {
      const slug = (Object.keys(BookGenres) as GenreSlug[]).find(
        (key) => BookGenres[key] === opt.value,
      );
      if (slug) {
        newParams.append("genre", slug);
      }
    });
    setSearchParams(newParams, {
      preventScrollReset: true,
      replace: true,
    });
  };

  const selectedGenres = selectedOptions.map((opt) => opt.value);
  const filteredBooks =
    selectedGenres.length === 0
      ? books
      : books.filter((book) => selectedGenres.includes(book.genre));

  return (
    <div className="mx-auto w-full">
      <div className="relative h-screen w-full">
        <img
          src={BookBgi}
          alt="Home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="felx w-full flex-col items-center justify-center">
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[3rem] text-white sm:text-[6rem] md:text-[10rem] lg:text-[18rem]">
              Library
            </p>
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[1rem] text-white sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              読んだ本の記録
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-6 max-w-[80%]" id="genre-selector">
        <Selector
          options={genreOptions}
          isMulti={true}
          placeholder="ジャンルで絞り込む"
          value={selectedOptions}
          onChange={handleChange}
        />
      </div>
      <section className="mx-auto mt-2 mb-10 grid max-w-[80%] grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:mt-4 lg:grid-cols-6 lg:gap-4 xl:grid-cols-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
};
