export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'quwi',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/fonts/fonts.css',
    '@/assets/scss/main.scss'
  ],

  loading: {color: 'red'},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: 'https://api.quwi.com/v2'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'token'},
          user: {url: '/auth/init', method: 'get', propertyName: false},
          logout: {url: '/auth/logout', method: 'post', propertyName: 'token'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      home: false
    },
    watchLoggedIn: true,
    token: {
      prefix: 'token.'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
