import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resources } from '../data/content'

export function Resources() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-24 pt-14 sm:px-8 lg:pt-20">
      <header className="max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
          Learning resources
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 sm:text-6xl dark:text-white">
          Clear notes for becoming a better web developer.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Practical roadmaps, guides, and lessons designed to make the next step easier to
          understand.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <article
            key={resource.slug}
            className="group relative flex flex-col rounded-4xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                {resource.category}
              </span>
              <BookOpen className="h-6 w-6 text-brand-600" aria-hidden="true" />
            </div>
            <h2 className="mt-7 font-display text-2xl font-bold leading-snug text-slate-950 dark:text-white">
              <Link
                className="outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-brand-500"
                to={`/resources/${resource.slug}`}
              >
                {resource.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
              {resource.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm dark:border-slate-800">
              <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Clock3 className="h-4 w-4" /> {resource.readingTime}
              </span>
              <span className="inline-flex items-center gap-2 font-semibold text-brand-700 dark:text-brand-300">
                Read resource{' '}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Resources
