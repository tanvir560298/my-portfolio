import { useState, type ReactNode } from 'react'
import { GraduationCap, Menu, X } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { navItems, personal } from '../data/content'
import { Container } from './ui'

export function Layout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-lg bg-emerald-400 px-4 py-2 font-bold text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="/#home"
            className="flex items-center gap-3 font-bold text-white"
            aria-label={`${personal.name} home`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 text-sm text-slate-950">
              {personal.initials}
            </span>
            <span className="hidden sm:block">{personal.name}</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isHash = item.href.startsWith('/#') || item.href.startsWith('#')
              const isCoursesLink = item.label === 'Courses by Tanvir Ahmad'
              const linkClassName = isCoursesLink
                ? 'inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-emerald-300/40 bg-emerald-400/15 px-3 py-2 text-xs font-extrabold text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.28)] transition hover:bg-emerald-400/25 hover:text-white'
                : 'rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white'
              return isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClassName}
                >
                  {isCoursesLink && <GraduationCap size={15} aria-hidden="true" />}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={linkClassName}
                >
                  {isCoursesLink && <GraduationCap size={15} aria-hidden="true" />}
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </Container>
        {open && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isHash = item.href.startsWith('/#') || item.href.startsWith('#')
              const isCoursesLink = item.label === 'Courses by Tanvir Ahmad'
              const linkClassName = isCoursesLink
                ? 'flex items-center gap-2 rounded-lg border border-emerald-300/40 bg-emerald-400/15 px-3 py-3 font-bold text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.2)] hover:bg-emerald-400/25 hover:text-white'
                : 'block rounded-lg px-3 py-3 font-medium text-slate-200 hover:bg-white/5'
              return isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={linkClassName}
                >
                  {isCoursesLink && <GraduationCap size={17} aria-hidden="true" />}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={linkClassName}
                >
                  {isCoursesLink && <GraduationCap size={17} aria-hidden="true" />}
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </header>
      <main id="main-content">{children ?? <Outlet />}</main>
      <footer className="border-t border-white/10 py-8">
        <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with React and care.
          </p>
          <a href="#home" className="font-semibold text-slate-300 hover:text-emerald-300">
            Back to top ↑
          </a>
        </Container>
      </footer>
    </div>
  )
}
