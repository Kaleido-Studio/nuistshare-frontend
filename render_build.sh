mkdir -p bin
corepack enable --install-directory bin
export PATH="$PWD/bin:$PATH"

pnpm i
pnpm build
