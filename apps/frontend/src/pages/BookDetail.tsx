import type { Book } from "@mysite/shared";
import { useParams } from "react-router";
import { DetailBookCard } from "../components/DetailBookCard";
import { books } from "../data/books";

export const BookDetail = () => {
  const { bookId } = useParams();
  const id = Number(bookId);
  const bookData: Book | undefined = books.find((book) => book.id === id);
  return (
    <div className="mx-auto mt-16 mb-20 max-w-[80%]">
      {bookData && <DetailBookCard {...bookData} />}
    </div>
  );
};
