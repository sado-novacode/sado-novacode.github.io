import { Nav } from '@/components/portfolio/nav'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { Stack } from '@/components/portfolio/stack'
import { Why } from '@/components/portfolio/why'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-[#09090b] text-zinc-100">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Stack />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
