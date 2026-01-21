import BookBgi from "../assets/Library-bgi.jpg";
import { BookCard } from "../components/BookCard";
import { books } from "../data/books";

export const Library = () => {
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
              Scientia est potentia
            </p>
          </div>
        </div>
      </div>
      <section className="mx-auto mt-2 mb-10 grid max-w-[80%] grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:mt-4 lg:grid-cols-10 lg:gap-4">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
};
