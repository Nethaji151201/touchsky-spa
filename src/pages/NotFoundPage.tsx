import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { SEOHead } from '@/components/common/SEOHead'
import { PageLayout } from '@/components/layouts/PageLayout'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <PageLayout
        title="404 — Page not found"
        subtitle="The page you're looking for doesn't exist or has been moved."
      >
        <Link to={ROUTES.home}>
          <Button variant="primary" icon={Home}>
            Back to Home
          </Button>
        </Link>
      </PageLayout>
    </>
  )
}
