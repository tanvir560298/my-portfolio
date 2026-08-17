import { useCallback, useState } from 'react'
import { roadmapData, type RoadmapStep } from '../../data/roadmapData'
import { DesktopUniverse } from './DesktopUniverse'
import { MobileList } from './MobileList'
import { TopicDetails } from './TopicDetails'

export function RoadmapSolarSystem({ data = roadmapData }: { data?: RoadmapStep[] }) {
  const [selectedTopic, setSelectedTopic] = useState<RoadmapStep | null>(null)
  const closeDetails = useCallback(() => setSelectedTopic(null), [])

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-950 p-3 shadow-2xl sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_48%)]"
      />
      <DesktopUniverse data={data} onSelect={setSelectedTopic} />
      <MobileList data={data} onSelect={setSelectedTopic} />
      <TopicDetails topic={selectedTopic} onClose={closeDetails} />
    </div>
  )
}
