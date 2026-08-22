import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Code2,
  Calendar,
  ExternalLink,
  Copy,
  Plus,
  MessageSquare,
  Flame,
  Cpu,
  BookOpen,
  CheckCircle2,
  Clock3,
  Search,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import {
  courses,
  upcomingClasses,
  classroomSnippets,
  studentQuestions as initialQuestions,
  dsaStats,
  dsaProblems,
  systemDesignNotes,
} from '../data/content'
import { Badge, Card, Container } from '../components/ui'
import type { StudentQuestion } from '../types'

export function Hub() {
  const [activeTab, setActiveTab] = useState<'classroom' | 'jobprep'>('classroom')
  
  // Classroom tab states
  const [selectedSnippet, setSelectedSnippet] = useState(classroomSnippets[0].id)
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null)
  const [questions, setQuestions] = useState<StudentQuestion[]>(initialQuestions)
  const [newQuestionText, setNewQuestionText] = useState('')
  const [newQuestionName, setNewQuestionName] = useState('')
  const [qaCategory, setQaCategory] = useState('General')
  const [isPosting, setIsPosting] = useState(false)

  // DSA states
  const [expandedProblem, setExpandedProblem] = useState<string | null>('two-sum')
  const [dsaSearch, setDsaSearch] = useState('')
  const [copiedDsaId, setCopiedDsaId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string, type: 'snippet' | 'dsa') => {
    navigator.clipboard.writeText(text)
    if (type === 'snippet') {
      setCopiedSnippetId(id)
      setTimeout(() => setCopiedSnippetId(null), 2000)
    } else {
      setCopiedDsaId(id)
      setTimeout(() => setCopiedDsaId(null), 2000)
    }
  }

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newQuestionText.trim() || !newQuestionName.trim()) return

    setIsPosting(true)

    // Simulate Tanvir's response after 1.5 seconds
    setTimeout(() => {
      const addedQuestion: StudentQuestion = {
        id: `q-${Date.now()}`,
        studentName: `${newQuestionName} (Student)`,
        date: 'Just now',
        question: newQuestionText,
        answer: `Great question! When building React and Spring Boot applications, we always want to keep our code modular, secure, and responsive. I've noted down this issue and we'll cover it in our next live coding session! For now, try reviewing our API integration and check if CORS headers or JWT filter chains are configured properly.`,
        category: qaCategory,
      }
      setQuestions((prev) => [addedQuestion, ...prev])
      setNewQuestionText('')
      setNewQuestionName('')
      setIsPosting(false)
    }, 1500)
  }

  const filteredProblems = dsaProblems.filter((p) =>
    p.title.toLowerCase().includes(dsaSearch.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(dsaSearch.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-slate-950 pb-20 pt-10">
      {/* Absolute Radial Gradient background for visual excellence */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.1),transparent_50%)]" />

      <Container>
        {/* Banner Section */}
        <header className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-12 backdrop-blur-xl">
          <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
          <div className="max-w-3xl">
            <Badge className="mb-4 font-bold uppercase tracking-[0.2em] text-emerald-400">Developer-Instructor Hub</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where Building <span className="text-emerald-400">Meets Teaching</span>.
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Welcome to my workspace dashboard. Here, I bridge the gap between solving complex technical problems (DSA, backend architectures) and breaking them down into simple lessons for my web development students.
            </p>
          </div>

          {/* Key Quick Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
              <span className="block text-2xl font-black text-emerald-400 sm:text-3xl">30+</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">Students Taught</span>
            </div>
            <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
              <span className="block text-2xl font-black text-emerald-400 sm:text-3xl">82</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">DSA Solved</span>
            </div>
            <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
              <span className="block text-2xl font-black text-emerald-400 sm:text-3xl">3</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">Active Courses</span>
            </div>
            <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
              <span className="block text-2xl font-black text-emerald-400 sm:text-3xl">4.9/5</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">Student Rating</span>
            </div>
          </div>
        </header>

        {/* Tab Selection Switcher */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-slate-900/80 p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('classroom')}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeTab === 'classroom'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap size={18} />
              🎓 Student Classroom
            </button>
            <button
              onClick={() => setActiveTab('jobprep')}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeTab === 'jobprep'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu size={18} />
              ⚔️ Job Prep & DSA Tracker
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'classroom' ? (
            <motion.div
              key="classroom"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-12"
            >
              {/* Left Column: Courses & Live schedule */}
              <div className="space-y-8 lg:col-span-5">
                {/* Active Courses */}
                <Card id="courses" className="scroll-mt-24 border-emerald-400/25 shadow-[0_0_30px_rgba(52,211,153,0.12)]">
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <BookOpen className="text-emerald-400" />
                    Courses Taken by Tanvir Ahmad
                  </h2>
                  <div className="space-y-6">
                    {courses.map((course) => (
                      <div key={course.id} className="rounded-xl bg-white/5 border border-white/5 p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-bold text-white">{course.title}</h3>
                          <Badge>{course.studentsCount} Active Students</Badge>
                        </div>
                        <p className="text-sm text-slate-300 mb-4">{course.description}</p>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Modules Covered:</h4>
                        <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                          {course.modules.map((mod, idx) => (
                            <li key={idx}>{mod}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Upcoming Live Sessions */}
                <Card>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Calendar className="text-emerald-400" />
                    Upcoming Live Classes
                  </h2>
                  <div className="space-y-4">
                    {upcomingClasses.map((session) => (
                      <div key={session.id} className="relative rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Scheduled Live</span>
                        </div>
                        <h3 className="text-sm font-bold text-white">{session.title}</h3>
                        <p className="text-xs text-slate-400 mt-1">{session.date} • {session.time}</p>
                        <p className="text-xs text-slate-300 mt-2 italic">Topic: {session.topic}</p>
                        <button
                          onClick={() => alert("This is a demo portal classroom link. Live integration is disabled.")}
                          className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-bold text-slate-950 transition hover:bg-emerald-300"
                        >
                          Join Interactive Sandbox Classroom <ExternalLink size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Column: Code Playground & Interactive Q&A */}
              <div className="space-y-8 lg:col-span-7">
                {/* Code Playground */}
                <Card className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                      <Code2 className="text-emerald-400" />
                      Classroom Code Playground
                    </h2>
                    <div className="flex gap-2">
                      {classroomSnippets.map((snip) => (
                        <button
                          key={snip.id}
                          onClick={() => setSelectedSnippet(snip.id)}
                          className={`rounded-lg px-3 py-1 text-xs font-bold transition ${
                            selectedSnippet === snip.id
                              ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                              : 'text-slate-400 hover:text-slate-200 border border-white/5'
                          }`}
                        >
                          {snip.id === 'snippet-jwt' ? 'Auth Middleware' : 'Fetch Hook'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {classroomSnippets.map(
                    (snip) =>
                      snip.id === selectedSnippet && (
                        <div key={snip.id} className="space-y-4">
                          <p className="text-sm text-slate-300">{snip.description}</p>
                          <div className="relative rounded-xl border border-white/10 bg-slate-950 p-5 font-mono text-sm leading-relaxed overflow-x-auto max-h-96">
                            <button
                              onClick={() => copyToClipboard(snip.code, snip.id, 'snippet')}
                              className="absolute right-4 top-4 flex items-center gap-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 p-1.5 text-xs text-slate-400 transition"
                              title="Copy code"
                            >
                              {copiedSnippetId === snip.id ? (
                                <Check size={14} className="text-emerald-400" />
                              ) : (
                                <Copy size={14} />
                              )}
                              {copiedSnippetId === snip.id ? 'Copied!' : 'Copy'}
                            </button>
                            <pre className="text-slate-300 text-xs sm:text-sm">
                              <code>{snip.code}</code>
                            </pre>
                          </div>
                        </div>
                      )
                  )}
                </Card>

                {/* Interactive Student Q&A Board */}
                <Card>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-2">
                    <MessageSquare className="text-emerald-400" />
                    Student Q&A Forum
                  </h2>
                  <p className="text-sm text-slate-400 mb-6">
                    A demonstration of how I explain complex programming concepts to students. Post a mock question below to see an instant simulated response.
                  </p>

                  {/* Ask a Question Form */}
                  <form onSubmit={handlePostQuestion} className="bg-white/5 border border-white/5 rounded-xl p-5 mb-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Mock Name</label>
                        <input
                          type="text"
                          required
                          value={newQuestionName}
                          onChange={(e) => setNewQuestionName(e.target.value)}
                          placeholder="e.g. Student Khalid"
                          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
                        <select
                          value={qaCategory}
                          onChange={(e) => setQaCategory(e.target.value)}
                          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        >
                          <option>General</option>
                          <option>JavaScript</option>
                          <option>React</option>
                          <option>Databases</option>
                          <option>Backend Security</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">What is your question?</label>
                      <textarea
                        required
                        rows={2}
                        value={newQuestionText}
                        onChange={(e) => setNewQuestionText(e.target.value)}
                        placeholder="e.g., Why do we use cors() middleware in Express?"
                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isPosting}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:opacity-50"
                    >
                      {isPosting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          Tanvir is writing a response...
                        </>
                      ) : (
                        <>
                          <Plus size={16} /> Submit Mock Question
                        </>
                      )}
                    </button>
                  </form>

                  {/* Question Feed */}
                  <div className="space-y-5 max-h-[450px] overflow-y-auto pr-2">
                    {questions.map((q) => (
                      <div key={q.id} className="border-b border-white/5 pb-5 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <span className="text-xs font-bold text-emerald-400">{q.studentName}</span>
                            <span className="text-xs text-slate-500 ml-2">{q.date}</span>
                          </div>
                          <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold text-slate-400 border border-white/5">
                            {q.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1.5">Q: {q.question}</h4>
                        <div className="mt-3 bg-emerald-400/[0.02] border-l-2 border-emerald-400 p-3 rounded-r-lg">
                          <p className="text-xs font-bold text-emerald-300">Tanvir Ahmad (Instructor):</p>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{q.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="jobprep"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-12"
            >
              {/* Left Column: DSA Solved Tracker & Accordion */}
              <div className="space-y-8 lg:col-span-7">
                {/* DSA Progress */}
                <Card>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Flame className="text-emerald-400" />
                    DSA Problem Solving Tracker
                  </h2>

                  {/* Stats circles/bar */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-emerald-400/5 rounded-xl p-4 border border-emerald-400/10 text-center">
                      <span className="block text-xl font-bold text-emerald-400">{dsaStats.easy}</span>
                      <span className="text-xs text-emerald-300/80 font-medium">Easy Solved</span>
                    </div>
                    <div className="bg-yellow-400/5 rounded-xl p-4 border border-yellow-400/10 text-center">
                      <span className="block text-xl font-bold text-yellow-400">{dsaStats.medium}</span>
                      <span className="text-xs text-yellow-300/80 font-medium">Medium Solved</span>
                    </div>
                    <div className="bg-rose-500/5 rounded-xl p-4 border border-rose-500/10 text-center">
                      <span className="block text-xl font-bold text-rose-400">{dsaStats.hard}</span>
                      <span className="text-xs text-rose-300/80 font-medium">Hard Solved</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-semibold text-slate-400">
                      <span>Total Solved: {dsaStats.solved}</span>
                      <span>Target: {dsaStats.target}</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-900 rounded-full border border-white/5 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${(dsaStats.solved / dsaStats.target) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Problems list */}
                  <div className="flex items-center gap-2 bg-slate-950 border border-white/10 rounded-xl px-3 py-2 mb-6">
                    <Search className="h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search solved problems by title or tags..."
                      value={dsaSearch}
                      onChange={(e) => setDsaSearch(e.target.value)}
                      className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-4">
                    {filteredProblems.map((prob) => {
                      const isExpanded = expandedProblem === prob.id
                      return (
                        <div
                          key={prob.id}
                          className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-colors"
                        >
                          {/* Accordion Trigger Header */}
                          <button
                            onClick={() => setExpandedProblem(isExpanded ? null : prob.id)}
                            className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-bold text-white">{prob.title}</h3>
                                <span
                                  className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                                    prob.difficulty === 'Easy'
                                      ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20'
                                      : prob.difficulty === 'Medium'
                                      ? 'bg-yellow-400/10 text-yellow-300 border border-yellow-400/20'
                                      : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                                  }`}
                                >
                                  {prob.difficulty}
                                </span>
                              </div>
                              <div className="flex gap-2 mt-2">
                                {prob.tags.map((t) => (
                                  <span key={t} className="text-[10px] text-slate-400">
                                    #{t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {isExpanded ? (
                              <ChevronUp size={18} className="text-slate-400" />
                            ) : (
                              <ChevronDown size={18} className="text-slate-400" />
                            )}
                          </button>

                          {/* Accordion Content */}
                          {isExpanded && (
                            <div className="border-t border-white/5 bg-slate-950/80 p-5 space-y-4">
                              <p className="text-xs text-slate-300 leading-relaxed">{prob.description}</p>
                              
                              {/* Solutions Code block */}
                              <div className="relative rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs overflow-x-auto">
                                <button
                                  onClick={() => copyToClipboard(prob.solutionCode, prob.id, 'dsa')}
                                  className="absolute right-4 top-4 flex items-center gap-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 p-1 text-[10px] text-slate-400 transition"
                                >
                                  {copiedDsaId === prob.id ? (
                                    <Check size={12} className="text-emerald-400" />
                                  ) : (
                                    <Copy size={12} />
                                  )}
                                  {copiedDsaId === prob.id ? 'Copied' : 'Copy'}
                                </button>
                                <pre className="text-slate-300">{prob.solutionCode}</pre>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-emerald-400 mb-1">Approach:</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{prob.explanation}</p>
                              </div>

                              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-3 text-[11px]">
                                <div>
                                  <span className="font-semibold text-slate-400">Time Complexity:</span>{' '}
                                  <code className="text-emerald-300">{prob.complexity.time}</code>
                                </div>
                                <div>
                                  <span className="font-semibold text-slate-400">Space Complexity:</span>{' '}
                                  <code className="text-emerald-300">{prob.complexity.space}</code>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </div>

              {/* Right Column: System Design & Mock Interviews */}
              <div className="space-y-8 lg:col-span-5">
                {/* System Design Notes */}
                <Card>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Cpu className="text-emerald-400" />
                    System Design Study Notes
                  </h2>
                  <div className="space-y-6">
                    {systemDesignNotes.map((note) => (
                      <div key={note.id} className="rounded-xl bg-white/5 border border-white/5 p-5">
                        <h3 className="text-base font-bold text-white mb-1">{note.title}</h3>
                        <p className="text-xs text-slate-300 mb-3">{note.description}</p>
                        
                        <div className="space-y-2 mb-3">
                          {note.details.map((detail, index) => (
                            <p key={index} className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                              {detail}
                            </p>
                          ))}
                        </div>

                        <div className="bg-emerald-400/[0.02] border-t border-emerald-400/10 pt-3">
                          <h4 className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1.5">Key Takeaways:</h4>
                          <ul className="space-y-1">
                            {note.keyTakeaways.map((takeaway, idx) => (
                              <li key={idx} className="text-[11px] text-slate-300 flex items-center gap-1">
                                <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                                {takeaway}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Mock Interview Log */}
                <Card>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Clock3 className="text-emerald-400" />
                    Mock Interview Log
                  </h2>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-xs space-y-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">API Security & Auth Patterns</span>
                        <span className="text-emerald-400">Score: 9/10</span>
                      </div>
                      <p className="text-slate-400">Peer Mock Interview • Jul 29, 2026</p>
                      <p className="text-slate-300 leading-relaxed">
                        <strong>Feedback:</strong> Strong explanation of JWT lifecycle, CSRF tokens, and security measures in Spring Boot REST APIs. Need to polish rate limiter cluster synchronization strategies.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-xs space-y-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">React & Spring Boot Architecture</span>
                        <span className="text-emerald-400">Score: 8.5/10</span>
                      </div>
                      <p className="text-slate-400">Peer Mock Interview • Jul 20, 2026</p>
                      <p className="text-slate-300 leading-relaxed">
                        <strong>Feedback:</strong> Great understanding of Spring Data JPA lazy-loading and query optimization. Recommended exploring Redis caching strategies for nested relational structures.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  )
}

export default Hub
