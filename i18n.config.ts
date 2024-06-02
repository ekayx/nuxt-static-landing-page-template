import german from "./locales/de-DE.ts";
import english from "./locales/en-US.ts";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    de: german,
    en: english,
  },
}));
