import type { Book, Bookstore } from "@mysite/shared";
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

// --- Bookstores ---

type MicroCMSBookstore = {
  id: string;
  name: string;
  address: string;
  prefecture?: string[];
  nearestStation: string;
  type?: string[];
  features: string;
  rating?: string[];
  images?: { url: string }[];
  mapUrl: string;
};

function normalizeBookstore(raw: MicroCMSBookstore): Bookstore {
  return {
    id: raw.id,
    name: raw.name,
    address: raw.address,
    prefecture: raw.prefecture?.[0] ?? "",
    nearestStation: raw.nearestStation,
    type: (raw.type?.[0] ?? "新本屋") as Bookstore["type"],
    features: raw.features,
    rating: raw.rating?.[0] ? Number(raw.rating[0]) : 3,
    images: raw.images ?? [],
    mapUrl: raw.mapUrl ?? "",
  };
}

export async function getAllBookstores(): Promise<Bookstore[]> {
  const limit = 100;
  let offset = 0;
  const allContents: MicroCMSBookstore[] = [];

  while (true) {
    const res = await getClient().getList<MicroCMSBookstore>({
      endpoint: "bookstores",
      queries: { limit, offset },
    });
    allContents.push(...res.contents);
    if (offset + limit >= res.totalCount) break;
    offset += limit;
  }

  return allContents.map(normalizeBookstore);
}

export async function getBookstoreById(id: string): Promise<Bookstore> {
  const raw = await getClient().getListDetail<MicroCMSBookstore>({
    endpoint: "bookstores",
    contentId: id,
  });
  return normalizeBookstore(raw);
}
