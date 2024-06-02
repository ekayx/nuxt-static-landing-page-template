const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./locales/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailgrids/plugin"),
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
