import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/placeholder";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Skeleton } from "@/components/ui/Skeleton";
import { IconButton } from "@/components/ui/IconButton";
import { DURATION } from "@/constants/animation";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || loading) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, loading, next]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section-padding bg-surface/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by industry leaders"
          subtitle="Hear what our clients say about partnering with us."
        />

        {loading ? (
          <div className="mx-auto max-w-3xl space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton variant="text" className="mx-auto h-4 w-1/3" />
          </div>
        ) : (
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: DURATION.normal }}
                className="glass-panel rounded-[2.5rem] border border-border/60 bg-surface/95 p-10 shadow-xl"
              >
                <Quote className="mb-4 h-10 w-10 text-primary/40" aria-hidden />
                <p className="text-xl leading-8 text-foreground md:text-2xl">
                  &ldquo;{current.content}&rdquo;
                </p>
                <footer className="mt-10">
                  <cite className="not-italic">
                    <p className="font-display text-lg font-semibold text-foreground">
                      {current.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {current.role}, {current.company}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <IconButton
                icon={ChevronLeft}
                label="Previous testimonial"
                onClick={prev}
              />
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-pill transition-all ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <IconButton
                icon={ChevronRight}
                label="Next testimonial"
                onClick={next}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
