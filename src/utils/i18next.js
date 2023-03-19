import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import ua from '../locales/ua/translation.json';
import en from '../locales/en/translation.json';
import ru from '../locales/ru/translation.json';

const resources = {
  ua: { translation: ua },
  en: { translation: en },
  ru: { translation: ru },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ua',
    supportedLngs: ['ua', 'en', 'ru'],
    debug: false,
    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });
