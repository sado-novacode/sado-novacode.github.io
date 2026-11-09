import { PROFILE, NAV_LINKS } from '@/lib/portfolio-data'
import { Github, Zap } from 'lucide-react'

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="NovaCode home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30">
            <Zap className="h-4 w-4 fill-emerald-400 text-emerald-400" />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-white">
            Nova<span className="text-emerald-400">Code</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            aria-label="GitHub profile"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 sm:block"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
