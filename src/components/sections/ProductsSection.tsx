import { motion } from "framer-motion";
import { products } from "@/data/placeholder";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FRAMER_VARIANTS } from "@/constants/animation";

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
          viewport={{ once: true, margin: "-60px" }}
          variants={FRAMER_VARIANTS.staggerContainer}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={FRAMER_VARIANTS.fadeUp}>
              <Card
                hover
                glass={false}
                className="h-full rounded-[2rem] border border-border/60 bg-surface/90 p-8 shadow-sm"
              >
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {product.tag}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  {product.description}
                </p>
                <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent p-4">
                  <div className="h-36 rounded-[1.5rem] bg-slate-950/90" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
