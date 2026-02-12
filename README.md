# rmatsuba_portfolio

Personal portfolio and blog site.

## Tech Stack

### Monorepo

- **Turborepo** + **pnpm** workspaces

### Frontend (`apps/frontend`)

- **React 19** with **React Compiler**
- **Vite 7** (build & dev server)
- **TypeScript 5.9**
- **React Router v7** (client-side routing)
- **Tailwind CSS v4** + `@tailwindcss/typography`

### Markdown Blog

- **react-markdown** + **remark-gfm** + **remark-math** + **rehype-katex**
- Posts are markdown files with YAML front matter, loaded at build time via `import.meta.glob`

### Shared Package (`packages/shared`)

- **Zod** schemas and inferred TypeScript types

### Tooling

- **Biome** (linting & formatting)
- **Husky** (pre-commit hooks)
