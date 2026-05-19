import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ProductItem {
  id: string
  title: string
  description: string
  tag: string
  image?: string
}

export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  highlight: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}
