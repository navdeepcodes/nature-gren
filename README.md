# Nature Gren

Storefront for a jute accessories business — product catalog, cart, checkout,
custom orders, and an admin dashboard for managing the shop.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Supabase (catalog, orders, auth)
- OpenAI (product search)
- Tailwind + Framer Motion
- Deployed on Cloudflare (`open-next` / Workers)

## Structure

```
app/
  shop/[slug]/       product pages
  cart/               cart
  custom-orders/      bespoke order requests
  admin/
    login/
    dashboard/
  api/
    search/           AI-assisted product search
    admin/
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in your own Supabase project and
OpenAI key — nothing is provided.

```bash
npm run build
npm run cloudflare:build   # Cloudflare Workers build
npm run lint
```

## Status

Early / actively developed.
