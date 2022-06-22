"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
// add current style to elemeent with Styled components
const S = __importStar(require("./styles"));
// add styles from css for covenience and more adaptibility
require("./styles.scss");
const Menu = () => {
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.menu" });
    console.log(t);
    // ? TODO: loop through the menu translation and create a menu based on the translation
    // ? Json file only, so we don't need to write code in this file when need to update the menu (add/remove links)
    return ((0, jsx_runtime_1.jsx)(S.Menu, { className: "main-nav", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/", "aria-label": t("home"), "data-nav": "home", className: ({ isActive }) => (isActive ? "is_active" : ""), children: t("home") }) }), (0, jsx_runtime_1.jsx)("li", { "data-nav": "about", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/about", "aria-label": t("about"), "data-nav": "about", className: ({ isActive }) => (isActive ? "is_active" : ""), children: t("about") }) }), (0, jsx_runtime_1.jsx)("li", { "data-nav": "portfolio", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/portfolio", "aria-label": t("portfolio"), "data-nav": "portfolio", className: ({ isActive }) => (isActive ? "is_active" : ""), children: t("portfolio") }) }), " ", (0, jsx_runtime_1.jsx)("li", { "data-nav": "blog", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/blog", "aria-label": t("blog"), "data-nav": "blog", className: ({ isActive }) => (isActive ? "is_active" : ""), children: t("blog") }) }), " ", (0, jsx_runtime_1.jsx)("li", { "data-nav": "contact", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/contact", "aria-label": t("contact"), "data-nav": "contact", className: ({ isActive }) => (isActive ? "is_active" : ""), children: t("contact") }) }), " "] }) }));
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map