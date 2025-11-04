PHONY: run-dev
run-dev: 
	pnpm run dev

PHONY: install
install: 
	pnpm install

PHONY: deploy
deploy:
	pnpm run deploy

PHONY: build
build:
	pnpm build

PHONY: prepare_