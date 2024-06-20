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

    '/': { prerender: false },
    '/api/project/**': { swr: false },
  }
})