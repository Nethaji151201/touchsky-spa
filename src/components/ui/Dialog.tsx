import MuiDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { X } from 'lucide-react'
import type { DialogProps } from '@/types/components'

const maxWidthMap = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const

export function Dialog({
  open,
  onClose,
  title,
  children,
  maxWidth = 'sm',
}: DialogProps) {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidthMap[maxWidth]}
      fullWidth
      aria-labelledby="dialog-title"
    >
      <DialogTitle
        id="dialog-title"
        className="flex items-center justify-between font-display"
      >
        {title}
        <IconButton
          onClick={onClose}
          aria-label="Close dialog"
          size="small"
        >
          <X className="h-5 w-5" />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  )
}
