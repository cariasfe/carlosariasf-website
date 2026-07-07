import Timeline from "@/components/Timeline"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">Experience</h1>
      <Timeline entries={experience} />
    </div>
  )
}
