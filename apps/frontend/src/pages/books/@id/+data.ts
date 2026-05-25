import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { getBookById } from "../../../lib/microcms";

export async function data(pageContext: PageContextServer) {
  const idStr = pageContext.routeParams?.id;

  if (!idStr) {
    throw render(404, "Book ID not found.");
  }

  try {
    return await getBookById(idStr);
  } catch {
    throw render(404, `Book with ID ${idStr} not found.`);
  }
}
