import Image from "next/image"
import { bioParagraphs, keySkills, qaItems } from "@/data/about"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Image
        src="/about-banner.jpg"
        alt="Carlos Arias"
        width={1280}
        height={300}
        className="w-full rounded-lg border border-zinc-800 object-cover"
      />

      <div>
        <h1 className="text-2xl font-bold text-zinc-100">About Me</h1>
        <p className="mt-1 text-sm uppercase tracking-wide text-cyan-400">
          My Executive Bio
        </p>
      </div>

      <div className="space-y-4 text-zinc-300">
        {bioParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className="text-sm text-zinc-500">
        <span className="font-semibold text-zinc-400">Key Skills:</span>{" "}
        {keySkills}
      </p>

      <div className="space-y-8 border-t border-zinc-800 pt-8">
        {qaItems.map((item) => (
          <div key={item.question}>
            <h2 className="mb-2 text-lg font-semibold text-zinc-100">
              {item.question}
            </h2>
            {item.answer && <p className="text-zinc-300">{item.answer}</p>}
            {item.subItems && (
              <div className="mt-3 space-y-4">
                {item.subItems.map((sub) => (
                  <div key={sub.heading}>
                    <h3 className="font-medium text-cyan-400">
                      {sub.heading}
                    </h3>
                    <p className="mt-1 text-zinc-300">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
