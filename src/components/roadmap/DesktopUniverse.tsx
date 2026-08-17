import { motion, useReducedMotion } from 'framer-motion'
import type { RoadmapStep } from '../../data/roadmapData'

export function DesktopUniverse({
  data,
  onSelect,
}: {
  data: RoadmapStep[]
  onSelect: (topic: RoadmapStep) => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[900px] overflow-hidden md:block">
      <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-emerald-500/50 bg-slate-900 p-2 text-center font-bold text-emerald-400 shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)]">
        Web Development
      </div>

      {data.map((topic) => (
        <div
          key={`orbit-${topic.id}`}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-slate-800/50"
          style={{
            width: topic.orbitRadius * 2,
            height: topic.orbitRadius * 2,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {data.map((topic, index) => {
        const angle = index * 36
        return (
          <div
            key={topic.id}
            className="absolute left-1/2 top-1/2 z-30"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${topic.orbitRadius}px) rotate(-${angle}deg)`,
            }}
          >
            <motion.button
              type="button"
              onClick={() => onSelect(topic)}
              aria-label={`Learning topic: ${topic.name}, Status: ${topic.status}`}
              className="group relative flex cursor-pointer flex-col items-center rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-4 focus:ring-offset-slate-950"
              animate={reduceMotion ? undefined : { y: [-5, 5, -5] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 3.4 + index * 0.15, repeat: Infinity, ease: 'easeInOut' }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.1 }}
            >
              <span
                className="grid place-items-center rounded-full border border-slate-700 bg-slate-900 shadow-lg transition-all group-hover:border-emerald-500"
                style={{
                  width: topic.size,
                  height: topic.size,
                  color: topic.color,
                  boxShadow: `0 0 24px -10px ${topic.color}`,
                }}
              >
                <topic.icon size={20} aria-hidden="true" />
              </span>
              <span className="absolute left-1/2 top-full mt-2 w-max max-w-32 -translate-x-1/2 rounded-md bg-slate-950/90 px-2 py-1 text-center text-xs font-semibold text-slate-400">
                {topic.name}
              </span>
            </motion.button>
          </div>
        )
      })}
    </div>
  )
}
