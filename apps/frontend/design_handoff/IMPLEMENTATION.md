# rmatsuba_portfolio — Implementation Guide for Claude Code

## ゴール

既存の **Vike (vite-plugin-ssr) + React + TypeScript + Tailwind CSS** ポートフォリオサイトを、`design_handoff/` フォルダ内の HTML プロトタイプが示すデザインに全面リデザインする。

**実装方針:**
- フレームワーク・ファイル構造・ルーティングは**変更しない**
- CMS（microcms）連携はそのまま維持する
- デザイントークン・コンポーネント・アニメーションを新デザインに差し替える

---

## デザイン参照ファイルの読み方

`design_handoff/` フォルダ内の HTML ファイルをブラウザで直接開くと、意図したデザインを確認できる。

| HTML ファイル | 対応ページ |
|---|---|
| `Home.html` | `/`（ホーム） |
| `About.html` | `/about` |
| `Blog.html` | `/blogs` |
| `BlogPost.html` | `/blogs/:slug` |
| `Library.html` | `/books` |
| `BookDetail.html` | `/books/:id` |

詳細な仕様（色・フォント・アニメーション・各セクション構成）は `README.md` を参照。

---

## 実装ステップ

以下の順に実装すること。後のステップが前のステップに依存しているため、順序を守ること。

---

### Step 1: グローバルスタイルの置き換え

**対象ファイル:** `src/style.css`

`design_handoff/styles.css` の内容をベースに `src/style.css` を書き換える。Tailwind の `@tailwind` ディレクティブは先頭に残してよい。

追加すべき主要要素:

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=JetBrains+Mono:ital,wght@0,300..700;1,300..700&display=swap');

/* CSS カスタムプロパティ（ダーク/ライトモード） */
/* アニメーションユーティリティ: .rv, .kt-word, .rule-draw */
/* 固定オーバーレイ: .grain-layer, .cursor-light */
/* 読書進捗バー: .reading-bar */
/* 記事タイポグラフィ: .prose, .pull, .footnotes, .toc */
/* 書評タイポグラフィ: .review-prose, .passage */
```

全 CSS の詳細は `design_handoff/styles.css` を参照。

---

### Step 2: レイアウト（Header・Footer・オーバーレイ）の更新

#### 2-a. `src/pages/+Layout.tsx`

- `<div className="grain-layer" />` と `<div className="cursor-light" />` を `<body>` 直下の最初の子として追加
- マウス追従ライト（cursor-light）の JS を useEffect で実装:

```ts
useEffect(() => {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  const k = 0.08;
  const root = document.documentElement;
  const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
  window.addEventListener("mousemove", onMove);
  let raf: number;
  const tick = () => {
    cx += (tx - cx) * k; cy += (ty - cy) * k;
    root.style.setProperty("--mxabs", `${cx}px`);
    root.style.setProperty("--myabs", `${cy}px`);
    const mx = (tx / window.innerWidth - 0.5) * 24;
    const my = (ty / window.innerHeight - 0.5) * 24;
    root.style.setProperty("--mx", `${mx}px`);
    root.style.setProperty("--my", `${my}px`);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
}, []);
```

#### 2-b. `src/components/Header.tsx`

デザイン仕様:
- ロゴ: `R. Matsuba` (Newsreader italic) + `— Notebook` (mono muted)
- ナビ: mono uppercase、active = bold、inactive = opacity 0.65
- スクロール 0px: `mix-blend-mode: difference`、背景透明
- スクロール >80px: 背景 `color-mix(in oklch, var(--bg) 75%, transparent)`、`backdrop-filter: blur(20px)`、下ボーダー `--rule-soft`
- 既存の `ThemeToggle` コンポーネントはそのまま残す

#### 2-c. `src/components/Footer.tsx`

デザイン仕様（`design_handoff/shared.jsx` の `<Footer>` を参照）:
- 大きなイタリック体 `— intelligere.`
- Index グリッド（Home / About / Blog / Library）
- Correspondence（メール・GitHub・note リンク）
- コロフォン: mono muted、サイト名・年・フレームワーク

---

### Step 3: 共通フック・ユーティリティの追加

#### `src/hooks/useScrollReveal.ts`（既存を更新）

IntersectionObserver + スクロールフォールバックで `.rv` クラスに `.in` を付与する。`design_handoff/shared.jsx` の `useReveal` 実装を参照。

```ts
// threshold: 0.15, rootMargin: "0px 0px -8% 0px"
// スクロール位置でも判定（IO が発火しない場合のフォールバック）
```

#### `src/hooks/useReadingProgress.ts`（新規作成）

```ts
import { useState, useEffect } from "react";
export function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(Math.min(1, h.scrollTop / (h.scrollHeight - h.clientHeight)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}
```

#### `src/components/KineticText.tsx`（新規作成）

`design_handoff/shared.jsx` の `KineticText` コンポーネントを TypeScript に移植。

Props:
```ts
interface KineticTextProps {
  text: string;
  by?: "word" | "char";
  step?: number;   // ms per item, default 60
  delay?: number;  // initial delay ms, default 0
}
```

---

### Step 4: ページの実装

各ページは `design_handoff/` の対応する HTML ファイルを視覚的リファレンスとして使い、**コンテンツは microcms から取得した実データに差し替える**。

#### 4-a. Home — `src/pages/+Page.tsx`

参照: `design_handoff/Home.html`（variation-b を使用）

実装するセクション:
1. **Hero** (100vh, grid, place-items: center)
   - スピノザの引用（KineticText）
   - スクロールキュー（`CONTINUE` + アニメーションライン）
   - 右カラム: Catalog card + Profile card
   - Hero parallax（スクロールで translateY）
2. **§ 01 — The author**: プロフィール写真 + 引用 + バイオ + メタ情報
3. **§ 02 — Three concerns**: 3カラムチャプターグリッド（ホバーアニメーション）
4. **Epilogue**: 全幅センタリング引用

#### 4-b. About — `src/pages/about/+Page.tsx`

参照: `design_handoff/About.html`

実装するセクション:
1. **Page header**: `fol. 002 / About Me` + H1 `De auctore.`
2. **§ 01 — Profile**: 2カラム（プロフィール写真 + バイオ）
3. **§ 02 — Research**: 研究内容 + キーワードカード
4. **§ 03 — Coding**: 42Tokyo + tech grid（`src/data/tech.ts` を使用）
5. **§ 04 — Books**: 読書統計 + Library リンク

#### 4-c. Blog list — `src/pages/blogs/+Page.tsx`

参照: `design_handoff/Blog.html`

実装するセクション:
1. **Page header**: `fol. 003 / Blog` + H1 `Notebook.`
2. **Tag filter** (sticky): ピルボタン、active/inactive 切り替え
3. **Post list**: numbered rows（`grid-template-columns: 64px 1fr auto`）

データ: microcms から取得した `posts` 配列を使用。タグフィルターは client-side で `useState` で管理。

#### 4-d. Blog post — `src/pages/blogs/@slug/+Page.tsx`

参照: `design_handoff/BlogPost.html`

実装する要素:
1. **ReadingProgress** コンポーネント（`useReadingProgress` を使用）
2. **記事ヘッダー**: タグ + H1 + リード文 + メタ情報
3. **ToC** (`.toc`): 目次ボックス
4. **`.prose`** タイポグラフィ: drop cap・blockquote・pull quote・footnotes
5. **ワイドレイアウト** (≥1140px): サイドバー（article info + author card）
6. **Prev/Next ナビ**

データ: microcms の `/api/blogs/[slug]` から取得。

#### 4-e. Library — `src/pages/books/+Page.tsx`

参照: `design_handoff/Library.html`

実装するセクション:
1. **Page header**: `fol. 004 / Library` + H1 `Bibliotheca.`
2. **Genre filter bar** (sticky, backdrop-blur 16px)
3. **Status bar**: `{GENRE} — {N} volumes`
4. **Book grid**: `repeat(auto-fill, minmax(140px, 1fr))`、カバーカード

データ: microcms の `/api/books` から取得。`src/data/genreTheme.ts` のジャンル色を使用。

#### 4-f. Book detail — `src/pages/books/@id/+Page.tsx`

参照: `design_handoff/BookDetail.html`

実装するセクション:
1. **Hero**: 200px ブックカバー + メタ情報 DL + レーティング
2. **§ Review**: `.review-prose`（drop cap）
3. **§ Passages**: `.passage`（左ボーダー引用）
4. **Related books**: 関連書籍グリッド

データ: microcms の `/api/books/[id]` から取得。

---

### Step 5: 既存コンポーネントの更新

#### `src/components/BookCard.tsx`

`design_handoff/Library.html` のカードデザインに合わせて更新:
- 2/3 アスペクトカバー（solid color bg + 左スパイン）
- ホバー: `translateY(-4px)` + ボーダー色 → `--accent`
- ジャンル色は `src/data/genreTheme.ts` から取得

#### `src/components/PostCard.tsx`

`design_handoff/Blog.html` の行デザインに合わせて更新（または削除して Blog ページにインライン化）。

---

### Step 6: テーマトグル確認

既存の `src/hooks/useTheme.ts` と `src/components/ThemeToggle.tsx` はそのまま維持する。ただし `<html>` の `data-theme` 属性が `"dark"` / `"light"` に設定されることを確認し、CSS カスタムプロパティが正しく切り替わることをテストする。

---

## 実装上の注意点

- **アニメーションについて:** `design_handoff/` の HTML は Babel/React をインライン実行しているため、rAF が抑制されアニメーションがスキップされることがある。実ブラウザ（Vite dev server）では正常に動作する。
- **静的データ vs CMS:** プロトタイプのサンプルデータは参照用。本番では microcms の実データに差し替えること。
- **Tailwind との共存:** 新しい CSS カスタムプロパティと Tailwind クラスは共存可能。ただしデザイントークン（色・フォント）は CSS カスタムプロパティを優先する。
- **`mix-blend-mode: difference` on Header:** 意図的な実装。スクロール前のヘッダーがどの背景色の上でも自動的に色が反転する。
- **KineticText の安全網:** 遅延 +860ms 後に強制的に `opacity: 1` にする安全タイマーを必ず実装すること（`design_handoff/shared.jsx` 参照）。

---

## アセット

| プロジェクト内パス | 用途 |
|---|---|
| `src/assets/profile.jpg` | プロフィール写真 |
| `src/assets/favicon.png` | ファビコン・ロゴ |
| `src/assets/github-original.svg` | フッターリンク |
| `src/assets/note.svg` | フッターリンク |

---

## 完了チェックリスト

- [ ] Step 1: `src/style.css` 更新済み（CSS トークン・アニメーション・タイポグラフィ）
- [ ] Step 2: Header / Footer / Layout 更新済み
- [ ] Step 3: `useScrollReveal`, `useReadingProgress`, `KineticText` 実装済み
- [ ] Step 4-a: Home ページ実装済み
- [ ] Step 4-b: About ページ実装済み
- [ ] Step 4-c: Blog 一覧実装済み
- [ ] Step 4-d: Blog 記事詳細実装済み
- [ ] Step 4-e: Library 実装済み
- [ ] Step 4-f: Book 詳細実装済み
- [ ] Step 5: BookCard / PostCard 更新済み
- [ ] Step 6: ダーク/ライトテーマ切り替え動作確認済み
