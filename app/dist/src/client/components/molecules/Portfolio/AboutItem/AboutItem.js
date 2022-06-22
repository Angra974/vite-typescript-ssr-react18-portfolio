"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./styles.scss");
const AboutItem = ({ largeText, smallText }) => {
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "about-item", children: (0, jsx_runtime_1.jsxs)("div", { className: "abt-text", children: [(0, jsx_runtime_1.jsx)("p", { className: "large-text", children: largeText }), (0, jsx_runtime_1.jsxs)("p", { className: "small-text", children: [smallText[0], (0, jsx_runtime_1.jsx)("br", {}), smallText[1]] })] }) }, id));
};
exports.default = AboutItem;
//# sourceMappingURL=AboutItem.js.map