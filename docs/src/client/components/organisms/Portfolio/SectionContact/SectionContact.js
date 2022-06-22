"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Component_1 = __importDefault(require("@components/atoms/Component"));
const Button_1 = __importDefault(require("@components/atoms/Button"));
const MainTitle_1 = __importDefault(require("@components/molecules/MainTitle"));
const portfolioContact_1 = __importDefault(require("../../../../data/portfolioContact"));
require("./styles.scss");
const IconContainer_1 = __importDefault(require("@components/molecules/IconContainer"));
const FloatingLabel_1 = __importDefault(require("@components/organisms/FloatingLabel"));
/**
 * Show contact section
 * @param isActive Show the section if true, hide if false. When true, all other sections are hidden
 */
const SectionContact = ({ isActive }) => {
    // take translation from public/${lang}/contact.json
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.contact" });
    const id = (0, react_1.useId)();
    const userEmail = portfolioContact_1.default.email;
    // data are in src/client/data
    const contactItems = portfolioContact_1.default.items.map((item, index) => {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "contact-item", children: [(0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "div", tagProps: { className: "icon" }, icon: item.icon, children: (0, jsx_runtime_1.jsx)("span", { children: item.label }) }), (0, jsx_runtime_1.jsx)("p", { children: item.text })] }, `${id}${index}}`));
    });
    const socialLinks = portfolioContact_1.default.socials.map((social, index) => {
        return ((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "a", tagProps: {
                href: social.href,
                className: "icon",
                target: social.target,
            }, icon: social.icon }, `${id}${index}}`));
    });
    return ((0, jsx_runtime_1.jsx)("section", { className: "contact portfolio-hide" + (isActive ? " active" : ""), id: "contact", children: (0, jsx_runtime_1.jsxs)("div", { className: "contact-container", children: [(0, jsx_runtime_1.jsx)(MainTitle_1.default, { title: [t("title.0"), t("title.1")], subTitle: t("subtitle") }), (0, jsx_runtime_1.jsxs)("div", { className: "contact-content-con", children: [(0, jsx_runtime_1.jsxs)("div", { className: "left-contact", children: [(0, jsx_runtime_1.jsx)(Component_1.default, { as: "h4", children: t("information") }), (0, jsx_runtime_1.jsx)(Component_1.default, { as: "p", children: t("description") }), (0, jsx_runtime_1.jsx)("div", { className: "contact-info", children: (0, jsx_runtime_1.jsx)("address", { children: contactItems }) }), (0, jsx_runtime_1.jsx)("div", { className: "contact-icons", children: (0, jsx_runtime_1.jsx)("div", { className: "contact-icon", children: socialLinks }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "right-contact", children: (0, jsx_runtime_1.jsxs)("form", { action: `mailto:${userEmail}`, method: "get", encType: "text/plain", children: [(0, jsx_runtime_1.jsx)(FloatingLabel_1.default, { type: "text", id: "name", classname: "input-control", label: t("label_name"), required: true }), (0, jsx_runtime_1.jsx)(FloatingLabel_1.default, { type: "email", id: "email", classname: "input-control", label: t("label_email"), required: true }), (0, jsx_runtime_1.jsx)(FloatingLabel_1.default, { type: "text", id: "subject", classname: "input-control", label: t("label_subject"), required: true }), (0, jsx_runtime_1.jsx)("div", { className: "input-control", children: (0, jsx_runtime_1.jsx)("textarea", { cols: 15, rows: 8, placeholder: t("text_placeholder"), defaultValue: "", name: "body", id: "body" }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { tagProps: { type: "submit", className: "btn large" }, children: t("submit") }), " "] }) })] })] }) }));
};
exports.default = SectionContact;
//# sourceMappingURL=SectionContact.js.map