.PHONY: newpost importpost exportbooks exportbooks-csv

newpost:
	@read -p "Title: " title; \
	read -p "Slug (optional): " slug; \
	if [ -z "$$title" ]; then \
	  echo "Error: Title is required."; \
	  exit 1; \
	fi; \
	if [ -n "$$slug" ]; then \
	  bun run apps/frontend/scripts/new_post.ts "$$title" --slug "$$slug"; \
	else \
	  bun run apps/frontend/scripts/new_post.ts "$$title"; \
	fi


importpost:
	bun run apps/frontend/scripts/import_posts.ts


exportbooks:
	bun --env-file=apps/frontend/.env.local run scripts/export_books.ts

exportbooks-csv:
	bun --env-file=apps/frontend/.env.local run scripts/export_books.ts --format csv


typebuild:
	cd packages/shared && pnpm build
