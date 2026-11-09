import Image from 'next/image'
import { Check, Github, ArrowUpRight } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { BotPhone } from './bot-phone'

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-zinc-500">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.media === 'coinpulse') {
    return (
      <BrowserFrame
        src="/screenshots/coinpulse-market.png"
        alt="CoinPulse market view — live crypto prices and charts"
        url="coinpulse — markets"
      />
    )
  }
  if (project.media === 'novadocs') {
    return (
      <BrowserFrame
        src="/screenshots/novadocs-workspace.png"
        alt="NovaDocs AI workspace — chatting with a PDF document"
        url="novadocs — workspace"
      />
    )
  }
  return <BotPhone />
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <Reveal className={flip ? 'md:order-2' : ''}>
        <ProjectMedia project={project} />
      </Reveal>

      <Reveal className={flip ? 'md:order-1' : ''} delay={120}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Project {project.index} · {project.tag}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-[15px] font-medium text-zinc-300">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
        >
          <Github className="h-4 w-4" />
          View repository
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three products, shipped end to end
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            Every project below is open source — with a full README, documentation and tests. Click
            through and judge the code yourself.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
