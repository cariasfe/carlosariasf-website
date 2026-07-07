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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: "Senior Director, Product Management",
              worksFor: { "@type": "Organization", name: "Precisely" },
              url: "https://carlosariasf.com",
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
                siteConfig.social.facebook,
              ],
              alumniOf: [
                "Kellogg School of Management, Northwestern University",
                "MIT Sloan School of Management",
                "Universidad Carlos III de Madrid",
              ],
            }),
          }}
        />
        <Nav />
        <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
