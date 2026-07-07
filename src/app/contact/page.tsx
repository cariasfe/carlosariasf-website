import PageBanner from "@/components/PageBanner"
import { siteConfig } from "@/data/site"

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageBanner title="Contact" />
      <p className="text-zinc-300">
        I&apos;m always looking for new and exciting opportunities.
        Let&apos;s connect.
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href={siteConfig.social.linkedin}
            className="text-cyan-400 hover:underline"
          >
            LinkedIn — linkedin.com/in/cariasf
          </a>
        </li>
        <li>
          <a
            href={siteConfig.social.twitter}
            className="text-cyan-400 hover:underline"
          >
            X / Twitter — x.com/cariasfe
          </a>
        </li>
        <li>
          <a
            href={siteConfig.social.facebook}
            className="text-cyan-400 hover:underline"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  )
}
