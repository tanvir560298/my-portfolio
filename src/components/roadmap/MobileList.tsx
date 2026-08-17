import { TopicStatus, type RoadmapStep } from '../../data/roadmapData'

export function MobileList({
  data,
  onSelect,
}: {
  data: RoadmapStep[]
  onSelect: (topic: RoadmapStep) => void
}) {
  return (
    <ol className="space-y-2 md:hidden">
      {data.map((topic, index) => {
        const active =
          topic.status === TopicStatus.Available || topic.status === TopicStatus.InProgress
        return (
          <li
            key={topic.id}
            className={`relative ml-4 border-l-2 py-2 pl-6 ${active ? 'border-emerald-500' : 'border-slate-800'}`}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ring-4 ring-slate-950 ${active ? 'bg-emerald-400' : 'bg-slate-700'}`}
            />
            <button
              type="button"
              onClick={() => onSelect(topic)}
              aria-label={`Learning topic: ${topic.name}, Status: ${topic.status}`}
              className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-left transition hover:border-emerald-500/40 hover:bg-slate-900"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-700 bg-slate-950"
                style={{ color: topic.color }}
              >
                <topic.icon size={20} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step {index + 1} · {topic.status.replace('-', ' ')}
                </span>
                <span className="mt-1 block font-bold text-white">{topic.name}</span>
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
