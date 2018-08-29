!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=44)}([,,function(e,r,t){"use strict";var n=t(10),o=t(19),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,r){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var t=0,n=e.length;t<n;t++)r.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var r={};function t(t,n){"object"==typeof r[n]&&"object"==typeof t?r[n]=e(r[n],t):r[n]=t}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],t);return r},extend:function(e,r,t){return c(r,function(r,o){e[o]=t&&"function"==typeof r?n(r,t):r}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},,function(e,r,t){e.exports=t(18)},function(e,r,t){var n;!function(t,o){void 0===(n=function(){return t.jsonToFormData=function(){function e(e){return"[object Array]"==={}.toString.call(e)}function r(r){return!e(r)&&"object"==typeof r&&!!r}return function t(n,o,s){var i=s||new FormData,a=0;for(var u in n){if(n.hasOwnProperty(u)&&null!==n[u]&&void 0!==n[u]){var c=o||u;if(o&&r(n)&&(c=o+"["+u+"]"),o&&e(n)&&(c=o+"["+a+"]"),n[u]instanceof File)i.append(c,n[u]);else if(n[u]instanceof FileList)for(var l=0;l<n[u].length;l++)i.append(c+"["+l+"]",n[u].item(l));else e(n[u])||r(n[u])?t(n[u],c,i):"boolean"==typeof n[u]?i.append(c,+n[u]?"1":"0"):i.append(c,n[u])}a++}return i}}()}.apply(r,[]))||(e.exports=n)}(this)},function(e,r,t){"use strict";var n=t(37),o=t(38),s=t(16);e.exports={formats:s,parse:o,stringify:n}},,function(e,r,t){"use strict";(function(r){var n=t(2),o=t(22),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,r){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=t(11):void 0!==r&&(e=t(11)),e}(),transformRequest:[function(e,r){return o(r,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(r,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(s)}),e.exports=a}).call(this,t(21))},function(e,r,t){(function(t){var n,o;void 0===(o="function"==typeof(n=function(e){"use strict";if(void 0===window.browser){const r=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},export:{minArgs:0,maxArgs:0},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},getSubTree:{minArgs:1,maxArgs:1},import:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},setIcon:{minArgs:1,maxArgs:1}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{update:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{download:{minArgs:1,maxArgs:1},cancel:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:0,maxArgs:0},setIcon:{minArgs:1,maxArgs:1},show:{minArgs:0,maxArgs:0}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{create:{minArgs:1,maxArgs:1},captureVisibleTab:{minArgs:0,maxArgs:2},detectLanguage:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},query:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");const r=(e,r,t)=>new Proxy(r,{apply:(r,n,o)=>t.call(n,e,...o)});let t=Function.call.bind(Object.prototype.hasOwnProperty);const n=(e,o={},s={})=>{let i=Object.create(null),a={has:(e,r)=>r in e||r in i,get(e,a,u){if(a in i)return i[a];if(!(a in e))return;let c=e[a];if("function"==typeof c)if("function"==typeof o[a])c=r(e,e[a],o[a]);else if(t(s,a)){let t=((e,r)=>{const t=e=>1==e?"argument":"arguments";return function(n,...o){if(o.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${o.length}`);if(o.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${o.length}`);return new Promise((t,s)=>{n[e](...o,((e,r)=>(...t)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):r.singleCallbackArg||1===t.length?e.resolve(t[0]):e.resolve(t)})({resolve:t,reject:s},r))})}})(a,s[a]);c=r(e,e[a],t)}else c=c.bind(e);else{if("object"!=typeof c||null===c||!t(o,a)&&!t(s,a))return Object.defineProperty(i,a,{configurable:!0,enumerable:!0,get:()=>e[a],set(r){e[a]=r}}),c;c=n(c,o[a],s[a])}return i[a]=c,c},set:(e,r,t,n)=>(r in i?i[r]=t:e[r]=t,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(i,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(i,r)};return new Proxy(e,a)},o={runtime:{onMessage:(e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}))(new class extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}(e=>"function"!=typeof e?e:function(r,t,n){let o=e(r,t);if((e=>e&&"object"==typeof e&&"function"==typeof e.then)(o))return o.then(n,e=>{console.error(e),n(e)}),!0;void 0!==o&&n(o)}))}},s=Object.assign({},chrome);return n(s,o,e)};e.exports=r()}else e.exports=t})?n.apply(r,[e]):n)||(e.exports=o)}).call(this,t(9))},function(e,r,t){"use strict";e.exports=function(e,r){return function(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];return e.apply(r,t)}}},function(e,r,t){"use strict";var n=t(2),o=t(23),s=t(25),i=t(26),a=t(27),u=t(12),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||t(28);e.exports=function(e){return new Promise(function(r,l){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var g=new XMLHttpRequest,m="onreadystatechange",d=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in g||a(e.url)||(g=new window.XDomainRequest,m="onload",d=!0,g.onprogress=function(){},g.ontimeout=function(){}),e.auth){var h=e.auth.username||"",A=e.auth.password||"";p.Authorization="Basic "+c(h+":"+A)}if(g.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,g[m]=function(){if(g&&(4===g.readyState||d)&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in g?i(g.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?g.response:g.responseText,status:1223===g.status?204:g.status,statusText:1223===g.status?"No Content":g.statusText,headers:t,config:e,request:g};o(r,l,n),g=null}},g.onerror=function(){l(u("Network Error",e,null,g)),g=null},g.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var y=t(29),x=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;x&&(p[e.xsrfHeaderName]=x)}if("setRequestHeader"in g&&n.forEach(p,function(e,r){void 0===f&&"content-type"===r.toLowerCase()?delete p[r]:g.setRequestHeader(r,e)}),e.withCredentials&&(g.withCredentials=!0),e.responseType)try{g.responseType=e.responseType}catch(r){if("json"!==e.responseType)throw r}"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){g&&(g.abort(),l(e),g=null)}),void 0===f&&(f=null),g.send(f)})}},function(e,r,t){"use strict";var n=t(24);e.exports=function(e,r,t,o,s){var i=new Error(e);return n(i,r,t,o,s)}},function(e,r,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,r,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,r,t){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),s=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(t[n]=e[n]);return t};e.exports={arrayToObject:s,assign:function(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var o=r[n],s=o.obj[o.prop],i=Object.keys(s),a=0;a<i.length;++a){var u=i[a],c=s[u];"object"==typeof c&&null!==c&&-1===t.indexOf(c)&&(r.push({obj:s,prop:u}),t.push(c))}return function(e){for(var r;e.length;){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}return r}(r)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},encode:function(e){if(0===e.length)return e;for(var r="string"==typeof e?e:String(e),t="",n=0;n<r.length;++n){var s=r.charCodeAt(n);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?t+=r.charAt(n):s<128?t+=o[s]:s<2048?t+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?t+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(n+=1,s=65536+((1023&s)<<10|1023&r.charCodeAt(n)),t+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return t},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(r,t,o){if(!t)return r;if("object"!=typeof t){if(Array.isArray(r))r.push(t);else{if("object"!=typeof r)return[r,t];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,t))&&(r[t]=!0)}return r}if("object"!=typeof r)return[r].concat(t);var i=r;return Array.isArray(r)&&!Array.isArray(t)&&(i=s(r,o)),Array.isArray(r)&&Array.isArray(t)?(t.forEach(function(t,s){n.call(r,s)?r[s]&&"object"==typeof r[s]?r[s]=e(r[s],t,o):r.push(t):r[s]=t}),r):Object.keys(t).reduce(function(r,s){var i=t[s];return n.call(r,s)?r[s]=e(r[s],i,o):r[s]=i,r},i)}}},function(e,r,t){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,r,t){"use strict";t.r(r),function(e){t.d(r,"ToBytes",function(){return c}),t.d(r,"ToSpeed",function(){return l}),t.d(r,"GetBrowser",function(){return f}),t.d(r,"makeRPCall",function(){return p}),t.d(r,"toFormData",function(){return g}),t.d(r,"toQueryString",function(){return m});var n=t(6),o=t.n(n),s=t(5),i=t.n(s),a=t(4),u=t.n(a);function c(e,r){if(0==e)return"0 B";var t=r||2,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(t))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function l(e,r){if(0==e)return"0 B/s";var t=r||2,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(t))+" "+["B/s","KB/s","MB/s","GB/s","TB/s","PB/s","EB/s","ZB/s","YB/s"][n]}function f(){return"undefined"!=typeof chrome?void 0!==e?"Firefox":"Chrome":"Edge"}async function p(e){var r={url:localStorage.getItem("url")+"/plugins/httprpc/action.php"||"",method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},auth:{username:localStorage.getItem("username")||"",password:localStorage.getItem("password")||""},data:o.a.stringify(e)},t=null;try{t=(await u()(r)).data}catch(e){return void("Network Error"==e.message?this.throwError("Invalid URL"):401==e.response.status?this.throwError("Invalid username or password"):200==e.response.status&&void 0!=e.response||this.throwError("An unknown error occurred "))}return t}function g(e){return i()(e)}function m(e){return e.stringify(e)}}.call(this,t(9))},function(e,r,t){"use strict";var n=t(2),o=t(10),s=t(20),i=t(8);function a(e){var r=new s(e),t=o(s.prototype.request,r);return n.extend(t,s.prototype,r),n.extend(t,r),t}var u=a(i);u.Axios=s,u.create=function(e){return a(n.merge(i,e))},u.Cancel=t(14),u.CancelToken=t(35),u.isCancel=t(13),u.all=function(e){return Promise.all(e)},u.spread=t(36),e.exports=u,e.exports.default=u},function(e,r){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,r,t){"use strict";var n=t(8),o=t(2),s=t(30),i=t(31);function a(e){this.defaults=e,this.interceptors={request:new s,response:new s}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var r=[i,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){r.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){r.push(e.fulfilled,e.rejected)});r.length;)t=t.then(r.shift(),r.shift());return t},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(r,t){return this.request(o.merge(t||{},{method:e,url:r}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(r,t,n){return this.request(o.merge(n||{},{method:e,url:r,data:t}))}}),e.exports=a},function(e,r){var t,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&g())}function g(){if(!l){var e=a(p);l=!0;for(var r=c.length;r;){for(u=c,c=[];++f<r;)u&&u[f].run();f=-1,r=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function m(e,r){this.fun=e,this.array=r}function d(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new m(e,r)),1!==c.length||l||a(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,r,t){"use strict";var n=t(2);e.exports=function(e,r){n.forEach(e,function(t,n){n!==r&&n.toUpperCase()===r.toUpperCase()&&(e[r]=t,delete e[n])})}},function(e,r,t){"use strict";var n=t(12);e.exports=function(e,r,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?r(n("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},function(e,r,t){"use strict";e.exports=function(e,r,t,n,o){return e.config=r,t&&(e.code=t),e.request=n,e.response=o,e}},function(e,r,t){"use strict";var n=t(2);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,r,t){if(!r)return e;var s;if(t)s=t(r);else if(n.isURLSearchParams(r))s=r.toString();else{var i=[];n.forEach(r,function(e,r){null!==e&&void 0!==e&&(n.isArray(e)?r+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(r)+"="+o(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,r,t){"use strict";var n=t(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var r,t,s,i={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),r=n.trim(e.substr(0,s)).toLowerCase(),t=n.trim(e.substr(s+1)),r){if(i[r]&&o.indexOf(r)>=0)return;i[r]="set-cookie"===r?(i[r]?i[r]:[]).concat([t]):i[r]?i[r]+", "+t:t}}),i):i}},function(e,r,t){"use strict";var n=t(2);e.exports=n.isStandardBrowserEnv()?function(){var e,r=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var n=e;return r&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(r){var t=n.isString(r)?o(r):r;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},function(e,r,t){"use strict";function n(){this.message="String contains an invalid character"}n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=function(e){for(var r,t,o=String(e),s="",i=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.charAt(0|i)||(a="=",i%1);s+=a.charAt(63&r>>8-i%1*8)){if((t=o.charCodeAt(i+=.75))>255)throw new n;r=r<<8|t}return s}},function(e,r,t){"use strict";var n=t(2);e.exports=n.isStandardBrowserEnv()?{write:function(e,r,t,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(r)),n.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,r,t){"use strict";var n=t(2);function o(){this.handlers=[]}o.prototype.use=function(e,r){return this.handlers.push({fulfilled:e,rejected:r}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(r){null!==r&&e(r)})},e.exports=o},function(e,r,t){"use strict";var n=t(2),o=t(32),s=t(13),i=t(8),a=t(33),u=t(34);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(r){delete e.headers[r]}),(e.adapter||i.adapter)(e).then(function(r){return c(e),r.data=o(r.data,r.headers,e.transformResponse),r},function(r){return s(r)||(c(e),r&&r.response&&(r.response.data=o(r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)})}},function(e,r,t){"use strict";var n=t(2);e.exports=function(e,r,t){return n.forEach(t,function(t){e=t(e,r)}),e}},function(e,r,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,r,t){"use strict";e.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}},function(e,r,t){"use strict";var n=t(14);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(e){r=e});var t=this;e(function(e){t.reason||(t.reason=new n(e),r(t.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(r){e=r}),cancel:e}},e.exports=o},function(e,r,t){"use strict";e.exports=function(e){return function(r){return e.apply(null,r)}}},function(e,r,t){"use strict";var n=t(15),o=t(16),s={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(r,t,o,s,i,u,c,l,f,p,g,m){var d=r;if("function"==typeof c)d=c(t,d);else if(d instanceof Date)d=p(d);else if(null===d){if(s)return u&&!m?u(t,a.encoder):t;d=""}if("string"==typeof d||"number"==typeof d||"boolean"==typeof d||n.isBuffer(d))return u?[g(m?t:u(t,a.encoder))+"="+g(u(d,a.encoder))]:[g(t)+"="+g(String(d))];var h,A=[];if(void 0===d)return A;if(Array.isArray(c))h=c;else{var y=Object.keys(d);h=l?y.sort(l):y}for(var x=0;x<h.length;++x){var v=h[x];i&&null===d[v]||(A=Array.isArray(d)?A.concat(e(d[v],o(t,v),o,s,i,u,c,l,f,p,g,m)):A.concat(e(d[v],t+(f?"."+v:"["+v+"]"),o,s,i,u,c,l,f,p,g,m)))}return A};e.exports=function(e,r){var t=e,i=r?n.assign({},r):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===i.delimiter?a.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:a.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:a.skipNulls,p="boolean"==typeof i.encode?i.encode:a.encode,g="function"==typeof i.encoder?i.encoder:a.encoder,m="function"==typeof i.sort?i.sort:null,d=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:a.serializeDate,A="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:a.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,x,v=o.formatters[i.format];"function"==typeof i.filter?t=(x=i.filter)("",t):Array.isArray(i.filter)&&(y=x=i.filter);var w,b=[];if("object"!=typeof t||null===t)return"";w=i.arrayFormat in s?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=s[w];y||(y=Object.keys(t)),m&&y.sort(m);for(var O=0;O<y.length;++O){var S=y[O];f&&null===t[S]||(b=b.concat(u(t[S],S,j,l,f,p?g:null,x,m,d,h,v,A)))}var T=b.join(c),E=!0===i.addQueryPrefix?"?":"";return T.length>0?E+T:""}},function(e,r,t){"use strict";var n=t(15),o=Object.prototype.hasOwnProperty,s={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,r,t){if(e){var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),a=i?n.slice(0,i.index):n,u=[];if(a){if(!t.plainObjects&&o.call(Object.prototype,a)&&!t.allowPrototypes)return;u.push(a)}for(var c=0;null!==(i=s.exec(n))&&c<t.depth;){if(c+=1,!t.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!t.allowPrototypes)return;u.push(i[1])}return i&&u.push("["+n.slice(i.index)+"]"),function(e,r,t){for(var n=r,o=e.length-1;o>=0;--o){var s,i=e[o];if("[]"===i)s=(s=[]).concat(n);else{s=t.plainObjects?Object.create(null):{};var a="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,u=parseInt(a,10);!isNaN(u)&&i!==a&&String(u)===a&&u>=0&&t.parseArrays&&u<=t.arrayLimit?(s=[])[u]=n:s[a]=n}n=s}return n}(u,r,t)}};e.exports=function(e,r){var t=r?n.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"==typeof t.delimiter||n.isRegExp(t.delimiter)?t.delimiter:s.delimiter,t.depth="number"==typeof t.depth?t.depth:s.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:s.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"==typeof t.decoder?t.decoder:s.decoder,t.allowDots="boolean"==typeof t.allowDots?t.allowDots:s.allowDots,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:s.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:s.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:s.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:s.strictNullHandling,""===e||null===e||void 0===e)return t.plainObjects?Object.create(null):{};for(var a="string"==typeof e?function(e,r){for(var t={},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=n.split(r.delimiter,i),u=0;u<a.length;++u){var c,l,f=a[u],p=f.indexOf("]="),g=-1===p?f.indexOf("="):p+1;-1===g?(c=r.decoder(f,s.decoder),l=r.strictNullHandling?null:""):(c=r.decoder(f.slice(0,g),s.decoder),l=r.decoder(f.slice(g+1),s.decoder)),o.call(t,c)?t[c]=[].concat(t[c]).concat(l):t[c]=l}return t}(e,t):e,u=t.plainObjects?Object.create(null):{},c=Object.keys(a),l=0;l<c.length;++l){var f=c[l],p=i(f,a[f],t);u=n.merge(u,p,t)}return n.compact(u)}},function(e,r,t){"use strict";t.r(r),t.d(r,"ruTorrentRemote",function(){return l});var n=t(4),o=t.n(n),s=t(6),i=t.n(s),a=t(5),u=t.n(a),c=t(17);class l{constructor(e){let r=e.username,t=e.password,n=e.url;this.cid=0,this.data=[],this.url=n.replace(/\/$/),this.config={auth:{username:r,password:t}}}async AddTorrent(e){let r=e.url,t=e.path,n=e.label;if(r.startsWith("magnet")){var s={dir_edit:t||"",tadd_label:n||"",url:r};return 200==(await o.a.post(this.url+"/php/addtorrent.php",u()(s),this.config)).status}if(r.startsWith("http")){let e=await o.a.get(r,{responseType:"blob"});if("application/x-bittorrent"!=e.data.type)throw new Error("Provided link is not a torrent");return s={dir_edit:t||"",tadd_label:n||"",torrent_file:new File([e.data],Date.now().toString())},200==(await o.a.post(this.url+"/php/addtorrent.php",u()(s),this.config)).status}throw new Error("Unknown URL resource")}async GetTorrents(){let e=await o.a.post(this.url+"/plugins/httprpc/action.php",i.a.stringify({mode:"list",cmd:"d.custom=addtime"}),this.config);if(e.status,e.data.cid==this.cid)return this.data;for(var r in this.data=[],e.data.t){var t=e.data.t[r],n={name:t[4],status:"Unknown",size:c.ToBytes(t[5]),done:+(t[8]/t[5]*100).toFixed(2),downloaded:c.ToBytes(+t[8]),uploaded:c.ToBytes(+t[9]),ratio:+(t[10]/1e3).toFixed(3),ul:c.ToSpeed(+t[11]),dl:c.ToSpeed(+t[12]),added:t[34]};n.done>0&&(n.status="Downloading"),100==n.done&&(n.status="Seeding"),0==n.done&&(n.status="Started"),n.done=n.done+"%",this.data.push(n)}return this.data}}},,,,,function(e,r,t){"use strict";t.r(r),function(e){t(4);let r=new(t(39).ruTorrentRemote)({username:localStorage.getItem("username"),password:localStorage.getItem("password"),url:localStorage.getItem("url")});e.contextMenus.create({id:"upload-to-rutorrent",title:"Upload to ruTorrent",contexts:["link"]}),e.contextMenus.create({id:"options-page",title:"Options Page",contexts:["browser_action"]}),e.contextMenus.onClicked.addListener(async(t,n)=>{if("upload-to-rutorrent"===t.menuItemId){var o=await r.AddTorrent({url:t.linkUrl});console.log(o)}else"options-page"===t.menuItemId&&e.runtime.openOptionsPage()})}.call(this,t(9))}]);