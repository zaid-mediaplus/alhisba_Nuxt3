// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  // target: 'static',

  // app: {
  //   baseURL: "/dev/alhisba",
  // },
  head: {
    title: "alhisba",
    htmlAttrs: {
      lang: "ar",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "te  lephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/sass/global.scss",
    "@/static/sass/_mixins.scss",
    "@/static/sass/variables.scss",
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  // styleResources: {
  //     scss: ['./assets/scss/*.scss']
  // },
  // Auto import components: https://go.nuxtjs.dev/config-components

  // build: {
  //   rollupOptions: {
  //     // https://rollupjs.org/guide/en/#big-list-of-options
  //   }
  // },
  components: true,
});
