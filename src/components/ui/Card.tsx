import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { CardProps } from '@/types/components'

export function Card({
  children,
  className,
  glass = true,
  hover = true,
  header,
  footer,
}: CardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const content = (
    <motion.div
      className={cn(
        'rounded-2xl p-6 transition-shadow duration-300',
        glass && 'glass-panel',
        !glass && 'bg-surface border border-border shadow-md',
        hover && 'hover:shadow-card-hover',
        className,
      )}
      whileHover={
        hover && !prefersReducedMotion ? { y: -4, scale: 1.01 } : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {header && <motion.div className="mb-4">{header}</motion.div>}
      {children}
      {footer && <motion.div className="mt-4 pt-4 border-t border-border">{footer}</motion.div>}
    </motion.div>
  )

  return content
}
