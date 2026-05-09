import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  children: ReactNode
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/60 bg-violet-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-700 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
