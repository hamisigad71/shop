import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { lato } from "@/app/fonts"
import ClientLayout from "./ClientLayout"

// Metadata is typically static, so it's better defined outside the component
// or passed as props if dynamic. For simplicity, keeping it here for now.
export const metadata: Metadata = {
  title: "JoJo Scrubs - Premium Medical Wear", // Updated title
  description: "Kenya's leading provider of premium medical scrubs for healthcare professionals.", // Updated description
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
