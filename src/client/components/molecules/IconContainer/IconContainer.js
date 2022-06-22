"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
const IconContainer = ({ as: Tag = "div", tagProps, icon, children }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Tag, { ...tagProps, children: [icon, children] }) }));
};
exports.default = IconContainer;
//# sourceMappingURL=IconContainer.js.map