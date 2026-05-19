export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME ?? 'TouchSky',
  tagline: 'Enterprise software solutions for the modern world',
  description:
    'Premium enterprise software development, web applications, and digital transformation services.',
  email: 'hello@touchsky.example',
  phone: '+1 (555) 000-0000',
  address: '123 Innovation Drive, Tech City',
  year: new Date().getFullYear(),
} as const

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' as const },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' as const },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' as const },
] as const

export const FEATURE_FLAGS = {
  enableMockApi: !import.meta.env.VITE_API_BASE_URL,
} as const
