// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    components: {
      prefix: "Prime",
      include: ["Button"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "primevue/resources/themes/lara-dark-purple/theme.css",
    "~/assets/css/main.css",
  ],
  devtools: { enabled: true },
});
