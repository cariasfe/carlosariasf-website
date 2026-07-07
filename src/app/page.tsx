import Image from "next/image"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="relative h-64 overflow-hidden rounded-lg border border-zinc-800 sm:h-72">
        <Image
          src="/bookshelf.jpg"
          alt="Carlos's bookshelf"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/30" />

        <div className="absolute bottom-0 left-0 flex w-full flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
          <Image
            src="/profile.jpg"
            alt="Carlos Arias"
            width={96}
            height={96}
            className="rounded-full border-2 border-zinc-800 object-cover"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold text-zinc-100">Carlos Arias</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Product Management Leader",
                "Data Analytics & AI Solutions Pioneer",
                "Exceptional Driver of Growth in New Ventures",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
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
