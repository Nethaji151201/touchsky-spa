import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { SectionHeaderProps } from '@/types/components'

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const reveal = useScrollReveal()

  return (
    <motion.div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl text-left',
        className,
      )}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      variants={reveal.variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-pill bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  )
}
