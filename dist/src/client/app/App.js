"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("@stylesheets/main.scss");
const Portfolio_1 = require("@components/pages/Portfolio");
/**
 *  Main entry, but don't modify links here, all goes in the portfolio component pages from portfolioroutes.
 * @returns void
 */
const App = () => {
    const id = (0, react_1.useId)(); // // map through portfolioRoutes to build all portfolio routes
    const routeComponents = Portfolio_1.portfolioRoutes.map(({ path, element }, key) => {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: path, element: element }, `${key}${id}`);
    });
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [routeComponents, (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Portfolio_1.ErrorNotFound, {}) }, `ErrorNotFound${(0, react_1.useId)()}`)] }) }));
};
exports.default = App;
//# sourceMappingURL=App.js.map