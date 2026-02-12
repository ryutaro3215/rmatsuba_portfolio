import {
  BookGenreSchema,
  BookGenres,
  type GenreOption,
  type GenreSlug,
} from "@mysite/shared";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { StylesConfig } from "react-select";
import Selector from "react-select";
import { BookCard } from "../components/BookCard";
import { books } from "../data/books";
import { useTheme } from "../hooks/useTheme";

export const Library = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  const selectStyles: StylesConfig<GenreOption, true> = {
    control: (base) => ({
      ...base,
      backgroundColor: isDark ? "#0f172a" : base.backgroundColor,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      borderRadius: "0.75rem",
      "&:hover": {
        borderColor: isDark ? "#475569" : "#cbd5e1",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: isDark ? "#1e293b" : base.backgroundColor,
      borderRadius: "0.75rem",
      overflow: "hidden",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? isDark
          ? "#334155"
          : "#f1f5f9"
        : isDark
          ? "#1e293b"
          : base.backgroundColor,
      color: isDark ? "#e2e8f0" : base.color,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: isDark ? "#334155" : "#f1f5f9",
      borderRadius: "9999px",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: isDark ? "#e2e8f0" : "#475569",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: isDark ? "#94a3b8" : "#94a3b8",
      borderRadius: "0 9999px 9999px 0",
      ":hover": {
        backgroundColor: isDark ? "#475569" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#334155",
      },
    }),
    input: (base) => ({
      ...base,
      color: isDark ? "#e2e8f0" : base.color,
    }),
    placeholder: (base) => ({
      ...base,
      color: isDark ? "#94a3b8" : "#94a3b8",
    }),
  };

  return (
    <div className="mx-auto w-full">
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <h1 className="font-bold font-source-serif-4 text-4xl text-slate-900 tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
          Library
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed dark:text-slate-400">
          読んだ本の記録
        </p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </section>

      <div className="mx-auto max-w-7xl px-6" id="genre-selector">
        <Selector
          options={genreOptions}
          isMulti={true}
          placeholder="ジャンルで絞り込む"
          value={selectedOptions}
          onChange={handleChange}
          styles={selectStyles}
        />
      </div>
      <section className="mx-auto mt-6 mb-20 grid max-w-7xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
};
