"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const { URL } = process.env;
console.log(URL + "/public/locales/{{lng}}/{{ns}}.json");
i18next_1.default
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(i18next_http_backend_1.default)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18next_browser_languagedetector_1.default)
    // pass the i18n instance to react-i18next.
    .use(react_i18next_1.initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
        loadPath: URL + "/public/locales/{{lng}}/{{ns}}.json"
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.js.map