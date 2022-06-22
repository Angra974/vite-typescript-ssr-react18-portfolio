"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var reactRouterDom = require("react-router-dom");
var jsxRuntime = require("react/jsx-runtime");
var reactI18next = require("react-i18next");
var styled = require("styled-components");
var fa = require("react-icons/fa");
var i18n = require("i18next");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var styled__default = /* @__PURE__ */ _interopDefaultLegacy(styled);
var i18n__default = /* @__PURE__ */ _interopDefaultLegacy(i18n);
var main = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* For any animations */\n/**\n * Set up a decent box model on the root element\n */\nhtml {\n  box-sizing: border-box;\n}\n\n/**\n * Make all elements from the DOM inherit from the parent box-sizing\n * Since `*` has a specificity of 0, it does not override the `html` value\n * making all elements inheriting from the root box-sizing value\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n */\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * Basic styles for links\n */\na {\n  color: rgb(229, 0, 80);\n  text-decoration: none;\n}\na:hover, a:active, a:focus {\n  color: rgb(34, 34, 34);\n  text-decoration: underline;\n}\n\n/**\n * Clear inner floats\n */\n.clearfix::after {\n  clear: both;\n  content: "";\n  display: table;\n}\n\n/**\n * Main content containers\n * 1. Make the container full-width with a maximum width\n * 2. Center it in the viewport\n * 3. Leave some space on the edges, especially valuable on small screens\n */\n.container {\n  max-width: 1180px; /* 1 */\n  margin-left: auto; /* 2 */\n  margin-right: auto; /* 2 */\n  padding-left: 20px; /* 3 */\n  padding-right: 20px; /* 3 */\n  width: 100%; /* 1 */\n}\n\n/**\n * Hide text while making it readable for screen readers\n * 1. Needed in WebKit-based browsers because of an implementation bug;\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0; /* 1 */\n  text-indent: 101%;\n  white-space: nowrap;\n}\n\n/**\n * Hide element while making it readable for screen readers\n * Shamelessly borrowed from HTML5Boilerplate:\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/**\n * Basic typography style for copy text\n */\nbody {\n  color: rgb(34, 34, 34);\n  font: normal 125%/1.4 "Open Sans", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.btn {\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 3px;\n  background: #ccc;\n  font-size: 16px;\n  color: #333;\n}\n\n.btn-large {\n  padding: 20px 30px;\n  display: inline-block;\n  border-radius: 3px;\n  background: #ccc;\n  font-size: 22px;\n  color: #333;\n}\n\n/* Use for components */ /* pages */ /* pages */\n/*********************/\n/***Current Project***/\n/*********************/\n:root {\n  --color-primary: #191d2b;\n  --color-secondary: #27ae60;\n  --color-white: #ffffff;\n  --color-black: #000;\n  --color-grey0: #f8f8f8;\n  --color-grey-1: #dbe1e8;\n  --color-grey-2: #b2becd;\n  --color-grey-3: #6c7983;\n  --color-grey-4: #454e56;\n  --color-grey-5: #2a2e35;\n  --color-grey-6: #12181b;\n  --br-sm-2: 14px;\n  --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.3);\n}\n\n.light-mode {\n  --color-primary: #ffffff;\n  --color-secondary: #f56692;\n  --color-white: #454e56;\n  --color-black: #000;\n  --color-grey0: #f8f8f8;\n  --color-grey-1: #6c7983;\n  --color-grey-2: #6c7983;\n  --color-grey-3: #6c7983;\n  --color-grey-4: #454e56;\n  --color-grey-5: #f8f8f8;\n  --color-grey-6: #12181b;\n}\n\n@media only screen and (max-width: 639px) {\n  .main-nav ul {\n    display: none;\n  }\n}')();
const Frontend = ({
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("main", {
    children
  });
};
var styles$j = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#root {\n  display: flex;\n  flex-direction: column;\n}\n\n.portfolio-hide {\n  display: none;\n  transform: translateY(-100%) scale(0);\n  transition: all 0.4s ease-in-out;\n  background-color: var(--color-primary);\n  min-height: 100vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 2rem 2rem;\n}\n@media only screen and (min-width: 1024px) {\n  .portfolio-hide {\n    padding: 2rem 7rem;\n  }\n}\n\n.portfolio-hide.active {\n  display: block;\n  -webkit-animation: appear 1s ease-in-out;\n          animation: appear 1s ease-in-out;\n  transform: translateY(0) scaleY(1);\n}\n@-webkit-keyframes appear {\n  0% {\n    transform: translateY(-100%) scaleY(0);\n  }\n  100% {\n    transform: translateY(0) scaleY(1);\n  }\n}\n@keyframes appear {\n  0% {\n    transform: translateY(-100%) scaleY(0);\n  }\n  100% {\n    transform: translateY(0) scaleY(1);\n  }\n}\n\n/* not use in this component but use on others\nportfolio pages for download button, so\ni decided to put it here instead*/\nbody {\n  background-color: var(--color-primary);\n  font-family: "Poppins", sans-serif;\n  font-size: 1.1rem;\n  color: var(--color-white);\n  transition: all 0.4s ease-in-out;\n}\n\na {\n  display: inline-block;\n  text-decoration: none;\n  color: inherit;\n  font-family: inherit;\n}\n\nsection {\n  min-height: 100vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 3rem 18rem;\n}\n\n/*Independed components*/\n.btn-con {\n  display: flex;\n  align-self: flex-start;\n}\n\n.main-btn {\n  border-radius: 30px;\n  color: inherit;\n  font-weight: 600;\n  position: relative;\n  border: 1px solid var(--color-secondary);\n  display: flex;\n  align-self: flex-start;\n  align-items: center;\n  overflow: hidden;\n}\n.main-btn .btn-text {\n  padding: 0 2rem;\n}\n.main-btn .btn-icon {\n  background-color: var(--color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  padding: 1rem;\n}\n.main-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(100%);\n  transition: all 0.4s ease-out;\n  z-index: -1;\n}\n.main-btn:hover {\n  transition: all 0.4s ease-out;\n}\n.main-btn:hover::before {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-secondary);\n  transform: translateX(0);\n  transition: all 0.4s ease-out;\n}')();
const Menu$1 = styled__default["default"].nav`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 680px) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  ul li a {
    padding: 0.7rem;
    margin: 0.7rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--color-secondary);
    transition: all 0.3s ease-in-out;
  }

  ul li a:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: 10%;
    transition: background-color 0.3s;
  }
`;
var styles$i = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nmain {\n  position: relative;\n}\n\n.main-nav .is_active {\n  border-bottom: 1px solid var(--color-secondary);\n}')();
const Menu = () => {
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.menu"
  });
  console.log(t);
  return /* @__PURE__ */ jsxRuntime.jsx(Menu$1, {
    className: "main-nav",
    children: /* @__PURE__ */ jsxRuntime.jsxs("ul", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("li", {
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.NavLink, {
          to: "/",
          "aria-label": t("home"),
          "data-nav": "home",
          className: ({
            isActive
          }) => isActive ? "is_active" : "",
          children: t("home")
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("li", {
        "data-nav": "about",
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.NavLink, {
          to: "/about",
          "aria-label": t("about"),
          "data-nav": "about",
          className: ({
            isActive
          }) => isActive ? "is_active" : "",
          children: t("about")
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("li", {
        "data-nav": "portfolio",
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.NavLink, {
          to: "/portfolio",
          "aria-label": t("portfolio"),
          "data-nav": "portfolio",
          className: ({
            isActive
          }) => isActive ? "is_active" : "",
          children: t("portfolio")
        })
      }), " ", /* @__PURE__ */ jsxRuntime.jsx("li", {
        "data-nav": "blog",
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.NavLink, {
          to: "/blog",
          "aria-label": t("blog"),
          "data-nav": "blog",
          className: ({
            isActive
          }) => isActive ? "is_active" : "",
          children: t("blog")
        })
      }), " ", /* @__PURE__ */ jsxRuntime.jsx("li", {
        "data-nav": "contact",
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.NavLink, {
          to: "/contact",
          "aria-label": t("contact"),
          "data-nav": "contact",
          className: ({
            isActive
          }) => isActive ? "is_active" : "",
          children: t("contact")
        })
      }), " "]
    })
  });
};
const Header$1 = styled__default["default"].header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;
const Header = ({}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx(Header$1, {})
  });
};
var styles$h = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.port-text {\n  padding: 2rem 0;\n  text-align: center;\n}\n\n.portfolios {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  margin-top: 3rem;\n}\n.portfolios .portfolio-item {\n  position: relative;\n  border-radius: 15px;\n}\n.portfolios .portfolio-item img {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n}\n.portfolios .portfolio-item .hover-items {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-secondary);\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.4s ease-in-out;\n}\n.portfolios .portfolio-item .hover-items h3 {\n  font-size: 1.5rem;\n  color: var(--color-white);\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 1247px) {\n  .portfolios {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (max-width: 639px) {\n  .portfolios {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n    margin-top: 1rem;\n  }\n}\n\n.portfolio-item:hover .hover-items {\n  opacity: 0.8;\n  transform: scale(1);\n}')();
const ImageContainer = ({
  as: Tag = "div",
  tagProps,
  props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx(Tag, __spreadProps(__spreadValues({}, tagProps), {
      children: /* @__PURE__ */ jsxRuntime.jsx("img", __spreadValues({}, props))
    }))
  });
};
const Component = ({
  as: Tag = "div",
  props,
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Tag, __spreadProps(__spreadValues({}, props), {
    children
  }));
};
var styles$g = /* @__PURE__ */ (() => '/*Independed components*/\n.btn-con {\n  display: flex;\n  align-self: flex-start;\n}\n\n.main-btn {\n  background: transparent;\n  border-radius: 30px;\n  color: inherit;\n  font-weight: 600;\n  position: relative;\n  border: 1px solid var(--color-secondary);\n  display: flex;\n  align-self: flex-start;\n  align-items: center;\n  overflow: hidden;\n}\n.main-btn .btn-text {\n  padding: 0 2rem;\n}\n.main-btn .btn-icon {\n  background-color: var(--color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  padding: 1rem;\n}\n.main-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(100%);\n  transition: all 0.4s ease-out;\n  z-index: -1;\n}\n.main-btn:hover {\n  transition: all 0.4s ease-out;\n}\n.main-btn:hover::before {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-secondary);\n  transform: translateX(0);\n  transition: all 0.4s ease-out;\n}')();
const ButtonDownload = ({
  text = "",
  icon = /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {})
}) => {
  const {
    t
  } = reactI18next.useTranslation("common");
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "btn-con",
    children: /* @__PURE__ */ jsxRuntime.jsxs("button", {
      className: "main-btn",
      children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "btn-text",
        children: t(text)
      }), /* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "btn-icon",
        children: icon
      })]
    })
  });
};
var styles$f = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*\n.header {\n    min-height: 100vh;\n    color: var(--color-white);\n    overflow: hidden;\n    padding: 0 !important;\n    @include mq("max", "tablet-small") {\n        padding: 0 !important;\n    }\n}\n*/\n/*Header-content*/\n.header-content {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  min-height: 100vh;\n}\n.header-content .left-header {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.header-content .left-header .h-shape {\n  transition: all 0.4s ease-in-out;\n  width: 65%;\n  height: 100%;\n  background-color: var(--color-secondary);\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  -webkit-clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);\n          clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);\n}\n@media only screen and (max-width: 639px) {\n  .header-content .left-header .h-shape {\n    display: none;\n  }\n}\n.header-content .left-header .image {\n  border-radius: var(--br-sm-2);\n  height: 90%;\n  width: 68%;\n  margin-left: 4rem;\n  background-color: var(--color-black);\n  transition: all 0.4s ease-in-out;\n}\n.header-content .left-header .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.4s ease-in-out;\n  filter: grayscale(100%);\n}\n.header-content .left-header .image img:hover {\n  filter: grayscale(0);\n}\n@media only screen and (max-width: 639px) {\n  .header-content .left-header .image {\n    width: 90% !important;\n    margin: 0 auto !important;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .header-content .left-header .image {\n    width: 90% !important;\n    margin: 0 auto !important;\n  }\n}\n.header-content .right-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 2rem;\n}\n.header-content .right-header .name {\n  font-size: 3rem;\n}\n.header-content .right-header .name span {\n  color: var(--color-secondary);\n}\n@media only screen and (max-width: 639px) {\n  .header-content .right-header .name {\n    font-size: 2.5rem !important;\n    text-align: center;\n    padding-top: 3rem;\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .header-content .right-header .name {\n    font-size: 2.5rem !important;\n    text-align: center;\n    padding-top: 3rem;\n    width: 75%;\n  }\n}\n.header-content .right-header p {\n  margin: 1.5rem 0;\n  line-height: 2rem;\n}\n@media only screen and (max-width: 1023px) {\n  .header-content .right-header p {\n    margin: 1.5rem 2.5rem;\n  }\n}\n@media only screen and (max-width: 639px) {\n  .header-content .right-header {\n    grid-row: 1;\n    padding-right: 0rem !important;\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .header-content .right-header {\n    grid-row: 1;\n    padding-right: 0rem !important;\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n@media only screen and (max-width: 639px) {\n  .header-content {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .header-content {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}')();
const SectionHome = ({
  isActive = false
}) => {
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.home"
  });
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx("section", {
      className: "header portfolio-hide" + (isActive ? " active" : ""),
      id: "home",
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "header-content",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "left-header",
          children: [/* @__PURE__ */ jsxRuntime.jsx(Component, {
            as: "div",
            props: {
              className: "h-shape"
            }
          }), /* @__PURE__ */ jsxRuntime.jsx(ImageContainer, {
            tagProps: {
              className: "image"
            },
            props: {
              src: "assets/img/hero.png",
              alt: ""
            }
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "right-header",
          children: [/* @__PURE__ */ jsxRuntime.jsxs(Component, {
            as: "h1",
            props: {
              className: "name"
            },
            children: [t("hi"), /* @__PURE__ */ jsxRuntime.jsxs("span", {
              children: [" ", t("name"), " "]
            }), t("role")]
          }), /* @__PURE__ */ jsxRuntime.jsx(Component, {
            as: "p",
            children: t("description")
          }), /* @__PURE__ */ jsxRuntime.jsx(ButtonDownload, {
            text: "downloadcv",
            icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaDownload, {})
          })]
        })]
      })
    })
  });
};
var styles$e = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icons .icon {\n  background-color: var(--color-primary);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n}\n.icons .icon i {\n  font-size: 1.5rem;\n  color: var(--color-white);\n  margin: 0 1rem;\n}\n.icons .icon:hover {\n  background-color: var(--color-white);\n}\n.icons .icon:hover i {\n  color: var(--color-primary);\n}\n\n.primary {\n  background-color: var(--color-primary);\n}\n.primary:hover {\n  background-color: var(--color-white);\n}\n.primary:hover i {\n  color: var(--color-primary);\n}\n\n.secondary {\n  background-color: var(--color-secondary);\n}\n.secondary:hover {\n  background-color: var(--color-white);\n}\n.secondary:hover i {\n  color: var(--color-secondary);\n}')();
const IconContainer = ({
  as: Tag = "div",
  tagProps,
  icon,
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs(Tag, __spreadProps(__spreadValues({}, tagProps), {
      children: [icon, children]
    }))
  });
};
var styles$d = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.theme-btn {\n  top: 5%;\n  right: 3%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: var(--color-grey-2);\n  background-color: var(--color-grey-4);\n  cursor: pointer;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);\n  transition: all 0.1s ease-in-out;\n}\n@media only screen and (max-width: 639px) {\n  .theme-btn {\n    width: 40px;\n    height: 40px;\n  }\n}\n\n.theme-btn:active {\n  transform: translateY(-3px);\n}\n\n.theme-btn i,\n.theme-btn svg {\n  font-size: 1.4rem;\n  color: var(--color-grey0);\n  pointer-events: none;\n}')();
const ThemeSwitcher = ({}) => {
  const handleTheme = () => {
    document.body.classList.toggle("light-mode");
  };
  return /* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
    as: "div",
    tagProps: {
      className: "theme-btn",
      onClick: () => handleTheme()
    },
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaAdjust, {})
  });
};
var styles$c = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.controls {\n  position: fixed;\n  z-index: 10;\n  top: 60%;\n  right: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transform: translateY(-50%);\n}\n.controls .control {\n  padding: 1rem;\n  cursor: pointer;\n  background-color: var(--color-grey-4);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.7rem 0;\n  box-shadow: var(--box-shadow-1);\n}\n.controls .control i,\n.controls .control svg {\n  font-size: 1.2rem;\n  color: var(--color-grey-2);\n  pointer-events: none;\n}\n@media only screen and (max-width: 399px) {\n  .controls .control {\n    width: 45px;\n    height: 45px;\n  }\n}\n.controls .control:hover i,\n.controls .control:hover svg {\n  color: var(--color-secondary);\n}\n.controls .active-btn {\n  background-color: var(--color-secondary);\n  transition: all 0.4s ease-in-out;\n}\n.controls .active-btn i,\n.controls .active-btn svg {\n  color: var(--color-white);\n}\n.controls .active-btn:hover i,\n.controls .active-btn:hover svg {\n  color: var(--color-grey-4);\n}\n\n@media screen and (max-width: 600px) {\n  .controls {\n    top: auto;\n    bottom: 0;\n    flex-direction: row;\n    justify-content: center;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    background-color: var(--color-grey-5);\n  }\n  .controls .control {\n    margin: 1rem 0.3rem;\n  }\n}\n.light-mode .control {\n  color: var(--color-primary);\n}\n.light-mode .control i,\n.light-mode .control svg {\n  color: var(--color-primary);\n}')();
const PortfolioControls = ({
  active = "home"
}) => {
  const uid = React.useId();
  const handleClick = (el) => {
    const activeBtn = document.querySelector(".active-btn");
    const target = el.currentTarget;
    if (activeBtn && !target.classList.contains("active-btn")) {
      activeBtn.classList.remove("active-btn");
      target.classList.add("active-btn");
    }
    const activeEl = document.querySelector(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
      activeEl.style.display = "none";
    }
    if (target.dataset.id) {
      document.querySelectorAll("a[data-nav]").forEach((el2) => el2.classList.remove("is_active"));
      const menuLink = document.querySelector(`a[data-nav="${target.dataset.id}"]`);
      menuLink && menuLink.classList.add("is_active");
      const currentEl = document.getElementById(target.dataset.id);
      if (currentEl) {
        currentEl.classList.add("active");
        currentEl.style.display = "block";
      }
    }
  };
  const menuItems = {
    Home: /* @__PURE__ */ jsxRuntime.jsx(fa.FaHome, {}),
    About: /* @__PURE__ */ jsxRuntime.jsx(fa.FaUser, {}),
    Portfolio: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    Blog: /* @__PURE__ */ jsxRuntime.jsx(fa.FaNewspaper, {}),
    Contact: /* @__PURE__ */ jsxRuntime.jsx(fa.FaEnvelopeOpen, {})
  };
  const controlsMenu = [];
  Object.entries(menuItems).forEach(([id, icon]) => {
    const name = id.toLowerCase();
    controlsMenu.push(/* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
      as: "div",
      tagProps: {
        className: `control primary${active === name ? " active-btn" : ""}`,
        "data-id": `${name}`,
        onClick: (el) => handleClick(el)
      },
      icon
    }, `${id}${uid}}`));
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "controls",
      children: controlsMenu
    }), /* @__PURE__ */ jsxRuntime.jsx(ThemeSwitcher, {})]
  });
};
const data$3 = {
  AboutItems: [{
    largeText: "650+",
    smallText: ["Projects", "Completed"]
  }, {
    largeText: "10+",
    smallText: ["Years of", "experience"]
  }, {
    largeText: "300+",
    smallText: ["Happy", "Clients"]
  }, {
    largeText: "400+",
    smallText: ["Customer", "reviews"]
  }],
  progress: [{
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaHtml5, {}),
    title: "html5",
    text: "80%",
    classname: "html"
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaCss3Alt, {}),
    title: "css3",
    text: "95%",
    classname: "css"
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaJs, {}),
    title: "javascript",
    text: "75%",
    classname: "js"
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaReact, {}),
    title: "ReactJs",
    text: "75%",
    classname: "react"
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaNode, {}),
    title: "NodeJs",
    text: "87%",
    classname: "node"
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaPython, {}),
    title: "Python",
    text: "70%",
    classname: "python"
  }]
};
var styles$b = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*About*/\n.about-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding-top: 3.5rem;\n  padding-bottom: 5rem;\n}\n.about-container .right-about {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2rem;\n}\n.about-container .right-about .about-item {\n  border: 1px solid var(--color-grey-5);\n  border-radius: 5px;\n  transition: all 0.4s ease-in-out;\n  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);\n}\n.about-container .right-about .about-item:hover {\n  cursor: default;\n  transform: translateY(-5px);\n  border: 1px solid var(--color-secondary);\n  box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);\n}\n.about-container .right-about .about-item .abt-text {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n.about-container .right-about .about-item .abt-text .large-text {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n}\n.about-container .right-about .about-item .abt-text .small-text {\n  padding-left: 3rem;\n  position: relative;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  color: var(--color-grey-1);\n  letter-spacing: 2px;\n}\n.about-container .right-about .about-item .abt-text .small-text::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 15px;\n  width: 2rem;\n  height: 2px;\n  background-color: var(--color-grey-5);\n}\n@media only screen and (max-width: 639px) {\n  .about-container .right-about {\n    grid-template-columns: repeat(1, 1fr);\n    padding-top: 2.5rem;\n  }\n}\n.about-container .left-about {\n  padding-right: 5rem;\n}\n@media only screen and (max-width: 639px) {\n  .about-container .left-about {\n    padding-right: 0;\n  }\n}\n.about-container .left-about p {\n  line-height: 2rem;\n  padding: 1rem;\n  color: var(--color-grey-1);\n}\n@media only screen and (max-width: 639px) {\n  .about-container .left-about p {\n    padding-left: 0;\n  }\n}\n.about-container .left-about h4 {\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 639px) {\n  .about-container {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .about-container {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n.about-stats {\n  padding-bottom: 4rem;\n  padding-right: 2rem;\n  /* .progress-bars here */\n}')();
var styles$a = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@media only screen and (max-width: 559px) {\n  .main-title .bg-text, .main-title span {\n    font-size: 2.3rem;\n  }\n  .main-title span, .main-title {\n    font-size: 3rem;\n  }\n}\n\n@media only screen and (max-width: 1023px) {\n  .main-title span, .main-title {\n    font-size: 4rem;\n  }\n}\n\n.main-title {\n  position: relative;\n  text-transform: uppercase;\n  font-size: 4rem;\n  font-weight: 700;\n}\n@media only screen and (max-width: 559px) {\n  .main-title {\n    font-size: 2rem;\n  }\n}\n@media only screen and (min-width: 480px) {\n  .main-title {\n    text-align: center;\n  }\n}\n.main-title span {\n  color: var(--color-secondary);\n}\n.main-title .bg-text {\n  text-shadow: 1px 1px 1px var(--color-secondary);\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: var(--color-grey-5);\n  transition: all 0.4s ease-in-out;\n  z-index: -1;\n  transform: translate(-50%, -50%);\n  font-weight: 800;\n  font-size: 6.3rem;\n}\n@media only screen and (max-width: 1439px) {\n  .main-title .bg-text {\n    font-size: 5.5rem;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .main-title .bg-text {\n    font-size: 4.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .main-title .bg-text {\n    font-size: 4rem;\n  }\n}')();
const MainTitle = ({
  title = ["", ""],
  classname = "main-title",
  subTitle = "",
  subClass = "bg-text",
  subTag = "span"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs("h2", {
      className: classname,
      children: [title[0], " ", /* @__PURE__ */ jsxRuntime.jsx("span", {
        children: title[1]
      }), /* @__PURE__ */ jsxRuntime.jsx(Component, {
        as: subTag,
        props: {
          className: subClass
        },
        children: subTitle
      })]
    })
  });
};
var styles$9 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.progress-bars .progress-bar {\n  display: flex;\n  flex-direction: column;\n}\n.progress-bars .progress-bar .prog-title {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.progress-bars .progress-bar .progress-con {\n  display: flex;\n  align-items: center;\n}\n.progress-bars .progress-bar .progress-con .prog-text {\n  color: var(--color-grey-2);\n}\n.progress-bars .progress-bar .progress-con .progress {\n  width: 100%;\n  height: 0.45rem;\n  background-color: var(--color-grey-4);\n  margin-left: 1rem;\n  position: relative;\n}\n.progress-bars .progress-bar .progress-con .progress span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background-color: var(--color-secondary);\n  transition: all 0.4s ease-in-out;\n  width: 60%;\n}\n.progress-bars .progress-bar .progress-con .progress .html {\n  width: 80%;\n}\n.progress-bars .progress-bar .progress-con .progress .css {\n  width: 95%;\n}\n.progress-bars .progress-bar .progress-con .progress .js {\n  width: 75%;\n}\n.progress-bars .progress-bar .progress-con .progress .react {\n  width: 60%;\n}\n.progress-bars .progress-bar .progress-con .progress .node {\n  width: 87%;\n}\n.progress-bars .progress-bar .progress-con .progress .python {\n  width: 70%;\n}')();
const ProgressBar = ({
  icon,
  title = "",
  text = "",
  classname = ""
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "progress-bar",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("p", {
        className: "prog-title",
        children: [title, " ", icon]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "progress-con",
        children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
          className: "prog-text",
          children: text
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "progress",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            className: classname
          })
        })]
      })]
    })
  });
};
var styles$8 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.progress-bars {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2rem;\n  /* .progress-bar here */\n}\n@media only screen and (max-width: 639px) {\n  .progress-bars {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}')();
const ProgressBars = ({
  data: data2
}) => {
  const id = React.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "progress-bars",
      children: data2.map((item, index) => {
        return /* @__PURE__ */ jsxRuntime.jsx(ProgressBar, {
          icon: item.icon,
          title: item.title,
          text: item.text,
          classname: item.classname
        }, `${id}${index}`);
      })
    })
  });
};
var styles$7 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.stat-title {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  text-align: center;\n  padding: 3.5rem 0;\n  position: relative;\n}\n.stat-title::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 40%;\n  height: 1px;\n  background-color: var(--color-grey-5);\n  transform: translateX(-50%);\n}\n\n.timeline {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2rem;\n  padding-bottom: 3rem;\n  /* timeline-item here */\n}\n@media only screen and (max-width: 639px) {\n  .timeline {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n@media only screen and (min-width: 640px) {\n  .timeline {\n    padding: 0 2rem 6rem 1rem;\n  }\n}')();
var styles$6 = /* @__PURE__ */ (() => ".timeline-item {\n  position: relative;\n  padding-left: 3rem;\n  border-left: 1px solid var(--color-grey-5);\n}\n.timeline-item .tl-icon {\n  position: absolute;\n  left: -27px;\n  top: 0;\n  background-color: var(--color-secondary);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.timeline-item .tl-icon i {\n  font-size: 1.3rem;\n}\n.timeline-item .tl-duration {\n  padding: 0.2rem 0.6rem;\n  background-color: var(--color-grey-5);\n  border-radius: 15px;\n  display: inline-block;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.timeline-item h5 {\n  padding: 1rem 0;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n.timeline-item h5 span {\n  color: var(--color-grey-2);\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n.timeline-item p {\n  color: var(--color-grey-2);\n}")();
const TimelineItem = ({
  icon,
  year = "",
  title,
  details = ""
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "timeline-item",
      children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "tl-icon"
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "tl-duration",
        children: year
      }), /* @__PURE__ */ jsxRuntime.jsxs("h5", {
        children: [title[0], /* @__PURE__ */ jsxRuntime.jsx("span", {
          children: title[1]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: details
      })]
    })
  });
};
const Timeline = ({
  title = "My Timeline",
  data: data2 = []
}) => {
  const id = React.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h4", {
      className: "stat-title",
      children: title
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "timeline",
      children: data2.map((item, index) => {
        return /* @__PURE__ */ jsxRuntime.jsx(TimelineItem, {
          icon: item.icon,
          year: item.year,
          title: item.title,
          details: item.details
        }, id + index);
      })
    })]
  });
};
var styles$5 = /* @__PURE__ */ (() => "")();
const AboutItem = ({
  largeText,
  smallText
}) => {
  const id = React.useId();
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "about-item",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "abt-text",
      children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "large-text",
        children: largeText
      }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
        className: "small-text",
        children: [smallText[0], /* @__PURE__ */ jsxRuntime.jsx("br", {}), smallText[1]]
      })]
    })
  }, id);
};
const SectionAbout = ({
  isActive = false
}) => {
  const id = React.useId();
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.about"
  });
  const AboutListItems = data$3.AboutItems.map((item, index) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AboutItem, {
      largeText: item.largeText,
      smallText: item.smallText
    }, id + index);
  });
  const timelineItems = [{
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    year: "2010 - Present",
    title: ["Web Developer", "Vircosoft"],
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    year: "2016 - 2017",
    title: ["C++ Programmer", "- Slime Tech"],
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    year: "2009 - 2013",
    title: ["Business Degree", "- Sussex University"],
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    year: "2013 - 2016",
    title: ["Computer Science Degree", "- Brookes University"],
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
  }, {
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBriefcase, {}),
    year: "2017 - Present",
    title: ["3D Animation", "- Brighton University"],
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
  }];
  return /* @__PURE__ */ jsxRuntime.jsxs("section", {
    className: "about portfolio-hide" + (isActive ? " active" : ""),
    id: "about",
    children: [/* @__PURE__ */ jsxRuntime.jsx(MainTitle, {
      title: [t("title.0"), t("title.1")],
      subTitle: t("subtitle")
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "about-container",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "left-about",
        children: [/* @__PURE__ */ jsxRuntime.jsx("h4", {
          children: t("information")
        }), /* @__PURE__ */ jsxRuntime.jsx("p", {
          children: t("description1")
        }), /* @__PURE__ */ jsxRuntime.jsx("p", {
          children: t("description2")
        }), /* @__PURE__ */ jsxRuntime.jsx(ButtonDownload, {
          text: "downloadCv",
          icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaDownload, {})
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "right-about",
        children: AboutListItems
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "about-stats",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h4", {
        className: "stat-title",
        children: t("skills")
      }), /* @__PURE__ */ jsxRuntime.jsx(ProgressBars, {
        data: data$3.progress
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(Timeline, {
      title: t("timeline"),
      data: timelineItems
    })]
  });
};
var styles$4 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.blogs {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n}\n.blogs .blog {\n  margin-top: 3rem;\n  position: relative;\n  background-color: var(--color-grey-5);\n  border-radius: 5px;\n  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.4s ease-in-out;\n}\n.blogs .blog:hover {\n  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-5px);\n  transition: all 0.4s ease-in-out;\n}\n.blogs .blog:hover img {\n  filter: grayscale(0);\n  transform: scale(1.1);\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);\n}\n.blogs .blog img {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -webkit-border-bottom-right-radius: 0px;\n  -webkit-border-bottom-left-radius: 0px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  -moz-border-radius-bottomright: 0px;\n  -moz-border-radius-bottomleft: 0px;\n  -o-border-top-left-radius: 5px;\n  -o-border-top-right-radius: 5px;\n  -o-border-bottom-right-radius: 0px;\n  -o-border-bottom-left-radius: 0px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  filter: grayscale(100%);\n  transition: all 0.4s ease-in-out;\n}\n.blogs .blog .blog-text {\n  margin-top: -7px;\n  padding: 1.1rem;\n  border-top: 8px solid var(--color-secondary);\n}\n.blogs .blog .blog-text h4 {\n  font-size: 1.5rem;\n  margin-bottom: 0.7rem;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n}\n.blogs .blog .blog-text h4:hover {\n  color: var(--color-secondary);\n}\n.blogs .blog .blog-text p {\n  color: var(--color-grey-2);\n  line-height: 2rem;\n  padding-bottom: 1rem;\n}\n@media only screen and (max-width: 1247px) {\n  .blogs {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (max-width: 639px) {\n  .blogs {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}')();
const data$2 = {
  BlogItems: [{
    imgSrc: "assets/img/port6.jpg",
    alt: "",
    title: "How to Create Your Own Website",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }, {
    imgSrc: "assets/img/port1.jpg",
    alt: "",
    title: "How to Become an Expert in Web Design",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }, {
    imgSrc: "assets/img/port3.jpg",
    alt: "",
    title: "Debbuging made easy with Web Inspector",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }, {
    imgSrc: "assets/img/port2.jpg",
    alt: "",
    title: "Become A Web Designer Withtin 10 Days",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }, {
    imgSrc: "assets/img/port4.jpg",
    alt: "",
    title: "This is what you need to know about Web Desing",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }, {
    imgSrc: "assets/img/port5.jpg",
    alt: "",
    title: "Get Started with Web Design and UI Design",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?"
  }]
};
const SectionBlog = ({
  isActive = false
}) => {
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.blog"
  });
  const id = React.useId();
  return /* @__PURE__ */ jsxRuntime.jsx("section", {
    className: "blog portfolio-hide  " + (isActive ? "active" : ""),
    id: "blog",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "blogs-content",
      children: [/* @__PURE__ */ jsxRuntime.jsx(MainTitle, {
        title: [t("title.0"), t("title.1")],
        subTitle: t("subtitle")
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "blogs",
        children: data$2.BlogItems.map((blog, index) => {
          return /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "blog",
            children: [/* @__PURE__ */ jsxRuntime.jsx("img", {
              src: blog.imgSrc,
              alt: blog.alt === "" ? blog.title : blog.alt
            }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
              className: "blog-text",
              children: [/* @__PURE__ */ jsxRuntime.jsx("h4", {
                children: blog.title
              }), /* @__PURE__ */ jsxRuntime.jsx("p", {
                children: blog.details
              })]
            })]
          }, `${id}${index}`);
        })
      })]
    })
  });
};
const Button = ({
  tagProps,
  props,
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx("button", __spreadProps(__spreadValues({}, tagProps), {
      children: /* @__PURE__ */ jsxRuntime.jsx("span", __spreadProps(__spreadValues({}, props), {
        children
      }))
    }))
  });
};
const data$1 = {
  email: "maclinzuniversal@gmail.com",
  items: [{
    container: "div",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaMapMarkerAlt, {}),
    label: "Location",
    text: "London, united Kingdom"
  }, {
    container: "div",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaEnvelopeOpen, {}),
    label: "Email",
    text: "maclinzuniversal@gmail.com"
  }, {
    container: "div",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaUserGraduate, {}),
    label: "Education",
    text: "Sussex University, East Sussex"
  }, {
    container: "div",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaPhoneAlt, {}),
    label: "Mobile Number",
    text: "07522670617"
  }, {
    container: "div",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaGlobeAfrica, {}),
    label: "Languages",
    text: "Afrikaans, English, Spanish"
  }],
  socials: [{
    href: "https://www.facebook.com",
    target: "_blank",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaFacebook, {})
  }, {
    href: "https://twitter.com",
    target: "_blank",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaTwitter, {})
  }, {
    href: "https://github.com",
    target: "_blank",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaGithubAlt, {})
  }, {
    href: "https://youtube.com",
    target: "_blank",
    icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaYoutube, {})
  }]
};
var styles$3 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.contact-container {\n  margin: 0 auto;\n}\n@media only screen and (max-width: 1023px) {\n  .contact-container {\n    width: 500px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .contact-container {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 1248px) {\n  .contact-container {\n    width: 1024px;\n  }\n}\n\n.contact-content-con {\n  display: flex;\n  padding-top: 3.5rem;\n}\n@media only screen and (max-width: 1023px) {\n  .contact-content-con {\n    flex-direction: column;\n  }\n}\n.contact-content-con .left-contact {\n  flex: 2;\n  margin-right: 1rem;\n}\n.contact-content-con .left-contact h4 {\n  margin-top: 1rem;\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n.contact-content-con .left-contact p {\n  margin: 1rem 0;\n  line-height: 2rem;\n}\n.contact-content-con .left-contact .contact-info {\n  max-width: 450px;\n}\n.contact-content-con .left-contact .contact-info .contact-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.contact-content-con .left-contact .contact-info .contact-item p {\n  margin: 0.3rem 0 !important;\n  padding: 0 !important;\n}\n.contact-content-con .left-contact .contact-info .contact-item p::before {\n  content: ": ";\n}\n.contact-content-con .left-contact .contact-info .contact-item .icon {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n}\n.contact-content-con .left-contact .contact-info .contact-item .icon i {\n  display: flex;\n  align-items: center;\n  font-size: 1.3rem;\n}\n.contact-content-con .left-contact .contact-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact-content-con .left-contact .contact-icons .contact-icon {\n  display: flex;\n  margin-top: 2rem;\n}\n.contact-content-con .left-contact .contact-icons .contact-icon a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color-white);\n  background-color: var(--color-grey-5);\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  margin: 0 0.4rem;\n  transition: all 0.4s ease-in-out;\n}\n.contact-content-con .left-contact .contact-icons .contact-icon a:hover {\n  background-color: var(--color-secondary);\n}\n.contact-content-con .left-contact .contact-icons .contact-icon a:hover i {\n  color: var(--color-primary);\n}\n.contact-content-con .left-contact .contact-icons .contact-icon a i {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n}\n.contact-content-con .right-contact {\n  min-width: 320px;\n  max-width: 500px;\n}\n.contact-content-con .right-contact .input-control {\n  margin: 1.5rem 0;\n}\n.contact-content-con .right-contact .input-control input,\n.contact-content-con .right-contact .input-control textarea {\n  border-radius: 30px;\n  font-weight: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  padding: 0.8rem 1.1rem;\n  outline: none;\n  border: none;\n  background-color: var(--color-grey-5);\n  width: 100%;\n  color: var(--color-white);\n  resize: none;\n}\n.contact-content-con .right-contact .i-c-2 {\n  display: flex;\n}\n.contact-content-con .right-contact .i-c-2 :last-child {\n  margin-left: 1.5rem;\n}\n.contact-content-con .right-contact .submit-btn {\n  display: flex;\n  justify-content: flex-start;\n}\n.contact-content-con .right-contact .floating-label-input {\n  width: 100%;\n}\n.contact-content-con .right-contact button {\n  padding: 5px 10px;\n  display: inline-block;\n  border-radius: 10px;\n  background: var(--color-primary);\n  font-size: 2rem;\n  color: var(--color-secondary);\n  border-color: 1px solid var(--color-primary);\n}\n\n@media only screen and (max-width: 639px) {\n  .contact-item p {\n    font-size: 15px;\n    color: var(--color-grey-2);\n  }\n  .contact-item span {\n    font-size: 15px;\n  }\n  .contact-item .icon {\n    grid-template-columns: 25px 1fr;\n  }\n  .contact-item {\n    flex-direction: column;\n    margin: 1rem 0;\n  }\n}')();
var styles$2 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.floating-label-wrap {\n  position: relative;\n}\n\n.floating-label {\n  pointer-events: none;\n}\n\n/* Hide the browser-specific focus styles */\n.floating-label-field {\n  border-width: 0;\n  color: rgba(44, 62, 80, 0.75);\n}\n.floating-label-field:focus {\n  outline: 0;\n  box-shadow: 0;\n}\n.floating-label-field::-moz-placeholder {\n  color: transparent;\n}\n.floating-label-field:-ms-input-placeholder {\n  color: transparent;\n}\n.floating-label-field::placeholder {\n  color: transparent;\n}\n\n.floating-label-input {\n  caret-color: var(--color-primary);\n}\n\n.floating-label-field, .floating-label-field + .floating-label {\n  line-height: 1;\n  font: inherit;\n  padding: 1.5em;\n  height: 4em;\n}\n\n.floating-label-field + .floating-label {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.floating-label-field {\n  border: 3px solid var(--color-primary);\n  background-color: var(--color-grey-5);\n  color: var(--color-primary);\n  border-radius: 10px;\n}\n\n.floating-label-field + .floating-label {\n  transition: transform 0.25s, opacity 0.25s ease-in-out;\n  transform-origin: 0 0;\n  opacity: 0.5;\n}\n\n.floating-label-field:not(:-moz-placeholder-shown) {\n  border-color: var(--color-primary);\n}\n\n.floating-label-field:not(:-ms-input-placeholder) {\n  border-color: var(--color-primary);\n}\n\n.floating-label-field:focus, .floating-label-field:not(:placeholder-shown) {\n  border-color: var(--color-primary);\n}\n.floating-label-field:not(:-moz-placeholder-shown) + .floating-label {\n  transform: translate(1%, -30%) scale(0.8);\n  opacity: 0.25;\n}\n.floating-label-field:not(:-ms-input-placeholder) + .floating-label {\n  transform: translate(1%, -30%) scale(0.8);\n  opacity: 0.25;\n}\n.floating-label-field:focus + .floating-label, .floating-label-field:not(:placeholder-shown) + .floating-label {\n  transform: translate(1%, -30%) scale(0.8);\n  opacity: 0.25;\n}\n\n.floating-label-input {\n  caret-color: var(--color-white);\n  color: var(--color-white);\n}\n.floating-label-input:-moz-placeholder-shown {\n  border: 1px solid var(--color-primary);\n}\n.floating-label-input:-ms-input-placeholder {\n  border: 1px solid var(--color-primary);\n}\n.floating-label-input:placeholder-shown {\n  border: 1px solid var(--color-primary);\n}\n.floating-label-input:valid:not(:-moz-placeholder-shown) {\n  border-color: rgba(46, 213, 115, 0.3);\n}\n.floating-label-input:valid:not(:-ms-input-placeholder) {\n  border-color: rgba(46, 213, 115, 0.3);\n}\n.floating-label-input:valid:not(:placeholder-shown) {\n  border-color: rgba(46, 213, 115, 0.3);\n}\n.floating-label-input:invalid {\n  border-color: rgba(255, 71, 87, 0.3);\n}')();
const FloatingLabel = ({
  type,
  id,
  label,
  required = true,
  classname = "",
  labelClass = ""
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "floating-label-wrap",
      children: [/* @__PURE__ */ jsxRuntime.jsx("input", {
        type,
        className: `floating-label-input floating-label-field floating-label-field--s3 ${classname}`,
        id,
        name: id,
        placeholder: label,
        required: !!required
      }), /* @__PURE__ */ jsxRuntime.jsx("label", {
        htmlFor: id,
        className: `floating-label ${labelClass}`,
        children: label
      })]
    })
  });
};
const SectionContact = ({
  isActive
}) => {
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.contact"
  });
  const id = React.useId();
  const userEmail = data$1.email;
  const contactItems = data$1.items.map((item, index) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "contact-item",
      children: [/* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
        as: "div",
        tagProps: {
          className: "icon"
        },
        icon: item.icon,
        children: /* @__PURE__ */ jsxRuntime.jsx("span", {
          children: item.label
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: item.text
      })]
    }, `${id}${index}}`);
  });
  const socialLinks = data$1.socials.map((social, index) => {
    return /* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
      as: "a",
      tagProps: {
        href: social.href,
        className: "icon",
        target: social.target
      },
      icon: social.icon
    }, `${id}${index}}`);
  });
  return /* @__PURE__ */ jsxRuntime.jsx("section", {
    className: "contact portfolio-hide" + (isActive ? " active" : ""),
    id: "contact",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "contact-container",
      children: [/* @__PURE__ */ jsxRuntime.jsx(MainTitle, {
        title: [t("title.0"), t("title.1")],
        subTitle: t("subtitle")
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "contact-content-con",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "left-contact",
          children: [/* @__PURE__ */ jsxRuntime.jsx(Component, {
            as: "h4",
            children: t("information")
          }), /* @__PURE__ */ jsxRuntime.jsx(Component, {
            as: "p",
            children: t("description")
          }), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "contact-info",
            children: /* @__PURE__ */ jsxRuntime.jsx("address", {
              children: contactItems
            })
          }), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "contact-icons",
            children: /* @__PURE__ */ jsxRuntime.jsx("div", {
              className: "contact-icon",
              children: socialLinks
            })
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "right-contact",
          children: /* @__PURE__ */ jsxRuntime.jsxs("form", {
            action: `mailto:${userEmail}`,
            method: "get",
            encType: "text/plain",
            children: [/* @__PURE__ */ jsxRuntime.jsx(FloatingLabel, {
              type: "text",
              id: "name",
              classname: "input-control",
              label: t("label_name"),
              required: true
            }), /* @__PURE__ */ jsxRuntime.jsx(FloatingLabel, {
              type: "email",
              id: "email",
              classname: "input-control",
              label: t("label_email"),
              required: true
            }), /* @__PURE__ */ jsxRuntime.jsx(FloatingLabel, {
              type: "text",
              id: "subject",
              classname: "input-control",
              label: t("label_subject"),
              required: true
            }), /* @__PURE__ */ jsxRuntime.jsx("div", {
              className: "input-control",
              children: /* @__PURE__ */ jsxRuntime.jsx("textarea", {
                cols: 15,
                rows: 8,
                placeholder: t("text_placeholder"),
                defaultValue: "",
                name: "body",
                id: "body"
              })
            }), /* @__PURE__ */ jsxRuntime.jsx(Button, {
              tagProps: {
                type: "submit",
                className: "btn large"
              },
              children: t("submit")
            }), " "]
          })
        })]
      })]
    })
  });
};
var styles$1 = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.port-text {\n  padding: 2rem 0;\n  text-align: center;\n}\n\n.portfolios {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  margin-top: 3rem;\n}\n.portfolios .portfolio-item {\n  position: relative;\n  border-radius: 15px;\n}\n.portfolios .portfolio-item img {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n}\n.portfolios .portfolio-item .hover-items {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-secondary);\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.4s ease-in-out;\n}\n.portfolios .portfolio-item .hover-items h3 {\n  font-size: 1.5rem;\n  color: var(--color-white);\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 1247px) {\n  .portfolios {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (max-width: 639px) {\n  .portfolios {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n    margin-top: 1rem;\n  }\n}\n\n.portfolio-item:hover .hover-items {\n  opacity: 0.8;\n  transform: scale(1);\n}')();
const data = {
  projects: [{
    src: "assets/img/port1.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "",
    youtubeHref: "https://youtube.com/"
  }, {
    src: "assets/img/port2.jpg",
    alt: "",
    githubHref: "",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: "https://youtube.com/"
  }, {
    src: "assets/img/port3.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: ""
  }, {
    src: "assets/img/port4.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: "https://youtube.com/"
  }, {
    src: "assets/img/port5.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: "https://youtube.com/"
  }, {
    src: "assets/img/port6.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: "https://youtube.com/"
  }, {
    src: "assets/img/port7.jpg",
    alt: "",
    githubHref: "https://github.com/",
    behanceHref: "https://https://www.behance.net",
    youtubeHref: "https://youtube.com/"
  }]
};
const SectionPortfolio = ({
  isActive = false
}) => {
  const id = React.useId();
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.portfolio"
  });
  const projects = data.projects.map((project, index) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "portfolio-item",
      children: [/* @__PURE__ */ jsxRuntime.jsx(ImageContainer, {
        tagProps: {
          className: "image"
        },
        props: {
          src: project.src,
          alt: project.alt
        }
      }), /* @__PURE__ */ jsxRuntime.jsxs(Component, {
        as: "div",
        props: {
          className: "hover-items"
        },
        children: [/* @__PURE__ */ jsxRuntime.jsx(Component, {
          as: "h3",
          children: t("headerItem")
        }), /* @__PURE__ */ jsxRuntime.jsxs(Component, {
          as: "div",
          props: {
            className: "icons"
          },
          children: [project.githubHref && /* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
            as: "a",
            tagProps: {
              className: "icon",
              href: project.githubHref
            },
            icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaGithubAlt, {})
          }), project.behanceHref && /* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
            as: "a",
            tagProps: {
              className: "icon",
              href: project.behanceHref
            },
            icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaBehance, {})
          }), project.youtubeHref && /* @__PURE__ */ jsxRuntime.jsx(IconContainer, {
            as: "a",
            tagProps: {
              className: "icon",
              href: project.youtubeHref
            },
            icon: /* @__PURE__ */ jsxRuntime.jsx(fa.FaYoutube, {})
          })]
        })]
      })]
    }, id + index);
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("section", {
    className: "portfolio-hide portfolio" + (isActive ? " active" : ""),
    id: "portfolio",
    children: [/* @__PURE__ */ jsxRuntime.jsx(MainTitle, {
      title: [t("title.0"), t("title.1")],
      subTitle: t("subtitle")
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      className: "port-text",
      children: [" ", t("text")]
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "portfolios",
      children: projects
    })]
  });
};
var styles = /* @__PURE__ */ (() => '/*\n* https://hackingui.com/10-best-scss-utilities/\n*/\n/*\n* creare a media query of with, with type\n*\n*/\n/* Opacity\n-------------------------*/\n/* Font Size\n-------------------------*/\n/* center a block */\n/* Text overflow\n-------------------------*/\n/* quickly set flex property */\n/* add a gradient easily */\n/* Border radius - https://codepen.io/Simek/pen/DwJGMy */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*error*/\n.error-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 3.5rem;\n  padding-bottom: 5rem;\n}\n.error-container h2 {\n  font-size: 40px;\n}\n@media only screen and (max-width: 639px) {\n  .error-container {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .error-container {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}')();
const ErrorNotFound$1 = ({
  isActive = false
}) => {
  const {
    t
  } = reactI18next.useTranslation("common", {
    keyPrefix: "portfolio.sections.error"
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("section", {
    className: "error portfolio-hide" + (isActive ? " active" : ""),
    id: "error",
    children: [/* @__PURE__ */ jsxRuntime.jsx(MainTitle, {
      title: [t("title.0"), t("title.1")],
      subTitle: t("subtitle")
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "error-container",
      children: /* @__PURE__ */ jsxRuntime.jsx("h2", {
        children: t("error_page")
      })
    })]
  });
};
const SectionsProvider = ({
  active = ""
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(SectionHome, {
      isActive: active === "home"
    }), /* @__PURE__ */ jsxRuntime.jsx(SectionAbout, {
      isActive: active === "about"
    }), /* @__PURE__ */ jsxRuntime.jsx(SectionPortfolio, {
      isActive: active === "portfolio"
    }), /* @__PURE__ */ jsxRuntime.jsx(SectionBlog, {
      isActive: active === "blog"
    }), /* @__PURE__ */ jsxRuntime.jsx(SectionContact, {
      isActive: active === "contact"
    }), /* @__PURE__ */ jsxRuntime.jsx(ErrorNotFound$1, {
      isActive: active === "error"
    }), /* @__PURE__ */ jsxRuntime.jsx(PortfolioControls, {
      active
    })]
  });
};
const Portfolio = ({
  active = "home"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(Menu, {}), /* @__PURE__ */ jsxRuntime.jsx(Header, {}), /* @__PURE__ */ jsxRuntime.jsx(Frontend, {
      children: /* @__PURE__ */ jsxRuntime.jsx(SectionsProvider, {
        active
      })
    })]
  });
};
const Home = ({}) => Portfolio({
  active: "home"
});
const Contact = ({}) => Portfolio({
  active: "contact"
});
const Blog = ({}) => Portfolio({
  active: "blog"
});
const About = ({}) => Portfolio({
  active: "about"
});
const Pfolio = ({}) => Portfolio({
  active: "portfolio"
});
const ErrorNotFound = ({}) => Portfolio({
  active: "error"
});
const portfolioRoutes = [{
  path: "/",
  element: /* @__PURE__ */ jsxRuntime.jsx(Home, {})
}, {
  path: "/blog",
  element: /* @__PURE__ */ jsxRuntime.jsx(Blog, {})
}, {
  path: "/about",
  element: /* @__PURE__ */ jsxRuntime.jsx(About, {})
}, {
  path: "/portfolio",
  element: /* @__PURE__ */ jsxRuntime.jsx(Pfolio, {})
}, {
  path: "/contact",
  element: /* @__PURE__ */ jsxRuntime.jsx(Contact, {})
}];
const App = () => {
  const id = React.useId();
  const routeComponents = portfolioRoutes.map(({
    path,
    element
  }, key) => {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
      path,
      element
    }, `${key}${id}`);
  });
  return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.BrowserRouter, {
    children: /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, {
      children: [routeComponents, /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
        path: "*",
        element: /* @__PURE__ */ jsxRuntime.jsx(ErrorNotFound, {})
      }, `ErrorNotFound${React.useId()}`)]
    })
  });
};
const portfolio$1 = {
  menu: {
    home: "Home",
    about: "About",
    contact: "Contact",
    portfolio: "Portfolio",
    blog: "Blog"
  },
  sections: {
    portfolio: {
      title: [
        "My",
        "Projects"
      ],
      subtitle: "My work",
      text: "Here is some of my work that I've done in various programming languages.",
      headerItem: "Project source"
    },
    home: {
      hi: "Hi, i'm a",
      name: "Solano Milan Diaz.",
      role: "A Web Developer.",
      description: "I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!",
      download: "Download CV"
    },
    about: {
      title: [
        "About",
        "Me"
      ],
      subtitle: "My Stats",
      information: "Information About me",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.",
      description2: "La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.",
      download: "Download CV",
      skills: "My Skills",
      timeline: "My Timeline"
    },
    blog: {
      title: [
        "My",
        "Blog"
      ],
      subtitle: "My articles"
    },
    contact: {
      title: [
        "Contact",
        "Me"
      ],
      subtitle: "Contact",
      information: "Information About me",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.",
      label_name: "Name",
      label_email: "Email",
      label_subject: "Subject",
      text_placeholder: "Message here...",
      submit: "submit"
    },
    error: {
      title: [
        "Error",
        "404"
      ],
      subtitle: "Your error!",
      error_page: "Opps, something went wrong!"
    }
  }
};
var common_fr = {
  portfolio: portfolio$1
};
const portfolio = {
  menu: {
    home: "Home",
    about: "About",
    contact: "Contact",
    portfolio: "Portfolio",
    blog: "Blog"
  },
  sections: {
    portfolio: {
      title: [
        "My",
        "Projects"
      ],
      subtitle: "My work",
      text: "Here is some of my work that I've done in various programming languages.",
      headerItem: "Project source"
    },
    home: {
      hi: "Hi, i'm a",
      name: "Solano Milan Diaz.",
      role: "A Web Developer.",
      description: "I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!",
      download: "Download CV"
    },
    about: {
      title: [
        "About",
        "Me"
      ],
      subtitle: "My Stats",
      information: "Information About me",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.",
      description2: "La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.",
      download: "Download CV",
      skills: "My Skills",
      timeline: "My Timeline"
    },
    blog: {
      title: [
        "My",
        "Blog"
      ],
      subtitle: "My articles"
    },
    contact: {
      title: [
        "Contact",
        "Me"
      ],
      subtitle: "Contact",
      information: "Information About me",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.",
      label_name: "Name",
      label_email: "Email",
      label_subject: "Subject",
      text_placeholder: "Message here...",
      submit: "submit"
    },
    error: {
      title: [
        "Error",
        "404"
      ],
      subtitle: "Your error!",
      error_page: "Opps, something went wrong!"
    }
  }
};
const downloadCv = "Download Cv";
var common_en = {
  portfolio,
  downloadCv
};
i18n__default["default"].use(reactI18next.initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      common: common_en
    },
    de: {
      common: common_fr
    }
  }
});
(function dedupeRequire(dedupe) {
  const Module = require("module");
  const resolveFilename = Module._resolveFilename;
  Module._resolveFilename = function(request, parent, isMain, options) {
    if (request[0] !== "." && request[0] !== "/") {
      const parts = request.split("/");
      const pkgName = parts[0][0] === "@" ? parts[0] + "/" + parts[1] : parts[0];
      if (dedupe.includes(pkgName)) {
        parent = module;
      }
    }
    return resolveFilename(request, parent, isMain, options);
  };
})(["react", "react-dom"]);
function render(url) {
  return ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxRuntime.jsx(React__default["default"].StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, {
      fallback: /* @__PURE__ */ jsxRuntime.jsx("div", {
        children: "Loading..."
      }),
      children: /* @__PURE__ */ jsxRuntime.jsx(App, {})
    })
  }));
}
exports.render = render;
