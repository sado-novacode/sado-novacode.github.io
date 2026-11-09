import { LayoutDashboard, Server, BrainCircuit, Wrench, type LucideIcon } from 'lucide-react'
import { SKILLS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

const ICONS: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  server: Server,
  brain: BrainCircuit,
  wrench: Wrench,
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tech stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools I ship with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon]
            return (
              <Reveal key={group.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/25">
                    <Icon className="h-5 w-5 text-emerald-300" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[12px] text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
