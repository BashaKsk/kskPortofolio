import { useEffect, useState } from 'react'
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { useTheme } from '../hooks/useTheme'
import personal from '../data/personal.json'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'px-3 py-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/5 transition'
  const iconBtn =
    'p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/5 transition'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled
              ? 'glass shadow-lg shadow-zinc-900/5 dark:shadow-black/20'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 text-white font-display font-bold text-sm group-hover:scale-105 transition">
              {personal.initials}
            </span>
            <span className="hidden sm:block font-display font-semibold tracking-tight text-zinc-900 dark:text-white">
              {personal.shortName}
              <span className="text-violet-500 dark:text-violet-400">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={iconBtn}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={iconBtn}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={iconBtn}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition"
            >
              <FileDown className="w-4 h-4" />
              Hire me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={iconBtn}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className={iconBtn}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2 px-1">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/0 dark:text-zinc-200 dark:hover:bg-white/5"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/0 dark:text-zinc-200 dark:hover:bg-white/5"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
