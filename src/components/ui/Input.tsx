import { forwardRef } from 'react'
import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { useTheme as useMuiTheme } from '@mui/material/styles'
import { useAppStore } from '@/store/useAppStore'

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  label: string
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ label, ...props }, ref) => {
    const muiTheme = useMuiTheme()
    const resolvedTheme = useAppStore((s) => s.resolvedTheme)

    return (
      <TextField
        ref={ref}
        label={label}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor:
              resolvedTheme === 'dark'
                ? 'rgba(17, 24, 39, 0.6)'
                : 'rgba(255, 255, 255, 0.8)',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: muiTheme.palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: muiTheme.palette.primary.main,
              borderWidth: 2,
            },
          },
        }}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
