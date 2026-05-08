// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  css: [
    "~/assets/css/light.scss",  // 全局样式放这里！
    "~/assets/css/layout.scss",
  ],
})
