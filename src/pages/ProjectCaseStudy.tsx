import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/content'

const Section = ({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) => (
  <section className="border-t border-slate-200 py-10 dark:border-slate-800">
    <div className="grid gap-4 md:grid-cols-[10rem_1fr]">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
        {number}
      </p>
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">{title}</h2>
        <div className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  </section>
)

export function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-700 dark:text-brand-300">
          Project not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-slate-950 dark:text-white">
          This case study does not exist.
        </h1>
        <Link
          className="mt-8 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
          to="/#projects"
        >
          Back to projects
        </Link>
      </main>
    )
  }

  return (
    <main>
      <article className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-8 lg:pt-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>

        <header className="mt-12 grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                {project.category}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{project.status}</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-slate-950 sm:text-6xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.fullDescription}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-5 border-l-2 border-brand-400 pl-6 lg:grid-cols-1">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-slate-400">Role</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Completed
              </dt>
              <dd className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                {project.completedAt}
              </dd>
            </div>
          </dl>
        </header>

        <div className="my-14 rounded-4xl border border-brand-200 bg-brand-50 p-6 sm:p-10 dark:border-brand-900 dark:bg-brand-950/40">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
            Technology stack
          </p>
          <ul className="mt-5 flex flex-wrap gap-3" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <Section number="01 / Context" title="The problem">
          <p>{project.problem}</p>
        </Section>
        <Section number="02 / Approach" title="The solution">
          <p>{project.solution}</p>
          <h3 className="mt-8 font-display text-lg font-bold text-slate-900 dark:text-white">
            Key features
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section number="03 / Process" title="Technical decisions">
          <ul className="list-inside list-disc space-y-2">
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </Section>
        <Section number="04 / Reflection" title="Challenge and resolution">
          <p>
            <strong className="text-slate-900 dark:text-white">Challenge:</strong>{' '}
            {project.challenges}
          </p>
          <p className="mt-4">
            <strong className="text-slate-900 dark:text-white">Resolution:</strong>{' '}
            {project.resolution}
          </p>
        </Section>
        <Section number="05 / Next steps" title="Lessons and improvements">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Lessons</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                {project.lessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Future improvements</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                {project.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-brand-500 dark:border-slate-700 dark:text-white"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> Source code
              </a>
            )}
          </div>
        )}
      </article>
    </main>
  )
}

export default ProjectCaseStudy
