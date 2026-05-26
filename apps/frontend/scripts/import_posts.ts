// import_posts.ts
// contents/inbox/ にある .md ファイルにフロントマターを追加して
// contents/posts/ に保存するスクリプト
//
// 使い方: bun run apps/frontend/scripts/import_posts.ts
//    or : make importpost

import { existsSync } from "node:fs";
import {
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import * as readline from "node:readline";
import type { FrontMatter } from "@mysite/shared";
import { EMOJI_POOL } from "../src/data/emoji";

// ─── ユーティリティ ───────────────────────────────────────────────────────────

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function formatLocalDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function escapeForYaml(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r?\n/g, "\\n");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fallbackSlug(now: Date): string {
  return `post-${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}-${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}`;
}

function pickRandomEmoji(): string {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return EMOJI_POOL[arr[0] % EMOJI_POOL.length];
}

function buildFrontMatter(fm: FrontMatter): string {
  const title = escapeForYaml(fm.title);
  const emoji = escapeForYaml(fm.emoji);
  const tags =
    fm.tags.length === 0
      ? "[]"
      : `\n${fm.tags.map((t) => ` - "${escapeForYaml(t)}"`).join("\n")}`;

  return `---
title: "${title}"
emoji: "${emoji}"
date: "${fm.date}"
created_at: "${fm.created_at}"
updated_at: "${fm.updated_at}"
draft: ${fm.draft ? "true" : "false"}
slug: "${escapeForYaml(fm.slug ?? "")}"
tags: ${tags}
---

`;
}

function uniquePostPath(
  postsDir: string,
  baseSlug: string,
): { slug: string; filePath: string } {
  let candidateSlug = baseSlug;
  let filePath = path.join(postsDir, `${candidateSlug}.md`);
  if (!existsSync(filePath)) return { slug: candidateSlug, filePath };

  for (let i = 2; i < 10_000; i++) {
    candidateSlug = `${baseSlug}-${i}`;
    filePath = path.join(postsDir, `${candidateSlug}.md`);
    if (!existsSync(filePath)) return { slug: candidateSlug, filePath };
  }
  throw new Error(
    "スラッグの重複が多すぎます。--slug で明示的に指定してください。",
  );
}

async function atomicWrite(distPath: string, content: string) {
  const dir = path.dirname(distPath);
  const tmp = path.join(dir, `.${path.basename(distPath)}.${process.pid}.tmp`);
  await writeFile(tmp, content, { encoding: "utf8", flag: "wx" });
  await rename(tmp, distPath);
}

// ─── インタラクティブ入力 ──────────────────────────────────────────────────────

function ask(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

// ─── コンテンツ解析 ───────────────────────────────────────────────────────────

/** ファイル内に既存フロントマターがあれば取り除いて本文だけ返す */
function stripFrontMatter(raw: string): string {
  if (!raw.startsWith("---")) return raw;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return raw;
  return raw.slice(end + 4).replace(/^\n+/, "");
}

/** 本文の最初の見出し (# / ##) からタイトルを抽出する */
function titleFromHeading(body: string): string | null {
  const m = body.match(/^#{1,2}\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

/** ファイル名からタイトルを推測する */
function titleFromFilename(filename: string): string {
  return path.basename(filename, ".md").replace(/[-_]/g, " ");
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  const scriptDir = path.dirname(new URL(import.meta.url).pathname);
  const inboxDir = path.resolve(scriptDir, "..", "contents", "inbox");
  const postsDir = path.resolve(scriptDir, "..", "contents", "posts");

  await mkdir(inboxDir, { recursive: true });
  await mkdir(postsDir, { recursive: true });

  const entries = await readdir(inboxDir);
  const mdFiles = entries.filter((f) => f.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.log(`inbox に .md ファイルが見つかりませんでした: ${inboxDir}`);
    process.exit(0);
  }

  console.log(`\n${mdFiles.length} 件の .md ファイルが見つかりました。\n`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let saved = 0;
  let skipped = 0;

  for (const filename of mdFiles) {
    const inboxPath = path.join(inboxDir, filename);
    const raw = await readFile(inboxPath, "utf8");
    const body = stripFrontMatter(raw);
    const now = new Date();

    console.log("─".repeat(50));
    console.log(`ファイル: ${filename}`);
    console.log("─".repeat(50));

    // タイトル
    const defaultTitle = titleFromHeading(body) ?? titleFromFilename(filename);
    const titleInput = await ask(rl, `タイトル [${defaultTitle}]: `);
    const title = titleInput || defaultTitle;

    // スラッグ
    const defaultSlug =
      slugify(title) ||
      slugify(path.basename(filename, ".md")) ||
      fallbackSlug(now);
    const slugInput = await ask(rl, `スラッグ [${defaultSlug}]: `);
    const baseSlug = slugify(slugInput) || defaultSlug;

    // タグ
    const tagsInput = await ask(rl, "タグ (カンマ区切り) []: ");
    const tags = tagsInput
      ? tagsInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    // 絵文字
    const defaultEmoji = pickRandomEmoji();
    const emojiInput = await ask(rl, `絵文字 [${defaultEmoji}]: `);
    const emoji = emojiInput || defaultEmoji;

    // 下書き
    const draftInput = await ask(rl, "下書き? (y/n) [y]: ");
    const draft = draftInput.toLowerCase() !== "n";

    const { slug, filePath } = uniquePostPath(postsDir, baseSlug);

    const fm: FrontMatter = {
      title,
      emoji,
      date: formatLocalDate(now),
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      draft,
      slug,
      tags,
    };

    const output = buildFrontMatter(fm) + body;

    // プレビュー
    console.log("\n--- フロントマタープレビュー ---");
    console.log(output.split("\n").slice(0, 10).join("\n"));
    console.log(`...\n保存先: ${path.relative(process.cwd(), filePath)}`);

    const confirm = await ask(rl, "\n保存しますか? (y / n=スキップ) [y]: ");
    if (confirm.toLowerCase() === "n") {
      console.log("スキップしました。\n");
      skipped++;
      continue;
    }

    await atomicWrite(filePath, output);
    await rm(inboxPath);

    console.log(`保存しました: ${path.relative(process.cwd(), filePath)}\n`);
    saved++;
  }

  rl.close();

  console.log("─".repeat(50));
  console.log(`完了: ${saved} 件保存 / ${skipped} 件スキップ`);
}

main().catch((e) => {
  console.error("失敗:", e instanceof Error ? e.message : e);
  process.exit(1);
});
