import ExperienceTimeline from "@/components/ExperienceTimeline"
import PageBanner from "@/components/PageBanner"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div>
      <PageBanner title="Experience" />
      <ExperienceTimeline entries={experience} />
    </div>
  )
}
