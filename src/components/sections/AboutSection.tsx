import { motion } from 'framer-motion'
import { aboutFeatures, aboutStats } from '@/data/placeholder'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { FRAMER_VARIANTS } from '@/constants/animation'

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeader
              eyebrow="About us"
              title="Engineering excellence since day one"
              subtitle="We partner with forward-thinking enterprises to deliver software that drives measurable business outcomes."
              align="left"
              className="mb-0"
            />
            <p className="mt-6 text-text-secondary">
              Our team combines deep technical expertise with a passion for design
              and user experience. From discovery to deployment, we ensure every
              project meets the highest standards of quality and performance.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-3">
                    <motion.div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="mt-1 text-sm text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FRAMER_VARIANTS.staggerContainer}
          >
            {aboutStats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={FRAMER_VARIANTS.fadeUp}
                className="glass-panel rounded-2xl p-6 text-center"
              >
                <p className="font-display text-3xl font-bold gradient-text md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
