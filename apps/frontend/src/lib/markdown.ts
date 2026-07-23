/** マークダウン記法を除去してプレーンテキストに変換 */
export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/\n+/g, " ")
    .trim();
}

/** マークダウン本文から meta description 用の要約テキストを生成 */
export function toDescription(body: string, maxLen = 160): string {
  const text = stripMarkdown(body);
  return text.length > maxLen ? `${text.slice(0, maxLen).trimEnd()}…` : text;
}
