import type { Accomplishment } from "@/data/accomplishments"

export default function AccomplishmentCard({ item }: { item: Accomplishment }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-zinc-800 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">{item.title}</h2>
      {item.role && (
        <p className="mb-3 text-sm text-cyan-400">{item.role}</p>
      )}
      <p className="flex-1 text-zinc-300">{item.paragraph}</p>
      {item.patent && (
        <p className="mt-3 text-sm text-zinc-500">
          {item.patentFile ? (
            <a
              href={item.patentFile}
              download
              className="text-cyan-400 hover:underline"
            >
              Download {item.patent}
            </a>
          ) : (
            item.patent
          )}
        </p>
      )}
    </div>
  )
}
