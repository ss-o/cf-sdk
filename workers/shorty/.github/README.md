# <kbd><samp>ShortY</samp></kbd>

The URL shortener using Cloudflare Workers and KV storage.

## 🕺 Prerequisites

```bash
pnpm i
pnpm add -g @cloudflare/wrangler
```

## 🌱 Seeding the data

> **Note**: You will need to set up a Cloudflare account for KV storage and Workers.

Create two KV namespaces:

```bash
wrangler kv:namespace create SHORT_URLS
wrangler kv:namespace create SHORT_URLS --preview
```

Add the required data to both namespaces:

```bash
wrangler kv:key put --binding SHORT_URLS "/4" "https://9gag.com/404/" --preview false
wrangler kv:key put --binding SHORT_URLS "/4" "https://9gag.com/404/" --preview
```

### 🚀 Running the project

```bash
wrangler dev --local
```

When you run `wrangler dev` and visit http://localhost:8787/4 to check the result.
