export function getBookCoverUrl(filename: string | undefined): string {
  if (!filename) return "/fallback-cover.png"; // 画像がない場合のフォールバック（任意）
  return `/book_cover/${filename}`;
}

export function getTechIconUrl(filename: string | undefined): string {
  if (!filename) return "";
  return `/tech/${filename}`;
}
