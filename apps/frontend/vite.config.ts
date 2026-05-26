import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

/** ビルド時に contents/posts/ からブログ記事のURLを収集 */
function getBlogRoutes(): string[] {
  try {
    const postsDir = resolve(__dirname, "contents/posts");
    return readdirSync(postsDir)
      .filter((f) => f.endsWith(".md"))
      .flatMap((f) => {
        const content = readFileSync(resolve(postsDir, f), "utf-8");
        const draftMatch = content.match(/^draft:\s*(true|false)/m);
        if (draftMatch?.[1] === "true") return [];
        const slugMatch = content.match(/^slug:\s*"?([^"\n]+)"?/m);
        return slugMatch ? [`/blogs/${slugMatch[1].trim()}`] : [];
      });
  } catch {
    return [];
  }
}

// https://vite.dev/config/
export default defineConfig(() => {
  // process.env から直接読み込み、ビルド時にバンドルへ確実に埋め込む
  const serviceDomain =
    process.env.VITE_MICROCMS_SERVICE_DOMAIN ||
    process.env.MICROCMS_SERVICE_DOMAIN ||
    "";
  const apiKey =
    process.env.VITE_MICROCMS_API_KEY || process.env.MICROCMS_API_KEY || "";

  return {
    define: {
      "import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN":
        JSON.stringify(serviceDomain),
      "import.meta.env.VITE_MICROCMS_API_KEY": JSON.stringify(apiKey),
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      tailwindcss(),
      vike({
        // prerender: true をオブジェクト形式に拡張
        prerender: {
          // 同時に処理するページ数を5に制限（Parallel処理の抑制）
          parallel: 5,
        },
      }),
      Sitemap({
        hostname: "https://rmatsuba.com",
        outDir: "dist/client",
        exclude: ["/404", "/google6287e9d2588ae118"],
        dynamicRoutes: ["/", "/about", "/blogs", "/books", ...getBlogRoutes()],
      }),
    ],
  };
});
