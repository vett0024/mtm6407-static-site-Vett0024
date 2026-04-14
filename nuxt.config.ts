export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  css: ['~/assets/css/style.css'],
  app: {
    baseURL: '/mtm6407-static-site-vett0024/',
    head: {
      title: 'Gazel V.R — UX Designer & Front-End Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap'
        }
      ]
    }
  }
})