import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffer.dev',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
          en: 'en-US'
        }
      }
    })
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
})
