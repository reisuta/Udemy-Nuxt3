import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
//   components: [
//     {
//       path: '~/components',
//       pathPrefix: false,
//     },
//
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    // サーバーサイドでのみ取得可能
    apiSecret: '1234567890',
    // クライアントサイドでも取得可能
    public: {
      apiBase: '/api/todo',
      myEnvVariable: 'runtimeの設定'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    "@/assets/css/base.css"
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
