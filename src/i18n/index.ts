import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUs from './en-us';
import es from './es';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en-US',
    detection: { caches: [] },
    interpolation: { escapeValue: false },
    resources: { 'en-US': { translation: enUs }, es: { translation: es } },
  });

export default i18next;
