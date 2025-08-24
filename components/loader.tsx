"use client"

import { motion } from "framer-motion"

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <motion.div
            className="w-16 h-16 border-2 border-accent/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-accent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 w-12 h-12 border border-accent/40 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="font-sans font-bold text-xl text-foreground mb-1">mafaz.developer</h3>
          <p className="text-sm text-muted-foreground">Loading portfolio...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
