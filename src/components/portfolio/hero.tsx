import { PROFILE, STATS } from '@/lib/portfolio-data'
import { ArrowDown, Github } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* background: grid + glow orbs */}
      <div className="nc-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-[280px] w-[280px] rounded-full bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="nc-fade-up mx-auto flex max-w-fit items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-emerald-300 sm:text-[13px]">
            {PROFILE.available}
          </span>
        </div>

        <h1
          className="nc-fade-up mx-auto mt-8 max-w-4xl text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          I build{' '}
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            real-time
          </span>{' '}
          dashboards, bots &{' '}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            AI apps
          </span>
          .
        </h1>

        <p
          className="nc-fade-up mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {PROFILE.tagline}
        </p>

        <div
          className="nc-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '360ms' }}
        >
          <a
            href="#projects"
            className="flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 text-[15px] font-semibold text-emerald-950 transition-all hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.35)]"
          >
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 text-[15px] font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            <Github className="h-4.5 w-4.5" />
            GitHub profile
          </a>
        </div>

        <dl
          className="nc-fade-up mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4"
          style={{ animationDelay: '480ms' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-[#0b0d10] px-4 py-5">
              <dt className="order-2 text-center text-[11px] uppercase tracking-wider text-zinc-500">
                {stat.label}
              </dt>
              <dd className="order-1 text-2xl font-bold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
