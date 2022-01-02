/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GoTop = ()=>{\n    const { 0: isVisible , 1: setisVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener('scroll', function(e) {\n            toggleVisibility();\n        });\n    }, []);\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setisVisible(true);\n        } else {\n            setisVisible(false);\n        }\n    };\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"go-top active\",\n            onClick: ()=>scrollToTop()\n            ,\n            __source: {\n                fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/GoTop.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                className: \"ri-arrow-up-s-line\",\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/GoTop.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                },\n                __self: undefined\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbEQsS0FBSyxDQUFDRyxLQUFLLE9BQVMsQ0FBQztJQUNuQixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSiwrQ0FBUSxDQUFDLEtBQUs7SUFFaERDLGdEQUFTLEtBQU8sQ0FBQztRQUNmSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUFRLENBQUVDLENBQUMsRUFBRSxDQUFDO1lBQ2hEQyxnQkFBZ0I7UUFDbEIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNBLGdCQUFnQixPQUFTLENBQUM7UUFDOUIsRUFBRSxFQUFFQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUM3Qk4sWUFBWSxDQUFDLElBQUk7UUFDbkIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNPLFdBQVcsT0FBUyxDQUFDO1FBQ3pCRixNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUFDO1lBQ2ZDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBRSxDQUFRO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTtrQkFFRFgsU0FBUyx5RUFDUFksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBZTtZQUFDQyxPQUFPLE1BQVFOLFdBQVc7Ozs7Ozs7OzJGQUN0RE8sQ0FBQztnQkFBQ0YsU0FBUyxFQUFDLENBQW9COzs7Ozs7Ozs7O0FBSzNDLENBQUM7QUFFRCxpRUFBZWQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2libGUvLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcz9lMDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0aXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgIHNldGlzVmlzaWJsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0aXNWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dvLXRvcCBhY3RpdmUnIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvVG9wKCl9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWFycm93LXVwLXMtbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHb1RvcCIsImlzVmlzaWJsZSIsInNldGlzVmlzaWJsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Loader = ({ loading  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"preloader\",\n            __source: {\n                fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/Loader.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"spinner\",\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/Loader.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"dot1\",\n                        __source: {\n                            fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/Loader.js\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"dot2\",\n                        __source: {\n                            fileName: \"/home/tt1102/projects/freelance/nft-gible/components/Shared/Loader.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        },\n                        __self: undefined\n                    })\n                ]\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9CLE1BQU07a0JBRURBLE9BQU8seUVBQ0xDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7NEZBQ3ZCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7eUZBQ3JCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7eUZBQ3BCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBTWpDLENBQUM7QUFFRCxpRUFBZUgsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2libGUvLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanM/NjM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBsb2FkaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Bpbm5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG90MSc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG90Mic+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvYWRlciIsImxvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shared/Loader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/fonts/remixicon.css */ \"./public/fonts/remixicon.css\");\n/* harmony import */ var _public_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Shared/Loader */ \"./components/Shared/Loader.js\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false)\n        , 2000);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                            lineNumber: 21,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: \"Gible - React Next NFT Marketplace Template\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\",\n                        __source: {\n                            fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                loading: loading,\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\",\n                __source: {\n                    fileName: \"/home/tt1102/projects/freelance/nft-gible/pages/_app.js\",\n                    lineNumber: 34,\n                    columnNumber: 4\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNaO0FBQ0U7QUFDUjtBQUNLO0FBRVQ7QUFDa0I7QUFDRTtTQUV2Q00sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsS0FBSyxNQUFFQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxJQUFJO0lBRTNDQyxnREFBUyxLQUFPLENBQUM7UUFDaEJTLFVBQVUsS0FBT0QsVUFBVSxDQUFDLEtBQUs7VUFBRyxJQUFJO0lBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOztrRkFFSFAsa0RBQUk7Ozs7Ozs7O3lGQUNIUyxDQUFLOzs7Ozs7O2tDQUFDLENBQTJDOzt5RkFDakRDLENBQUk7d0JBQ0pDLElBQUksRUFBQyxDQUFVO3dCQUNmQyxPQUFPLEVBQUMsQ0FBdUM7Ozs7Ozs7Ozs7aUZBSWhEUixTQUFTO21CQUFLQyxTQUFTOzs7Ozs7OztpRkFHdkJILGlFQUFNO2dCQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7O2lGQUd2QkwsZ0VBQUs7Z0JBQUNZLGNBQWMsRUFBQyxDQUFLO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7OztBQUdoRCxDQUFDO0FBRUQsaUVBQWVYLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpYmxlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvZm9udHMvcmVtaXhpY29uLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3NcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEdvVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDIwMDApO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5HaWJsZSAtIFJlYWN0IE5leHQgTkZUIE1hcmtldHBsYWNlIFRlbXBsYXRlPC90aXRsZT5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG5cdFx0XHR7LyogUHJlbG9hZGVyICovfVxuXHRcdFx0PExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuXG5cdFx0XHR7LyogZ28gdG9wICovfVxuXHRcdFx0PEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkdvVG9wIiwiTG9hZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./public/fonts/remixicon.css":
/*!************************************!*\
  !*** ./public/fonts/remixicon.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();