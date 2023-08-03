// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

// @ts-expect-error qiniu oss has no ts support
import vitePluginQiniuOss from 'vite-plugin-qiniu-oss'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['tdesign-vue-next/es/nuxt', '@unocss/nuxt', '@nuxt/content', '@vueuse/nuxt'],
  app: {
    cdnURL: `${process.env.bucketDomain}/nuistshare-assets/`,
  },
  build: {
    // extractCSS: true,
    transpile: ['tdesign-vue-next'],
  },
  vue: {
    defineModel: true,
  },
  vite: {
    plugins: [vitePluginQiniuOss(process.env.NODE_ENV === 'production')],
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
})
