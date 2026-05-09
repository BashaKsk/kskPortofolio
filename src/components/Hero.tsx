import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import personal from '../data/personal.json'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-violet-600/20 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 w-[24rem] h-[24rem] rounded-full bg-sky-500/15 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs sm:text-sm text-violet-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for select opportunities
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Hi, I'm{' '}
              <span className="text-gradient">{personal.shortName}</span>.
              <br />
              I build things for the&nbsp;web.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              {personal.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                {personal.location}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                {personal.email}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm sm:text-base font-medium text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition"
              >
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-3 text-sm sm:text-base font-medium text-zinc-100 hover:bg-white/10 hover:-translate-y-0.5 transition"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personal.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur p-3 sm:p-4 hover:border-violet-400/30 hover:bg-white/[0.04] transition"
                >
                  <dt className="text-xs sm:text-sm text-zinc-500">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Avatar / decorative card */}
          <div className="relative animate-fade-up [animation-delay:0.1s]">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 opacity-30 blur-2xl" />
              <div className="relative rounded-3xl glass p-6 sm:p-8 glow-ring">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 blur opacity-60" />
                    <div className="relative grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 text-white font-display font-bold text-2xl">
                      {personal.initials}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                      {personal.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{personal.title}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {personal.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    Now
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-400/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Leading Full Stack @ Patternlab.AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
