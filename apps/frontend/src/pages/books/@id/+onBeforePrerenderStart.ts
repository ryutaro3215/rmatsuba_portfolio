import { books } from "../../../data/books";

export function onBeforePrerenderStart() {
  return books.map((book) => `/books/${book.id}`);
}
