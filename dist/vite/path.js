"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../src/client/helpers/common");
const srcPath = "src/client";
const resolve = {
    alias: {
        "@": (0, common_1.pResolve)(srcPath),
        "@app": (0, common_1.pResolve)(`${srcPath}/app`),
        "@assets": (0, common_1.pResolve)(`${srcPath}/assets`),
        "@components": (0, common_1.pResolve)(`${srcPath}/components`),
        "@controllers": (0, common_1.pResolve)(`${srcPath}/controllers`),
        "@helpers": (0, common_1.pResolve)(`${srcPath}/helpers`),
        "@hooks": (0, common_1.pResolve)(`${srcPath}/hooks`),
        "@services": (0, common_1.pResolve)(`${srcPath}/services`),
        "@shared": (0, common_1.pResolve)(`${srcPath}/shared`),
        "@stylesheets": (0, common_1.pResolve)(`${srcPath}/stylesheets`),
        "@routes": (0, common_1.pResolve)(`${srcPath}/routes`),
        "@translations": (0, common_1.pResolve)(`${srcPath}/translations`),
    },
};
exports.default = resolve;
//# sourceMappingURL=path.js.map