# FE Engineer Test

## Tech Stack
- [Svelte](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)

## How to run

### Pre-requisites
- Node.js (v18 or higher) In this project I'm using [Node.js](https://nodejs.org/en/) v20.2.0, but you can use any version above v18.0.0.
- pnpm (v7 or higher) I prefer to use [pnpm](https://pnpm.io/) as my package manager, but you can use npm or yarn as well. In this project I'm using pnpm v8.7.6, but you can use any version above v7.0.0.

### How to install pnpm
```bash
corepack enable
corepack prepare pnpm@latest --activate

# or

npm install -g pnpm
```

### Install dependencies and run the project

```bash
pnpm install
pnpm run dev
```

## How to build

### Build the app
```bash
pnpm build
```

### Preview the app
```bash
pnpm preview
```
