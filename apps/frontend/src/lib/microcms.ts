import type { Book } from "@mysite/shared";
import { createClient } from "microcms-js-sdk";

function getClient() {
  return createClient({
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN ?? "",
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY ?? "",
  });
}

type MicroCMSBook = {
  id: string;
  title: string;
  author: string;
  cover?: { url: string };
  genre?: string[]; // セレクトフィールドは配列で返る
  tag?: string; // テキストフィールド（セミコロン区切り文字列）
  status?: string[]; // セレクトフィールドは配列で返る
  rating?: string[]; // セレクトフィールドは配列で返る
  url?: string;
  isFavorable?: boolean;
};

function normalizeBook(raw: MicroCMSBook): Book {
  return {
    id: raw.id,
    title: raw.title,
    author: raw.author,
    cover: raw.cover?.url ?? "/fallback-cover.png",
    genre: (raw.genre?.[0] ?? "") as Book["genre"],
    tags: raw.tag ? raw.tag.split(";").filter(Boolean) : undefined,
    status: (raw.status?.[0] ?? "unread") as Book["status"],
    rating: raw.rating?.[0] ? Number(raw.rating[0]) : 0,
    url: raw.url ?? undefined,
    isFavorite: raw.isFavorable ?? false,
  };
}

export async function getAllBooks(): Promise<Book[]> {
  const limit = 100;
  let offset = 0;
  const allContents: MicroCMSBook[] = [];

  while (true) {
    const res = await getClient().getList<MicroCMSBook>({
      endpoint: "books",
      queries: { limit, offset },
    });
    allContents.push(...res.contents);
    if (offset + limit >= res.totalCount) break;
    offset += limit;
  }

  return allContents.map(normalizeBook);
}

export async function getBookById(id: string): Promise<Book> {
  const raw = await getClient().getListDetail<MicroCMSBook>({
    endpoint: "books",
    contentId: id,
  });
  return normalizeBook(raw);
}
