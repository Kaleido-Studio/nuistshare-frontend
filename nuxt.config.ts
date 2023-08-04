// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

// @ts-expect-error qiniu oss has no ts support
import vitePluginQiniuOss from 'vite-plugin-qiniu-oss'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['tdesign-vue-next/es/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],
  app: {
    cdnURL: `${process.env.bucketDomain}/nuistshare-assets/`,
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
          href: 'https://nuistshare-cdn.dustella.net/fonts/MiSans-Regular/result.css',
        }, {
          rel: 'stylesheet',
          href: 'https://nuistshare-cdn.dustella.net/fonts/MiSans-Medium/result.css',
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
  vue: {
    defineModel: true,
  },
  vite: {
    plugins: [vitePluginQiniuOss(process.env.publishToCDN === 'true')],
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
})
