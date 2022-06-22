"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const path_1 = __importDefault(require("./vite/path"));
const plugin_common_1 = __importDefault(require("./vite/plugin.common"));
exports.default = (0, vite_1.defineConfig)(configEnv => {
    const isDevelopment = configEnv.mode === "development";
    return {
        plugins: [
            (0, plugin_react_1.default)(),
            ...plugin_common_1.default,
        ],
        resolve: path_1.default,
        css: {
            modules: {
                generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
            },
        },
    };
});
//# sourceMappingURL=vite.config.js.map