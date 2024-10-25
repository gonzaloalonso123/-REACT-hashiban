// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./english.json";
import nlTranslation from "./dutch.json";
import esTranslation from "./spanish.json";
let domain = window.location.hostname;

const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation },
  es: { translation: esTranslation },
};

const subdomains = domain.split(".");
const countrycode = subdomains[subdomains.length];

i18n.use(initReactI18next).init({
  resources,
  lng: countrycode,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

switch (countrycode) {
  case "nl":
    document.title = "De Veiling Van Hashiban";
    break;
  case "es":
    document.title = "La Subasta De Hashiban";
    break;
  default:
    document.title = "La Subasta de Hashiban";
    break;
}

export default i18n;