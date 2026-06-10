// export_books.ts
// microCMS から書籍データを全件取得して JSON ファイルに出力するスクリプト
//
// 使い方: make exportbooks
//
// 環境変数 (apps/frontend/.env.local から読み込まれる):
//   VITE_MICROCMS_SERVICE_DOMAIN
//   VITE_MICROCMS_API_KEY
//
// オプション:
//   --output <path>  出力先ファイルパス (デフォルト: scripts/exports/books.json)

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// ─── 環境変数 ─────────────────────────────────────────────────────────────────

const serviceDomain = process.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.VITE_MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  console.error(
    "エラー: VITE_MICROCMS_SERVICE_DOMAIN と VITE_MICROCMS_API_KEY を設定してください。",
  );
  console.error(
    "  apps/frontend/.env.local に記載されているか確認してください。",
  );
  process.exit(1);
}

// ─── API 取得 ─────────────────────────────────────────────────────────────────

type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

async function fetchBooks(
  limit: number,
  offset: number,
): Promise<MicroCMSListResponse<unknown>> {
  const url = `https://${serviceDomain}.microcms.io/api/v1/books?limit=${limit}&offset=${offset}`;
  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": apiKey as string },
  });
  if (!res.ok) {
    throw new Error(`API エラー: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<MicroCMSListResponse<unknown>>;
}

async function fetchAllBooks(): Promise<unknown[]> {
  const limit = 100;
  let offset = 0;
  const all: unknown[] = [];

  while (true) {
    const res = await fetchBooks(limit, offset);
    all.push(...res.contents);
    console.log(`  取得中: ${all.length} / ${res.totalCount} 件`);
    if (offset + limit >= res.totalCount) break;
    offset += limit;
  }

  return all;
}

// ─── フォーマット変換 ──────────────────────────────────────────────────────────

function toCSV(records: unknown[]): string {
  if (records.length === 0) return "";

  const rows = records as Record<string, unknown>[];
  const headers = Object.keys(rows[0]);

  const escapeCsv = (v: unknown): string => {
    const s = Array.isArray(v) ? v.join(";") : v == null ? "" : String(v);
    return s.includes(",") || s.includes('"') || s.includes("\n")
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  };

  const lines = [
    headers.join(","),
    ...rows.map((row) => headers.map((h) => escapeCsv(row[h])).join(",")),
  ];

  return `${lines.join("\n")}\n`;
}

// ─── 出力先・フォーマットの解決 ────────────────────────────────────────────────

type Format = "json" | "csv";

function resolveOptions(): { outputPath: string; format: Format } {
  const args = process.argv.slice(2);
  const scriptDir = path.dirname(new URL(import.meta.url).pathname);

  const outputIdx = args.indexOf("--output");
  const formatIdx = args.indexOf("--format");

  const rawOutput = outputIdx !== -1 ? args[outputIdx + 1] : undefined;
  const rawFormat = formatIdx !== -1 ? args[formatIdx + 1] : undefined;

  const format: Format =
    rawFormat === "csv"
      ? "csv"
      : rawFormat === "json"
        ? "json"
        : rawOutput?.endsWith(".csv")
          ? "csv"
          : "json";

  const outputPath = rawOutput
    ? path.resolve(rawOutput)
    : path.resolve(scriptDir, "exports", `books.${format}`);

  return { outputPath, format };
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("microCMS から書籍データを取得しています...");

  const books = await fetchAllBooks();
  const { outputPath, format } = resolveOptions();

  const content =
    format === "csv" ? toCSV(books) : JSON.stringify(books, null, 2);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content, "utf8");

  console.log(
    `\n完了: ${books.length} 件を出力しました (${format.toUpperCase()})`,
  );
  console.log(`  出力先: ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((e) => {
  console.error("失敗:", e instanceof Error ? e.message : e);
  process.exit(1);
});
