import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resources } from '../data/content'

export function ResourceDetail() {
  const { slug } = useParams()
  const resource = resources.find((item) => item.slug === slug)

  if (!resource) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-700 dark:text-brand-300">
          Resource not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-slate-950 dark:text-white">
          We could not find that article.
        </h1>
        <Link
          className="mt-8 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
          to="/resources"
        >
          Browse resources
        </Link>
      </main>
    )
  }

  return (
    <main>
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-12 sm:px-8 lg:pt-20">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
        >
          <ArrowLeft className="h-4 w-4" /> All resources
        </Link>
        <header className="mt-12 border-b border-slate-200 pb-12 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 dark:bg-brand-950 dark:text-brand-200">
              {resource.category}
            </span>
            <span className="rounded-full border border-amber-300 px-3 py-1 text-xs font-bold text-amber-800 dark:border-amber-700 dark:text-amber-200">
              {resource.status}
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-950 sm:text-6xl dark:text-white">
            {resource.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300">
            {resource.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> {resource.publishedAt}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> {resource.readingTime}
            </span>
          </div>
        </header>

        <div className="py-12">
          {resource.content.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph}`}
              className="mb-6 text-lg leading-9 text-slate-700 dark:text-slate-300"
            >
              {paragraph}
            </p>
          ))}
          {resource.status === 'Planned Content' && (
            <aside className="mt-10 rounded-3xl border border-brand-200 bg-brand-50 p-7 dark:border-brand-900 dark:bg-brand-950/40">
              <h2 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                This guide is being prepared.
              </h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                The current page is an honest preview. Full examples and exercises will be added
                after the content has been reviewed.
              </p>
            </aside>
          )}
        </div>

        <footer className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Topics</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </main>
  )
}

export default ResourceDetail
