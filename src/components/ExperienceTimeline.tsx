import type { ExperienceEntry } from "@/data/experience"

export default function ExperienceTimeline({
  entries,
}: {
  entries: ExperienceEntry[]
}) {
  return (
    <ul className="space-y-10">
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
          {entry.website && (
            <a
              href={entry.website}
              className="text-sm text-cyan-400 hover:underline"
            >
              {entry.website}
            </a>
          )}

          {entry.paragraphs && (
            <div className="mt-3 space-y-3 text-zinc-300">
              {entry.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {entry.subRoles && (
            <div className="mt-4 space-y-6">
              {entry.subRoles.map((sub) => (
                <div
                  key={sub.role}
                  className="border-l-2 border-zinc-900 pl-4"
                >
                  <p className="font-medium text-zinc-200">{sub.role}</p>
                  <p className="text-sm text-zinc-500">{sub.dates}</p>
                  <div className="mt-2 space-y-3 text-zinc-300">
                    {sub.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
