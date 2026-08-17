import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { TopicStatus, type RoadmapStep } from '../../data/roadmapData'

const statusStyles: Record<TopicStatus, string> = {
  [TopicStatus.Planned]: 'border-slate-700 bg-slate-800 text-slate-300',
  [TopicStatus.ComingSoon]: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
  [TopicStatus.InProgress]: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  [TopicStatus.Available]: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
}

export function TopicDetails({
  topic,
  onClose,
}: {
  topic: RoadmapStep | null
  onClose: () => void
}) {
  const closeButton = useRef<HTMLButtonElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!topic) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [topic, onClose])

  return (
    <AnimatePresence>
      {topic && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="roadmap-topic-title"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${topic.color}, transparent)` }}
            />
            <button
              ref={closeButton}
              type="button"
              onClick={onClose}
              aria-label="Close topic details"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-500/50 hover:text-white"
            >
              <X size={20} />
            </button>
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl border bg-slate-950"
              style={{ borderColor: `${topic.color}80`, color: topic.color }}
            >
              <topic.icon size={24} aria-hidden="true" />
            </div>
            <span
              className={`mt-6 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[topic.status]}`}
            >
              {topic.status.replace('-', ' ')}
            </span>
            <h3 id="roadmap-topic-title" className="mt-4 text-2xl font-bold text-white">
              {topic.name}
            </h3>
            <p className="mt-3 leading-7 text-slate-300">{topic.description}</p>
            {topic.resourceLink && (
              <a
                href={topic.resourceLink}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Start learning <ArrowRight size={17} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
