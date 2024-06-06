import general from "./locales/general.ts";
import german from "./locales/de-DE.ts";
import english from "./locales/en-US.ts";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    de: {
      ...general,
      ...german,
    },
    en: {
      ...general,
      ...english,
    },
  },
}));
