"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const server_1 = __importDefault(require("react-dom/server"));
function render(url) {
    return server_1.default.renderToString((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
}
exports.render = render;
//# sourceMappingURL=entry-empty.js.map