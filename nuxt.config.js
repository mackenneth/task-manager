export default {
  head: {
    title: 'Менеджер задач',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Приложение Менеджер задач. Повышайте вашу продуктивность и эффективность.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [],

  components: true,

  env: {
    FAKE_API_URL: process.env.FAKE_API_URL
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@pinia/nuxt',
    '@nuxtjs/composition-api/module'
  ],

  modules: [
    '@pinia/nuxt'
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
