"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ tagProps, props, children }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", { ...tagProps, children: (0, jsx_runtime_1.jsx)("span", { ...props, children: children }) }) }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map