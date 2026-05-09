import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Section from './Section'
import { GithubIcon } from './BrandIcons'
import projects from '../data/projects.json'

type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  highlights: string[]
  demoUrl?: string
  githubUrl?: string
  category?: string
  accent: string
}

export default function Projects() {
  const items = projects.items as Project[]

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I've <span className="text-gradient">shipped</span> &amp;
          explored.
        </>
      }
      subtitle="A mix of production-style side projects, learning builds, and experiments across full-stack, machine learning, and GenAI."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((p) => {
          const primaryUrl = p.demoUrl ?? p.githubUrl ?? '#'
          const isLive = Boolean(p.demoUrl)
          return (
            <a
              key={p.id}
              href={primaryUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-violet-400/30 dark:hover:bg-white/[0.04] transition overflow-hidden flex flex-col"
            >
              <div
                className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${p.accent} opacity-15 dark:opacity-10 blur-3xl group-hover:opacity-30 dark:group-hover:opacity-25 transition`}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {isLive ? (
                      <div
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium text-white shadow-lg`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live demo
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/5 dark:border-white/10 dark:text-zinc-200">
                        <GithubIcon className="w-3 h-3" />
                        Open source
                      </div>
                    )}
                    {p.category && (
                      <div className="inline-flex items-center rounded-full border border-violet-300 bg-violet-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-violet-700 uppercase tracking-wider dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                        {p.category}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0" />
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-500 dark:bg-violet-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-100 border border-zinc-200 px-2 py-0.5 text-[11px] sm:text-xs font-mono text-zinc-700 dark:bg-white/5 dark:border-white/10 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between gap-3 border-t border-zinc-200 dark:border-white/10">
                  <span className="text-xs font-mono text-zinc-500 truncate">
                    {primaryUrl.replace(/^https?:\/\//, '')}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.githubUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(p.githubUrl, '_blank', 'noopener,noreferrer')
                        }}
                        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Code
                      </span>
                    )}
                    {p.demoUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(p.demoUrl, '_blank', 'noopener,noreferrer')
                        }}
                        className="inline-flex items-center gap-1.5 rounded-md bg-violet-100 border border-violet-300 px-2.5 py-1 text-xs text-violet-700 hover:bg-violet-200 dark:bg-violet-500/10 dark:border-violet-400/20 dark:text-violet-200 dark:hover:bg-violet-500/20 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
