// Update updated_at for modified markdown posts (git pre-commit hook)
// Run via husky: bun run frontend/scripts/update_post.ts

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// adjust if needed
const POSTS_DIR = path.resolve(__dirname, "..", "contents", "posts");

function getStagedFiles(): string[] {
  const out = execSync("git diff --cached --name-only", {
    encoding: "utf8",
  });
  return out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isTargetPost(file: string): boolean {
  if (!file.endsWith(".md")) return false;
  const abs = path.resolve(file);
  return abs.startsWith(POSTS_DIR);
}

function updateUpdatedAt(content: string, iso: string): string {
  if (!content.startsWith("---")) return content;

  const end = content.indexOf("\n---", 3);
  if (end === -1) return content;

  const fm = content.slice(0, end + 4);
  const body = content.slice(end + 4);

  if (/^updated_at:/m.test(fm)) {
    const replaced = fm.replace(
      /^updated_at:\s*".*?"$/m,
      `updated_at: "${iso}"`,
    );
    return replaced + body;
  }

  // updated_at が無い場合は追加（date の後に入れる）
  const injected = fm.replace(
    /^date:.*$/m,
    (line) => `${line}\nupdated_at: "${iso}"`,
  );

  return injected + body;
}

async function processFile(file: string) {
  if (!existsSync(file)) return;

  const original = await readFile(file, "utf8");
  const now = new Date().toISOString();
  const updated = updateUpdatedAt(original, now);

  if (original === updated) return;

  await writeFile(file, updated, "utf8");

  // 再ステージング（重要）
  execSync(`git add ${file}`);
  console.log(`🔄 updated_at updated: ${file}`);
}

async function main() {
  const staged = getStagedFiles();
  const targets = staged.filter(isTargetPost);

  if (targets.length === 0) return;

  for (const file of targets) {
    await processFile(file);
  }
}

main().catch((e) => {
  console.error("❌ update_post failed:", e);
  process.exit(1);
});
