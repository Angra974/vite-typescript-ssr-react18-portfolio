"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRoutes = exports.ErrorNotFound = exports.Pfolio = exports.About = exports.Blog = exports.Contact = exports.Home = exports.Portfolio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Frontend_1 = __importDefault(require("@components/templates/Frontend/Frontend"));
require("./styles.scss");
const Menu_1 = __importDefault(require("@components/organisms/Menu"));
const Header_1 = __importDefault(require("@components/organisms/Header"));
const SectionsProvider_1 = __importDefault(require("@components/organisms/Portfolio/SectionsProvider"));
/*
 * Return a portfolio page Home/Contact/Blog etc...
 * @parameter { string } active : the page to show
 */
const Portfolio = ({ active = "home" }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Menu_1.default, {}), (0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Frontend_1.default, { children: (0, jsx_runtime_1.jsx)(SectionsProvider_1.default, { active: active }) })] }));
};
exports.Portfolio = Portfolio;
exports.default = exports.Portfolio;
/* export the possible page to load */
const Home = ({}) => (0, exports.Portfolio)({ active: "home" });
exports.Home = Home;
const Contact = ({}) => (0, exports.Portfolio)({ active: "contact" });
exports.Contact = Contact;
const Blog = ({}) => (0, exports.Portfolio)({ active: "blog" });
exports.Blog = Blog;
const About = ({}) => (0, exports.Portfolio)({ active: "about" });
exports.About = About;
/* Portfolio is already used so we take Pfolio to be close to it */
const Pfolio = ({}) => (0, exports.Portfolio)({ active: "portfolio" });
exports.Pfolio = Pfolio;
const ErrorNotFound = ({}) => (0, exports.Portfolio)({ active: "error" });
exports.ErrorNotFound = ErrorNotFound;
exports.portfolioRoutes = [
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(exports.Home, {}),
    },
    {
        path: "/blog",
        element: (0, jsx_runtime_1.jsx)(exports.Blog, {}),
    },
    {
        path: "/about",
        element: (0, jsx_runtime_1.jsx)(exports.About, {}),
    },
    {
        path: "/portfolio",
        element: (0, jsx_runtime_1.jsx)(exports.Pfolio, {}),
    },
    {
        path: "/contact",
        element: (0, jsx_runtime_1.jsx)(exports.Contact, {}),
    },
];
//# sourceMappingURL=Portfolio.js.map