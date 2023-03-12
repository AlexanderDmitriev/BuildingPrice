import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ua from '../locales/ua/translation.json';
import en from '../locales/en/translation.json';
import ru from '../locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { 'en-US': en, 'ua-UA': ua, 'ru-RU': ru },
    fallbackLng: 'ua',
    supportedLngs: ['ua', 'ru', 'en'],
    debug: true,
    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
