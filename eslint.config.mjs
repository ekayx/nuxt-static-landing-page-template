import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Your custom config
    // allow self closing tags
    "vue/html-self-closing": "off",
  },
});
