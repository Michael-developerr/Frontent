// shared/config/i18n/i18nForTests.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const i18nForTests = i18n.createInstance();

i18nForTests.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      translation: {}, // сюда можно положить тестовые ключи
    },
  },
});

export default i18nForTests;