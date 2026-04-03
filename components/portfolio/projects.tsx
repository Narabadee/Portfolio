"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  homepage: string | null
}

// Featured projects with custom descriptions from the resume
const featuredProjects = {
  "Unieat-app": {
    description: "A gamified food waste rescue mobile app connecting university students with surplus campus vendor meals. Built with React Native, Expo SDK 54, TypeScript, and features a premium design system with DM Sans typography.",
    tags: ["React Native", "TypeScript", "Expo", "Mobile App"],
    featured: true
  },
  "Library-Face-Recognition": {
    description: "AI-powered attendance system for a university library using ArcFace recognition with 512-dimensional embeddings. Features real-time webcam scanning with motion detection and ROI tracking.",
    tags: ["Python", "Flask", "OpenCV", "AI/ML"],
    featured: true
  },
  "Flowlo": {
    description: "A modern TypeScript project showcasing full-stack development capabilities with clean architecture and best practices.",
    tags: ["TypeScript", "Full Stack"],
    featured: true
  },
  "15-puzzle": {
    description: "Classic sliding puzzle game implementation demonstrating algorithmic thinking and JavaScript proficiency.",
    tags: ["JavaScript", "Game", "Algorithm"],
    featured: false
  },
  "parking_system1": {
    description: "A parking management system built with PHP, demonstrating backend development and database management skills.",
    tags: ["PHP", "Backend", "Database"],
    featured: false
  }
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  PHP: "bg-indigo-500",
  HTML: "bg-orange-500",
  CSS: "bg-pink-500"
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/Narabadee/repos?sort=updated&per_page=30")
        if (!response.ok) throw new Error("Failed to fetch repositories")
        const data = await response.json()
        // Filter out the profile repo
        const filteredRepos = data.filter((repo: GitHubRepo) => repo.name !== "Narabadee")
        setRepos(filteredRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const getProjectInfo = (repoName: string) => {
    return featuredProjects[repoName as keyof typeof featuredProjects] || null
  }

  // Sort repos to show featured first
  const sortedRepos = [...repos].sort((a, b) => {
    const aFeatured = getProjectInfo(a.name)?.featured ? 1 : 0
    const bFeatured = getProjectInfo(b.name)?.featured ? 1 : 0
    return bFeatured - aFeatured
  })

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I&apos;ve built, from mobile apps to AI-powered systems.
            All sourced directly from my GitHub.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRepos.slice(0, 6).map((repo, index) => {
              const projectInfo = getProjectInfo(repo.name)
              const isFeatured = projectInfo?.featured

              return (
                <Card
                  key={repo.id}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up perspective-1000 ${
                    isFeatured ? "border-primary/30 bg-card hover:border-primary/50" : "bg-card"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors truncate">
                          {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                        </CardTitle>
                        {isFeatured && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                        {repo.homepage && (
                          <Link
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm line-clamp-3">
                      {projectInfo?.description || repo.description || "No description available"}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {projectInfo?.tags ? (
                        projectInfo.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))
                      ) : repo.language ? (
                        <Badge variant="outline" className="text-xs">
                          {repo.language}
                        </Badge>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="https://github.com/Narabadee?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View all projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
