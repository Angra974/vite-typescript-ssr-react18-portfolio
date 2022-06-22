"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./styles.scss");
const TimelineItem_1 = __importDefault(require("@components/molecules/Portfolio/TimelineItem"));
const Timeline = ({ title = "My Timeline", data = [] }) => {
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h4", { className: "stat-title", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "timeline", children: data.map((item, index) => {
                    return ((0, jsx_runtime_1.jsx)(TimelineItem_1.default, { icon: item.icon, year: item.year, title: item.title, details: item.details }, id + index));
                }) })] }));
};
exports.default = Timeline;
//# sourceMappingURL=Timeline.js.map