import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const { theme, resolvedTheme, setTheme, setResolvedTheme } = useAppStore()

  useEffect(() => {
    const resolved = theme === 'system' ? getSystemTheme() : theme
    setResolvedTheme(resolved)

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => {
        const next = mq.matches ? 'dark' : 'light'
        setResolvedTheme(next)
        root.classList.remove('light', 'dark')
        root.classList.add(next)
      }
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [theme, setResolvedTheme])

  const toggleTheme = () => {
    const next = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(next)
  }

  return { theme, resolvedTheme, setTheme, toggleTheme }
}
