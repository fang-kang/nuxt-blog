export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '欢迎访问我的主页 - 凌烟FK博客',
    titleTemplate: '%s - 凌烟FK博客',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '凌烟FK的个人博客，凌烟FK的生活记录，凌烟FK的前端学习'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '凌烟FK，vue，nuxt，blog，首页，JavaScript，js，css，html，web前端，前端开发，个人博客'
      },
      {
        hid: 'author',
        name: 'author',
        content: '凌烟FK'
      },
      {
        hid: 'renderer',
        name: 'renderer',
        content: 'webkit|ie-comp|ie-stand'
      },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, ],
  },
  loading: {
    color: '#5183ff'
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/style.scss',
    '@/assets/css/preview.scss',
    '@/assets/css/monokai.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svg',
    '@/assets/icons/index',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: {
      allChunks: true
    },
  }
}
