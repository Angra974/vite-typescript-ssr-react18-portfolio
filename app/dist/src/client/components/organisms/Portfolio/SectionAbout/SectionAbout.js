"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const react_i18next_1 = require("react-i18next");
const portfolioAbout_1 = require("../../../../data/portfolioAbout");
require("./styles.scss");
const MainTitle_1 = __importDefault(require("@components/molecules/MainTitle"));
const ProgressBars_1 = __importDefault(require("@components/organisms/Portfolio/ProgressBars"));
const Timeline_1 = __importDefault(require("@components/organisms/Portfolio/Timeline"));
const AboutItem_1 = __importDefault(require("@components/molecules/Portfolio/AboutItem"));
const ButtonDownload_1 = __importDefault(require("@components/molecules/ButtonDownload"));
const SectionAbout = ({ isActive = false }) => {
    const id = (0, react_1.useId)();
    const { t } = (0, react_i18next_1.useTranslation)("common", { keyPrefix: "portfolio.sections.about" });
    const AboutListItems = portfolioAbout_1.data.AboutItems.map((item, index) => {
        return (0, jsx_runtime_1.jsx)(AboutItem_1.default, { largeText: item.largeText, smallText: item.smallText }, id + index);
    });
    const timelineItems = [
        {
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
            year: "2010 - Present",
            title: ["Web Developer", "Vircosoft"],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
        },
        {
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
            year: "2016 - 2017",
            title: ["C++ Programmer", "- Slime Tech"],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
        },
        {
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
            year: "2009 - 2013",
            title: ["Business Degree", "- Sussex University"],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
        },
        {
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
            year: "2013 - 2016",
            title: ["Computer Science Degree", "- Brookes University"],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
        },
        {
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaBriefcase, {}),
            year: "2017 - Present",
            title: ["3D Animation", "- Brighton University"],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { className: "about portfolio-hide" + (isActive ? " active" : ""), id: "about", children: [(0, jsx_runtime_1.jsx)(MainTitle_1.default, { title: [t("title.0"), t("title.1")], subTitle: t("subtitle") }), (0, jsx_runtime_1.jsxs)("div", { className: "about-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "left-about", children: [(0, jsx_runtime_1.jsx)("h4", { children: t("information") }), (0, jsx_runtime_1.jsx)("p", { children: t("description1") }), (0, jsx_runtime_1.jsx)("p", { children: t("description2") }), (0, jsx_runtime_1.jsx)(ButtonDownload_1.default, { text: "downloadCv", icon: (0, jsx_runtime_1.jsx)(fa_1.FaDownload, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: "right-about", children: AboutListItems })] }), (0, jsx_runtime_1.jsxs)("div", { className: "about-stats", children: [(0, jsx_runtime_1.jsx)("h4", { className: "stat-title", children: t("skills") }), (0, jsx_runtime_1.jsx)(ProgressBars_1.default, { data: portfolioAbout_1.data.progress })] }), (0, jsx_runtime_1.jsx)(Timeline_1.default, { title: t("timeline"), data: timelineItems })] }));
};
exports.default = SectionAbout;
//# sourceMappingURL=SectionAbout.js.map