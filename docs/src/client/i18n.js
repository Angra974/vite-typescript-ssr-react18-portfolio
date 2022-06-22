"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const common_json_1 = __importDefault(require("./translations/fr/common.json"));
const common_json_2 = __importDefault(require("./translations/en/common.json"));
i18next_1.default
    // pass the i18n instance to react-i18next.
    .use(react_i18next_1.initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
    fallbackLng: "en",
    //    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            common: common_json_2.default // 'common' is our custom namespace
        },
        de: {
            common: common_json_1.default
        },
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.js.map