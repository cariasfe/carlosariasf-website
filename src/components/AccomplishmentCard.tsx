import type { Accomplishment } from "@/data/accomplishments"

export default function AccomplishmentCard({ item }: { item: Accomplishment }) {
  return (
    <div className="rounded-lg border border-zinc-800 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">{item.title}</h2>
      {item.role && (
        <p className="mb-3 text-sm text-cyan-400">{item.role}</p>
      )}
      <p className="text-zinc-300">{item.paragraph}</p>
      {item.patent && (
        <p className="mt-2 text-sm text-zinc-500">{item.patent}</p>
      )}
    </div>
  )
}
