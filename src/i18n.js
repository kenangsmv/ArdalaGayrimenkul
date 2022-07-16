import { createI18n } from "vue-i18n";
import { getCookie, setCookie } from "../src/assets/js/cookie-functions.js";


function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

let language = getCookie("language");
if (language != "") {
  // set locale to language in Nav.vue
} else {
  // set default locale which is en
  language = "tr";
  if (language != "" && language != null) {
    setCookie("language", language, 365);
  }
}

export const i18n = createI18n({
  locale: language,
  fallbackLocale: language,
  messages: loadLocaleMessages(),
});
