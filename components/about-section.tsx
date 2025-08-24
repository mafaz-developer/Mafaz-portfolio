"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const highlights = [
    "3+ Years Flutter Development",
    "Cross-Platform Expert",
    "Clean Architecture Advocate",
    "UI/UX Enthusiast",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Flutter developer with a keen eye for detail and a love for creating seamless mobile experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-sans font-semibold text-2xl mb-6">Building the Future of Mobile</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Flutter developer who believes in the power of beautiful, functional mobile applications.
              With expertise in Dart, Flutter framework, and modern development practices, I create apps that not only
              look stunning but perform exceptionally well.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical excellence with user-centered design, ensuring every app I build delivers
              real value to its users while maintaining clean, scalable code architecture.
            </p>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div key={highlight} variants={itemVariants}>
                  <Badge variant="secondary" className="text-sm hover:bg-accent/20 transition-colors cursor-default">
                    {highlight}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-0">
                <h4 className="font-sans font-semibold text-xl mb-6">Quick Facts</h4>
                <div className="space-y-4">
                  {[
                    { label: "Location", value: "India" },
                    { label: "Experience", value: "3+ Years" },
                    { label: "Specialization", value: "Flutter & Dart" },
                    { label: "Focus", value: "Mobile Development" },
                    { label: "Availability", value: "Open to Work", highlight: true },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-muted-foreground">{fact.label}</span>
                      <span className={`font-medium ${fact.highlight ? "text-green-500" : ""}`}>{fact.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
