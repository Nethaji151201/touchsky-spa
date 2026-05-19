import { Mail, MapPin, Phone } from 'lucide-react'
import { APP_CONFIG } from '@/constants/appConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { ContactForm } from '@/features/contact/ContactForm'

const contactInfo = [
  { icon: Mail, label: 'Email', value: APP_CONFIG.email },
  { icon: Phone, label: 'Phone', value: APP_CONFIG.phone },
  { icon: MapPin, label: 'Address', value: APP_CONFIG.address },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-surface/30">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-secondary">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
