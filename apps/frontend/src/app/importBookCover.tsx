export const coverModules = import.meta.glob(
  "../assets/book_cover/*.{jpg,png,jpeg}",
  { eager: true, as: "url" },
);

export const coversByFilename: Record<string, string> = Object.fromEntries(
  Object.entries(coverModules).map(([path, url]) => {
    const filename = path.split("/").pop();
    return [filename, url];
  }),
);
