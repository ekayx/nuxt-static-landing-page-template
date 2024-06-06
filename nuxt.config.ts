import websiteHead from "./websiteHead";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      ...websiteHead,
    },
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
