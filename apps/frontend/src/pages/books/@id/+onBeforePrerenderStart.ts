import { getAllBooks } from "../../../lib/microcms";

export async function onBeforePrerenderStart() {
  const books = await getAllBooks();
  return books.map((book) => `/books/${book.id}`);
}
