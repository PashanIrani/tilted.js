!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(2);e.n(r)},function(t,n,e){var r=e(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;e(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){n=t.exports=e(4)(void 0),n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),n.push([t.i,"@font-face {\n  font-family: mainLogoFont;\n  src: url("+e(5)+");\n}\n\nbody,\nhtml {\n  background-color: #d45a5b;\n}\n\n#header {\n  width: 50vw;\n  font-family: mainLogoFont;\n  margin: 40vh auto auto;\n  font-size: 50px;\n  text-align: center;\n  padding: 50px;\n  background-color: rgba(255, 255, 255, 0.28);\n}\n\n#header a {\n  font-family: 'Roboto', sans-serif;\n}\n\n#header a > i {\n  transition: all .2s;\n}\n\n#header a > i:hover {\n  font-size: 60px;\n}\n\na.nostyle {\n  cursor: pointer;\n}\n\na.nostyle:link {\n  text-decoration: inherit;\n  color: inherit;\n}\n\na.nostyle:visited {\n  text-decoration: inherit;\n  color: inherit;\n}\n\n.spacer {\n  background-color: blue;\n  opacity: 0.2;\n  height: 100px;\n}",""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){t.exports=e.p+"dist/fonts/Luna.ttf"},function(t,n,e){function r(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],n));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s=i[1],u=i[2],c=i[3],f={css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):e.push(r[a]={id:a,parts:[f]})}return e}function i(t,n){var e=b(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),g.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=g.indexOf(t);n>=0&&g.splice(n,1)}function s(t){var n=document.createElement("style");return t.attrs.type="text/css",c(n,t.attrs),i(t,n),n}function u(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(n,t.attrs),i(t,n),n}function c(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function f(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var c=y++;e=m||(m=s(n)),r=l.bind(null,e,c,!1),o=l.bind(null,e,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=u(n),r=d.bind(null,e,n),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(n),r=p.bind(null,e),o=function(){a(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}function l(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),m=null,y=0,g=[],x=e(7);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=v()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=o(t,n);return r(e,n),function(t){for(var i=[],a=0;a<e.length;a++){var s=e[a],u=h[s.id];u.refs--,i.push(u)}if(t){r(o(t,n),n)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var w=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);