import ExperienceTimeline from "@/components/ExperienceTimeline"
import PageBanner from "@/components/PageBanner"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div>
      <PageBanner title="Experience" focusY="15%" />
      <ExperienceTimeline entries={experience} />
    </div>
  )
}
