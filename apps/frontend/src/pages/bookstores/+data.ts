import type { Bookstore } from "@mysite/shared";
import { getAllBookstores } from "../../lib/microcms";

export async function data(): Promise<{ bookstores: Bookstore[] }> {
  const bookstores = await getAllBookstores();
  return { bookstores };
}
