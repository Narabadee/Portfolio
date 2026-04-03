"use client"

import Link from "next/link"
import { ArrowDown, Github, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <p className="text-primary font-medium animate-slide-up-reveal tracking-wider uppercase text-sm">
                  Hello, I&apos;m
                </p>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-slide-up-reveal animation-delay-100">
                  <span className="text-balance text-shimmer">Narabadee Yapolha</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-xl sm:text-2xl text-muted-foreground animate-slide-up-reveal animation-delay-200 flex items-center gap-2">
                  <span className="inline-block w-8 h-[2px] bg-primary" />
                  Full Stack Developer
                  <span className="animate-blink text-primary">|</span>
                </h2>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl animate-fade-in-up animation-delay-300">
              3rd-year Computer Science student passionate about creating software that solves real-world problems. 
              Skilled in{" "}
              <span className="text-foreground font-medium animated-underline hover:text-primary transition-colors cursor-default">React</span>,{" "}
              <span className="text-foreground font-medium animated-underline hover:text-primary transition-colors cursor-default">TypeScript</span>,{" "}
              <span className="text-foreground font-medium animated-underline hover:text-primary transition-colors cursor-default">Python</span>, and{" "}
              <span className="text-foreground font-medium animated-underline hover:text-primary transition-colors cursor-default">Node.js</span>.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up animation-delay-400">
              <MapPin className="h-4 w-4" />
              <span>Bangkok, Thailand</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-500">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:narabadee47@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-fade-in-up animation-delay-500">
              <Link
                href="https://github.com/Narabadee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:narabadee47@gmail.com"
                className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:flex justify-center items-center perspective-1000">
            <div className="relative animate-scale-in animation-delay-300">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl animate-float animation-delay-400" />
              
              {/* Code block decoration */}
              <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl hover-3d transition-shadow hover:shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <pre className="font-mono text-sm text-muted-foreground">
                  <code>
{`const developer = {
  name: "Narabadee",
  role: "Full Stack Developer",
  skills: [
    "TypeScript",
    "React Native",
    "Python",
    "Node.js"
  ],
  passion: "Building solutions",
  status: "Open to opportunities"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
