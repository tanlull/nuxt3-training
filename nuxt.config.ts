// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/", // domain.com/mysystem => "/mysystem"
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap",
        },
      ],
      scripts: [],
      meta: [],
    },
  },

  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // 'bulma',
    // CSS file in the project
    "@/assets/css/global-css.css",
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  runtimeConfig: {
    apiKey: "", // NUXT_API_KEY (private) in .env file
    jwtSecret: "", // NUXT_JWT_SECRET (private)
    mysqlPassword: "", // NUXT_MYSQL_PASSWORD (private)
    public: {
      backendUrl: "https://api.codingthailand.com/api",
    },
  },
});
