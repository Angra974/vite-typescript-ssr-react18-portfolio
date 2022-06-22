"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
// For client createRoot or hydrateRoot
const ReactDOMClient = __importStar(require("react-dom/client"));
const App = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("@app/App"))));
require("./i18n");
const dRoot = document.querySelector("#app");
// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
// Be sure eleemebt exist before use it as a document root
if (dRoot) {
    const root = ReactDOMClient.createRoot(dRoot);
    // 👇️ if you use TypeScript, add non-null (!) assertion operator
    // const root = createRoot(rootElement!);
    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(App, {}) }) }));
}
//# sourceMappingURL=entry-client.js.map