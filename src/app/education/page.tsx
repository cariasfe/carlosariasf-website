import Timeline from "@/components/Timeline"
import PageBanner from "@/components/PageBanner"
import { education } from "@/data/education"

export default function EducationPage() {
  return (
    <div>
      <PageBanner title="Education" />
      <Timeline entries={education} />
    </div>
  )
}
