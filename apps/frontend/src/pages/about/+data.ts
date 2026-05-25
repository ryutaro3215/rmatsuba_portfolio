import type { Book } from "@mysite/shared";
import { getAllBooks } from "../../lib/microcms";

export async function data(): Promise<{ favoriteBooks: Book[] }> {
  const books = await getAllBooks();
  const favoriteBooks = books.filter((book) => book.isFavorite === true);
  return { favoriteBooks };
}
