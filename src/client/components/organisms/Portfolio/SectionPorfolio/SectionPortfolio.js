"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IconContainer_1 = __importDefault(require("@components/molecules/IconContainer"));
const ImageContainer_1 = __importDefault(require("@components/molecules/ImageContainer"));
const MainTitle_1 = __importDefault(require("@components/molecules/MainTitle"));
const Component_1 = __importDefault(require("@components/atoms/Component"));
require("./styles.scss");
const fa_1 = require("react-icons/fa");
const portfolioProjects_1 = __importDefault(require("../../../../data/portfolioProjects"));
const react_i18next_1 = require("react-i18next");
/**
 *
 * @param {boolean} isActive Whether the state is true (active) => we show the portfolio section
 * and we hide the other sections of this state is false and this section is hidden
 * @returns
 */
const SectionPortfolio = ({ isActive = false }) => {
    const id = (0, react_1.useId)();
    // you can define a keyPrefix to be used for the resulting t function
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.portfolio" });
    const projects = portfolioProjects_1.default.projects.map((project, index) => {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "portfolio-item", children: [(0, jsx_runtime_1.jsx)(ImageContainer_1.default, { tagProps: { className: "image" }, props: { src: project.src, alt: project.alt } }), (0, jsx_runtime_1.jsxs)(Component_1.default, { as: "div", props: { className: "hover-items" }, children: [(0, jsx_runtime_1.jsx)(Component_1.default, { as: "h3", children: t("headerItem") }), (0, jsx_runtime_1.jsxs)(Component_1.default, { as: "div", props: { className: "icons" }, children: [project.githubHref && ((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "a", tagProps: { className: "icon", href: project.githubHref }, icon: (0, jsx_runtime_1.jsx)(fa_1.FaGithubAlt, {}) })), project.behanceHref && ((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "a", tagProps: { className: "icon", href: project.behanceHref }, icon: (0, jsx_runtime_1.jsx)(fa_1.FaBehance, {}) })), project.youtubeHref && ((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "a", tagProps: { className: "icon", href: project.youtubeHref }, icon: (0, jsx_runtime_1.jsx)(fa_1.FaYoutube, {}) }))] })] })] }, id + index));
    });
    return ((0, jsx_runtime_1.jsxs)("section", { className: "portfolio-hide portfolio" + (isActive ? " active" : ""), id: "portfolio", children: [(0, jsx_runtime_1.jsx)(MainTitle_1.default, { title: [t("title.0"), t("title.1")], subTitle: t("subtitle") }), (0, jsx_runtime_1.jsxs)("p", { className: "port-text", children: [" ", t("text")] }), (0, jsx_runtime_1.jsx)("div", { className: "portfolios", children: projects })] }));
};
exports.default = SectionPortfolio;
//# sourceMappingURL=SectionPortfolio.js.map