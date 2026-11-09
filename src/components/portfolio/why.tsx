import { ShieldCheck, Layers, Wallet, MessagesSquare, type LucideIcon } from 'lucide-react'
import { WHY } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  layers: Layers,
  wallet: Wallet,
  chat: MessagesSquare,
}

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Why work with me
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A freelancer you can verify
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/25">
                    <Icon className="h-5 w-5 text-amber-300" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
