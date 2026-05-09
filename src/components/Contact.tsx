import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Section from './Section'
import personal from '../data/personal.json'

export default function Contact() {
  const contactRows = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
    },
  ]

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">together</span>.
        </>
      }
      subtitle="Open to full-time roles, freelance work, and interesting collaborations. Drop a message — I usually respond within a day."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-white/[0.02]">
          <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
            Get in touch
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            The fastest way to reach me is email. I'm also active on LinkedIn.
          </p>

          <ul className="mt-6 space-y-3">
            {contactRows.map((row) => {
              const Icon = row.icon
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 hover:border-violet-300 hover:bg-white dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-violet-400/30 dark:hover:bg-white/[0.04] transition">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 border border-violet-200 text-violet-600 dark:from-violet-500/20 dark:to-fuchsia-500/20 dark:border-violet-400/20 dark:text-violet-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-zinc-500">
                      {row.label}
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-zinc-100 truncate">
                      {row.value}
                    </div>
                  </div>
                </div>
              )
              return (
                <li key={row.label}>
                  {row.href ? <a href={row.href}>{inner}</a> : inner}
                </li>
              )
            })}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 transition"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-sky-600 opacity-95" />
          <div
            aria-hidden
            className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"
          />
          <div className="relative p-6 sm:p-8 flex flex-col h-full min-h-[280px]">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to start a project?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
              Whether you have a fully-defined spec or just a rough idea, I can
              help you take it from zero to shipped. Let's chat.
            </p>
            <div className="mt-auto pt-6">
              <a
                href={`mailto:${personal.email}?subject=Let's%20build%20something`}
                className="group inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-5 py-3 text-sm font-semibold shadow-xl hover:-translate-y-0.5 transition"
              >
                Email me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
