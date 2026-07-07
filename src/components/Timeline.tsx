export interface TimelineEntry {
  organization: string
  role?: string
  dates: string
  description?: string
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="space-y-6">
      {entries.map((entry) => (
        <li
          key={`${entry.organization}-${entry.dates}`}
          className="border-l-2 border-zinc-800 pl-4"
        >
          <p className="font-semibold text-zinc-100">
            {entry.organization}
            {entry.role ? ` — ${entry.role}` : ""}
          </p>
          <p className="text-sm text-zinc-500">{entry.dates}</p>
          {entry.description && (
            <p className="mt-1 text-zinc-300">{entry.description}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
