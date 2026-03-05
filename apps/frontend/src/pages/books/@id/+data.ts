import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { books } from "../../../data/books";

export async function data(pageContext: PageContextServer) {
  const idStr = pageContext.routeParams?.id;
  const idNum = Number(idStr);

  const book = books.find((b) => b.id === idNum);

  if (!book) {
    throw render(404, `Book with ID ${idStr} not found.`);
  }

  return book;
}
