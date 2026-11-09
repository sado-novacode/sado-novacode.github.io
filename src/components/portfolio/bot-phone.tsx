import { BellRing, BarChart3, Bot, CheckCheck, TrendingUp } from 'lucide-react'

type Bubble = {
  from: 'user' | 'bot'
  text: string
  time: string
  icon?: 'bell' | 'trend' | 'chart'
}

const MESSAGES: Bubble[] = [
  { from: 'user', text: 'alert BTC above 100000', time: '09:41' },
  {
    from: 'bot',
    text: 'Saved — watching BTC for you. I will ping you the moment it crosses $100,000.',
    time: '09:41',
    icon: 'bell',
  },
  {
    from: 'bot',
    text: 'BTC just crossed $100,000 — now $100,240 (+4.2% in 24h).',
    time: '14:07',
    icon: 'trend',
  },
  { from: 'user', text: 'digest', time: '21:00' },
  {
    from: 'bot',
    text: 'Daily digest — BTC +4.2%, ETH +2.1%, SOL -1.3%.',
    time: '21:00',
    icon: 'chart',
  },
]

function BubbleIcon({ icon }: { icon?: Bubble['icon'] }) {
  if (icon === 'bell') return <BellRing className="h-3.5 w-3.5 shrink-0 text-amber-300" />
  if (icon === 'trend') return <TrendingUp className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
  if (icon === 'chart') return <BarChart3 className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
  return null
}

export function BotPhone() {
  return (
    <div className="nc-float mx-auto w-full max-w-[300px] rounded-[2.4rem] border border-white/15 bg-zinc-900 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
      <div className="overflow-hidden rounded-[1.9rem] bg-[#0d1117]">
        {/* header */}
        <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.04] px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
            <Bot className="h-4.5 w-4.5 text-emerald-300" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-white">Nova Alert Bot</p>
            <p className="text-[11px] text-emerald-400">online</p>
          </div>
        </div>

        {/* messages */}
        <div className="flex flex-col gap-2.5 px-3.5 py-4">
          {MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[88%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                msg.from === 'user'
                  ? 'ml-auto rounded-br-md bg-emerald-600/85 text-emerald-50'
                  : 'mr-auto rounded-bl-md bg-white/[0.07] text-zinc-200'
              }`}
            >
              {msg.icon && (
                <span className="mb-1 flex items-center">
                  <BubbleIcon icon={msg.icon} />
                </span>
              )}
              <p>{msg.text}</p>
              <span
                className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                  msg.from === 'user' ? 'text-emerald-100/70' : 'text-zinc-500'
                }`}
              >
                {msg.time}
                {msg.from === 'user' && <CheckCheck className="h-3 w-3" />}
              </span>
            </div>
          ))}

          {/* typing indicator */}
          <div className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white/[0.07] px-3.5 py-2.5">
            <span className="nc-dot-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span className="nc-dot-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span className="nc-dot-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
          </div>
        </div>

        {/* input bar */}
        <div className="border-t border-white/8 px-3.5 py-3">
          <div className="flex items-center rounded-full bg-white/[0.06] px-4 py-2.5">
            <span className="text-[12px] text-zinc-500">Message…</span>
          </div>
        </div>
      </div>
    </div>
  )
}
