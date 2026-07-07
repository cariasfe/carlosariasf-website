export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-zinc-100">
        Carlos Arias | Product Management Leader | Data Analytics & AI
        Solutions Pioneer | Exceptional Driver of Growth in New Ventures
      </h1>
      <p className="text-lg text-zinc-300">
        I build products customers love by focusing relentlessly on real
        user problems, business outcomes, and empowered teams. My approach
        draws on Marty Cagan&apos;s <em>Inspired</em>, <em>Empowered</em>,
        and <em>Transformed</em> — customer discovery, team empowerment, and
        transforming organizations from feature-focused to outcome-driven.
      </p>
      <a
        href="/cv.pdf"
        download
        className="inline-block rounded border border-cyan-400 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-zinc-950"
      >
        Download CV
      </a>
    </div>
  )
}
