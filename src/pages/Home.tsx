import { cloneElement, useState, type ReactElement } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
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

  const submitContact = (values: ContactValues) => {
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
              <a
                href={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-300 hover:text-emerald-200"
              >
                View case study <ArrowRight size={16} />
              </a>
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
        eyebrow="Teaching"
        title="Preparing practical web development lessons for YouTube."
        intro="I plan to help beginners learn step by step, build practical projects, and follow a clear path from web fundamentals to full-stack React and Java/Spring Boot."
      >
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
              <p className="mt-3 text-slate-300">{resource.description}</p>
              <a
                href={`/resources/${resource.slug}`}
                className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-300"
              >
                Read overview <ArrowRight size={16} />
              </a>
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
        eyebrow="Resume"
        title="A quick overview of my background."
        className="bg-slate-900/35"
      >
        <Card className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              Developer & aspiring educator profile
            </h3>
            <p className="mt-2 text-slate-300">
              Download the current placeholder resume, then replace it when your final details are
              ready.
            </p>
          </div>
          <ActionLink href={personal.resume}>
            <Download size={17} /> Download resume
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
                Your email app has been opened with the message prepared.
              </p>
            )}
            <Button type="submit" disabled={isSubmitting} className="justify-self-start">
              Prepare email <ArrowRight size={17} />
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
