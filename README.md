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
npm run start
```

This project uses `pm2` so you can use `npm run start`, `npm run stop` and `npm run logs`.

Local development "usually" runs at: 
 - www: `http://localhost:5173/`
 - api: `http://localhost:53063` or sometimes any port it feels like (check logs)

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

Generate types for your GraphQL queries in packages/www using:

```sh
npm run codegen
```
