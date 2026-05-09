import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Section from './Section'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I've <span className="text-gradient">shipped</span>.
        </>
      }
      subtitle="A quick look at side projects and learning builds. Live demos available — click to try them out."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.items.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-7 hover:border-violet-400/30 hover:bg-white/[0.04] transition overflow-hidden"
          >
            <div
              className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-25 transition`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium text-white shadow-lg`}
                >
                  <ExternalLink className="w-3 h-3" />
                  Live demo
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>

              <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-5 space-y-1.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] sm:text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 truncate">
                  {p.url.replace(/^https?:\/\//, '')}
                </span>
                <span className="text-xs text-violet-300 font-medium">
                  Visit →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
