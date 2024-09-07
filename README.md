# My personal site

This is a very quick readme for my personal site. I'm sure I'll update it later. (trust me, I won't)

## Features

- An API - uses Apollo GraphQL on a Cloudflare Worker
- A website - uses Remix on Cloudflare Pages

## Setup

1. Install dependencies:

```sh
npm install
```

2. Run

```sh
npm start
```

This project uses `concurrently` to execute the `dev` script in both the `api` and `www` packages.

Assuming the typical ports are available, you can access the following:

- www: `http://localhost:5173/`
- api: `http://localhost:8787/`

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

Generate types for your GraphQL queries in packages/www using:

```sh
npm run codegen
```

## Wrangler

The `wrangler.toml` variables are set to my personal account. If you wish to attempt deploying this project, you'll need to update the KV namespace bindings.
