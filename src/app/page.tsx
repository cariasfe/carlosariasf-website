import Image from "next/image"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src="/profile.jpg"
          alt="Carlos Arias"
          width={160}
          height={160}
          className="rounded-full border border-zinc-800 object-cover"
          priority
        />
        <h1 className="text-3xl font-bold text-zinc-100">
          Carlos Arias | Product Management Leader | Data Analytics & AI
          Solutions Pioneer | Exceptional Driver of Growth in New Ventures
        </h1>
      </div>

      <div className="space-y-4 text-zinc-300">
        <p>
          As a Product Management leader, my approach is grounded in
          building products customers love, by focusing relentlessly on
          real user problems, business outcomes, and empowered teams.
          Drawing inspiration from Marty Cagan&apos;s <em>Inspired</em>, I
          believe great products emerge from a deep understanding of the
          customer, constant discovery, and a strong partnership between
          product, design, and engineering. I strive to create an
          environment where we prioritize learning fast, iterating
          quickly, and validating our solutions through real-world
          feedback.
        </p>
        <p>
          From <em>Empowered</em>, I&apos;ve embraced the principle that
          the best outcomes come when teams are truly empowered—not just
          to execute, but to solve problems. My leadership philosophy
          centers around coaching and trust: equipping product teams with
          the clarity of purpose, context, and autonomy they need to make
          decisions and innovate. I advocate for high-integrity
          commitments and foster a culture of accountability that&apos;s
          driven by mission, not micromanagement.
        </p>
        <p>
          Building on the organizational insights in{" "}
          <em>Transformed</em>, I champion the transition from feature
          factories to outcome-driven organizations. I see my role not
          just as a product leader, but as a change agent—helping
          leadership teams adopt modern product thinking, break down
          silos, and create the systems and culture where empowered teams
          can thrive. My focus is always on scaling sustainably, aligning
          around true value creation, and transforming product
          organizations into engines of continuous innovation.
        </p>
      </div>

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
