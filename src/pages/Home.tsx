import { cloneElement, useState, type ReactElement } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Youtube,
} from 'lucide-react'
import { z } from 'zod'
import {
  personal,
  projects,
  resources,
  services,
  skills,
  testimonials,
  timeline,
} from '../data/content'
import type { ProjectCategory } from '../types'
import { ActionLink, Badge, Button, Card, Container, Section } from '../components/ui'
import { RoadmapSolarSystem } from '../components/roadmap/RoadmapSolarSystem'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least 2 characters.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Please add a short subject.'),
  message: z.string().trim().min(10, 'Please write at least 10 characters.'),
})
type ContactValues = z.infer<typeof contactSchema>

const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'Frontend',
  'Full Stack',
  'Backend',
  'Educational',
  'Practice',
]

export function Home() {
  const [projectFilter, setProjectFilter] = useState<(typeof projectCategories)[number]>('All')
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const filteredProjects =
    projectFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === projectFilter)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) })

  const submitContact = async (values: ContactValues) => {
    setSent(false)
    setSubmitError('')
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, inquiryType: 'General Question', website: '' }),
        })
        const result = (await response.json()) as { success?: boolean; message?: string }

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Unable to send your message right now.')
        }

        setSent(true)
        reset()
        return
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.')
        return
      }
    }

    const subject = encodeURIComponent(`${values.subject} — from ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
    reset()
  }

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(52,211,153,.15),transparent_32%)]" />
        <Container className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Badge>{personal.eyebrow}</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building useful products.{' '}
              <span className="text-emerald-400">Teaching the process.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{personal.pitch}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink href="#projects">
                View projects <ArrowRight size={17} />
              </ActionLink>
              <ActionLink href="#contact" variant="secondary">
                Let’s talk
              </ActionLink>
            </div>
          </div>
          <Card className="relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-emerald-400/10" />
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-emerald-400 text-2xl font-black text-slate-950">
              {personal.initials}
            </div>
            <p className="mt-7 text-sm font-bold uppercase tracking-wider text-emerald-300">
              Currently
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">{personal.title}</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {personal.location}
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" /> {personal.availability}
              </p>
            </div>
          </Card>
        </Container>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title="A developer who cares about clarity."
        intro={personal.bio}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Education', personal.education],
            ['Experience', personal.experience],
            ['Certifications', personal.certifications],
            ['Languages', personal.languages],
          ].map(([label, value]) => (
            <Card key={label}>
              <p className="text-sm font-semibold text-emerald-300">{label}</p>
              <p className="mt-2 text-slate-200">{value}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Capabilities"
        title="Tools I use to turn ideas into software."
        className="bg-slate-900/35"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category}>
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <Code2 size={19} className="text-emerald-400" />
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} className="border-white/10 bg-white/5 text-slate-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected work"
        title="Projects and product explorations."
        intro="Every concept is labeled honestly. Open a project to see the thinking, tradeoffs, and next steps."
      >
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setProjectFilter(category)}
              aria-pressed={projectFilter === category}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${projectFilter === category ? 'bg-emerald-400 text-slate-950' : 'border border-white/10 text-slate-300 hover:border-emerald-400/40'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <Badge>{project.category}</Badge>
                <span className="text-xs font-semibold text-slate-400">{project.status}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="text-xs text-slate-400">
                    #{technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 transition hover:text-white"
                >
                  Case study <ArrowRight size={14} />
                </a>
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-white"
                      title="GitHub Repository"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 transition hover:text-emerald-300"
                      title="Live Demo"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="rounded-xl border border-dashed border-white/15 p-8 text-center text-slate-400">
            No projects in this category yet.
          </p>
        )}
      </Section>

      <Section
        id="teaching"
        eyebrow="Teaching & YouTube"
        title="Teaching Web Development in Bangla on YouTube."
        intro="I teach modern web development in Bangla — breaking down programming concepts from foundational HTML and responsive design to Full-Stack MERN applications."
      >
        <div className="mb-12 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/20 via-slate-900 to-slate-900 p-6 shadow-2xl backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-xs font-extrabold text-red-400">
                  <Youtube size={14} /> Full Course in Bangla
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                  7 Video Lessons • Beginner to Advanced
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                HTML Full Course in Bangla | Web Development for Beginners
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                Learn modern HTML from scratch in Bangla! Covers environment setup, semantic structuring, SEO headings, media, forms, lists, and building a complete portfolio website.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={personal.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 hover:shadow-red-600/40"
              >
                <Youtube size={17} /> Watch on YouTube <ArrowUpRight size={15} />
              </a>
              <a
                href="/resources/html-basics"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
              >
                Watch on Website <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <RoadmapSolarSystem />
      </Section>

      <Section
        eyebrow="Ways I can help"
        title="Development and learning support."
        className="bg-slate-900/35"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Resources"
        title="Notes for developers who are still becoming."
        intro="Practical explanations and roadmaps—currently being prepared."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.slug}>
              <div className="flex items-center gap-3">
                <Badge>{resource.category}</Badge>
                <span className="text-xs text-slate-400">{resource.status}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{resource.title}</h3>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`/resources/${resource.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-300 hover:text-emerald-200"
                >
                  View course <ArrowRight size={15} />
                </a>
                {resource.playlistUrl && (
                  <a
                    href={resource.playlistUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300"
                  >
                    <Youtube size={14} /> YouTube Playlist <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Journey" title="Progress built one milestone at a time.">
        <ol className="relative ml-3 border-l border-white/15">
          {timeline.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="relative mb-9 ml-7 last:mb-0">
              <span className="absolute -left-[2.08rem] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
              <p className="text-sm font-bold text-emerald-300">{entry.date}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{entry.title}</h3>
              <p className="mt-2 text-slate-300">{entry.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {testimonials.length > 0 && (
        <Section eyebrow="Testimonials" title="What people say.">
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={`${item.name}-${item.feedback}`}>
                <blockquote className="text-slate-200">“{item.feedback}”</blockquote>
                <p className="mt-4 font-bold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section
        id="resume"
        eyebrow="Resume & Credentials"
        title="Comprehensive CV & Professional Background."
        className="bg-slate-900/35"
      >
        <Card className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              Tanvir Ahmad — Professional Curriculum Vitae (CV)
            </h3>
            <p className="mt-2 text-slate-300 max-w-2xl leading-relaxed">
              Full-Stack MERN Developer, CEO & English Instructor at Lugaish, and former District Secretary (Interact 3281). Download the complete verified PDF resume in one click.
            </p>
          </div>
          <ActionLink href={personal.resume} download="Tanvir_Ahmad_CV.pdf">
            <Download size={17} /> Download CV (PDF)
          </ActionLink>
        </Card>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Have a project or learning goal?"
        intro="Share a little context and your email app will open with a ready-to-send message."
      >
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Card>
              <GraduationCap className="text-emerald-400" size={30} />
              <h3 className="mt-5 text-xl font-bold text-white">Let’s build or learn together.</h3>
              <p className="mt-3 leading-7 text-slate-300">
                For development work, mentoring, or collaboration, send a clear note about what you
                need.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="rounded-lg border border-white/10 p-3 hover:text-emerald-300"
                >
                  <Mail />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg border border-white/10 p-3 hover:text-emerald-300"
                >
                  <Github />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg border border-white/10 p-3 hover:text-emerald-300"
                >
                  <Linkedin />
                </a>
                {personal.youtube && (
                  <a
                    href={personal.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube Channel / Playlist"
                    className="rounded-lg border border-white/10 p-3 hover:text-red-400 transition"
                  >
                    <Youtube />
                  </a>
                )}
              </div>
            </Card>
          </div>
          <form
            onSubmit={handleSubmit(submitContact)}
            noValidate
            className="grid gap-5"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register('name')} className="form-input" autoComplete="name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  className="form-input"
                  autoComplete="email"
                />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject?.message}>
              <input {...register('subject')} className="form-input" />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea {...register('message')} rows={6} className="form-input resize-y" />
            </Field>
            {sent && (
              <p role="status" className="text-sm font-semibold text-emerald-300">
                Thanks — your message has been received.
              </p>
            )}
            {submitError && (
              <p role="alert" className="text-sm font-semibold text-rose-300">
                {submitError}
              </p>
            )}
            <Button type="submit" disabled={isSubmitting} className="justify-self-start">
              Send message <ArrowRight size={17} />
            </Button>
          </form>
        </div>
      </Section>
    </>
  )
}

export default Home

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactElement<Record<string, unknown>>
}) {
  const id = `contact-${label.toLowerCase()}`
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      <span className="[&>*]:w-full [&>*]:rounded-xl [&>*]:border [&>*]:border-white/10 [&>*]:bg-slate-900 [&>*]:px-4 [&>*]:py-3 [&>*]:text-base [&>*]:font-normal [&>*]:text-white [&>*]:outline-none [&>*]:transition focus-within:[&>*]:border-emerald-400 focus-within:[&>*]:ring-2 focus-within:[&>*]:ring-emerald-400/20">
        {cloneElement(children, {
          id,
          ...(error ? { 'aria-invalid': true, 'aria-describedby': `${id}-error` } : {}),
        })}
      </span>
      {error && (
        <span id={`${id}-error`} role="alert" className="font-normal text-rose-300">
          {error}
        </span>
      )}
    </label>
  )
}
