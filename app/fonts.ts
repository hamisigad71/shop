import { Lato } from "next/font/google"

/*
 * Expose a single Lato instance we can reuse everywhere.
 * We register several weights and expose a CSS variable
 * so Tailwind can pick it up.
 */
export const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
})
