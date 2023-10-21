// https://nuxt.com/docs/api/configuration/nuxt-config
const environment = {
  META_TITLE: "Development",
  META_DESCRIPTION: "",
  API_URL: "https://impact-circle.co.jp/wp/wp-json/custom/v0/",
  BASE_URL: "",
  BASE_CONTENT_URL: "",
}

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  runtimeConfig: {
    public: { ...environment },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  app: {
    head: {
      title: "JPMA",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { hid: "type", property: "type", content: "website" },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "title",
          property: "title",
          content: "",
        },
        {
          hid: "og-title",
          property: "og:title",
          content: "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [],
      noscript: [],
    },
  },
  modules: [],
  css: [
    // CSS file in the project
    "~/assets/scss/main.scss",
  ],
})
