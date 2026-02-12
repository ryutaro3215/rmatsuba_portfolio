# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/blog site (rmatsuba_portfolio). Turborepo monorepo with pnpm workspaces.

## Monorepo Structure

- **`apps/frontend`** — React SPA (Vite + React 19 + React Router + Tailwind CSS v4). Uses React Compiler via babel-plugin-react-compiler.
- **`packages/shared`** (`@mysite/shared`) — Shared Zod schemas and TypeScript types (Book, FrontMatter/ParsedPost, Tech). Must be built before frontend can consume it.

## Commands

```bash
pnpm dev              # Start all workspaces in dev mode (Vite dev server for frontend)
pnpm build            # Build all workspaces (turbo)
pnpm check            # Lint + format check via Biome (runs on whole repo)
pnpm check:fix        # Auto-fix lint + format issues
pnpm typecheck        # TypeScript type-check all workspaces

# Shared package — rebuild after changing schemas/types
make typebuild        # or: cd packages/shared && pnpm build

# Blog post management (requires bun)
make newpost          # Interactive: prompts for title/slug, creates markdown in apps/frontend/contents/posts/
```

## Pre-commit Hooks (Husky)

Runs `pnpm check`, `pnpm typecheck`, then `bun run apps/frontend/scripts/update_post.ts` on every commit.

## Architecture Details

### Blog Content Pipeline

Blog posts are markdown files in `apps/frontend/contents/posts/` with YAML front matter (title, emoji, date, created_at, updated_at, draft, slug, tags). Posts are imported at build time via Vite's `import.meta.glob` (eager, raw) in `apps/frontend/src/app/importBlogData.tsx`, parsed with `yaml` library, and validated against `FrontMatterSchema` from `@mysite/shared`. Rendered with react-markdown + remark-gfm + remark-math + rehype-katex.

### Static Data

Book and tech data live as typed arrays in `apps/frontend/src/data/` (books.ts, tech.ts) — not fetched from an API. Book covers and tech icons are in `apps/frontend/src/assets/` and loaded via `import.meta.glob` in `apps/frontend/src/app/importImages.tsx`.

### Routing

React Router v7 (browser router) defined in `apps/frontend/src/app/router.tsx`. Routes: `/` (Home), `/about`, `/blog`, `/blog/:slug`, `/books` (Library), `/books/:bookId`. All routes wrapped in `DefaultLayout` (Header + main + Footer).

### Shared Package

`@mysite/shared` exports Zod schemas with inferred types. When modifying schemas, run `make typebuild` to regenerate `dist/` before the frontend can pick up changes.

## Code Style

- **Biome** for formatting and linting (not ESLint/Prettier for formatting). Indent: spaces, quotes: double.
- `useSortedClasses` rule enforced — Tailwind classes must be sorted.
- Biome organizes imports automatically.
- Language: codebase uses Japanese for UI text and comments.
