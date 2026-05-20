import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroContent } from "@/data/placeholder";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/common/FloatingOrbs";
import { FRAMER_VARIANTS } from "@/constants/animation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pt-24">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-mesh/80" aria-hidden />

      <Container className="relative z-10 min-h-[calc(100vh-6rem)] py-20">
        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          variants={FRAMER_VARIANTS.staggerContainer}
          className="grid items-center gap-16 "
        >
          <motion.div
            variants={FRAMER_VARIANTS.fadeUp}
            className="space-y-8 text-left"
          >
            <motion.span
              variants={FRAMER_VARIANTS.fadeUp}
              className="inline-flex items-center gap-2 rounded-pill border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {heroContent.eyebrow}
            </motion.span>

            <motion.h1
              variants={FRAMER_VARIANTS.fadeUp}
              className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {heroContent.title}{" "}
              <span className="gradient-text">{heroContent.highlight}</span>
            </motion.h1>

            <motion.p
              variants={FRAMER_VARIANTS.fadeUp}
              className="max-w-2xl text-lg leading-8 text-text-secondary md:text-xl"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              variants={FRAMER_VARIANTS.fadeUp}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a href={heroContent.primaryCta.href}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
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
              className="grid gap-4 sm:grid-cols-3"
            >
              {heroContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-border/50 bg-surface/90 p-5 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.32em] text-text-secondary">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* <motion.div variants={FRAMER_VARIANTS.fadeUp} className="relative">
            <div className="glass-panel overflow-hidden rounded-[2.5rem] border border-primary/10 bg-surface/90 shadow-glow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-950/95 p-8 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),transparent_30%)]" />
                <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur-lg">
                      <span className="font-medium">Dashboard pulse</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Live
                      </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                          Growth
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          +28%
                        </p>
                      </div>
                      <div className="rounded-3xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                          Retention
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          92%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                      Product adoption
                    </p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </section>
  );
}
