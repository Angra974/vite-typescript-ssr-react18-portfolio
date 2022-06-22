"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// ? Better use a svg file here
const logo_png_1 = __importDefault(require("@assets/logo/logo.png"));
const Logo = ({ alt = "" }) => {
    return (0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: alt });
};
exports.default = Logo;
//# sourceMappingURL=Logo.js.map