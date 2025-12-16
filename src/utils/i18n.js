import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../data/locales/en/translation.json";
import az from "../data/locales/az/translation.json";
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
