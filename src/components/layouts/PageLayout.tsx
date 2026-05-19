import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <Container className="section-padding pt-28">
      <SectionHeader title={title} subtitle={subtitle} align="left" />
      {children}
    </Container>
  )
}
