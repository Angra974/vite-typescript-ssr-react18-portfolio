"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
const IconContainer_1 = __importDefault(require("@components/molecules/IconContainer"));
const fa_1 = require("react-icons/fa");
/**
 *
 * Switch between light and dark mode
 * @returns
 */
const ThemeSwitcher = ({}) => {
    // toggle dark and ligth theme
    const handleTheme = () => {
        document.body.classList.toggle("light-mode");
    };
    return ((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "div", tagProps: { className: "theme-btn", onClick: () => handleTheme() }, icon: (0, jsx_runtime_1.jsx)(fa_1.FaAdjust, {}) }));
};
exports.default = ThemeSwitcher;
//# sourceMappingURL=ThemeSwitcher.js.map