import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { remixDevTools } from 'remix-development-tools'
import { flatRoutes } from 'remix-flat-routes'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({
      appDirectory: './src/app',
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes, { appDir: './src/app' })
      },
    }),
    tsconfigPaths(),
  ],
})
