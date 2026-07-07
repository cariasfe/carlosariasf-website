import ExperienceTimeline from "@/components/ExperienceTimeline"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">Experience</h1>
      <ExperienceTimeline entries={experience} />
    </div>
  )
}
