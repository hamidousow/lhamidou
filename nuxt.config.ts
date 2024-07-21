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
      title: "Hamidou, designer et développeur free-lance",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ],
      htmlAttrs: {
        lang: "fr",
      },
      meta: [

        { hid: 'description', name: 'description', content: "Découvrez le portfolio d'Hamidou, designer et développeur freelance. Spécialisé en conception de logos,  web design et développement de sites internet sur mesure. Transformez votre vision en réalité avec des solutions innovantes et sur mesure." }
      ]

    }
  } ,
  routeRules: {

    '/': { prerender: true },
    '/api/project/**': { swr: false },
  }
})