import { Code2, Rocket, Users, Sparkles } from 'lucide-react'
import Section from './Section'
import skills from '../data/skills.json'

const traits = [
  {
    icon: Code2,
    title: 'Full-stack mindset',
    text: 'Comfortable across UI, APIs, and data — I design features end-to-end instead of throwing tickets over the wall.',
  },
  {
    icon: Rocket,
    title: 'Ship-first attitude',
    text: 'I optimize for shipping working software fast — clean enough to maintain, simple enough to evolve.',
  },
  {
    icon: Users,
    title: 'Team-lead experience',
    text: 'Currently leading a small full-stack team — code reviews, architecture calls, and unblocking teammates.',
  },
  {
    icon: Sparkles,
    title: 'Modern stack',
    text: 'React 18 + TypeScript on the frontend, NestJS micro-services on the backend, deployed on AWS / Azure / GCP.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A developer who likes <span className="text-gradient">shipping</span>
          <br className="hidden sm:block" /> things that just work.
        </>
      }
      subtitle="I'm a full-stack developer with 3.5+ years of experience building production web apps across startups and international clients. Today I lead full-stack delivery at Patternlab.AI."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <div
            key={t.title}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-violet-400/30 hover:bg-white/[0.04] transition"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-sky-500/0 opacity-0 group-hover:opacity-100 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-sky-500/10 transition" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/20 text-violet-300">
                <t.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
        <h3 className="font-display text-base font-semibold text-white">
          Personal strengths
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Soft skills that round out the technical side.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.personal.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-violet-400/30 hover:bg-violet-500/10 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
