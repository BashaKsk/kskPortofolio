import { GraduationCap, Award } from 'lucide-react'
import Section from './Section'
import education from '../data/education.json'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Foundations & <span className="text-gradient">credentials</span>.
        </>
      }
      subtitle="A mix of formal engineering education and a hands-on industry-ready program — both shaped how I approach problems today."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.items.map((item, i) => (
          <article
            key={item.id}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-sky-400/30 hover:bg-white/[0.04] transition overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-sky-500/10 to-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/20 text-sky-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 text-xs font-mono text-emerald-300">
                  <Award className="w-3 h-3" />
                  {item.score}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-violet-300">{item.institution}</p>
              <p className="mt-1 text-xs font-mono text-zinc-500">
                {item.period}
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 text-[11px] uppercase tracking-wider text-zinc-600 font-mono">
                #{String(i + 1).padStart(2, '0')}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
