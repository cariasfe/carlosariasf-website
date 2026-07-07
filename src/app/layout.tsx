import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.tagline,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
