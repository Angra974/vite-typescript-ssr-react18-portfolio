"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageContainer_1 = __importDefault(require("@components/molecules/ImageContainer"));
const Component_1 = __importDefault(require("@components/atoms/Component"));
const ButtonDownload_1 = __importDefault(require("@components/molecules/ButtonDownload"));
const react_i18next_1 = require("react-i18next");
const fa_1 = require("react-icons/fa");
require("./styles.scss");
/** @hidden
 *  @params {boolean} isActive Show/hide element on page laad
 *F
 */
const SectionHome = ({ isActive = false }) => {
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.home" });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("section", { className: "header portfolio-hide" + (isActive ? " active" : ""), id: "home", children: (0, jsx_runtime_1.jsxs)("div", { className: "header-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "left-header", children: [(0, jsx_runtime_1.jsx)(Component_1.default, { as: "div", props: { className: "h-shape" } }), (0, jsx_runtime_1.jsx)(ImageContainer_1.default, { tagProps: { className: "image" }, props: { src: "assets/img/hero.png", alt: "" } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "right-header", children: [(0, jsx_runtime_1.jsxs)(Component_1.default, { as: "h1", props: { className: "name" }, children: [t("hi"), (0, jsx_runtime_1.jsxs)("span", { children: [" ", t("name"), " "] }), t("role")] }), (0, jsx_runtime_1.jsx)(Component_1.default, { as: "p", children: t("description") }), (0, jsx_runtime_1.jsx)(ButtonDownload_1.default, { text: 'downloadcv', icon: (0, jsx_runtime_1.jsx)(fa_1.FaDownload, {}) })] })] }) }) }));
};
exports.default = SectionHome;
//# sourceMappingURL=SectionHome.js.map