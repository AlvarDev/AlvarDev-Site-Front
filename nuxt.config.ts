import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    '@/assets/css/material.blue_grey-indigo.min.css',
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US', // Replace with the actual widget URL
          async: true, // Mark the script as asynchronous to avoid blocking rendering
        },
      ],
    },
  },
})
