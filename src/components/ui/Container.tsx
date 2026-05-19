import type { ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { SPACING } from '@/constants/spacing'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
}

export function Container({
  children,
  className,
  as: Component = 'div',
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn('mx-auto w-full', className)}
      style={{
        maxWidth: SPACING.containerMax,
        paddingLeft: SPACING.containerPadding,
        paddingRight: SPACING.containerPadding,
      }}
    >
      {children}
    </Component>
  )
}
