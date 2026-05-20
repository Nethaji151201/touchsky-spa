import { Mail, MapPin, Phone } from "lucide-react";
import { APP_CONFIG } from "@/constants/appConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ContactForm } from "@/features/contact/ContactForm";

const contactInfo = [
  { icon: Mail, label: "Email", value: APP_CONFIG.email },
  { icon: Phone, label: "Phone", value: APP_CONFIG.phone },
  // { icon: MapPin, label: "Address", value: APP_CONFIG.address },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-surface/30">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Share your vision and we’ll help you transform it into a premium digital experience."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-3xl border border-border/60 bg-white/90 p-5 shadow-sm backdrop-blur-xl dark:bg-surface/80"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-secondary">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-6 mt-7">
              <div className="flex gap-4 rounded-3xl border border-border/60 bg-white/90 p-5 shadow-sm backdrop-blur-xl dark:bg-surface/80">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-2">
                    Address
                  </p>
                  {/* <p className="font-medium text-foreground">
                    {APP_CONFIG.address}
                  </p> */}
                  <p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1779255676072!5m2!1sen!2sin!6m8!1m7!1s5IZYIYJI250EhO1BwacHdw!2m2!1d11.6627930841474!2d78.15715561820724!3f55.565932507970146!4f-21.278589503784445!5f0.7820865974627469"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "350px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-panel rounded-[2.5rem] p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
