"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: (
        <div className="flex justify-center">
          <img src="/frontend-icon.png" alt="Languages" className="w-24 h-24" />
        </div>
      ),
      skills: [
        { name: "Python", description: "General-purpose programming language" },
        { name: "Flutter", description: "Cross-platform mobile development" },
        { name: "Dart", description: "Modern programming language" },
        { name: "Java", description: "Object-oriented programming language" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: (
        <div className="flex justify-center">
          <img src="/backend-icon.png" alt="Backend" className="w-24 h-24" />
        </div>
      ),
      skills: [
        { name: "Django", description: "High-level Python web framework" },
        { name: "Firebase", description: "Backend-as-a-Service platform" },
        { name: "REST APIs", description: "RESTful web services" },
        { name: "GraphQL", description: "Query language for APIs" },
        { name: "SQL", description: "Query language for APIs" },
      ],
    },
    {
      title: "Tools & Design",
      icon: (
        <div className="flex justify-center">
          <img src="/tools-icon.webp" alt="Tools" className="w-24 h-24" />
        </div>
      ),
      skills: [
        { name: "Git & GitHub", description: "Version control systems" },
        { name: "VS Code", description: "Code editor and IDE" },
        { name: "Figma", description: "UI/UX design tool" },
        { name: "Postman", description: "API testing platform" },
        { name: "Linux", description: "Operating System" },
        { name: "Docker", description: "Containerization Platform" },
        { name: "Vercel", description: "Cloud Platform" },
      ],
    },
  ]

  const techIcons = {
    Python: (
      <img
        src="/python-icon.webp"
        alt="Python"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Flutter: (
      <img
        src="/flutter-icon.webp"
        alt="Flutter"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Dart: (
      <img
        src="/dart-icon.png"
        alt="Dart"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Java: (
      <img
        src="/java-icon.webp"
        alt="Java"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Django: (
      <img
        src="/django-icon.svg"
        alt="Django"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Firebase: (
      <img
        src="/firebase-icon.webp"
        alt="Firebase"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    "REST APIs": (
      <img
        src="/restapi-icon.webp"
        alt="API"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    GraphQL: (
      <img
        src="/graphql-icon.webp"
        alt="GraphQL"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    SQL: (
      <img
        src="/sql-icon.webp"
        alt="SQL"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    "Git & GitHub": (
      <img
        src="/github-icon.webp"
        alt="GitHub"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    "VS Code": (
      <img
        src="/vscode-icon.webp"
        alt="VS Code"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Figma: (
      <img
        src="/figma-icon.webp"
        alt="Figma"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Postman: (
      <img
        src="/postman-icon.png"
        alt="Postman"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Linux: (
      <img
        src="/linux-icon.png"
        alt="Linux"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Docker: (
      <img
        src="/docker-icon.png"
        alt="Docker"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    ),
    Vercel: (
      <img
        src="/vercel-icon.png"
        alt="Vercel"
        className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
      />
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile experiences
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="p-0 mb-6 text-center">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.div>
                  <CardTitle className="font-sans text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        {techIcons[skill.name as keyof typeof techIcons]}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium text-base mb-1">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
