!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=44)}([,,function(e,t,r){"use strict";var n=r(10),o=r(19),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},,function(e,t,r){e.exports=r(18)},function(e,t,r){var n;!function(r,o){void 0===(n=function(){return r.jsonToFormData=function(){function e(e){return"[object Array]"==={}.toString.call(e)}function t(t){return!e(t)&&"object"==typeof t&&!!t}return function r(n,o,i){var s=i||new FormData,a=0;for(var u in n){if(n.hasOwnProperty(u)&&null!==n[u]&&void 0!==n[u]){var c=o||u;if(o&&t(n)&&(c=o+"["+u+"]"),o&&e(n)&&(c=o+"["+a+"]"),n[u]instanceof File)s.append(c,n[u]);else if(n[u]instanceof FileList)for(var l=0;l<n[u].length;l++)s.append(c+"["+l+"]",n[u].item(l));else e(n[u])||t(n[u])?r(n[u],c,s):"boolean"==typeof n[u]?s.append(c,+n[u]?"1":"0"):s.append(c,n[u])}a++}return s}}()}.apply(t,[]))||(e.exports=n)}(this)},function(e,t,r){(function(r){var n,o;void 0===(o="function"==typeof(n=function(e){"use strict";if(void 0===window.browser){const t=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},export:{minArgs:0,maxArgs:0},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},getSubTree:{minArgs:1,maxArgs:1},import:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},setIcon:{minArgs:1,maxArgs:1}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{update:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{download:{minArgs:1,maxArgs:1},cancel:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:0,maxArgs:0},setIcon:{minArgs:1,maxArgs:1},show:{minArgs:0,maxArgs:0}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{create:{minArgs:1,maxArgs:1},captureVisibleTab:{minArgs:0,maxArgs:2},detectLanguage:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},query:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");const t=(e,t,r)=>new Proxy(t,{apply:(t,n,o)=>r.call(n,e,...o)});let r=Function.call.bind(Object.prototype.hasOwnProperty);const n=(e,o={},i={})=>{let s=Object.create(null),a={has:(e,t)=>t in e||t in s,get(e,a,u){if(a in s)return s[a];if(!(a in e))return;let c=e[a];if("function"==typeof c)if("function"==typeof o[a])c=t(e,e[a],o[a]);else if(r(i,a)){let r=((e,t)=>{const r=e=>1==e?"argument":"arguments";return function(n,...o){if(o.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${r(t.minArgs)} for ${e}(), got ${o.length}`);if(o.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${r(t.maxArgs)} for ${e}(), got ${o.length}`);return new Promise((r,i)=>{n[e](...o,((e,t)=>(...r)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):t.singleCallbackArg||1===r.length?e.resolve(r[0]):e.resolve(r)})({resolve:r,reject:i},t))})}})(a,i[a]);c=t(e,e[a],r)}else c=c.bind(e);else{if("object"!=typeof c||null===c||!r(o,a)&&!r(i,a))return Object.defineProperty(s,a,{configurable:!0,enumerable:!0,get:()=>e[a],set(t){e[a]=t}}),c;c=n(c,o[a],i[a])}return s[a]=c,c},set:(e,t,r,n)=>(t in s?s[t]=r:e[t]=r,!0),defineProperty:(e,t,r)=>Reflect.defineProperty(s,t,r),deleteProperty:(e,t)=>Reflect.deleteProperty(s,t)};return new Proxy(e,a)},o={runtime:{onMessage:(e=>({addListener(t,r,...n){t.addListener(e.get(r),...n)},hasListener:(t,r)=>t.hasListener(e.get(r)),removeListener(t,r){t.removeListener(e.get(r))}}))(new class extends WeakMap{constructor(e,t){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}(e=>"function"!=typeof e?e:function(t,r,n){let o=e(t,r);if((e=>e&&"object"==typeof e&&"function"==typeof e.then)(o))return o.then(n,e=>{console.error(e),n(e)}),!0;void 0!==o&&n(o)}))}},i=Object.assign({},chrome);return n(i,o,e)};e.exports=t()}else e.exports=r})?n.apply(t,[e]):n)||(e.exports=o)}).call(this,r(6))},function(e,t,r){"use strict";var n=r(37),o=r(38),i=r(16);e.exports={formats:i,parse:o,stringify:n}},,function(e,t,r){"use strict";(function(t){var n=r(2),o=r(22),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(11):void 0!==t&&(e=r(11)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(i)}),e.exports=a}).call(this,r(21))},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(2),o=r(23),i=r(25),s=r(26),a=r(27),u=r(12),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(28);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var g=new XMLHttpRequest,m="onreadystatechange",d=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in g||a(e.url)||(g=new window.XDomainRequest,m="onload",d=!0,g.onprogress=function(){},g.ontimeout=function(){}),e.auth){var h=e.auth.username||"",A=e.auth.password||"";p.Authorization="Basic "+c(h+":"+A)}if(g.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,g[m]=function(){if(g&&(4===g.readyState||d)&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in g?s(g.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?g.response:g.responseText,status:1223===g.status?204:g.status,statusText:1223===g.status?"No Content":g.statusText,headers:r,config:e,request:g};o(t,l,n),g=null}},g.onerror=function(){l(u("Network Error",e,null,g)),g=null},g.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var y=r(29),x=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;x&&(p[e.xsrfHeaderName]=x)}if("setRequestHeader"in g&&n.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:g.setRequestHeader(t,e)}),e.withCredentials&&(g.withCredentials=!0),e.responseType)try{g.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){g&&(g.abort(),l(e),g=null)}),void 0===f&&(f=null),g.send(f)})}},function(e,t,r){"use strict";var n=r(24);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],s=Object.keys(i),a=0;a<s.length;++a){var u=s[a],c=i[u];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:u}),r.push(c))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var s=t;return Array.isArray(t)&&!Array.isArray(r)&&(s=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e(t[i],r,o):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var s=r[i];return n.call(t,i)?t[i]=e(t[i],s,o):t[i]=s,t},s)}}},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"ToBytes",function(){return c}),r.d(t,"ToSpeed",function(){return l}),r.d(t,"GetBrowser",function(){return f}),r.d(t,"makeRPCall",function(){return p}),r.d(t,"toFormData",function(){return g}),r.d(t,"toQueryString",function(){return m});var n=r(7),o=r.n(n),i=r(5),s=r.n(i),a=r(4),u=r.n(a);function c(e,t){if(0==e)return"0 B";var r=t||2,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function l(e,t){if(0==e)return"0 B/s";var r=t||2,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["B/s","KB/s","MB/s","GB/s","TB/s","PB/s","EB/s","ZB/s","YB/s"][n]}function f(){return"undefined"!=typeof chrome?void 0!==e?"Firefox":"Chrome":"Edge"}async function p(e){var t={url:localStorage.getItem("url")+"/plugins/httprpc/action.php"||"",method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},auth:{username:localStorage.getItem("username")||"",password:localStorage.getItem("password")||""},data:o.a.stringify(e)},r=null;try{r=(await u()(t)).data}catch(e){return void("Network Error"==e.message?this.throwError("Invalid URL"):401==e.response.status?this.throwError("Invalid username or password"):200==e.response.status&&void 0!=e.response||this.throwError("An unknown error occurred "))}return r}function g(e){return s()(e)}function m(e){return e.stringify(e)}}.call(this,r(6))},function(e,t,r){"use strict";var n=r(2),o=r(10),i=r(20),s=r(9);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(s);u.Axios=i,u.create=function(e){return a(n.merge(s,e))},u.Cancel=r(14),u.CancelToken=r(35),u.isCancel=r(13),u.all=function(e){return Promise.all(e)},u.spread=r(36),e.exports=u,e.exports.default=u},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=r(9),o=r(2),i=r(30),s=r(31);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=a},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&g())}function g(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||a(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(12);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(2);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},function(e,t,r){"use strict";var n=r(2);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,o=String(e),i="",s=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.charAt(0|s)||(a="=",s%1);i+=a.charAt(63&t>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return i}},function(e,t,r){"use strict";var n=r(2);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(2);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(2),o=r(32),i=r(13),s=r(9),a=r(33),u=r(34);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(14);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n=r(15),o=r(16),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(t,r,o,i,s,u,c,l,f,p,g,m){var d=t;if("function"==typeof c)d=c(r,d);else if(d instanceof Date)d=p(d);else if(null===d){if(i)return u&&!m?u(r,a.encoder):r;d=""}if("string"==typeof d||"number"==typeof d||"boolean"==typeof d||n.isBuffer(d))return u?[g(m?r:u(r,a.encoder))+"="+g(u(d,a.encoder))]:[g(r)+"="+g(String(d))];var h,A=[];if(void 0===d)return A;if(Array.isArray(c))h=c;else{var y=Object.keys(d);h=l?y.sort(l):y}for(var x=0;x<h.length;++x){var v=h[x];s&&null===d[v]||(A=Array.isArray(d)?A.concat(e(d[v],o(r,v),o,i,s,u,c,l,f,p,g,m)):A.concat(e(d[v],r+(f?"."+v:"["+v+"]"),o,i,s,u,c,l,f,p,g,m)))}return A};e.exports=function(e,t){var r=e,s=t?n.assign({},t):{};if(null!==s.encoder&&void 0!==s.encoder&&"function"!=typeof s.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===s.delimiter?a.delimiter:s.delimiter,l="boolean"==typeof s.strictNullHandling?s.strictNullHandling:a.strictNullHandling,f="boolean"==typeof s.skipNulls?s.skipNulls:a.skipNulls,p="boolean"==typeof s.encode?s.encode:a.encode,g="function"==typeof s.encoder?s.encoder:a.encoder,m="function"==typeof s.sort?s.sort:null,d=void 0!==s.allowDots&&s.allowDots,h="function"==typeof s.serializeDate?s.serializeDate:a.serializeDate,A="boolean"==typeof s.encodeValuesOnly?s.encodeValuesOnly:a.encodeValuesOnly;if(void 0===s.format)s.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,s.format))throw new TypeError("Unknown format option provided.");var y,x,v=o.formatters[s.format];"function"==typeof s.filter?r=(x=s.filter)("",r):Array.isArray(s.filter)&&(y=x=s.filter);var w,b=[];if("object"!=typeof r||null===r)return"";w=s.arrayFormat in i?s.arrayFormat:"indices"in s?s.indices?"indices":"repeat":"indices";var j=i[w];y||(y=Object.keys(r)),m&&y.sort(m);for(var O=0;O<y.length;++O){var T=y[O];f&&null===r[T]||(b=b.concat(u(r[T],T,j,l,f,p?g:null,x,m,d,h,v,A)))}var S=b.join(c),E=!0===s.addQueryPrefix?"?":"";return S.length>0?E+S:""}},function(e,t,r){"use strict";var n=r(15),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,s=/(\[[^[\]]*])/.exec(n),a=s?n.slice(0,s.index):n,u=[];if(a){if(!r.plainObjects&&o.call(Object.prototype,a)&&!r.allowPrototypes)return;u.push(a)}for(var c=0;null!==(s=i.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+n.slice(s.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,s=e[o];if("[]"===s)i=(i=[]).concat(n);else{i=r.plainObjects?Object.create(null):{};var a="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(a,10);!isNaN(u)&&s!==a&&String(u)===a&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[a]=n}n=i}return n}(u,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,a=n.split(t.delimiter,s),u=0;u<a.length;++u){var c,l,f=a[u],p=f.indexOf("]="),g=-1===p?f.indexOf("="):p+1;-1===g?(c=t.decoder(f,i.decoder),l=t.strictNullHandling?null:""):(c=t.decoder(f.slice(0,g),i.decoder),l=t.decoder(f.slice(g+1),i.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(l):r[c]=l}return r}(e,r):e,u=r.plainObjects?Object.create(null):{},c=Object.keys(a),l=0;l<c.length;++l){var f=c[l],p=s(f,a[f],r);u=n.merge(u,p,r)}return n.compact(u)}},function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"ruTorrentRemote",function(){return l});var n=r(4),o=r.n(n),i=r(7),s=r.n(i),a=r(5),u=r.n(a),c=r(17);class l{constructor(e){let t=e.username,r=e.password,n=e.url;t&&r&&n&&(this.cid=0,this.data=[],this.url=n.replace(/\/$/),this.config={auth:{username:t,password:r}})}async AddTorrent(t){let r=t.url,n=t.path,i=t.label;if(r.startsWith("magnet")){var s={dir_edit:n||"",tadd_label:i||"",url:r};return 200==(await o.a.post(this.url+"/php/addtorrent.php",u()(s),this.config)).status}if(r.startsWith("http")){let t=await o.a.get(r,{responseType:"blob"});return"application/x-bittorrent"!=t.data.type?void e.notifications.create("",{type:"basic",title:"ruTorrent Remote",iconUrl:"images/icon-128.png",message:"Link is not a torrent or magnet"}):(s={dir_edit:n||"",tadd_label:i||"",torrent_file:new File([t.data],Date.now().toString())},200==(await o.a.post(this.url+"/php/addtorrent.php",u()(s),this.config)).status)}throw new Error("Unknown URL resource")}async GetTorrents(){let e=await o.a.post(this.url+"/plugins/httprpc/action.php",s.a.stringify({mode:"list",cmd:"d.custom=addtime"}),this.config);if(e.status,e.data.cid==this.cid)return this.data;for(var t in this.data=[],e.data.t){var r=e.data.t[t],n={name:r[4],status:"Unknown",size:c.ToBytes(r[5]),done:+(r[8]/r[5]*100).toFixed(2),downloaded:c.ToBytes(+r[8]),uploaded:c.ToBytes(+r[9]),ratio:+(r[10]/1e3).toFixed(3),ul:c.ToSpeed(+r[11]),dl:c.ToSpeed(+r[12]),added:r[34]};n.done>0&&(n.status="Downloading"),100==n.done&&(n.status="Seeding"),0==n.done&&(n.status="Started"),n.done=n.done+"%",this.data.push(n)}return this.data}}}.call(this,r(6))},,,,,function(e,t,r){"use strict";r.r(t),function(e){r(4);let t=new(r(39).ruTorrentRemote)({username:localStorage.getItem("username"),password:localStorage.getItem("password"),url:localStorage.getItem("url")});e.contextMenus.create({id:"upload-to-rutorrent",title:"Upload to ruTorrent",contexts:["link"]}),e.contextMenus.create({id:"options-page",title:"Options Page",contexts:["browser_action"]}),e.contextMenus.onClicked.addListener(async(r,n)=>{if("upload-to-rutorrent"===r.menuItemId){var o=await t.AddTorrent({url:r.linkUrl});e.notifications.create("",{type:"basic",title:"ruTorrent Remote",iconUrl:"images/icon-128.png",message:o?"Torrent has been uploaded":"Torrent failed to upload"})}else"options-page"===r.menuItemId&&e.runtime.openOptionsPage()})}.call(this,r(6))}]);