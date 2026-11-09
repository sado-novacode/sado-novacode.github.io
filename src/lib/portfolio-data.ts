export const PROFILE = {
  name: "Sado",
  brand: "NovaCode",
  role: "Full-Stack Developer",
  email: "sado.novacode@gmail.com",
  github: "https://github.com/sado-novacode",
  githubUser: "sado-novacode",
  headline: "I build real-time dashboards, bots & AI apps.",
  tagline:
    "The developer behind NovaCode — three open-source products shipped end to end: a live crypto dashboard, a Telegram alert bot and a chat-with-PDF assistant.",
  available: "Available for freelance — remote worldwide",
  replyNote: "Usually replies within 24 hours",
} as const

export type Project = {
  index: string
  tag: string
  name: string
  tagline: string
  description: string
  features: string[]
  tech: string[]
  repo: string
  media: "coinpulse" | "novadocs" | "bot"
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    tag: "Real-time dashboard",
    name: "CoinPulse",
    tagline: "Live markets, charts, portfolio and alerts in one dark glassy UI.",
    description:
      "A cryptocurrency dashboard that streams live prices, renders candlestick and sparkline charts, tracks a personal portfolio and runs price alerts — all behind a server-side caching proxy that keeps exchange rate limits safe.",
    features: [
      "Live prices with server-side caching and rate-limit-safe API proxy",
      "Candlestick and sparkline charts powered by lightweight-charts",
      "Portfolio tracking with holdings and profit / loss view",
      "Price alerts with a background checker and notifications",
      "Fully bilingual UI — English and Persian, including RTL layout",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "lightweight-charts"],
    repo: "https://github.com/sado-novacode/coinpulse",
    media: "coinpulse",
  },
  {
    index: "02",
    tag: "AI / RAG application",
    name: "NovaDocs AI",
    tagline: "Upload a PDF, ask questions, get streamed answers with citations.",
    description:
      "A document assistant built on a full RAG pipeline: it parses and chunks your PDF, embeds the content, retrieves the most relevant passages and streams an answer that cites the exact pages — clickable citations jump straight to the source.",
    features: [
      "Full RAG pipeline: parse, chunk, embed, vector search, answer",
      "Streaming responses (SSE) so answers appear token by token",
      "Page-level citations that open the exact spot in the PDF viewer",
      "Works with any OpenAI-compatible API endpoint",
      "Bilingual interface — English and Persian with RTL support",
    ],
    tech: ["Next.js", "TypeScript", "RAG", "Vector search", "SSE", "OpenAI-compatible"],
    repo: "https://github.com/sado-novacode/nova-docs-ai",
    media: "novadocs",
  },
  {
    index: "03",
    tag: "Automation bot",
    name: "Nova Alert Bot",
    tagline: "A Telegram bot that watches Binance 24/7 and pings you in time.",
    description:
      "A self-hosted Telegram bot that monitors crypto markets around the clock and delivers ten kinds of alerts — price thresholds, percent moves, daily digests and more — driven by Binance WebSocket feeds with a chunked REST fallback for resilience.",
    features: [
      "10 alert types: threshold, percent change, daily digest and more",
      "Binance WebSocket stream with chunked REST fallback",
      "Bilingual command parser — English and Persian, incl. Persian numerals",
      "Free / Premium tiers with atomic redeem-code upgrades",
      "36+ automated tests, Docker and systemd deployment ready",
    ],
    tech: ["Python 3.12", "aiogram 3", "aiosqlite", "WebSockets", "Binance API", "Docker"],
    repo: "https://github.com/sado-novacode/nova-crypto-alert-bot",
    media: "bot",
  },
]

export const STATS = [
  { value: "3", label: "Open-source products" },
  { value: "36+", label: "Automated tests" },
  { value: "EN / FA", label: "Bilingual builds" },
  { value: "100%", label: "MIT licensed" },
] as const

export type SkillGroup = {
  title: string
  icon: "layout" | "server" | "brain" | "wrench"
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "lightweight-charts", "Zustand", "TanStack Query"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Next.js API routes", "REST & WebSocket", "Python", "aiogram 3", "Prisma", "SQLite"],
  },
  {
    title: "AI & Data",
    icon: "brain",
    items: ["RAG pipelines", "Vector search", "Embeddings", "OpenAI-compatible APIs", "SSE streaming", "PDF parsing"],
  },
  {
    title: "Ops & Quality",
    icon: "wrench",
    items: ["Git & GitHub", "Docker", "systemd", "Vitest", "pytest", "Vercel deploys"],
  },
]

export const WHY = [
  {
    icon: "shield",
    title: "Proof, not promises",
    text: "Everything I claim is public: repositories with READMEs, screenshots and passing tests you can check before we even talk.",
  },
  {
    icon: "layers",
    title: "End-to-end ownership",
    text: "From data plumbing to polished UI — I ship complete slices: dashboard, bot or AI feature, deployed and documented.",
  },
  {
    icon: "wallet",
    title: "Crypto-friendly payments",
    text: "I accept USDT (TRC-20) with milestone-based payments. No banking friction, wherever you are in the world.",
  },
  {
    icon: "chat",
    title: "Clear async communication",
    text: "Fluent English, structured progress updates and quick turnaround — built for working across time zones.",
  },
] as const

export const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#why", label: "Why me" },
  { href: "#contact", label: "Contact" },
] as const
