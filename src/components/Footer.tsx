import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import personal from '../data/personal.json'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 text-white font-display font-bold text-sm">
            {personal.initials}
          </span>
          <div>
            <div className="font-display font-semibold text-zinc-900 dark:text-white">
              {personal.shortName}
              <span className="text-violet-500 dark:text-violet-400">.</span>
            </div>
            <div className="text-xs text-zinc-500">
              © {year} {personal.name}. All rights reserved.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
