import { Helmet } from 'react-helmet-async'
import { APP_CONFIG } from '@/constants/appConfig'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
}

export function SEOHead({
  title,
  description = APP_CONFIG.description,
  path = '/',
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${APP_CONFIG.name}` : APP_CONFIG.name

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {typeof window !== 'undefined' && (
        <link rel="canonical" href={`${window.location.origin}${path}`} />
      )}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: APP_CONFIG.name,
          description,
        })}
      </script>
    </Helmet>
  )
}
