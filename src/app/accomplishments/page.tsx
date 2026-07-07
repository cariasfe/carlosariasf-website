import AccomplishmentCard from "@/components/AccomplishmentCard"
import { accomplishments } from "@/data/accomplishments"

export default function AccomplishmentsPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-zinc-100">
        Career Accomplishments
      </h1>
      <p className="mb-8 text-zinc-300">
        Here, you&apos;ll find a showcase of my career accomplishments. Each
        accomplishment represents a unique blend of creativity, expertise,
        and business acumen reflecting my commitment to excellence.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {accomplishments.map((item) => (
          <AccomplishmentCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}
