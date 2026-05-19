import { SEOHead } from '@/components/common/SEOHead'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { APP_CONFIG } from '@/constants/appConfig'

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={APP_CONFIG.name}
        description={APP_CONFIG.description}
        path="/"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
