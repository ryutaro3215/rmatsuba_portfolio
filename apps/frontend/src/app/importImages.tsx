export const bookCoverModules = import.meta.glob(
  "../assets/book_cover/*.{jpg,png,jpeg,svg}",
  { eager: true, as: "url" },
);

export const techIconModules = import.meta.glob(
  "../assets/tech/*.{jpg,png,jpeg,svg}",
  { eager: true, as: "url" },
);

export const createImagesByFilename = (
  modules: Record<string, string>,
): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(modules).map(([path, url]) => {
      const filename = path.split("/").pop();
      if (!filename) {
        throw new Error(`Filename could not be determined from path: ${path}`);
      }
      return [filename, url];
    }),
  );
};
