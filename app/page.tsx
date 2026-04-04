import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Certificates } from "@/components/portfolio/certificates"
import { Activities } from "@/components/portfolio/activities"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Certificates />
      <Activities />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
