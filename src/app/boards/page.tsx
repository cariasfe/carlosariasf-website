import { boards } from "@/data/boards"

export default function BoardsPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">
        Volunteering &amp; Leadership
      </h1>
      <div className="space-y-6">
        {boards.map((entry) => (
          <div key={entry.organization} className="border-l-2 border-zinc-800 pl-4">
            <p className="font-semibold text-zinc-100">{entry.organization}</p>
            <p className="text-sm text-zinc-500">Board Member ({entry.dates})</p>
            <p className="mt-2 text-zinc-300">{entry.description}</p>
            {entry.extra && (
              <p className="mt-2 text-zinc-300">{entry.extra}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
