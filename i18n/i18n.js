import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '../i18n/en/resource';
import translationPT from '../i18n/pt/resource';
import translationES from '../i18n/es/resource';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        initImmediate: false,
        preload: ["pt", "en", "es"],
        lng: "pt",
        resources: {
            pt: {
                translation: translationPT
            },
            en: {
                translation: translationEN
            },
            es: {
                translation: translationES
            }
        },

        ns: ['translation'],
        defaultNS: 'translation',

        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        },
    });

export default i18n;
