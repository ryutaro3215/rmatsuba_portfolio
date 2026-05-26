# Handoff: rmatsuba_portfolio — Full Redesign

## Overview
Ryutaro Matsuba のポートフォリオサイト全面リデザイン。現在 **Vike (vite-plugin-ssr) + React + Tailwind CSS** で構築されているサイトを、同フレームワーク・同ファイル構造のまま維持しつつ、デザインシステムを以下の方向性に刷新する。

## About the Design Files
このフォルダ内の HTML ファイル（`Home.html`, `About.html`, `Blog.html`, `Library.html`）は **デザインリファレンス（高忠実度プロトタイプ）** として作成されたものです。本番コードをそのまま転用するのではなく、**これらの HTML が示す見た目・インタラクション・アニメーションを、既存の Vike + React + Tailwind 環境に再実装** することがタスクです。

## Fidelity
**High-fidelity（高忠実度）** — 最終的な色・タイポグラフィ・スペーシング・インタラクションが確定したモックアップです。開発者はこれを pixel-perfect に再現してください。唯一の例外: CSS トランジション / アニメーションは、実ブラウザ環境では問題なく動作しますが、この HTML プロトタイプ環境では rAF が抑制されているため一部スキップされています。実ブラウザでは通常通り動作します。

---

## Design System

### Typography
| Role | Font | Weights | Notes |
|---|---|---|---|
| Display / Body serif | **Newsreader** (Google Fonts) | 200–400, italic | `font-style: italic` for display |
| Monospace (labels, dates, metadata) | **JetBrains Mono** (Google Fonts) | 300–600 | `letter-spacing: 0.04–0.4em` |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=JetBrains+Mono:ital,wght@0,300..700;1,300..700&display=swap');
```

### Colors — CSS Custom Properties
```css
/* Dark mode (default) */
--bg:        #0a0a0b;
--bg-elev:   #0f0f10;
--ink:       #f3efe6;
--ink-mute:  #8a857b;
--ink-quiet: #4a4742;
--rule:      #232220;
--rule-soft: #1a1917;

/* Light mode [data-theme="light"] */
--bg:        #f4f0e8;
--bg-elev:   #ece8df;
--ink:       #131210;
--ink-mute:  #6b665e;
--ink-quiet: #a8a299;
--rule:      #cfc9bd;
--rule-soft: #e0dbcf;

/* Accent — midnight blue */
/* dark  */ --accent: oklch(0.58 0.13 250);   /* ≈ #3870B8 */
/* light */ --accent: oklch(0.42 0.14 250);   /* ≈ #1F4E79 */
```

Theme is toggled by setting `data-theme="light"` on `<html>`. Default: `dark`.

### Easing
```css
--ease: cubic-bezier(0.16, 1, 0.3, 1);   /* springy ease-out */
```

### Spacing
Content max-width: `1320px`, horizontal padding: `40px` (desktop), `22px` (mobile ≤720px).

---

## Screens

### 1. Home (`/` — Home.html)

**Hero (100vh, display: grid, place-items: center)**
- Kicker (mono, 11px, 0.25em spacing, uppercase): `— Spinoza, Ethica, III. Praefatio`
- Latin quote h1 (Newsreader italic 200, clamp(36px, 6.4vw, 92px), word-spacing: 0.08em):
  ```
  Non ridere, non lugere,
  neque detestari,
  sed intelligere.
  ```
  — last phrase (`sed intelligere.`) in `--accent` color
- Horizontal rule 60px, `--rule` color, centered
- JA translation 14px: `馬鹿にしたり嘆いたり疑ったりせずに、ただありのままを理解する。`
- Scroll cue (bottom center): `CONTINUE` (mono 10px) + animated 60px line
- Bottom-right meta (absolute, mono 10px): `§ Introitus — MMXXVI` / `Lat. trans. /sed/ = but, only`
- Faint 5-column grid lines (5px border-left, opacity 0.25)

**Catalog card (hero right column, sticky)**
- Border `--rule`, padding 22px, bg `--bg-elev` 60% transparent
- Mono 10px DL: Title / Author / Period / Subject / Language / Place

**Profile card (vb-hero-meta, right)**
- Same border style, smaller

**§ 01 — The author (profile section)**
- Portrait: grayscale 50%, 3/4 aspect ratio, `--rule` border frame
- Italic pull-quote 22px with left `--accent` 1px border
- Body text 15px/1.85
- Footer: mono metadata grid (Roll / Mail / Github)

**§ 02 — Three concerns (chapters grid)**
- 3 columns
- Each card: top border with accent sweep on hover
- Large italic chapter number in `--accent`, 30px title, 14px body
- Hover: card lifts `translateY(-4px)`, `→` arrow moves right

**Epilogue quote**
- Full-width centered, italic 200, clamp(28px, 4.4vw, 60px)
- `—` attribution mono below

---

### 2. About (`/about` — About.html)

**Page header (same pattern across all pages)**
- Kicker: `fol. 002 / About Me` (mono 11px, accent color)
- H1: `De auctore.` (Newsreader italic 200, clamp(56px, 8vw, 120px))
- Full-width rule

**§ 01 — Profile**
- 2-col: 300px portrait | 1fr bio
- Portrait: 1/1 aspect, grayscale 40%, `--rule` border + padding frame, mono caption
- Profile dl: 9px uppercase mono labels, 12px values
- Bio: italic pull-quote 20px + left `--accent` border; body 15px/1.9
- Footnote labels (`¹ profile`) in mono accent

**§ 02 — Research**
- 2-col: body text | keyword card
- Keyword card (`--rule` border): DL with mono 10px labels, 13px values
  - Field: Management · Organization Science
  - Theme: Intrapersonal Diversity
  - Focus: Cognitive Flexibility
  - Method: Empirical · Survey study
  - Status: Undergrad thesis → M.A. plan

**§ 03 — Coding**
- 42Tokyo link, intro paragraph
- 2×2 tech grid (Languages / Frameworks & Libraries / Infrastructure / Tooling)
- Each block: `--rule` border, mono 10px category header, tag chips (12px mono, `--rule-soft` border, borderRadius 2)

**§ 04 — Books**
- 2-col: prose | stats
- Stats: large italic accent numbers (≈350 / ≈90 / 岩波 / 講談社), mono labels, horizontal rule separators
- "Open Library →" link in accent mono

---

### 3. Blog (`/blogs` — Blog.html)

**Page header**
- Kicker: `fol. 003 / Blog`
- H1: `Notebook.`
- Subtitle: 日々の思考と学びの備忘録。

**Tag filter row (sticky top: 64px)**
- Pill buttons (mono 11px, `--rule` border, borderRadius 2, `white-space: nowrap`)
- Active: `--ink` bg, `--bg` text; inactive: transparent bg, `--ink-mute` text
- No transition (instant swap)

**Post list (border-top `--rule`)**
Each row: `grid-template-columns: 64px 1fr auto`
- Index number: Newsreader italic 200, 44px, `--ink-quiet` color
- Tags: mono 10px, `--accent`, uppercase `#tag`
- Title: Newsreader italic 300, clamp(18px, 2.4vw, 30px), `letter-spacing: -0.01em`
- Excerpt: 14px/1.75, `--ink-mute`
- Date: mono 11px, `--ink-mute`, right column
- Hover: accent line sweeps across bottom border (0 → 100% width)

---

### 4. Library (`/books` — Library.html)

**Page header**
- Kicker: `fol. 004 / Library`
- H1: `Bibliotheca.`

**Genre filter bar (sticky, backdrop-blur 16px)**
- Same chip style as Blog tags, with count badge (opacity 0.55)

**Status bar**
- `mono 11px`: `{GENRE} — {N} volumes`

**Book grid**
- `grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))`, gap 16px
- Each card: 2/3 aspect cover + metadata below
- Cover: solid color bg (per book), left spine accent (4px, genre accent color)
- Cover overlay: genre label 9px + title 10px both mono white
- Metadata: title 11px/1.35, author mono muted 10px
- Hover: `translateY(-4px)` + border color → `--accent`

---

## Animations & Interactions

### Kinetic Text Reveal (KineticText)
Words/chars fade in sequentially on scroll-into-view.

```js
// On intersection (or scroll fallback):
items.forEach((it, i) => {
  const d = delay + i * step;
  setTimeout(() => it.classList.add("in"), d);
  // Safety net — force final state if transitions stall:
  setTimeout(() => {
    it.style.transition = "none";
    it.style.opacity = "1";
    it.style.transform = "none";
    it.style.filter = "none";
  }, d + 860);
});
```

```css
.kt-word {
  display: inline-block;
  opacity: 0;
  filter: blur(8px);
  transform: translateY(0.35em);
  transition: opacity 800ms var(--ease), filter 800ms var(--ease), transform 800ms var(--ease);
}
.kt-word.in { opacity: 1; filter: blur(0); transform: translateY(0); }
```

### Scroll Reveal (sections)
```css
.rv { opacity: 0; transform: translateY(28px); transition: opacity 900ms var(--ease), transform 900ms var(--ease); }
.rv.in { opacity: 1; transform: translateY(0); }
```
Trigger via IntersectionObserver (threshold: 0.15, rootMargin: "0px 0px -8% 0px") + scroll listener fallback.

### Rule Draw
```css
.rule-draw { height: 1px; background: var(--rule); transform: scaleX(0); transform-origin: left; transition: transform 1200ms var(--ease); }
.rule-draw.in { transform: scaleX(1); }
```

### Hero Parallax
On scroll, the hero center element shifts up slightly:
```js
const t = Math.min(1, scrollY / window.innerHeight);
el.style.setProperty("--hero-shift", `${t * -40}px`);
el.style.setProperty("--hero-opacity", `${1 - t * 0.6}`);
```

### Mouse Cursor Light
Large soft radial gradient (400px radius) following cursor with lerp (k=0.08):
```css
.cursor-light {
  position: fixed; inset: 0; pointer-events: none; z-index: 2;
  opacity: var(--light-opacity, 0.10);
  background: radial-gradient(400px circle at var(--mxabs, 50%) var(--myabs, 50%), var(--accent) 0%, transparent 60%);
  mix-blend-mode: screen;
}
```

### Grain Noise
Fixed overlay, mix-blend-mode: overlay, opacity 0.06:
```css
.grain-layer {
  position: fixed; inset: -10%; pointer-events: none; z-index: 1;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 1.2 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  background-size: 240px 240px;
  mix-blend-mode: overlay;
  opacity: var(--grain-opacity, 0.06);
  transform: translate3d(var(--mx, 0), var(--my, 0), 0);
}
```
Grain moves subtly with mouse: `dx = (mouseX/vw - 0.5) * 24px`, `dy = (mouseY/vh - 0.5) * 24px`.

### Header Transition
- **Transparent** (mix-blend-mode: difference) when at top
- On scroll > 80px: condensed, `bg: color-mix(in oklch, var(--bg) 75%, transparent)`, backdrop-blur 20px, bottom border `--rule-soft`

### Chapter Hover (Home — Editorial)
- `::before` pseudo: top border sweeps from 0 → 100% in accent color
- Card lifts `translateY(-4px)`, `→` arrow shifts `translateX(8px)`

### Blog Row Hover
- Bottom border accent sweep: `width: 0 → 100%` on hover

---

### 5. Blog Post (`/blogs/[slug]` — BlogPost.html)

**Reading progress bar**
- `position: fixed; top: 0; left: 0; right: 0; height: 2px; background: var(--accent); transform-origin: left; z-index: 60`
- `scaleX(progress)` where `progress = scrollTop / (scrollHeight - clientHeight)`

**Back link**
- `← Blog` (mono 11px, 0.25em spacing, uppercase)
- `padding-top: 120px`

**Article header** (border-bottom `--rule`)
- Tags row: `#tag` format, mono 10px, `--accent`, `0.22em` spacing, uppercase
- H1: Newsreader italic 200, `clamp(32px, 5.2vw, 72px)`, `letter-spacing: -0.02em`, `line-height: 1.05`, `white-space: pre-line`
  - Second line (subtitle) in `--ink-mute`
  - Uses `KineticText` by="word" animation
- Lede: italic 18px, `--ink`, max-width 680px
- Meta row: date · reading time · English title — mono 11px, `--ink-mute`, `0.15em` spacing

**Table of Contents**
- Box: `border: 1px solid var(--rule)`, padding 20px 24px, margin-bottom 48px
- Title: mono 10px, `0.3em`, uppercase, `--ink-mute`
- Items: mono 12px, `0.06em`, `--ink-mute`; hover → `--accent`

**Article body (.prose)**
```css
.prose { font-family: var(--serif); font-size: 17px; line-height: 1.95; }
.prose p { margin: 0 0 1.6em; text-indent: 1.5em; }
.prose p:first-of-type { text-indent: 0; }
.prose p:first-of-type::first-letter {
  font-family: var(--serif); font-style: italic; font-weight: 200;
  float: left; font-size: 5.2em; line-height: 0.82;
  padding: 0.04em 0.1em 0 0; color: var(--accent);
}
.prose h2 {
  font-family: var(--serif); font-style: italic; font-weight: 300;
  font-size: clamp(22px, 2.6vw, 32px); letter-spacing: -0.015em;
  margin: 2.8em 0 0.8em; line-height: 1.15;
}
.prose h2::before {
  content: attr(data-sec) " — ";
  font-family: var(--mono); font-style: normal; font-size: 11px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--accent); margin-right: 4px; vertical-align: middle;
}
.prose blockquote {
  margin: 2.2em 0; padding: 0 0 0 28px;
  border-left: 2px solid var(--accent); font-style: italic;
  font-size: 20px; line-height: 1.65; font-weight: 300;
}
.prose blockquote cite {
  display: block; font-style: normal;
  font-family: var(--mono); font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-mute); margin-top: 12px;
}
.pull { /* pull quote */
  font-style: italic; font-weight: 300; font-size: 20px; line-height: 1.6;
  border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  padding: 22px 0; margin: 2.4em 0;
}
.pull::before { content: "\201C"; color: var(--accent); font-size: 2em; }
.pull::after  { content: "\201D"; color: var(--accent); font-size: 2em; }
```

**Footnotes** (`.footnotes`)
- `border-top: 1px solid var(--rule)`, `margin-top: 60px`
- Items: mono 11px, `--ink-mute`, `0.03em` spacing

**Article layout (wide ≥1140px)**
```css
.article-grid { display: grid; grid-template-columns: 1fr 220px; gap: 80px; align-items: start; }
.article-aside { position: sticky; top: 100px; }
```

**Sidebar (article-aside)**
- "Article info" card: border `--rule`, padding 20px 22px
  - DL: Date / Reading / Filed — mono 9px uppercase labels, 12px values
- "Author" card: border `--rule`, padding 20px 22px
  - 36px circle portrait + name (italic 12px) + mono muted 10px
  - Bio: 12px, `line-height: 1.6`

**Prev/Next navigation**
- `grid-template-columns: 1fr 1fr`, `border-top: 1px solid var(--rule)`, `margin-bottom: 160px`
- Center divider: `border-right: 1px solid var(--rule)`
- Label: mono 10px, `0.25em` uppercase, with `←` / `→` in accent
- Title: Newsreader italic 300, `clamp(15px, 2vw, 22px)`

---

### 6. Book Detail (`/books/[id]` — BookDetail.html)

**Back link** — same pattern as BlogPost (`← Library`)

**Hero section** (`grid-template-columns: 200px 1fr`, gap 64px, `border-bottom: 1px solid var(--rule)`)

Book cover (200px wide):
- `aspect-ratio: 2/3`, solid `coverBg` color, `border: 1px solid var(--rule)`
- Left spine: 6px wide, genre `accentColor`
- Cover content: series label (mono 8px, 0.3em, white 45%), title (Newsreader italic 200, 18px, white 90%), author + publisher (mono 9px–8px, white 50%–30%)
- `box-shadow: 6px 6px 24px rgba(0,0,0,0.5)`
- Caption below: mono 9px, `0.22em`, uppercase, centered, `--ink-mute`

Metadata (right column):
- Genre kicker: mono 11px, `--accent`, `0.28em` uppercase
- H1: Newsreader italic 200, `clamp(40px, 5.6vw, 76px)`, `letter-spacing: -0.02em`, `line-height: 0.95`
  - Uses `KineticText` by="char"
- Subtitle: italic 15px, `--ink-mute`
- DL (`grid-template-columns: 120px 1fr`, gap `16px 24px`):
  - Keys: mono 10px, `0.2em`, uppercase, `--ink-mute`
  - Values: 14px, `line-height: 1.5`
  - Fields: 著者 / 訳者 / 出版社 / シリーズ / 出版年 / 頁数 / ステータス / 読了
- Rating row: 5 dots (8px circle), filled = `--accent`, empty = `--rule`

**§ Review section**
- Max-width 840px
- Section header: mono 11px `§ Review` in `--accent` + `rule-draw` line
- `.review-prose`: Newsreader 16px, `line-height: 1.95`
  - Drop cap on first letter: float left, 4.8em, `--accent`
  - `text-indent: 1.4em` from second paragraph on

**§ Passages section**
- Max-width 840px, `border-bottom: 1px solid var(--rule)`
- Each passage (`.passage`): `border-left: 2px solid var(--accent)`, `padding-left: 24px`
  - Latin text: italic 300, 16px–17px, `line-height: 1.65`
  - Japanese translation: 14px, `--ink-mute`, non-italic
  - Citation: mono 10px, `0.18em`, uppercase, `--ink-mute`

**Related books**
- `grid-template-columns: repeat(auto-fill, minmax(110px, 1fr))`, gap 14px
- Each card: 2/3 cover (solid color bg + 4px left spine accent + mono title) + italic title + mono author
- Hover: `border-color → --accent`

---

## State Management

| Page | State |
|---|---|
| Home | Theme (dark/light), accent color — read from `data-theme` attr on `<html>` |
| About | Scroll reveals (IO-based) |
| Blog | `activeTag: string \| null` — filters post list |
| Library | `activeGenre: string \| null` — filters book grid |
| BlogPost | Reading progress (0–1 float, derived from scroll) |
| BookDetail | None (static render from CMS data) |

---

## File Structure (existing codebase)

The current project uses:
```
src/
  app/             — importBlogData.tsx, importImages.tsx
  assets/          — images
  components/      — BookCard.tsx, PostCard.tsx, Header.tsx, Footer.tsx, ThemeToggle.tsx
  data/            — tech.ts, genreTheme.ts, emoji.ts
  hooks/           — useScrollReveal.ts, useStaggerChildren.ts, useTheme.ts
  lib/             — microcms.ts
  pages/           — +Page.tsx, +Layout.tsx per route
  style.css        — global styles
```

### What to change / add

1. **style.css** — Replace Tailwind classes with new CSS custom properties (above). Add `.kt-word`, `.rv`, `.rule-draw`, `.grain-layer`, `.cursor-light`, `.prose`, `.review-prose`, `.passage`, `.pull`, `.footnotes`, `.toc`, `.reading-bar` etc. Keep Tailwind for utility use if desired.

2. **+Layout.tsx** — Update `<Header>` / `<Footer>` to new designs. Add grain/light layers as fixed elements.

3. **components/Header.tsx** — Redesign per spec. Logo: `R. Matsuba / — Notebook`. Nav: mono uppercase, active = bold, inactive = opacity 0.65. Scroll behavior: transparent → backdrop-blur condensed.

4. **components/Footer.tsx** — Redesign as Colophon with large italic `— intelligere.` + Index grid + Correspondence.

5. **pages/+Page.tsx** (Home) — Full Hero redesign + Editorial chapters.

6. **pages/about/+Page.tsx** — 4 sections: Profile / Research / Coding / Books.

7. **pages/blogs/+Page.tsx** — Blog list with numbered rows + tag filter.

8. **pages/blogs/[slug]/+Page.tsx** — Blog post detail: reading progress bar, ToC, prose layout with sidebar, prev/next nav, footnotes.

9. **pages/books/+Page.tsx** — Book grid with genre filter bar.

10. **pages/books/[id]/+Page.tsx** — Book detail: cover card, metadata DL, review prose, passages, related books grid.

11. **hooks/useScrollReveal.ts** — Keep logic but update CSS class triggers.

12. **hooks/useReadingProgress.ts** *(new)* — Returns a `progress: number` (0–1) derived from window scroll position. Used by BlogPost reading bar.

```ts
// hooks/useReadingProgress.ts
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

---

## Assets

| File | Source | Usage |
|---|---|---|
| `assets/profile.jpg` | `src/assets/profile.jpg` | Profile portrait |
| `assets/favicon.png` | `src/assets/favicon.png` | Logo mark |
| `assets/github.svg` | `src/assets/github-original.svg` | Footer |
| `assets/note.svg` | `src/assets/note.svg` | Footer |

---

## Design Reference Files

All files in this handoff folder:

| File | Description |
|---|---|
| `Home.html` | Full Home page prototype (Editorial variation, dark mode) |
| `About.html` | About page prototype |
| `Blog.html` | Blog list prototype |
| `Library.html` | Library/books grid prototype |
| `BlogPost.html` | Blog post detail prototype (reading progress, ToC, prose, sidebar, prev/next) |
| `BookDetail.html` | Book detail prototype (cover card, metadata, review, passages, related books) |
| `styles.css` | All CSS tokens and animation utilities |
| `shared.jsx` | Header, Footer, overlay components, KineticText, reveal hooks |
| `variation-b.jsx` | Editorial Home content component |
| `page-app.jsx` | Page shell wrapper |

Open the HTML files directly in a browser to see the intended design.

### Page → Route mapping

| HTML file | Vike route | File to create/edit |
|---|---|---|
| `Home.html` | `/` | `src/pages/+Page.tsx` |
| `About.html` | `/about` | `src/pages/about/+Page.tsx` |
| `Blog.html` | `/blogs` | `src/pages/blogs/+Page.tsx` |
| `BlogPost.html` | `/blogs/:slug` | `src/pages/blogs/@slug/+Page.tsx` |
| `Library.html` | `/books` | `src/pages/books/+Page.tsx` |
| `BookDetail.html` | `/books/:id` | `src/pages/books/@id/+Page.tsx` |

---

## Notes for Claude Code

- The HTML prototypes use inline Babel/React — **do not ship these files**. They exist only as design reference.
- All CMS data (blog posts, books) currently comes from **microcms** via `src/lib/microcms.ts` — the prototype uses static sample data which should be replaced with real data.
- The `tech.ts` file contains the complete tech stack; use `devicons` or `simple-icons` for the tech badges as the current site does.
- Dark/Light theme toggle is managed by the existing `useTheme.ts` hook and `ThemeToggle.tsx` component — keep this working.
- The `mix-blend-mode: difference` on the header is intentional — it inverts the logo/nav color automatically over any background.
