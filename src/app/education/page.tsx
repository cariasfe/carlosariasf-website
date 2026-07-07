import Timeline from "@/components/Timeline"
import { education } from "@/data/education"

export default function EducationPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">Education</h1>
      <Timeline entries={education} />
    </div>
  )
}
