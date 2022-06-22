"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressBar_1 = __importDefault(require("@components/molecules/Portfolio/ProgressBar"));
require("./styles.scss");
const ProgressBars = ({ data }) => {
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "progress-bars", children: data.map((item, index) => {
                return ((0, jsx_runtime_1.jsx)(ProgressBar_1.default, { icon: item.icon, title: item.title, text: item.text, classname: item.classname }, `${id}${index}`));
            }) }) }));
};
exports.default = ProgressBars;
//# sourceMappingURL=ProgressBars.js.map