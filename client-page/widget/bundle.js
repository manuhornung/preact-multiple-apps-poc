!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="pwNi")}({BMrJ:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=_[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(a(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(a(r.parts[i],t));_[r.id]={id:r.id,refs:1,parts:u}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=i[1],c=i[2],s=i[3],a={css:l,media:c,sourceMap:s};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function l(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),i(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function a(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=m++;n=y||(y=l(t)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=d.bind(null,n,t),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=p.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=g(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(u),l&&URL.revokeObjectURL(l)}var _={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),y=null,m=0,b=[],g=n("DRTY");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],u=0;u<n.length;u++){var l=n[u],c=_[l.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var u=0;u<i.length;u++){var c=i[u];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete _[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},BtxX:function(e){!function(t){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],a(e,this)}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:l)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}u(t.promise,r)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void a(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){l(e,t)}}function l(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function a(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}var f=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new s(e,t,r)),r},o.all=function(e){return new o(function(t,n){function r(e,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var l=u.then;if("function"==typeof l)return void l.call(u,function(t){r(e,t)},n)}o[e]=u,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,u=0;u<o.length;u++)r(u,o[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=o:t.Promise||(t.Promise=o)}(this)},DRTY:function(e){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},DUrW:function(e,t,n){t=e.exports=n("lcwS")(!0),t.push([e.i,"body,html{font:14px/1.21 Helvetica Neue,arial,sans-serif;font-weight:400}h1{text-align:center}.overlay__1FFzO{position:fixed;background:#d3d3d3;top:50%;margin:auto}","",{version:3,sources:["/home/manuel/Repositories/preact-multiple-apps-poc/src/components/hello-world/style.scss"],names:[],mappings:"AAAA,UACC,+CACA,eAAgB,CAChB,GAGA,iBAAkB,CAClB,gBAGA,eACA,mBACA,QACA,WAAY,CACZ",file:"style.scss",sourcesContent:["html, body {\n\tfont: 14px/1.21 'Helvetica Neue', arial, sans-serif;\n\tfont-weight: 400;\n}\n\nh1 {\n\ttext-align: center;\n}\n\n.overlay {\n\tposition: fixed;\n\tbackground: lightgray;\n\ttop: 50%;\n\tmargin: auto;\n}\n"],sourceRoot:""}]),t.locals={overlay:"overlay__1FFzO"}},JkW7:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("KM04"),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},c=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},s=function(e,t){void 0===t&&(t={});var n=e.attributes,r=u({},t);return Object.keys(n).forEach(function(e){if(n.hasOwnProperty(e)){var t=n[e].name;if(!t||"string"!=typeof t)return!1;var o=t.split(/(data-props?-)/).pop()||"";if(o=l(o),t!==o){r[o]=n[e].nodeValue}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type")&&"application/json"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}u(r,t)}}),r},a=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}}),n},f=function(e){var t=e.selector,n=e.inline,r=e.clientSpecified,o=[],i=c();if(!0===n){o.push(i.parentNode)}return!0!==r||t||(t=a(i)),t&&[].forEach.call(document.querySelectorAll(t),function(e){o.push(e)}),o},p=function(e,t,n,r,o){t.forEach(function(t){var u=t;if(!u._habitat){u._habitat=!0;var l=s(t,o)||o;return r&&(u.innerHTML=""),Object(i.render)(Object(i.h)(e,l),u,n)}})},d=function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var r=e.inline;void 0===r&&(r=!1);var o=e.clean;void 0===o&&(o=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var u=e.defaultProps;void 0===u&&(u={});var l=f({selector:n,inline:r,clientSpecified:i}),c=function(){if(l.length>0){var e=f({selector:n,inline:r,clientSpecified:i});return p(t,e,null,o,u)}};c(),document.addEventListener("DOMContentLoaded",c),document.addEventListener("load",c)}}},_=d,h=n("fSYV"),v=n.n(h),y=function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(e){return Object(i.h)("div",{className:v.a.overlay},Object(i.h)("h1",{style:{color:e.color}},"I am an overlay rendered in a completely separate preact app"))},t}(i.Component);n("m+Gh");_(y).render({selector:'[data-widget-host="habitat"]',clean:!0})},KM04:function(e,t){function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function o(e,t,n){var r,o=arguments,u={};for(r in t)"key"!==r&&"ref"!==r&&(u[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return i(e,u,t&&t.key,t&&t.ref)}function i(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return A.vnode&&A.vnode(o),o}function u(e){return e.children}function l(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function a(e){(!e.__d&&(e.__d=!0)&&1===S.push(e)||U!==A.debounceRendering)&&((U=A.debounceRendering)||O)(f)}function f(){var e,t,r,o,i,u,l;for(S.sort(function(e,t){return t.__v.__b-e.__v.__b});e=S.pop();)e.__d&&(r=void 0,o=void 0,u=(i=(t=e).__v).__e,(l=t.__P)&&(r=[],o=m(l,i,n({},i),t.__n,void 0!==l.ownerSVGElement,null,r,null==u?c(i):u),b(r,i),o!=u&&s(i)))}function p(e,t,n,o,i,u,l,s,a){var f,p,_,h,v,y,b,g=n&&n.__k||T,k=g.length;if(s==R&&(s=null!=u?u[0]:k?c(n,0):null),f=0,t.__k=d(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(_=g[f])||_&&n.key==_.key&&n.type===_.type)g[f]=void 0;else for(p=0;p<k;p++){if((_=g[p])&&n.key==_.key&&n.type===_.type){g[p]=void 0;break}_=null}if(h=m(e,n,_=_||R,o,i,u,l,s,a),(p=n.ref)&&_.ref!=p&&(b||(b=[]),_.ref&&b.push(_.ref,null,n),b.push(p,n.__c||h,n)),null!=h){if(null==y&&(y=h),null!=n.__d)h=n.__d,n.__d=null;else if(u==_||h!=s||null==h.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(h);else{for(v=s,p=0;(v=v.nextSibling)&&p<k;p+=2)if(v==h)break e;e.insertBefore(h,s)}"option"==t.type&&(e.value="")}s=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return f++,n}),t.__e=y,null!=u&&"function"!=typeof t.type)for(f=u.length;f--;)null!=u[f]&&r(u[f]);for(f=k;f--;)null!=g[f]&&x(g[f],g[f]);if(b)for(f=0;f<b.length;f++)w(b[f],b[++f],b[++f])}function d(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)d(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?i(null,e,null,null):null!=e.__e||null!=e.__c?i(e.type,e.props,e.key,null):e):e);return n}function _(e,t,n,r,o){var i;for(i in n)i in t||v(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||v(e,i,t[i],n[i],r)}function h(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===L.test(t)?n+"px":null==n?"":n}function v(e,t,n,r,o){var i,u,l,c,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||h(i,u,"");if(n)for(l in n)r&&n[l]===r[l]||h(i,l,n[l])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(r||e.addEventListener(t,y,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,y,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){this.l[e.type](A.event?A.event(e):e)}function m(e,t,r,o,i,c,s,a,f){var _,h,v,y,m,b,w,x,C,j,S=t.type;if(void 0!==t.constructor)return null;(_=A.__b)&&_(t);try{e:if("function"==typeof S){if(x=t.props,C=(_=S.contextType)&&o[_.__c],j=_?C?C.props.value:_.__:o,r.__c?w=(h=t.__c=r.__c).__=h.__E:("prototype"in S&&S.prototype.render?t.__c=h=new S(x,j):(t.__c=h=new l(x,j),h.constructor=S,h.render=k),C&&C.sub(h),h.props=x,h.state||(h.state={}),h.context=j,h.__n=o,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=S.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=n({},h.__s)),n(h.__s,S.getDerivedStateFromProps(x,h.__s))),y=h.props,m=h.state,v)null==S.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==S.getDerivedStateFromProps&&x!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(x,j),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(x,h.__s,j)){for(h.props=x,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=r.__e,t.__k=r.__k,h.__h.length&&s.push(h),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(x,h.__s,j),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,m,b)})}h.context=j,h.props=x,h.state=h.__s,(_=A.__r)&&_(t),h.__d=!1,h.__v=t,h.__P=e,_=h.render(h.props,h.state,h.context),t.__k=d(null!=_&&_.type==u&&null==_.key?_.props.children:_),null!=h.getChildContext&&(o=n(n({},o),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(b=h.getSnapshotBeforeUpdate(y,m)),p(e,t,r,o,i,c,s,a,f),h.base=t.__e,h.__h.length&&s.push(h),w&&(h.__E=h.__=null),h.__e=null}else t.__e=g(r.__e,t,r,o,i,c,s,f);(_=A.diffed)&&_(t)}catch(e){A.__e(e,t,r)}return t.__e}function b(e,t){A.__c&&A.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){A.__e(e,t.__v)}})}function g(e,t,n,r,o,i,u,l){var c,s,a,f,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(c=0;c<i.length;c++)if(null!=(s=i[c])&&(null===t.type?3===s.nodeType:s.localName===t.type)){e=s,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}if(null===t.type)null!=i&&(i[i.indexOf(e)]=null),h!==v&&(e.data=v);else if(t!==n){if(null!=i&&(i=T.slice.call(e.childNodes)),a=(h=n.props||R).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!l){if(h===R)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||a)&&(f&&a&&f.__html==a.__html||(e.innerHTML=f&&f.__html||""))}_(e,v,h,o,l),t.__k=t.props.children,f||p(e,t,n,r,"foreignObject"!==t.type&&o,i,u,R,l),l||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){A.__e(e,n)}}function x(e,t,n){var o,i,u;if(A.unmount&&A.unmount(e),(o=e.ref)&&w(o,null,t),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){A.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&x(o[u],t,n);null!=i&&r(i)}function k(e,t,n){return this.constructor(e,n)}function C(e,t,n){var r,i,l;A.__&&A.__(e,t),i=(r=n===E)?null:n&&n.__k||t.__k,e=o(u,null,[e]),l=[],m(t,(r?t:n||t).__k=e,i||R,R,void 0!==t.ownerSVGElement,n&&!r?[n]:i?null:T.slice.call(t.childNodes),l,n||R,r),b(l,e)}var A,j,S,O,U,E,P,R={},T=[],L=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;A={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return a(n.__E=n)}catch(t){e=t}throw e}},j=function(e){return null!=e&&void 0===e.constructor},l.prototype.setState=function(e,t){var r;r=this.__s!==this.state?this.__s:this.__s=n({},this.state),"function"==typeof e&&(e=e(r,this.props)),e&&n(r,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),a(this))},l.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},l.prototype.render=u,S=[],O="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E=R,P=0,t.render=C,t.hydrate=function(e,t){C(e,t,E)},t.createElement=o,t.h=o,t.Fragment=u,t.createRef=function(){return{}},t.isValidElement=j,t.Component=l,t.cloneElement=function(e,t){return t=n(n({},e.props),t),arguments.length>2&&(t.children=T.slice.call(arguments,2)),i(e.type,t,t.key||e.key,t.ref||e.ref)},t.createContext=function(e){var t={},n={__c:"__cC"+P++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some(function(e){e.context=t.value,a(e)})},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n},t.toChildArray=d,t._e=x,t.options=A},QAmr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function o(){var e,t=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,i,u){t.push(i=i.toLowerCase()),n.push([i,u]),e=r[i],r[i]=e?e+","+u:u}),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e,!0);for(var u in t.headers)i.setRequestHeader(u,t.headers[u]);i.withCredentials="include"==t.credentials,i.onload=function(){n(o())},i.onerror=r,i.send(t.body||null)})}},VS7n:function(e,t,n){e.exports=window.fetch||(window.fetch=n("QAmr").default||n("QAmr"))},fSYV:function(e,t,n){var r=n("DUrW");"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n("BMrJ")(r,o);r.locals&&(e.exports=r.locals)},h6ac:function(e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},lcwS:function(e){function t(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="("+u[2]+") and ("+t+")"),n.push(u))}},n}},"m+Gh":function(e,t,n){"use strict";(function(e){e.Promise||(e.Promise=n("BtxX")),e.fetch||(e.fetch=n("VS7n"))}).call(t,n("h6ac"))},pwNi:function(e,t,n){"use strict";var r=n("KM04"),o=function(e){return e&&e.default?e.default:e};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var e=o(n("JkW7"));i=(0,r.render)((0,r.h)(e),document.body,i)};u()}}})});
//# sourceMappingURL=bundle.js.map