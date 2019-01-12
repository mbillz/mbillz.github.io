(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-typography/gatsby-ssr */ "./node_modules/gatsby-plugin-typography/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "pathToConfigModule": "src/utils/typography.js"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "Grid Net",
    "short_name": "GridNet",
    "start_url": "/",
    "display": "minimal-ui"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {object} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {string} $0.pathname Path of page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/Layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {object} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-pages-about-js","jsonName":"about-f34","path":"/about/"},{"componentChunkName":"component---src-pages-contact-js","jsonName":"contact-26a","path":"/contact/"},{"componentChunkName":"component---src-pages-news-js","jsonName":"news-014","path":"/news/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-pages-partners-js","jsonName":"partners-e99","path":"/partners/"},{"componentChunkName":"component---src-pages-products-js","jsonName":"products-6ef","path":"/products/"},{"componentChunkName":"component---src-components-templates-product-template-js","jsonName":"products-iot-network-platform-ed3","path":"/products/iot-network-platform"},{"componentChunkName":"component---src-components-templates-product-template-js","jsonName":"products-smart-grid-applications-2cf","path":"/products/smart-grid-applications"}],"dataPaths":{"404-22d":"44/path---404-22-d-bce-NZuapzHg3X9TaN1iIixfv1W23E","404-html-516":"164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E","about-f34":"329/path---about-f-34-4c2-DE5KNOr0cEYxAedwdvftSwHlMJE","contact-26a":"732/path---contact-26-a-cd9-vccjS00dxNv7A8KWWj5YRHo6yjg","dev-404-page-5f9":"920/path---dev-404-page-5-f-9-fab-NZuapzHg3X9TaN1iIixfv1W23E","index":"306/path---index-6a9-0GAqnF08sFFx0RYCcpGaU3AjQk","news-014":"281/path---news-014-fbb-Zd1W8Luh2ihI7g25nLgAXwRabE","offline-plugin-app-shell-fallback-a30":"520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E","partners-e99":"773/path---partners-e-99-4cc-ebvR5MeILMXjYmC8AfpTiYl0NI","products-6ef":"925/path---products-6-ef-42b-FoQ0YpcQb6QIBAJRMN3gmvLAI0","products-iot-network-platform-ed3":"152/path---products-iot-network-platform-ed-3-d64-7oZmAiWnD4FqLvntRheYhPuct0","products-smart-grid-applications-2cf":"674/path---products-smart-grid-applications-2-cf-c27-7oZmAiWnD4FqLvntRheYhPuct0","sq--src-components-shared-layout-js":4130953669}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("html", this.props.htmlAttributes, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("head", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("meta", {
      charSet: "utf-8"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("body", this.props.bodyAttributes, this.props.preBodyComponents, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("noscript", {
      key: "noscript",
      id: "gatsby-noscript"
    }, "This app works best with JavaScript enabled."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_5__["default"]; });







var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/parse-path.js":
/*!******************************!*\
  !*** ./.cache/parse-path.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");















var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = "../public/" + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(process.cwd() + "/public/static/d/" + dataPaths[page.jsonName] + ".json"));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(Html, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-components-templates-product-template-js": hot(preferDefault(__webpack_require__(/*! ./src/components/templates/ProductTemplate.js */ "./src/components/templates/ProductTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-news-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/news.js */ "./src/pages/news.js"))),
  "component---src-pages-partners-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/partners.js */ "./src/pages/partners.js"))),
  "component---src-pages-products-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/products.js */ "./src/pages/products.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  var getCache = Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it(just the Global component right now)
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.esm.js ***!
  \*****************************************************/
/*! exports provided: css, withEmotionCache, CacheProvider, ThemeContext, jsx, Global, keyframes, ClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"]; });









function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var isBrowser = typeof document !== 'undefined';

var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(isBrowser ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmotionCacheContext.Consumer, null, function ( // $FlowFixMe we know it won't be null
    cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(render);
};

if (!isBrowser) {
  var BasicProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var type = props[typePropName];
  var registeredStyles = [];
  var className = '';
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  registeredStyles.push(cssProp);

  if (props.className !== undefined) {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, newProps);

  if (!isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
};

var Emotion = withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
}); // $FlowFixMe

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || props.css == null) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  if (false) {}

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (false) { var match, error; }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_4__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    if (!isBrowser) {
      var _ref;

      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, false);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
    }

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css$$1, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css$$1(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css$$1 = function css$$1() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])(args, context.registered);

      if (isBrowser) {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(context, serialized, false);
      } else {
        var res = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!isBrowser) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css$$1, classnames(args));
    };

    var content = {
      css: css$$1,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!isBrowser && rules.length !== 0) {
      var _ref;

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.esm.js ***!
  \***************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");




var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          value = value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles;

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}
      }
    // eslint-disable-next-line no-fallthrough

    default:
      {
        if (registered == null) {
          return interpolation;
        }

        var cached = registered[interpolation];

        if (false) {}

        return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
      }
  }
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
          }
        } else {
          string += _key + "{" + handleInterpolation(mergedProps, registered, value, false) + "}";
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.esm.js ***!
  \*******************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/styled-base/dist/styled-base.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

var isBrowser = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        styles.push(args[i], args[0][i]);
      }
    }

    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className += Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (false) {}

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(finalTag, newProps);

        if (!isBrowser && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options || {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.esm.js ***!
  \*******************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/create-emotion/dist/create-emotion.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/create-emotion/dist/create-emotion.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");




function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if (false) {}

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered, this !== undefined ? this.mergedProps : undefined);
    Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: _emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"].bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion-reset/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emotion-reset/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}'], ['\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}']);

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var reset = (0, _emotion.css)(_templateObject);

exports.default = reset;

/***/ }),

/***/ "./node_modules/emotion/dist/emotion.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/emotion/dist/emotion.esm.js ***!
  \**************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/create-emotion.esm.js");


var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;




/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);

  if (convertedProps.resolutions) {
    convertedProps.fixed = convertedProps.resolutions;
    delete convertedProps.resolutions;
  }

  if (convertedProps.sizes) {
    convertedProps.fluid = convertedProps.sizes;
    delete convertedProps.sizes;
  }

  return convertedProps;
}; // Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.


var imageCache = {};

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  return imageCache[src] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  imageCache[src] = true;
};

var io;
var listeners = [];

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        listeners.forEach(function (l) {
          if (l[0] === entry.target) {
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(l[0]);
              l[1]();
            }
          }
        });
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  getIO().observe(el);
  listeners.push([el, cb]);
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSetWebp = props.srcSetWebp ? "<source type='image/webp' srcSet=\"" + props.srcSetWebp + "\" " + sizes + "/>" : "";
  var srcSet = props.srcSet ? "<source srcSet=\"" + props.srcSet + "\" " + sizes + "/>" : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var opacity = props.opacity ? props.opacity : "1";
  var transitionDelay = props.transitionDelay ? props.transitionDelay : "0.5s";
  return "<picture>" + srcSetWebp + srcSet + "<img " + width + height + src + alt + title + "style=\"position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:" + transitionDelay + ";opacity:" + opacity + ";width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
};

var Img = _react.default.forwardRef(function (props, ref) {
  var style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["style", "onLoad", "onError"]);
  return _react.default.createElement("img", (0, _extends2.default)({}, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // default settings for browser without Intersection Observer available

    var isVisible = true;
    var imgLoaded = false;
    var IOSupported = false;
    var fadeIn = props.fadeIn; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    var seenBefore = inImageCache(props); // browser with Intersection Observer available

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    } // Never render image during SSR


    if (typeof window === "undefined") {
      isVisible = false;
    } // Force render for critical images


    if (props.critical) {
      isVisible = true;
      IOSupported = false;
    }

    var hasNoScript = !(_this.props.critical && !_this.props.fadeIn);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore
    };
    _this.imageRef = _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.props.critical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, function () {
        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: inImageCache(_this2.props)
          });
        }

        _this2.setState({
          isVisible: true,
          imgLoaded: false
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    this.props.onLoad && this.props.onLoad();
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        Tag = _convertProps.Tag;

    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1,
      transition: "opacity 0.5s",
      transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
    }, imgStyle, placeholderStyle);
    var imageStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded || this.state.fadeIn === false ? 1 : 0,
      transition: this.state.fadeIn === true ? "opacity 0.5s" : "none"
    }, imgStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName
    };

    if (fluid) {
      var image = fluid;
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.base64
      }, placeholderImageProps)), image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.35s",
          right: 0,
          left: 0
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: image.srcSetWebp,
        sizes: image.sizes
      }), _react.default.createElement("source", {
        srcSet: image.srcSet,
        sizes: image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        src: image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, image))
        }
      }));
    }

    if (fixed) {
      var _image = fixed;
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, _image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.base64
      }, placeholderImageProps)), _image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.25s",
          height: _image.height
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, _image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: _image.srcSetWebp,
        sizes: _image.sizes
      }), _react.default.createElement("source", {
        srcSet: _image.srcSet,
        sizes: _image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        src: _image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            width: _image.width,
            height: _image.height
          }, _image))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  critical: false,
  fadeIn: true,
  alt: "",
  Tag: "div"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: fixedObject,
  fluid: fluidObject,
  fadeIn: _propTypes.default.bool,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(/*! fs */ "fs"); // default icons for generating icons


exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return fs.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code === "ENOENT") {
      return false;
    } else {
      throw e;
    }
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var icons = pluginOptions.icons || _common.defaultIcons; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (favicon) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: (0, _gatsby.withPrefix)(favicon)
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest")
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = Object.keys(pluginOptions).includes("theme_color_in_head") ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (pluginOptions.legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)("" + icon.src)
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

exports.onRenderBody = function (_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-typography/.cache/typography.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-typography/.cache/typography.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/utils/typography.js */ "./src/utils/typography.js")

/***/ }),

/***/ "./node_modules/gatsby-plugin-typography/gatsby-ssr.js":
/*!*************************************************************!*\
  !*** ./node_modules/gatsby-plugin-typography/gatsby-ssr.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactTypography = __webpack_require__(/*! react-typography */ "./node_modules/react-typography/dist/index.js");

var _typography = _interopRequireDefault(__webpack_require__(/*! ./.cache/typography */ "./node_modules/gatsby-plugin-typography/.cache/typography.js"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  var googleFont = pluginOptions.omitGoogleFont ? [] : _react.default.createElement(_reactTypography.GoogleFont, {
    key: "GoogleFont",
    typography: _typography.default
  });

  if (true) {
    setHeadComponents([_react.default.createElement(_reactTypography.TypographyStyle, {
      key: "TypographyStyle",
      typography: _typography.default
    })].concat(googleFont));
  }
};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@2.0.91","_id":"gatsby@2.0.91","_inBundle":false,"_integrity":"sha512-Z54P7oLqn2x1pvAPmk3CDRAxKMCXKBwsU3YzMAofAnA2OJXoCfZmbbkn9aLtXGin67sM9Jqg3GXnEcb6IiODcQ==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.2.0","bluebird":"3.5.3","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.2","envinfo":"5.12.1","execa":"0.8.0","fs-exists-cached":"1.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","jsonfile":"4.0.0","lodash":"4.17.11","opentracing":"0.14.3","pretty-error":"2.1.1","resolve-cwd":"2.0.0","source-map":"0.5.7","stack-trace":"0.0.10","universalify":"0.1.2","update-notifier":"2.5.0","yargs":"11.1.0","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.0.91","name":"gatsby","escapedName":"gatsby","rawSpec":"2.0.91","saveSpec":null,"fetchSpec":"2.0.91"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.0.91.tgz","_shasum":"177869f475615dd4bd67e6b9d96779b214f3df52","_spec":"gatsby@2.0.91","_where":"/Users/mbillings/Web/gatsby/grid-net/frontend","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@moocar/lokijs":"^1.0.1","@reach/router":"^1.1.1","address":"1.0.3","autoprefixer":"^8.6.5","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.5.2","babel-preset-gatsby":"^0.1.6","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"^2.0.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","domready":"^1.0.8","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","friendly-errors-webpack-plugin":"^1.6.1","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.4.8","gatsby-link":"^2.0.8","gatsby-plugin-page-creator":"^2.0.5","gatsby-react-router-scroll":"^2.0.2","glob":"^7.1.1","graphql":"^0.13.2","graphql-relay":"^0.5.5","graphql-skip-limit":"^2.0.4","graphql-tools":"^3.0.4","graphql-type-json":"^0.2.1","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parse-filepath":"^1.0.1","physical-cpu-count":"^2.0.0","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","relay-compiler":"1.5.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.0.2","type-of":"^2.0.1","url-loader":"^1.0.1","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"^4.12.0","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","babel-preset-gatsby-package":"^0.1.3","cross-env":"^5.1.4","lerna":"^2.9.0","rimraf":"^2.6.1"},"engines":{"node":">6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"c232a58a7d8b6813a9b1467e10a52f9c979e7db8","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^0.13.2"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.0.91","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ "./node_modules/string-convert/camel2hyphen.js");

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-cache/cjs/react-cache.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-cache/cjs/react-cache.production.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-cache.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var l=__webpack_require__(/*! react */ "react"),m=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js"),n=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,e){var f=n.currentDispatcher;if(null===f)throw Error("react-cache: read and preload may only be called from within a component's render. They are not supported in event handlers or lifecycle methods.");return f.readContext(c,e)}function q(c){return c}
var r=function(c){function e(){!1===h&&k>g&&(h=!0,m.unstable_scheduleCallback(f))}function f(){h=!1;var d=g;if(null!==a)for(var b=a.previous;k>d&&null!==b;){var c=b.onDelete,e=b.previous;b.onDelete=null;b.previous=b.next=null;b===a?a=b=null:(a.previous=e,e.next=a,b=e);--k;c()}}var g=c,a=null,k=0,h=!1;return{add:function(d,b){d={value:d,onDelete:b,next:null,previous:null};null===a?d.previous=d.next=d:(b=a.previous,b.next=d,d.previous=b,a.previous=d,d.next=a);a=d;k+=1;return d},update:function(a,b){a.value=
b},access:function(d){var b=d.next;if(null!==b){var c=a;if(a!==d){var f=d.previous;f.next=b;b.previous=f;b=c.previous;b.next=d;d.previous=b;c.previous=d;d.next=c;a=d}}e();return d.value},setLimit:function(a){g=a;e()}}}(500),t=new Map,u=l.createContext(null);
function v(c,e,f,g){var a=t.get(c);void 0===a&&(a=new Map,t.set(c,a));var k=a.get(g);if(void 0===k){e=e(f);e.then(function(a){if(0===h.status){var b=h;b.status=1;b.value=a}},function(a){if(0===h.status){var b=h;b.status=2;b.value=a}});var h={status:0,value:e};c=r.add(h,w.bind(null,c,g));a.set(g,c);return h}return r.access(k)}function w(c,e){var f=t.get(c);void 0!==f&&(f.delete(e),0===f.size&&t.delete(c))}
exports.unstable_createResource=function(c,e){var f=void 0!==e?e:q,g={read:function(a){p(u);var e=f(a);a=v(g,c,a,e);switch(a.status){case 0:throw a.value;case 1:return a.value;case 2:throw a.value;}},preload:function(a){p(u);var e=f(a);v(g,c,a,e)}};return g};exports.unstable_setGlobalCacheLimit=function(c){r.setLimit(c)};


/***/ }),

/***/ "./node_modules/react-cache/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-cache/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-cache.production.min.js */ "./node_modules/react-cache/cjs/react-cache.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.0-alpha.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),ba=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!qa[c]){b.extractEvents?void 0:t("97",a);qa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;ra.hasOwnProperty(h)?t("99",h):void 0;ra[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&sa(k[e],g,h);e=!0}else f.registrationName?(sa(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function sa(a,b,c){ta[a]?t("100",a):void 0;ta[a]=b;ua[a]=b.eventTypes[c].dependencies}var qa=[],ra={},ta={},ua={},va=null,wa=null,xa=null;function ya(a,b,c){var d=a.type||"unknown-event";a.currentTarget=xa(c);la(d,b,void 0,a);a.currentTarget=null}function za(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Aa(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ba=null;function Ca(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)ya(a,b[d],c[d]);else b&&ya(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Da={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Ea(a,b){var c=a.stateNode;if(!c)return null;var d=va(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Fa(a){null!==a&&(Ba=za(Ba,a));a=Ba;Ba=null;if(a&&(Aa(a,Ca),Ba?t("95"):void 0,ha))throw a=ia,ha=!1,ia=null,a;}var Ga=Math.random().toString(36).slice(2),Ha="__reactInternalInstance$"+Ga,Ia="__reactEventHandlers$"+Ga;function Ja(a){if(a[Ha])return a[Ha];for(;!a[Ha];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ha];return 5===a.tag||6===a.tag?a:null}function Ka(a){a=a[Ha];return!a||5!==a.tag&&6!==a.tag?null:a}
function La(a){if(5===a.tag||6===a.tag)return a.stateNode;t("33")}function Ma(a){return a[Ia]||null}function Na(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oa(a,b,c){if(b=Ea(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=za(c._dispatchListeners,b),c._dispatchInstances=za(c._dispatchInstances,a)}
function Pa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Na(b);for(b=c.length;0<b--;)Oa(c[b],"captured",a);for(b=0;b<c.length;b++)Oa(c[b],"bubbled",a)}}function Qa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ea(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=za(c._dispatchListeners,b),c._dispatchInstances=za(c._dispatchInstances,a))}function Ra(a){a&&a.dispatchConfig.registrationName&&Qa(a._targetInst,null,a)}
function Sa(a){Aa(a,Pa)}var Ta=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ua(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Va={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Wa={},Xa={};
Ta&&(Xa=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Ya(a){if(Wa[a])return Wa[a];if(!Va[a])return a;var b=Va[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xa)return Wa[a]=b[c];return a}
var Za=Ya("animationend"),$a=Ya("animationiteration"),ab=Ya("animationstart"),bb=Ya("transitionend"),cb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=null,eb=null,fb=null;
function gb(){if(fb)return fb;var a,b=eb,c=b.length,d,e="value"in db?db.value:db.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return fb=e.slice(a,1<d?1-d:void 0)}function hb(){return!0}function ib(){return!1}
function v(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?hb:ib;this.isPropagationStopped=ib;return this}
n(v.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=hb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=hb)},persist:function(){this.isPersistent=hb},isPersistent:ib,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ib;this._dispatchInstances=this._dispatchListeners=null}});v.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
v.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;jb(c);return c};jb(v);function kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function lb(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function jb(a){a.eventPool=[];a.getPooled=kb;a.release=lb}var mb=v.extend({data:null}),nb=v.extend({data:null}),ob=[9,13,27,32],qb=Ta&&"CompositionEvent"in window,rb=null;Ta&&"documentMode"in document&&(rb=document.documentMode);
var sb=Ta&&"TextEvent"in window&&!rb,tb=Ta&&(!qb||rb&&8<rb&&11>=rb),ub=String.fromCharCode(32),vb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},wb=!1;
function xb(a,b){switch(a){case "keyup":return-1!==ob.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function yb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var zb=!1;function Ab(a,b){switch(a){case "compositionend":return yb(b);case "keypress":if(32!==b.which)return null;wb=!0;return ub;case "textInput":return a=b.data,a===ub&&wb?null:a;default:return null}}
function Bb(a,b){if(zb)return"compositionend"===a||!qb&&xb(a,b)?(a=gb(),fb=eb=db=null,zb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return tb&&"ko"!==b.locale?null:b.data;default:return null}}
var Cb={eventTypes:vb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(qb)b:{switch(a){case "compositionstart":e=vb.compositionStart;break b;case "compositionend":e=vb.compositionEnd;break b;case "compositionupdate":e=vb.compositionUpdate;break b}e=void 0}else zb?xb(a,c)&&(e=vb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=vb.compositionStart);e?(tb&&"ko"!==c.locale&&(zb||e!==vb.compositionStart?e===vb.compositionEnd&&zb&&(f=gb()):(db=d,eb="value"in db?db.value:db.textContent,zb=
!0)),e=mb.getPooled(e,b,c,d),f?e.data=f:(f=yb(c),null!==f&&(e.data=f)),Sa(e),f=e):f=null;(a=sb?Ab(a,c):Bb(a,c))?(b=nb.getPooled(vb.beforeInput,b,c,d),b.data=a,Sa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=wa(a)){"function"!==typeof Db?t("280"):void 0;var b=va(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
function Jb(a,b){return a(b)}function Kb(a,b,c){return a(b,c)}function Lb(){}var Mb=!1;function Nb(a,b){if(Mb)return a(b);Mb=!0;try{return Jb(a,b)}finally{if(Mb=!1,null!==Eb||null!==Fb)Lb(),Ib()}}var Ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Ob[a.type]:"textarea"===b?!0:!1}
function Qb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Rb(a){if(!Ta)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):
60113,ic=B?Symbol.for("react.memo"):60115,jc=B?Symbol.for("react.lazy"):60116,kc="function"===typeof Symbol&&Symbol.iterator;function lc(a){if(null===a||"object"!==typeof a)return null;a=kc&&a[kc]||a["@@iterator"];return"function"===typeof a?a:null}
function mc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fc:return"ConcurrentMode";case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ic:return mc(a.type);case jc:if(a=1===a._status?a._result:null)return mc(a)}return null}function nc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=mc(a.type);c=null;d&&(c=mc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(oc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function E(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new E(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new E(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new E(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new E(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new E(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){F[a]=new E(a,3,!0,a,null)});
["capture","download"].forEach(function(a){F[a]=new E(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){F[a]=new E(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){F[a]=new E(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);F[b]=new E(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});F.tabIndex=new E("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ac(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Cc(a,b){Bc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Dc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Dc(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ec(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Dc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Fc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Gc(a,b,c){a=v.getPooled(Fc.change,a,b,c);a.type="change";Hb(c);Sa(a);return a}var Hc=null,Ic=null;function Jc(a){Fa(a)}
function Kc(a){var b=La(a);if(Wb(b))return a}function Lc(a,b){if("change"===a)return b}var Mc=!1;Ta&&(Mc=Rb("input")&&(!document.documentMode||9<document.documentMode));function Nc(){Hc&&(Hc.detachEvent("onpropertychange",Oc),Ic=Hc=null)}function Oc(a){"value"===a.propertyName&&Kc(Ic)&&(a=Gc(Ic,a,Qb(a)),Nb(Jc,a))}function Pc(a,b,c){"focus"===a?(Nc(),Hc=b,Ic=c,Hc.attachEvent("onpropertychange",Oc)):"blur"===a&&Nc()}function Qc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Kc(Ic)}
function Rc(a,b){if("click"===a)return Kc(b)}function Sc(a,b){if("input"===a||"change"===a)return Kc(b)}
var Tc={eventTypes:Fc,_isInputEventSupported:Mc,extractEvents:function(a,b,c,d){var e=b?La(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Lc:Pb(e)?Mc?f=Sc:(f=Qc,g=Pc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Rc);if(f&&(f=f(a,b)))return Gc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Dc(e,"number",e.value)}},Uc=v.extend({view:null,detail:null}),Vc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Vc[a])?!!b[a]:!1}function Xc(){return Wc}
var Yc=0,ad=0,bd=!1,cd=!1,dd=Uc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Xc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Yc;Yc=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ja(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=ed,h=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var m=null==f?e:La(f);e=null==b?e:La(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Na(g))l++;g=0;for(k=e;k;k=Na(k))g++;for(;0<l-g;)b=Na(b),l--;for(;0<g-l;)e=Na(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Na(b);e=Na(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Na(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Na(d)}for(d=0;d<b.length;d++)Qa(b[d],"bubbled",a);for(d=f.length;0<d--;)Qa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?t("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}3!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var od=v.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=v.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=Uc.extend({relatedTarget:null});function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=Uc.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Xc,charCode:function(a){return"keypress"===
a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=dd.extend({dataTransfer:null}),wd=Uc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Xc}),xd=v.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[Za,"animationEnd"],[$a,"animationIteration"],[ab,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[bb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case Za:case $a:case ab:a=od;break;case bb:a=xd;break;case "scroll":a=Uc;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=v}b=a.getPooled(e,b,c,d);Sa(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
Fd=[];function Gd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ja(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Qb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<qa.length;h++){var k=qa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=za(g,k))}Fa(g)}}var Hd=!0;
function G(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!1)}function Kd(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!0)}function Id(a,b){Kb(Jd,a,b)}
function Jd(a,b){if(Hd){var c=Qb(b);c=Ja(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Nb(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}var Ld={},Md=0,Nd="_reactListenersID"+(""+Math.random()).slice(2);
function Od(a){Object.prototype.hasOwnProperty.call(a,Nd)||(a[Nd]=Md++,Ld[a[Nd]]={});return Ld[a[Nd]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Ta&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&jd(Zd,c)?null:(Zd=c,a=v.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Sa(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ua.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?La(b):window;switch(a){case "focus":if(Pb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Da.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));va=Ma;wa=Ka;xa=La;Da.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Tc,SelectEventPlugin:be,BeforeInputEventPlugin:Cb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value),d=yc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});function re(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pe.hasOwnProperty(a)&&pe[a]?(""+b).trim():b+"px"}
function se(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=re(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var te=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ue(a,b){b&&(te[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function ve(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function we(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ua[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Kd("scroll",a);break;case "focus":case "blur":Kd("focus",a);Kd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Rb(e)&&Kd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===cb.indexOf(e)&&G(e,a)}c[e]=!0}}}function xe(){}var ye=null,ze=null;
function Be(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ce(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var De="function"===typeof setTimeout?setTimeout:void 0,Ee="function"===typeof clearTimeout?clearTimeout:void 0;
function Fe(a,b,c,d,e){a[Ia]=e;"input"===c&&"radio"===e.type&&null!=e.name&&Bc(a,e);ve(c,d);d=ve(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?se(a,h):"dangerouslySetInnerHTML"===g?ne(a,h):"children"===g?oe(a,h):xc(a,g,h,d)}switch(c){case "input":Cc(a,e);break;case "textarea":he(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ee(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ee(a,!!e.multiple,e.defaultValue,
!0):ee(a,!!e.multiple,e.multiple?[]:"",!1))}}function Ge(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function He(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Ie=[],Je=-1;function H(a){0>Je||(a.current=Ie[Je],Ie[Je]=null,Je--)}function I(a,b){Je++;Ie[Je]=a.current;a.current=b}var Ke={},J={current:Ke},K={current:!1},Le=Ke;
function Me(a,b){var c=a.type.contextTypes;if(!c)return Ke;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ne(a){H(K,a);H(J,a)}function Oe(a){H(K,a);H(J,a)}
function Pe(a,b,c){J.current!==Ke?t("168"):void 0;I(J,b,a);I(K,c,a)}function Qe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",mc(b)||"Unknown",e);return n({},c,d)}function Re(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Ke;Le=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Se(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Qe(a,b,Le),d.__reactInternalMemoizedMergedChildContext=b,H(K,a),H(J,a),I(J,b,a)):H(K,a);I(K,c,a)}var Te=null,Ue=null;function Ve(a){return function(b){try{return a(b)}catch(c){}}}
function We(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Te=Ve(function(a){return b.onCommitFiberRoot(c,a)});Ue=Ve(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Xe(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Ye(a,b,c,d){return new Xe(a,b,c,d)}
function Ze(a){a=a.prototype;return!(!a||!a.isReactComponent)}function $e(a){if("function"===typeof a)return Ze(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===ic)return 14}return 2}
function af(a,b){var c=a.alternate;null===c?(c=Ye(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=
a.sibling;c.index=a.index;c.ref=a.ref;return c}
function bf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ze(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ac:return cf(c.children,e,f,b);case fc:return df(c,e|3,f,b);case bc:return df(c,e|2,f,b);case cc:return a=Ye(12,c,b,e|4),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=Ye(13,c,b,e),a.elementType=hc,a.type=hc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:g=10;break a;case ec:g=9;break a;case gc:g=11;break a;case ic:g=
14;break a;case jc:g=16;d=null;break a}t("130",null==a?a:typeof a,"")}b=Ye(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function cf(a,b,c,d){a=Ye(7,a,d,b);a.expirationTime=c;return a}function df(a,b,c,d){a=Ye(8,a,d,b);b=0===(b&1)?bc:fc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function ef(a,b,c){a=Ye(6,a,null,b);a.expirationTime=c;return a}
function ff(a,b,c){b=Ye(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function gf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);hf(b,a)}
function jf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);hf(b,a)}function kf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}
function hf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var lf=!1;function mf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function nf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function of(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function pf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function qf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=mf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=mf(a.memoizedState),e=c.updateQueue=mf(c.memoizedState)):d=a.updateQueue=nf(e):null===e&&(e=c.updateQueue=nf(d));null===e||d===e?pf(d,b):null===d.lastUpdate||null===e.lastUpdate?(pf(d,b),pf(e,b)):(pf(d,b),e.lastUpdate=b)}
function rf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=mf(a.memoizedState):sf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function sf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=nf(b));return b}
function tf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:lf=!0}return d}
function uf(a,b,c,d,e){lf=!1;b=sf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(l=tf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var q=k.expirationTime;q<e?(null===m&&(m=k,null===g&&(f=l)),h<q&&(h=q)):(l=tf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=
32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function vf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);wf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;wf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function wf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function xf(a,b){return{value:a,source:b,stack:nc(b)}}var yf={current:null},zf=null,Af=null,Bf=null;function Cf(a,b){var c=a.type._context;I(yf,c._currentValue,a);c._currentValue=b}function Df(a){var b=yf.current;H(yf,a);a.type._context._currentValue=b}function Ef(a){zf=a;Bf=Af=null;a.firstContextDependency=null}
function Ff(a,b){if(Bf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Bf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Af?(null===zf?t("293"):void 0,zf.firstContextDependency=Af=b):Af=Af.next=b}return a._currentValue}function Gf(a,b){for(var c=0;c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}var Hf=0,M=null,If=null,N=null,Jf=null,O=null,Kf=0,Lf=null,Mf=!1,Nf=!1,Of=null,Pf=0;function Qf(){null===M?t("298"):void 0;return M}
function Rf(a,b,c,d){for(;Nf;)Nf=!1,Pf+=1,Lf=O=N=null,c=a(b,d);Of=null;Pf=0;a=M;a.memoizedState=Jf;a.expirationTime=Kf;a.updateQueue=Lf;a=null!==N&&null!==N.next;Hf=0;O=Jf=N=If=M=null;Kf=0;Lf=null;a?t("300"):void 0;return c}function Sf(){Hf=0;O=Jf=N=If=M=null;Kf=0;Lf=null;Nf=!1;Of=null;Pf=0}function Tf(){return{memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null}}
function Uf(a){return{memoizedState:a.memoizedState,baseState:a.baseState,queue:a.queue,baseUpdate:a.baseUpdate,next:null}}function Vf(){if(null===O)null===Jf?(Mf=!1,N=If,Jf=O=null===N?Tf():Uf(N)):(Mf=!0,N=If,O=Jf);else if(null===O.next){Mf=!1;if(null===N)var a=Tf();else N=N.next,a=null===N?Tf():Uf(N);O=O.next=a}else Mf=!0,O=O.next,N=null!==N?N.next:null;return O}function Wf(a,b){return"function"===typeof b?b(a):b}
function Xf(a,b,c){M=Qf();O=Vf();var d=O.queue;if(null!==d){if(Mf){b=d.dispatch;if(null!==Of){var e=Of.get(d);if(void 0!==e){Of.delete(d);c=O.memoizedState;do c=a(c,e.action),e=e.next;while(null!==e);O.memoizedState=c;O.baseUpdate===d.last&&(O.baseState=c);return[c,b]}}return[O.memoizedState,b]}b=d.last;var f=O.baseUpdate;null!==f?(null!==b&&(b.next=null),b=f.next):b=null!==b?b.next:null;if(null!==b){c=O.baseState;var g=e=null,h=b,k=!1;do{var l=h.expirationTime;l<Hf?(k||(k=!0,g=f,e=c),l>Kf&&(Kf=l)):
c=a(c,h.action);f=h;h=h.next}while(null!==h&&h!==b);k||(g=f,e=c);O.memoizedState=c;O.baseUpdate=g;O.baseState=e}return[O.memoizedState,d.dispatch]}a===Wf?"function"===typeof b&&(b=b()):void 0!==c&&null!==c&&(b=a(b,c));O.memoizedState=O.baseState=b;d=O.queue={last:null,dispatch:null};a=d.dispatch=Yf.bind(null,M,d);return[O.memoizedState,a]}
function Zf(a,b,c,d){a={tag:a,create:b,destroy:c,inputs:d,next:null};null===Lf?(Lf={lastEffect:null},Lf.lastEffect=a.next=a):(b=Lf.lastEffect,null===b?Lf.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Lf.lastEffect=a));return a}function $f(a,b){ag(4,36,a,b)}function ag(a,b,c,d){M=Qf();O=Vf();d=void 0!==d&&null!==d?d:[c];var e=null;if(null!==N){var f=N.memoizedState;e=f.destroy;if(Gf(d,f.inputs)){Zf(0,c,e,d);return}}M.effectTag|=a;O.memoizedState=Zf(b,c,e,d)}
function Yf(a,b,c){25>Pf?void 0:t("301");var d=a.alternate;if(a===M||null!==d&&d===M)if(Nf=!0,a={expirationTime:Hf,action:c,next:null},null===Of&&(Of=new Map),d=Of.get(b),void 0===d)Of.set(b,a);else{for(b=d;null!==b.next;)b=b.next;b.next=a}else{d=bg();d=cg(d,a);c={expirationTime:d,action:c,next:null};dg();var e=b.last;if(null===e)c.next=c;else{var f=e.next;null!==f&&(c.next=f);e.next=c}b.last=c;eg(a,d)}}var fg={},gg={current:fg},hg={current:fg},ig={current:fg};
function jg(a){a===fg?t("174"):void 0;return a}function kg(a,b){I(ig,b,a);I(hg,a,a);I(gg,fg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}H(gg,a);I(gg,b,a)}function lg(a){H(gg,a);H(hg,a);H(ig,a)}function mg(a){jg(ig.current);var b=jg(gg.current);var c=le(b,a.type);b!==c&&(I(hg,a,a),I(gg,c,a))}function ng(a){hg.current===a&&(H(gg,a),H(hg,a))}
function Q(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function og(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var pg=Xb.ReactCurrentDispatcher,qg=(new aa.Component).refs;
function rg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var sg={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=bg();d=cg(d,a);var e=of(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);dg();qf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=bg();d=cg(d,a);var e=of(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);dg();qf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=bg();c=cg(c,a);var d=of(c);d.tag=
2;void 0!==b&&null!==b&&(d.callback=b);dg();qf(a,d);eg(a,c)}};function tg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function ug(a,b,c){var d=!1,e=Ke;var f=b.contextType;"object"===typeof f&&null!==f?f=pg.current.readContext(f):(e=L(b)?Le:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Me(a,e):Ke);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&sg.enqueueReplaceState(b,b.state,null)}
function wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=qg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=pg.current.readContext(f):(f=L(b)?Le:J.current,e.context=Me(a,f));f=a.updateQueue;null!==f&&(uf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(rg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(uf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var xg=Array.isArray;
function yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?t("289"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===qg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("290",a)}return a}
function Ag(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Bg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=af(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ef(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=yg(a,b,c),d.return=a,d;d=bf(c.type,c.key,c.props,null,a.mode,d);d.ref=yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=ff(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=cf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function q(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ef(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=bf(b.type,b.key,b.props,null,a.mode,c),c.ref=yg(a,null,b),c.return=a,c;case $b:return b=ff(b,a.mode,c),b.return=a,b}if(xg(b)||
lc(b))return b=cf(b,a.mode,c,null),b.return=a,b;Ag(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(xg(c)||lc(c))return null!==e?null:m(a,b,c,d,null);Ag(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(xg(d)||lc(d))return a=a.get(c)||null,m(b,a,d,e,null);Ag(b,d)}return null}function C(e,g,h,k){for(var l=null,p=null,m=g,u=g=0,r=null;null!==m&&u<h.length;u++){m.index>u?(r=m,m=null):r=m.sibling;var w=x(e,m,h[u],k);if(null===w){null===m&&(m=r);break}a&&
m&&null===w.alternate&&b(e,m);g=f(w,g,u);null===p?l=w:p.sibling=w;p=w;m=r}if(u===h.length)return c(e,m),l;if(null===m){for(;u<h.length;u++)if(m=q(e,h[u],k))g=f(m,g,u),null===p?l=m:p.sibling=m,p=m;return l}for(m=d(e,m);u<h.length;u++)if(r=A(m,e,u,h[u],k))a&&null!==r.alternate&&m.delete(null===r.key?u:r.key),g=f(r,g,u),null===p?l=r:p.sibling=r,p=r;a&&m.forEach(function(a){return b(e,a)});return l}function V(e,g,h,k){var l=lc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;
for(var m=l=null,p=g,u=g=0,r=null,w=h.next();null!==p&&!w.done;u++,w=h.next()){p.index>u?(r=p,p=null):r=p.sibling;var z=x(e,p,w.value,k);if(null===z){p||(p=r);break}a&&p&&null===z.alternate&&b(e,p);g=f(z,g,u);null===m?l=z:m.sibling=z;m=z;p=r}if(w.done)return c(e,p),l;if(null===p){for(;!w.done;u++,w=h.next())w=q(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(p=d(e,p);!w.done;u++,w=h.next())w=A(p,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&p.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,h);d.ref=yg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===ac?(d=cf(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=bf(f.type,f.key,f.props,null,a.mode,h),h.ref=yg(a,d,f),h.return=a,a=h)}return g(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ff(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=ef(f,a.mode,h),d.return=a,a=d),g(a);if(xg(f))return C(a,d,f,h);if(lc(f))return V(a,d,f,h);l&&Ag(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var Cg=Bg(!0),Dg=Bg(!1),Eg=null,Fg=null,Gg=!1;
function Hg(a,b){var c=Ye(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Ig(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function Jg(a){if(Gg){var b=Fg;if(b){var c=b;if(!Ig(a,b)){b=Ge(c);if(!b||!Ig(a,b)){a.effectTag|=2;Gg=!1;Eg=a;return}Hg(Eg,c)}Eg=a;Fg=He(b)}else a.effectTag|=2,Gg=!1,Eg=a}}function Kg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Eg=a}function Lg(a){if(a!==Eg)return!1;if(!Gg)return Kg(a),Gg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ce(b,a.memoizedProps))for(b=Fg;b;)Hg(a,b),b=Ge(b);Kg(a);Fg=Eg?Ge(a.stateNode):null;return!0}function Mg(){Fg=Eg=null;Gg=!1}var Ng=Xb.ReactCurrentOwner;
function R(a,b,c,d){b.child=null===a?Dg(b,null,c,d):Cg(b,a.child,c,d)}function Og(a,b,c,d,e){c=c.render;var f=b.ref;Ef(b,e);Hf=e;M=b;If=null!==a?a.memoizedState:null;var g=c(d,f);g=Rf(c,d,g,f);b.effectTag|=1;R(a,b,g,e);return b.child}
function Pg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ze(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Qg(a,b,g,d,e,f);a=bf(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Rg(a,b,f);b.effectTag|=1;a=af(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Qg(a,b,c,d,e,f){return null!==a&&e<f&&jd(a.memoizedProps,d)&&a.ref===b.ref?Rg(a,b,f):Sg(a,b,c,d,f)}function Tg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Sg(a,b,c,d,e){var f=L(c)?Le:J.current;f=Me(b,f);Ef(b,e);Hf=e;M=b;If=null!==a?a.memoizedState:null;var g=c(d,f);g=Rf(c,d,g,f);b.effectTag|=1;R(a,b,g,e);return b.child}
function Ug(a,b,c,d,e){if(L(c)){var f=!0;Re(b)}else f=!1;Ef(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),ug(b,c,d,e),wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=pg.current.readContext(l):(l=L(c)?Le:J.current,l=Me(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&vg(b,g,d,l);lf=!1;var x=b.memoizedState;k=g.state=x;var A=b.updateQueue;null!==A&&(uf(b,A,d,g,e),k=b.memoizedState);h!==d||x!==k||K.current||lf?("function"===typeof m&&(rg(b,c,m,d),k=b.memoizedState),(h=lf||tg(b,c,h,d,x,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:Q(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=pg.current.readContext(l):(l=L(c)?Le:J.current,l=Me(b,l)),m=c.getDerivedStateFromProps,
(q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&vg(b,g,d,l),lf=!1,k=b.memoizedState,x=g.state=k,A=b.updateQueue,null!==A&&(uf(b,A,d,g,e),x=b.memoizedState),h!==d||k!==x||K.current||lf?("function"===typeof m&&(rg(b,c,m,d),x=b.memoizedState),(m=lf||tg(b,c,h,d,k,x,l))?(q||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Vg(a,b,c,d,f,e)}
function Vg(a,b,c,d,e,f){Tg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Se(b,c,!1),Rg(a,b,f);d=b.stateNode;Ng.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Cg(b,a.child,null,f),b.child=Cg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Se(b,c,!0);return b.child}function Wg(a){var b=a.stateNode;b.pendingContext?Pe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Pe(a,b.context,!1);kg(a,b.containerInfo)}
function Xg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=cf(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=cf(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Dg(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=af(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=af(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Cg(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=cf(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=cf(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Cg(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Rg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=af(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=af(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Yg(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!K.current&&d<c){switch(b.tag){case 3:Wg(b);Mg();break;case 5:mg(b);break;case 1:L(b.type)&&Re(b);break;case 4:kg(b,b.stateNode.containerInfo);break;case 10:Cf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Xg(a,b,c);b=Rg(a,b,c);return null!==b?b.sibling:null}}return Rg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==
a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Me(b,J.current);Ef(b,c);Hf=c;M=b;If=null;var f=d(a,e);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=1;Sf();L(d)?(e=!0,Re(b)):e=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&rg(b,d,g,a);f.updater=sg;b.stateNode=f;f._reactInternalFiber=b;wg(b,d,a,c);b=Vg(null,b,d,!0,e,c)}else b.tag=0,f=Rf(d,
a,f,e),R(null,b,f,c),b=b.child;return b;case 16:f=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);e=b.pendingProps;a=og(f);b.type=a;f=b.tag=$e(a);e=Q(a,e);g=void 0;switch(f){case 0:g=Sg(null,b,a,e,c);break;case 1:g=Ug(null,b,a,e,c);break;case 11:g=Og(null,b,a,e,c);break;case 14:g=Pg(null,b,a,Q(a.type,e),d,c);break;default:t("306",a,"")}return g;case 0:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Q(d,f),Sg(a,b,d,f,c);case 1:return d=b.type,f=b.pendingProps,f=b.elementType===
d?f:Q(d,f),Ug(a,b,d,f,c);case 3:Wg(b);d=b.updateQueue;null===d?t("282"):void 0;f=b.memoizedState;f=null!==f?f.element:null;uf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===f)Mg(),b=Rg(a,b,c);else{f=b.stateNode;if(f=(null===a||null===a.child)&&f.hydrate)Fg=He(b.stateNode.containerInfo),Eg=b,f=Gg=!0;f?(b.effectTag|=2,b.child=Dg(b,null,d,c)):(R(a,b,d,c),Mg());b=b.child}return b;case 5:return mg(b),null===a&&Jg(b),d=b.type,f=b.pendingProps,e=null!==a?a.memoizedProps:null,g=f.children,Ce(d,
f)?g=null:null!==e&&Ce(d,e)&&(b.effectTag|=16),Tg(a,b),1!==c&&b.mode&1&&f.hidden?(b.expirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Jg(b),null;case 13:return Xg(a,b,c);case 4:return kg(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Cg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Q(d,f),Og(a,b,d,f,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,
b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;f=b.pendingProps;g=b.memoizedProps;e=f.value;Cf(b,e);if(null!==g){var h=g.value;e=hd(h,e)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,e):1073741823)|0;if(0===e){if(g.children===f.children&&!K.current){b=Rg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&e)){if(1===g.tag){var k=of(c);k.tag=2;qf(g,k)}g.expirationTime<
c&&(g.expirationTime=c);k=g.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(l.childExpirationTime<c)l.childExpirationTime=c,null!==k&&k.childExpirationTime<c&&(k.childExpirationTime=c);else if(null!==k&&k.childExpirationTime<c)k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;
if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}R(a,b,f.children,c);b=b.child}return b;case 9:return f=b.type,e=b.pendingProps,d=e.children,Ef(b,c),f=Ff(f,e.unstable_observedBits),d=d(f),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return f=b.type,e=Q(f,b.pendingProps),e=Q(f.type,e),Pg(a,b,f,e,d,c);case 15:return Qg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Q(d,f),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=
!0,Re(b)):a=!1,Ef(b,c),ug(b,d,f,c),wg(b,d,f,c),Vg(null,b,d,!0,a,c);default:t("156")}}function Zg(a){a.effectTag|=4}var $g=void 0,ah=void 0,bh=void 0,ch=void 0;$g=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};ah=function(){};
bh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;jg(gg.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=xe)}ue(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ta.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ta.hasOwnProperty(c)?(null!=l&&we(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Zg(b)}};ch=function(a,b,c,d){c!==d&&Zg(b)};
var dh="function"===typeof WeakSet?WeakSet:Set;function eh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=nc(c));null!==c&&mc(c.type);b=b.value;null!==a&&1===a.tag&&mc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ih(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){jh(a,c)}else b.current=null}
function kh(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=null;null!==e&&e()}0!==(d.tag&b)&&(e=d.create,e=e(),"function"!==typeof e&&(e=null),d.destroy=e);d=d.next}while(d!==c)}}
function lh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=re("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function mh(a){"function"===typeof Ue&&Ue(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d()}catch(f){jh(e,f)}}c=c.next}while(c!==b)}break;case 1:ih(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){jh(a,f)}break;case 5:ih(a);break;case 4:nh(a)}}
function oh(a){return 5===a.tag||3===a.tag||4===a.tag}
function ph(a){a:{for(var b=a.return;null!==b;){if(oh(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||oh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=xe)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function nh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(mh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):mh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function qh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:kh(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Fe(c,f,e,a,d,b)}break;case 6:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=bg()));null!==a&&lh(a,d);c=b.updateQueue;
if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new dh);c.forEach(function(a){var c=rh.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:t("163")}}var sh="function"===typeof WeakMap?WeakMap:Map;function th(a,b,c){c=of(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){uh(d);eh(a,b)};return c}
function vh(a,b,c){c=of(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===wh?wh=new Set([this]):wh.add(this));var c=b.value,e=b.stack;eh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function xh(a){switch(a.tag){case 1:L(a.type)&&Ne(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return lg(a),Oe(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return ng(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 4:return lg(a),null;case 10:return Df(a),null;default:return null}}
var yh={readContext:Ff,useCallback:function(a,b){M=Qf();O=Vf();b=void 0!==b&&null!==b?b:[a];var c=O.memoizedState;if(null!==c&&Gf(b,c[1]))return c[0];O.memoizedState=[a,b];return a},useContext:function(a,b){Qf();return Ff(a,b)},useEffect:function(a,b){ag(516,192,a,b)},useImperativeMethods:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):[a,b];$f(function(){if("function"===typeof a){var c=b();a(c);return function(){return a(null)}}if(null!==a&&void 0!==a)return c=b(),a.current=c,function(){a.current=
null}},c)},useLayoutEffect:$f,useMemo:function(a,b){M=Qf();O=Vf();b=void 0!==b&&null!==b?b:[a];var c=O.memoizedState;if(null!==c&&Gf(b,c[1]))return c[0];a=a();O.memoizedState=[a,b];return a},useReducer:Xf,useRef:function(a){M=Qf();O=Vf();null===O.memoizedState?(a={current:a},O.memoizedState=a):a=O.memoizedState;return a},useState:function(a){return Xf(Wf,a)}},zh=Xb.ReactCurrentDispatcher,Ah=Xb.ReactCurrentOwner,Bh=1073741822,Ch=0,Dh=!1,S=null,Eh=null,T=0,Fh=-1,Gh=!1,U=null,Hh=!1,Ih=null,Jh=null,Kh=
null,wh=null;function Lh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ne(b);break;case 3:lg(b);Oe(b);break;case 5:ng(b);break;case 4:lg(b);break;case 10:Df(b)}a=a.return}Eh=null;T=0;Fh=-1;Gh=!1;S=null}function Mh(a,b){Kh=Jh=Ih=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;kh(128,0,f);kh(0,64,f)}catch(g){d=!0,e=g}d&&jh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Nh(a,c)}
function dg(){null!==Kh&&(ba.unstable_cancelCallback(Jh),Kh())}
function Oh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){S=a;a:{var e=b;b=a;var f=T;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Ne(b);break;case 3:lg(b);Oe(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Lg(b),b.effectTag&=-3;ah(b);break;case 5:ng(b);var h=jg(ig.current);f=b.type;if(null!==e&&null!=b.stateNode)bh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var k=jg(gg.current);if(Lg(b)){g=b;e=g.stateNode;var l=g.type,m=g.memoizedProps,q=h;e[Ha]=g;e[Ia]=m;f=void 0;h=l;switch(h){case "iframe":case "object":G("load",e);break;case "video":case "audio":for(l=0;l<cb.length;l++)G(cb[l],e);break;case "source":G("error",e);break;case "img":case "image":case "link":G("error",e);G("load",e);break;case "form":G("reset",e);G("submit",e);break;case "details":G("toggle",e);break;case "input":Ac(e,m);G("invalid",e);we(q,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};G("invalid",e);we(q,"onChange");break;case "textarea":ge(e,m),G("invalid",e),we(q,"onChange")}ue(h,m);l=null;for(f in m)m.hasOwnProperty(f)&&(k=m[f],"children"===f?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ta.hasOwnProperty(f)&&null!=k&&we(q,f));switch(h){case "input":Vb(e);Ec(e,m,!0);break;case "textarea":Vb(e);ie(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=xe)}f=l;g.updateQueue=f;g=null!==f?!0:!1;g&&Zg(b)}else{m=b;e=f;q=g;l=9===h.nodeType?h:h.ownerDocument;k===je.html&&(k=ke(e));k===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof q.is?l=l.createElement(e,{is:q.is}):(l=l.createElement(e),"select"===e&&q.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ha]=m;e[Ia]=g;$g(e,b,!1,!1);q=e;l=f;m=g;var x=h,A=ve(l,m);switch(l){case "iframe":case "object":G("load",
q);h=m;break;case "video":case "audio":for(h=0;h<cb.length;h++)G(cb[h],q);h=m;break;case "source":G("error",q);h=m;break;case "img":case "image":case "link":G("error",q);G("load",q);h=m;break;case "form":G("reset",q);G("submit",q);h=m;break;case "details":G("toggle",q);h=m;break;case "input":Ac(q,m);h=zc(q,m);G("invalid",q);we(x,"onChange");break;case "option":h=de(q,m);break;case "select":q._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});G("invalid",q);we(x,"onChange");break;case "textarea":ge(q,
m);h=fe(q,m);G("invalid",q);we(x,"onChange");break;default:h=m}ue(l,h);k=void 0;var C=l,V=q,w=h;for(k in w)if(w.hasOwnProperty(k)){var p=w[k];"style"===k?se(V,p):"dangerouslySetInnerHTML"===k?(p=p?p.__html:void 0,null!=p&&ne(V,p)):"children"===k?"string"===typeof p?("textarea"!==C||""!==p)&&oe(V,p):"number"===typeof p&&oe(V,""+p):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ta.hasOwnProperty(k)?null!=p&&we(x,k):null!=p&&xc(V,k,p,A))}switch(l){case "input":Vb(q);
Ec(q,m,!1);break;case "textarea":Vb(q);ie(q,m);break;case "option":null!=m.value&&q.setAttribute("value",""+yc(m.value));break;case "select":h=q;h.multiple=!!m.multiple;q=m.value;null!=q?ee(h,!!m.multiple,q,!1):null!=m.defaultValue&&ee(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(q.onclick=xe)}(g=Be(f,g))&&Zg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 6:e&&null!=b.stateNode?ch(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?t("166"):void 0),e=jg(ig.current),jg(gg.current),Lg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Ha]=g,(g=f.nodeValue!==e)&&Zg(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Ha]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;S=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g!==f||0===(b.effectTag&1)&&g)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:lg(b);ah(b);break;case 10:Df(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Ne(b);break;default:t("156")}S=null}b=a;if(1===T||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==S)return S;null!==c&&0===(c.effectTag&1024)&&(null===
c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=xh(a,T);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function Ph(a){var b=Yg(a.alternate,a,T);a.memoizedProps=a.pendingProps;null===b&&(b=Oh(a));Ah.current=null;return b}
function Qh(a,b){Dh?t("243"):void 0;dg();Dh=!0;zh.current=yh;var c=a.nextExpirationTimeToWorkOn;if(c!==T||a!==Eh||null===S)Lh(),Eh=a,T=c,S=af(Eh.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;do{try{if(b)for(;null!==S&&!Rh();)S=Ph(S);else for(;null!==S;)S=Ph(S)}catch(C){if(Bf=Af=zf=null,Sf(),null===S)d=!0,uh(C);else{null===S?t("271"):void 0;var e=S,f=e.return;if(null===f)d=!0,uh(C);else{a:{var g=a,h=f,k=e,l=C;f=T;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===
typeof l&&"function"===typeof l.then){var m=l;l=h;var q=-1,x=-1;do{if(13===l.tag){var A=l.alternate;if(null!==A&&(A=A.memoizedState,null!==A)){x=10*(1073741822-A.timedOutAt);break}A=l.pendingProps.maxDuration;if("number"===typeof A)if(0>=A)q=0;else if(-1===q||A<q)q=A}l=l.return}while(null!==l);l=h;do{if(A=13===l.tag)A=void 0===l.memoizedProps.fallback?!1:null===l.memoizedState;if(A){h=l.updateQueue;null===h?l.updateQueue=new Set([m]):h.add(m);if(0===(l.mode&1)){l.effectTag|=64;k.effectTag&=-1957;
1===k.tag&&(null===k.alternate?k.tag=17:(f=of(1073741823),f.tag=2,qf(k,f)));k.expirationTime=1073741823;break a}k=g.pingCache;null===k?(k=g.pingCache=new sh,h=new Set,k.set(m,h)):(h=k.get(m),void 0===h&&(h=new Set,k.set(m,h)));h.has(f)||(h.add(f),k=Sh.bind(null,g,m,f),m.then(k,k));-1===q?g=1073741823:(-1===x&&(x=10*(1073741822-kf(g,f))-5E3),g=x+q);0<=g&&Fh<g&&(Fh=g);l.effectTag|=2048;l.expirationTime=f;break a}l=l.return}while(null!==l);l=Error((mc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
nc(k))}Gh=!0;l=xf(l,k);g=h;do{switch(g.tag){case 3:g.effectTag|=2048;g.expirationTime=f;f=th(g,l,f);rf(g,f);break a;case 1:if(m=l,q=g.type,x=g.stateNode,0===(g.effectTag&64)&&("function"===typeof q.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===wh||!wh.has(x)))){g.effectTag|=2048;g.expirationTime=f;f=vh(g,m,f);rf(g,f);break a}}g=g.return}while(null!==g)}S=Oh(e);continue}}}break}while(1);Dh=!1;Bf=Af=zf=zh.current=null;Sf();if(d)Eh=null,a.finishedWork=null;else if(null!==
S)a.finishedWork=null;else{d=a.current.alternate;null===d?t("281"):void 0;Eh=null;if(Gh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<c||0!==f&&f<c||0!==g&&g<c){jf(a,c);Th(a,d,c,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;c=a.nextExpirationTimeToWorkOn=c;b=a.expirationTime=1073741823;Th(a,d,c,b,-1);return}}b&&-1!==Fh?(jf(a,c),b=10*(1073741822-kf(a,c)),b<Fh&&(Fh=b),b=10*(1073741822-bg()),b=Fh-b,Th(a,d,c,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=
c,a.finishedWork=d)}}function jh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===wh||!wh.has(d))){a=xf(b,a);a=vh(c,a,1073741823);qf(c,a);eg(c,1073741823);return}break;case 3:a=xf(b,a);a=th(c,a,1073741823);qf(c,a);eg(c,1073741823);return}c=c.return}3===a.tag&&(c=xf(b,a),c=th(a,c,1073741823),qf(a,c),eg(a,1073741823))}
function cg(a,b){0!==Ch?a=Ch:Dh?a=Hh?1073741823:T:b.mode&1?(a=Uh?1073741822-10*(((1073741822-a+15)/10|0)+1):1073741822-25*(((1073741822-a+500)/25|0)+1),null!==Eh&&a===T&&--a):a=1073741823;Uh&&(0===Vh||a<Vh)&&(Vh=a);return a}
function Sh(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Eh&&T===c)Eh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;hf(c,a);c=a.expirationTime;0!==c&&Nh(a,c)}}function rh(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=bg();b=cg(b,a);a=Wh(a,b);null!==a&&(gf(a,b),b=a.expirationTime,0!==b&&Nh(a,b))}
function Wh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function eg(a,b){a=Wh(a,b);null!==a&&(!Dh&&0!==T&&b>T&&Lh(),gf(a,b),Dh&&!Hh&&Eh===a||Nh(a,a.expirationTime),Xh>Yh&&(Xh=0,t("185")))}function Zh(a,b,c,d,e){var f=Ch;Ch=1073741823;try{return a(b,c,d,e)}finally{Ch=f}}var $h=null,X=null,ai=0,bi=void 0,W=!1,ci=null,Y=0,Vh=0,di=!1,ei=null,Z=!1,fi=!1,Uh=!1,gi=null,hi=ba.unstable_now(),ii=1073741822-(hi/10|0),ji=ii,Yh=50,Xh=0,ki=null;function li(){ii=1073741822-((ba.unstable_now()-hi)/10|0)}
function mi(a,b){if(0!==ai){if(b<ai)return;null!==bi&&ba.unstable_cancelCallback(bi)}ai=b;a=ba.unstable_now()-hi;bi=ba.unstable_scheduleCallback(ni,{timeout:10*(1073741822-b)-a})}function Th(a,b,c,d,e){a.expirationTime=d;0!==e||Rh()?0<e&&(a.timeoutHandle=De(oi.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function oi(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;li();ji=ii;pi(a,c)}function bg(){if(W)return ji;qi();if(0===Y||1===Y)li(),ji=ii;return ji}
function Nh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===X?($h=X=a,a.nextScheduledRoot=a):(X=X.nextScheduledRoot=a,X.nextScheduledRoot=$h)):b>a.expirationTime&&(a.expirationTime=b);W||(Z?fi&&(ci=a,Y=1073741823,ri(a,1073741823,!1)):1073741823===b?si(1073741823,!1):mi(a,b))}
function qi(){var a=0,b=null;if(null!==X)for(var c=X,d=$h;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===X?t("244"):void 0;if(d===d.nextScheduledRoot){$h=X=d.nextScheduledRoot=null;break}else if(d===$h)$h=e=d.nextScheduledRoot,X.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===X){X=c;X.nextScheduledRoot=$h;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===X)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}ci=b;Y=a}var ti=!1;function Rh(){return ti?!0:ba.unstable_shouldYield()?ti=!0:!1}function ni(){try{if(!Rh()&&null!==$h){li();var a=$h;do{var b=a.expirationTime;0!==b&&ii<=b&&(a.nextExpirationTimeToWorkOn=ii);a=a.nextScheduledRoot}while(a!==$h)}si(0,!0)}finally{ti=!1}}
function si(a,b){qi();if(b)for(li(),ji=ii;null!==ci&&0!==Y&&a<=Y&&!(ti&&ii>Y);)ri(ci,Y,ii>Y),qi(),li(),ji=ii;else for(;null!==ci&&0!==Y&&a<=Y;)ri(ci,Y,!1),qi();b&&(ai=0,bi=null);0!==Y&&mi(ci,Y);Xh=0;ki=null;if(null!==gi)for(a=gi,gi=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){di||(di=!0,ei=d)}}if(di)throw a=ei,ei=null,di=!1,a;}function pi(a,b){W?t("253"):void 0;ci=a;Y=b;ri(a,b,!1);si(1073741823,!1)}
function ri(a,b,c){W?t("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?ui(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),Qh(a,c),d=a.finishedWork,null!==d&&(Rh()?a.finishedWork=d:ui(a,d,b)))}else d=a.finishedWork,null!==d?ui(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),Qh(a,c),d=a.finishedWork,null!==d&&ui(a,d,b));W=!1}
function ui(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===gi?gi=[d]:gi.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===ki?Xh++:(ki=a,Xh=0);Hh=Dh=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
0):(d<a.latestPingedTime&&(a.latestPingedTime=0),e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?gf(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,gf(a,d)):d>e&&gf(a,d));hf(0,a);Ah.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ye=Hd;e=Td();if(Ud(e)){if("selectionStart"in
e)var f={start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(pb){f=null;break a}var l=0,m=-1,q=-1,x=0,A=0,C=e,V=null;b:for(;;){for(var w;;){C!==f||0!==h&&3!==C.nodeType||(m=l+h);C!==k||0!==g&&3!==C.nodeType||(q=l+g);3===C.nodeType&&(l+=C.nodeValue.length);if(null===(w=C.firstChild))break;V=C;C=w}for(;;){if(C===
e)break b;V===f&&++x===h&&(m=l);V===k&&++A===g&&(q=l);if(null!==(w=C.nextSibling))break;C=V;V=C.parentNode}C=w}f=-1===m||-1===q?null:{start:m,end:q}}else f=null}f=f||{start:0,end:0}}else f=null;ze={focusedElem:e,selectionRange:f};Hd=!1;for(U=d;null!==U;){e=!1;f=void 0;try{for(;null!==U;){if(U.effectTag&256)a:{var p=U.alternate;h=U;switch(h.tag){case 0:case 11:case 15:kh(2,0,h);break a;case 1:if(h.effectTag&256&&null!==p){var u=p.memoizedProps,z=p.memoizedState,zg=h.stateNode,yi=zg.getSnapshotBeforeUpdate(h.elementType===
h.type?u:Q(h.type,u),z);zg.__reactInternalSnapshotBeforeUpdate=yi}break a;case 3:case 5:case 6:case 4:case 17:break a;default:t("163")}}U=U.nextEffect}}catch(pb){e=!0,f=pb}e&&(null===U?t("178"):void 0,jh(U,f),null!==U&&(U=U.nextEffect))}for(U=d;null!==U;){p=!1;u=void 0;try{for(;null!==U;){var y=U.effectTag;y&16&&oe(U.stateNode,"");if(y&128){var D=U.alternate;if(null!==D){var r=D.ref;null!==r&&("function"===typeof r?r(null):r.current=null)}}switch(y&14){case 2:ph(U);U.effectTag&=-3;break;case 6:ph(U);
U.effectTag&=-3;qh(U.alternate,U);break;case 4:qh(U.alternate,U);break;case 8:z=U;nh(z);z.return=null;z.child=null;z.memoizedState=null;z.updateQueue=null;var P=z.alternate;null!==P&&(P.return=null,P.child=null,P.memoizedState=null,P.updateQueue=null)}U=U.nextEffect}}catch(pb){p=!0,u=pb}p&&(null===U?t("178"):void 0,jh(U,u),null!==U&&(U=U.nextEffect))}r=ze;D=Td();y=r.focusedElem;p=r.selectionRange;if(D!==y&&y&&y.ownerDocument&&Sd(y.ownerDocument.documentElement,y)){null!==p&&Ud(y)&&(D=p.start,r=p.end,
void 0===r&&(r=D),"selectionStart"in y?(y.selectionStart=D,y.selectionEnd=Math.min(r,y.value.length)):(r=(D=y.ownerDocument||document)&&D.defaultView||window,r.getSelection&&(r=r.getSelection(),u=y.textContent.length,P=Math.min(p.start,u),p=void 0===p.end?P:Math.min(p.end,u),!r.extend&&P>p&&(u=p,p=P,P=u),u=Rd(y,P),z=Rd(y,p),u&&z&&(1!==r.rangeCount||r.anchorNode!==u.node||r.anchorOffset!==u.offset||r.focusNode!==z.node||r.focusOffset!==z.offset)&&(D=D.createRange(),D.setStart(u.node,u.offset),r.removeAllRanges(),
P>p?(r.addRange(D),r.extend(z.node,z.offset)):(D.setEnd(z.node,z.offset),r.addRange(D))))));D=[];for(r=y;r=r.parentNode;)1===r.nodeType&&D.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof y.focus&&y.focus();for(y=0;y<D.length;y++)r=D[y],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}ze=null;Hd=!!ye;ye=null;a.current=b;for(U=d;null!==U;){y=!1;D=void 0;try{for(r=a,P=c;null!==U;){var pa=U.effectTag;if(pa&36){var Tb=U.alternate;p=U;u=P;switch(p.tag){case 0:case 11:case 15:kh(16,
32,p);break;case 1:var Zc=p.stateNode;if(p.effectTag&4)if(null===Tb)Zc.componentDidMount();else{var Mi=p.elementType===p.type?Tb.memoizedProps:Q(p.type,Tb.memoizedProps);Zc.componentDidUpdate(Mi,Tb.memoizedState,Zc.__reactInternalSnapshotBeforeUpdate)}var fh=p.updateQueue;null!==fh&&vf(p,fh,Zc,u);break;case 3:var gh=p.updateQueue;if(null!==gh){z=null;if(null!==p.child)switch(p.child.tag){case 5:z=p.child.stateNode;break;case 1:z=p.child.stateNode}vf(p,gh,z,u)}break;case 5:var Ni=p.stateNode;null===
Tb&&p.effectTag&4&&Be(p.type,p.memoizedProps)&&Ni.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:t("163")}}if(pa&128){var $c=U.ref;if(null!==$c){var hh=U.stateNode;switch(U.tag){case 5:var Ae=hh;break;default:Ae=hh}"function"===typeof $c?$c(Ae):$c.current=Ae}}pa&512&&(Ih=r);U=U.nextEffect}}catch(pb){y=!0,D=pb}y&&(null===U?t("178"):void 0,jh(U,D),null!==U&&(U=U.nextEffect))}null!==d&&null!==Ih&&(pa=Mh.bind(null,a,d),Jh=ba.unstable_scheduleCallback(pa),Kh=
pa);Dh=Hh=!1;"function"===typeof Te&&Te(b.stateNode);pa=b.expirationTime;b=b.childExpirationTime;b=b>pa?b:pa;0===b&&(wh=null);a.expirationTime=b;a.finishedWork=null}function uh(a){null===ci?t("246"):void 0;ci.expirationTime=0;di||(di=!0,ei=a)}function vi(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||si(1073741823,!1)}}function wi(a,b){if(Z&&!fi){fi=!0;try{return a(b)}finally{fi=!1}}return a(b)}
function xi(a,b,c){if(Uh)return a(b,c);Z||W||0===Vh||(si(Vh,!1),Vh=0);var d=Uh,e=Z;Z=Uh=!0;try{return a(b,c)}finally{Uh=d,(Z=e)||W||si(1073741823,!1)}}
function zi(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===kd(c)&&1===c.tag?void 0:t("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(L(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);t("171");g=void 0}if(1===c.tag){var h=c.type;if(L(h)){c=Qe(c,h,g);break a}}c=g}else c=Ke;null===b.context?b.context=c:b.pendingContext=c;b=e;e=of(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
dg();qf(f,e);eg(f,d);return d}function Ai(a,b,c,d){var e=b.current,f=bg();e=cg(f,e);return zi(a,b,c,e,d)}function Bi(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Ci(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(a,b,c){switch(b){case "input":Cc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ma(d);e?void 0:t("90");Wb(d);Cc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Di(a){var b=1073741822-25*(((1073741822-bg()+500)/25|0)+1);b>=Bh&&(b=Bh-1);this._expirationTime=Bh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Di.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ei;zi(a,b,null,c,d._onCommit);return d};
Di.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Di.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;pi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Di.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ei(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ei.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ei.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function Fi(a,b,c){b=Ye(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Fi.prototype.render=function(a,b){var c=this._internalRoot,d=new Ei;b=void 0===b?null:b;null!==b&&d.then(b);Ai(a,c,null,d._onCommit);return d};Fi.prototype.unmount=function(a){var b=this._internalRoot,c=new Ei;a=void 0===a?null:a;null!==a&&c.then(a);Ai(null,b,null,c._onCommit);return c};Fi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ei;c=void 0===c?null:c;null!==c&&e.then(c);Ai(b,d,a,e._onCommit);return e};
Fi.prototype.createBatch=function(){var a=new Di(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Gi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=vi;Kb=xi;Lb=function(){W||0===Vh||(si(Vh,!1),Vh=0)};
function Hi(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Fi(a,!1,b)}
function Ii(a,b,c,d,e){Gi(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Bi(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Hi(c,d);if("function"===typeof e){var h=e;e=function(){var a=Bi(f._internalRoot);h.call(a)}}wi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Bi(f._internalRoot)}
function Ji(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Gi(b)?void 0:t("200");return Ci(a,b,null,c)}
var Li={createPortal:Ji,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=nd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Ii(null,a,b,!0,c)},render:function(a,b,c){return Ii(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return Ii(a,b,c,!1,d)},unmountComponentAtNode:function(a){Gi(a)?
void 0:t("40");return a._reactRootContainer?(wi(function(){Ii(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ji.apply(void 0,arguments)},unstable_batchedUpdates:vi,unstable_interactiveUpdates:xi,flushSync:function(a,b){W?t("187"):void 0;var c=Z;Z=!0;try{return Zh(a,b)}finally{Z=c,si(1073741823,!1)}},unstable_createRoot:Ki,unstable_flushControlled:function(a){var b=Z;Z=!0;try{Zh(a)}finally{(Z=b)||W||si(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ka,
La,Ma,Da.injectEventPluginsByName,ra,Sa,function(a){Aa(a,Ra)},Hb,Ib,Jd,Fa]}};function Ki(a,b){Gi(a)?void 0:t("299","createRoot");return new Fi(a,!0,null!=b&&!0===b.hydrate)}Li.createRoot=Ki;Li.unstable_createRoot=void 0;
(function(a){var b=a.findFiberByHostInstance;return We(n({},a,{overrideProps:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ja,bundleType:0,version:"16.8.0-alpha.0",rendererPackageName:"react-dom"});var Oi={default:Li},Pi=Oi&&Li||Oi;module.exports=Pi.default||Pi;


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-spring/hooks.js":
/*!********************************************!*\
  !*** ./node_modules/react-spring/hooks.js ***!
  \********************************************/
/*! exports provided: config, animated, interpolate, Globals, useSpring, useTrail, useTransition, useKeyframes, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyframes", function() { return useKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");








var bugfixes = undefined;
var applyAnimatedValues = undefined;
var colorNames = [];
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var cancelFrame = function cancelFrame(cb) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
};
var interpolation = undefined;
var now = function now() {
  return Date.now();
};
var defaultElement = undefined;
var createAnimatedStyle = undefined;
var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames = function injectColorNames(names) {
  return colorNames = names;
};
var injectBugfixes = function injectBugfixes(fn) {
  return bugfixes = fn;
};
var injectInterpolation = function injectInterpolation(cls) {
  return interpolation = cls;
};
var injectFrame = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
};
var injectNow = function injectNow(nowFn) {
  return now = nowFn;
};
var injectDefaultElement = function injectDefaultElement(el) {
  return defaultElement = el;
};
var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle = factory;
};

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

var Animated =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getValue = function getValue() {};

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.addChild = function addChild(child) {};

  _proto.removeChild = function removeChild(child) {};

  _proto.getChildren = function getChildren() {
    return [];
  };

  return Animated;
}();

var getValues = function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
};

var AnimatedWithChildren =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.children = [];

    _this.getChildren = function () {
      return _this.children;
    };

    _this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    };

    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return AnimatedWithChildren;
}(Animated);
var AnimatedArrayWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedArrayWithChildren, _AnimatedWithChildren);

  function AnimatedArrayWithChildren() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
    _this2.payload = [];

    _this2.getAnimatedValue = function () {
      return _this2.getValue();
    };

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2)));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2)));
      });
    };

    return _this2;
  }

  return AnimatedArrayWithChildren;
}(AnimatedWithChildren);
var AnimatedObjectWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedObjectWithChildren, _AnimatedWithChildren2);

  function AnimatedObjectWithChildren() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
    _this3.payload = {};

    _this3.getAnimatedValue = function () {
      return _this3.getValue(true);
    };

    _this3.attach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3)));
      });
    };

    _this3.detach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3)));
      });
    };

    return _this3;
  }

  var _proto2 = AnimatedObjectWithChildren.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var key in this.payload) {
      var value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  return AnimatedObjectWithChildren;
}(AnimatedWithChildren);

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedStyle, _AnimatedObjectWithCh);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObjectWithChildren);

// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var Interpolation =
/*#__PURE__*/
function () {
  function Interpolation() {}

  Interpolation.create = function create(config, arg) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output: arg
    });
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];

    var easing = config.easing || function (t) {
      return t;
    };

    var extrapolateLeft = 'extend';
    var map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    var extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  }); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return Interpolation.create(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedInterpolation, _AnimatedArrayWithChi);

  function AnimatedInterpolation(parents, _config, _arg) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.getValue = function () {
      var _this2;

      return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _this.updateConfig = function (config, arg) {
      return _this.calc = Interpolation.create(config, arg);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    _this.calc = Interpolation.create(_config, _arg);
    return _this;
  }

  return AnimatedInterpolation;
}(AnimatedArrayWithChildren);
var interpolate$1 = function interpolate(parents, config, arg) {
  return parents && new AnimatedInterpolation(parents, config, arg);
};

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
    return findAnimatedStyles(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(_value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.getValue = function () {
      return _this.value;
    };

    _this.updateStyles = function () {
      return findAnimatedStyles(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), _this.animatedStyles);
    };

    _this.updateValue = function (value) {
      return _this.flush(_this.value = value);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.value = _value;
    _this.animatedStyles = new Set();
    _this.done = false;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    _this.lastVelocity = undefined;
    _this.lastTime = undefined;
    _this.controller = undefined;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.prepare = function prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  };

  return AnimatedValue;
}(AnimatedWithChildren);

var AnimatedArray =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedArray, _AnimatedArrayWithChi);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach(function (v, i) {
          return _this.payload[i].setValue(v, flush);
        });
      } else _this.payload.forEach(function (v, i) {
        return _this.payload[i].setValue(value, flush);
      });
    };

    _this.getValue = function () {
      return _this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.payload = array instanceof AnimatedArray ? array.payload : array.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  return AnimatedArray;
}(AnimatedArrayWithChildren);

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  var i;

  for (i in a) {
    if (!(i in b)) return false;
  }

  for (i in b) {
    if (a[i] !== b[i]) return false;
  }

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      autoStart = props.autoStart,
      ref = props.ref,
      forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  var forward = getForwardProps(props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return forward[k] !== void 0 ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  var _extends3;

  var name = _ref[0],
      value = _ref[1];
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value), _extends3));
}
function convertValues(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

var check = function check(value) {
  return value === 'auto';
};

var overwrite = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto(props, callback) {
  var from = props.from,
      to = props.to,
      children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  var element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return;
  var elementStyles = element.props.style; // Return v.dom with injected ref

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(element.type, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: function ref(_ref2) {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_ref2);
        var width, height;
        var cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        var convert = overwrite(width, height);
        callback(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedProps, _AnimatedObjectWithCh);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    if (props.style) props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.payload = props;
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObjectWithChildren);

function createAnimatedComponent(Component) {
  var AnimatedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this) || this;

      _this.callback = function () {
        if (_this.node) {
          var didUpdate = applyAnimatedValues.fn(_this.node, _this.propsAnimated.getAnimatedValue(), Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
          if (didUpdate === false) _this.forceUpdate();
        }
      };

      _this.attachProps(props);

      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    };

    _proto.setNativeProps = function setNativeProps(props) {
      var didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.
    ;

    _proto.attachProps = function attachProps(_ref) {
      var forwardRef = _ref.forwardRef,
          nextProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["forwardRef"]);

      var oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
      var style = props.style,
          nextProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["style"]);

      var _this$props = this.props,
          currentStyle = _this$props.style,
          currentProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$propsAnimated$g = this.propsAnimated.getValue(),
          scrollTop = _this$propsAnimated$g.scrollTop,
          scrollLeft = _this$propsAnimated$g.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, animatedProps, {
        ref: function ref(node) {
          return _this2.node = handleRef(node, _this2.props.forwardRef);
        }
      }));
    };

    return AnimatedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AnimatedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      forwardRef: ref
    }));
  });
}

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

var active = false;
var controllers = new Set();

var frameLoop = function frameLoop() {
  var time = now();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isDone = true;
    var noChange = true;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;

        var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;

        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * _velocity;
            var acceleration = (force + damping) / config.mass;
            _velocity = _velocity + acceleration * 1 / 1000;
            position = position + _velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(_velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = _velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange: noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

var addController = function addController(controller) {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

var removeController = function removeController(controller) {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

var Controller =
/*#__PURE__*/
function () {
  function Controller(props, config) {
    var _this = this;

    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = function () {
      return _this.props.native ? _this.interpolations : _this.animatedProps;
    };

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, config));
  }

  var _proto = Controller.prototype;

  _proto.update = function update(props) {
    var _this2 = this;

    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, props);

    var _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reset merged props when necessary

    var extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
      var name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      var entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        var _extends2;

        _this2.hasChanged = true;
        var parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        var animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(function (value) {
          return value.prepare(_this2);
        });
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends2 = {}, _extends2[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          changes: value,
          fromValues: toArray(parent.getValue()),
          toValues: toArray(target ? toValue.getPayload() : toValue),
          immediate: callProp(immediate, name),
          delay: withDefault(toConfig.delay, delay || 0),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start.apply(this, start);
    var onEnd = start[0],
        onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  };

  _proto.start = function start(onEnd, onUpdate) {
    var _this3 = this;

    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(function (res) {
      return _this3.resolve = res;
    });
  };

  _proto.stop = function stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(function (a) {
      return a.changes = undefined;
    });
    this.debouncedOnEnd({
      finished: finished
    });
  };

  _proto.destroy = function destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  };

  _proto.debouncedOnEnd = function debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    var onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  };

  return Controller;
}();

var KeyframeController =
/*#__PURE__*/
function () {
  function KeyframeController(_props) {
    var _this = this;

    this.frameId = 0;

    this.next = function (props, localFrameId, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      // this.last = last
      // this.running = true
      // config passed to props can overwrite global config passed in
      // controller instantiation i.e. globalConfig
      var config = props.config ? props.config : Array.isArray(_this.globalConfig) ? _this.globalConfig[index] : _this.globalConfig;
      _this.onFrameRest = props.onRest;
      return new Promise(function (resolve) {
        // if ref is passed to internal controller, then it ignore onEnd call back
        _this.instance.update(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.globalProps, props, {
          config: config
        }), _this.onEnd(_this.onFrameRest, localFrameId, last, resolve)); // start needs to be called here if ref is present to activate the anim


        if (_this.ref) {
          _this.instance.start(_this.onEnd(_this.onFrameRest, localFrameId, last, resolve));
        } // hacky solution to force the parent to be updated any time
        // the child controller is reset


        _this.instance.props.reset && _this.instance.props.native && _this.parentForceUpdate && requestFrame(_this.parentForceUpdate);
      });
    };

    this.start = function (onEnd) {
      _this.globalOnEnd = onEnd;

      if (_this.currSlots) {
        var _ret = function () {
          var localFrameId = ++_this.frameId;

          if (Array.isArray(_this.currSlots)) {
            var q = Promise.resolve();

            var _loop = function _loop(i) {
              var index = i;
              var slot = _this.currSlots[index];
              var last = index === _this.currSlots.length - 1;
              q = q.then(function () {
                return localFrameId === _this.frameId && _this.next(slot, localFrameId, last, index);
              });
            };

            for (var i = 0; i < _this.currSlots.length; i++) {
              _loop(i);
            }
          } else if (typeof _this.currSlots === 'function') {
            var index = 0;

            _this.currSlots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localFrameId === _this.frameId && _this.next(props, localFrameId, last, index++);
            }, // cancel
            function () {
              return requestFrame(function () {
                return _this.instance.isActive && _this.instance.stop(true);
              });
            });
          } else _this.next(_this.currSlots, localFrameId);

          _this.prevSlots = _this.currSlots;
          return {
            v: new Promise(function (resolve) {
              return _this.keyFrameEndResolver = resolve;
            })
          };
        }();

        if (typeof _ret === "object") return _ret.v;
      }
    };

    this.stop = function (finished) {
      if (finished === void 0) {
        finished = false;
      }

      ++_this.frameId;
      if (_this.instance.isActive) _this.instance.stop(finished);
    };

    this.onEnd = function (onFrameRest, localFrameId, last, resolve) {
      return function (args) {
        if (localFrameId === _this.frameId) {
          if (resolve) resolve();
          if (onFrameRest) onFrameRest(_this.merged);
          if (last && _this.globalOnEnd) _this.globalOnEnd(args);
          if (last && _this.keyFrameEndResolver) _this.keyFrameEndResolver();

          if (args.finished && last && _this.globalOnRest) {
            _this.globalOnRest(_this.merged);
          }
        }
      };
    };

    this.updateWithForceUpdate = function (forceUpdate) {
      // needed to forceUpdate when the controller is reset
      // for native controllers
      _this.parentForceUpdate = forceUpdate;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _this.update.apply(_this, args);
    };

    this.update = function (slots) {
      _this.currSlots = slots;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      !_this.ref && _this.start.apply(_this, args);
    };

    this.getValues = function () {
      return _this.instance.getValues();
    };

    this.destroy = function () {
      return _this.instance.destroy();
    };

    var _config = _props.config,
        onRest = _props.onRest,
        initialProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_props, ["config", "onRest"]);

    this.globalProps = function (_ref) {
      var native = _ref.native,
          onStart = _ref.onStart,
          onFrame = _ref.onFrame,
          children = _ref.children,
          reset = _ref.reset,
          delay = _ref.delay,
          destroyed = _ref.destroyed;
      return {
        native: native,
        onStart: onStart,
        reset: reset,
        onFrame: onFrame,
        children: children,
        delay: delay,
        destroyed: destroyed
      };
    }(_props);

    this.globalConfig = _props.config;
    this.globalOnRest = _props.onRest;
    this.ref = _props.ref;
    this.prevSlots = {};
    this.currSlots = null;
    this.instance = new Controller(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, initialProps, {
      native: true
    }));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(KeyframeController, [{
    key: "isActive",
    get: function get() {
      return this.instance.isActive;
    }
  }, {
    key: "config",
    set: function set(config) {
      this.globalConfig = config;
    }
  }, {
    key: "globals",
    set: function set(props) {
      this.globalProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.globalProps, props);
    }
  }, {
    key: "merged",
    get: function get() {
      return this.instance.merged;
    }
  }, {
    key: "props",
    get: function get() {
      return this.instance.props;
    }
  }]);

  return KeyframeController;
}();

var useSpringImpl = function useSpringImpl(type) {
  if (type === void 0) {
    type = 'default';
  }

  return function (args) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
        forceUpdate = _useState[1]; // Extract animation props and hook-specific props, can be a function or an obj


    var isFn = typeof args === 'function';

    var _callProp = callProp(args),
        onRest = _callProp.onRest,
        onKeyframesHalt = _callProp.onKeyframesHalt,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_callProp, ["onRest", "onKeyframesHalt"]); // The controller maintains the animation values, starts and tops animations


    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
      return type === 'keyframe' ? new KeyframeController(props) : new Controller(props);
    }),
        ctrl = _useState2[0]; // Destroy controller on unmount


    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      return function () {
        return ctrl.destroy();
      };
    }, []);

    var onHalt = function onHalt(_ref) {
      var finished = _ref.finished;
      return finished && onRest && onRest(ctrl.merged);
    }; // The hooks explcit API gets defined here ...


    Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeMethods"])(props.ref, function () {
      return {
        start: function start() {
          return ctrl.start(onHalt);
        },

        get isActive() {
          return ctrl.isActive;
        },

        stop: function stop(finished) {
          if (finished === void 0) {
            finished = false;
          }

          if (ctrl.isActive) ctrl.stop(finished);
        }
      };
    }); // Defines the hooks setter, which updates the controller

    var updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (updateProps) {
      ctrl.props.reset && type === 'keyframe' ? ctrl.updateWithForceUpdate(forceUpdate, updateProps) : ctrl.update(updateProps);
      if (!ctrl.props.ref) ctrl.start(onHalt);
      if (ctrl.props.reset && type === 'default') requestFrame(forceUpdate);
    }, [onRest, ctrl.props.ref]); // Update next frame is props aren't functional

    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      return void (!isFn && updateCtrl(props));
    }); // Return animated props, or, anim-props + the update-setter above

    var propValues = ctrl.getValues();
    return isFn ? [propValues, updateCtrl, function (finished) {
      if (finished === void 0) {
        finished = false;
      }

      return ctrl.stop(finished);
    }] : propValues;
  };
};
var useSpring = useSpringImpl();

var useSpringsImpl = function useSpringsImpl(type, trail) {
  if (type === void 0) {
    type = 'default';
  }

  if (trail === void 0) {
    trail = false;
  }

  return function (length, props, initialProps) {
    if (initialProps === void 0) {
      initialProps = {};
    }

    var isFn = typeof props === 'function';

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
        forceUpdate = _useState[1];

    var args = trail ? callProp(props) : initialProps;

    var reverse = args.reverse,
        onKeyframesHalt = args.onKeyframesHalt,
        onRest = args.onRest,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(args, ["reverse", "onKeyframesHalt", "onRest"]); // The controller maintains the animation values, starts and tops animations


    var instances = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
      var instances = [];

      var _loop = function _loop(i) {
        var initProps = trail ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, rest, {
          config: callProp(rest.config, i),
          attach: i > 0 && function () {
            return instances[i - 1];
          }
        }) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, rest, isFn ? callProp(props, i) : props[i]);
        instances.push(type === 'keyframe' ? new KeyframeController(initProps) : new Controller(initProps));
      };

      for (var i = 0; i < length; i++) {
        _loop(i);
      }

      return instances;
    }, [length]); // Destroy controllers on unmount

    var instancesRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
    instancesRef.current = instances;
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      return function () {
        return instancesRef.current.forEach(function (i) {
          return i.destroy();
        });
      };
    }, []); // Define onEnd callbacks and resolvers

    var onHalt = onKeyframesHalt ? function (ctrl) {
      return function (_ref) {
        var finished = _ref.finished;
        return finished && onRest && onRest(ctrl.merged);
      };
    } : onKeyframesHalt || function () {
      return null;
    }; // The hooks explcit API gets defined here ...

    Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeMethods"])(rest.ref, function () {
      return {
        start: function start() {
          return Promise.all(Array.from(instancesRef.current).map(function (_ref2, i) {
            var ctrl = _ref2[1];
            return (reverse ? i === 0 : instancesRef.current.size - 1) && onHalt(ctrl);
          }));
        },

        get isActive() {
          Array.from(instancesRef.current).some(function (_ref3) {
            var ctrl = _ref3[1];
            return ctrl.isActive;
          });
        },

        stop: function stop(finished) {
          if (finished === void 0) {
            finished = false;
          }

          return instancesRef.current.forEach(function (_ref4) {
            var ctrl = _ref4[1];
            return ctrl.stop(finished);
          });
        }
      };
    }); // Defines the hooks setter, which updates the controller

    var updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (props) {
      instances.forEach(function (ctrl, i) {
        var last = reverse ? i === 0 : instances.length - 1 === i;
        var attachIdx = reverse ? i + 1 : i - 1;
        var attachController = instances[attachIdx];
        var updateProps = trail ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
          config: callProp(props.config || rest.config, i),
          attach: attachController && function () {
            return attachController;
          }
        }) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, isFn ? callProp(props, i) : props[i]);
        ctrl.props.reset && type === 'keyframe' && last ? ctrl.updateWithForceUpdate(forceUpdate, updateProps) : ctrl.update(updateProps);
        if (!ctrl.props.ref) ctrl.start(last && onHalt(ctrl));
        if (last && ctrl.props.reset) requestFrame(forceUpdate);
      });
    }, [instances, onRest, onKeyframesHalt, rest.ref, reverse]); // Update next frame is props aren't functional

    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      return void (!isFn && updateCtrl(props));
    }); // Return animated props, or, anim-props + the update-setter above

    var propValues = instances.map(function (v) {
      return v.getValues();
    });
    return isFn ? [propValues, updateCtrl, function (finished) {
      if (finished === void 0) {
        finished = false;
      }

      return instances.forEach(function (ctrl) {
        return ctrl.stop(finished);
      });
    }] : propValues;
  };
};
var useSprings = useSpringsImpl();

var useTrail = useSpringsImpl('default', true);

var guid = 0;

var mapKeys = function mapKeys(items, keys) {
  return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);
};

var get = function get(props) {
  var items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? function (states) {
    return states;
  } : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    items: items,
    keys: mapKeys(items, keys)
  }, rest);
};

function calculateDiffInItems(_ref, props) {
  var prevProps = _ref.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["prevProps"]);

  var _get = get(prevProps || {}),
      _keys = _get.keys;

  var _get2 = get(props),
      keys = _get2.keys,
      items = _get2.items,
      unique = _get2.unique,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      update = _get2.update,
      enter = _get2.enter,
      leave = _get2.leave,
      config = _get2.config;

  var currSet = new Set(keys);
  var prevSet = new Set(_keys);
  var deleted = [].concat(state.deleted);

  var current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.current);

  var removed = state.transitions.filter(function (_ref2) {
    var destroyed = _ref2.destroyed,
        originalKey = _ref2.originalKey;
    return !destroyed && !currSet.has(originalKey);
  });
  var added = keys.filter(function (key) {
    return !prevSet.has(key);
  });

  var updated = _keys.filter(function (key) {
    return currSet.has(key);
  }); // if n


  var delay = !trail && props.delay || 0; // Make sure trailed transitions start at 0

  if (trail) delay -= trail;
  added.forEach(function (key) {
    var keyIndex = keys.indexOf(key);
    var item = items[keyIndex];
    var state = 'enter';

    if (unique && deleted.find(function (d) {
      return d.originalKey === key;
    })) {
      deleted = deleted.filter(function (t) {
        return t.originalKey !== key;
      });
    }

    current[key] = {
      item: item,
      state: state,
      trail: delay = delay + trail,
      key: unique ? String(key) : guid++,
      originalKey: key,
      destroyed: false,
      config: callProp(config, item, state),
      to: callProp(enter, item)
    };
  });
  removed.forEach(function (_ref3) {
    var item = _ref3.item,
        originalKey = _ref3.originalKey,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["item", "originalKey"]);

    var keyIndex = _keys.indexOf(originalKey);

    var state = 'leave';
    deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, rest, {
      originalKey: originalKey,
      item: item,
      state: state,
      left: _keys[Math.max(0, keyIndex - 1)],
      destroyed: true,
      trail: delay = delay + trail,
      config: callProp(config, item, state),
      to: callProp(leave, item)
    }));
    delete current[item.originalKey];
  });
  updated.forEach(function (key) {
    var keyIndex = keys.indexOf(key);
    var item = items[keyIndex];
    var state = 'update';
    current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, current[key], {
      item: item,
      state: state,
      destroyed: false,
      trail: delay = delay + trail,
      config: callProp(config, item, state),
      to: callProp(update, item)
    });
  });
  var out = keys.map(function (key) {
    return current[key];
  }); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach(function (_ref4) {
    var left = _ref4.left,
        right = _ref4.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref4, ["left", "right"]);

    var pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(function (t) {
      return t.originalKey === left;
    })) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [].concat(out.slice(0, pos), [item], out.slice(pos));
  });
  return {
    deleted: deleted,
    updated: updated,
    current: current,
    transitions: out
  };
}
/**
 * @param {TransitionProps} props
 */


function useTransition(props) {
  var _get3 = get(props),
      items = _get3.items,
      _currentKeys = _get3.keys,
      from = _get3.from,
      initial = _get3.initial,
      onRest = _get3.onRest,
      onDestroyed = _get3.onDestroyed,
      ref = _get3.ref;

  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return mounted.current = true, function () {
      return mounted.current = false;
    };
  }, []);
  var instances = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(!mounted.current && new Map([]));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return function () {
      return Array.from(instances.current).map(function (_ref5) {
        var key = _ref5[0],
            ctrl = _ref5[1].ctrl;
        ctrl.destroy();
        instances.current.delete(key);
      });
    };
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      forceUpdate = _useState[1];

  var state = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    first: false,
    activeSlots: {},
    deleted: [],
    current: {},
    transitions: [],
    prevProps: null
  }); // only to be used internally, must be bound to the instance obj to work

  function onEnd(_ref6) {
    var finished = _ref6.finished;
    var item = this.item,
        destroyed = this.destroyed,
        slot = this.slot,
        ctrl = this.ctrl;

    if (mounted.current && finished) {
      if (destroyed && onDestroyed) onDestroyed(item); // onRest needs to be called everytime each item
      // has finished, it is needed for notif hub to work.
      // we could have two seperate callback, one for each
      // and one for a sort of global on rest and peritem onrest?

      if (onRest) onRest(item, slot, ctrl.merged);

      if (!Array.from(instances.current).some(function (_ref7) {
        var ctrl = _ref7[1].ctrl;
        return ctrl.isActive;
      })) {
        // update when all transitions is complete to clean dom of removed elements.
        state.current.transitions.some(function (_ref8) {
          var destroyed = _ref8.destroyed;
          return destroyed;
        }) && requestFrame(function () {
          state.current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.current, {
            deleted: [],
            transitions: state.current.transitions.filter(function (_ref9) {
              var destroyed = _ref9.destroyed;
              return !destroyed;
            })
          });
          forceUpdate();
        });
      }
    }
  } // Prop changes effect


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    var _calculateDiffInItems = calculateDiffInItems(state.current, props),
        transitions = _calculateDiffInItems.transitions,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_calculateDiffInItems, ["transitions"]);

    transitions.forEach(function (_ref10) {
      var slot = _ref10.state,
          to = _ref10.to,
          config = _ref10.config,
          trail = _ref10.trail,
          key = _ref10.key,
          item = _ref10.item,
          destroyed = _ref10.destroyed;
      !instances.current.has(key) && instances.current.set(key, {
        ctrl: new KeyframeController(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, callProp(state.current.first ? initial !== void 0 ? initial || {} : from : from, item), {
          config: config,
          delay: trail,
          native: true,
          ref: ref
        })),
        item: item,
        destroyed: destroyed,
        slot: slot
      }); // update the map object

      var instance = instances.current.get(key);
      instance.item = item;
      instance.destroyed = destroyed;
      instance.slot = slot;
      var ctrl = instance.ctrl;

      if (slot === 'update' || slot !== state.current.activeSlots[key]) {
        state.current.activeSlots[key] = slot; // Set the controller if config has changed

        if (config) ctrl.config = config; // update props that are not animated values

        ctrl.globals = {
          delay: trail
        };
        ctrl.update(to, onEnd.bind(instance));
      }
    });
    state.current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.current, {
      transitions: transitions,
      prevProps: props,
      first: true
    }, rest);
  }, [items, mapKeys(items, _currentKeys).join('')]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeMethods"])(ref, function () {
    return {
      start: function start() {
        return Promise.all(Array.from(instances.current).map(function (_ref11) {
          var obj = _ref11[1];
          return obj.ctrl.start(onEnd.bind(obj));
        }));
      },
      stop: function stop(finished) {
        if (finished === void 0) {
          finished = false;
        }

        Array.from(instances.current).forEach(function (_ref12) {
          var ctrl = _ref12[1].ctrl;
          return ctrl.isActive && ctrl.stop(finished);
        });
      }
    };
  });
  return state.current.transitions.map(function (_ref13) {
    var item = _ref13.item,
        state = _ref13.state,
        key = _ref13.key;
    return {
      item: item,
      key: key,
      state: state,
      props: instances.current.get(key).ctrl.getValues()
    };
  });
}

/**
 *
 * @param {(useSpring | useTrail)} useImpl
 * @param {Object} props
 * @param {Array=} props.items // only needed when using Trail primitive
 * @param {Object} props.states
 * @param {SpringProps} ...props
 * @param {String} state
 * @param {SpringProps} initialProps
 */

var useKeyframesImpl = function useKeyframesImpl(useImpl) {
  return function (props, initialProps) {
    if (initialProps === void 0) {
      initialProps = null;
    }

    return function () {
      var mounted = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(false);

      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      var _ref = params.length === 2 ? params.reduceRight(function (a, b) {
        return [a, b];
      }) : params,
          _ref$ = _ref[0],
          state = _ref$ === void 0 ? 'default' : _ref$,
          count = _ref[1]; // need to force a rerender for when the animated controller has finally accepted props


      var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(),
          forceUpdate = _React$useState[1];

      var shouldForceUpdateRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(!initialProps);

      var _ref2 = function () {
        if (Array.isArray(props) || typeof props === 'function') {
          var _states;

          return {
            states: (_states = {}, _states[state] = props, _states)
          };
        } else {
          var _onRest = props.onRest,
              _config = props.config,
              rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["onRest", "config"]);

          return {
            states: rest,
            config: _config,
            onRest: _onRest
          };
        }
      }(),
          states = _ref2.states,
          config = _ref2.config,
          onRest = _ref2.onRest;

      var calculatedProps = function calculatedProps() {
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, initialProps, {
          native: true,
          onRest: onRest,
          config: config
        });
      };

      var args = typeof count === 'number' ? [count, calculatedProps] : [calculatedProps];

      var _useImpl = useImpl.apply(void 0, args),
          animProps = _useImpl[0],
          setAnimation = _useImpl[1],
          cancel = _useImpl[2];

      react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
        mounted.current = true;
        return function () {
          return mounted.current = false;
        };
      }, []);
      react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
        shouldForceUpdateRef.current && forceUpdate();
        shouldForceUpdateRef.current = false;
        setAnimation(states[state]);
      }, [state]);
      return shouldForceUpdateRef.current && Array.isArray(animProps) ? [] : animProps;
    };
  };
};

var useKeyframes = {
  spring: function spring() {
    return useKeyframesImpl(useSpringImpl('keyframe')).apply(void 0, arguments);
  },
  springs: function springs() {
    return useKeyframesImpl(useSpringsImpl('keyframe')).apply(void 0, arguments);
  },
  trail: function trail() {
    return useKeyframesImpl(useSpringsImpl('keyframe', true)).apply(void 0, arguments);
  }
};

var guid$1 = 0;
function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  var frames = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]);
  var local = ++guid$1;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    refs.forEach(function (_ref) {
      var current = _ref.current;
      return current && current.stop();
    });

    if (timeSteps) {
      frames.current.forEach(clearTimeout);
      frames.current = [];
      refs.forEach(function (ref, index) {
        return frames.current.push(setTimeout(function () {
          return ref.current.start();
        }, timeFrame * timeSteps[index]));
      });
    } else refs.reduce(function (q, _ref2) {
      var current = _ref2.current;
      return q = q.then(function () {
        return guid$1 === local && current && current.start();
      });
    }, Promise.resolve());
  }, refs);
}

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var extendedAnimated = domElements.reduce(function (acc, element) {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);




/***/ }),

/***/ "./node_modules/react-typography/dist/GoogleFont.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-typography/dist/GoogleFont.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleFont = function GoogleFont(props) {
  // Create family + styles string
  var fontsStr = '';
  if (props.typography.options.googleFonts) {
    var fonts = props.typography.options.googleFonts.map(function (font) {
      var str = '';
      str += font.name.split(' ').join('+');
      str += ':';
      str += font.styles.join(',');

      return str;
    });

    fontsStr = fonts.join('|');

    if (fontsStr) {
      return _react2.default.createElement('link', {
        href: '//fonts.googleapis.com/css?family=' + fontsStr,
        rel: 'stylesheet',
        type: 'text/css'
      });
    }
    return null;
  }
};

GoogleFont.propTypes = {
  typography: _propTypes2.default.object.isRequired
};

GoogleFont.displayName = 'GoogleFont';

module.exports = GoogleFont;

/***/ }),

/***/ "./node_modules/react-typography/dist/TypographyStyle.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-typography/dist/TypographyStyle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypographyStyle = function TypographyStyle(props) {
  return _react2.default.createElement('style', {
    id: 'typography.js',
    dangerouslySetInnerHTML: {
      __html: props.typography.toString()
    }
  });
};

TypographyStyle.propTypes = {
  typography: _propTypes2.default.object.isRequired
};

TypographyStyle.displayName = 'TypographyStyle';

module.exports = TypographyStyle;

/***/ }),

/***/ "./node_modules/react-typography/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-typography/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GoogleFont = __webpack_require__(/*! ./GoogleFont */ "./node_modules/react-typography/dist/GoogleFont.js");

var _GoogleFont2 = _interopRequireDefault(_GoogleFont);

var _TypographyStyle = __webpack_require__(/*! ./TypographyStyle */ "./node_modules/react-typography/dist/TypographyStyle.js");

var _TypographyStyle2 = _interopRequireDefault(_TypographyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  GoogleFont: _GoogleFont2.default,
  TypographyStyle: _TypographyStyle2.default
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.13.0-alpha.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=!1,h=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=c.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=h,Q=l;h=a;l=b;try{var g=d()}finally{h=e,l=Q}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,p());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function v(){if(-1===k&&null!==c&&1===c.priorityLevel){m=!0;try{do u();while(null!==c&&1===c.priorityLevel)}finally{m=!1,null!==c?p():n=!1}}}function t(a){m=!0;var b=f;f=a;try{if(a)for(;null!==c;){var d=exports.unstable_now();if(c.expirationTime<=d){do u();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do u();while(null!==c&&!w())}}finally{m=!1,f=b,null!==c?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var d=exports.unstable_now(),e=!1;if(0>=P-d)if(-1!==b&&b<=d)e=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(e)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var d=h,e=k;h=a;k=exports.unstable_now();try{return b()}finally{h=d,k=e,v()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(h){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:h,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,p();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,p());
b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=h;return function(){var d=h,e=k;h=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{h=d,k=e,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return h};
exports.unstable_shouldYield=function(){return!f&&(null!==c&&c.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==c&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return c};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/string-convert/camel2hyphen.js":
/*!*****************************************************!*\
  !*** ./node_modules/string-convert/camel2hyphen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "./node_modules/the-platform/Audio.js":
/*!********************************************!*\
  !*** ./node_modules/the-platform/Audio.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = exports.AudioResource = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioResource = exports.AudioResource = (0, _createResource.createResource)(function (src) {
  return new Promise(function (resolve, reject) {
    var audio = document.createElement('audio');
    audio.src = src;
    audio.onloadeddata = function () {
      return resolve(audio);
    };
    audio.onerror = reject;
    document.body.append(audio);
  });
});

var Audio = exports.Audio = function Audio(props) {
  AudioResource.read(props.src);
  return _react2.default.createElement('audio', props);
};

/***/ }),

/***/ "./node_modules/the-platform/Img.js":
/*!******************************************!*\
  !*** ./node_modules/the-platform/Img.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = exports.ImgResource = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImgResource = exports.ImgResource = (0, _createResource.createResource)(function (src) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  });
});

var Img = exports.Img = function Img(props) {
  ImgResource.read(props.src);
  return _react2.default.createElement('img', props);
};

/***/ }),

/***/ "./node_modules/the-platform/Preload.js":
/*!**********************************************!*\
  !*** ./node_modules/the-platform/Preload.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preload = exports.PreloadResource = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PreloadResource = exports.PreloadResource = (0, _createResource.createResource)(load, function (_ref) {
  var href = _ref.href,
      as = _ref.as;
  return href + '.' + as;
});

function load(_ref2) {
  var href = _ref2.href,
      as = _ref2.as,
      _ref2$media = _ref2.media,
      media = _ref2$media === undefined ? 'all' : _ref2$media;

  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.media = media;
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

var Preload = function Preload(_ref3) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['children']);

  PreloadResource.read(rest);

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
exports.Preload = Preload;

/***/ }),

/***/ "./node_modules/the-platform/Script.js":
/*!*********************************************!*\
  !*** ./node_modules/the-platform/Script.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Script = exports.ScriptResource = undefined;
exports.useScript = useScript;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ScriptResource = exports.ScriptResource = (0, _createResource.createResource)(function (_ref) {
  var src = _ref.src;

  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () {
      return resolve(script);
    };
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
}, function (_ref2) {
  var src = _ref2.src;
  return src;
});

var Script = function Script(_ref3) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['children']);

  ScriptResource.read(rest);
  if (typeof children === 'function') {
    return children();
  }

  return children;
};

exports.Script = Script;
function useScript(_ref4) {
  var src = _ref4.src;

  return ScriptResource.read({ src: src });
}

/***/ }),

/***/ "./node_modules/the-platform/Stylesheet.js":
/*!*************************************************!*\
  !*** ./node_modules/the-platform/Stylesheet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stylesheet = exports.StylesheetResource = undefined;
exports.useStylesheet = useStylesheet;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StylesheetResource = exports.StylesheetResource = (0, _createResource.createResource)(load, function (_ref) {
  var href = _ref.href,
      media = _ref.media;
  return href + '.' + media;
});

function load(_ref2) {
  var href = _ref2.href,
      _ref2$media = _ref2.media,
      media = _ref2$media === undefined ? 'all' : _ref2$media;

  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

var Stylesheet = exports.Stylesheet = function Stylesheet(props) {
  StylesheetResource.read(props);
  return _react2.default.createElement('link', props);
};

function useStylesheet(props) {
  return StylesheetResource.read(props);
}

/***/ }),

/***/ "./node_modules/the-platform/Video.js":
/*!********************************************!*\
  !*** ./node_modules/the-platform/Video.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = exports.VideoResource = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoResource = exports.VideoResource = (0, _createResource.createResource)(function (src) {
  return new Promise(function (resolve, reject) {
    var video = document.createElement('video');
    video.src = src;
    video.oncanplay = function () {
      resolve(video);
    };
    video.onerror = reject;
  });
});

var Video = exports.Video = function Video(props) {
  VideoResource.read(props.src);
  return _react2.default.createElement('video', props);
};

/***/ }),

/***/ "./node_modules/the-platform/createResource.js":
/*!*****************************************************!*\
  !*** ./node_modules/the-platform/createResource.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResource = undefined;

var _reactCache = __webpack_require__(/*! react-cache */ "./node_modules/react-cache/index.js");

var createResource = void 0;

if (_reactCache.unstable_createResource) {
  exports.createResource = createResource = _reactCache.unstable_createResource;
}

exports.createResource = createResource;

/***/ }),

/***/ "./node_modules/the-platform/index.js":
/*!********************************************!*\
  !*** ./node_modules/the-platform/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Audio = __webpack_require__(/*! ./Audio */ "./node_modules/the-platform/Audio.js");

Object.keys(_Audio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Audio[key];
    }
  });
});

var _Img = __webpack_require__(/*! ./Img */ "./node_modules/the-platform/Img.js");

Object.keys(_Img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Img[key];
    }
  });
});

var _Preload = __webpack_require__(/*! ./Preload */ "./node_modules/the-platform/Preload.js");

Object.keys(_Preload).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Preload[key];
    }
  });
});

var _Script = __webpack_require__(/*! ./Script */ "./node_modules/the-platform/Script.js");

Object.keys(_Script).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Script[key];
    }
  });
});

var _Stylesheet = __webpack_require__(/*! ./Stylesheet */ "./node_modules/the-platform/Stylesheet.js");

Object.keys(_Stylesheet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Stylesheet[key];
    }
  });
});

var _Video = __webpack_require__(/*! ./Video */ "./node_modules/the-platform/Video.js");

Object.keys(_Video).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Video[key];
    }
  });
});

var _useDeviceMotion = __webpack_require__(/*! ./useDeviceMotion */ "./node_modules/the-platform/useDeviceMotion.js");

Object.keys(_useDeviceMotion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDeviceMotion[key];
    }
  });
});

var _useDeviceOrientation = __webpack_require__(/*! ./useDeviceOrientation */ "./node_modules/the-platform/useDeviceOrientation.js");

Object.keys(_useDeviceOrientation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDeviceOrientation[key];
    }
  });
});

var _useGeoPosition = __webpack_require__(/*! ./useGeoPosition */ "./node_modules/the-platform/useGeoPosition.js");

Object.keys(_useGeoPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useGeoPosition[key];
    }
  });
});

var _useIntersectionObserver = __webpack_require__(/*! ./useIntersectionObserver */ "./node_modules/the-platform/useIntersectionObserver.js");

Object.keys(_useIntersectionObserver).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useIntersectionObserver[key];
    }
  });
});

var _useMedia = __webpack_require__(/*! ./useMedia */ "./node_modules/the-platform/useMedia.js");

Object.keys(_useMedia).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useMedia[key];
    }
  });
});

var _useNetworkStatus = __webpack_require__(/*! ./useNetworkStatus */ "./node_modules/the-platform/useNetworkStatus.js");

Object.keys(_useNetworkStatus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useNetworkStatus[key];
    }
  });
});

var _useWindowScrollPosition = __webpack_require__(/*! ./useWindowScrollPosition */ "./node_modules/the-platform/useWindowScrollPosition.js");

Object.keys(_useWindowScrollPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useWindowScrollPosition[key];
    }
  });
});

var _useWindowSize = __webpack_require__(/*! ./useWindowSize */ "./node_modules/the-platform/useWindowSize.js");

Object.keys(_useWindowSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useWindowSize[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/the-platform/useDeviceMotion.js":
/*!******************************************************!*\
  !*** ./node_modules/the-platform/useDeviceMotion.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeviceMotion = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useDeviceMotion = exports.useDeviceMotion = function useDeviceMotion() {
  var _React$useState = _react2.default.useState({
    acceleration: {
      x: null,
      y: null,
      z: null
    },
    accelerationIncludingGravity: {
      x: null,
      y: null,
      z: null
    },
    rotationRate: {
      alpha: null,
      beta: null,
      gamma: null
    },
    interval: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      motion = _React$useState2[0],
      setMotion = _React$useState2[1];

  _react2.default.useEffect(function () {
    var handle = function handle(deviceMotionEvent) {
      setMotion(deviceMotionEvent);
    };

    window.addEventListener('devicemotion', handle);

    return function () {
      window.removeEventListener('devicemotion', handle);
    };
  }, []);

  return motion;
};

/***/ }),

/***/ "./node_modules/the-platform/useDeviceOrientation.js":
/*!***********************************************************!*\
  !*** ./node_modules/the-platform/useDeviceOrientation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeviceOrientation = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useDeviceOrientation = exports.useDeviceOrientation = function useDeviceOrientation() {
  var _React$useState = _react2.default.useState({
    alpha: null,
    beta: null,
    gamma: null,
    absolute: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var handle = function handle(e) {
    setOrientation({
      beta: e.beta,
      alpha: e.alpha,
      gamma: e.gamma,
      absolute: e.absolute
    });
  };

  _react2.default.useEffect(function () {
    window.addEventListener('deviceorientation', handle);

    return function () {
      window.removeEventListener('deviceorientation', handle);
    };
  }, []);

  return orientation;
};

/***/ }),

/***/ "./node_modules/the-platform/useGeoPosition.js":
/*!*****************************************************!*\
  !*** ./node_modules/the-platform/useGeoPosition.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGeoPosition = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createResource = __webpack_require__(/*! ./createResource */ "./node_modules/the-platform/createResource.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PositionResource = (0, _createResource.createResource)(load, function (positionOptions) {
  return 'geoposition';
});

function load(positionOptions) {
  return new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position);
    }, function (error) {
      reject(error);
    }, positionOptions);
  });
}

var useGeoPosition = exports.useGeoPosition = function useGeoPosition(positionOptions) {
  // We should read new initialCoords for each component but useMemo
  // does not seem to memoize when a component is suspended
  // @todo determine if this is intended behavior or a bug
  // const initialAccessTime = React.useMemo(() => Date.now(), []);

  var initialCoords = PositionResource.read();

  var _React$useState = _react2.default.useState(initialCoords),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      position = _React$useState2[0],
      setPosition = _React$useState2[1];

  _react2.default.useEffect(function () {
    var listener = navigator.geolocation.watchPosition(function (positionUpdate) {
      setPosition(positionUpdate);
    }, function () {
      return null;
    }, positionOptions);

    return function () {
      return navigator.geolocation.clearWatch(listener);
    };
  }, []);

  return position;
};

/***/ }),

/***/ "./node_modules/the-platform/useIntersectionObserver.js":
/*!**************************************************************!*\
  !*** ./node_modules/the-platform/useIntersectionObserver.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersectionObserver = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useIntersectionObserver = exports.useIntersectionObserver = function useIntersectionObserver(target, root) {
  var _React$useState = _react2.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isIntersecting = _React$useState2[0],
      setIntersecting = _React$useState2[1];

  _react2.default.useEffect(function () {
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      if (entry.isIntersecting !== isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    }, {
      rootMargin: '0px',
      root: root.current
    });
    if (target.current) {
      observer.observe(target.current);
    }
    return function () {
      observer.unobserve(target.current);
    };
  }, []);

  return isIntersecting;
};

/***/ }),

/***/ "./node_modules/the-platform/useMedia.js":
/*!***********************************************!*\
  !*** ./node_modules/the-platform/useMedia.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useMedia = useMedia;

var _react = __webpack_require__(/*! react */ "react");

var _json2mq = __webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js");

var _json2mq2 = _interopRequireDefault(_json2mq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useMedia(query) {
  var defaultMatches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _useState = (0, _react.useState)(defaultMatches),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatches = _useState2[1];

  (0, _react.useEffect)(function () {
    var mediaQueryList = window.matchMedia(typeof query === 'string' ? query : (0, _json2mq2.default)(query));
    var active = true;

    var listener = function listener() {
      if (!active) {
        return;
      }

      if (mediaQueryList.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };

    mediaQueryList.addListener(listener);
    setMatches(mediaQueryList.matches);

    return function () {
      active = false;
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return matches;
}

/***/ }),

/***/ "./node_modules/the-platform/useNetworkStatus.js":
/*!*******************************************************!*\
  !*** ./node_modules/the-platform/useNetworkStatus.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNetworkStatus = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useNetworkStatus = exports.useNetworkStatus = function useNetworkStatus() {
  var _React$useState = _react2.default.useState(navigator.onLine),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      status = _React$useState2[0],
      setStatus = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      offlineAt = _React$useState4[0],
      setOfflineAt = _React$useState4[1];

  _react2.default.useEffect(function () {
    var handleOnline = function handleOnline() {
      setStatus(true);
      setOfflineAt(undefined);
    };

    var handleOffline = function handleOffline() {
      setStatus(false);
      setOfflineAt(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return function () {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline: status,
    offlineAt: offlineAt
  };
};

/***/ }),

/***/ "./node_modules/the-platform/useWindowScrollPosition.js":
/*!**************************************************************!*\
  !*** ./node_modules/the-platform/useWindowScrollPosition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowScrollPosition = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/the-platform/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useWindowScrollPosition = exports.useWindowScrollPosition = function useWindowScrollPosition() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$throttleMs = _ref.throttleMs,
      throttleMs = _ref$throttleMs === undefined ? 100 : _ref$throttleMs;

  var _React$useState = _react2.default.useState({
    x: window.pageXOffset,
    y: window.pageYOffset
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scroll = _React$useState2[0],
      setScroll = _React$useState2[1];

  var handle = (0, _utils.throttle)(function () {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset
    });
  }, throttleMs);

  _react2.default.useEffect(function () {
    window.addEventListener('scroll', handle);

    return function () {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  return scroll;
};

/***/ }),

/***/ "./node_modules/the-platform/useWindowSize.js":
/*!****************************************************!*\
  !*** ./node_modules/the-platform/useWindowSize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/the-platform/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = new Set();
var onResize = function onResize() {
  return events.forEach(function (fn) {
    return fn();
  });
};

var useWindowSize = exports.useWindowSize = function useWindowSize() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$throttleMs = options.throttleMs,
      throttleMs = _options$throttleMs === undefined ? 100 : _options$throttleMs;

  var _React$useState = _react2.default.useState({
    width: window.innerWidth,
    height: window.innerHeight
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      size = _React$useState2[0],
      setSize = _React$useState2[1];

  var handle = (0, _utils.throttle)(function () {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, throttleMs);

  _react2.default.useEffect(function () {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return function () {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, []);

  return size;
};

/***/ }),

/***/ "./node_modules/the-platform/utils.js":
/*!********************************************!*\
  !*** ./node_modules/the-platform/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var throttle = exports.throttle = function throttle(func, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last = void 0,
      deferTimer = void 0;
  return function () {
    var context = scope || this;

    var now = Date.now(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        func.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "./node_modules/typography/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/typography/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var n,o,i=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(n,o){for(var i,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(n),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))e.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(u[a[f]]=i[a[f]])}}return u},a=function(t,e){e||(e=[0,""]),t=String(t);var r=parseFloat(t,10);return e[0]=r,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},u=function(t){return a(t)[0]},c=function(t){return null==t&&(t=t),function(e,r,n,o){null==n&&(n=t),null==o&&(o=n);var i=a(e)[1];if(i===r)return e;var c=u(e);if("px"!==i)if("em"===i)c=u(e)*u(n);else if("rem"===i)c=u(e)*u(t);else{if("ex"!==i)return e;c=u(e)*u(n)*2}var l=c;if("px"!==r)if("em"===r)l=c/u(o);else if("rem"===r)l=c/u(t);else{if("ex"!==r)return e;l=c/u(o)/2}return parseFloat(l.toFixed(5))+r}},l=a,f=function(t){return l(t)[1]},s=function(t){return l(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},v=function(t,e){var r,n=c(e.baseFontSize),o=s(n(t,"px")),i=s(e.baseLineHeightInPx),a=s(n(e.minLinePadding,"px"));return(r=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(r+=e.roundToNearestHalfLine?.5:1),r},h=function(t){var e=c(t.baseFontSize);return function(r,n,o){null==r&&(r=1),null==n&&(n=t.baseFontSize),null==o&&(o=0);var i=r*s(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,n);return"px"===f(a)&&(a=Math.floor(s(a))+f(a)),parseFloat(s(a).toFixed(5))+f(a)}},d="[object Number]",b=Object.prototype.toString;n=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&b.call(t)==d},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}var y=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!g(e))throw new Error("Hue is not a number");if(!g(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var n=0;if(0!==e){n=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var o=0;return r?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+n+"%,"+t+o+")"},m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var _="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,O=_||w||Function("return this")(),S=O.Symbol,x=Object.prototype,z=x.hasOwnProperty,F=x.toString,k=S?S.toStringTag:void 0;var A=function(t){var e=z.call(t,k),r=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=F.call(t);return n&&(e?t[k]=r:delete t[k]),o},L=Object.prototype.toString;var P=function(t){return L.call(t)},B="[object Null]",T="[object Undefined]",M=S?S.toStringTag:void 0;var E=function(t){return null==t?void 0===t?T:B:M&&M in Object(t)?A(t):P(t)};var H=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N="[object AsyncFunction]",W="[object Function]",I="[object GeneratorFunction]",C="[object Proxy]";var R,$=function(t){if(!H(t))return!1;var e=E(t);return e==W||e==I||e==N||e==C},U=O["__core-js_shared__"],D=(R=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var q=function(t){return!!D&&D in t},V=Function.prototype.toString;var J=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,G=Function.prototype,K=Object.prototype,Y=RegExp("^"+G.toString.call(K.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!H(t)||q(t))&&($(t)?Y:Z).test(J(t))};var X=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var r=X(t,e);return Q(r)?r:void 0},et=function(){try{var t=tt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var rt=function(t,e,r){"__proto__"==e&&et?et(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var nt=function(t,e){return t===e||t!=t&&e!=e},ot=Object.prototype.hasOwnProperty;var it=function(t,e,r){var n=t[e];ot.call(t,e)&&nt(n,r)&&(void 0!==r||e in t)||rt(t,e,r)},at=Array.isArray;var ut=function(t){return null!=t&&"object"==typeof t},ct="[object Symbol]";var lt=function(t){return"symbol"==typeof t||ut(t)&&E(t)==ct},ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var pt=function(t,e){if(at(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!lt(t))||st.test(t)||!ft.test(t)||null!=e&&t in Object(e)},vt=tt(Object,"create");var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",bt=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(vt){var r=e[t];return r===dt?void 0:r}return bt.call(e,t)?e[t]:void 0},yt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return vt?void 0!==e[t]:yt.call(e,t)},jt="__lodash_hash_undefined__";var _t=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=vt&&void 0===e?jt:e,this};function wt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}wt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},wt.prototype.delete=ht,wt.prototype.get=gt,wt.prototype.has=mt,wt.prototype.set=_t;var Ot=wt;var St=function(t,e){for(var r=t.length;r--;)if(nt(t[r][0],e))return r;return-1},xt=Array.prototype.splice;var zt=function(t){var e=this.__data__,r=St(e,t);return!(r<0||(r==e.length-1?e.pop():xt.call(e,r,1),--this.size,0))};var Ft=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]};var kt=function(t){return St(this.__data__,t)>-1};var At=function(t,e){var r=this.__data__,n=St(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.__data__=[],this.size=0},Lt.prototype.delete=zt,Lt.prototype.get=Ft,Lt.prototype.has=kt,Lt.prototype.set=At;var Pt=Lt,Bt=tt(O,"Map");var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Mt=function(t,e){var r=t.__data__;return Tt(e)?r["string"==typeof e?"string":"hash"]:r.map};var Et=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e};var Ht=function(t){return Mt(this,t).get(t)};var Nt=function(t){return Mt(this,t).has(t)};var Wt=function(t,e){var r=Mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function It(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(Bt||Pt),string:new Ot}},It.prototype.delete=Et,It.prototype.get=Ht,It.prototype.has=Nt,It.prototype.set=Wt;var Ct=It,Rt="Expected a function";function $t(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Rt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new($t.Cache||Ct),r}$t.Cache=Ct;var Ut=$t,Dt=500;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Jt=function(t){var e=Ut(t,function(t){return r.size===Dt&&r.clear(),t}),r=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qt,function(t,r,n,o){e.push(n?o.replace(Vt,"$1"):r||t)}),e});var Zt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Gt=1/0,Kt=S?S.prototype:void 0,Yt=Kt?Kt.toString:void 0;var Qt=function t(e){if("string"==typeof e)return e;if(at(e))return Zt(e,t)+"";if(lt(e))return Yt?Yt.call(e):"";var r=e+"";return"0"==r&&1/e==-Gt?"-0":r};var Xt=function(t){return null==t?"":Qt(t)};var te=function(t,e){return at(t)?t:pt(t,e)?[t]:Jt(Xt(t))},ee=9007199254740991,re=/^(?:0|[1-9]\d*)$/;var ne=function(t,e){var r=typeof t;return!!(e=null==e?ee:e)&&("number"==r||"symbol"!=r&&re.test(t))&&t>-1&&t%1==0&&t<e},oe=1/0;var ie=function(t){if("string"==typeof t||lt(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e};var ae=function(t,e,r,n){if(!H(t))return t;for(var o=-1,i=(e=te(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=ie(e[o]),l=r;if(o!=a){var f=u[c];void 0===(l=n?n(f,c,u):void 0)&&(l=H(f)?f:ne(e[o+1])?[]:{})}it(u,c,l),u=u[c]}return t};var ue=function(t,e,r){return null==t?t:ae(t,e,r)};var ce=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var le=function(t){return function(e,r,n){for(var o=-1,i=Object(e),a=n(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===r(i[c],c,i))break}return e}}();var fe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},se="[object Arguments]";var pe=function(t){return ut(t)&&E(t)==se},ve=Object.prototype,he=ve.hasOwnProperty,de=ve.propertyIsEnumerable,be=pe(function(){return arguments}())?pe:function(t){return ut(t)&&he.call(t,"callee")&&!de.call(t,"callee")};var ge=function(){return!1},ye=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||ge}),me=9007199254740991;var je=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=me},_e={};_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=!0,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=!1;var we=function(t){return ut(t)&&je(t.length)&&!!_e[E(t)]};var Oe=function(t){return function(e){return t(e)}},Se=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&_.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),xe=Se&&Se.isTypedArray,ze=xe?Oe(xe):we,Fe=Object.prototype.hasOwnProperty;var ke=function(t,e){var r=at(t),n=!r&&be(t),o=!r&&!n&&ye(t),i=!r&&!n&&!o&&ze(t),a=r||n||o||i,u=a?fe(t.length,String):[],c=u.length;for(var l in t)!e&&!Fe.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ne(l,c))||u.push(l);return u},Ae=Object.prototype;var Le=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};var Pe=function(t,e){return function(r){return t(e(r))}},Be=Pe(Object.keys,Object),Te=Object.prototype.hasOwnProperty;var Me=function(t){if(!Le(t))return Be(t);var e=[];for(var r in Object(t))Te.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ee=function(t){return null!=t&&je(t.length)&&!$(t)};var He=function(t){return Ee(t)?ke(t):Me(t)};var Ne=function(t,e){return function(r,n){if(null==r)return r;if(!Ee(r))return t(r,n);for(var o=r.length,i=e?o:-1,a=Object(r);(e?i--:++i<o)&&!1!==n(a[i],i,a););return r}}(function(t,e){return t&&le(t,e,He)});var We=function(t){return t};var Ie=function(t){return"function"==typeof t?t:We};var Ce=function(t,e){return(at(t)?ce:Ne)(t,Ie(e))},Re="[object Number]";var $e=function(t){return"number"==typeof t||ut(t)&&E(t)==Re},Ue="[object String]";var De=function(t){return"string"==typeof t||!at(t)&&ut(t)&&E(t)==Ue};var qe=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var Ve=function(t){return this.__data__.get(t)};var Je=function(t){return this.__data__.has(t)},Ze=200;var Ge=function(t,e){var r=this.__data__;if(r instanceof Pt){var n=r.__data__;if(!Bt||n.length<Ze-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ct(n)}return r.set(t,e),this.size=r.size,this};function Ke(t){var e=this.__data__=new Pt(t);this.size=e.size}Ke.prototype.clear=function(){this.__data__=new Pt,this.size=0},Ke.prototype.delete=qe,Ke.prototype.get=Ve,Ke.prototype.has=Je,Ke.prototype.set=Ge;var Ye=Ke;var Qe=function(t,e,r){(void 0===r||nt(t[e],r))&&(void 0!==r||e in t)||rt(t,e,r)},Xe=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}),tr=O.Uint8Array;var er=function(t){var e=new t.constructor(t.byteLength);return new tr(e).set(new tr(t)),e};var rr=function(t,e){var r=e?er(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var nr=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},or=Object.create,ir=function(){function t(){}return function(e){if(!H(e))return{};if(or)return or(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ar=Pe(Object.getPrototypeOf,Object);var ur=function(t){return"function"!=typeof t.constructor||Le(t)?{}:ir(ar(t))};var cr=function(t){return ut(t)&&Ee(t)},lr="[object Object]",fr=Function.prototype,sr=Object.prototype,pr=fr.toString,vr=sr.hasOwnProperty,hr=pr.call(Object);var dr=function(t){if(!ut(t)||E(t)!=lr)return!1;var e=ar(t);if(null===e)return!0;var r=vr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&pr.call(r)==hr};var br=function(t,e){return"__proto__"==e?void 0:t[e]};var gr=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?rt(r,u,c):it(r,u,c)}return r};var yr=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},mr=Object.prototype.hasOwnProperty;var jr=function(t){if(!H(t))return yr(t);var e=Le(t),r=[];for(var n in t)("constructor"!=n||!e&&mr.call(t,n))&&r.push(n);return r};var _r=function(t){return Ee(t)?ke(t,!0):jr(t)};var wr=function(t){return gr(t,_r(t))};var Or=function(t,e,r,n,o,i,a){var u=br(t,r),c=br(e,r),l=a.get(c);if(l)Qe(t,r,l);else{var f=i?i(u,c,r+"",t,e,a):void 0,s=void 0===f;if(s){var p=at(c),v=!p&&ye(c),h=!p&&!v&&ze(c);f=c,p||v||h?at(u)?f=u:cr(u)?f=nr(u):v?(s=!1,f=Xe(c,!0)):h?(s=!1,f=rr(c,!0)):f=[]:dr(c)||be(c)?(f=u,be(u)?f=wr(u):(!H(u)||n&&$(u))&&(f=ur(c))):s=!1}s&&(a.set(c,f),o(f,c,n,i,a),a.delete(c)),Qe(t,r,f)}};var Sr=function t(e,r,n,o,i){e!==r&&le(r,function(a,u){if(H(a))i||(i=new Ye),Or(e,r,u,n,t,o,i);else{var c=o?o(br(e,u),a,u+"",e,r,i):void 0;void 0===c&&(c=a),Qe(e,u,c)}},_r)};var xr=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},zr=Math.max;var Fr=function(t,e,r){return e=zr(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=zr(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),xr(t,this,u)}};var kr=function(t){return function(){return t}},Ar=800,Lr=16,Pr=Date.now;var Br=function(t){var e=0,r=0;return function(){var n=Pr(),o=Lr-(n-r);if(r=n,o>0){if(++e>=Ar)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(et?function(t,e){return et(t,"toString",{configurable:!0,enumerable:!1,value:kr(e),writable:!0})}:We);var Tr=function(t,e){return Br(Fr(t,e,We),t+"")};var Mr=function(t,e,r){if(!H(r))return!1;var n=typeof e;return!!("number"==n?Ee(r)&&ne(e,r.length):"string"==n&&e in r)&&nt(r[e],t)};var Er=function(t){return Tr(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Mr(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var u=r[n];u&&t(e,u,n,i)}return e})}(function(t,e,r){Sr(t,e,r)});var Hr=function(t,e,r,n){var o=-1,i=null==t?0:t.length;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r},Nr="__lodash_hash_undefined__";var Wr=function(t){return this.__data__.has(t)};function Ir(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Ct;++e<r;)this.add(t[e])}Ir.prototype.add=Ir.prototype.push=function(t){return this.__data__.set(t,Nr),this},Ir.prototype.has=Wr;var Cr=Ir;var Rr=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var $r=function(t,e){return t.has(e)},Ur=1,Dr=2;var qr=function(t,e,r,n,o,i){var a=r&Ur,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,s=!0,p=r&Dr?new Cr:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var v=t[f],h=e[f];if(n)var d=a?n(h,v,f,e,t,i):n(v,h,f,t,e,i);if(void 0!==d){if(d)continue;s=!1;break}if(p){if(!Rr(e,function(t,e){if(!$r(p,e)&&(v===t||o(v,t,r,n,i)))return p.push(e)})){s=!1;break}}else if(v!==h&&!o(v,h,r,n,i)){s=!1;break}}return i.delete(t),i.delete(e),s};var Vr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r};var Jr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r},Zr=1,Gr=2,Kr="[object Boolean]",Yr="[object Date]",Qr="[object Error]",Xr="[object Map]",tn="[object Number]",en="[object RegExp]",rn="[object Set]",nn="[object String]",on="[object Symbol]",an="[object ArrayBuffer]",un="[object DataView]",cn=S?S.prototype:void 0,ln=cn?cn.valueOf:void 0;var fn=function(t,e,r,n,o,i,a){switch(r){case un:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case an:return!(t.byteLength!=e.byteLength||!i(new tr(t),new tr(e)));case Kr:case Yr:case tn:return nt(+t,+e);case Qr:return t.name==e.name&&t.message==e.message;case en:case nn:return t==e+"";case Xr:var u=Vr;case rn:if(u||(u=Jr),t.size!=e.size&&!(n&Zr))return!1;var c=a.get(t);if(c)return c==e;n|=Gr,a.set(t,e);var l=qr(u(t),u(e),n,o,i,a);return a.delete(t),l;case on:if(ln)return ln.call(t)==ln.call(e)}return!1};var sn=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var pn=function(t,e,r){var n=e(t);return at(t)?n:sn(n,r(t))};var vn=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var hn=Object.prototype.propertyIsEnumerable,dn=Object.getOwnPropertySymbols,bn=dn?function(t){return null==t?[]:(t=Object(t),vn(dn(t),function(e){return hn.call(t,e)}))}:function(){return[]};var gn=function(t){return pn(t,He,bn)},yn=1,mn=Object.prototype.hasOwnProperty;var jn=function(t,e,r,n,o,i){var a=r&yn,u=gn(t),c=u.length;if(c!=gn(e).length&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:mn.call(e,f)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var p=!0;i.set(t,e),i.set(e,t);for(var v=a;++l<c;){var h=t[f=u[l]],d=e[f];if(n)var b=a?n(d,h,f,e,t,i):n(h,d,f,t,e,i);if(!(void 0===b?h===d||o(h,d,r,n,i):b)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,y=e.constructor;g!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(p=!1)}return i.delete(t),i.delete(e),p},_n=tt(O,"DataView"),wn=tt(O,"Promise"),On=tt(O,"Set"),Sn=tt(O,"WeakMap"),xn=J(_n),zn=J(Bt),Fn=J(wn),kn=J(On),An=J(Sn),Ln=E;(_n&&"[object DataView]"!=Ln(new _n(new ArrayBuffer(1)))||Bt&&"[object Map]"!=Ln(new Bt)||wn&&"[object Promise]"!=Ln(wn.resolve())||On&&"[object Set]"!=Ln(new On)||Sn&&"[object WeakMap]"!=Ln(new Sn))&&(Ln=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?J(r):"";if(n)switch(n){case xn:return"[object DataView]";case zn:return"[object Map]";case Fn:return"[object Promise]";case kn:return"[object Set]";case An:return"[object WeakMap]"}return e});var Pn=Ln,Bn=1,Tn="[object Arguments]",Mn="[object Array]",En="[object Object]",Hn=Object.prototype.hasOwnProperty;var Nn=function(t,e,r,n,o,i){var a=at(t),u=at(e),c=a?Mn:Pn(t),l=u?Mn:Pn(e),f=(c=c==Tn?En:c)==En,s=(l=l==Tn?En:l)==En,p=c==l;if(p&&ye(t)){if(!ye(e))return!1;a=!0,f=!1}if(p&&!f)return i||(i=new Ye),a||ze(t)?qr(t,e,r,n,o,i):fn(t,e,c,r,n,o,i);if(!(r&Bn)){var v=f&&Hn.call(t,"__wrapped__"),h=s&&Hn.call(e,"__wrapped__");if(v||h){var d=v?t.value():t,b=h?e.value():e;return i||(i=new Ye),o(d,b,r,n,i)}}return!!p&&(i||(i=new Ye),jn(t,e,r,n,o,i))};var Wn=function t(e,r,n,o,i){return e===r||(null==e||null==r||!ut(e)&&!ut(r)?e!=e&&r!=r:Nn(e,r,n,o,t,i))},In=1,Cn=2;var Rn=function(t,e,r,n){var o=r.length,i=o,a=!n;if(null==t)return!i;for(t=Object(t);o--;){var u=r[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=r[o])[0],l=t[c],f=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var s=new Ye;if(n)var p=n(l,f,c,t,e,s);if(!(void 0===p?Wn(f,l,In|Cn,n,s):p))return!1}}return!0};var $n=function(t){return t==t&&!H(t)};var Un=function(t){for(var e=He(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,$n(o)]}return e};var Dn=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}};var qn=function(t){var e=Un(t);return 1==e.length&&e[0][2]?Dn(e[0][0],e[0][1]):function(r){return r===t||Rn(r,t,e)}};var Vn=function(t,e){for(var r=0,n=(e=te(e,t)).length;null!=t&&r<n;)t=t[ie(e[r++])];return r&&r==n?t:void 0};var Jn=function(t,e,r){var n=null==t?void 0:Vn(t,e);return void 0===n?r:n};var Zn=function(t,e){return null!=t&&e in Object(t)};var Gn=function(t,e,r){for(var n=-1,o=(e=te(e,t)).length,i=!1;++n<o;){var a=ie(e[n]);if(!(i=null!=t&&r(t,a)))break;t=t[a]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&je(o)&&ne(a,o)&&(at(t)||be(t))};var Kn=function(t,e){return null!=t&&Gn(t,e,Zn)},Yn=1,Qn=2;var Xn=function(t,e){return pt(t)&&$n(e)?Dn(ie(t),e):function(r){var n=Jn(r,t);return void 0===n&&n===e?Kn(r,t):Wn(e,n,Yn|Qn)}};var to=function(t){return function(e){return null==e?void 0:e[t]}};var eo=function(t){return function(e){return Vn(e,t)}};var ro=function(t){return pt(t)?to(ie(t)):eo(t)};var no=function(t){return"function"==typeof t?t:null==t?We:"object"==typeof t?at(t)?Xn(t[0],t[1]):qn(t):ro(t)};var oo=function(t,e,r,n,o){return o(t,function(t,o,i){r=n?(n=!1,t):e(r,t,o,i)}),r};var io=function(t,e,r){var n=at(t)?Hr:oo,o=arguments.length<3;return n(t,no(e,4),r,o,Ne)},ao=function(t,e,r){var n;return void 0===t&&(t={}),n=at(e)?e:[e],Ce(n,function(e){Ce(r,function(r,n){ue(t,e+"."+n,r)})}),t},uo=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],co=function(t){return-1!==uo.indexOf(t)?t:"'"+t+"'"};var lo,fo=j(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"}),so=(lo=fo)&&lo.__esModule&&Object.prototype.hasOwnProperty.call(lo,"default")?lo.default:lo,po=function(t){return io(t,function(t,e,r){return t+=r+"{",Ce(e,function(e,r){if(H(e)){var n={};n[r]=e,t+=po(n)}else{var o=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+e+";";["Webkit","ms","Moz","O"].forEach(function(t){r.slice(0,t.length)===t&&(o="-"+o)}),t+=o}}),t+="}"},"")};module.exports=function(t){var e,r,a,u,l=i({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),d=(e=l,r=JSON.parse(JSON.stringify(p)),a=Object.assign({},r,e),u=c(a.baseFontSize),f(a.baseLineHeight)?(s(u(a.baseFontSize,"px")),a.baseLineHeightInPx=u(a.baseLineHeight,"px")):a.baseLineHeightInPx=s(a.baseFontSize)*a.baseLineHeight+"px",{rhythm:h(a),establishBaseline:function(){return c((t=a).baseFontSize),{fontSize:s(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return v(t,a)},adjustFontSizeTo:function(t,e,r){return null==e&&(e="auto"),function(t,e,r,n){null==r&&(r=n.baseFontSize),"%"===f(t)&&(t=s(n.baseFontSize)*(s(t)/100)+"px");var o=c(n.baseFontSize);t=o(t,"px",r=o(r,"px"));var i=h(n);return"auto"===e&&(e=v(t,n)),{fontSize:o(t,n.rhythmUnit,r),lineHeight:i(e,r)}}(t,e,r,a)}});return d.scale=function(t){var e=parseInt(l.baseFontSize,10),r=function(t,e){var r;return null==t&&(t=0),null==e&&(e="golden"),r=n(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(r,t)}(t,l.scaleRatio)*e+"px";return d.adjustFontSizeTo(r)},Object.assign({},{options:l},d,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var r={},n=t.establishBaseline();r=ao(r,"html",{font:n.fontSize+"/"+n.lineHeight+" "+e.bodyFontFamily.map(co).join(","),boxSizing:"border-box",overflowY:"scroll"}),r=ao(r,["*","*:before","*:after"],{boxSizing:"inherit"}),r=ao(r,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(co).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),r=ao(r,"img",{maxWidth:"100%"});var o="";o=$e(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):De(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),r=ao(r,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),r=ao(r,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),r=ao(r,["b","strong","dt","th"],{fontWeight:e.boldWeight}),r=ao(r,"hr",{background:y(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),r=ao(r,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),r=ao(r,"li",{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["ol li","ul li"],{paddingLeft:0}),r=ao(r,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),r=ao(r,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),r=ao(r,["li > p"],{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(r=ao(r,["abbr","acronym"],{borderBottom:"1px dotted "+y(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+y(50),cursor:"help",textDecoration:"none"},r=ao(r,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),r=ao(r,["thead"],{textAlign:"left"}),r=ao(r,["td,th"],{textAlign:"left",borderBottom:"1px solid "+y(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),r=ao(r,"th:first-child,td:first-child",{paddingLeft:0}),r=ao(r,"th:last-child,td:last-child",{paddingRight:0}),r=ao(r,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(co).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),f=t.scale(-.3);return Ce([i,a,u,c,l,f],function(t,n){r=ue(r,"h"+(n+1)+".fontSize",t.fontSize),r=ue(r,"h"+(n+1)+".lineHeight",e.headerLineHeight)}),at(e.plugins)&&(r=io(e.plugins,function(r,n){return Er(r,n(t,e,r))},r)),e.overrideStyles&&$(e.overrideStyles)&&(r=Er(r,e.overrideStyles(t,e,r))),e.overrideThemeStyles&&$(e.overrideThemeStyles)&&(r=Er(r,e.overrideThemeStyles(t,e,r))),r}(d,l)},toString:function(){return function(t,e,r){var n=po(r);return e.includeNormalize&&(n=""+so+n),n}(0,l,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString(),document.head.appendChild(t)}}})};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./public/static/d/4130953669.json":
/*!*****************************************!*\
  !*** ./public/static/d/4130953669.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Grid Net"}}}};

/***/ }),

/***/ "./src/components/homepage/BottomExcerpt.js":
/*!**************************************************!*\
  !*** ./src/components/homepage/BottomExcerpt.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var BottomExcerpt = function BottomExcerpt(_ref) {
  var copy = _ref.copy,
      image = _ref.image;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    style: imageCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
    css: copyCSS
  }, copy)));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomExcerpt);
var baseCSS =  true ? {
  name: "1mtnbvq",
  styles: "align-items:center;display:flex;min-height:20.25rem;padding:3.125rem 0;position:relative;"
} : undefined;
var imageCSS =  true ? {
  name: "9azlr3",
  styles: "bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1;&:after{background:rgba(0,0,0,0.8);bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:0;}"
} : undefined;
var copyCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:#fff;font-family:'Dosis';font-size:1.5rem;line-height:125%;text-align:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{font-size:1.875rem;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/homepage/Hero.js":
/*!*****************************************!*\
  !*** ./src/components/homepage/Hero.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");









var Hero = function Hero(_ref) {
  var heading = _ref.heading,
      subheading = _ref.subheading;
  var keyframes = react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["useKeyframes"].spring({
    config: {
      tension: 80,
      friction: 20
    },
    wiggle: function () {
      var _wiggle = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(next) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                _context.next = 3;
                return next({
                  transform: 'translate3d(0, 0.5rem, 0'
                });

              case 3:
                _context.next = 5;
                return next({
                  transform: 'translate3d(0, 0, 0'
                });

              case 5:
                _context.next = 0;
                break;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function wiggle(_x) {
        return _wiggle.apply(this, arguments);
      }

      return wiggle;
    }()
  });
  var h2Transition = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["useTransition"])({
    items: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
      css: headingCSS
    }, heading)],
    keys: [0],
    from: {
      opacity: 0,
      transform: 'translateY(-10px)'
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    leave: {
      opacity: 0,
      transform: 'translateY(10px)'
    },
    delay: 500
  });
  var pTransition = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["useTransition"])({
    items: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      css: copyCSS
    }, subheading)],
    keys: [0],
    from: {
      opacity: 0,
      transform: 'translateY(-10px)'
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    leave: {
      opacity: 0,
      transform: 'translateY(10px)'
    },
    delay: 1250
  });
  var learnProps = keyframes('wiggle');
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, h2Transition.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      style: props,
      key: key
    }, item);
  }), pTransition.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      style: props,
      key: key
    }, item);
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_5__["animated"].span, {
    css: learnMoreCSS,
    style: learnProps
  }, "Learn More", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    css: learnMoreIconCSS,
    height: "13",
    viewBox: "0 0 14 13",
    width: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "m13.6674505 5.37353066-.6738172-.65745638c-.2335022-.21621481-.5062205-.32435292-.8175253-.32435292-.3177255 0-.587202.10810741-.8088702.32435292l-2.64182651 2.57723021v-6.17117971c0-.30396572-.11396571-.56691142-.34164535-.78899063-.22767963-.22204849-.49718761-.33313415-.80864983-.33313415h-1.15020075c-.31149369 0-.58112757.11117777-.80864983.33313415-.22774259.22207921-.34148798.48502491-.34148798.78899063v6.17117971l-2.64185802-2.57723021c-.22163671-.21621481-.49117617-.32435292-.80877572-.32435292-.31146222 0-.58411755.10810741-.81765127.32435292l-.66497309.65745638c-.22774258.22189497-.34151945.48800315-.34151945.79764904 0 .31569451.11390277.57870162.34142503.78902134l5.84979924 5.71535396c.22173114.2163376.49127059.324445.80877573.324445.31149369 0 .58408607-.1081074.81758831-.324445l5.84983069-5.71535396c.2216682-.21624552.332581-.47922193.332581-.78902134.0000315-.3038122-.1108813-.56970545-.3325495-.79764904z",
    fill: "#fff"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    css: cutoutCSS,
    viewBox: "0 0 1280 75",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "M 0,0 Q 320,75 640,75 L 0,75 Z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "M 640,75 Q 960,75 1280,0 L 1280,75 Z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("line", {
    x1: "0",
    y1: "75",
    x2: "1280",
    y2: "75",
    stroke: "#fff"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);
var baseCSS =  true ? {
  name: "8n9gi2",
  styles: "align-items:center;background:linear-gradient(to bottom,#3399ff,#0080ff);color:#fff;display:flex;flex-direction:column;height:90vh;justify-content:center;position:relative;text-align:center;"
} : undefined;
var headingCSS =  true ? {
  name: "w58izp",
  styles: "font-size:2.25rem;font-weight:700;margin-bottom:2.5rem;"
} : undefined;
var copyCSS =  true ? {
  name: "12kp9f3",
  styles: "font-size:1.375rem;line-height:150%;margin:0 auto 4.5rem;max-width:36.5rem;width:90%;"
} : undefined;
var learnMoreCSS =  true ? {
  name: "zfeir0",
  styles: "align-items:center;bottom:2rem;color:#fff;display:flex;flex-direction:column;font-size:0.75rem;font-weight:700;position:absolute;text-decoration:none;"
} : undefined;
var learnMoreIconCSS =  true ? {
  name: "w2y5ws",
  styles: "height:0.8125rem;margin-top:0.125rem;width:0.875rem;"
} : undefined;
var cutoutCSS =  true ? {
  name: "18qqwd3",
  styles: "bottom:0;fill:#fff;height:auto;left:0;position:absolute;right:0;width:100%;"
} : undefined;

/***/ }),

/***/ "./src/components/homepage/OurProducts.js":
/*!************************************************!*\
  !*** ./src/components/homepage/OurProducts.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");








var OurProducts = function OurProducts(_ref) {
  var heading = _ref.heading,
      blocks = _ref.blocks;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["SectionHeading"], null, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: blocksCSS
  }, blocks.map(function (block) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: blockCSS,
      key: block.heading
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: block.image,
      style: imageCSS
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: contentCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], null, block.heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
      style: bodyTextCSS
    }, block.copy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["Cta"], {
      to: block.cta_url,
      style: ctaCSS
    }, block.cta)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OurProducts);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background:#fff;text-align:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{padding:0 0 6.875rem;}" + ( true ? "" : undefined));
var blocksCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:flex-start;flex-wrap:wrap;justify-content:center;margin:0 -1.125rem 2.5rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
var blockCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("box-shadow:", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["styles"].boxShadow, ";margin:0 1.5rem 0.875rem;text-align:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{margin:0 1.5rem;width:37.5%;}" + ( true ? "" : undefined));
var contentCSS =  true ? {
  name: "1mgjyjt",
  styles: "align-items:center;display:flex;flex-direction:column;padding:1.5rem;"
} : undefined;
var imageCSS =  true ? {
  name: "14fmli",
  styles: "height:13.125rem;width:100%;"
} : undefined;
var bodyTextCSS =  true ? {
  name: "gkf12r",
  styles: "margin-bottom:4rem;text-align:left;"
} : undefined;
var ctaCSS =  true ? {
  name: "8xl60i",
  styles: "margin-top:auto;"
} : undefined;

/***/ }),

/***/ "./src/components/homepage/SolutionsIcon.js":
/*!**************************************************!*\
  !*** ./src/components/homepage/SolutionsIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var SolutionsIcon = function SolutionsIcon(_ref) {
  var heading = _ref.heading;

  if (heading === 'Electricity') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      css: baseCSS,
      height: "50",
      viewBox: "0 0 48 50",
      width: "48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: ""
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m24.0566038 8.49056604c-8.3367925 0-15.09433965 6.75849056-15.09433965 15.09433966 0 6.6877358 4.35377355 12.35 10.37735845 14.3320754v9.2528302h1.8867925v2.8301887h5.6603774v-2.8301887h1.8867924v-9.2528302c6.0235849-1.9820754 10.3773585-7.6443396 10.3773585-14.3320754 0-8.3358491-6.7575472-15.09433966-15.0943396-15.09433966z",
      fill: "#efce4a"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#efce4a"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m24.0566038 0c-.5216981 0-.9433963.42169811-.9433963.94339623v3.7735849c0 .52169812.4216982.94339623.9433963.94339623s.9433962-.42169811.9433962-.94339623v-3.7735849c0-.52169812-.4216981-.94339623-.9433962-.94339623z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m46.6981132 22.6415094h-3.7735849c-.5216981 0-.9433962.4216981-.9433962.9433963 0 .5216981.4216981.9433962.9433962.9433962h3.7735849c.5216981 0 .9433962-.4216981.9433962-.9433962 0-.5216982-.4216981-.9433963-.9433962-.9433963z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m5.18867925 22.6415094h-3.77358491c-.52169811 0-.94339623.4216981-.94339623.9433963 0 .5216981.42169812.9433962.94339623.9433962h3.77358491c.52169811 0 .94339622-.4216981.94339622-.9433962 0-.5216982-.42169811-.9433963-.94339622-.9433963z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m39.4 6.90754717-2.6679245 2.66792453c-.368868.36886792-.368868.9650943 0 1.3339623.1839622.1839622.4254717.2764151.6669811.2764151s.4830189-.0924529.6669811-.2764151l2.6679246-2.66792457c.3688679-.36886792.3688679-.96509434 0-1.33396226-.368868-.36886792-.9660378-.36792453-1.3339623 0z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m10.0471698 36.2603774-2.66792452 2.6679245c-.36886792.3688679-.36886792.9650943 0 1.3339623.18396227.1839622.4254717.276415.66698114.276415.24150943 0 .48301886-.0924528.66698113-.276415l2.66792455-2.6679246c.3688679-.3688679.3688679-.9650943 0-1.3339622-.3688679-.368868-.9650944-.368868-1.3339623 0z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m38.0660377 36.2603774c-.3688679-.368868-.9650943-.368868-1.3339622 0-.368868.3688679-.368868.9650943 0 1.3339622l2.6679245 2.6679246c.1839623.1839622.4254717.276415.6669811.276415.2415095 0 .4830189-.0924528.6669812-.276415.3688679-.368868.3688679-.9650944 0-1.3339623z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8.71320755 6.90754717c-.36886793-.36886792-.96509434-.36886792-1.33396227 0-.36886792.36886792-.36886792.96509434 0 1.33396226l2.66792452 2.66792457c.1839623.1839622.4254717.2764151.6669811.2764151.2415095 0 .4830189-.0924529.6669812-.2764151.3688679-.368868.3688679-.96509438 0-1.3339623z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m13.6792453 24.5283019c-.5216981 0-.9433962-.4216981-.9433962-.9433962 0-6.2424529 5.0783018-11.3207548 11.3207547-11.3207548.5216981 0 .9433962.4216982.9433962.9433963s-.4216981.9433962-.9433962.9433962c-5.2018868 0-9.4339623 4.2320755-9.4339623 9.4339623 0 .5216981-.4216981.9433962-.9433962.9433962z",
      fill: "#f7e6a1"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m19.3396226 40.5660377v6.6037736h1.8867925v2.8301887h5.6603774v-2.8301887h1.8867924v-6.6037736z",
      fill: "#556080"
    })));
  }

  if (heading === 'Gas') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      css: baseCSS,
      height: "50",
      viewBox: "0 0 50 50",
      width: "50",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: ""
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m20.9940358 16.7992048c0 1.6699801-1.3518887 3.1013916-3.1013917 3.1013916h-.1590457c-1.6699801 0-3.1013916-1.3518886-3.1013916-3.1013916v-13.67793243c0-1.74950299 1.3518886-3.10139165 3.1013916-3.10139165h.1590457c1.749503 0 3.1013917 1.35188866 3.1013917 3.10139165z",
      fill: "#b2b1a1"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m17.8926441.01988072c1.749503 0 3.1013917 1.35188866 3.1013917 3.10139165v13.51888663c0 1.6699802-1.4314115 3.1013917-3.1013917 3.1013917",
      fill: "#969587"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#d8d5c5",
      transform: "translate(15.407555 3.976143)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249.65606362c0 .07952286-.07952287.15904572-.15904573.15904572h-4.37375746c-.15904572 0-.23856858-.07952286-.23856858-.15904572v-.47713718c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.15904572 0 .23856859.07952286.23856859.15904572z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 3.83697813c0 .07952286-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952287-.15904572-.15904573v-.39761431c0-.07952287.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952286.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 7.01789264c0 .07952287-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952286-.15904572-.15904573v-.39761431c0-.07952286.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952287.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 10.1988072c0 .0795228-.07952287.1590457-.15904573.1590457h-4.37375746c-.07952286 0-.15904572-.0795229-.15904572-.1590457v-.39761436c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.07952286 0 .15904573.07952286.15904573.15904572z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m28.1510934 16.7992048c0 1.6699801-1.3518886 3.1013916-3.1013916 3.1013916h-.1590457c-1.6699802 0-3.1013917-1.3518886-3.1013917-3.1013916v-13.67793243c0-1.74950299 1.3518887-3.10139165 3.1013917-3.10139165h.1590457c1.749503 0 3.1013916 1.35188866 3.1013916 3.10139165z",
      fill: "#b2b1a1"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m25.0497018.01988072c1.749503 0 3.1013916 1.35188866 3.1013916 3.10139165v13.51888663c0 1.6699802-1.4314115 3.1013917-3.1013916 3.1013917",
      fill: "#969587"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#d8d5c5",
      transform: "translate(22.564612 3.976143)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249.65606362c0 .07952286-.07952287.15904572-.15904573.15904572h-4.37375746c-.15904572 0-.23856858-.07952286-.23856858-.15904572v-.47713718c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.15904572 0 .23856859.07952286.23856859.15904572z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 3.83697813c0 .07952286-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952287-.15904572-.15904573v-.39761431c0-.07952287.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952286.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 7.01789264c0 .07952287-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952286-.15904572-.15904573v-.39761431c0-.07952286.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952287.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 10.1988072c0 .0795228-.07952287.1590457-.15904573.1590457h-4.37375746c-.07952286 0-.15904572-.0795229-.15904572-.1590457v-.39761436c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.07952286 0 .15904573.07952286.15904573.15904572z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m35.3081511 16.7992048c0 1.6699801-1.3518887 3.1013916-3.1013917 3.1013916h-.1590457c-1.6699801 0-3.1013916-1.3518886-3.1013916-3.1013916v-13.67793243c0-1.74950299 1.3518886-3.10139165 3.1013916-3.10139165h.1590457c1.749503 0 3.1013917 1.35188866 3.1013917 3.10139165z",
      fill: "#b2b1a1"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m32.2067594.01988072c1.749503 0 3.1013917 1.35188866 3.1013917 3.10139165v13.51888663c0 1.6699802-1.4314115 3.1013917-3.1013917 3.1013917",
      fill: "#969587"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#d8d5c5",
      transform: "translate(29.72167 3.976143)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249.65606362c0 .07952286-.07952287.15904572-.15904573.15904572h-4.37375746c-.15904572 0-.23856858-.07952286-.23856858-.15904572v-.47713718c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.15904572 0 .23856859.07952286.23856859.15904572z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 3.83697813c0 .07952286-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952287-.15904572-.15904573v-.39761431c0-.07952287.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952286.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 7.01789264c0 .07952287-.07952287.15904573-.15904573.15904573h-4.37375746c-.07952286 0-.15904572-.07952286-.15904572-.15904573v-.39761431c0-.07952286.07952286-.15904573.15904572-.15904573h4.37375746c.07952286 0 .15904573.07952287.15904573.15904573z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.79125249 10.1988072c0 .0795228-.07952287.1590457-.15904573.1590457h-4.37375746c-.07952286 0-.15904572-.0795229-.15904572-.1590457v-.39761436c0-.07952286.07952286-.15904572.15904572-.15904572h4.37375746c.07952286 0 .15904573.07952286.15904573.15904572z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m39.6023857 19.5029821c0 1.5904573-1.2723658 2.7833002-2.9423459 2.7833002h-24.0954275c-1.5904572 0-2.9423459-1.1928429-2.9423459-2.7833002 0-1.5904572 1.2723658-2.7833002 2.9423459-2.7833002h24.0954275c1.5904572 0 2.9423459 1.192843 2.9423459 2.7833002z",
      fill: "#e29e3b"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m36.6600398 16.7196819c1.5904572 0 2.9423459 1.0337972 2.9423459 2.7037773 0 1.5904573-1.2723658 2.8628231-2.9423459 2.8628231h-24.0954275c-1.5904572 0-2.9423459-1.2723658-2.9423459-2.8628231",
      fill: "#c68d30"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m45.6461233 35.0099404c0 4.3737574-3.5785289 7.9522862-7.9522863 7.9522862h-25.4473161c-4.37375748 0-7.95228631-3.5785288-7.95228631-7.9522862v-7.9522863c0-4.3737575 3.57852883-7.9522863 7.95228631-7.9522863h25.4473161c4.3737574 0 7.9522863 3.5785288 7.9522863 7.9522863z",
      fill: "#ce1906"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m45.6461233 27.0576541v7.9522863c0 4.3737574-3.5785289 7.9522862-7.9522863 7.9522862h-25.4473161c-4.37375748 0-7.95228631-4.1351888-7.95228631-8.5089463v-7.3956262",
      fill: "#b51815"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m49.9403579 41.3717694c0 4.4532803-3.5785289 7.9522863-8.1113321 7.9522863h-33.71769379c-4.45328032 0-8.11133201-3.499006-8.11133201-7.9522863s3.57852883-7.9522863 8.03180915-7.9522863h33.71769385c4.5328032 0 8.1908549 3.499006 8.1908549 7.9522863z",
      fill: "#b2b1a1"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m49.9403579 41.4512922c0 4.4532804-3.5785289 7.8727635-8.1113321 7.8727635h-33.71769379c-4.45328032 0-8.11133201-3.499006-8.11133201-7.9522863",
      fill: "#969587"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "13.836978",
      cy: "26.898608",
      fill: "#eefcff",
      r: "4.691849"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m13.8369781 22.2862823c2.5447316 0 4.6918489 2.0675944 4.6918489 4.6918489s-2.0675944 4.6918489-4.6918489 4.6918489",
      fill: "#def0f9"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#aac3ce",
      transform: "translate(9.741551 22.763419)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.1749503 1.19284294c0 .07952287 0 .07952287-.07952286.07952287-.07952287 0-.07952287 0-.07952287-.07952287v-1.03379721c0-.07952287 0-.07952287.07952287-.07952287.07952286 0 .07952286 0 .07952286.07952287z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.1749503 8.11133201c0 .07952286 0 .07952286-.07952286.07952286-.07952287 0-.07952287 0-.07952287-.07952286v-1.03379722c0-.07952286 0-.07952286.07952287-.07952286.07952286 0 .07952286 0 .07952286.07952286z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m7.03777336 4.29423459c-.07952286 0-.07952286 0-.07952286-.07952286s0-.07952286.07952286-.07952286h1.03379722c.07952286 0 .07952286 0 .07952286.07952286s0 .07952286-.07952286.07952286z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m.11928429 4.29423459c-.07952286 0-.07952286 0-.07952286-.07952286s0-.07952286.07952286-.07952286h1.03379722c.07952286 0 .07952286 0 .07952286.07952286s0 .07952286-.07952286.07952286z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m6.24254473 2.1471173s-.07952286 0-.15904572 0c0 0 0-.07952287 0-.15904573l.71570576-.71570576h.15904573v.15904572z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.3916501 6.99801193s-.07952286 0-.15904573 0c0 0 0-.07952286 0-.15904573l.71570577-.71570576h.15904572v.15904572z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m6.08349901 6.28230616s0-.07952286 0-.15904572h.15904572l.71570577.71570576v.15904573s-.07952287 0-.15904573 0z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.23260437 1.43141153s0-.07952286 0-.15904572h.15904573l.71570576.71570576v.15904573s-.07952286 0-.15904572 0z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m6.75944334 34.8508946c0-.3976143.31809145-.6361829.71570577-.6361829h34.99005959c.3976144 0 .7157058.2385686.7157058.6361829",
      fill: "#d8d5c5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#dddccc",
      transform: "translate(3.479125 35.28827)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "6.143141",
      cy: "6.322068",
      r: "4.930418"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m5.586481.198807h1.590457v2.385686h-1.590457z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m5.586481 10.059642h1.590457v2.385686h-1.590457z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8.93981612 1.48260258h1.66996408v2.54470721h-1.66996408z",
      transform: "matrix(-.70710678 -.70710678 .70710678 -.70710678 14.738576 11.61483)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.6831023 8.6683053h1.66996411v2.5447072h-1.66996411z",
      transform: "matrix(-.70710678 -.70710678 .70710678 -.70710678 -2.730469 18.750321)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m10.357853 5.28827h2.147117v1.590457h-2.147117z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m.019881 5.28827h2.385686v1.590457h-2.385686z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8.89541828 8.66486915h1.66996412v2.54470725h-1.66996412z",
      transform: "matrix(.70710678 -.70710678 .70710678 .70710678 -4.17671 9.790977)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.78400442 1.47141631h1.67018194v2.54508648h-1.67018194z",
      transform: "matrix(.70755662 -.70665666 .70665666 .70755662 -1.173101 2.653254)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "36.838966",
      cy: "6.322068",
      r: "4.930418"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m35.805169.039761h1.590457v2.385686h-1.590457z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m35.805169 10.059642h1.590457v2.385686h-1.590457z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m39.5685285 1.45363707h1.6699641v2.54470721h-1.6699641z",
      transform: "matrix(-.70710678 -.70710678 .70710678 -.70710678 67.045541 33.223154)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m32.3663938 8.69082333h1.6699641v2.54470717h-1.6699641z",
      transform: "matrix(-.70710678 -.70710678 .70710678 -.70710678 49.633264 40.485125)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m40.576541 5.28827h2.385686v1.590457h-2.385686z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m30.238569 5.28827h2.385686v1.590457h-2.385686z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m39.5804155 8.62801342h1.6699641v2.54470718h-1.6699641z",
      transform: "matrix(.70710678 -.70710678 .70710678 .70710678 4.836779 31.477752)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m32.4143282 1.5033482h1.6699641v2.5447072h-1.6699641z",
      transform: "matrix(.70710678 -.70710678 .70710678 .70710678 7.77578 24.323797)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "21.491054",
      cy: "6.322068",
      r: "4.930418"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m15.8543333 6.69901976h1.6700001v2.54476205h-1.6700001z",
      transform: "matrix(.31919618 .94768866 -.94768866 .31919618 18.916568 -10.389331)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m25.4652921 3.47594133h1.6699485v2.54473555h-1.6699485z",
      transform: "matrix(.31808708 .9480615 -.9480615 .31808708 22.43618 -21.696336)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16.09475 2.84551084h1.6700106v2.54477816h-1.6700106z",
      transform: "matrix(-.44469186 .89568362 -.89568362 -.44469186 28.146615 -9.214608)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m25.1921285 7.40286445h1.670013v2.54488101h-1.670013z",
      transform: "matrix(-.44429126 .8958824 -.8958824 -.44429126 45.362817 -10.787585)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m19.0301042.28247805h1.6701512v2.54494024h-1.6701512z",
      transform: "matrix(-.94775932 .31898631 -.31898631 -.94775932 39.188597 -3.308056)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m22.285434 9.89610549h1.6701512v2.54494021h-1.6701512z",
      transform: "matrix(-.94775932 .31898631 -.31898631 -.94775932 48.595812 14.378572)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m22.9291213.52181746h1.6699327v2.54456h-1.6699327z",
      transform: "matrix(-.89532541 -.44541263 .44541263 -.89532541 44.241566 13.985223)"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m18.3800257 9.65619395h1.6700107v2.54477815h-1.6700107z",
      transform: "matrix(-.89568362 -.44469186 .44469186 -.89568362 31.565768 29.261904)"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "9.622266",
      cy: "41.610338",
      fill: "#ff4133",
      r: "2.306163"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m9.6222664 39.304175c1.2723658 0 2.306163 1.0337972 2.306163 2.306163s-1.0337972 2.306163-2.306163 2.306163",
      fill: "#b51815"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "24.970179",
      cy: "41.610338",
      fill: "#ff4133",
      r: "2.306163"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m24.9701789 39.304175c1.2723658 0 2.306163 1.0337972 2.306163 2.306163s-1.0337972 2.306163-2.306163 2.306163",
      fill: "#b51815"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "40.318092",
      cy: "41.610338",
      fill: "#ff4133",
      r: "2.306163"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m40.3180915 39.304175c1.2723658 0 2.306163 1.0337972 2.306163 2.306163s-1.0337972 2.306163-2.306163 2.306163",
      fill: "#b51815"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m37.693837 20.2982107c0 .2385686-.1590457.3976143-.3976143.3976143h-25.4473161c-.2385686 0-.3976144-.1590457-.3976144-.3976143s.1590458-.3976143.3976144-.3976143h25.4473161c.2385686 0 .3976143.1590457.3976143.3976143z",
      fill: "#ff4133"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#870e0e",
      transform: "translate(23.459245 23.956262)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.51093439 5.64612326c0 .39761431-.31809145.6361829-.6361829.6361829h-.23856859c-.39761431 0-.6361829-.31809145-.6361829-.6361829v-5.00994036c0-.39761431.31809145-.6361829.6361829-.6361829h.23856859c.39761432 0 .6361829.31809145.6361829.6361829z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m4.69184891 5.64612326c0 .39761431-.31809145.6361829-.63618291.6361829h-.23856858c-.39761432 0-.63618291-.31809145-.63618291-.6361829v-5.00994036c0-.39761431.31809145-.6361829.63618291-.6361829h.23856858c.39761432 0 .63618291.31809145.63618291.6361829z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m7.87276342 5.64612326c0 .39761431-.31809145.6361829-.6361829.6361829h-.23856859c-.39761432 0-.6361829-.31809145-.6361829-.6361829v-5.00994036c0-.39761431.31809145-.6361829.6361829-.6361829h.23856859c.39761431 0 .6361829.31809145.6361829.6361829z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m11.0536779 5.64612326c0 .39761431-.3180914.6361829-.6361829.6361829h-.2385686c-.39761427 0-.63618286-.31809145-.63618286-.6361829v-5.00994036c0-.39761431.31809145-.6361829.63618286-.6361829h.2385686c.3976143 0 .6361829.31809145.6361829.6361829z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.0755467 27.5347913c0 .0795228-.0795228.2385685-.2385686.2385685-.1590457 0-.2385686-.0795228-.2385686-.2385685v-2.2266402c0-.0795229.0795229-.2385686.2385686-.2385686.1590458 0 .2385686.0795229.2385686.2385686z",
      fill: "#ff4133"
    })));
  }

  if (heading === 'Water') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      css: baseCSS,
      height: "50",
      viewBox: "0 0 42 50",
      width: "42",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: ""
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m23.3306504 21.6460669c-.0037659-.0102491-.0081111-.0200101-.0130357-.0296735l-11.0201796-21.47134445c-.0457698-.08902062-.1366334-.14504895-.2359943-.14504895-.099361 0-.1902245.05602833-.2359943.14504895l-11.02017967 21.47134445c-.00502115.0096634-.00936638.019522-.01303569.0296735-1.16143175 3.1435407-1.04256556 6.5559002.33496897 9.6084681 1.37743796 3.0527631 3.84861865 5.3802814 6.95825849 6.5541433 1.27363525.4808284 2.60849.7459381 3.9678711.7877153.0027037.0000976.0054074.0000976.0081111.0000976s.0054074 0 .0081111-.0000976c1.3592845-.0419724 2.6942358-.3069845 3.9676779-.7877153 3.1095433-1.1738619 5.5808206-3.5014778 6.9583551-6.5541433 1.377438-3.0525679 1.4964973-6.4649274.3350655-9.6084681z",
      fill: "#68ccea"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#5abce2",
      transform: "translate(0 .438596)"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m13.0809666 35.9581358c-2.6600857-2.6174568-4.14011506-6.1129336-4.16763285-9.8425037-.00009724-.0119425.00058341-.0240793.00204195-.0360218l2.9825203-26.05378333-11.00750581 21.18491363c-.00505628.0096123-.0094319.0194188-.01312687.0295165-1.16955478 3.1269084-1.04985725 6.5212134.33731174 9.5576303 1.38707175 3.0366111 3.87553583 5.3518146 7.00692444 6.5194656 1.28254304.4782845 2.6267337.7419914 3.9956223.7835476.0027226.0000971.0054452.0000971.0081678.0000971s.0054453 0 .0081679-.0000971c.9979332-.0303904 1.9825451-.1802062 2.9399309-.443719-.742397-.4930427-1.4430797-1.0603623-2.0924218-1.6990458z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m40.7500579 26.9707379c-.0037922-.0100978-.0081678-.0199042-.0131268-.0295165l-5.4717623-10.5308993c-.0460899-.0885496-.1375889-.1442815-.2376448-.1442815s-.191555.0556348-.2376448.1442815l-5.4717623 10.5308993c-.0050562.0096123-.0094319.0194187-.0131268.0295165-.5893475 1.5756395-.5289639 3.2860453.1700658 4.8160506.6988352 1.5301025 1.9527908 2.6967825 3.5309314 3.2852686.6462305.2408899 1.3236738.3737143 2.0133689.3947837.0027226.0000971.0054452.0000971.0081678.0000971s.0054452 0 .0081678-.0000971c.6895006-.0210694 1.3669439-.1538938 2.0132717-.3947837 3.2569203-1.2145474 4.9173225-4.8488684 3.7010944-8.1013192z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m40.8272508 27.3011965c-.0038123-.0100316-.0082112-.0197738-.0131966-.0293231l-5.5008566-10.461871c-.0463349-.0879692-.1383205-.1433357-.2389084-.1433357-.0004888 0-.0010753.0001929-.0016618.0001929l-2.1654252 12.4257446c-.0020528.0116713-.0033236.0234391-.0038124.0352069-.0916923 1.8392506.547808 3.6032644 1.8008064 4.967462.5368597.5845321 1.159351 1.0646973 1.8416672 1.4310427.1890544-.0505437.3761537-.108804.5606137-.1768065 3.2742379-1.2066827 4.9434687-4.8171813 3.7207737-8.0483128z",
      fill: "#68ccea"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m29.9786479 44.1055216-3.644461-7.1170785c-.0460721-.0898117-.137536-.1463378-.2375533-.1463378-.1000174 0-.1914812.0565261-.2375534.1463378l-3.6449469 7.1170785c-.0050544.0097493-.0094283.0198924-.0131218.0300356-.8272572 2.2448966.3020932 4.7533194 2.5178321 5.5918567.4396292.1660333.9004477.2578145 1.3695281.2724876.0028188.0000985.0055403.0000985.0082619.0000985s.0054431 0 .0082619-.0000985c.4686916-.0146731.9294129-.1062574 1.3694309-.2725861 2.2156417-.8383403 3.3449921-3.3468616 2.5175405-5.5918566-.0037907-.0103402-.0082618-.0202864-.013219-.0299372z",
      fill: "#5abce2"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m29.9942885 44.1496787c-.0037562-.0103603-.0080903-.0203259-.0130022-.0299956l-3.611245-7.1309547c-.0456522-.0899868-.1362825-.1466231-.2353883-.1466231-.0282196 0-.0552835.0056241-.0812879.0143071l-1.4826378 8.9361161c-.0021189.0120377-.0032747.0245687-.0039489.0369024-.077628 1.6906059.6915253 3.2247218 1.9234611 4.1705691.3444143-.0397639.6828571-.1226464 1.0095498-.2474635 2.1954482-.8401721 3.3145056-3.3535843 2.4944992-5.6028578z",
      fill: "#68ccea"
    })));
  }

  if (heading === 'Industrial Automation') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      css: baseCSS,
      height: "50",
      viewBox: "0 0 47 50",
      width: "47",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: ""
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m35.4322826 5.43478261c.2776087.47978261.4372826 1.03630435.4372826 1.63043478 0 .59413044-.1596739 1.15065218-.4372826 1.63043478h3.6981522v-3.26086956z",
      fill: "#404040"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m9.54706522 5.43478261 1.62576088 3.26086956h14.9141304v-3.26086956z",
      fill: "#404040"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m26.086957 3.804348h3.26087v6.521739h-3.26087z",
      fill: "#ff6a00"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m35.4322826 5.43478261c-.563913-.97434783-1.6167391-1.63043478-2.8235869-1.63043478-1.8009783 0-3.2608696 0-3.2608696 0v6.52173917h3.2608696c1.2067391 0 2.2596739-.656087 2.8235869-1.63043483.2776087-.4797826.4372826-1.03630434.4372826-1.63043478 0-.59413043-.1596739-1.15065217-.4372826-1.63043478z",
      fill: "#ffaa19"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m46.7391304 3.26086957h-2.173913v-3.26086957h-3.2608696v3.26086957h1.6304348v7.60869563h-1.6304348v6.5217391h3.2608696v-6.5217391h2.173913z",
      fill: "#404040"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m39.130435 3.26087h3.804348v7.608696h-3.804348z",
      fill: "#606060"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.1073913 36.9565217h-8.15217391l-.72467391 3.2608696h8.87684782z",
      fill: "#bfbfbf"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.1073913 43.4782609h-9.60152173l-.72456522 3.2608695h10.32608695z",
      fill: "#bfbfbf"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.1073913 46.7391304h10.326087l-.724674-3.2608695h-9.601413z",
      fill: "#a3a3a3"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.1073913 40.2173913h8.8767391l-.7245652-3.2608696h-8.1521739z",
      fill: "#a3a3a3"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.1073913 30.4346739c-1.7947826-.001413-3.5220652-.9932609-4.3773913-2.7086956l-2.90978261-5.836087c-.55228261 1.0992391-.865 2.3395652-.865 3.653587v8.1521739h8.15217391z",
      fill: "#ffaa19"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16.2897826 29.9208696-1.455-2.9182609c-.8058696.4018478-1.7848913.0742391-2.1866304-.7316304-.4018479-.8058696-.0742392-1.7847826.7316304-2.1866305l-7.75847825-15.56119563c-.80728261.4026087-1.78630435.075-2.18804348-.73086956-.12565217-.25195652-.1798913-.52086957-.17065217-.78380435.01923913-.57923913.34717391-1.12978261.9022826-1.40652174l-1.455-2.91826087c-2.41760869 1.20543478-3.40032608 4.14228261-2.1948913 6.56l6.30521739 12.64619565 2.90978261 5.836087c.8553261 1.7154347 2.5826087 2.7072826 4.3773913 2.7086956v3.2609783h8.1521739s0-3.6498913 0-8.1521739c0-4.0008696-2.8829348-7.326087-6.6841304-8.0178261l2.9093478 5.8353261c1.2053261 2.4176087.2226087 5.3545652-2.195 6.5598913z",
      fill: "#ff6a00"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m1.607391 46.73913h12.5v3.26087h-12.5z",
      fill: "#606060"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.107391 46.73913h12.5v3.26087h-12.5z",
      fill: "#404040"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m3.781304 40.217391h10.326087v3.26087h-10.326087z",
      fill: "#8f8f8f"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.107391 40.217391h10.326087v3.26087h-10.326087z",
      fill: "#606060"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m5.955217 33.695652h8.152174v3.26087h-8.152174z",
      fill: "#8f8f8f"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m14.107391 33.695652h8.152174v3.26087h-8.152174z",
      fill: "#606060"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m9.26978261 4.87869565c-1.20532609-2.41760869-4.14228261-3.40032608-6.55989131-2.195l1.455 2.91826087c.80586957-.40184782 1.78489131-.07423913 2.18663044.73163044.12565217.25195652.1798913.52086956.17065217.78380434-.01923913.57869566-.34663043 1.12880435-.90076087 1.40576087l7.75847826 15.56119563c.8058696-.4018478 1.7848913-.0742391 2.1866304.7316305.4017392.8058695.0742392 1.7847826-.7316304 2.1866304l1.455 2.9182609c2.4176087-1.2053261 3.4002174-4.1422826 2.1948913-6.5598913l-2.9093478-5.8353261-4.4026087-8.83000003-1.62576088-3.26086956z",
      fill: "#ff3d0d"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#404040"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "14.107391",
      cy: "25.543478",
      r: "1.630435"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m3.2626087 7.00858696c-.00934783.26293478.045.53184782.17065217.78380434.40173913.80586957 1.38076087 1.13347827 2.18663043.73163044.55554348-.27782609.88304348-.82782609.90228261-1.40652174.00934783-.26282609-.045-.53184783-.17065217-.78380435-.40173913-.80586956-1.38076087-1.13347826-2.18663044-.73163043-.55510869.27663043-.88304347.82717391-.9022826 1.40652174z"
    }))));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (SolutionsIcon);
var baseCSS =  true ? {
  name: "5ury84",
  styles: "margin-bottom:0.875rem;"
} : undefined;

/***/ }),

/***/ "./src/components/homepage/SupportedSolutions.js":
/*!*******************************************************!*\
  !*** ./src/components/homepage/SupportedSolutions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _SolutionsIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SolutionsIcon */ "./src/components/homepage/SolutionsIcon.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");









var SupportedSolutions = function SupportedSolutions(_ref) {
  var heading = _ref.heading,
      blocks = _ref.blocks;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], null, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: blocksCSS
  }, blocks.map(function (block) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: blockCSS,
      key: block.heading
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_SolutionsIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: block.heading
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["CopyHeading"], null, block.heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["BodyText"], null, block.copy));
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    css: cutoutCSS,
    viewBox: "0 0 1280 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "M 0,100 Q 640,0 1280,100 Z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("line", {
    x1: "0",
    y1: "100",
    x2: "1280",
    y2: "100",
    stroke: "#fff"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SupportedSolutions);
var baseCSS =  true ? {
  name: "kl2iy4",
  styles: "background:#f8f8f8;padding:3.125rem 0 8.625rem;position:relative;text-align:center;"
} : undefined;
var blocksCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:flex-start;flex-wrap:wrap;justify-content:flex-start;margin:0 -1.125rem 2.5rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
var blockCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin-bottom:2.125rem;padding:0 1.125rem;text-align:left;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{width:33.3333%;}" + ( true ? "" : undefined));
var cutoutCSS =  true ? {
  name: "aerbtb",
  styles: "bottom:0;fill:#fff;left:0;height:auto;position:absolute;right:0;width:100%;"
} : undefined;

/***/ }),

/***/ "./src/components/homepage/WhatWeDo.js":
/*!*********************************************!*\
  !*** ./src/components/homepage/WhatWeDo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/Button */ "./src/components/styled/Button.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");










var WhatWeDo = function WhatWeDo(_ref) {
  var heading = _ref.heading,
      blocks = _ref.blocks,
      cta = _ref.cta,
      ctaUrl = _ref.ctaUrl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], null, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: blocksCSS
  }, blocks.map(function (block, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      key: block.heading,
      css:
      /*#__PURE__*/
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(rowCSS, " flex-direction:", index % 2 === 0 ? 'row' : 'row-reverse', ";" + ( true ? "" : undefined))
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: imageCSS,
      image: block.image
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: contentCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["CopyHeading"], null, block.heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["BodyText"], null, block.copy)));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: ctaUrl
  }, cta)));
};

/* harmony default export */ __webpack_exports__["default"] = (WhatWeDo);
var baseCSS =  true ? {
  name: "1jqbvha",
  styles: "background:#fff;padding:3.75rem 0 3.125rem;text-align:center;"
} : undefined;
var blocksCSS =  true ? {
  name: "1ni6929",
  styles: "margin:0 auto 2.5rem;"
} : undefined;
var rowCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:flex-start;justify-content:space-between;margin-bottom:3.75rem;text-align:left;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
var contentCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{width:50%;}" + ( true ? "" : undefined));
var imageCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("height:18.75rem;margin-bottom:0.875rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{margin-bottom:0;width:40%;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/inputs/SelectInput.js":
/*!**********************************************!*\
  !*** ./src/components/inputs/SelectInput.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");






var SelectInput = function SelectInput(_ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("select", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(inputCSS, " ", style,  true ? "" : undefined),
    type: "text",
    name: name,
    placeholder: placeholder
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", null, "Option 1"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", null, "Option 2")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    css: downArrowCSS,
    viewBox: "0 0 6 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "m70 11 3 6h-6z",
    fillRule: "evenodd",
    transform: "matrix(1 0 0 -1 -67 17)"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectInput);
var baseCSS =  true ? {
  name: "79elbk",
  styles: "position:relative;"
} : undefined;
var inputCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;background:#fff;border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, " solid;border-radius:1.25rem;color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, ";display:flex;font-family:'Dosis' font-size:0.875rem;font-weight:500;height:2.5rem;justify-content:center;outline:none;padding:0 1.25rem 0 1rem;width:100%;appearance:none;-moz-appearance:none;-webkit-appearance:none;&::placeholder{color:#9D9D9D;opacity:1;}" + ( true ? "" : undefined));
var downArrowCSS =  true ? {
  name: "1lhqxi6",
  styles: "height:0.375rem;position:absolute;right:1rem;top:50%;transform:translateY(-50%);width:0.375rem;"
} : undefined;

/***/ }),

/***/ "./src/components/inputs/TextInput.js":
/*!********************************************!*\
  !*** ./src/components/inputs/TextInput.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");






var TextInput = function TextInput(_ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(baseCSS, " ", style,  true ? "" : undefined),
    type: "text",
    name: name,
    placeholder: placeholder
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;background:#fff;border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, " solid;border-radius:1.25rem;color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, ";display:flex;font-family:'Dosis' font-size:0.875rem;font-weight:500;height:2.5rem;justify-content:center;outline:none;padding:0 1.25rem 0 1rem;width:100%;appearance:none;-moz-appearance:none;-webkit-appearance:none;&::placeholder{color:#9D9D9D;opacity:1;}&:focus{border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, " solid;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/inputs/TextareaInput.js":
/*!************************************************!*\
  !*** ./src/components/inputs/TextareaInput.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");






var TextareaInput = function TextareaInput(_ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("textarea", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(baseCSS, " ", style,  true ? "" : undefined),
    type: "text",
    name: name,
    placeholder: placeholder,
    rows: 8
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextareaInput);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;background:#fff;border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, " solid;border-radius:1.25rem;color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, ";display:flex;font-family:'Dosis' font-size:0.875rem;font-weight:500;justify-content:center;outline:none;padding:0.75rem 1.25rem;width:100%;appearance:none;-moz-appearance:none;-webkit-appearance:none;&::placeholder{color:#9D9D9D;opacity:1;}&:focus{border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, " solid;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/product/Banner.js":
/*!******************************************!*\
  !*** ./src/components/product/Banner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");








var Banner = function Banner(_ref) {
  var image = _ref.image,
      title = _ref.title,
      copy = _ref.copy;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    style: imageCSS
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: innerContainerCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], {
    style: sectionHeadingCSS
  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_4__["BodyText"], null, copy))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);
var baseCSS =  true ? {
  name: "rb342j",
  styles: "align-items:flex-end;display:flex;height:35vh;position:relative;z-index:0;"
} : undefined;
var imageCSS =  true ? {
  name: "aklky2",
  styles: "height:100%;position:absolute;width:100%;z-index:0;&:before{background-color:rgba(0,0,0,0.15);bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:1;}"
} : undefined;
var innerContainerCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background:#fff;border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["colors"].black, " solid;box-shadow:", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["styles"].boxShadow, ";margin:0 auto;padding:1.25rem;position:relative;transform:translateY(-4rem);z-index:1;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{padding:1.25rem 6.25rem;width:66.67%;}" + ( true ? "" : undefined));
var sectionHeadingCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-size:1.75rem;margin-bottom:1rem;text-align:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{font-size:2.25rem;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/product/Section1.js":
/*!********************************************!*\
  !*** ./src/components/product/Section1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var Section1 = function Section1(_ref) {
  var features = _ref.features;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: featuresCSS
  }, features.map(function (feature) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: featureCSS,
      key: feature.heading
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: iconCSS
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], null, feature.heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
      theme: "large"
    }, feature.copy));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section1);
var baseCSS =  true ? {
  name: "bn78ri",
  styles: "padding:0.375rem 0 3.125rem;"
} : undefined;
var featuresCSS =  true ? {
  name: "9713kc",
  styles: "align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 -1.125rem 2.5rem;"
} : undefined;
var featureCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:0 1.125rem;text-align:left;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{width:33.3333%;}" + ( true ? "" : undefined));
var iconCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background-color:", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray, ";border-radius:50%;height:2.5rem;margin-bottom:0.875rem;width:2.5rem;" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/product/Section2.js":
/*!********************************************!*\
  !*** ./src/components/product/Section2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");






var Section2 = function Section2(_ref) {
  var heading = _ref.heading,
      copy = _ref.copy;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: contentCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["SectionHeading"], {
    style: sectionHeadingCSS
  }, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    theme: "large"
  }, copy))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section2);
var baseCSS =  true ? {
  name: "1ewtcah",
  styles: "background-color:#f8f8f8;padding:3.125rem 0 4.375rem;"
} : undefined;
var sectionHeadingCSS =  true ? {
  name: "1qb4iam",
  styles: "margin-bottom:1.125rem;text-align:center;"
} : undefined;
var contentCSS =  true ? {
  name: "1o3dahd",
  styles: "margin:0 auto;width:80%;"
} : undefined;

/***/ }),

/***/ "./src/components/product/Section3.js":
/*!********************************************!*\
  !*** ./src/components/product/Section3.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var Section3 = function Section3(_ref) {
  var features = _ref.features;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: featuresCSS
  }, features.map(function (feature) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: featureCSS,
      key: feature.heading
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], {
      theme: "large"
    }, feature.heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: dividerCSS
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
      theme: "large"
    }, feature.copy));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section3);
var baseCSS =  true ? {
  name: "lrimfb",
  styles: "padding:4.375rem 0 5.625rem;"
} : undefined;
var featuresCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto 2.5rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{width:80%;}" + ( true ? "" : undefined));
var featureCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:0 1.125rem;text-align:left;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{width:50%;}" + ( true ? "" : undefined));
var dividerCSS =  true ? {
  name: "1wu910e",
  styles: "background-color:#d8d8d8;height:1px;margin:1.875rem 0 2.125rem;width:100%;"
} : undefined;

/***/ }),

/***/ "./src/components/product/Section4.js":
/*!********************************************!*\
  !*** ./src/components/product/Section4.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/Button */ "./src/components/styled/Button.js");








var Section4 = function Section4(_ref) {
  var heading = _ref.heading,
      copy = _ref.copy,
      cta = _ref.cta,
      url = _ref.url,
      image = _ref.image;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    style: imageCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], {
    style: sectionHeadingCSS
  }, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_4__["BodyText"], {
    style: bodyTextCSS,
    theme: "large"
  }, copy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: "secondary",
    url: url,
    style: buttonCSS
  }, cta)));
};

/* harmony default export */ __webpack_exports__["default"] = (Section4);
var baseCSS =  true ? {
  name: "1mtnbvq",
  styles: "align-items:center;display:flex;min-height:20.25rem;padding:3.125rem 0;position:relative;"
} : undefined;
var imageCSS =  true ? {
  name: "9azlr3",
  styles: "bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1;&:after{background:rgba(0,0,0,0.8);bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:0;}"
} : undefined;
var sectionHeadingCSS =  true ? {
  name: "10hsip0",
  styles: "color:#fff;margin-bottom:1.125rem;"
} : undefined;
var bodyTextCSS =  true ? {
  name: "16qv2i2",
  styles: "color:#fff;"
} : undefined;
var buttonCSS =  true ? {
  name: "1uk1gs8",
  styles: "margin:0;"
} : undefined;

/***/ }),

/***/ "./src/components/products/Features.js":
/*!*********************************************!*\
  !*** ./src/components/products/Features.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");






var Features = function Features(_ref) {
  var features = _ref.features;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: featuresCSS
  }, features.map(function (_ref2) {
    var feature = _ref2.feature;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: featureCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: iconCSS
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], {
      style: copyHeadingCSS,
      key: feature
    }, feature));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);
var featuresCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background-color:#fff;box-shadow:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["styles"].boxShadow, ";margin-bottom:1.5rem;padding:2.1875rem 2rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{margin-bottom:0;width:48%;}" + ( true ? "" : undefined));
var featureCSS =  true ? {
  name: "1wtnmgu",
  styles: "align-items:center;display:flex;margin-bottom:1.5rem;&:last-of-type{margin-bottom:0;}"
} : undefined;
var iconCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background-color:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].gray, ";border-radius:50%;height:2.5rem;margin-right:1.5rem;min-width:2.5rem;" + ( true ? "" : undefined));
var copyHeadingCSS =  true ? {
  name: "rkk3mp",
  styles: "font-size:1.25rem;"
} : undefined;

/***/ }),

/***/ "./src/components/products/ProductExcerpts.js":
/*!****************************************************!*\
  !*** ./src/components/products/ProductExcerpts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Features */ "./src/components/products/Features.js");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductInfo */ "./src/components/products/ProductInfo.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");









var ProductExcerpts = function ProductExcerpts(_ref) {
  var products = _ref.products;
  return products.map(function (product, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("article", {
      css: articleCSS,
      key: product.name
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      theme: "secondary",
      style: containerCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Features__WEBPACK_IMPORTED_MODULE_4__["default"], {
      features: product.features
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ProductInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      theme: index % 2 === 0 && 'secondary'
    })));
  });
};

var articleCSS =  true ? {
  name: "18ivrz4",
  styles: "padding:4.375rem 0;&:nth-of-type(2n - 1){background-color:#717171;& > div{flex-direction:row;}}"
} : undefined;
var containerCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("flex-direction:row-reverse;justify-content:space-between;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
/* harmony default export */ __webpack_exports__["default"] = (ProductExcerpts);

/***/ }),

/***/ "./src/components/products/ProductInfo.js":
/*!************************************************!*\
  !*** ./src/components/products/ProductInfo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/Button */ "./src/components/styled/Button.js");








var ProductInfo = function ProductInfo(_ref) {
  var product = _ref.product,
      theme = _ref.theme;
  var name = product.name,
      description = product.description,
      cta = product.cta,
      cta_url = product.cta_url;
  var isSecondary = theme === 'secondary';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], {
    style:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("color:", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].black, ";" + ( true ? "" : undefined)),
    theme: "large"
  }, name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    style:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("border-left:2px ", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray, " solid;color:", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray, ";padding-left:1.5rem;& > p{margin-bottom:0;}" + ( true ? "" : undefined))
  }, description), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styled_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: cta_url,
    style: buttonCSS,
    theme: theme
  }, cta));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;flex-direction:column;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{width:48%;}" + ( true ? "" : undefined));
var buttonCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("margin:1.5rem 0 0;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{margin:auto 0 0;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/ContactForm.js":
/*!**********************************************!*\
  !*** ./src/components/shared/ContactForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _inputs_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/TextInput */ "./src/components/inputs/TextInput.js");
/* harmony import */ var _inputs_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/SelectInput */ "./src/components/inputs/SelectInput.js");
/* harmony import */ var _inputs_TextareaInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/TextareaInput */ "./src/components/inputs/TextareaInput.js");
/* harmony import */ var _styled_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/SubmitButton */ "./src/components/styled/SubmitButton.js");









var ContactForm = function ContactForm(_ref) {
  var heading = _ref.heading;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["CopyHeading"], {
    theme: "large"
  }, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_inputs_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Enter first name",
    name: "firstname",
    style: inputCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_inputs_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Enter last name",
    name: "lastname",
    style: inputCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: "Select topic",
    name: "topic",
    style: inputCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_inputs_TextareaInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Enter your message",
    name: "message",
    style: inputCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], null, "SUBMIT"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
var inputCSS =  true ? {
  name: "1sowyjy",
  styles: "margin-bottom:1.25rem;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/DownArrow.js":
/*!********************************************!*\
  !*** ./src/components/shared/DownArrow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");






var DownArrow = function DownArrow(_ref) {
  var isActive = _ref.isActive,
      isSecondary = _ref.isSecondary;
  var styleProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    fill: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue : '#fff',
    from: {
      fill: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue : '#fff'
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " transform:", isActive ? 'rotate(180deg)' : '', ";" + ( true ? "" : undefined)),
    viewBox: "0 0 6 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_2__["animated"].path, {
    style: styleProps,
    d: "m70 11 3 6h-6z",
    fillRule: "evenodd",
    transform: "matrix(1 0 0 -1 -67 17)"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DownArrow);
var baseCSS =  true ? {
  name: "1a4p2lf",
  styles: "height:0.375rem;margin-left:0.25rem;position:relative;top:-1px;width:0.375rem;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/shared/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _shared_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Logo */ "./src/components/shared/Logo.js");
/* harmony import */ var _shared_SocialIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/SocialIcon */ "./src/components/shared/SocialIcon.js");









var nav = [{
  name: 'Products',
  slug: '/products'
}, {
  name: 'Partners',
  slug: '/partners'
}, {
  name: 'News',
  slug: '/news'
}, {
  name: 'About',
  slug: '/about'
}, {
  name: 'Contact',
  slug: '/contact'
}];

var Footer = function Footer() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: rowCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "white"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    css: navCSS
  }, nav.map(function (navItem) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      css: navLinkCSS,
      to: navItem.slug,
      key: navItem.slug
    }, navItem.name);
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: rowCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: copyrightCSS
  }, "Copyright \xA9 2006 \u2014 ", new Date().getFullYear(), " Grid Net, Inc. All rights reserved."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: socialCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    css: socialLinkCSS,
    href: "https://www.linkedin.com/company/grid-net_2",
    rel: "noopener noreferrer",
    target: "_blank"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared_SocialIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    platform: "linked-in"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    css: socialLinkCSS,
    href: "https://twitter.com/grid_net",
    rel: "noopener noreferrer",
    target: "_blank"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared_SocialIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    platform: "twitter"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, ";padding:3.125rem 0 2.8125rem;text-align:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{text-align:left;}" + ( true ? "" : undefined));
var rowCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;justify-content:space-between;margin-bottom:2.5rem;&:last-of-type{margin-bottom:0;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
var navCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;margin-top:1.5rem;justify-content:center;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{margin-top:0;}" + ( true ? "" : undefined));
var navLinkCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("color:#fff;font-size:0.75rem;font-weight:700;margin-right:1.875rem;text-decoration:none;&:last-of-type{margin-right:0;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{&:hover{color:", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].green, ";}}" + ( true ? "" : undefined));
var copyrightCSS =  true ? {
  name: "fu9xy5",
  styles: "color:#fff;font-size:0.75rem;"
} : undefined;
var socialCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;display:flex;justify-content:center;margin-top:1.5rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{margin-top:0;}" + ( true ? "" : undefined));
var socialLinkCSS =  true ? {
  name: "1exzbt",
  styles: "margin-right:3.125rem;&:last-of-type{margin-right:0;}"
} : undefined;

/***/ }),

/***/ "./src/components/shared/Header.js":
/*!*****************************************!*\
  !*** ./src/components/shared/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var the_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! the-platform */ "./node_modules/the-platform/index.js");
/* harmony import */ var the_platform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(the_platform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./src/components/shared/Logo.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileNav */ "./src/components/shared/MobileNav.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav */ "./src/components/shared/Nav.js");










var navItems = [{
  name: 'Products',
  slug: '/products',
  children: [{
    name: 'Smart Grid Applications',
    slug: '/products/smart-grid-applications'
  }, {
    name: 'IoT Network Platform',
    slug: '/products/iot-network-platform'
  }]
}, {
  name: 'Partners',
  slug: '/partners'
}, {
  name: 'News',
  slug: '/news'
}, {
  name: 'About',
  slug: '/about'
}, {
  name: 'Contact',
  slug: '/contact'
}];

var Header = function Header(_ref) {
  var theme = _ref.theme;

  if (process.browser) {
    var _useWindowScrollPosit = Object(the_platform__WEBPACK_IMPORTED_MODULE_3__["useWindowScrollPosition"])(),
        y = _useWindowScrollPosit.y;

    var _isSecondary = y > 100 || theme === 'secondary';

    var backgroundProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
      y: _isSecondary ? '0%' : '-110%',
      from: {
        y: '-110%'
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
      css: baseCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
      css: backgroundCSS,
      style: {
        transform: backgroundProps.y.interpolate(function (y) {
          return "translateY(" + y + ")";
        })
      }
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/"
    }, _isSecondary ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      theme: "white"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isSecondary: _isSecondary,
      navItems: navItems
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_MobileNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isSecondary: _isSecondary,
      navItems: navItems
    })));
  }

  var isSecondary = false;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    css: backgroundCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, isSecondary ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], null) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: "white"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isSecondary: isSecondary,
    navItems: navItems
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_MobileNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isSecondary: isSecondary,
    navItems: navItems
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:center;display:flex;height:5rem;justify-content:space-between;left:0;padding:0 5%;position:fixed;right:0;top:0;z-index:1;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{padding:0 3.25rem;}" + ( true ? "" : undefined));
var backgroundCSS =  true ? {
  name: "1flid02",
  styles: "background-color:#fff;bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/shared/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var _public_static_d_4130953669_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/static/d/4130953669.json */ "./public/static/d/4130953669.json");
var _public_static_d_4130953669_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/4130953669.json */ "./public/static/d/4130953669.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styled_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/GlobalStyle */ "./src/components/styled/GlobalStyle.js");
/* harmony import */ var _static_icons_favicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/icons/favicon.png */ "./src/static/icons/favicon.png");
/* harmony import */ var _static_icons_favicon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_icons_favicon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./src/components/shared/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./src/components/shared/Footer.js");












var Layout = function Layout(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: SiteQuery,
    data: _public_static_d_4130953669_json__WEBPACK_IMPORTED_MODULE_1__
  }, function (_ref2) {
    var site = _ref2.site;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: site.siteMetadata.title
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("html", {
      lang: "en"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      charSet: "UTF-8"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "icon",
      href: _static_icons_favicon_png__WEBPACK_IMPORTED_MODULE_6___default.a
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: _static_icons_favicon_png__WEBPACK_IMPORTED_MODULE_6___default.a
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: baseCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      theme: theme
    }), children, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);
var SiteQuery = "4130953669";
var baseCSS =  true ? {
  name: "zf0iqh",
  styles: "display:flex;flex-direction:column;min-height:100vh;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/Logo.js":
/*!***************************************!*\
  !*** ./src/components/shared/Logo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var Logo = function Logo(_ref) {
  var theme = _ref.theme,
      style = _ref.style;

  if (theme === 'white') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      css:
      /*#__PURE__*/
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " ", style,  true ? "" : undefined)
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      css: vectorCSS,
      height: "180",
      viewBox: "0 0 600 180",
      width: "600",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      fillRule: "evenodd"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "#fff"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m34.6863407 19.3554793c-27.48415256 16.0120117-31.07511063 95.9199367-1.2688898 94.6141277.9389784 0-15.2266773 19.802662-7.2326717 29.919515-5.4054705-1.888986-15.5692776-13.451104-19.46476918-22.36357-10.1511182-23.1369128-6.26831549-47.8585461-4.4791809-57.0499225.83746725-3.2074735 2.15711261-7.41649 3.18491333-10.5605747l.22840016-.5578214c1.82720128-4.6020272 4.97404789-13.1088046 7.10578279-16.4810889 2.1317348-3.3722843 10.3287627-14.0469588 12.7650311-16.6966108 2.9057576-3.1187291 11.2804301-7.6827229 14.3892101-8.3292887 1.2562008-.266233-5.6465595 7.7587895-5.2278259 7.5052343z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m98.3598821 86.0628688c36.5217499-18.6343978 82.7259519-34.7537235 85.6827159.9018693.220957 2.8198331.220957 5.6526571 0 8.4724903l-.10152.7875478c-2.829864 21.1494698-13.730553 40.5587128-29.110804 52.9562398 13.882833-16.436885 18.793854-36.836914 6.954107-47.532322-13.958974-12.6007649-41.077452-6.7322634-65.7340745 5.843097-12.4794537 6.311813-24.0759026 14.23825-34.4913541 23.575625-4.3405635-6.293143-7.7592012-13.175601-10.1519805-20.438136 3.9719624-1.676715 7.9946847-3.607477 12.017407-5.652561 6.5860974-3.30262 13.1721948-7.1133352 19.4029729-10.5683837 4.8348807-2.7310127 10.0758407-5.5636444 15.5325303-8.3454665z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m90.0240118 5.04639637c55.1852302 12.40740893 55.1852302 12.40740893 60.0683172 11.05133873-.2283-.6210041 1.407851 4.2709876 3.805003 6.4128181 4.223554 4.2202934 7.102673 3.9161281 12.594561 10.9372768l3.805003 4.4610908c1.826402 3.181062.2283 4.7272355-1.560051 5.9312231-4.921138 3.3331446-28.651674 2.5347107-70.2530427-14.8914255-13.2033611-5.56369-22.9949027-9.6825949-31.5307932-11.7990784l.1902501-.2661446-.3044002.2407975c-10.7808424-2.6614462-16.3615138-2.0024214-30.5161257 2.6741198-25.5569382 8.4532603-34.05477866 44.7122971-34.05477866 44.7122971 2.42251871-5.56369 4.54063716-39.6935698 38.89981606-58.80528864 11.1993928-6.22271481 27.5609065-5.41160738 48.8562411-.65902479z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m51.3640799 110.358074c2.3892794 7.250649 5.8029166 14.121844 10.1371311 20.404689 19.4632916 28.216552 54.373037 38.539372 80.083335 26.326994l1.571256-.773577c4.076185-2.082998 7.923827-4.5864 11.480301-7.469461 15.357753-12.377238 26.242498-31.703991 29.068223-52.8695759l-.810971 6.3407979c-.772956 3.639619-1.267141 5.909624-1.659955 7.608958s-1.153098 3.918614-2.217497 7.393371c-1.355841 3.449394-2.192155 5.567221-2.901754 7.22851s-1.812012 3.690345-3.459296 6.962197c-1.926055 3.195762-3.104496 5.072638-4.130881 6.733928-1.026384 1.661289-2.458254 3.398667-4.650409 6.340798-2.432911 2.815314-3.902795 4.52733-5.385351 6.087166-1.482555 1.559837-3.205867 3.157718-5.942893 5.7194-2.699011 2.21928-4.878494 4.007385-7.501477 5.871579-2.280854 1.597882-4.434995 2.929449-7.032634 4.52733-1.444542.786259-2.876411 1.559837-4.358967 2.320733-5.902335 2.99994-12.097505 5.383959-18.487592 7.114375l-2.787712.672125-2.762368.596035-2.534282.456537-2.534283.39313-2.445583.304358-2.5342829.240951-2.5342827.16486-2.5342828.114135h-2.6736683-2.7116826l-2.9777822-.190224-3.0284679-.215587h-.4054853c-20.5023476-2.827996-42.3351936-15.306688-56.6412198-33.568187-8.1393629-10.130651-13.4398132-22.245698-15.3577535-35.102659-3.62402439-26.1367704 8.1350476-56.7755077 47.4417733-86.6153044 2.8383967-2.1558714 5.7654933-4.1722453 8.5785472-6.3407983-5.6932726 7.9446992-10.3436906 16.5881302-13.8371839 25.7182778-8.1603905 26.5299-7.5648341 49.2426395-1.5205697 67.5041389z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m170.348593 38.0937769c-19.175283-15.8460628-44.38723-26.3085273-63.156687-17.9410951-27.482036 12.1765819-40.3543326 42.230773-44.3872295 62.3811749-7.2034133 36.0091623 9.0042666 74.9132773 53.9368255 79.7508973-47.4436079-.203154-87.7852586-56.070683-63.6893339-119.353357 3.6904811-9.7006346 8.8774459-22.4231946 17.1461527-28.8352632 10.6022068-8.12618608 23.3984111-13.95418512 38.9593052-14.09385394 39.961189-.34282348 61.190967 38.09149704 61.190967 38.09149704z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m411.583616 150.278622v1.830396h-10.40764v-16.03174h10.141428v1.767279h-8.125819v5.049367h6.46516v1.641044h-6.46516v5.768901zm12.600724 1.767279h-1.73672v-7.57405c.090228-.836391-.171348-1.672652-.722576-2.310086-.472728-.434304-1.093548-.673465-1.73672-.669041-.924989-.007425-1.802709.406342-2.383235 1.123484-.669252.846005-1.011147 1.903208-.963436 2.979127v6.513683h-1.85081v-11.853389h1.724042v2.183852c.678302-1.49671 2.154732-2.476852 3.803036-2.524684.808108-.020126 1.600618.22372 2.256467.694288.560601.383333 1.000242.917437 1.267679 1.540057.290959 1.008253.410923 2.057786.35495 3.105361zm13.576836 0h-1.838134c-.063384-.378703-.139445-1.085614-.202828-2.133358-.759397 1.592227-2.416892 2.562531-4.183339 2.448943-1.124657.075229-2.231796-.307449-3.067782-1.060367-.697133-.655029-1.087763-1.570288-1.077527-2.524683-.025665-1.187021.551003-2.307026 1.533891-2.979127 1.575815-.910544 3.394894-1.31602 5.210158-1.161354h1.584599c.032734-.685222-.044291-1.371265-.228183-2.03237-.157392-.448128-.491634-.812879-.925405-1.009873-.580488-.276761-1.220515-.406829-1.863487-.378703-1.876164 0-2.966368.706911-3.27061 2.133358l-1.711366-.290339c.422559-2.188059 2.176181-3.282088 5.260865-3.282088 1.26433-.127561 2.525522.269755 3.486116 1.098237.814541 1.086223 1.185929 2.439241 1.039496 3.787025v5.049367c-.012002.806697.073116 1.611921.253536 2.398449zm-2.040962-5.933006c-.760608 0-1.331063 0-1.724043 0-1.178926-.06167-2.353784.181881-3.410055.706911-.791929.397779-1.284747 1.212413-1.267679 2.095487-.00749.561923.228015 1.099925.646516 1.47694.534062.4342 1.213531.650715 1.901518.605924 1.049967.025212 2.057238-.413902 2.750862-1.199224.708489-.776063 1.09375-1.791579 1.077527-2.840269.050707-.290339.03803-.542807.025354-.845769zm6.89617 5.996123h-.900052v-16.03174h1.850811v6.147604c.617901-1.386064 1.988722-2.287884 3.511469-2.310085 1.333363-.014443 2.599657.581141 3.435409 1.615798 1.014137 1.339045 1.509246 2.997401 1.394446 4.670664.052733 1.591567-.429045 3.155196-1.369093 4.443443-.813119 1.136546-2.135627 1.802096-3.536823 1.779901-1.583751.028298-3.039176-.863957-3.726974-2.284838zm.950759-4.658041c-.009605.998715.39382 1.95738 1.115557 2.650918.587454.511861 1.336647.802235 2.117023.820522.92658.005473 1.788043-.473765 2.269144-1.262342.635036-.99683.940895-2.166559.874698-3.345205.069437-1.249955-.22082-2.493682-.836667-3.585051-.486485-.808251-1.374001-1.291191-2.319852-1.262342-.806166.013276-1.571507.355545-2.117023.946757-.630985.651226-1.020031 1.497291-1.10288 2.398449zm13.576836 4.658041h-1.850811v-16.03174h1.850811zm12.131682-3.534557 1.711366.353456c-.313245 1.021928-.960156 1.910462-1.838133 2.524683-.938425.665718-2.068006 1.011137-3.219904.984627-1.504952.052818-2.953504-.573327-3.94248-1.704162-2.033455-2.685209-2.00748-6.394281.063384-9.050989.983036-1.137298 2.423118-1.780293 3.929803-1.754655 1.449177-.069211 2.850404.526129 3.803036 1.615797 1.048407 1.377725 1.565681 3.084264 1.45783 4.809522h-8.645567c-.169171 1.31726.242247 2.642984 1.128234 3.635544.660769.586652 1.510795.918065 2.395912.934133 1.46285-.022062 2.734544-1.005277 3.118489-2.411073zm-.114091-3.610297c-.004456-.603828-.116037-1.20212-.329596-1.767278-.21751-.511491-.578402-.94975-1.039496-1.262342-.503917-.375579-1.120163-.571237-1.749397-.55543-.885859-.014077-1.736879.343221-2.345205.984626-.66782.725731-1.0504 1.66695-1.077526 2.650918zm20.14341-4.708535-4.779147 13.115731c-.697223 1.918759-1.800104 2.865515-3.308641 2.865515-.540955-.006582-1.078425-.087288-1.597275-.239845v-1.363329c.415649.100522.840289.159722 1.267679.176728.535126.012794 1.057035-.166417 1.470507-.504937.593647-.706155 1.002972-1.547375 1.191617-2.448942l-4.170662-11.664038h1.888841l3.181873 8.836392 3.27061-8.836392zm6.680666 12.168974c-1.486988.049666-2.905408-.623601-3.803036-1.805148-.943841-1.30552-1.425422-2.886272-1.369092-4.493937-.078729-1.647199.474111-3.262636 1.546567-4.519183.958804-1.0898 2.348125-1.707751 3.803036-1.691538 1.507682-.060473 2.952076.606979 3.879096 1.792525.981892 1.265338 1.48862 2.832707 1.432476 4.43082.072933 1.648057-.474004 3.263956-1.533891 4.531806-1.000707 1.120749-2.449928 1.74055-3.955156 1.691538zm.139444-1.51481c.928787.002032 1.805383-.427418 2.370559-1.161354.717176-1.06675 1.052144-2.343162.950759-3.622921.116445-1.268798-.240025-2.535903-1.001466-3.559803-.576693-.701081-1.435189-1.112349-2.345205-1.123484-.913287-.005984-1.776622.414522-2.332529 1.136107-.730556 1.027771-1.071887 2.280014-.963435 3.534557-.121891 1.303087.219042 2.607472.963435 3.686038.584093.689413 1.4525 1.075297 2.357882 1.047743zm18.064418 1.262342h-1.660659v-2.272215c-.625616 1.540314-2.134575 2.542051-3.803035 2.524683-1.102078.036883-2.161111-.427688-2.87763-1.262341-.75078-.972642-1.120288-2.184193-1.039496-3.408323v-7.57405h1.85081v7.57405c-.093798.877511.171219 1.755667.735254 2.43632.437606.415953 1.01769.650621 1.622628.656417.581234.009152 1.15005-.167854 1.622628-.504936.531913-.371989.966601-.865447 1.267679-1.43907.321348-.629395.486534-1.326316.481718-2.03237v-6.677788h1.85081zm6.11021 0h-1.850811v-11.853388h1.622629v2.764528c.348853-.974303.942375-1.843455 1.724042-2.524684.522744-.369863 1.146217-.57241 1.787427-.580677h.722577v1.767279h-.380304c-.973479-.019212-1.904183.397841-2.535357 1.136107-.709699.836083-1.096307 1.897017-1.090203 2.99175zm15.440323 0h-2.015609v-16.031739h9.862539v1.767278h-7.84693v5.049367h6.50319v1.615797h-6.50319zm20.016642 0h-1.660658v-2.272215c-.625616 1.540314-2.134575 2.542051-3.803036 2.524683-1.102078.036883-2.161111-.427688-2.87763-1.262341-.746264-.974394-1.111216-2.18578-1.026819-3.408323v-7.57405h1.85081v7.57405c-.097316.875767.163072 1.753719.722577 2.43632.440789.418933 1.025978.65383 1.635305.656417.577049.007333 1.141278-.169628 1.609952-.504936.531913-.371989.966601-.865447 1.267678-1.43907.321349-.629395.486535-1.326316.481718-2.03237v-6.677788h1.850811zm9.65971-1.262342v1.464317c-.563447.073352-1.13055.115495-1.698689.126234-2.307175 0-3.448085-1.262342-3.448085-3.597674v-7.271088h-2.117023v-1.43907h2.117023l.07606-2.991749 1.724043-.164105v3.155854h2.662125v1.43907h-2.662125v7.447816c-.061515.513274.121535 1.025664.494763 1.384932s.893692.524078 1.406755.445463c.484718-.0069.968053-.053341 1.445153-.138857zm11.954207 1.262342h-1.647981v-2.272215c-.625616 1.540314-2.134575 2.542051-3.803036 2.524683-1.102078.036883-2.161111-.427688-2.87763-1.262341-.750779-.972642-1.120287-2.184193-1.039496-3.408323v-7.57405h1.85081v7.57405c-.099726.878052.165974 1.75847.735254 2.43632.437606.415953 1.017691.650621 1.622628.656417.577314.009131 1.142096-.168004 1.609952-.504936.539345-.363672.97585-.859192 1.267678-1.43907.327145-.627267.492675-1.325639.481718-2.03237v-6.677788h1.850811zm6.122887 0h-1.85081v-11.853388h1.686012v2.764528c.339898-.978805.934879-1.850094 1.724043-2.524684.518097-.369601 1.137477-.572255 1.77475-.580677h.735253v1.767279h-.431011c-.97311-.017418-1.903079.399306-2.535357 1.136107-.70611.8373-1.088291 1.898425-1.077526 2.99175zm14.527595-3.534557 1.711366.353456c-.313246 1.021928-.960156 1.910462-1.838134 2.524683-.93452.663933-2.059509 1.009307-3.207226.984627-1.50727.045839-2.956828-.578734-3.955157-1.704161-2.033455-2.68521-2.00748-6.394282.063384-9.05099.983036-1.137298 2.423118-1.780293 3.929803-1.754655 1.449176-.069211 2.850404.52613 3.803035 1.615797 1.048407 1.377725 1.565682 3.084264 1.457831 4.809522h-8.645567c-.169171 1.31726.242246 2.642984 1.128234 3.635544.661953.584728 1.511237.915852 2.395912.934133 1.495193-.012782 2.792865-1.029942 3.156519-2.47419zm-.114091-3.610297c-.004456-.603828-.116038-1.20212-.329596-1.767278-.217511-.511491-.578402-.94975-1.039497-1.262342-.503916-.375579-1.120163-.571236-1.749396-.55543-.88586-.014077-1.736879.343221-2.345205.984626-.66782.725731-1.050401 1.66695-1.077527 2.650918z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m411.50777 150.427102v1.777854h-10.331794v-16.127678h10.105275v1.777855h-8.104355v5.130379h6.430629v1.638166h-6.430629v5.803424z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m424.08173 152.456951h-1.719068v-7.668687c.08931-.846841-.169607-1.693551-.715233-2.338949-.467922-.439732-1.082433-.68188-1.719068-.677401-.915588-.007518-1.784387.411419-2.359013 1.137522-.66245.856575-1.00087 1.926988-.953644 3.01635v6.531165h-1.832v-12.001495h1.706521v2.211138c.671407-1.51541 2.132831-2.5078 3.764383-2.556229.799895-.020377 1.58435.226515 2.233533.702963.554904.388123.990076.9289 1.254795 1.5593.288002 1.02085.406747 2.083497.351342 3.144161z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m437.715246 152.379678h-1.830952c-.063136-.38379-.1389-1.100196-.202036-2.162013-.756429 1.613613-2.407448 2.596951-4.166994 2.481837-1.120263.076239-2.223076-.311579-3.055795-1.07461-.69441-.663828-1.083513-1.59138-1.073317-2.558595-.047305-1.225384.529631-2.389569 1.527898-3.083108 1.569658-.922775 3.381629-1.333697 5.189801-1.176954h1.578407c.032606-.694426-.044118-1.389684-.227291-2.059669-.156777-.454148-.489713-.823797-.921789-1.023438-.57822-.280478-1.215746-.412293-1.856207-.38379-1.868833 0-2.954777.716407-3.257831 2.162014l-1.704679-.294239c.420908-2.217449 2.167678-3.326174 5.24031-3.326174 1.25939-.129274 2.515654.273379 3.472495 1.112989.811358 1.100814 1.181296 2.472006 1.035435 3.837893v5.117191c-.011956.817533.07283 1.633573.252545 2.430666zm-2.032988-6.0127c-.757635 0-1.325862 0-1.717307 0-1.174319-.062498-2.344587.184325-3.396731.716407-.788834.403122-1.279727 1.228698-1.262725 2.123634-.007461.569471.227123 1.114699.64399 1.496779.531975.440032 1.208789.659455 1.894088.614063 1.045864.02555 2.049199-.419463 2.740114-1.215333.70572-.786487 1.089476-1.815644 1.073316-2.87842.050509-.358203.037882-.614063.025255-.921094z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m442.4061 152.140099h-.91093v-16.062821h1.873179v6.159523c.625369-1.388752 2.012757-2.292321 3.553908-2.314564 1.349477-.014472 2.631075.582267 3.476928 1.61893 1.026394 1.341641 1.527487 3.003212 1.411299 4.679719.05337 1.594653-.434231 3.161313-1.385639 4.452057-.822947 1.13875-2.161438 1.805591-3.579568 1.783353-1.602893.028353-3.075907-.865632-3.772018-2.289268zm.962249-4.667072c-.009721 1.000651.39858 1.961175 1.129039 2.656057.594554.512853 1.352802.803791 2.142609.822113.937778.005484 1.809653-.474684 2.296569-1.264789.64271-.998763.952265-2.170759.885269-3.351691.070276-1.252378-.223489-2.498516-.846779-3.592001-.492364-.809818-1.390607-1.293694-2.347889-1.264789-.815909.013302-1.590499.356234-2.142609.948592-.638611.652489-1.032359 1.500194-1.116209 2.403099z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m455.102898 136.077278h1.763965v16.127678h-1.763965z",
      fillRule: "nonzero"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m469.240619 148.56595 1.720912.355754c-.314993 1.028575-.965512 1.922888-1.848386 2.541104-.94366.670048-2.079541 1.017713-3.237864.991031-1.513346.053162-2.969978-.577056-3.96447-1.715245-2.044797-2.702675-2.018677-6.43587.063738-9.109858.988519-1.144694 2.436633-1.791872 3.951722-1.766068 1.45726-.06966 2.866303.529552 3.824248 1.626307 1.054255 1.386686 1.574415 3.104324 1.465962 4.840803h-8.69379c-.170114 1.325828.243598 2.660174 1.134527 3.65919.664455.590467 1.519222.924036 2.409276.940208 1.467379.002826 2.760542-.959971 3.174125-2.363226zm-.114727-3.633779c-.004481-.607755-.116685-1.209939-.331435-1.778773-.218723-.514817-.581627-.955926-1.045294-1.270552-.506727-.378022-1.126411-.574952-1.759154-.559043-.890801-.014168-1.746567.345454-2.358286.991031-.671545.730451-1.05626 1.677792-1.083537 2.668159z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m489.122218 140.361193-4.731906 13.247282c-.690331 1.928723-1.782309 2.880395-3.275934 2.880395-.535608-.006616-1.067765-.087741-1.581486-.24109v-1.370409c.41154.101044.831982.160551 1.255147.177646.529837.01286 1.046587-.167282 1.455971-.507559.587779-.709822.993058-1.555411 1.179839-2.461659l-4.129435-11.724606h1.87017l3.150419 8.882277 3.23828-8.882277z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m495.769437 152.454366c-1.474279.049998-2.880577-.627766-3.770533-1.817205-.935775-1.314239-1.41324-2.905548-1.357392-4.523949-.078056-1.6582.470059-3.284427 1.53335-4.549366.950609-1.097078 2.328056-1.719156 3.770533-1.702835 1.494798-.060877 2.926847.611033 3.845944 1.804497.973501 1.273788 1.475898 2.851625 1.420234 4.460411.07231 1.659064-.469953 3.285755-1.520782 4.562073-.98028 1.151821-2.418814 1.799809-3.921354 1.766374zm.138253-1.524927c.920849.002046 1.789953-.430273 2.350299-1.169111.711047-1.073874 1.043151-2.358811.942633-3.647116.11545-1.277272-.237974-2.55284-.992907-3.583579-.571764-.705763-1.422924-1.119778-2.325162-1.130987-.905482-.006024-1.761439.41729-2.312594 1.143695-.724313 1.034635-1.062727 2.295241-.955201 3.558163-.12085 1.31179.217169 2.624887.955201 3.710655.566642.717755 1.429503 1.130515 2.337731 1.11828z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m514.019649 152.200342h-1.639795v-2.290953c-.617755 1.553016-2.107755 2.563015-3.755253 2.545504-1.088232.037186-2.133959-.431215-2.841475-1.272752-.741347-.980663-1.106213-2.202206-1.026436-3.436431v-7.636512h1.827556v7.636512c-.092619.884748.169068 1.770145.726016 2.456412.432109.419384 1.004905.655986 1.602242.661831.573931.009227 1.1356-.169239 1.602241-.509101.52523-.375056.954457-.872584 1.251751-1.450937.317312-.634586.480422-1.337254.475666-2.049131v-6.732859h1.827557z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m520.185233 152.456951h-1.8316v-12.00263h1.605786v2.799336c.345232-.98657.932594-1.866665 1.706148-2.556471.517317-.374521 1.134319-.579617 1.768873-.587988h.715077v1.789529h-.376356c-.963375-.019454-1.884419.402851-2.509041 1.150412-.702333.84661-1.084928 1.920902-1.078887 3.029418z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m535.733835 152.204956h-2.00851v-16.127678h9.827804v1.777855h-7.819294v5.092282h6.480287v1.625467h-6.480287z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m555.598755 152.200342h-1.64182v-2.290953c-.618519 1.553016-2.11036 2.563015-3.759894 2.545504-1.089576.037186-2.136596-.431215-2.844986-1.272752-.737799-.982429-1.098611-2.203806-1.015171-3.436431v-7.636512h1.829814v7.636512c-.096212.88299.161222 1.768182.71438 2.456412.435789.422388 1.014339.659222 1.616755.661831.570503.007394 1.12833-.171027 1.591688-.509101.525879-.375056.955636-.872584 1.253298-1.450937.317703-.634586.481015-1.337254.476253-2.049131v-6.732859h1.829815z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m565.47669 150.861536v1.468795c-.566864.073576-1.137406.115848-1.708992.12662-2.321168 0-3.468998-1.266202-3.468998-3.608676v-7.154041h-2.129863v-1.443471h2.129863l.076522-3.000898 1.734499-.164607v3.165505h2.678271v1.443471h-2.678271v7.470592c-.061888.514843.122272 1.0288.497764 1.389167.375491.360366.899112.525681 1.415287.446826.487658-.006922.973925-.053505 1.453918-.139283z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m577.270316 152.200342h-1.629464v-2.290953c-.618586 1.553016-2.110589 2.563015-3.760302 2.545504-1.089694.037186-2.136828-.431215-2.845295-1.272752-.742343-.980663-1.107699-2.202206-1.027816-3.436431v-7.636512h1.830014v7.636512c-.098606.885293.164109 1.772972.726991 2.456412.43269.419384 1.006256.655986 1.604396.661831.570826.009206 1.129262-.16939 1.591861-.509101.533285-.366671.964885-.866277 1.253434-1.450937.323469-.63244.487139-1.336571.476305-2.049131v-6.732859h1.830014z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m583.416357 152.456951h-1.811989v-12.00263h1.650648v2.799336c.332768-.991129.91527-1.873388 1.68788-2.556471.50723-.374255 1.113619-.579461 1.737525-.587988h.719831v1.789529h-.42197c-.9527-.017637-1.863162.404334-2.482177 1.150412-.691301.847842-1.065465 1.922327-1.054926 3.029418z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m598.010044 148.566461 1.720912.355775c-.314993 1.028635-.965512 1.923001-1.848387 2.541253-.939733.66829-2.070996 1.015931-3.225115.991089-1.515677.04614-2.973321-.582532-3.977218-1.715346-2.044797-2.702833-2.018678-6.436247.063737-9.110392.988519-1.144762 2.436634-1.791978 3.951723-1.766171 1.45726-.069665 2.866303.529583 3.824248 1.626402 1.054254 1.386767 1.574414 3.104506 1.465961 4.841087h-8.693789c-.170115 1.325905.243598 2.66033 1.134526 3.659404.665647.588566 1.519667.921863 2.409276.940264 1.467379.002826 2.760543-.960028 3.174126-2.363365zm-.114727-3.633992c-.004482-.607791-.116685-1.21001-.331435-1.778877-.218724-.514848-.581628-.955983-1.045295-1.270627-.506727-.378044-1.12641-.574986-1.759153-.559076-.890801-.014168-1.746567.345474-2.358287.991089-.671545.730494-1.056259 1.67789-1.083536 2.668316z"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m260.123721 92.0370035h12.404861v20.8913115c-5.103492.80975-10.257158 1.263258-15.423631 1.357238-17.250113 0-20.928446-9.221605-20.928446-28.0453494 0-19.2042781 3.805172-28.3244075 21.029918-28.3244075 7.763763.2051353 15.507343.8914126 23.186181 2.0548831l.329782-6.2788096c-8.07819-1.5046275-16.26489-2.3530275-24.47994-2.5368927-22.437831 0-28.690997 12.5576191-28.690997 35.0979112 0 21.9694909 6.03754 34.7046929 28.906623 34.7046929 8.128375-.286852 16.231602-1.070523 24.264314-2.346626v-33.3347706h-20.598665z"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m260.123721 92.0370035h12.404861v20.8913115c-5.103492.80975-10.257158 1.263258-15.423631 1.357238-17.250113 0-20.928446-9.221605-20.928446-28.0453494 0-19.2042781 3.805172-28.3244075 21.029918-28.3244075 7.763763.2051353 15.507343.8914126 23.186181 2.0548831l.329782-6.2788096c-8.07819-1.5046275-16.26489-2.3530275-24.47994-2.5368927-22.437831 0-28.690997 12.5576191-28.690997 35.0979112 0 21.9694909 6.03754 34.7046929 28.906623 34.7046929 8.128375-.286852 16.231602-1.070523 24.264314-2.346626v-33.3347706h-20.598665z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m299.874003 119.949601h8.129686v-36.0133917c6.225947-3.0386109 12.807171-5.2826023 19.589759-6.6794936v-7.4541118c-6.953051 1.4609761-13.613056 4.0792424-19.703726 7.7461809v-6.666795h-7.965067z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m299.874003 119.949601h8.129686v-36.0133917c6.225947-3.0386109 12.807171-5.2826023 19.589759-6.6794936v-7.4541118c-6.953051 1.4609761-13.613056 4.0792424-19.703726 7.7461809v-6.666795h-7.965067z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m341.705166 119.697606h8.063839v-48.9554009h-8.063839zm0-60.0286463h8.063839v-8.5139828h-8.063839z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m341.705166 119.697606h8.063839v-48.9554009h-8.063839zm0-60.0286463h8.063839v-8.5139828h-8.063839z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m411.255775 49.3910122h-8.022983v21.6465775c-4.388459-.7191219-8.820426-1.1425336-13.265849-1.267364-16.414108 0-22.558291 8.630749-22.558291 25.8668998 0 21.1523055 8.886215 25.0684605 19.422727 25.0684605 8.09915 0 16.401413-4.309038 16.401413-4.309038v3.333168h7.984899zm-23.408829 64.7369548c-6.347296 0-12.097947-2.636118-12.097947-18.5035152 0-12.6736402 3.351373-19.4920587 14.687644-19.4920587 4.285279.1091957 8.559276.4901727 12.796149 1.1406276v33.2429583c-4.855935 2.157838-10.075548 3.383196-15.385846 3.611988z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m411.255775 49.3910122h-8.022983v21.6465775c-4.388459-.7191219-8.820426-1.1425336-13.265849-1.267364-16.414108 0-22.558291 8.630749-22.558291 25.8668998 0 21.1523055 8.886215 25.0684605 19.422727 25.0684605 8.09915 0 16.401413-4.309038 16.401413-4.309038v3.333168h7.984899zm-23.408829 64.7369548c-6.347296 0-12.097947-2.636118-12.097947-18.5035152 0-12.6736402 3.351373-19.4920587 14.687644-19.4920587 4.285279.1091957 8.559276.4901727 12.796149 1.1406276v33.2429583c-4.855935 2.157838-10.075548 3.383196-15.385846 3.611988z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m435.951281 119.949601h8.274713v-61.1321962h2.0497l28.936191 61.1321962h15.170307v-67.7866443h-8.173493v61.1321963h-2.264792l-28.506007-61.1321963h-15.486619z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m435.951281 119.949601h8.274713v-61.1321962h2.0497l28.936191 61.1321962h15.170307v-67.7866443h-8.173493v61.1321963h-2.264792l-28.506007-61.1321963h-15.486619z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m531.193232 114.246138c-10.537741 0-14.09249-5.484198-14.09249-15.9459701h35.598084l.430111-5.5855226c0-16.0599604-7.311902-22.9120414-21.619447-22.9120414-13.662377 0-22.479671 7.156055-22.479671 25.7491322 0 16.6425769 5.275196 25.1538499 21.303189 25.1538499 6.992815-.177518 13.972129-.710157 20.911027-1.595864l-.215056-5.775506s-11.714223.911922-19.835747.911922zm-14.143091-21.8228011c.101203-11.842321 5.262545-16.4652591 14.408748-16.4652591 9.462461 0 13.548524 4.3062985 13.548524 16.4652591z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m531.193232 114.246138c-10.537741 0-14.09249-5.484198-14.09249-15.9459701h35.598084l.430111-5.5855226c0-16.0599604-7.311902-22.9120414-21.619447-22.9120414-13.662377 0-22.479671 7.156055-22.479671 25.7491322 0 16.6425769 5.275196 25.1538499 21.303189 25.1538499 6.992815-.177518 13.972129-.710157 20.911027-1.595864l-.215056-5.775506s-11.714223.911922-19.835747.911922zm-14.143091-21.8228011c.101203-11.842321 5.262545-16.4652591 14.408748-16.4652591 9.462461 0 13.548524 4.3062985 13.548524 16.4652591z",
      stroke: "#fff",
      strokeWidth: ".5"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m598.003982 77.3063012v-6.3317783h-17.182793v-15.0316418h-7.982257v15.0063146h-7.614236v6.3317784h7.614236v25.7703379c0 14.094538 3.807118 17.906269 14.898522 17.906269 3.684097-.163289 7.356841-.5226 11.002571-1.076402l-.545687-6.065844s-6.573624.582524-9.593937.582524c-7.017788 0-7.779212-3.026591-7.779212-13.701969v-23.3895888z",
      fill: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m598.003982 77.3063012v-6.3317783h-17.182793v-15.0316418h-7.982257v15.0063146h-7.614236v6.3317784h7.614236v25.7703379c0 14.094538 3.807118 17.906269 14.898522 17.906269 3.684097-.163289 7.356841-.5226 11.002571-1.076402l-.545687-6.065844s-6.573624.582524-9.593937.582524c-7.017788 0-7.779212-3.026591-7.779212-13.701969v-23.3895888z",
      stroke: "#fff",
      strokeWidth: ".5"
    }))));
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    css: vectorCSS,
    height: "179",
    viewBox: "0 0 598 179",
    width: "598",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("linearGradient", {
    id: "a",
    x1: "149.21178%",
    x2: "4.895958%",
    y1: "82.823695%",
    y2: "17.968501%"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: "0",
    stopColor: "#92d6e3"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".21",
    stopColor: "#8ccfe0"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".96",
    stopColor: "#008bcb"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("linearGradient", {
    id: "b",
    x1: "-.009556%",
    x2: "99.980326%",
    y1: "50.003882%",
    y2: "50.003882%"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: "0",
    stopColor: "#92d6e3"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".19",
    stopColor: "#88cbdf"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".9",
    stopColor: "#008bcb"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("linearGradient", {
    id: "c",
    x1: "0%",
    x2: "99.964839%",
    y1: "50.00767%",
    y2: "50.00767%"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: "0",
    stopColor: "#92d6e3"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".16",
    stopColor: "#77c8df"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".56",
    stopColor: "#37a7d4"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".85",
    stopColor: "#0f93cd"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: "1",
    stopColor: "#008bcb"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("linearGradient", {
    id: "d",
    x1: "71.79987%",
    x2: "21.559265%",
    y1: "93.637004%",
    y2: "7.411756%"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".09",
    stopColor: "#007336"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".11",
    stopColor: "#087833"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".21",
    stopColor: "#319424"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".32",
    stopColor: "#52ab17"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".44",
    stopColor: "#6dbc0d"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".55",
    stopColor: "#7fc906"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".67",
    stopColor: "#8ad101"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".8",
    stopColor: "#8ed300"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("linearGradient", {
    id: "e",
    x1: "92.420438%",
    x2: "6.681733%",
    y1: "15.508581%",
    y2: "76.911364%"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".19",
    stopColor: "#8ed300"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".2",
    stopColor: "#8cd201"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".47",
    stopColor: "#50a917"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".7",
    stopColor: "#258c28"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".88",
    stopColor: "#0a7a32"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
    offset: ".98",
    stopColor: "#007336"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: ""
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m34.7852632 19.5389474c-27.36000004 15.9536842-30.93473688 95.5705266-1.2631579 94.2694736.9347368 0-15.1578948 19.730526-7.2 29.810526-5.3810527-1.882105-15.4989474-13.402105-19.37684214-22.282105-10.10526316-23.0526315-6.24-47.6842104-4.45894737-56.8421052.83368421-3.1957894 2.14736842-7.3894736 3.17052632-10.5221052l.22736842-.5557895c1.81894736-4.5852632 4.95157897-13.0610526 7.07368417-16.4210526 2.1221053-3.36 10.2821053-13.9957895 12.7073685-16.6357895 2.8926315-3.1073684 11.2294736-7.6547368 14.3242105-8.2989474 1.2505263-.2652631-5.6210526 7.7305263-5.2042105 7.4778948z",
    fill: "url(#a)",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m98.2463158 85.7915789c36.3536842-18.5305263 82.3452632-34.56 85.2884212.8968422.21994 2.8041149.21994 5.6211482 0 8.4252631l-.101053.7831579c-2.816842 21.0315789-13.667368 40.3326319-28.976842 52.6610529 13.818947-16.345263 18.707369-36.631579 6.922105-47.267369-13.894736-12.530526-40.888421-6.6947365-65.4315786 5.810527-12.4220257 6.27663-23.96511 14.158883-34.3326316 23.44421-4.3205891-6.258064-7.7234948-13.102158-10.1052631-20.32421 3.9536842-1.667369 7.9578947-3.587369 11.9621052-5.621053 6.5557895-3.284211 13.111579-7.0736842 19.3136843-10.5094737 4.8126315-2.7157895 10.0294736-5.5326316 15.4610526-8.2989474z",
    fill: "url(#b)",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m89.9473684 5.31578947c54.9599996 12.36631583 54.9599996 12.36631583 59.8231576 11.01473683-.227368-.6189474 1.402106 4.2568421 3.789474 6.391579 4.206316 4.2063158 7.073684 3.9031579 12.543158 10.9010526l3.789474 4.4463158c1.818947 3.1705263.227368 4.7115789-1.553685 5.9115789-4.901052 3.3221053-28.534736 2.5263158-69.9663154-14.8421052-13.1494737-5.5452632-22.9010527-9.6505263-31.4021053-11.76l.1894737-.2652632-.3031579.24c-10.7368421-2.6526316-16.2947368-1.9957895-30.3915789 2.6652632-25.4526316 8.4252631-33.91578952 44.5642105-33.91578952 44.5642105 2.41263158-5.5452632 4.52210527-39.5621053 38.74105262-58.61052632 11.1536842-6.20210526 27.4484211-5.39368421 48.6568421-.65684211z",
    fill: "url(#c)",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m51.4968421 110.233684c2.3817683 7.222052 5.7846741 14.066147 10.1052632 20.324211 19.4021052 28.105263 54.2021057 38.387368 79.8315787 26.223158l1.566316-.770527c4.063371-2.074782 7.898917-4.568311 11.444211-7.44 15.309473-12.328421 26.16-31.578947 28.976842-52.6610523l-.808421 6.3157893c-.770527 3.625263-1.263158 5.886316-1.654737 7.578948-.391579 1.692631-1.149474 3.903157-2.210527 7.36421-1.351579 3.43579-2.185263 5.545263-2.892631 7.2-.707369 1.654737-1.806316 3.67579-3.448421 6.934737-1.92 3.183158-3.094737 5.052631-4.117895 6.707368s-2.450526 3.385263-4.635789 6.31579c-2.425264 2.80421-3.890527 4.509473-5.368421 6.063158-1.477895 1.553684-3.19579 3.145263-5.924211 5.696842-2.690526 2.210526-4.863158 3.991579-7.477895 5.848421-2.273684 1.591579-4.421052 2.917895-7.010526 4.509474-1.44.783157-2.867368 1.553684-4.345263 2.311578-5.88378 2.988109-12.059474 5.362725-18.429474 7.086316l-2.778947.669474-2.753684.593684-2.526316.454737-2.526316.391579-2.437895.303158-2.5263156.24-2.5263158.16421-2.5263158.113685h-2.6652631-2.7031579l-2.9684211-.189474-3.0189473-.214737h-.4042106c-20.4378947-2.816842-42.2021052-15.246316-56.4631579-33.435789-8.1137754-10.090696-13.3975627-22.157959-15.3094736-34.964211-3.61263162-26.0336842 8.1094736-56.5515789 47.2926315-86.2736842 2.8294737-2.1473684 5.7473685-4.1557894 8.551579-6.3157894-5.6753747 7.9133645-10.3111733 16.5227047-13.7936842 25.6168421-8.1347369 26.4252631-7.5410527 49.048421-1.5157895 67.2378945z",
    fill: "url(#d)",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m169.842105 38.1578947c-19.098947-15.7642105-44.210526-26.1726315-62.905263-17.848421-27.3726315 12.1136842-40.1936841 42.0126316-44.2105262 62.0589474-7.1747369 35.8231579 8.968421 74.5263159 53.7221052 79.3389469-47.2547368-.202105-87.4357894-55.781052-63.4357894-118.7368417 3.6757895-9.6505263 8.8421052-22.3073684 17.0778947-28.6863158 10.56-8.0842105 23.3052632-13.88210524 38.8042107-14.02105261 39.802105-.34105263 60.947368 37.89473681 60.947368 37.89473681z",
    fill: "url(#e)",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
    fill: "#008bcb"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m410.183158 150.010526v1.831579h-10.370526v-16.042105h10.105263v1.768421h-8.096842v5.052632h6.442105v1.642105h-6.442105v5.772631zm12.555789 1.768421h-1.730526v-7.578947c.089906-.836931-.170737-1.673733-.72-2.311579-.471041-.434585-1.089648-.6739-1.730526-.669474-.921691-.00743-1.796281.406605-2.374737 1.124211-.666866.846551-1.007541 1.904438-.96 2.981053v6.517894h-1.844211v-11.861052h1.717895v2.185263c.675883-1.497677 2.147048-2.478454 3.789474-2.526316.805227-.020139 1.594911.223865 2.248421.694737.558602.38358.996675.91803 1.263158 1.541052.289922 1.008905.409458 2.059117.353684 3.107369zm13.528421 0h-1.831579c-.063157-.378947-.138947-1.086315-.202105-2.134736-.756688 1.593256-2.408272 2.564187-4.168421 2.450526-1.120647.075277-2.223837-.307648-3.056842-1.061053-.694647-.655453-1.083884-1.571303-1.073684-2.526316-.025574-1.187788.549037-2.308517 1.528421-2.981052 1.570195-.911133 3.382788-1.316872 5.191579-1.162105h1.578947c.032618-.685666-.044132-1.372152-.227368-2.033685-.156832-.448418-.489882-.813404-.922105-1.010526-.578418-.276939-1.216163-.407091-1.856843-.378947-1.869473 0-2.955789.707368-3.258947 2.134736l-1.705263-.290526c.421053-2.189474 2.168421-3.28421 5.242105-3.28421 1.259821-.127643 2.516516.269929 3.473684 1.098947.811637 1.086926 1.181701 2.440818 1.03579 3.789474v5.052631c-.01196.80722.072855 1.612964.252631 2.4zm-2.033684-5.936842c-.757895 0-1.326316 0-1.717895 0-1.174721-.061709-2.34539.181999-3.397894.707369-.789105.398036-1.280165 1.213196-1.263158 2.096842-.007464.562286.227201 1.100635.64421 1.477895.532158.43448 1.209204.651135 1.894737.606315 1.046223.025229 2.049902-.41417 2.741053-1.2.705962-.776564 1.08985-1.792737 1.073684-2.842105.050526-.290526.037895-.543158.025263-.846316zm6.871579 6h-.896842v-16.042105h1.844211v6.151579c.615697-1.386961 1.98163-2.289364 3.498947-2.311579 1.328608-.014453 2.590386.581516 3.423158 1.616842 1.010521 1.339911 1.503865 2.99934 1.389474 4.673684.052544 1.592597-.427516 3.157236-1.364211 4.446316-.81022 1.137281-2.128012 1.803262-3.524211 1.781053-1.578104.028316-3.028338-.864516-3.713684-2.286316zm.947369-4.661052c-.009571.99936.392415 1.958645 1.111579 2.652631.585359.512192 1.33188.802754 2.109473.821053.923276.005477 1.781668-.474072 2.261053-1.263158.632771-.997475.937539-2.16796.871579-3.347368.069189-1.250764-.220033-2.495294-.833684-3.587369-.48475-.808774-1.369102-1.292026-2.311579-1.263158-.803291.013284-1.565903.355774-2.109474.947369-.628735.651647-1.016394 1.498259-1.098947 2.4zm13.528421 4.661052h-1.844211v-16.042105h1.844211zm12.088421-3.536842 1.705263.353684c-.312129 1.022589-.956732 1.911698-1.831579 2.526316-.935079.666149-2.060631 1.011791-3.208421.985263-1.499585.052853-2.942972-.573698-3.928421-1.705263-2.026204-2.686946-2.000322-6.398416.063158-9.056842.97953-1.138032 2.414477-1.781444 3.915789-1.755789 1.444009-.069255 2.840239.52647 3.789474 1.616842 1.044668 1.378615 1.560098 3.086258 1.452631 4.812631h-8.614736c-.168568 1.318112.241382 2.644693 1.12421 3.637895.658413.587031 1.505408.918659 2.387369.934737 1.457633-.022076 2.724792-1.005927 3.107368-2.412632zm-.113685-3.612631c-.00444-.604219-.115623-1.202898-.328421-1.768421-.216734-.511822-.576339-.950364-1.035789-1.263158-.502119-.375822-1.116168-.571606-1.743158-.55579-.882701-.014085-1.730685.343443-2.336842.985263-.665439.7262-1.046655 1.668028-1.073684 2.652632zm20.071579-4.711579-4.762105 13.12421c-.694737 1.92-1.793684 2.867369-3.296842 2.867369-.539026-.006587-1.074579-.087345-1.591579-.24v-1.364211c.414166.100587.837292.159825 1.263158.176842.533218.012802 1.053266-.166525 1.465263-.505263.59153-.706612.999396-1.548376 1.187369-2.450526l-4.15579-11.671579h1.882105l3.170527 8.842105 3.258947-8.842105zm6.656843 12.176842c-1.481685.049698-2.895047-.624005-3.789474-1.806316-.940475-1.306364-1.420339-2.888138-1.364211-4.496842-.078448-1.648264.47242-3.264746 1.541053-4.522105.955384-1.090505 2.339751-1.708855 3.789474-1.692632 1.502306-.060512 2.941549.607371 3.865263 1.793684.978391 1.266156 1.483312 2.834538 1.427368 4.433684.072673 1.649123-.472314 3.266067-1.528421 4.534737-.997139 1.121473-2.441192 1.741676-3.941052 1.692632zm.138947-1.51579c.925475.002034 1.798945-.427695 2.362105-1.162105.714619-1.06744 1.048392-2.344677.947369-3.625263.116029-1.269618-.23917-2.537543-.997895-3.562105-.574636-.701535-1.430072-1.113069-2.336842-1.124211-.91003-.005988-1.770287.41479-2.324211 1.136842-.727951 1.028436-1.068065 2.281488-.96 3.536842-.121456 1.30393.218261 2.609159.96 3.688421.58201.68986 1.44732 1.075993 2.349474 1.048421zm18 1.263158h-1.654737v-2.273684c-.623385 1.54131-2.126963 2.543695-3.789474 2.526316-1.098148.036906-2.153404-.427965-2.867368-1.263158-.748102-.973271-1.116293-2.185605-1.03579-3.410526v-7.578948h1.844211v7.578948c-.093464.878078.170609 1.756801.732632 2.437894.436046.416223 1.014061.651042 1.616842.656842.579161.009158 1.145948-.167963 1.616842-.505263.530016-.372228.963154-.866006 1.263158-1.44.320202-.629802.484799-1.327173.48-2.033684v-6.682105h1.84421zm6.088421 0h-1.844211v-11.861052h1.616843v2.766315c.347609-.974933.939014-1.844646 1.717894-2.526315.52088-.370103 1.142129-.572781 1.781053-.581053h.72v1.768421h-.378947c-.970009-.019224-1.897394.398099-2.526316 1.136842-.707169.836624-1.092398 1.898244-1.086316 2.993684zm15.385263 0h-2.008421v-16.042105h9.827368v1.768421h-7.818947v5.052632h6.48v1.616842h-6.48zm19.945263 0h-1.654737v-2.273684c-.623384 1.54131-2.126963 2.543695-3.789473 2.526316-1.098149.036906-2.153405-.427965-2.867369-1.263158-.743602-.975024-1.107253-2.187193-1.023158-3.410526v-7.578948h1.844211v7.578948c-.096969.876333.16249 1.754853.72 2.437894.439217.419204 1.022319.654253 1.629474.656842.574991.007338 1.137207-.169738 1.60421-.505263.530016-.372228.963154-.866006 1.263158-1.44.320203-.629802.4848-1.327173.48-2.033684v-6.682105h1.844211zm9.625263-1.263158v1.465263c-.561437.0734-1.126518.11557-1.692631.126316-2.298948 0-3.43579-1.263158-3.43579-3.6v-7.275789h-2.109473v-1.44h2.109473l.07579-2.993684 1.717895-.164211v3.157895h2.652631v1.44h-2.652631v7.452631c-.061296.513606.121101 1.026327.492998 1.385828.371897.3595.890505.524417 1.401738.445751.48299-.006905.964602-.053376 1.44-.138947zm11.911579 1.263158h-1.642105v-2.273684c-.623385 1.54131-2.126963 2.543695-3.789474 2.526316-1.098148.036906-2.153404-.427965-2.867368-1.263158-.748102-.973271-1.116293-2.185605-1.035789-3.410526v-7.578948h1.84421v7.578948c-.09937.878619.165382 1.759606.732632 2.437894.436046.416223 1.014062.651042 1.616842.656842.575254.009137 1.138022-.168113 1.60421-.505263.537422-.363906.97237-.859747 1.263158-1.44.325978-.627672.490918-1.326496.48-2.033684v-6.682105h1.844211zm6.101053 0h-1.844211v-11.861052h1.68v2.766315c.338686-.979437.931546-1.85129 1.717895-2.526315.51625-.369841 1.133422-.572626 1.768421-.581053h.732632v1.768421h-.429474c-.96964-.017429-1.896293.399565-2.526316 1.136842-.703592.837841-1.084411 1.899652-1.073684 2.993684zm14.475789-3.536842 1.705264.353684c-.312129 1.022589-.956733 1.911698-1.831579 2.526316-.931188.664362-2.052165 1.00996-3.19579.985263-1.501894.045869-2.946284-.579107-3.941052-1.705263-2.026204-2.686946-2.000322-6.398416.063157-9.056842.979531-1.138033 2.414477-1.781444 3.91579-1.75579 1.444009-.069255 2.840239.526471 3.789474 1.616843 1.044668 1.378615 1.560098 3.086258 1.452631 4.812631h-8.614737c-.168567 1.318112.241383 2.644693 1.124211 3.637895.659593.585106 1.505848.916444 2.387368.934737 1.489862-.012791 2.782906-1.030608 3.145263-2.47579zm-.113684-3.612632c-.00444-.604218-.115624-1.202897-.328421-1.768421-.216734-.511821-.576339-.950363-1.035789-1.263157-.50212-.375823-1.116169-.571606-1.743158-.55579-.882701-.014085-1.730685.343443-2.336842.985263-.665439.7262-1.046655 1.668028-1.073684 2.652632z",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m410.183158 150.010526v1.768421h-10.370526v-16.042105h10.143157v1.768421h-8.134736v5.103158h6.454736v1.629474h-6.454736v5.772631z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m422.738947 151.842105h-1.730526v-7.578947c.089906-.836931-.170737-1.673733-.72-2.311579-.471041-.434585-1.089648-.6739-1.730526-.669474-.921691-.00743-1.796281.406605-2.374737 1.124211-.666866.846551-1.007541 1.904438-.96 2.981052v6.454737h-1.844211v-11.861052h1.717895v2.185263c.675883-1.497677 2.147048-2.478454 3.789474-2.526316.805227-.020139 1.594911.223865 2.248421.694737.558602.38358.996675.91803 1.263158 1.541052.289922 1.008905.409458 2.059117.353684 3.107369z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m436.267368 151.842105h-1.831579c-.063157-.378947-.138947-1.086316-.202105-2.134737-.756688 1.593257-2.408272 2.564188-4.168421 2.450527-1.120647.075277-2.223837-.307648-3.056842-1.061053-.694647-.655453-1.083884-1.571303-1.073684-2.526316-.047322-1.209924.529812-2.359421 1.528421-3.04421 1.570195-.911133 3.382788-1.316872 5.191579-1.162105h1.578947c.032618-.685666-.044132-1.372152-.227368-2.033685-.156832-.448418-.489882-.813404-.922105-1.010526-.578418-.276939-1.216163-.407091-1.856843-.378947-1.869473 0-2.955789.707368-3.258947 2.134736l-1.705263-.290526c.421053-2.189474 2.168421-3.28421 5.242105-3.28421 1.259821-.127643 2.516516.269929 3.473684 1.098947.811637 1.086926 1.181701 2.440818 1.03579 3.789474v5.052631c-.01196.80722.072855 1.612964.252631 2.4zm-2.033684-5.936842c-.757895 0-1.326316 0-1.717895 0-1.174721-.061709-2.34539.181999-3.397894.707369-.789105.398036-1.280165 1.213196-1.263158 2.096842-.007464.562286.227201 1.100635.64421 1.477894.532158.434481 1.209204.651136 1.894737.606316 1.046223.025229 2.049902-.41417 2.741053-1.2.705962-.776564 1.08985-1.792737 1.073684-2.842105.050526-.353684.037895-.606316.025263-.909474z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m441.105263 151.842105h-.896842v-16.042105h1.844211v6.151579c.615697-1.386961 1.98163-2.289364 3.498947-2.311579 1.328608-.014453 2.590386.581516 3.423158 1.616842 1.010521 1.339911 1.503865 2.99934 1.389474 4.673684.052544 1.592597-.427516 3.157236-1.364211 4.446316-.81022 1.137281-2.128012 1.803262-3.524211 1.781053-1.578104.028316-3.028338-.864516-3.713684-2.286316zm.947369-4.661052c-.009571.99936.392415 1.958645 1.111579 2.652631.585359.512192 1.33188.802754 2.109473.821053.923276.005477 1.781668-.474072 2.261053-1.263158.632771-.997475.937539-2.16796.871579-3.347368.069189-1.250764-.220033-2.495294-.833684-3.587369-.48475-.808774-1.369102-1.292026-2.311579-1.263158-.803291.013284-1.565903.355774-2.109474.947369-.628735.651647-1.016394 1.498259-1.098947 2.4z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m453.736842 135.736842h1.844211v16.029474h-1.844211z",
    fillRule: "nonzero"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m467.631579 148.242105 1.705263.353684c-.312129 1.02259-.956732 1.911698-1.831579 2.526316-.935078.666149-2.060631 1.011791-3.208421.985263-1.499585.052853-2.942972-.573698-3.928421-1.705263-2.026204-2.686946-2.000322-6.398415.063158-9.056842.97953-1.138032 2.414477-1.781444 3.915789-1.755789 1.444009-.069255 2.84024.52647 3.789474 1.616842 1.044668 1.378616 1.560099 3.086258 1.452632 4.812631h-8.614737c-.168568 1.318112.241383 2.644694 1.12421 3.637895.658413.587031 1.505408.918659 2.387369.934737 1.454036.002809 2.73544-.954385 3.145263-2.349474zm-.113684-3.612631c-.004441-.604219-.115624-1.202898-.328421-1.768421-.216735-.511822-.576339-.950364-1.03579-1.263158-.502119-.375822-1.116168-.571606-1.743158-.55579-.8827-.014085-1.730685.343444-2.336842.985263-.665439.7262-1.046655 1.668028-1.073684 2.652632z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m487.627368 139.917895-4.762105 13.187368c-.694737 1.92-1.793684 2.867369-3.296842 2.867369-.539026-.006587-1.074579-.087345-1.591579-.24v-1.364211c.414166.100587.837292.159825 1.263158.176842.533218.012802 1.053266-.166525 1.465263-.505263.59153-.706612.999396-1.548376 1.187369-2.450526l-4.15579-11.671579h1.882105l3.170527 8.842105 3.258947-8.842105z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m494.284211 152.094737c-1.481685.049698-2.895047-.624004-3.789474-1.806316-.940475-1.306364-1.420339-2.888138-1.364211-4.496842-.078448-1.648264.47242-3.264746 1.541053-4.522105.955384-1.090505 2.339751-1.708855 3.789474-1.692632 1.502306-.060512 2.941549.607372 3.865263 1.793684.978391 1.266156 1.483312 2.834538 1.427368 4.433685.072673 1.649122-.472314 3.266066-1.528421 4.534736-.985205 1.14492-2.430965 1.789024-3.941052 1.75579zm.138947-1.51579c.925475.002034 1.798945-.427695 2.362105-1.162105.714619-1.067439 1.048392-2.344677.947369-3.625263.116029-1.269618-.23917-2.537543-.997895-3.562105-.574636-.701535-1.430072-1.113068-2.336842-1.124211-.91003-.005988-1.770287.41479-2.324211 1.136842-.727951 1.028436-1.068065 2.281488-.96 3.536842-.121456 1.30393.218261 2.609159.96 3.688421.569488.713455 1.436684 1.123741 2.349474 1.111579z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m512.423158 151.842105h-1.654737v-2.273684c-.623385 1.54131-2.126963 2.543695-3.789474 2.526316-1.098148.036906-2.153404-.427965-2.867368-1.263158-.748102-.973271-1.116293-2.185605-1.03579-3.410526v-7.578948h1.844211v7.578948c-.093464.878078.170609 1.756801.732632 2.437894.436046.416223 1.014061.651042 1.616842.656842.579161.009158 1.145948-.167963 1.616842-.505263.530016-.372228.963154-.866006 1.263158-1.44.320202-.629802.484799-1.327173.48-2.033684v-6.682105h1.84421z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m518.511579 151.842105h-1.844211v-11.861052h1.616843v2.766315c.347609-.974933.939014-1.844646 1.717894-2.526315.52088-.370103 1.142129-.57278 1.781053-.581053h.72v1.768421h-.378947c-.970009-.019224-1.897394.398099-2.526316 1.136842-.707169.836624-1.092398 1.898244-1.086316 2.993684z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m533.896842 151.778947h-2.008421v-16.042105h9.827368v1.768421h-7.818947v5.065263h6.48v1.616842h-6.48z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m553.842105 151.842105h-1.654737v-2.273684c-.623384 1.54131-2.126963 2.543695-3.789473 2.526316-1.098149.036906-2.153405-.427965-2.867369-1.263158-.743602-.975024-1.107253-2.187193-1.023158-3.410526v-7.578948h1.844211v7.578948c-.096969.876333.16249 1.754853.72 2.437894.439217.419205 1.022319.654254 1.629474.656842.574991.007338 1.137207-.169738 1.60421-.505263.530016-.372228.963154-.866006 1.263158-1.44.320203-.629802.4848-1.327173.48-2.033684v-6.682105h1.844211z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m563.467368 150.503158v1.465263c-.561437.073399-1.126518.11557-1.692631.126316-2.298948 0-3.43579-1.263158-3.43579-3.6v-7.136842h-2.109473v-1.44h2.109473l.07579-2.993684 1.717895-.164211v3.157895h2.652631v1.44h-2.652631v7.452631c-.061296.513606.121101 1.026327.492998 1.385828.371897.3595.890505.524417 1.401738.445751.48299-.006905.964602-.053376 1.44-.138947z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m575.378947 151.842105h-1.642105v-2.273684c-.623385 1.54131-2.126963 2.543695-3.789474 2.526316-1.098148.036906-2.153404-.427965-2.867368-1.263158-.748102-.973271-1.116293-2.185605-1.035789-3.410526v-7.578948h1.84421v7.578948c-.09937.878619.165382 1.759606.732632 2.437894.436046.416223 1.014062.651042 1.616842.656842.575254.009137 1.138022-.168113 1.60421-.505263.537422-.363906.97237-.859747 1.263158-1.44.325978-.627672.490918-1.326496.48-2.033684v-6.682105h1.844211z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m581.48 151.842105h-1.844211v-11.861052h1.68v2.766315c.338686-.979437.931546-1.85129 1.717895-2.526315.51625-.369841 1.133422-.572626 1.768421-.581053h.732632v1.768421h-.429474c-.96964-.017429-1.896293.399565-2.526316 1.136842-.703592.837842-1.084411 1.899652-1.073684 2.993684z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m595.955789 148.242105 1.705264.353684c-.312129 1.02259-.956733 1.911698-1.831579 2.526316-.931188.664362-2.052165 1.00996-3.19579.985263-1.501894.045869-2.946284-.579107-3.941052-1.705263-2.026204-2.686946-2.000322-6.398415.063157-9.056842.979531-1.138032 2.414477-1.781444 3.91579-1.755789 1.444009-.069255 2.840239.52647 3.789474 1.616842 1.044668 1.378616 1.560098 3.086258 1.452631 4.812631h-8.614737c-.168567 1.318112.241383 2.644694 1.124211 3.637895.659593.585106 1.505848.916444 2.387368.934737 1.454036.002809 2.735441-.954385 3.145263-2.349474zm-.113684-3.612631c-.00444-.604219-.115624-1.202898-.328421-1.768421-.216734-.511822-.576339-.950364-1.035789-1.263158-.50212-.375822-1.116169-.571606-1.743158-.55579-.882701-.014085-1.730685.343444-2.336842.985263-.665439.7262-1.046655 1.668028-1.073684 2.652632z"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m259.311579 91.7915789h12.353684v20.8042101c-5.082438.806374-10.214842 1.257992-15.36 1.351579-17.178947 0-20.842105-9.183157-20.842105-27.9284206 0-19.1242106 3.789474-28.2063158 20.943158-28.2063158 7.731734.20428 15.443367.8876961 23.090526 2.0463158l.328421-6.2526316c-8.044863-1.4983544-16.197788-2.3432171-24.378947-2.5263158-22.345263 0-28.572632 12.5052632-28.572632 34.9515789 0 21.8778951 6.012632 34.5600001 28.787369 34.5600001 8.09484-.285655 16.164638-1.066059 24.16421-2.336842v-33.1957896h-20.513684z"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m259.311579 91.7915789h12.353684v20.8042101c-5.082438.806374-10.214842 1.257992-15.36 1.351579-17.178947 0-20.842105-9.183157-20.842105-27.9284206 0-19.1242106 3.789474-28.2063158 20.943158-28.2063158 7.731734.20428 15.443367.8876961 23.090526 2.0463158l.328421-6.2526316c-8.044863-1.4983544-16.197788-2.3432171-24.378947-2.5263158-22.345263 0-28.572632 12.5052632-28.572632 34.9515789 0 21.8778951 6.012632 34.5600001 28.787369 34.5600001 8.09484-.285655 16.164638-1.066059 24.16421-2.336842v-33.1957896h-20.513684z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m299.101053 119.618947h8.109473v-35.8231575c6.210467-3.0225601 12.775329-5.254698 19.541053-6.6442106v-7.4147368c-6.935764 1.4532587-13.57921 4.0576945-19.654737 7.7052632v-6.631579h-7.945263z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m299.101053 119.618947h8.109473v-35.8231575c6.210467-3.0225601 12.775329-5.254698 19.541053-6.6442106v-7.4147368c-6.935764 1.4532587-13.57921 4.0576945-19.654737 7.7052632v-6.631579h-7.945263z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m340.722105 119.618947h8.046316v-48.8084207h-8.046316zm0-59.8484207h8.046316v-8.488421h-8.046316z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m340.722105 119.618947h8.046316v-48.8084207h-8.046316zm0-59.8484207h8.046316v-8.488421h-8.046316z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m409.930526 49.5263158h-7.983158v21.5747368c-4.366675-.7167353-8.776642-1.1387417-13.2-1.2631579-16.332631 0-22.446315 8.6021053-22.446315 25.7810527 0 21.0821056 8.842105 24.9852636 19.326315 24.9852636 8.058948 0 16.32-4.294737 16.32-4.294737v3.322105h7.945264zm-23.292631 64.5221052c-6.31579 0-12.037895-2.627368-12.037895-18.4421052 0-12.631579 3.334737-19.4273684 14.614737-19.4273684 4.264008.1088332 8.51679.4885458 12.732631 1.1368421v33.1326315c-4.831831 2.150676-10.025535 3.371968-15.309473 3.6z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m409.930526 49.5263158h-7.983158v21.5747368c-4.366675-.7167353-8.776642-1.1387417-13.2-1.2631579-16.332631 0-22.446315 8.6021053-22.446315 25.7810527 0 21.0821056 8.842105 24.9852636 19.326315 24.9852636 8.058948 0 16.32-4.294737 16.32-4.294737v3.322105h7.945264zm-23.292631 64.5221052c-6.31579 0-12.037895-2.627368-12.037895-18.4421052 0-12.631579 3.334737-19.4273684 14.614737-19.4273684 4.264008.1088332 8.51679.4885458 12.732631 1.1368421v33.1326315c-4.831831 2.150676-10.025535 3.371968-15.309473 3.6z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m434.587368 119.618947h8.261053v-60.9221049h2.046316l28.888421 60.9221049h15.145263v-67.5536838h-8.16v60.9221048h-2.261053l-28.458947-60.9221048h-15.461053z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m434.587368 119.618947h8.261053v-60.9221049h2.046316l28.888421 60.9221049h15.145263v-67.5536838h-8.16v60.9221048h-2.261053l-28.458947-60.9221048h-15.461053z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m529.526316 114.149474c-10.522105 0-14.071579-5.469474-14.071579-15.9031582h35.545263l.429474-5.5705263c0-16.0168421-7.301053-22.8505263-21.587369-22.8505263-13.642105 0-22.446316 7.1368421-22.446316 25.68 0 16.5978948 5.267369 25.0863158 21.271579 25.0863158 6.982439-.177041 13.951398-.70825 20.88-1.591579l-.214736-5.76s-11.696843.909474-19.806316.909474zm-14.122105-21.7642108c.101052-11.8105264 5.254736-16.4210527 14.387368-16.4210527 9.448421 0 13.528421 4.2947369 13.528421 16.4210527z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m529.526316 114.149474c-10.522105 0-14.071579-5.469474-14.071579-15.9031582h35.545263l.429474-5.5705263c0-16.0168421-7.301053-22.8505263-21.587369-22.8505263-13.642105 0-22.446316 7.1368421-22.446316 25.68 0 16.5978948 5.267369 25.0863158 21.271579 25.0863158 6.982439-.177041 13.951398-.70825 20.88-1.591579l-.214736-5.76s-11.696843.909474-19.806316.909474zm-14.122105-21.7642108c.101052-11.8105264 5.254736-16.4210527 14.387368-16.4210527 9.448421 0 13.528421 4.2947369 13.528421 16.4210527z",
    stroke: "#39f",
    strokeWidth: ".5"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m595.892632 77.1515789v-6.3157894h-17.103158v-14.9936842h-7.945263v14.968421h-7.578948v6.3157895h7.578948v25.7052632c0 14.058947 3.789473 17.861053 14.829473 17.861053 3.667023-.162876 7.322745-.521281 10.951579-1.073685l-.543158-6.050526s-6.543158.581053-9.549473.581053c-6.985264 0-7.743158-3.018948-7.743158-13.667369v-23.3305261z",
    fill: "#008bcb"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    d: "m595.892632 77.1515789v-6.3157894h-17.103158v-14.9936842h-7.945263v14.968421h-7.578948v6.3157895h7.578948v25.7052632c0 14.058947 3.789473 17.861053 14.829473 17.861053 3.667023-.162876 7.322745-.521281 10.951579-1.073685l-.543158-6.050526s-6.543158.581053-9.549473.581053c-6.985264 0-7.743158-3.018948-7.743158-13.667369v-23.3305261z",
    stroke: "#39f",
    strokeWidth: ".5"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);
var baseCSS =  true ? {
  name: "gx0lhm",
  styles: "margin-bottom:0;"
} : undefined;
var vectorCSS =  true ? {
  name: "1vrfxm9",
  styles: "height:3.375rem;width:11.25rem;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/MobileIcon.js":
/*!*********************************************!*\
  !*** ./src/components/shared/MobileIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var MobileIcon = function MobileIcon(_ref) {
  var isSecondary = _ref.isSecondary,
      toggleMobileNav = _ref.toggleMobileNav,
      mobileNavOpen = _ref.mobileNavOpen;
  var styleProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    stroke: isSecondary && !mobileNavOpen ? _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue : '#fff',
    from: {
      stroke: isSecondary && !mobileNavOpen ? _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue : '#fff'
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    css: baseCSS,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    onClick: toggleMobileNav
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["animated"].line, {
    style: Object.assign({}, styleProps, {
      transform: mobileNavOpen ? 'rotate(45deg) translate3d(10px, -8px, 0)' : ''
    }),
    x1: "0",
    x2: "48",
    y1: "8",
    y2: "8"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["animated"].line, {
    style: Object.assign({}, styleProps, {
      opacity: mobileNavOpen ? 0 : 1
    }),
    x1: "0",
    x2: "48",
    y1: "24",
    y2: "24"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["animated"].line, {
    style: Object.assign({}, styleProps, {
      transform: mobileNavOpen ? 'rotate(-45deg) translate3d(-24px, -6px, 0)' : ''
    }),
    x1: "0",
    x2: "48",
    y1: "40",
    y2: "40"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileIcon);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:block;height:1.75rem;stroke-width:6;width:1.75rem;z-index:1000;& line{transition:200ms ease-out;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{display:none;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/MobileNav.js":
/*!********************************************!*\
  !*** ./src/components/shared/MobileNav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _MobileIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileIcon */ "./src/components/shared/MobileIcon.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");









var DesktopNav = function DesktopNav(_ref) {
  var isSecondary = _ref.isSecondary,
      navItems = _ref.navItems;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobileNavOpen = _useState[0],
      setMobileNavOpen = _useState[1];

  var toggleMobileNav = function toggleMobileNav() {
    return setMobileNavOpen(!mobileNavOpen);
  };

  var mobileNavProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    x: mobileNavOpen ? '0' : '100%',
    from: {
      x: '100%'
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_3__["animated"].nav, {
    css: navCSS,
    style: {
      transform: mobileNavProps.x.interpolate(function (x) {
        return "translateX(" + x + ")";
      })
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    css: navLinkCSS,
    to: "/"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null, "Home")), navItems.map(function (navItem) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      css: navLinkCSS,
      to: navItem.slug,
      key: navItem.slug
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null, navItem.name));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_MobileIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isSecondary: isSecondary,
    toggleMobileNav: toggleMobileNav,
    mobileNavOpen: mobileNavOpen
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopNav);
var navCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("align-items:center;background:", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["colors"].blue, ";bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:5;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_6__["viewports"].medium, "{display:none;}" + ( true ? "" : undefined));
var navLinkCSS =  true ? {
  name: "1qfzo4j",
  styles: "align-items:center;color:#fff;display:flex;font-size:2rem;font-weight:700;position:relative;text-decoration:none;z-index:1;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/Nav.js":
/*!**************************************!*\
  !*** ./src/components/shared/Nav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem */ "./src/components/shared/NavItem.js");






var Nav = function Nav(_ref) {
  var isSecondary = _ref.isSecondary,
      navItems = _ref.navItems;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
    css: baseCSS
  }, navItems.map(function (navItem) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navItem: navItem,
      key: navItem.slug,
      isSecondary: isSecondary
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:center;display:none;height:100%;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/NavItem.js":
/*!******************************************!*\
  !*** ./src/components/shared/NavItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _SubNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubNav */ "./src/components/shared/SubNav.js");
/* harmony import */ var _DownArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DownArrow */ "./src/components/shared/DownArrow.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");










var NavItem = function NavItem(_ref) {
  var navItem = _ref.navItem,
      isSecondary = _ref.isSecondary;
  var navLinkRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      subNavOffset = _useState[0],
      setSubNavOffset = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      activeSubMenu = _useState3[0],
      setActiveSubMenu = _useState3[1];

  var enableSubMenu = function enableSubMenu(slug) {
    setIsHovered(true);
    setActiveSubMenu(slug);
  };

  var disableSubMenu = function disableSubMenu() {
    setIsHovered(false);
    setActiveSubMenu(undefined);
  };

  var navLinkProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    color: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_8__["colors"].blue : '#fff',
    from: {
      color: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_8__["colors"].blue : '#fff'
    }
  });
  var hoverEffectProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    backgroundColor: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_8__["colors"].blue : '#fff',
    transform: isHovered ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
    from: {
      backgroundColor: isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_8__["colors"].blue : '#fff',
      transform: isHovered ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var offsetLeft = navLinkRef.current.offsetLeft;
    setSubNavOffset(offsetLeft);
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Base, {
    onMouseEnter: function onMouseEnter() {
      return enableSubMenu(navItem.slug);
    },
    onMouseLeave: disableSubMenu,
    ref: navLinkRef
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(NavLink, {
    to: navItem.slug
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["animated"].span, {
    style: navLinkProps
  }, navItem.name, navItem.children && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_DownArrow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isActive: activeSubMenu === navItem.slug,
    isSecondary: isSecondary
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(HoverEffect, {
    style: hoverEffectProps
  })), navItem.children && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_SubNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isActive: activeSubMenu === navItem.slug,
    navItem: navItem,
    subNavOffset: subNavOffset
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

var Base = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "ewy3vt00"
})( true ? {
  name: "mrtvor",
  styles: "align-items:center;display:flex;height:100%;margin-bottom:0;margin-right:1.875rem;&:last-of-type{margin-bottom:0;margin-right:0;}"
} : undefined);

var NavLink =
/*#__PURE__*/
Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
  target: "ewy3vt01"
})( true ? {
  name: "ylng7k",
  styles: "align-items:center;display:flex;font-size:1rem;font-weight:700;height:100%;overflow:hidden;position:relative;text-decoration:none;z-index:1;"
} : undefined);

var HoverEffect =
/*#__PURE__*/
Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["animated"].span, {
  target: "ewy3vt02"
})( true ? {
  name: "1dldsy7",
  styles: "bottom:1.5rem;height:2px;left:0;position:absolute;right:0;"
} : undefined);

/***/ }),

/***/ "./src/components/shared/PartnerContact.js":
/*!*************************************************!*\
  !*** ./src/components/shared/PartnerContact.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _inputs_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/TextInput */ "./src/components/inputs/TextInput.js");
/* harmony import */ var _styled_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/SubmitButton */ "./src/components/styled/SubmitButton.js");








var PartnerContact = function PartnerContact(_ref) {
  var heading = _ref.heading,
      copy = _ref.copy;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], null, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["BodyText"], null, copy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: formCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_inputs_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: "Enter email",
    name: "email",
    style: inputCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], null, "SUBMIT")));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerContact);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("border:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].black, " solid;box-shadow:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["styles"].boxShadow, ";margin:0 auto;padding:1.25rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{padding:1.125rem 6.25rem 2.375rem;width:66.67%;}" + ( true ? "" : undefined));
var formCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:center;display:flex;flex-direction:column;justify-content:space-between;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{flex-direction:row;}" + ( true ? "" : undefined));
var inputCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin-bottom:0.875rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{margin-bottom:0;width:25rem;}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/Posts.js":
/*!****************************************!*\
  !*** ./src/components/shared/Posts.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");







var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: containerCSS
  }, posts.map(function (_ref2) {
    var node = _ref2.node;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
      css: postCSS,
      key: node.id
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: imagePlaceholderCSS
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: postContentCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["CopyHeading"], {
      theme: "large"
    }, node.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_2__["BodyText"], null, node.content), node.acf.url && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      css: ctaCSS,
      href: node.acf.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Read More")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);
var containerCSS =  true ? {
  name: "pajarn",
  styles: "padding:4.375rem 0 3.125rem;"
} : undefined;
var postCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("border-bottom:2px ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, " solid;justify-content:space-between;margin-bottom:1.5rem;padding:1.5rem 0;&:last-of-type{border-bottom:0;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{display:flex;margin-bottom:0;padding:3.125rem;width:94%;}" + ( true ? "" : undefined));
var imagePlaceholderCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background:#717171;height:18.125rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{width:28%;}" + ( true ? "" : undefined));
var postContentCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("display:flex;flex-direction:column;padding-top:1.5rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{padding-top:0.5rem;width:70%;}" + ( true ? "" : undefined));
var ctaCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, ";font-weight:700;margin-top:auto;text-decoration:none;&:after{content:'>';display:inline-block;margin-left:0.25rem;position:relative;transform:translate3d(0,0,0);transition:transform 300ms ease-out;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{&:hover{color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].darkBlue, ";&:after{transform:translate3d(0.3rem,0,0);}}}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/SocialIcon.js":
/*!*********************************************!*\
  !*** ./src/components/shared/SocialIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");





var SocialIcon = function SocialIcon(_ref) {
  var platform = _ref.platform;

  if (platform === 'facebook') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      height: "20",
      viewBox: "0 0 11 20",
      width: "11",
      xmlns: "http://www.w3.org/2000/svg",
      css: baseCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m10.3276289.00412371-2.57010313-.00412371c-2.88742268 0-4.75340206 1.91443299-4.75340206 4.87752577v2.24886598h-2.58412371c-.22329897 0-.40412371.18103093-.40412371.4043299v3.25835055c0 .2232989.18103093.4041237.40412371.4041237h2.58412371v8.2218556c0 .223299.18082474.4041238.40412371.4041238h3.37154639c.22329897 0 .40412372-.181031.40412372-.4041238v-8.2218556h3.02144327c.223299 0 .4041237-.1808248.4041237-.4041237l.0012371-3.25835055c0-.1072165-.0426804-.20989691-.1183505-.2857732s-.1787629-.1185567-.2859793-.1185567h-3.02247427v-1.90639175c0-.91628866.21835051-1.3814433 1.41195876-1.3814433l1.73134021-.00061856c.2230928 0 .4039175-.18103092.4039175-.40412371v-3.02556701c0-.22288659-.1806185-.40371134-.4035051-.40412371z"
    }));
  }

  if (platform === 'linked-in') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      height: "20",
      viewBox: "0 0 21 20",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      css: baseCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m20.7970164 12.2126827v7.6871085h-4.4592467v-7.1758437c0-1.8041493-.6429628-3.03031493-2.2564806-3.03031493-1.2339509 0-1.9618563.83015833-2.2867954 1.62908833-.1169972.2877088-.1525313.6906316-.1525313 1.0883786v7.4877784h-4.45485384s.05980341-12.14892139 0-13.40714164h4.45576724v1.90031315c-.0060456.01561413-.0190501.02857516-.0251392.04592902h.0251392v-.04592902c.595294-.91331768 1.6498782-2.21490084 4.0181367-2.21490084 2.9393267.0000435 5.1360039 1.91597078 5.1360039 6.03553413zm-18.27453032-12.18532536c-1.52422582 0-2.52248608 1-2.52248608 2.31889353 0 1.28335943.96881524 2.31715379 2.46529228 2.31715379h.02687891c1.55802018 0 2.52335595-1.03379436 2.52335595-2.31715379-.03031489-1.31889353-.96529228-2.31889353-2.49304106-2.31889353zm-2.25643702 19.87239036h4.45663709v-13.40883782h-4.45663709z"
    }));
  }

  if (platform === 'twitter') {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      height: "20",
      viewBox: "0 0 25 20",
      width: "25",
      xmlns: "http://www.w3.org/2000/svg",
      css: baseCSS
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m24.5783133 2.37983936c-.9046185.40084337-1.8752611.67269076-2.8951004.79405622 1.0413253-.62357429 1.8384337-1.6126506 2.2162249-2.78759036-.9767872.57746988-2.05498.99678715-3.2038153 1.22409639-.9199598-.98140563-2.2285141-1.59269077-3.6799197-1.59269077-2.784498 0-5.0422088 2.25771085-5.0422088 5.04068273 0 .3946988.0445381.78020081.1305622 1.14883535-4.18979917-.21044177-7.90502006-2.21779117-10.39156624-5.26803213-.43465863.74337349-.68192771 1.60955823-.68192771 2.5341767 0 1.74935743.89080321 3.29289157 2.24236948 4.19594378-.82630522-.02763052-1.60345382-.25493976-2.28381526-.63277109v.06297189c0 2.44200803 1.73859437 4.48008033 4.04389558 4.94393573-.42236948.1136546-.86775101.1766265-1.32851406.1766265-.32558233 0-.64044177-.032249-.94915662-.0936948.64196787 2.0042972 2.50345381 3.4618073 4.70895582 3.5017671-1.72477912 1.3515663-3.89955823 2.1548193-6.26168675 2.1548193-.40698795 0-.80787148-.0245783-1.20257028-.0691165 2.23160643 1.4329719 4.88096386 2.2684739 7.72843374 2.2684739 9.2750201 0 14.3448996-7.6823695 14.3448996-14.34489958l-.0169076-.65273092c.9906024-.70654619 1.8475903-1.59425703 2.5218474-2.60485944z"
    }));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("fill:#fff;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{&:hover{fill:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].green, ";}}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/SubNav.js":
/*!*****************************************!*\
  !*** ./src/components/shared/SubNav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/hooks */ "./node_modules/react-spring/hooks.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");








var SubNav = function SubNav(_ref) {
  var isActive = _ref.isActive,
      navItem = _ref.navItem,
      subNavOffset = _ref.subNavOffset;
  var styleProps = Object(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    y: isActive ? '0%' : '-100%',
    from: {
      y: '-100%'
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: subNavContainerCSS,
    style: {
      pointerEvents: isActive ? 'auto' : 'none',
      display: isActive ? 'block' : 'none'
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_hooks__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    css: subNavCSS,
    style: {
      transform: styleProps.y.interpolate(function (y) {
        return "translateY(" + y + ")";
      })
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: navItemsCSS,
    style: {
      paddingLeft: subNavOffset + "px"
    }
  }, navItem.children.map(function (navItemChild) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: navItemChild.slug,
      css: subNavMenuLinkCSS,
      key: navItemChild.slug
    }, navItemChild.name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNav);
var subNavContainerCSS =  true ? {
  name: "1e2vrd1",
  styles: "height:2.5rem;left:0;overflow:hidden;position:absolute;right:0;top:100%;z-index:-1;"
} : undefined;
var subNavCSS =  true ? {
  name: "p8gp4e",
  styles: "background-color:#333;bottom:0;height:2.5rem;position:absolute;left:0;right:0;top:0;"
} : undefined;
var navItemsCSS =  true ? {
  name: "1badr5p",
  styles: "align-items:center;height:100%;display:flex;"
} : undefined;
var subNavMenuLinkCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("color:#fff;font-size:0.875rem;margin-right:1.875rem;text-decoration:none;&:last-of-type{margin-right:0;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["viewports"].medium, "{&:hover{color:", _utils_variables__WEBPACK_IMPORTED_MODULE_5__["colors"].green, ";}}" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/shared/Team.js":
/*!***************************************!*\
  !*** ./src/components/shared/Team.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var Team = function Team(_ref) {
  var heading = _ref.heading,
      members = _ref.members;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Typography__WEBPACK_IMPORTED_MODULE_3__["CopyHeading"], null, heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: teamCSS
  }, members.map(function (member) {
    var fluid = member.image.localFile.childImageSharp.fluid;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: imageWrapperCSS,
      key: fluid
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      fluid: fluid,
      css: imageCSS
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);
var baseCSS =  true ? {
  name: "1skl55q",
  styles: "margin-top:4.375rem;text-align:center;"
} : undefined;
var teamCSS =  true ? {
  name: "1s57vel",
  styles: "display:flex;flex-wrap:wrap;margin:1.875rem -0.75rem 0;"
} : undefined;
var imageWrapperCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin-bottom:1.25rem;padding:0 0.75rem;width:50%;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["viewports"].medium, "{width:25%;}" + ( true ? "" : undefined));
var imageCSS =  true ? {
  name: "8atqhb",
  styles: "width:100%;"
} : undefined;

/***/ }),

/***/ "./src/components/shared/TopBanner.js":
/*!********************************************!*\
  !*** ./src/components/shared/TopBanner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/BackgroundImage */ "./src/components/styled/BackgroundImage.js");
/* harmony import */ var _styled_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");







var TopBanner = function TopBanner(_ref) {
  var heading = _ref.heading,
      image = _ref.image;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    css: baseCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    style: imageCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
    css: headingCSS
  }, heading)));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBanner);
var baseCSS =  true ? {
  name: "h0jfp",
  styles: "align-items:flex-end;display:flex;height:35vh;overflow:hidden;position:relative;z-index:0;&:after{background-color:#fff;bottom:1.875rem;content:'';height:2px;left:0;position:absolute;right:0;z-index:2;}"
} : undefined;
var imageCSS =  true ? {
  name: "aklky2",
  styles: "height:100%;position:absolute;width:100%;z-index:0;&:before{background-color:rgba(0,0,0,0.15);bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:1;}"
} : undefined;
var headingCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:center;background:#fff;box-shadow:", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["styles"].boxShadow, ";color ", _utils_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].black, ";height:3.125rem;display:flex;font-size:2.25rem;justify-content:center;margin-bottom:1.875rem;position:relative;width:13.125rem;z-index:1;" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/styled/BackgroundImage.js":
/*!**************************************************!*\
  !*** ./src/components/styled/BackgroundImage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);





var BackgroundImage = function BackgroundImage(_ref) {
  var image = _ref.image,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " ", style,  true ? "" : undefined)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    css: imageCSS,
    fluid: image.localFile.childImageSharp.fluid
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundImage);
var baseCSS =  true ? {
  name: "kdwx3d",
  styles: "overflow:hidden;position:relative;"
} : undefined;
var imageCSS =  true ? {
  name: "34zkea",
  styles: "left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);"
} : undefined;

/***/ }),

/***/ "./src/components/styled/Button.js":
/*!*****************************************!*\
  !*** ./src/components/styled/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");






var Button = function Button(_ref) {
  var children = _ref.children,
      url = _ref.url,
      theme = _ref.theme,
      style = _ref.style;
  var isSecondary = theme === 'secondary';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url,
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " background-color:", isSecondary ? 'transparent' : _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, ";border:2px ", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, " solid;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{&:hover{background-color:", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].darkBlue, ";border-color:", isSecondary ? '#fff' : _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].darkBlue, ";color:", isSecondary ? _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].darkBlue : '#fff', ";}}", style,  true ? "" : undefined)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);
var baseCSS =  true ? {
  name: "1tqsvdh",
  styles: "align-items:center;border-radius:1.25rem;color:#fff;display:flex;font-family:'Dosis';font-weight:700;height:2.5rem;justify-content:center;letter-spacing:0.02em;margin:0 auto;text-decoration:none;width:8.75rem;"
} : undefined;

/***/ }),

/***/ "./src/components/styled/Container.js":
/*!********************************************!*\
  !*** ./src/components/styled/Container.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var Container = function Container(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " max-width:", theme === 'secondary' ? '62.5rem' : '75rem', ";", style,  true ? "" : undefined)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);
var baseCSS =  true ? {
  name: "1atubsq",
  styles: "margin:0 auto;width:90%;"
} : undefined;

/***/ }),

/***/ "./src/components/styled/GlobalStyle.js":
/*!**********************************************!*\
  !*** ./src/components/styled/GlobalStyle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion-reset */ "./node_modules/emotion-reset/dist/index.js");
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion_reset__WEBPACK_IMPORTED_MODULE_2__);





var GlobalStyle = function GlobalStyle() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["Global"], {
    styles: styles
  }));
};

var styles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(emotion_reset__WEBPACK_IMPORTED_MODULE_2___default.a, " *{box-sizing:border-box;font-kerning:auto;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;}html{box-sizing:border-box;font-size:16px;}*,*:before,*:after{box-sizing:inherit;}" + ( true ? "" : undefined));
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./src/components/styled/SecondaryPageWrapper.js":
/*!*******************************************************!*\
  !*** ./src/components/styled/SecondaryPageWrapper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var SecondaryPageWrapper = function SecondaryPageWrapper(_ref) {
  var children = _ref.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    css: baseCSS
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SecondaryPageWrapper);
var baseCSS =  true ? {
  name: "1f8hjxc",
  styles: "flex:1;padding-top:5rem;"
} : undefined;

/***/ }),

/***/ "./src/components/styled/SubmitButton.js":
/*!***********************************************!*\
  !*** ./src/components/styled/SubmitButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");





var SubmitButton = function SubmitButton(_ref) {
  var children = _ref.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(baseCSS, " @media ", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["viewports"].medium, "{&:hover{background-color:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].darkBlue, ";border-color:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].darkBlue, ";}}" + ( true ? "" : undefined)),
    type: "submit"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);
var baseCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("align-items:center;background:", _utils_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].blue, ";border:0;border-radius:1.25rem;color:#fff;cursor:pointer;display:flex;font-family:'Dosis';font-weight:700;height:2.5rem;justify-content:center;letter-spacing:0.02em;outline:none;text-decoration:none;width:8.75rem;appearance:none;-moz-appearance:none;-webkit-appearance:none;" + ( true ? "" : undefined));

/***/ }),

/***/ "./src/components/styled/Typography.js":
/*!*********************************************!*\
  !*** ./src/components/styled/Typography.js ***!
  \*********************************************/
/*! exports provided: SectionHeading, CopyHeading, BodyText, Cta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeading", function() { return SectionHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyHeading", function() { return CopyHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyText", function() { return BodyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cta", function() { return Cta; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/variables */ "./src/utils/variables.js");





var SectionHeading = function SectionHeading(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, ";font-size:2.25rem;font-weight:700;margin:0 0 3.125rem;", style,  true ? "" : undefined)
  }, children);
};
var CopyHeading = function CopyHeading(_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      theme = _ref2.theme;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].black, ";font-family:'Titillium Web';font-size:", theme === 'large' ? '1.875rem' : '1.5rem', ";font-weight:700;margin:0 0 0.875rem;", style,  true ? "" : undefined)
  }, children);
};
var BodyText = function BodyText(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      theme = _ref3.theme;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].gray, ";font-size:", theme === 'large' ? '1.125rem' : '1rem', ";line-height:150%;", style,  true ? "" : undefined),
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};
var Cta = function Cta(_ref4) {
  var to = _ref4.to,
      children = _ref4.children,
      style = _ref4.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, ";font-size:1.125rem;font-weight:700;text-decoration:none;&:after{content:'>';display:inline-block;margin-left:0.25rem;position:relative;transform:translate3d(0,0,0);transition:transform 300ms ease-out;}@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["viewports"].medium, "{&:hover{color:", _utils_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].darkBlue, ";&:after{transform:translate3d(0.3rem,0,0);}}}", style,  true ? "" : undefined),
    to: to
  }, children);
};

/***/ }),

/***/ "./src/components/templates/ProductTemplate.js":
/*!*****************************************************!*\
  !*** ./src/components/templates/ProductTemplate.js ***!
  \*****************************************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _product_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/Banner */ "./src/components/product/Banner.js");
/* harmony import */ var _product_Section1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/Section1 */ "./src/components/product/Section1.js");
/* harmony import */ var _product_Section2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/Section2 */ "./src/components/product/Section2.js");
/* harmony import */ var _product_Section3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/Section3 */ "./src/components/product/Section3.js");
/* harmony import */ var _product_Section4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/Section4 */ "./src/components/product/Section4.js");










var ProductTemplate = function ProductTemplate(_ref) {
  var data = _ref.data;
  var acf = data.wordpressWpProducts.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_product_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: acf.banner_image,
    title: acf.banner_title,
    copy: acf.banner_copy
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_product_Section1__WEBPACK_IMPORTED_MODULE_5__["default"], {
    features: acf.section_1_features
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_product_Section2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    heading: acf.section_2_heading,
    copy: acf.section_2_copy
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_product_Section3__WEBPACK_IMPORTED_MODULE_7__["default"], {
    features: acf.section_3_features
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_product_Section4__WEBPACK_IMPORTED_MODULE_8__["default"], {
    heading: acf.section_4_heading,
    copy: acf.section_4_copy,
    cta: acf.section_4_cta,
    url: acf.section_4_cta_url,
    image: acf.section_4_image
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTemplate);
var query = "3758037150";

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var NotFoundPage = function NotFoundPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", null, "NOT FOUND"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/TopBanner */ "./src/components/shared/TopBanner.js");
/* harmony import */ var _components_styled_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _components_shared_Team__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/Team */ "./src/components/shared/Team.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/variables */ "./src/utils/variables.js");











var AboutPage = function AboutPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: acf.banner_heading,
    image: acf.banner_image
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: containerCSS,
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: contentCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["CopyHeading"], {
    theme: "large"
  }, acf.about_heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["BodyText"], {
    theme: "large"
  }, acf.about_copy)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Team__WEBPACK_IMPORTED_MODULE_7__["default"], {
    heading: acf.team_heading,
    members: acf.team
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);
var containerCSS =  true ? {
  name: "q4mu2a",
  styles: "padding:3.125rem 0 5rem;"
} : undefined;
var contentCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:0 auto;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_8__["viewports"].medium, "{width:80%;}" + ( true ? "" : undefined));
var query = "2152645146";

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/TopBanner */ "./src/components/shared/TopBanner.js");
/* harmony import */ var _components_styled_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _components_shared_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/ContactForm */ "./src/components/shared/ContactForm.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/variables */ "./src/utils/variables.js");











var ContactPage = function ContactPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: acf.banner_heading,
    image: acf.banner_image
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: "secondary",
    style: containerCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: columnCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["CopyHeading"], {
    theme: "large"
  }, acf.contact_heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["BodyText"], {
    theme: "large"
  }, acf.contact_copy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: dividerCSS
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["CopyHeading"], {
    theme: "large"
  }, acf.address_heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["BodyText"], {
    theme: "large"
  }, acf.address_copy)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: columnCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    heading: acf.form_heading
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);
var containerCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("justify-content:space-between;padding:3.125rem 0 6.25rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_8__["viewports"].medium, "{display:flex;}" + ( true ? "" : undefined));
var columnCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_8__["viewports"].medium, "{width:48%;}" + ( true ? "" : undefined));
var dividerCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background-color:#d8d8d8;height:1px;margin:3.125rem 0 1.125rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_8__["viewports"].medium, "{width:65%;}" + ( true ? "" : undefined));
var query = "995140488";

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_homepage_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/Hero */ "./src/components/homepage/Hero.js");
/* harmony import */ var _components_homepage_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/homepage/WhatWeDo */ "./src/components/homepage/WhatWeDo.js");
/* harmony import */ var _components_homepage_SupportedSolutions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homepage/SupportedSolutions */ "./src/components/homepage/SupportedSolutions.js");
/* harmony import */ var _components_homepage_OurProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/homepage/OurProducts */ "./src/components/homepage/OurProducts.js");
/* harmony import */ var _components_homepage_BottomExcerpt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/homepage/BottomExcerpt */ "./src/components/homepage/BottomExcerpt.js");









var IndexPage = function IndexPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_homepage_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: acf.hero_heading,
    subheading: acf.hero_subheading
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_homepage_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: acf.what_we_do_heading,
    blocks: acf.what_we_do_blocks,
    cta: acf.what_we_do_cta,
    ctaUrl: acf.what_we_do_cta_url
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_homepage_SupportedSolutions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    heading: acf.supported_solutions_heading,
    blocks: acf.supported_solutions_blocks
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_homepage_OurProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    heading: acf.our_products_heading,
    blocks: acf.our_products_blocks
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_homepage_BottomExcerpt__WEBPACK_IMPORTED_MODULE_7__["default"], {
    copy: acf.bottom_excerpt_copy,
    image: acf.bottom_excerpt_image
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
var query = "1390872603";

/***/ }),

/***/ "./src/pages/news.js":
/*!***************************!*\
  !*** ./src/pages/news.js ***!
  \***************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/TopBanner */ "./src/components/shared/TopBanner.js");
/* harmony import */ var _components_shared_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/Posts */ "./src/components/shared/Posts.js");







var NewsPage = function NewsPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf,
      edges = data.allWordpressPost.edges;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: acf.banner_heading,
    image: acf.banner_image
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Posts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: edges
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsPage);
var query = "1652038126";

/***/ }),

/***/ "./src/pages/partners.js":
/*!*******************************!*\
  !*** ./src/pages/partners.js ***!
  \*******************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/TopBanner */ "./src/components/shared/TopBanner.js");
/* harmony import */ var _components_styled_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _components_styled_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _components_shared_PartnerContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/PartnerContact */ "./src/components/shared/PartnerContact.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/variables */ "./src/utils/variables.js");












var PartnersPage = function PartnersPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    heading: acf.banner_heading,
    image: acf.banner_image
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: containerCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_7__["CopyHeading"], null, acf.partners_heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: partnersCSS
  }, acf.partners_partners.map(function (partner) {
    var fluid = partner.logo.localFile.childImageSharp.fluid;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      css: logoWrapperCSS,
      key: fluid
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      fluid: fluid,
      css: logoCSS
    }));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_PartnerContact__WEBPACK_IMPORTED_MODULE_8__["default"], {
    heading: acf.contact_heading,
    copy: acf.contact_copy
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnersPage);
var containerCSS =  true ? {
  name: "5ruokv",
  styles: "padding:3.125rem 0 5rem;text-align:center;"
} : undefined;
var partnersCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("display:flex;flex-wrap:wrap;justify-content:center;margin:0 auto;padding:1.375rem 0 4.375rem;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_9__["viewports"].medium, "{width:83.33%;}" + ( true ? "" : undefined));
var logoWrapperCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin-bottom:1.25rem;padding:0 0.75rem;width:50%;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_9__["viewports"].medium, "{width:20%;}" + ( true ? "" : undefined));
var logoCSS =  true ? {
  name: "j9ad5u",
  styles: "height:auto;width:100%;"
} : undefined;
var query = "3318490109";

/***/ }),

/***/ "./src/pages/products.js":
/*!*******************************!*\
  !*** ./src/pages/products.js ***!
  \*******************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Layout */ "./src/components/shared/Layout.js");
/* harmony import */ var _components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled/SecondaryPageWrapper */ "./src/components/styled/SecondaryPageWrapper.js");
/* harmony import */ var _components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/TopBanner */ "./src/components/shared/TopBanner.js");
/* harmony import */ var _components_styled_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styled/Container */ "./src/components/styled/Container.js");
/* harmony import */ var _components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styled/Typography */ "./src/components/styled/Typography.js");
/* harmony import */ var _components_products_ProductExcerpts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/products/ProductExcerpts */ "./src/components/products/ProductExcerpts.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/variables */ "./src/utils/variables.js");











var ProductsPage = function ProductsPage(_ref) {
  var data = _ref.data;
  var acf = data.wordpressPage.acf;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "secondary"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_SecondaryPageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_TopBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: acf.banner_heading,
    image: acf.banner_image
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: "secondary",
    style: containerCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: contentCSS
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["CopyHeading"], {
    theme: "large"
  }, acf.products_heading), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_styled_Typography__WEBPACK_IMPORTED_MODULE_6__["BodyText"], {
    theme: "large"
  }, acf.products_copy))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_products_ProductExcerpts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    products: acf.products
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);
var containerCSS =  true ? {
  name: "jgg1e7",
  styles: "padding:4.375rem 0 3.125rem;text-align:left;"
} : undefined;
var contentCSS =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:0 auto;@media ", _utils_variables__WEBPACK_IMPORTED_MODULE_8__["viewports"].medium, "{width:80%;}" + ( true ? "" : undefined));
var query = "3355407998";

/***/ }),

/***/ "./src/static/icons/favicon.png":
/*!**************************************!*\
  !*** ./src/static/icons/favicon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjFCQzFDRjkwM0Q3MTFFOTk3ODNCMEZBNjdDRTk2OUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFCQzFDRkEwM0Q3MTFFOTk3ODNCMEZBNjdDRTk2OUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMUJDMUNGNzAzRDcxMUU5OTc4M0IwRkE2N0NFOTY5QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMUJDMUNGODAzRDcxMUU5OTc4M0IwRkE2N0NFOTY5QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMHMA4AAAnESURBVHjarFcLdBTVGf7msTP73k02IWQTkgAJxASQgIAc0MAhVJFIFR/ntIoetVqlx2pbtbRHq63VqrRabREValtFLR4EJRqQghAEVAgJSkIgBvLO5rmb7O68Z2d6ZwOIEAU9vefcMzN3du/3/f/9/+//h1q5ciVGGglNhaFpcI/KpP0547IZp9dnGIYu9IUGlaHBfiEsaTwvIWuiOSa7CMUOH4IwYeoCuprrcKSzAe3iEMA5AZoZEQIejwcUvmFw/oB3+s3L78mcWXod6wuMTVCsQ9UNIx43BDk+0OuKrWksyFhvD07ATN6JdIo+uRchIcXR19+Mz/ZtwL+q38Mma20kjLS0tJEJTFtyQ+mc+x5bY8/MLZAVFbKiQdVNxGI0eLoa+Wl/xGjfpzBMA7pKMA0kN2JoYi25IWTAcuTKAq312P3uU/hFfRVqzsbJyso6l8CcW+++adHvnlsXGRhQ2j4/uDN05Is9PceOnuC8AabkRvcDeVmrL3ZzEbDMMJg1bOReS1DoE4sRkfKQMBg4bb0IOI9jVEqv9bv4hidx97Y1eONsAuyZC6U33VZ++cPPrtv+z5efql//yqq+L490WOsOHljyG/w2PQVjFZU8GDwcXIKs6+CdPE70L0RN+60IxYohaxw04pGEqcFGhzHaU4tpwU3uGx7dsc4fgOPtp7D2TMzT4TGxZFr2gmdeq/r3K6+vPrzyvgfEcF/UWg8WYPR9r2Gjt8R9Z3/ExVMUlXQbTagzlClUbZzx3L72RyjFW5JD26wYkEGRSShA0e0IxSegpmsRGnpm4tL5reVctPtASx2arL29Xu8wAcuV5Y//bW1ltzO7/cnbF0MVdGv9ormY+NOXsYXPYGcdbvSYFrYFTjEmWJaKb37SuGbnqrY14aq3X1Waa3aAYWXamzqKcqf4DYaFSYKDgkL+pKEnlocDXYupcZeyZUp93TvRXn3wNIFJcy4rkq9+cNXnr/39cdRt32WtFV2GojtfxIeeFOQfafaofVE7yxBgi4DNSZkfPav8uHajVjmcszrkzhNtQ59UVkb3VfxDbW3YDU0bMFkbbzo8PpNz2hiOgkbxOJ640k3iRdZqP95uEWCtDQOl1952OCSAObRlfYI8501GDgF/n+WRE49RZnu/i9ETNBSVAeeiUL9Fev7QO+rGkTJIj/TGYnve3WpNineAycjLo0ePn4hA1ljT6UulVG1QPLi14tTvWV9qCjcwZvo1eseX9UZXU7PLD/uyv+A/NgfGGgrQH+OpgRjPODidRCyDwV607n9VehQXMExFgt7W0AJrfsOgmdziSTFXMJ/rPrbXTKi4/mE8kVWI2apEXpJ87oq4ICos0QEGCRJ5jRXSM2KPHsX/abDUpPlX2OwOqK0t1ReXomjWUtwvndzeIPrVHSHviPtVg4Y4iFCoSl33XUEoxgbal+YxHF6XqYgKwp0RGMYwAee44rl2yoSDivRecQ/+QNZpkwBb4a6TgAgLPKzz14n13TWxTfFe6YKs59KCblfR7LlUwfSFZnbxTMWVPlZi7W5oqoKBji+w9aU/IVTzEesN5ubTso7JJZ0zci7GYsv1SdZkWpbHJZaoHAlAkpj9tcLmb7WUVJ3A1DklafOWLrMVzr5W86TniWoCgqwQedCGLWKJWGQVluGWlXOxbeXlrNvnC1DEG8Xz6ZuJ4favdiPZZZAs1pikzGpxZkht1WtHdjGDMXMXleVec8fP+XFTrpIMmhEEEbIYIxWVbE7qSNLllmutaVnJcHZc9qP7WTtN8ZxNRoqvM/fksZwMYUugTCKpROdNFkKfdFwOK71nW1y48Ic/mLj0jofs4ycvEJUE4qKEBLE6WaAIMSSs6mQMb3hmUdRIiqXnTGYdNk5z2XrgYNqSQXcGPmwsUTwiPqrCwIgmugw1cfp94bwrZ8645d6HfROnXi0Q4Bix2CCBStudRBCJYAmSYsSGwqZuKAzN+yi7K4W4cxj4q0rAs6yhDbj5eApDi18jaN3zZCOvQ0NHlIFNM4as5ZxJU8eXLX/w19kz590mEWmIxgWYFEcEyoNYV0dT+PD+ys7q3TviLUePKAPdfaZpajaX15PImTKdmnfLL83MCQuSR0BqNq1FwqzZ3/GlI53Np87qGawnKxOyUgUcavHDn5KZsfTpXz02uaz8fnAO32A0DpNUH97lRU/d59saP3hzdfPuLdukcK94Tnc11C+i60QlDv13K+54/i1MuPTGZED2Vh9lh47V7C2YsnCRYdpJQxFPIp+iopOjy8+MkR0UBHKLy2aX31QmRKPkSKSkxZ11h3bVrH/1jw0fbtqhq/L5c1MWDFS+sAL5l5SDhtNord5Ld+7bVsEaPtkws4YtTwYqReKBIupHJT0QTFPR3teNSDhEjHeSflHvqVr99J1v/mTJ/MMVb10Y+KnR395M0qMTSo+GxgO76Nbqqi+GTnTsZLjSZBBa9c48qYI6iWArE+YUhs14tB89QhfCx5s+XHvX9bN3vvzntZosfXftNU0GNOdGy/aP0dbeRCd0DZ++vuoJjl1qDgObyfxPWOpHpqjYUDxmiAoGRbyz5ZW9f11WfmXb4drm7y3+qXl5cGuZqN38AmRquB/oOV7fnpo5mxk3wyyVxaZkT5cgKWVNSwWtI0n3athzXHPL9d0bIGiR703gqnvuBVXrwXsfPOR1+c3TLVnTp5/tzLuoPNM/rv4SRZJJADJJcI1UQVll4STl2OWlHc1msBBHw28Qdt8dPL0gFUtmvYC3nrsbvUqb1+f9qifUNQkHPzj4vi/Dbs8oVudKIpMEt6ZCpkBKsteugMuw5YdsWSlm49BWqxO60MGwDvDLFr+oH3p3F/aH3vhaT3hqGIaGhiphR0YRP9afx04VBRqyRUCzJguReMLFaHCOYWdFUwIFWpv4MSRNPC+6nbVR1095VpfaDFQ0rDiV5+cQOJWGTXv0ipTxXLZzDFdieUImBCQCbjUmMYnUduJ+52hminHRqBs1hgMtGe2UpMdM0zwHGEWBq3Fd4TpzMBbChiM/wxknZxH4xk8zmnSL0+/yrMi9wvV7QoAT4sM9oUSm5QlRJlfNhliCgyHREWpA3J8IxQ8Yoh4irZQL6e4ijLYvgIf34pOeFfio6aUL+jI6e4ya5piVc13qE0zQuUCQGMQJEYH0CFZMyISMJVinv8sYavjK0tanEtAYeRN7uh5B19CJkfa+IAKne7di5ipbSdrtSqp7nkHZA8kye47ok8+hqHIU7dHNqOt/HWHj2Lft6ff7QS1fvvz86OTcrMaCspEKNsoVNLM805HKFxGLAycrVxgRuQUDUj2RywZEVX34A4LG+Qj8T4ABAC9qmBcO3npLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/utils/typography.js":
/*!*********************************!*\
  !*** ./src/utils/typography.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typography */ "./node_modules/typography/dist/index.js");
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typography__WEBPACK_IMPORTED_MODULE_0__);

var typography = new typography__WEBPACK_IMPORTED_MODULE_0___default.a({
  googleFonts: [{
    name: 'Titillium Web',
    styles: ['400', '700']
  }, {
    name: 'Dosis',
    styles: ['400', '700']
  }],
  headerFontFamily: ['Dosis', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Titillium Web', 'Helvetica', 'sans-serif']
});
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "./src/utils/variables.js":
/*!********************************!*\
  !*** ./src/utils/variables.js ***!
  \********************************/
/*! exports provided: colors, styles, viewports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewports", function() { return viewports; });
var colors = {
  black: '#333',
  blue: '#017CF2',
  darkBlue: '#0055A7',
  gray: '#717171',
  green: '#99CC00'
};
var styles = {
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.08)'
};
var viewports = {
  medium: 'screen and (min-width: 768px)'
};

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map