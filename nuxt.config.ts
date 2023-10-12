// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  devtools: { enabled: true },
  css: [
    '@/node_modules/normalize.css/normalize.css',
    '@/components/assets/base.scss'
  ],
  dir: {
    pages: "pages"
  },
})
