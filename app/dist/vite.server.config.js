"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
//import i18nResources from "vite-plugin-i18n-resources";
// require('dotenv').config();
//import pResolve from './src/client/Helpers/common';
const plugin_common_1 = __importDefault(require("./vite/plugin.common"));
// let port = process.env.PORT as unknown as number;
exports.default = (0, vite_1.defineConfig)({
    // ...vite configures
    server: {
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 7456,
    },
    plugins: [
        ...plugin_common_1.default,
        /*	i18nResources({
              path: pResolve("public/locales"),
            })
        */ 
    ]
});
//# sourceMappingURL=vite.server.config.js.map