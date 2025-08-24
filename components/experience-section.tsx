"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Developing cross-platform mobile applications for various clients. Specializing in Flutter development with clean architecture patterns, state management, and API integrations.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST API", "Git"],
    },
    {
      title: "Mobile App Developer",
      company: "Tech Solutions",
      location: "India",
      period: "2021 - 2022",
      description:
        "Built mobile applications using Flutter framework. Collaborated with design teams to implement pixel-perfect UI/UX designs and integrated various third-party services.",
      technologies: ["Flutter", "Dart", "SQLite", "Bloc", "Material Design"],
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      location: "India",
      period: "2021 - 2021",
      description:
        "Started career in mobile development, learning Flutter and Dart. Contributed to MVP development and gained experience in mobile app architecture and best practices.",
      technologies: ["Flutter", "Firebase", "GetX", "UI/UX Design"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in mobile development and the impact I've made
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20 group">
                <CardHeader className="p-0 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="font-sans text-xl group-hover:text-accent transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="mr-1 h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-accent/20 transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
