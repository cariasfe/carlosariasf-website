import AccomplishmentCard from "@/components/AccomplishmentCard"
import PageBanner from "@/components/PageBanner"
import { accomplishments } from "@/data/accomplishments"

export default function AccomplishmentsPage() {
  return (
    <div>
      <PageBanner title="Career Accomplishments" />
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
