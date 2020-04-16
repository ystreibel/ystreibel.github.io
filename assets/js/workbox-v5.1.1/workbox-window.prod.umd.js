!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).workbox={})}(this,(function(n){"use strict";try{self["workbox:window:5.1.1"]&&_()}catch(n){}function t(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function r(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}try{self["workbox:core:5.1.1"]&&_()}catch(n){}var e=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var o=function(n,t){this.type=n,Object.assign(this,t)};function u(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var a=function(n){var c,a;function s(t,r){var c,a;return void 0===r&&(r={}),(c=n.call(this)||this).t={},c.i=0,c.o=new e,c.u=new e,c.s=new e,c.v=0,c.h=new Set,c.l=function(){var n=c.g,t=n.installing;c.i>0||!i(t.scriptURL,c.m)||performance.now()>c.v+6e4?(c.p=t,n.removeEventListener("updatefound",c.l)):(c.P=t,c.h.add(t),c.o.resolve(t)),++c.i,t.addEventListener("statechange",c.j)},c.j=function(n){var t=c.g,r=n.target,e=r.state,i=r===c.p,u=i?"external":"",a={sw:r,originalEvent:n};!i&&c.k&&(a.isUpdate=!0),c.dispatchEvent(new o(u+e,a)),"installed"===e?c.O=self.setTimeout((function(){"installed"===e&&t.waiting===r&&c.dispatchEvent(new o(u+"waiting",a))}),200):"activating"===e&&(clearTimeout(c.O),i||c.u.resolve(r))},c._=function(n){var t=c.P;t===navigator.serviceWorker.controller&&(c.dispatchEvent(new o("controlling",{sw:t,originalEvent:n,isUpdate:c.k})),c.s.resolve(t))},c.M=(a=function(n){var t=n.data,r=n.source;return u(c.getSW(),(function(){c.h.has(r)&&c.dispatchEvent(new o("message",{data:t,sw:r,originalEvent:n}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(a.apply(this,n))}catch(n){return Promise.reject(n)}}),c.m=t,c.t=r,navigator.serviceWorker.addEventListener("message",c.M),c}a=n,(c=s).prototype=Object.create(a.prototype),c.prototype.constructor=c,c.__proto__=a;var v,h,l,w=s.prototype;return w.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return f(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.k=Boolean(navigator.serviceWorker.controller),e.R=e.S(),u(e.U(),(function(n){e.g=n,e.R&&(e.P=e.R,e.u.resolve(e.R),e.s.resolve(e.R),e.R.addEventListener("statechange",e.j,{once:!0}));var t=e.g.waiting;return t&&i(t.scriptURL,e.m)&&(e.P=t,Promise.resolve().then((function(){e.dispatchEvent(new o("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.P&&(e.o.resolve(e.P),e.h.add(e.P)),e.g.addEventListener("updatefound",e.l),navigator.serviceWorker.addEventListener("controllerchange",e._,{once:!0}),e.g}))}))}catch(n){return Promise.reject(n)}},w.update=function(){try{return this.g?f(this.g.update()):void 0}catch(n){return Promise.reject(n)}},w.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(n){return Promise.reject(n)}},w.messageSW=function(n){try{return u(this.getSW(),(function(r){return t(r,n)}))}catch(n){return Promise.reject(n)}},w.S=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.m)?n:void 0},w.U=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return u(navigator.serviceWorker.register(n.m,n.t),(function(t){return n.v=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},v=s,(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&r(v.prototype,h),l&&r(v,l),s}(function(){function n(){this.B=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.L(n).add(t)},t.removeEventListener=function(n,t){this.L(n).delete(t)},t.dispatchEvent=function(n){n.target=this;var t=this.L(n.type),r=Array.isArray(t),e=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(e>=t.length)break;i=t[e++]}else{if((e=t.next()).done)break;i=e.value}i(n)}},t.L=function(n){return this.B.has(n)||this.B.set(n,new Set),this.B.get(n)},n}());function f(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}n.Workbox=a,n.messageSW=t,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=workbox-window.prod.umd.js.map
