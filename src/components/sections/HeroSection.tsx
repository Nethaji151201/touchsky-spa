import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { heroContent } from '@/data/placeholder'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FloatingOrbs } from '@/components/common/FloatingOrbs'
import { FRAMER_VARIANTS, DURATION } from '@/constants/animation'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" aria-hidden />

      <Container className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate="visible"
          variants={FRAMER_VARIANTS.staggerContainer}
          className="mx-auto max-w-4xl"
        >
          <motion.span
            variants={FRAMER_VARIANTS.fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-pill border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            variants={FRAMER_VARIANTS.fadeUp}
            className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {heroContent.title}{' '}
            <span className="gradient-text">{heroContent.highlight}</span>
          </motion.h1>

          <motion.p
            variants={FRAMER_VARIANTS.fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            variants={FRAMER_VARIANTS.fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href={heroContent.primaryCta.href}>
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                {heroContent.primaryCta.label}
              </Button>
            </a>
            <a href={heroContent.secondaryCta.href}>
              <Button variant="outline" size="lg">
                {heroContent.secondaryCta.label}
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={FRAMER_VARIANTS.fadeUp}
            transition={{ delay: DURATION.slow }}
            className="mx-auto mt-16 max-w-3xl"
          >
            <div className="glass-panel overflow-hidden rounded-3xl p-2 shadow-glow-lg">
              <motion.div
                className="aspect-video rounded-2xl bg-gradient-primary opacity-90"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex h-full items-center justify-center">
                  <p className="font-display text-lg font-semibold text-white/90 md:text-2xl">
                    Enterprise Dashboard Preview
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
