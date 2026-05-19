import { useMemo, type ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createAppTheme } from '@/theme/muiTheme'
import { useAppStore } from '@/store/useAppStore'
import { useTheme } from '@/hooks/useTheme'

interface AppThemeProviderProps {
  children: ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  useTheme()
  const resolvedTheme = useAppStore((s) => s.resolvedTheme)
  const theme = useMemo(() => createAppTheme(resolvedTheme), [resolvedTheme])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  )
}
