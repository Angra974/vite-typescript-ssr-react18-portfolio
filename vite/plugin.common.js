"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_plugin_restart_1 = __importDefault(require("vite-plugin-restart"));
const vite_plugin_ejs_1 = require("vite-plugin-ejs");
const BASE_HOST = process.env.NODE_HOST || "localhost";
const PROTOCOL = process.env.NODE_PROTOCOL || process.env.PROTOCOL || "http";
const PORT = process.env.NODE_PORT || process.env.PORT || 3000;
//const isDev = import.meta.env.DEV === 'development' ? true : false;
console.log(process.env.NODE_ENV);
/**
    We use this line to modify index.html with the ecs plugin.
    As we have a problem ( i have ^^' ) to get the i18n go the right way
    when using bad links url. Even if we have an error page, translation will be relative
    and not be accessible, so i use base url to fix it.
*/
const htmlBaseUrl = process.env.NODE_ENV !== 'production' ? `${PROTOCOL}://${BASE_HOST}${PORT ? ':' + PORT : ''}` :
    'https://angra974.github.io/vite-typescript-ssr-react18-portfolio';
const commonPlugins = [
    // With Data
    (0, vite_plugin_restart_1.default)({
        reload: ["public/**/*"],
        restart: ["./server.ts"],
    }),
    (0, vite_plugin_ejs_1.ViteEjsPlugin)({
        base: htmlBaseUrl,
    }),
];
exports.default = commonPlugins;
//# sourceMappingURL=plugin.common.js.map