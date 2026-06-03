// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // server-only — the Vimeo token never reaches the browser.
    // Provide via NUXT_VIMEO_TOKEN in .env (see .env.example).
    vimeoToken: process.env.NUXT_VIMEO_TOKEN || '',
    public: {
      // safe to expose
      workPageSize: 9
    }
  },

  routeRules: {
    // ISR for the archive — regenerated hourly. SEO-friendly, lightweight.
    '/work': { isr: 3600 },
    '/work/**': { isr: 3600 },
    // long-lived immutable static assets
    '/brands/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/work/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/bts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/videos/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
  },

  nitro: {
    storage: {
      // memory cache for the cached Vimeo event handler
      cache: { driver: 'memory' }
    }
  },

  app: {
    pageTransition: { name: 'film', mode: 'out-in' },
    layoutTransition: { name: 'film', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Moiz Zaidi — Film & Commercial Director',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0d' },
        {
          name: 'description',
          content:
            'Moiz Zaidi is a film & commercial director based in Karachi — a decade of cinematic stories for Hyundai, Toyota, Coca-Cola, Netflix and the brands in between.'
        },
        { property: 'og:title', content: 'Moiz Zaidi — Film & Commercial Director' },
        { property: 'og:description', content: 'Stories that move in frames. Directed in Karachi, shown the world over.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/profile/hero.jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  tailwindcss: {
    cssPath: false,
    configPath: '~/tailwind.config.ts'
  }
})
