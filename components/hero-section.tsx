"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Mohammad_Mafaz_Ameenbeg_Resume.pdf"
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated Mesh Gradient Background */}
      <motion.div
        className="absolute opacity-50 inset-0 mesh-gradient dark:mesh-gradient-dark"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="w-32 h-32 mx-auto mb-6 rounded-[34px] overflow-hidden ring-4 ring-accent/20 bg-muted">
              <img
                src="/mohammad-mafaz-profile.jpg"
                alt="Mohammad Mafaz Ameenbeg"
                className="w-full h-full object-cover scale-120"
              />
            </div>
          </motion.div>

            <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            >
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-900/20 backdrop-blur-sm border border-green-800 shadow-md">
              Available for Freelance
            </Badge>
            </motion.div>
        </motion.div>

        <motion.h1
          className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hii
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/glass-shape-10098471-8196096.png"
            alt="Hi"
            className="w-20 h-20 inline-block mr-2 ml-2"
            />
            I'm{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-yellow-100 to-purple-400 bg-clip-text text-transparent">Mohammad Mafaz</span>
          </span>
        </motion.h1>

        <motion.h2
          className="font-sans font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Flutter Developer & Mobile Architect
        </motion.h2>

        <motion.p
          className="text-md sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting beautiful, performant mobile applications with Flutter. Passionate about clean architecture,
          innovative UI/UX, and delivering exceptional user experiences across platforms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="font-medium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="font-medium bg-transparent" onClick={handleDownloadCV}>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://github.com/mafaz-developer" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://www.linkedin.com/in/mohammad-mafaz-ameenbeg-3258bb2b3/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="mailto:mdmafazameenbeg@gmail.com">
                <ExternalLink className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
