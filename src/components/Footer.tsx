import { siteConfig } from "@/data/site"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-sm text-zinc-500">
      <div className="flex justify-center gap-4">
        <a href={siteConfig.social.linkedin} className="hover:text-cyan-400">
          LinkedIn
        </a>
        <a href={siteConfig.social.twitter} className="hover:text-cyan-400">
          X / Twitter
        </a>
        <a href={siteConfig.social.facebook} className="hover:text-cyan-400">
          Facebook
        </a>
      </div>
      <p className="mt-4">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  )
}
