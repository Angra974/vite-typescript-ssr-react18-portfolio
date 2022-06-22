"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageContainer = ({ as: Tag = "div", tagProps, props }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Tag, { ...tagProps, children: (0, jsx_runtime_1.jsx)("img", { ...props }) }) }));
};
exports.default = ImageContainer;
//# sourceMappingURL=ImageContainer.js.map