"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
/**
 * Used in form ( contact page currently)
 * @param param
 * @returns
 */
const FloatingLabel = ({ type, id, label, required = true, classname = "", labelClass = "" }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "floating-label-wrap", children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: `floating-label-input floating-label-field floating-label-field--s3 ${classname}`, id: id, name: id, placeholder: label, required: !!required }), (0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: `floating-label ${labelClass}`, children: label })] }) }));
};
exports.default = FloatingLabel;
//# sourceMappingURL=FloatingLabel.js.map