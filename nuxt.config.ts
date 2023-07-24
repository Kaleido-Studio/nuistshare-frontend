// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["tdesign-vue-next/es/nuxt", "@unocss/nuxt", "@nuxt/content"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@chinese-fonts/syst@1.3.0/dist/SourceHanSerifCN/result.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@chinese-fonts/ysbth@1.1.0/dist/优设标题黑/result.css",
        },
      ],
    },
  },
  build: {
    // extractCSS: true,
    transpile: ["tdesign-vue-next"],
  },
});
