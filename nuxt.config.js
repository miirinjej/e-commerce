import pkg from './package';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'normalize.css' },
    { src: '~/assets/scss/main.scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-mq.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [ 'nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faFacebookF',
            'faTwitter',
          ],
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: [
          ],
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faBars',
            'faSearch',
            'faShoppingBag',
            'faTimes',
          ],
        },
      ],
    }],
    'nuxt-webfontloader',
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: [
      '~/assets/scss/*/*.scss',
    ],
  },

  /*
  ** Web font loader
  */
  webfontloader: {
    google: {
      families: [
        'Josefin+Sans:600',
        'Arimo:400,700',
        'EB+Garamond:400i',
      ],
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};
