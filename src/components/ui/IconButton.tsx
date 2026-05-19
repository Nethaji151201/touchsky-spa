import { forwardRef, type ButtonHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'
import { getAriaLabel } from '@/utils/a11y'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon
  label?: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={getAriaLabel(label, 'Icon button')}
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          className,
        )}
        {...props}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
