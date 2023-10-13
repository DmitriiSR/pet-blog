// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
    tailwindcss: {
      viewer: true
    }
})
