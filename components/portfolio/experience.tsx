"use client"

import Image from "next/image"
import { Award, GraduationCap, Trophy, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Startup Thailand League 2026",
    organization: "Huachiew Chalermprakiet University",
    period: "2025 — 2026",
    description: "Served as lead developer responsible for building the app prototype representing the university team. Advanced to the final 5 teams at the university level.",
    highlights: [
      "Lead Developer for App Prototype",
      "Top 5 Finalist at University Level",
      "Pitched startup concept with real-world business model"
    ],
    icon: Trophy,
    featured: true
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "Huachiew Chalermprakiet University",
    period: "2023 — Present",
    description: "Currently in 3rd year, focusing on full-stack development, AI/ML, and mobile application development.",
    highlights: [
      "Computer Science Major",
      "Focus on Software Development",
      "Active in Extracurricular Activities"
    ],
    icon: GraduationCap,
    featured: false
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Experience & Education</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in tech, from university education to national competitions.
          </p>
        </div>

        {/* Startup Thailand League Feature Section */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="overflow-hidden border-primary/20 bg-card hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Images Column */}
              <div className="relative bg-secondary/30 p-6">
                <div className="space-y-4">
                  {/* Banner Image */}
                  <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HN7kEmdhHPGYyY0EoMRd84G0o9shuE.png"
                      alt="Startup Thailand League 2026 Official Banner"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Team Photos */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_Hcu%20Boot-camp_260403_2-d3SJVqpJr1urZOsv0K7ARSwF4B3t1M.jpg"
                        alt="Working at Startup Thailand League Boot Camp"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_Hcu%20Boot-camp_260403_1-befc3B84MvmsF4adsPFCYjSBDaNpUZ.jpg"
                        alt="HCU Coaching Camp Group Photo"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    Featured Achievement
                  </Badge>
                </div>

                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  Startup Thailand League 2026
                </CardTitle>
                <CardDescription className="text-base mb-1">
                  10th Anniversary Edition
                </CardDescription>
                <p className="text-sm text-muted-foreground mb-6">
                  Huachiew Chalermprakiet University • 2025 — 2026
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Represented my university as the <span className="text-foreground font-medium">Lead Developer</span>, 
                  responsible for building the complete app prototype. Our team advanced to the 
                  <span className="text-foreground font-medium"> final 5 teams</span> at the university level, 
                  competing against all participating teams.
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Built complete app prototype using React Native & TypeScript</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Collaborated with team on startup concept & business model</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Participated in HCU Coaching Camp for startup mentorship</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Team Competition</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span>Top 5 Finalist</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Experiences */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.filter(exp => !exp.featured).map((exp, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors">
                    <exp.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-semibold">{exp.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {exp.organization} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
