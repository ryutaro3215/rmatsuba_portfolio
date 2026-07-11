import { getAllBookstores } from "../../../lib/microcms";

export async function onBeforePrerenderStart() {
  const bookstores = await getAllBookstores();
  return bookstores.map((store) => `/bookstores/${store.id}`);
}
