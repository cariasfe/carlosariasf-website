import type { Accomplishment } from "@/data/accomplishments"

export default function AccomplishmentCard({ item }: { item: Accomplishment }) {
  return (
    <div className="rounded-lg border border-zinc-800 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">{item.title}</h2>
      <p className="mb-3 text-sm text-cyan-400">{item.organization}</p>
      <ul className="list-inside list-disc space-y-1 text-zinc-300">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
