"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
const ProgressBar = ({ icon, title = "", text = "", classname = "" }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "progress-bar", children: [(0, jsx_runtime_1.jsxs)("p", { className: "prog-title", children: [title, " ", icon] }), (0, jsx_runtime_1.jsxs)("div", { className: "progress-con", children: [(0, jsx_runtime_1.jsx)("p", { className: "prog-text", children: text }), (0, jsx_runtime_1.jsx)("div", { className: "progress", children: (0, jsx_runtime_1.jsx)("span", { className: classname }) })] })] }) }));
};
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map