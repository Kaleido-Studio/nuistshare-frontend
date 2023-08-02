// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['tdesign-vue-next/es/nuxt', '@unocss/nuxt', '@nuxt/content', '@vueuse/nuxt'],
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'style',
          onload: 'this.onload=null;this.rel=\'stylesheet\'',
          href: 'https://testingcf.jsdelivr.net/npm/@chinese-fonts/syst@1.3.0/dist/SourceHanSerifCN/result.css',

        },
        {
          rel: 'preload',
          as: 'style',
          onload: 'this.onload=null;this.rel=\'stylesheet\'',
          href: 'https://testingcf.jsdelivr.net/npm/@chinese-fonts/ysbth@1.1.0/dist/优设标题黑/result.css',
        },
      ],
    },
  },
  build: {
    // extractCSS: true,
    transpile: ['tdesign-vue-next'],
  },
  vue: {
    defineModel: true,
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
})
