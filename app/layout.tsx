import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Scripts } from "./scripts"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Use font-display: swap
  preload: true, // Preload the font
})

export const metadata = {
  title: "Next.js SSR Demo",
  description: "A demo project showcasing Next.js SSR capabilities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* Add the Scripts component to optimize JS loading */}
          <Scripts />
        </div>
      </body>
    </html>
  )
}
