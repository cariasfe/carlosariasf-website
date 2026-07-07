import Timeline from "@/components/Timeline"
import PageBanner from "@/components/PageBanner"
import { education } from "@/data/education"

export default function EducationPage() {
  return (
    <div>
      <PageBanner title="Education" focusY="55%" />
      <Timeline entries={education} />
    </div>
  )
}
