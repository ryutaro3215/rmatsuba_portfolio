export function getBookCoverUrl(url: string | undefined): string {
  if (!url) return "/fallback-cover.png";
  return url;
}

export function getTechIconUrl(filename: string | undefined): string {
  if (!filename) return "";
  return `/tech/${filename}`;
}
