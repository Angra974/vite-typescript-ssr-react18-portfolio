"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Component_1 = __importDefault(require("@components/atoms/Component"));
require("./styles.scss");
const MainTitle = ({ title = ["", ""], classname = "main-title", subTitle = "", subClass = "bg-text", subTag = "span", }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("h2", { className: classname, children: [title[0], " ", (0, jsx_runtime_1.jsx)("span", { children: title[1] }), (0, jsx_runtime_1.jsx)(Component_1.default, { as: subTag, props: { className: subClass }, children: subTitle })] }) }));
};
exports.default = MainTitle;
//# sourceMappingURL=MainTitle.js.map