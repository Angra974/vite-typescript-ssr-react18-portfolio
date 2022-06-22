"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const IconContainer_1 = __importDefault(require("@components/molecules/IconContainer"));
const ThemeSwitcher_1 = __importDefault(require("@components/molecules/Portfolio/ThemeSwitcher"));
require("./styles.scss");
/**
 * @params {string} active : actual active pages
 * @default { string } home : default page
 */
const PortfolioControls = ({ active = "home" }) => {
    const uid = (0, react_1.useId)();
    /**
     *
     * @param el target of the event
     * Switch between active state for control button and active the associate page
     */
    const handleClick = (el) => {
        const activeBtn = document.querySelector(".active-btn");
        const target = el.currentTarget;
        // if the button clicked is not the current button
        if (activeBtn && !target.classList.contains("active-btn")) {
            // remove active class to selected element
            activeBtn.classList.remove("active-btn");
            // add active class to current element
            target.classList.add("active-btn");
        }
        // remove active to last active element and add display none
        const activeEl = document.querySelector(".active");
        if (activeEl) {
            activeEl.classList.remove("active");
            activeEl.style.display = "none";
        }
        if (target.dataset.id) {
            // Remove active link on menu.
            document.querySelectorAll("a[data-nav]").forEach(el => el.classList.remove("is_active"));
            // add active menu on the selected element
            const menuLink = document.querySelector(`a[data-nav="${target.dataset.id}"]`);
            menuLink && menuLink.classList.add("is_active");
            // put current element to active
            const currentEl = document.getElementById(target.dataset.id);
            if (currentEl) {
                currentEl.classList.add("active");
                currentEl.style.display = "block";
            }
        }
    };
    const menuItems = {
        Home: (0, jsx_runtime_1.jsx)(fa_1.FaHome, {}),
        About: (0, jsx_runtime_1.jsx)(fa_1.FaUser, {}),
        Portfolio: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
        Blog: (0, jsx_runtime_1.jsx)(fa_1.FaNewspaper, {}),
        Contact: (0, jsx_runtime_1.jsx)(fa_1.FaEnvelopeOpen, {}),
    };
    /**
     * loop through all menu entries and create the control menu
     */
    const controlsMenu = [];
    Object.entries(menuItems).forEach(([id, icon]) => {
        const name = id.toLowerCase();
        controlsMenu.push((0, jsx_runtime_1.jsx)(IconContainer_1.default, { as: "div", tagProps: {
                className: "control primary" + `${active === name ? " active-btn" : ""}`,
                "data-id": `${name}`,
                onClick: (el) => handleClick(el),
            }, icon: icon }, `${id}${uid}}`));
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "controls", children: controlsMenu }), (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {})] }));
};
exports.default = PortfolioControls;
//# sourceMappingURL=PortfolioControls.js.map