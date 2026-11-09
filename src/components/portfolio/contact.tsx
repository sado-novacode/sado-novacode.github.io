'use client'

import { useState } from 'react'
import { PROFILE } from '@/lib/portfolio-data'
import { ArrowUpRight, Check, Copy, Github, Mail } from 'lucide-react'
import { Reveal } from './reveal'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    const email = PROFILE.email
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = email
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -bottom-44 left-1/2 h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&rsquo;s build something
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              A dashboard, a bot, an AI feature or a full app — tell me what you need and I will
              come back within 24 hours with a plan and a fixed quote.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/25">
                <Mail className="h-5 w-5 text-emerald-300" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-zinc-500">Email</p>
              <p className="mt-1 break-all text-[15px] font-semibold text-white">{PROFILE.email}</p>
              <button
                onClick={copyEmail}
                className="mt-5 inline-flex h-10 min-w-[130px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-300"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/25">
                <Github className="h-5 w-5 text-emerald-300" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-zinc-500">GitHub</p>
              <p className="mt-1 text-[15px] font-semibold text-white">@{PROFILE.githubUser}</p>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-10 min-w-[130px] items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
              >
                Open profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-10 flex items-center justify-center gap-2.5 text-sm text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently open to freelance projects — part-time or contract, paid in USDT.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
