"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
const TimelineItem = ({ icon, year = "", title, details = "" }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "timeline-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "tl-icon" }), (0, jsx_runtime_1.jsx)("p", { className: "tl-duration", children: year }), (0, jsx_runtime_1.jsxs)("h5", { children: [title[0], (0, jsx_runtime_1.jsx)("span", { children: title[1] })] }), (0, jsx_runtime_1.jsx)("p", { children: details })] }) }));
};
exports.default = TimelineItem;
//# sourceMappingURL=TimelineItem.js.map