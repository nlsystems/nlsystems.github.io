import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Solutions } from "@/components/solutions"
import { Architecture } from "@/components/architecture"
import { CaseStudies } from "@/components/case-studies"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Overview />
      <Solutions />
      <Architecture />
      <CaseStudies />
      <Footer />
    </main>
  )
}
