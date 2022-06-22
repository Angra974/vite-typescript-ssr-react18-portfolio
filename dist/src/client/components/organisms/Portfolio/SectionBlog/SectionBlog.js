"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
require("./styles.scss");
const portfolioBlog_1 = __importDefault(require("../../../../data/portfolioBlog"));
const MainTitle_1 = __importDefault(require("@components/molecules/MainTitle"));
const SectionBlog = ({ isActive = false }) => {
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.blog" });
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsx)("section", { className: "blog portfolio-hide  " + (isActive ? "active" : ""), id: "blog", children: (0, jsx_runtime_1.jsxs)("div", { className: "blogs-content", children: [(0, jsx_runtime_1.jsx)(MainTitle_1.default, { title: [t("title.0"), t("title.1")], subTitle: t("subtitle") }), (0, jsx_runtime_1.jsx)("div", { className: "blogs", children: portfolioBlog_1.default.BlogItems.map((blog, index) => {
                        return ((0, jsx_runtime_1.jsxs)("div", { className: "blog", children: [(0, jsx_runtime_1.jsx)("img", { src: blog.imgSrc, alt: blog.alt === "" ? blog.title : blog.alt }), (0, jsx_runtime_1.jsxs)("div", { className: "blog-text", children: [(0, jsx_runtime_1.jsx)("h4", { children: blog.title }), (0, jsx_runtime_1.jsx)("p", { children: blog.details })] })] }, `${id}${index}`));
                    }) })] }) }));
};
exports.default = SectionBlog;
//# sourceMappingURL=SectionBlog.js.map