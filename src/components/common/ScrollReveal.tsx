import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export function ScrollReveal({
  children,
  className,
  ...props
}: ScrollRevealProps) {
  const reveal = useScrollReveal()

  const { transition: _t, ...revealProps } = reveal

  return (
    <motion.div
      className={cn(className)}
      initial={revealProps.initial}
      whileInView={revealProps.whileInView}
      viewport={revealProps.viewport}
      variants={revealProps.variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
