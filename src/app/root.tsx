import '@/app/globals.css'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import ErrorBoundaryBlock from '@/components/blocks/error-boundary'
import { getEnvValue } from '@/lib/utils'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <title>
            Oops! {error.statusText} - {getEnvValue('VITE_APP_NAME')}
          </title>
        </head>
        <body>
          <ErrorBoundaryBlock
            data={error.data}
            status={error.status}
            statusText={error.statusText}
          />
        </body>
      </html>
    )
  }
}
