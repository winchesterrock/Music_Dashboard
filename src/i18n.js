// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('./locales/en/translation.json')
      },
      es: {
        translation: require('./locales/es/translation.json')
      },
      fr: {
        translation: require('./locales/fr/translation.json')
      }
      // Add more languages here
    }
  });

export default i18n;
