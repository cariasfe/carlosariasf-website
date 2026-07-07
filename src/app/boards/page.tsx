import Image from "next/image"
import PageBanner from "@/components/PageBanner"
import { boards } from "@/data/boards"

export default function BoardsPage() {
  return (
    <div>
      <PageBanner title="Volunteering & Leadership" />
      <div className="space-y-10">
        {boards.map((entry, i) => (
          <div
            key={entry.organization}
            className={`flex flex-col gap-6 sm:items-center ${
              i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
          >
            <Image
              src={entry.image}
              alt={entry.organization}
              width={280}
              height={210}
              className="w-full rounded-lg border border-zinc-800 object-cover sm:w-56"
            />
            <div>
              <p className="text-lg font-semibold text-zinc-100">
                {entry.organization}
              </p>
              <p className="text-sm text-zinc-500">
                Board Member ({entry.dates})
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {entry.description}
              </p>
              {entry.extra && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {entry.extra}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
