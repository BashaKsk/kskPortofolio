import {
  Layout,
  Server,
  Cloud,
  Database,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import Section from './Section'
import skillsData from '../data/skills.json'

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Cloud,
  Database,
  Sparkles,
  Wrench,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The tools I reach <span className="text-gradient">for</span>.
        </>
      }
      subtitle="A pragmatic toolbox built around React, TypeScript, Node and the major cloud providers — the stack I use every day to ship product."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Sparkles
          return (
            <div
              key={cat.id}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-white/10 transition overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 blur-3xl group-hover:opacity-20 transition`}
              />
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {cat.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-200">{item.name}</span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {item.level}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cat.accent}`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
