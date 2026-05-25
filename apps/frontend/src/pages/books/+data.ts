import type { Book } from "@mysite/shared";
import { getAllBooks } from "../../lib/microcms";

export async function data(): Promise<{ books: Book[] }> {
  const books = await getAllBooks();
  return { books };
}
