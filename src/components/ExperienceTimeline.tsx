import type { ExperienceEntry } from "@/data/experience"
import ChevronIcon from "@/components/ChevronIcon"
import { shortDomain } from "@/lib/domain"

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
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span className="flex items-start gap-2">
                <ChevronIcon className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-90" />
                <span>
                  <span className="text-lg font-semibold text-zinc-100">
                    {entry.organization}
                    {entry.role ? ` — ${entry.role}` : ""}
                  </span>
                  <div className="text-sm text-zinc-500">{entry.dates}</div>
                </span>
              </span>
              {entry.website && (
                <a
                  href={entry.website}
                  className="shrink-0 text-sm text-cyan-400 hover:underline"
                >
                  {shortDomain(entry.website)}
                </a>
              )}
            </summary>

            {entry.paragraphs && (
              <div className="mt-3 space-y-3 pl-6 text-sm leading-relaxed text-zinc-400">
                {entry.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {entry.subRoles && (
              <div className="mt-4 space-y-4 pl-6">
                {entry.subRoles.map((sub) => (
                  <details
                    key={sub.role}
                    className="group/sub border-l-2 border-zinc-900 pl-4"
                  >
                    <summary className="flex cursor-pointer list-none items-start gap-2">
                      <ChevronIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-600 transition-transform duration-200 group-open/sub:rotate-90" />
                      <span>
                        <span className="font-medium text-zinc-200">
                          {sub.role}
                        </span>
                        <div className="text-sm text-zinc-500">
                          {sub.dates}
                        </div>
                      </span>
                    </summary>
                    <div className="mt-2 space-y-3 pl-6 text-sm leading-relaxed text-zinc-400">
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
