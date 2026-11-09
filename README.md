# NovaCode Portfolio

Personal portfolio website for **Sado** — full-stack developer. Built with **Next.js 16, TypeScript and Tailwind CSS 4**.

Showcases three open-source products:

| Project | What it is | Repo |
| --- | --- | --- |
| **CoinPulse** | Real-time crypto dashboard — live charts, portfolio & alerts | [sado-novacode/coinpulse](https://github.com/sado-novacode/coinpulse) |
| **NovaDocs AI** | Chat with your PDFs — RAG with page-level citations | [sado-novacode/nova-docs-ai](https://github.com/sado-novacode/nova-docs-ai) |
| **Nova Alert Bot** | Telegram bot with 10 crypto alert types (Binance WebSocket) | [sado-novacode/nova-crypto-alert-bot](https://github.com/sado-novacode/nova-crypto-alert-bot) |

## Features

- Dark, single-page layout: hero, selected work, tech stack, "why me", contact
- Real screenshots of the actual products embedded in browser-frame mockups
- Animated Telegram phone mockup for the bot project (pure CSS, no images)
- Scroll-reveal animations via a tiny IntersectionObserver component (no animation library)
- Copy-to-clipboard email button
- Fully responsive (mobile-first) and accessible (semantic HTML, aria labels)
- SEO metadata + OpenGraph tags, favicon included
- Zero backend, zero database — deploy anywhere as a static Next.js app

## Quickstart

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # metadata, fonts (Space Grotesk), theme color
│   ├── page.tsx            # section composition
│   ├── globals.css         # Tailwind + custom animations (nc-* classes)
│   └── icon.svg            # favicon
├── components/
│   └── portfolio/
│       ├── nav.tsx         # sticky blurred header
│       ├── hero.tsx        # headline, availability badge, stats
│       ├── projects.tsx    # three project cards with screenshots
│       ├── bot-phone.tsx   # CSS Telegram mockup
│       ├── stack.tsx       # tech stack groups
│       ├── why.tsx         # differentiator cards
│       ├── contact.tsx     # email copy + GitHub cards (client)
│       ├── footer.tsx
│       └── reveal.tsx      # IntersectionObserver scroll reveal (client)
├── lib/
│   └── portfolio-data.ts   # ALL editable content lives here
└── public/
    └── screenshots/        # product screenshots
```

## Customizing

All texts, links, stats, skills and project details are defined in a single file:

```
src/lib/portfolio-data.ts
```

Edit that file to change the name, email, GitHub URL, projects and copy — no need to touch the components. Replace the PNG files in `public/screenshots/` to swap in your own product images.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Click **Deploy** — no environment variables needed (the app is fully static).

That's it. Vercel gives you a free `*.vercel.app` URL on the Hobby plan.

## License

[MIT](LICENSE) © 2026 NovaCode / Sado
