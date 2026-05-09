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
    title: 'Senior-level experience',
    text: 'Senior full-stack at Patternlab.AI — code reviews, architecture calls, and unblocking teammates.',
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
      subtitle="I'm a full-stack developer with 4+ years of experience building production web apps across startups and international clients. Today I work as a Senior Full Stack Developer at Patternlab.AI."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <div
            key={t.title}
            className="group relative rounded-2xl border border-zinc-200 bg-white p-6 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-violet-400/30 dark:hover:bg-white/[0.04] transition"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-sky-500/0 opacity-0 group-hover:opacity-100 group-hover:from-violet-500/5 group-hover:via-fuchsia-500/5 group-hover:to-sky-500/5 dark:group-hover:from-violet-500/10 dark:group-hover:via-fuchsia-500/10 dark:group-hover:to-sky-500/10 transition" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 border border-violet-200 text-violet-600 dark:from-violet-500/20 dark:to-fuchsia-500/20 dark:border-violet-400/20 dark:text-violet-300">
                <t.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-white/[0.02]">
        <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-white">
          Personal strengths
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Soft skills that round out the technical side.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.personal.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs sm:text-sm text-zinc-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-violet-400/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-200 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
