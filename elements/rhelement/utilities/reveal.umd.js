!function(e,n){if("function"==typeof define&&define.amd)define(["exports"],n);else if("undefined"!=typeof exports)n(exports);else{var o={};n(o),e.reveal=o}}(this,function(e){"use strict";function n(){console.log("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}function o(){console.log("[reveal] web components ready"),n()}Object.defineProperty(e,"__esModule",{value:!0}),e.reveal=n,e.autoReveal=function(){window.WebComponents.ready?o():window.addEventListener("WebComponentsReady",o)}});