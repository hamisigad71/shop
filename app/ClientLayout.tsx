"use client" // This needs to be a client component to use useState and useEffect

import type React from "react"
import { useState, useEffect } from "react" // Import useState and useEffect
import { LoadingOverlay } from "@/components/loading-overlay" // Import the new component

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // lock scroll while loading
    document.body.classList.toggle("overflow-hidden", isLoading)

    // Increased timeout duration to 3 seconds for better visibility
    const timer = setTimeout(() => setIsLoading(false), 3000) // 3000ms = 3 seconds

    return () => {
      clearTimeout(timer)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isLoading])

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      {children}
    </>
  )
}
