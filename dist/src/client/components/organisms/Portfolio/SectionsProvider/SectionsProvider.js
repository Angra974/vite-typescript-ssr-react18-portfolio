"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
const SectionHome_1 = __importDefault(require("@components/organisms/Portfolio/SectionHome"));
const PortfolioControls_1 = __importDefault(require("@components/organisms/Portfolio/PortfolioControls"));
const SectionAbout_1 = __importDefault(require("@components/organisms/Portfolio/SectionAbout"));
const SectionBlog_1 = __importDefault(require("@components/organisms/Portfolio/SectionBlog"));
const SectionContact_1 = __importDefault(require("@components/organisms/Portfolio/SectionContact"));
const SectionPorfolio_1 = __importDefault(require("@components/organisms/Portfolio/SectionPorfolio"));
const ErrorNotFound_1 = __importDefault(require("../../ErrorNotFound"));
/**
 *
 * @param {string} name of the section to show, hide the others
 * @returns void
 **/
const SectionsProvider = ({ active = "" }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SectionHome_1.default, { isActive: active === "home" }), (0, jsx_runtime_1.jsx)(SectionAbout_1.default, { isActive: active === "about" }), (0, jsx_runtime_1.jsx)(SectionPorfolio_1.default, { isActive: active === "portfolio" }), (0, jsx_runtime_1.jsx)(SectionBlog_1.default, { isActive: active === "blog" }), (0, jsx_runtime_1.jsx)(SectionContact_1.default, { isActive: active === "contact" }), (0, jsx_runtime_1.jsx)(ErrorNotFound_1.default, { isActive: active === "error" }), (0, jsx_runtime_1.jsx)(PortfolioControls_1.default, { active: active })] }));
};
exports.default = SectionsProvider;
//# sourceMappingURL=SectionsProvider.js.map