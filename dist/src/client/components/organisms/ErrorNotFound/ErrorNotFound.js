"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
require("./styles.scss");
const MainTitle_1 = __importDefault(require("@components/molecules/MainTitle"));
const ErrorNotFound = ({ isActive = false }) => {
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.error" });
    return ((0, jsx_runtime_1.jsxs)("section", { className: "error portfolio-hide" + (isActive ? " active" : ""), id: "error", children: [(0, jsx_runtime_1.jsx)(MainTitle_1.default, { title: [t("title.0"), t("title.1")], subTitle: t("subtitle") }), (0, jsx_runtime_1.jsx)("div", { className: "error-container", children: (0, jsx_runtime_1.jsx)("h2", { children: t("error_page") }) })] }));
};
exports.default = ErrorNotFound;
//# sourceMappingURL=ErrorNotFound.js.map