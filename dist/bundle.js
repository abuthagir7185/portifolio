/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("function shownav(page) {\n  document.getElementById('Home-content').style.display = page === 'Home' ? 'flex' : 'none';\n  document.getElementById('About-content').style.display = page === 'About' ? 'inline' : 'none';\n  document.getElementById('Skill-content').style.display = page === 'Skill' ? 'inline' : 'none';\n  document.getElementById('Contact-content').style.display = page === 'Contact' ? 'inline' : 'none';\n}\nfunction showskill(talent) {\n  document.getElementById('skill1').style.display = talent === 'web' ? 'grid' : 'none';\n  document.getElementById('skill2').style.display = talent === 'Video' ? 'grid' : 'none';\n  document.getElementById('skill3').style.display = talent === 'Logo' ? 'grid' : 'none';\n}\nfunction contacts(cards) {\n  document.getElementById('contact-card').style.display = cards === 'cardtype' ? 'flex' : 'none';\n  document.getElementById('socialcontacts').style.display = cards === 'socialmedia' ? 'flex' : 'none';\n}\nfunction Alert() {\n  setTimeout(function () {\n    alert(\"Tap my skills\");\n  }, 2500);\n}\n\n//# sourceURL=webpack://abuthagir-portifolio/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;