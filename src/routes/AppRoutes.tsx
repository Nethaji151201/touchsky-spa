import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Skeleton } from '@/components/ui/Skeleton'
import { ROUTES } from '@/constants/routes'

const HomePage = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-8">
      <Skeleton className="h-64 w-full max-w-2xl" />
    </div>
  )
}

export function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            path={ROUTES.home}
            element={
              <Suspense fallback={<PageLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
