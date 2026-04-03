"use client"

import { Code2, Database, Globe, Palette, Server, Smartphone, Terminal, Users, Lightbulb, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "PHP", "Java"],
    color: "text-blue-500"
  },
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    skills: ["React", "React Native", "Expo", "Vite", "TailwindCSS", "Bootstrap", "HTML5", "CSS3"],
    color: "text-green-500"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Flask"],
    color: "text-orange-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQL Server", "Firebase", "Supabase"],
    color: "text-indigo-500"
  },
  {
    title: "Tools & Cloud",
    icon: Terminal,
    skills: ["Git", "GitHub", "Vercel", "Cloudflare"],
    color: "text-slate-500"
  }
]

const softSkills = [
  { name: "Project Leadership", icon: Users },
  { name: "Cross-functional Collaboration", icon: MessageSquare },
  { name: "Public Presentation", icon: Globe },
  { name: "Self-directed Learning", icon: Lightbulb }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Skills & Technologies</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the stack.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 stagger-children">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-sm font-normal hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-secondary">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">Soft Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <skill.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
