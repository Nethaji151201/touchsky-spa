import { motion } from 'framer-motion'
import { services } from '@/data/placeholder'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FRAMER_VARIANTS } from '@/constants/animation'

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Services built for scale"
          subtitle="End-to-end digital solutions tailored for enterprise growth and innovation."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={FRAMER_VARIANTS.staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={FRAMER_VARIANTS.fadeUp}>
                <Card hover glass>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
