import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackStart({
      prerender: {
        enabled: true,
        // Automatically discover static paths from the route tree
        autoStaticPathsDiscovery: true,
        // Extract links from the HTML and prerender them also
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
})

export default config
