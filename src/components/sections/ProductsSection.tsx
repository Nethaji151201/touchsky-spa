import { motion } from 'framer-motion'
import { products } from '@/data/placeholder'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FRAMER_VARIANTS } from '@/constants/animation'

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-background">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Products that deliver impact"
          subtitle="Explore our suite of enterprise solutions designed for modern businesses."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={FRAMER_VARIANTS.staggerContainer}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={FRAMER_VARIANTS.fadeUp}>
              <Card hover glass className="h-full">
                <span className="inline-block rounded-pill bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {product.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {product.description}
                </p>
                <div className="mt-6 h-32 rounded-xl bg-gradient-primary/20" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
