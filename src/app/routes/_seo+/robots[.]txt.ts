import { generateRobotsTxt } from '@nasa-gcn/remix-seo'
import { LoaderFunctionArgs } from '@remix-run/node'
import { getSiteUrl } from '@/lib/utils'

export function loader({ request }: LoaderFunctionArgs) {
  return generateRobotsTxt([
    { type: 'sitemap', value: `${getSiteUrl(request)}/sitemap.xml` },
  ])
}
