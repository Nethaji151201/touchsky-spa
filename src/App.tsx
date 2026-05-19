import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppThemeProvider } from '@/components/providers/ThemeProvider'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { AppRoutes } from '@/routes/AppRoutes'

function App() {
  return (
    <HelmetProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </HelmetProvider>
  )
}

export default App
