import type { ExperienceEntry } from "@/data/experience"

export default function ExperienceTimeline({
  entries,
}: {
  entries: ExperienceEntry[]
}) {
  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li
          key={`${entry.organization}-${entry.dates}`}
          className="border-l-2 border-zinc-800 pl-4"
        >
          <details className="group">
            <summary className="cursor-pointer list-none">
              <span className="font-semibold text-zinc-100">
                {entry.organization}
                {entry.role ? ` — ${entry.role}` : ""}
              </span>
              <span className="ml-2 text-sm text-zinc-500">
                {entry.dates}
              </span>
              <span className="ml-2 text-xs text-zinc-600 group-open:hidden">
                (click to expand)
              </span>
            </summary>

            {entry.website && (
              <a
                href={entry.website}
                className="mt-2 block text-sm text-cyan-400 hover:underline"
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
              <div className="mt-4 space-y-4">
                {entry.subRoles.map((sub) => (
                  <details key={sub.role} className="group/sub border-l-2 border-zinc-900 pl-4">
                    <summary className="cursor-pointer list-none">
                      <span className="font-medium text-zinc-200">
                        {sub.role}
                      </span>
                      <span className="ml-2 text-sm text-zinc-500">
                        {sub.dates}
                      </span>
                      <span className="ml-2 text-xs text-zinc-600 group-open/sub:hidden">
                        (click to expand)
                      </span>
                    </summary>
                    <div className="mt-2 space-y-3 text-zinc-300">
                      {sub.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </details>
        </li>
      ))}
    </ul>
  )
}
