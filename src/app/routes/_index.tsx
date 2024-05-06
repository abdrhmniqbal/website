import type { MetaFunction } from '@remix-run/node'
import { getEnvValue } from '@/lib/utils'

export const meta: MetaFunction = () => {
  return [
    { title: getEnvValue('VITE_APP_NAME') },
    {
      name: 'description',
      content: `Welcome to ${getEnvValue('VITE_APP_NAME')}!`,
    },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-foreground">
      <h1 className="text-3xl font-bold text-background">shadcn works!</h1>
    </div>
  )
}
