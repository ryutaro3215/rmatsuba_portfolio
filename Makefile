.PHONY: newpost

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


typebuild:
	cd packages/shared && pnpm build
