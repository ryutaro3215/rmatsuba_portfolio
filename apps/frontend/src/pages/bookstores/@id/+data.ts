import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { getBookstoreById } from "../../../lib/microcms";

export async function data(pageContext: PageContextServer) {
  const idStr = pageContext.routeParams?.id;

  if (!idStr) {
    throw render(404, "Bookstore ID not found.");
  }

  try {
    return await getBookstoreById(idStr);
  } catch {
    throw render(404, `Bookstore with ID ${idStr} not found.`);
  }
}
