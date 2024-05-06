import { ErrorResponse } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Button } from '@/components/ui/button'

export default function ErrorBoundaryBlock({
  status,
  statusText,
}: ErrorResponse) {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex max-w-sm flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="select-none text-[140px] font-bold text-accent">
            {status}
          </h3>
          <span className="-mt-12 text-2xl font-bold text-foreground">
            {statusText}
          </span>
        </div>
        <span className="text-center text-muted-foreground">
          The page you&apos;ve requested can&apos;t be found. Why don&apos;t you
          browse around?
        </span>
        <Button asChild>
          <Link to="/">Take me back</Link>
        </Button>
      </div>
    </div>
  )
}
