import { motion } from 'framer-motion'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/data/placeholder'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/common/ScrollReveal'

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about working with us."
        />

        <ScrollReveal className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Accordion
                disableGutters
                elevation={0}
                className="glass-panel !rounded-2xl before:hidden"
              >
                <AccordionSummary
                  expandIcon={<ChevronDown className="h-5 w-5 text-primary" />}
                  aria-controls={`faq-${item.id}`}
                  id={`faq-header-${item.id}`}
                >
                  <span className="font-display font-semibold text-foreground pr-4">
                    {item.question}
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-text-secondary">{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  )
}
