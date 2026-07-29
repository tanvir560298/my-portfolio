import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="relative isolate flex min-h-[75vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-900/30" />
      <div className="max-w-2xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-7xl dark:text-white">
          Looks like this route took a detour.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          The page may have moved, or the address might be incorrect. You can return home and
          continue exploring.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <Home className="h-4 w-4" /> Go home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Go back
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
