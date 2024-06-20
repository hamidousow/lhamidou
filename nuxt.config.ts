export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  spaLoadingTemplate: false,
  modules: [
    "@nuxt/eslint", 
    "@pinia/nuxt",
    "nuxt-primevue",
    
  ], 
  primevue: {
      /* Option */
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/stylesheets/main.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  } ,
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/api/project/**': { swr: false },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    //'/products/**': { swr: 3600 },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    //'/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    //'/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    //'/admin/**': { ssr: false },
    // Add cors headers on API routes
    //'/api/**': { cors: true },
    // Redirects legacy urls
    //'/old-page': { redirect: '/new-page' }
  }
})