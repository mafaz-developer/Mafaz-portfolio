"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Smartphone, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "EcoTracker",
      description:
        "A comprehensive environmental tracking app that helps users monitor their carbon footprint, set sustainability goals, and connect with eco-friendly communities.",
      image: "/eco-tracking-mobile-app-interface.png",
      technologies: ["Flutter", "Firebase", "Provider", "Charts"],
      features: ["Real-time tracking", "Social features", "Gamification", "Analytics"],
      github: "#",
      demo: "#",
    },
    {
      title: "FinanceFlow",
      description:
        "Personal finance management app with advanced budgeting tools, expense tracking, and investment portfolio management with beautiful data visualizations.",
      image: "/finance-management-app-dashboard.png",
      technologies: ["Flutter", "SQLite", "Bloc", "Charts"],
      features: ["Budget planning", "Expense tracking", "Investment tracking", "Reports"],
      github: "#",
      demo: "#",
    },
    {
      title: "FoodieHub",
      description:
        "Social food discovery platform where users can share recipes, find restaurants, and connect with fellow food enthusiasts in their area.",
      image: "/food-social-app-interface.png",
      technologies: ["Flutter", "Firebase", "GetX", "Maps API"],
      features: ["Recipe sharing", "Restaurant finder", "Social feed", "Location-based"],
      github: "#",
      demo: "#",
    },
    {
      title: "FitnessPro",
      description:
        "Complete fitness tracking application with workout plans, nutrition tracking, progress monitoring, and social challenges to keep users motivated.",
      image: "/fitness-tracking-app.png",
      technologies: ["Flutter", "Firebase", "Provider", "Health Kit"],
      features: ["Workout tracking", "Nutrition plans", "Progress analytics", "Social challenges"],
      github: "#",
      demo: "#",
    },
    {
      title: "StudyBuddy",
      description:
        "Educational platform for students with interactive learning modules, progress tracking, collaborative study groups, and AI-powered study recommendations.",
      image: "/educational-study-app-interface.png",
      technologies: ["Flutter", "Firebase", "Bloc", "AI/ML"],
      features: ["Interactive learning", "Study groups", "Progress tracking", "AI recommendations"],
      github: "#",
      demo: "#",
    },
  ]

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const projectWidth = container.scrollWidth / projects.length
      container.scrollTo({
        left: projectWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const nextProject = () => {
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0
    scrollToProject(nextIndex)
  }

  const prevProject = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1
    scrollToProject(prevIndex)
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work in mobile app development
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full bg-background/80 backdrop-blur-sm border-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full bg-background/80 backdrop-blur-sm border-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Horizontal Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="flex-none w-80 md:w-96"
                style={{ scrollSnapAlign: "start" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="font-sans text-xl">{project.title}</CardTitle>
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button size="sm" className="w-full">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
