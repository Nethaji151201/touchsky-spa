import { createTheme, type Theme } from '@mui/material/styles'
import { COLORS } from '@/constants/colors'
import { FONT_FAMILY } from '@/constants/typography'
import { RADIUS } from '@/constants/radius'

export const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  const palette = COLORS[mode]

  return createTheme({
    palette: {
      mode,
      primary: {
        main: palette.primary,
        light: palette.secondary,
        dark: palette.primaryHover,
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: palette.secondary,
        contrastText: '#FFFFFF',
      },
      background: {
        default: palette.background,
        paper: palette.surface,
      },
      text: {
        primary: palette.textPrimary,
        secondary: palette.textSecondary,
      },
      error: { main: palette.error },
      success: { main: palette.success },
      divider: palette.border,
    },
    typography: {
      fontFamily: FONT_FAMILY.primary,
      h1: { fontFamily: FONT_FAMILY.display, fontWeight: 700 },
      h2: { fontFamily: FONT_FAMILY.display, fontWeight: 700 },
      h3: { fontFamily: FONT_FAMILY.display, fontWeight: 600 },
      h4: { fontFamily: FONT_FAMILY.display, fontWeight: 600 },
      h5: { fontFamily: FONT_FAMILY.display, fontWeight: 600 },
      h6: { fontFamily: FONT_FAMILY.display, fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
      borderRadius: parseFloat(RADIUS.lg) * 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: `${palette.border} transparent`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: RADIUS.lg,
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
        },
      },
      MuiTextField: {
        defaultProps: { variant: 'outlined', fullWidth: true },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: RADIUS.xl,
            '&:before': { display: 'none' },
            '&.Mui-expanded': { margin: 0 },
          },
        },
      },
    },
  })
}
