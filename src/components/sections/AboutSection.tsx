import { motion } from "framer-motion";
import { aboutFeatures, aboutStats } from "@/data/placeholder";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { FRAMER_VARIANTS } from "@/constants/animation";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <ScrollReveal>
            <SectionHeader
              eyebrow="About us"
              title="Engineering excellence with premium delivery"
              subtitle="We partner with ambitious enterprises to design, build, and launch digital products that feel polished and perform flawlessly."
              align="left"
              className="mb-0"
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Our team blends deep technical craftsmanship with strategic
              product thinking. From discovery workshops to launch-ready
              systems, every solution is engineered for growth, reliability, and
              exceptional user experience.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-3xl border border-border/60 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:bg-surface/80"
                  >
                    <motion.div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FRAMER_VARIANTS.staggerContainer}
          >
            {aboutStats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={FRAMER_VARIANTS.fadeUp}
                className="glass-panel rounded-[2rem] p-8 text-center"
              >
                <p className="font-display text-4xl font-bold text-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
