"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_copy_1 = __importDefault(require("@col0ring/vite-plugin-copy"));
const path_1 = __importDefault(require("./vite/path"));
const common_1 = require("./src/client/helpers/common");
const srcPath = "src/client";
const plugin_common_1 = __importDefault(require("./vite/plugin.common"));
exports.default = (0, vite_1.defineConfig)(configEnv => {
    const isDevelopment = configEnv.mode === "development";
    return {
        plugins: [
            (0, plugin_react_1.default)(),
            ...plugin_common_1.default,
            (0, vite_plugin_copy_1.default)([
                {
                    src: (0, common_1.pResolve)('./dist/client/*'),
                    target: (0, common_1.pResolve)('./dist/')
                }
            ])
        ],
        resolve: path_1.default,
        css: {
            modules: {
                generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
            },
        },
    };
});
//# sourceMappingURL=vite.client.config.js.map