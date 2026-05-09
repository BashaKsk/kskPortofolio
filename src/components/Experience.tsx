import { Briefcase, MapPin } from 'lucide-react'
import Section from './Section'
import experience from '../data/experience.json'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I've <span className="text-gradient">built</span>.
        </>
      }
      subtitle="Four roles, three cities, one consistent thread — building production software with small, fast teams."
    >
      <ol className="relative">
        {/* Vertical line */}
        <span
          aria-hidden
          className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/20 to-transparent"
        />

        {experience.items.map((item) => (
          <li key={item.id} className="relative pl-12 sm:pl-20 pb-10 last:pb-0">
            <div className="absolute left-0 top-0 grid place-items-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 hover:border-violet-400/30 hover:bg-white/[0.04] transition">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
                    <span className="text-violet-300 font-medium">
                      {item.company}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-mono ${
                    item.current
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/20'
                      : 'bg-white/5 text-zinc-300 border border-white/10'
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] sm:text-xs font-mono text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
