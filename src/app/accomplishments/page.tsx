import AccomplishmentCard from "@/components/AccomplishmentCard"
import { accomplishments } from "@/data/accomplishments"

export default function AccomplishmentsPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">
        Accomplishments
      </h1>
      <div className="space-y-6">
        {accomplishments.map((item) => (
          <AccomplishmentCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}
