// This script creates a new blog post
// This script runs in a bun runtime environment
//

import { existsSync } from "node:fs";
import { mkdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Args, FrontMatter } from "@mysite/shared";
import { EMOJI_POOL } from "../src/data/emoji";

function usage() {
  console.error('Usage: bun run new_post.ts "Post Title" [--slug your-slug]');
  process.exit(1);
}

function parseArgs(argv: string[]): Args {
  if (argv.length === 0) usage();

  const title = argv[0];
  if (!title) usage();

  let slug: string | undefined;

  for (let i = 1; i < argv.length; ++i) {
    const a = argv[i];

    if (a === "--slug") {
      const v = argv[i + 1];
      if (!v || v.startsWith("-")) {
        console.error("Error: --slug requires a value.");
        usage();
      }

      slug = v.trim();
      i++;
      continue;
    }
    console.error(`Error: Unknown argument: ${a}`);
    usage();
  }

  return { title, slug };
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function formatLocalDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function escageForYamlDoubleQuotedString(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r?\n/g, "\\n");
}

function slugify(input: string): string {
  const s = input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s;
}

function fallbackSlug(now: Date): string {
  const y = now.getFullYear();
  const m = pad2(now.getMonth() + 1);
  const d = pad2(now.getDate());
  const hh = pad2(now.getHours());
  const mm = pad2(now.getMinutes());
  const ss = pad2(now.getSeconds());
  return `post-${y}${m}${d}-${hh}${mm}${ss}`;
}

function buildFrontMatter(fm: FrontMatter): string {
  const title = escageForYamlDoubleQuotedString(fm.title);
  const emoji = escageForYamlDoubleQuotedString(fm.emoji);
  const tags =
    fm.tags.length === 0
      ? "[]"
      : `\n${fm.tags.map((t) => ` - "${escageForYamlDoubleQuotedString(t)}"`).join("\n")}`;

  return `---
title: "${title}"
emoji: "${emoji}"
date: "${fm.date}"
created_at: "${fm.created_at}"
updated_at: "${fm.updated_at}"
draft: ${fm.draft ? "true" : "false"}
slug: ${fm.slug ? `"${escageForYamlDoubleQuotedString(fm.slug)}"` : '""'}
tags: ${tags}
---

## ${fm.title}

`;
}

function randomInt(maxExclusive: number): number {
  // Bun/Node: crypto.getRandomValues が使える
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  // modulo は厳密には僅かな偏りが出るけど、アイキャッチ用途なら十分
  return arr[0] % maxExclusive;
}

function pickRandomEmoji(): string {
  return EMOJI_POOL[randomInt(EMOJI_POOL.length)];
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
    "Too many slug collisions, please specify --slug explicitly.",
  );
}

async function atomicWriteFile(distPath: string, content: string) {
  const dir = path.dirname(distPath);
  const base = path.basename(distPath);
  const tmp = path.join(dir, `.${base}.${process.pid}.tmp`);

  await writeFile(tmp, content, { encoding: "utf8", flag: "wx" });
  await rename(tmp, distPath);
}

async function main() {
  const { title, slug: rawSlug } = parseArgs(process.argv.slice(2));
  const now = new Date();

  const scriptDir = path.dirname(new URL(import.meta.url).pathname);
  const postsDir = path.resolve(scriptDir, "..", "contents", "posts");

  let baseSlug = rawSlug ? slugify(rawSlug) : slugify(title);
  if (!baseSlug) baseSlug = fallbackSlug(now);

  await mkdir(postsDir, { recursive: true });
  const { slug, filePath } = uniquePostPath(postsDir, baseSlug);

  const fm: FrontMatter = {
    title,
    emoji: pickRandomEmoji(),
    date: formatLocalDate(now),
    created_at: now.toISOString(),
    updated_at: now.toISOString(),
    draft: true,
    slug,
    tags: [],
  };

  const content = buildFrontMatter(fm);
  await atomicWriteFile(filePath, content);
  console.log(`✅ Created: ${filePath}`);
  console.log(`slug: ${slug}`);
}

main().catch((e) => {
  console.error(
    "❌ Failed to create post:",
    e instanceof Error ? e.message : e,
  );
  process.exit(1);
});
