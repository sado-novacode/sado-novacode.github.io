import { PROFILE } from '@/lib/portfolio-data'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-zinc-500">
          © 2026 {PROFILE.brand} — designed & built by {PROFILE.name}
        </p>
        <p className="text-sm text-zinc-600">Next.js · Tailwind CSS · Open source</p>
        <a
          href="#top"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
