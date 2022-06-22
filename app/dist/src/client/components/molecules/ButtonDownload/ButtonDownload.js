"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
require("./styles.scss");
const ButtonDownload = ({ text = "", icon = (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }) => {
    const { t } = (0, react_i18next_1.useTranslation)("common");
    return ((0, jsx_runtime_1.jsx)("div", { className: "btn-con", children: (0, jsx_runtime_1.jsxs)("button", { className: "main-btn", children: [(0, jsx_runtime_1.jsx)("span", { className: "btn-text", children: t(text) }), (0, jsx_runtime_1.jsx)("span", { className: "btn-icon", children: icon })] }) }));
};
exports.default = ButtonDownload;
//# sourceMappingURL=ButtonDownload.js.map