import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

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
        exclude: ["/404"],
        dynamicRoutes: ["/", "/about", "/blogs", "/books"],
      }),
    ],
  };
});
