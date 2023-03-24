!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LeanUpLib={})}(this,(function(e){"use strict";class t extends HTMLElement{constructor(){super(),this.dom=this}render(){}connectedCallback(){this.render()}}class o{constructor(){this.services=new Map,this.lazyLoaders=new Set}register(e,t,o={lazy:!1}){if("string"==typeof e&&!1===this.services.has(e))return this.services.set(e,t),!0===(null==o?void 0:o.lazy)&&this.lazyLoaders.add(e),this;throw new Error(`The service '${e}' is allready registered!`)}get(e){if(this.lazyLoaders.has(e)&&(this.services.set(e,this.services.get(e)()),this.lazyLoaders.delete(e)),"string"==typeof e&&!0===this.services.has(e))return this.services.get(e);throw new Error(`The service '${e}' is not registered!`)}}const i=new o;var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s={exports:{}};!function(e){var t,o;t=r,o=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"];function r(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function n(i){return"debug"===i&&(i="log"),typeof console!==t&&("trace"===i&&o?s:void 0!==console[i]?r(console,i):void 0!==console.log?r(console,"log"):e)}function l(t,o){for(var r=0;r<i.length;r++){var s=i[r];this[s]=r<t?e:this.methodFactory(s,t,o)}this.log=this.debug}function a(e,o,i){return function(){typeof console!==t&&(l.call(this,o,i),this[e].apply(this,arguments))}}function c(e,t,o){return n(e)||a.apply(this,arguments)}function d(e,o,r){var s,n=this;o=null==o?"WARN":o;var a="loglevel";function d(){var e;if(typeof window!==t&&a){try{e=window.localStorage[a]}catch(e){}if(typeof e===t)try{var o=window.document.cookie,i=o.indexOf(encodeURIComponent(a)+"=");-1!==i&&(e=/^([^;]+)/.exec(o.slice(i))[1])}catch(e){}return void 0===n.levels[e]&&(e=void 0),e}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),n.name=e,n.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},n.methodFactory=r||c,n.getLevel=function(){return s},n.setLevel=function(o,r){if("string"==typeof o&&void 0!==n.levels[o.toUpperCase()]&&(o=n.levels[o.toUpperCase()]),!("number"==typeof o&&o>=0&&o<=n.levels.SILENT))throw"log.setLevel() called with invalid level: "+o;if(s=o,!1!==r&&function(e){var o=(i[e]||"silent").toUpperCase();if(typeof window!==t&&a){try{return void(window.localStorage[a]=o)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+o+";"}catch(e){}}}(o),l.call(n,o,e),typeof console===t&&o<n.levels.SILENT)return"No console available for logging"},n.setDefaultLevel=function(e){o=e,d()||n.setLevel(e,!1)},n.resetLevel=function(){n.setLevel(o,!1),function(){if(typeof window!==t&&a){try{return void window.localStorage.removeItem(a)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},n.enableAll=function(e){n.setLevel(n.levels.TRACE,e)},n.disableAll=function(e){n.setLevel(n.levels.SILENT,e)};var h=d();null==h&&(h=o),n.setLevel(h,!1)}var h=new d,u={};h.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=u[e];return t||(t=u[e]=new d(e,h.getLevel(),h.methodFactory)),t};var f=typeof window!==t?window.log:void 0;return h.noConflict=function(){return typeof window!==t&&window.log===h&&(window.log=f),h},h.getLoggers=function(){return u},h.default=h,h},e.exports?e.exports=o():t.log=o()}(s);const n=[];class l{constructor(e,t={}){this.shield=[`%c${e}`,"string"==typeof t.shieldStyle&&t.shieldStyle.length>0?t.shieldStyle:"color: white; background: #666; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 3px; border: 1px solid #000"]}static getInstance(e,t={}){if("string"==typeof e&&e.length>0)return!1===l.instances.has(e)&&l.instances.set(e,new l(e)),l.instances.get(e);throw new Error("The identifier of the Logger must be a string with a min length of 1.")}log(e,t){switch("object"==typeof t.refObject&&null!==t.refObject&&"function"==typeof t.refObject.constructor&&"string"==typeof t.refObject.constructor.name&&(t.className=`[${t.refObject.constructor.name}]:`),n.push({date:(new Date).toUTCString(),level:e,message:t}),e){case"trace":s.exports.trace(...this.shield,t);break;case"debug":s.exports.debug(...this.shield,t);break;case"info":s.exports.info(...this.shield,t);break;case"warn":s.exports.warn(...this.shield,t);break;default:if(s.exports.error(...this.shield,t),"error"===e)throw new Error("↑ Execution in development mode was canceled. See the error log above.")}}trace(e,t){return this.log("trace",{messageText:e,refObject:t}),this}debug(e,t){return this.log("debug",{messageText:e,refObject:t}),this}info(e,t){return this.log("info",{messageText:e,refObject:t}),this}warn(e,t){return this.log("warn",{messageText:e,refObject:t}),this}error(e,t){return this.log("error",{messageText:e,refObject:t}),this}static get cache(){return[].concat(n)}}l.instances=new Map,s.exports.setDefaultLevel("trace");const a=l.getInstance("leanup");function c(e){return e instanceof d?e.get():Array.isArray(e)?e:[e]}class d{constructor(e){this.items=new Set,this.protectedItems=new Set,this.instancesOf=Array.isArray(e)?e:[e]}get empty(){return 0===this.items.size}get first(){return this.items.size>0?Array.from(this.items)[0]:null}forEach(e){this.items.forEach(e)}filter(e){return Array.from(this.items).filter(e)}find(e){return Array.from(this.items).find(e)}get last(){return this.items.size>0?Array.from(this.items)[this.items.size-1]:null}get length(){return a.debug("The attribute ListOf.length is deprecated - please use ListOf.size instead."),this.size}get size(){return this.items.size}add(e,t=!1){return c(e).filter((e=>{let o=!1;return!1===this.has(e)?!function(e,t){return!!Array.isArray(e)&&void 0!==e.find((e=>t instanceof e))}(this.instancesOf,e)?a.debug("The item does not have a valid instance type.",this):(t&&this.protectedItems.add(e),this.items.add(e),o=!0):a.debug("The item is already in the list.",this),o})).length>0}remove(e){return a.debug("The method ListOf.remove() is deprecated - please use ListOf.delete() instead."),this.delete(e)}delete(e){return c(e).filter((e=>{let t=!1;return!1===this.protectedItems.has(e)?this.items.has(e)?(this.items.delete(e),t=!0):a.debug("The item is not in the list.",this):a.debug("The item is protected and cannot be removed.",this),t})).length>0}set(e,t=!1){const o=this.clear(),i=this.add(e,t);return o||i}get(e){return!1===isNaN(e)&&"number"==typeof e?Array.from(this.items).slice(0,e):Array.from(this.items)}clear(){const e=this.items.size;return this.items.forEach((e=>{!1===this.protectedItems.has(e)&&this.items.delete(e)})),e!==this.items.size}contains(e){return a.debug("The method ListOf.contains() is deprecated - please use ListOf.has() instead."),this.items.has(e)}has(e){return this.items.has(e)}}const h=new Intl.NumberFormat("de-DE",{currency:"EUR",maximumFractionDigits:2,minimumFractionDigits:2});const u=new Intl.DateTimeFormat("de-DE");e.AbstractController=class{constructor(e){this.couple=e}doDistroy(){var e,t,o,i;"function"==typeof(null===(t=null===(e=this.couple)||void 0===e?void 0:e.hooks)||void 0===t?void 0:t.doDistroy)&&(null===(i=null===(o=this.couple)||void 0===o?void 0:o.hooks)||void 0===i||i.doDistroy())}doRender(){var e,t;"function"==typeof(null===(t=null===(e=this.couple)||void 0===e?void 0:e.hooks)||void 0===t?void 0:t.doRender)&&(clearTimeout(this.doRenderTimeout),this.doRenderTimeout=setTimeout((()=>{var e,t;null===(t=null===(e=this.couple)||void 0===e?void 0:e.hooks)||void 0===t||t.doRender()}),50))}},e.ArchController=()=>()=>{},e.ArchModel=()=>()=>{},e.ArchService=()=>()=>{},e.ArchView=()=>()=>{},e.DI=i,e.Injector=o,e.Log=a,e.Logger=l,e.SetOf=d,e.VanillaComponent=t,e.currency=function(e){return!1===isNaN(e)&&"number"==typeof e?h.format(e):""},e.date=function(e){return e instanceof Date?u.format(e):""},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map