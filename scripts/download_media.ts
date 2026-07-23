// download_media.ts
// microCMS からメディアデータを全件取得して画像を保存するスクリプト
//
// 使い方: make downloadmedia
//
// 環境変数 (apps/frontend/.env.local から読み込まれる):
//   VITE_MICROCMS_SERVICE_DOMAIN
//   VITE_MICROCMS_API_KEY
//
// オプション:
//   --output <path>  保存先ディレクトリ (デフォルト: /Users/rmatsuba/photo/books-image)
//   --concurrency <n>  同時ダウンロード数 (デフォルト: 5)

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// ─── .env.local の読み込み ────────────────────────────────────────────────────

const envFile = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "../apps/frontend/.env.local",
);
try {
  const text = await Bun.file(envFile).text();
  for (const line of text.split("\n")) {
    const match = line.match(/^([^#=\s][^=]*)=["']?(.+?)["']?\s*$/);
    if (match) process.env[match[1]] = match[2];
  }
} catch {
  // ファイルが存在しない場合は無視
}

// ─── 環境変数 ─────────────────────────────────────────────────────────────────

const serviceDomain = process.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.VITE_MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  console.error(
    "エラー: VITE_MICROCMS_SERVICE_DOMAIN と VITE_MICROCMS_API_KEY を設定してください。",
  );
  process.exit(1);
}

// ─── 型定義 ───────────────────────────────────────────────────────────────────

type MediaItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  width: number;
  height: number;
  tags: string[];
};

type MediaResponse = {
  media: MediaItem[];
  totalCount: number;
  token?: string;
};

// ─── API 取得 ─────────────────────────────────────────────────────────────────

async function fetchMedia(
  limit: number,
  token?: string,
): Promise<MediaResponse> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (token) params.set("token", token);

  const url = `https://${serviceDomain}.microcms-management.io/api/v2/media?${params}`;
  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": apiKey as string },
  });
  if (!res.ok) {
    throw new Error(`API エラー: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<MediaResponse>;
}

async function fetchAllMedia(): Promise<MediaItem[]> {
  const limit = 100;
  const all: MediaItem[] = [];
  let token: string | undefined;

  const first = await fetchMedia(limit);
  all.push(...first.media);
  console.log(`  取得中: ${all.length} / ${first.totalCount} 件`);
  token = first.token;

  while (token && all.length < first.totalCount) {
    const res = await fetchMedia(limit, token);
    all.push(...res.media);
    console.log(`  取得中: ${all.length} / ${first.totalCount} 件`);
    token = res.token;
  }

  return all;
}

// ─── 画像ダウンロード ──────────────────────────────────────────────────────────

function getFilename(url: string): string {
  return path.basename(new URL(url).pathname);
}

async function downloadImage(
  item: MediaItem,
  outputDir: string,
): Promise<{ filename: string; skipped: boolean }> {
  const filename = getFilename(item.url);
  const dest = path.join(outputDir, filename);

  // 既存ファイルはスキップ
  const existing = Bun.file(dest);
  if (await existing.exists()) {
    return { filename, skipped: true };
  }

  const res = await fetch(item.url);
  if (!res.ok) {
    throw new Error(`画像取得エラー: ${res.status} ${item.url}`);
  }

  const buffer = await res.arrayBuffer();
  await writeFile(dest, Buffer.from(buffer));
  return { filename, skipped: false };
}

async function downloadWithConcurrency(
  items: MediaItem[],
  outputDir: string,
  concurrency: number,
): Promise<void> {
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const item = items[index++];
      try {
        const result = await downloadImage(item, outputDir);
        if (result.skipped) {
          skipped++;
        } else {
          downloaded++;
        }
        const done = downloaded + skipped + failed;
        process.stdout.write(
          `\r  進捗: ${done}/${items.length} (新規:${downloaded} スキップ:${skipped} エラー:${failed})`,
        );
      } catch (e) {
        failed++;
        console.error(
          `\n  失敗: ${item.url} — ${e instanceof Error ? e.message : e}`,
        );
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`\n`);
  console.log(`  新規ダウンロード: ${downloaded} 件`);
  console.log(`  スキップ (既存): ${skipped} 件`);
  if (failed > 0) console.log(`  エラー: ${failed} 件`);
}

// ─── オプション解析 ────────────────────────────────────────────────────────────

function resolveOptions(): { outputDir: string; concurrency: number } {
  const args = process.argv.slice(2);

  const outputIdx = args.indexOf("--output");
  const concurrencyIdx = args.indexOf("--concurrency");

  const outputDir =
    outputIdx !== -1
      ? path.resolve(args[outputIdx + 1])
      : "/Users/rmatsuba/photo/books-image";

  const concurrency =
    concurrencyIdx !== -1 ? Number(args[concurrencyIdx + 1]) || 5 : 5;

  return { outputDir, concurrency };
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("microCMS からメディアデータを取得しています...");

  const media = await fetchAllMedia();
  console.log(`\n合計 ${media.length} 件のメディアを取得しました。`);

  const { outputDir, concurrency } = resolveOptions();
  await mkdir(outputDir, { recursive: true });

  console.log(`\n画像を保存しています: ${outputDir}`);
  console.log(`  同時ダウンロード数: ${concurrency}`);
  console.log("");

  await downloadWithConcurrency(media, outputDir, concurrency);

  console.log(`完了: ${outputDir}`);
}

main().catch((e) => {
  console.error("失敗:", e instanceof Error ? e.message : e);
  process.exit(1);
});
