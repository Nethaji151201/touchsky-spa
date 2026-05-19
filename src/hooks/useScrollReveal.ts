import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { DURATION, FRAMER_VARIANTS } from '@/constants/animation'

export function useScrollReveal() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return {
    initial: prefersReducedMotion ? 'visible' : 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
    variants: FRAMER_VARIANTS.fadeUp,
    transition: { duration: DURATION.slow, ease: 'easeOut' as const },
  }
}
