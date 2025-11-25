import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
  ],
  app: {
    head: {
      title: 'KMWE', // default fallback title
      htmlAttrs: {
        lang: 'de',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})



