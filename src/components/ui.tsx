import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10', className)} {...props} />
  )
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cx('scroll-mt-24 py-20 sm:py-24', className)}>
      <Container>
        {(eyebrow || title || intro) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:border-emerald-400/30',
        className,
      )}
      {...props}
    />
  )
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        'inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  return (
    <button
      className={cx(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'primary'
          ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
          : 'border border-white/15 bg-white/5 text-white hover:border-emerald-400/50 hover:bg-white/10',
        className,
      )}
      {...props}
    />
  )
}

export function ActionLink({
  href,
  children,
  variant = 'primary',
  external,
  download,
  className,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  download?: boolean | string
  className?: string
}) {
  return (
    <a
      href={href}
      download={download}
      className={cx(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950',
        variant === 'primary'
          ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
          : 'border border-white/15 bg-white/5 text-white hover:border-emerald-400/50 hover:bg-white/10',
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      {external && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  )
}
