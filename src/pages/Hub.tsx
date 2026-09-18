import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Coffee,
  GraduationCap,
  Sigma,
  Sparkles,
  Play,
  FileText,
  HelpCircle,
  Download,
  Lightbulb,
} from 'lucide-react'
import { courses } from '../data/content'
import { Container } from '../components/ui'

const courseStyles = {
  'web-development': { icon: Code2, label: 'Build for the web', color: 'from-sky-400 to-cyan-300', glow: 'shadow-sky-500/10' },
  'java-programming': { icon: Coffee, label: 'Learn programming', color: 'from-orange-400 to-amber-300', glow: 'shadow-orange-500/10' },
  'discrete-mathematics': { icon: Sigma, label: 'Think logically', color: 'from-violet-400 to-fuchsia-300', glow: 'shadow-violet-500/10' },
} as const

export function Hub() {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0].id)
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'video' | 'slides' | 'practice'>('video')
  const [visibleHints, setVisibleHints] = useState<Record<string, boolean>>({})
  const [visibleAnswers, setVisibleAnswers] = useState<Record<string, boolean>>({})

  const selectedCourse = courses.find((course) => course.id === selectedCourseId) ?? courses[0]
  const selectedStyle = courseStyles[selectedCourse.id as keyof typeof courseStyles]

  const chooseCourse = (courseId: string) => {
    setSelectedCourseId(courseId)
    setSelectedModuleIndex(0)
    setActiveTab('video')
    setVisibleHints({})
    setVisibleAnswers({})
    window.setTimeout(() => {
      document.getElementById('course-topics')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const toggleHint = (problemId: string) => {
    setVisibleHints((prev) => ({ ...prev, [problemId]: !prev[problemId] }))
  }

  const toggleAnswer = (problemId: string) => {
    setVisibleAnswers((prev) => ({ ...prev, [problemId]: !prev[problemId] }))
  }

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 pb-24 text-white">
      <section className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.16),transparent_55%)]" />
        <Container className="text-center">
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-400/10 text-emerald-300">
            <GraduationCap size={28} aria-hidden="true" />
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Learn with Tanvir Ahmad</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            What would you like to learn today?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Pick a subject and see exactly what you will learn. Simple lessons, clear topics, and a path you can follow.
          </p>
          <a href="#subjects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300">
            Explore subjects <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Container>
      </section>

      <section id="subjects" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Subjects I teach</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Choose your subject</h2>
            <p className="mt-3 text-slate-400">Start with the one that interests you most.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {courses.map((course, index) => {
              const style = courseStyles[course.id as keyof typeof courseStyles]
              const Icon = style.icon
              const isSelected = selectedCourseId === course.id

              return (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className={`group flex flex-col rounded-3xl border p-6 shadow-2xl transition sm:p-7 ${isSelected ? 'border-emerald-300/60 bg-slate-900' : 'border-white/10 bg-slate-900/65 hover:-translate-y-1 hover:border-white/25'} ${style.glow}`}
                >
                  <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${style.color} text-slate-950`}>
                    <Icon size={27} aria-hidden="true" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{style.label}</p>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{course.description}</p>
                  <button
                    type="button"
                    onClick={() => chooseCourse(course.id)}
                    className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold transition ${isSelected ? 'bg-emerald-400 text-slate-950' : 'border border-white/15 bg-white/5 text-white hover:border-emerald-300/50 hover:bg-white/10'}`}
                  >
                    {isSelected ? 'Selected subject' : 'View this subject'}
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </section>

      <section id="course-topics" className="scroll-mt-24 pb-8">
        <Container>
          <motion.div
            key={selectedCourse.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-9 lg:p-12"
          >
            <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${selectedStyle.color} opacity-10 blur-3xl`} />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-emerald-300">
                  <Sparkles size={14} aria-hidden="true" /> Your learning path
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl">{selectedCourse.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">These are the main topics we will cover together, one clear step at a time. Click a topic to open the classroom workspace.</p>
                <div className="mt-7 flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-400/5 p-4 text-sm text-slate-300">
                  <BookOpen className="shrink-0 text-emerald-300" size={21} aria-hidden="true" />
                  Select a topic to view its video, slides, and practice problems.
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {selectedCourse.modules.map((module, index) => {
                  const isSelected = selectedModuleIndex === index
                  return (
                    <button
                      key={module.title}
                      type="button"
                      onClick={() => {
                        setSelectedModuleIndex(index)
                        setActiveTab('video')
                      }}
                      className={`flex text-left gap-3 rounded-2xl border p-4 transition-all duration-200 ${
                        isSelected
                          ? 'border-emerald-400 bg-emerald-400/10 shadow-lg shadow-emerald-500/5'
                          : 'border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <CheckCircle2 className={`mt-0.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} size={19} aria-hidden="true" />
                      <div>
                        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Topic {index + 1}</span>
                        <span className={`text-sm leading-6 font-semibold ${isSelected ? 'text-emerald-300' : 'text-slate-200'}`}>{module.title}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Interactive Workspace Panel */}
          {selectedCourse.modules[selectedModuleIndex] && (
            <motion.div
              key={`${selectedCourse.id}-${selectedModuleIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-9 lg:p-12"
            >
              <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${selectedStyle.color} opacity-10 blur-3xl`} />
              
              <div className="relative">
                {/* Header & Tabs */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Topic {selectedModuleIndex + 1} Workspace
                    </span>
                    <h3 className="text-2xl font-bold mt-1 text-white">
                      {selectedCourse.modules[selectedModuleIndex].title}
                    </h3>
                  </div>
                  
                  {/* Tab Selector */}
                  <div className="flex gap-1.5 rounded-xl bg-slate-950 p-1 border border-white/5 self-start shrink-0">
                    {(['video', 'slides', 'practice'] as const).map((tab) => {
                      const isActive = activeTab === tab
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                            isActive
                              ? 'bg-emerald-400 text-slate-950 shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {tab === 'video' && '📺 Video'}
                          {tab === 'slides' && '📄 Slides'}
                          {tab === 'practice' && '📝 Practice'}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Tab Content Panels */}
                <div className="mt-4">
                  {activeTab === 'video' && (
                    <div className="space-y-4">
                      {selectedCourse.modules[selectedModuleIndex].videoUrl ? (
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                          <div className="relative aspect-video w-full">
                            <iframe
                              className="absolute inset-0 h-full w-full border-0"
                              src={selectedCourse.modules[selectedModuleIndex].videoUrl}
                              title={`${selectedCourse.modules[selectedModuleIndex].title} Lecture Video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <div className="p-4 bg-slate-950/80 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                              <span className="text-xs font-semibold text-slate-300">Recorded Lecture</span>
                            </div>
                            <span className="text-xs text-slate-400">Class Video</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.01] py-16 px-4 text-center">
                          <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-slate-500">
                            <Play size={20} />
                          </div>
                          <h4 className="text-lg font-bold text-slate-300">Video Lesson Coming Soon</h4>
                          <p className="mt-2 text-sm text-slate-400 max-w-sm">
                            We are recording new HD lessons for this course topic. Check back soon for the video update!
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'slides' && (
                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 text-emerald-300 mb-4">
                            <FileText size={22} />
                            <h4 className="font-bold text-lg text-white">Class Lecture Slides & Notes</h4>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed mb-6">
                            Review core definitions, visual charts, and key equations from this class. 
                            These slides are structured for rapid reference before practicing problems.
                          </p>
                          {selectedCourse.modules[selectedModuleIndex].slidesPreview && (
                            <div className="space-y-3 mb-8">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Slides Summary:</h5>
                              <ul className="space-y-3">
                                {selectedCourse.modules[selectedModuleIndex].slidesPreview?.map((slide, idx) => (
                                  <li key={idx} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                    <span className="text-emerald-400 font-semibold select-none shrink-0">Slide {idx + 1}:</span>
                                    <span>{slide}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <a
                          href={selectedCourse.modules[selectedModuleIndex].slidesUrl || '#'}
                          onClick={(e) => {
                            if (!selectedCourse.modules[selectedModuleIndex].slidesUrl) e.preventDefault();
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15 self-start border border-white/10"
                        >
                          <Download size={16} />
                          Download Slide Deck (PDF)
                        </a>
                      </div>

                      {/* Side Checklist Card */}
                      <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-6">
                        <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-400">Study Checklist</h4>
                        <ul className="space-y-4">
                          {[
                            'Watch the lecture video in full details.',
                            'Download or read through slide summary.',
                            'Work through the practice problems on this page.',
                            'Verify answers and read the explanations.',
                            'Submit outstanding homework to the mentor.'
                          ].map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-300">
                              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/5">
                                {idx < 2 ? '✓' : ''}
                              </div>
                              <span className={idx < 2 ? 'text-slate-400 line-through' : ''}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'practice' && (
                    <div className="space-y-4">
                      {selectedCourse.modules[selectedModuleIndex].practiceProblems && 
                      selectedCourse.modules[selectedModuleIndex].practiceProblems!.length > 0 ? (
                        <div className="space-y-4">
                          <p className="text-sm text-slate-400 mb-4">
                            Solve these problems on paper first, then use hints or reveal the answers to verify your solution.
                          </p>
                          {selectedCourse.modules[selectedModuleIndex].practiceProblems?.map((problem, pIdx) => {
                            const showHint = visibleHints[problem.id]
                            const showAnswer = visibleAnswers[problem.id]
                            return (
                              <div key={problem.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 sm:p-6">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <span className="inline-block rounded bg-slate-800 px-2 py-0.5 text-xs font-bold text-slate-400 mb-2">
                                      Problem {pIdx + 1}
                                    </span>
                                    <p className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed">
                                      {problem.question}
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2.5">
                                  {problem.hint && (
                                    <button
                                      type="button"
                                      onClick={() => toggleHint(problem.id)}
                                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold border transition ${
                                        showHint 
                                          ? 'border-amber-400/35 bg-amber-400/10 text-amber-300' 
                                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      <Lightbulb size={13} />
                                      {showHint ? 'Hide Hint' : 'Show Hint'}
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => toggleAnswer(problem.id)}
                                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                                      showAnswer 
                                        ? 'bg-emerald-400 text-slate-950' 
                                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                    }`}
                                  >
                                    <HelpCircle size={13} />
                                    {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                                  </button>
                                </div>

                                {/* Hint box */}
                                {problem.hint && showHint && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/[0.03] p-4 text-xs sm:text-sm leading-relaxed text-amber-200/90"
                                  >
                                    <span className="font-bold text-amber-400">Hint:</span> {problem.hint}
                                  </motion.div>
                                )}

                                {/* Answer box */}
                                {showAnswer && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-200"
                                  >
                                    <span className="font-bold text-emerald-400 block mb-1">Answer / Solution:</span>
                                    {problem.answer}
                                  </motion.div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.01] py-16 px-4 text-center">
                          <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-slate-500">
                            <HelpCircle size={20} />
                          </div>
                          <h4 className="text-lg font-bold text-slate-300">Practice Problems Coming Soon</h4>
                          <p className="mt-2 text-sm text-slate-400 max-w-sm">
                            We are compiling custom problem sets for this module. Check back soon to practice your logic!
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </Container>
      </section>
    </div>
  )
}
