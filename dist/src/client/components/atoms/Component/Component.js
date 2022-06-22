"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 *
 * @param { string } as : tag element
 * @params { any }  props : attributes+values and event for this element
 * @returns the formatted element
 */
const Component = ({ as: Tag = "div", props, children }) => {
    return (0, jsx_runtime_1.jsx)(Tag, { ...props, children: children });
};
exports.default = Component;
//# sourceMappingURL=Component.js.map