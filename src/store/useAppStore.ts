import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark' | 'system'

export interface ToastState {
  message: string
  type: 'success' | 'error' | 'info'
}

interface AppState {
  theme: ThemeMode
  resolvedTheme: 'light' | 'dark'
  isMobileMenuOpen: boolean
  toast: ToastState | null
  setTheme: (theme: ThemeMode) => void
  setResolvedTheme: (theme: 'light' | 'dark') => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  showToast: (toast: ToastState) => void
  clearToast: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      resolvedTheme: 'light',
      isMobileMenuOpen: false,
      toast: null,
      setTheme: (theme) => set({ theme }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
      toggleMobileMenu: () =>
        set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
      showToast: (toast) => set({ toast }),
      clearToast: () => set({ toast: null }),
    }),
    {
      name: 'touchsky-app',
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
)
