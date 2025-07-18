"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"

interface LoadingOverlayProps {
  isLoading: boolean
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          // Changed background to semi-transparent dark, and text/spinner to white
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/90"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <Loader2 className="h-16 w-16 animate-spin text-white" />
            <p className="text-xl font-semibold text-white">Loading JoJo Scrubs...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
