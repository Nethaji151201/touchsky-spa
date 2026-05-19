import { motion } from "framer-motion";
import { services } from "@/data/placeholder";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FRAMER_VARIANTS } from "@/constants/animation";

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
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FRAMER_VARIANTS.staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={FRAMER_VARIANTS.fadeUp}>
                <Card
                  hover
                  glass={false}
                  className="h-full rounded-[2rem] border border-border/60 bg-surface/90 p-8 shadow-sm"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
