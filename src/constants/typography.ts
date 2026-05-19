export const FONT_FAMILY = {
  primary: "'Inter', system-ui, sans-serif",
  display: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
} as const

export const FONT_SIZE = {
  display: ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
  h1: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
  h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
  h3: ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
  h4: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
  h5: ['1.25rem', { lineHeight: '1.3' }],
  h6: ['1.125rem', { lineHeight: '1.35' }],
  body: ['1rem', { lineHeight: '1.6' }],
  bodySm: ['0.875rem', { lineHeight: '1.55' }],
  caption: ['0.75rem', { lineHeight: '1.5' }],
} as const

export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const
