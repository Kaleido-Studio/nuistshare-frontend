// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['tdesign-vue-next/es/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],
  ssr: false,
  app: {
    head: {
      title: 'Nuistshare',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0,user-scalable:no',
        }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://nuistshare-cdn.dustella.net/fonts/Pingfang-Regular/result.css',
        }, {
          rel: 'stylesheet',
          href: 'https://nuistshare-cdn.dustella.net/fonts/Pingfang-Medium/result.css',
        }, {
          rel: 'stylesheet',
          href: 'https://nuistshare-cdn.dustella.net/fonts/Pingfang-Semibold/result.css',
        }, {
          rel: 'stylesheet',
          href: 'https://nuistshare-cdn.dustella.net/fonts/ysbth/result.css',
        },
      ],
    },
  },
  build: {
    // extractCSS: true,
    transpile: ['tdesign-vue-next'],
  },
  css: [
    'normalize.css/normalize.css',
  ],
  vue: {
    defineModel: true,
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
})
