"use client"
import { motion } from "framer-motion"
import { User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"

export function Navigation() {
  const navItems = [
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-1">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-full hover:bg-accent/10 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation - Icons only */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1.5 rounded-full hover:bg-accent/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={item.label}
                >
                  <IconComponent className="h-3.5 w-3.5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
