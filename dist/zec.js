parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YaYI":[function(require,module,exports) {
"use strict";function t(o){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(o)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={isset:function(o,e){return null!=o&&(void 0===e||t(o)===e)}};exports.default=o;
},{}],"A6Ov":[function(require,module,exports) {
!function(){"use strict";var t={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function n(t,n){try{return t(n)}catch(e){return n}}var e=document,r=window,i=e.documentElement,o=e.createElement.bind(e),u=o("div"),s=o("table"),c=o("tbody"),a=o("tr"),f=Array.isArray,l=Array.prototype,h=l.concat,d=l.filter,p=l.indexOf,v=l.map,g=l.push,m=l.slice,y=l.some,_=l.splice,b=/^#[\w-]*$/,x=/^\.[\w-]*$/,C=/<.+>/,E=/^\w+$/;function w(t,n){return t&&(P(n)||W(n))?x.test(t)?n.getElementsByClassName(t.slice(1)):E.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t):[]}var N=function(){function t(t,n){if(t){if(O(t))return t;var i=t;if(k(t)){var o=(O(n)?n[0]:n)||e;if(!(i=b.test(t)?o.getElementById(t.slice(1)):C.test(t)?At(t):w(t,o)))return}else if($(t))return this.ready(t);(i.nodeType||i===r)&&(i=[i]),this.length=i.length;for(var u=0,s=this.length;u<s;u++)this[u]=i[u]}}return t.prototype.init=function(n,e){return new t(n,e)},t}(),S=N.prototype,T=S.init;T.fn=T.prototype=S,S.length=0,S.splice=_,"function"==typeof Symbol&&(S[Symbol.iterator]=l[Symbol.iterator]),S.map=function(t){return T(h.apply([],v.call(this,function(n,e){return t.call(n,e,n)})))},S.slice=function(t,n){return T(m.call(this,t,n))};var A=/-([a-z])/g;function L(t){return t.replace(A,function(t,n){return n.toUpperCase()})}function B(t,n,e){if(e){for(var r=t.length;r--;)if(!1===n.call(t[r],r,t[r]))return t}else{r=0;for(var i=t.length;r<i;r++)if(!1===n.call(t[r],r,t[r]))return t}return t}function M(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=arguments.length;if(!r)return{};if(1===r)return M(T,t);for(var i=1;i<r;i++)for(var o in arguments[i])t[o]=arguments[i][o];return t}function R(t,n){var e=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!e&&!!n&&e.call(t,n)}function O(t){return t instanceof N}function I(t){return!!t&&t===t.window}function P(t){return!!t&&9===t.nodeType}function W(t){return!!t&&1===t.nodeType}function $(t){return"function"==typeof t}function k(t){return"string"==typeof t}function D(t){return void 0===t}function H(t){return null===t}function U(t){return!isNaN(parseFloat(t))&&isFinite(t)}function F(t){return k(t)?function(n,e){return R(e,t)}:$(t)?t:O(t)?function(n,e){return t.is(e)}:t?function(n,e){return e===t}:function(){return!1}}function j(t,n){return n?t.filter(n):t}T.each=B,S.each=function(t){return B(this,t)},S.removeProp=function(n){return this.each(function(e,r){delete r[t[n]||n]})},T.extend=M,S.extend=function(t){return M(S,t)},T.guid=1,T.isWindow=I,T.isFunction=$,T.isNumeric=U,T.isArray=f,S.prop=function(n,e){if(n){if(k(n))return n=t[n]||n,arguments.length<2?this[0]&&this[0][n]:this.each(function(t,r){r[n]=e});for(var r in n)this.prop(r,n[r]);return this}},S.get=function(t){return D(t)?m.call(this):this[(t=Number(t))<0?t+this.length:t]},S.eq=function(t){return T(this.get(t))},S.first=function(){return this.eq(0)},S.last=function(){return this.eq(-1)},S.filter=function(t){var n=F(t);return T(d.call(this,function(t,e){return n.call(t,e,t)}))};var q=/\S+/g;function z(t){return k(t)&&t.match(q)||[]}function J(t,n,e,r){for(var i=[],o=$(n),u=r&&F(r),s=0,c=t.length;s<c;s++)if(o){var a=n(t[s]);a.length&&g.apply(i,a)}else for(var f=t[s][n];!(null==f||r&&u(-1,f));)i.push(f),f=e?f[n]:null;return i}function Y(t){return t.length>1?d.call(t,function(t,n,e){return p.call(e,t)===n}):t}function G(t,n,e){if(W(t)){var i=r.getComputedStyle(t,null);return e?i.getPropertyValue(n)||void 0:i[n]||t.style[n]}}function V(t,n){return parseInt(G(t,n),10)||0}S.hasClass=function(t){return!!t&&y.call(this,function(n){return W(n)&&n.classList.contains(t)})},S.removeAttr=function(t){var n=z(t);return this.each(function(t,e){W(e)&&B(n,function(t,n){e.removeAttribute(n)})})},S.attr=function(t,n){if(t){if(k(t)){if(arguments.length<2){if(!this[0]||!W(this[0]))return;var e=this[0].getAttribute(t);return H(e)?void 0:e}return D(n)?this:H(n)?this.removeAttr(t):this.each(function(e,r){W(r)&&r.setAttribute(t,n)})}for(var r in t)this.attr(r,t[r]);return this}},S.toggleClass=function(t,n){var e=z(t),r=!D(n);return this.each(function(t,i){W(i)&&B(e,function(t,e){r?n?i.classList.add(e):i.classList.remove(e):i.classList.toggle(e)})})},S.addClass=function(t){return this.toggleClass(t,!0)},S.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},T.unique=Y,S.add=function(t,n){return T(Y(this.get().concat(T(t,n).get())))};var X=/^--/;function K(t){return X.test(t)}var Q={},Z=u.style,tt=["webkit","moz","ms"];var nt={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function et(t,n,e){return void 0===e&&(e=K(t)),e||nt[t]||!U(n)?n:n+"px"}S.css=function(t,n){if(k(t)){var e=K(t);return t=function(t,n){if(void 0===n&&(n=K(t)),n)return t;if(!Q[t]){var e=L(t),r=""+e[0].toUpperCase()+e.slice(1);B((e+" "+tt.join(r+" ")+r).split(" "),function(n,e){if(e in Z)return Q[t]=e,!1})}return Q[t]}(t,e),arguments.length<2?this[0]&&G(this[0],t,e):t?(n=et(t,n,e),this.each(function(r,i){W(i)&&(e?i.style.setProperty(t,n):i.style[t]=n)})):this}for(var r in t)this.css(r,t[r]);return this};var rt=/^\s+|\s+$/;function it(t,e){var r=t.dataset[e]||t.dataset[L(e)];return rt.test(r)?r:n(JSON.parse,r)}function ot(t,n){var e=t.documentElement;return Math.max(t.body["scroll"+n],e["scroll"+n],t.body["offset"+n],e["offset"+n],e["client"+n])}function ut(t,n){return V(t,"border"+(n?"Left":"Top")+"Width")+V(t,"padding"+(n?"Left":"Top"))+V(t,"padding"+(n?"Right":"Bottom"))+V(t,"border"+(n?"Right":"Bottom")+"Width")}S.data=function(t,e){if(!t){if(!this[0])return;var r={};for(var i in this[0].dataset)r[i]=it(this[0],i);return r}if(k(t))return arguments.length<2?this[0]&&it(this[0],t):D(e)?this:this.each(function(r,i){!function(t,e,r){r=n(JSON.stringify,r),t.dataset[L(e)]=r}(i,t,e)});for(var i in t)this.data(i,t[i]);return this},B([!0,!1],function(t,n){B(["Width","Height"],function(t,e){S[(n?"outer":"inner")+e]=function(r){if(this[0])return I(this[0])?n?this[0]["inner"+e]:this[0].document.documentElement["client"+e]:P(this[0])?ot(this[0],e):this[0][(n?"offset":"client")+e]+(r&&n?V(this[0],"margin"+(t?"Top":"Left"))+V(this[0],"margin"+(t?"Bottom":"Right")):0)}})}),B(["Width","Height"],function(t,n){var e=n.toLowerCase();S[e]=function(r){if(!this[0])return D(r)?void 0:this;if(!arguments.length)return I(this[0])?this[0].document.documentElement["client"+n]:P(this[0])?ot(this[0],n):this[0].getBoundingClientRect()[e]-ut(this[0],!t);var i=parseInt(r,10);return this.each(function(n,r){if(W(r)){var o=G(r,"boxSizing");r.style[e]=et(e,i+("border-box"===o?ut(r,!t):0))}})}});var st={};function ct(t){return"none"===G(t,"display")}function at(t,n){return!n||!y.call(n,function(n){return t.indexOf(n)<0})}S.toggle=function(t){return this.each(function(n,r){W(r)&&((D(t)?ct(r):t)?(r.style.display=r.___cd||"",ct(r)&&(r.style.display=function(t){if(st[t])return st[t];var n=o(t);e.body.insertBefore(n,null);var r=G(n,"display");return e.body.removeChild(n),st[t]="none"!==r?r:"block"}(r.tagName))):(r.___cd=G(r,"display"),r.style.display="none"))})},S.hide=function(){return this.toggle(!1)},S.show=function(){return this.toggle(!0)};var ft="___ce",lt=".",ht={focus:"focusin",blur:"focusout"},dt={mouseenter:"mouseover",mouseleave:"mouseout"},pt=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function vt(t){return dt[t]||ht[t]||t}function gt(t){return t[ft]=t[ft]||{}}function mt(t,n,e,r,i){var o=gt(t);o[n]=o[n]||[],o[n].push([e,r,i]),t.addEventListener(n,i)}function yt(t){var n=t.split(lt);return[n[0],n.slice(1).sort()]}function _t(t,n,e,r,i){var o=gt(t);if(n)o[n]&&(o[n]=o[n].filter(function(o){var u=o[0],s=o[1],c=o[2];if(i&&c.guid!==i.guid||!at(u,e)||r&&r!==s)return!0;t.removeEventListener(n,c)}));else for(n in o)_t(t,n,e,r,i)}function bt(t){return t.multiple&&t.options?J(d.call(t.options,function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled}),"value"):t.value||""}S.off=function(t,n,e){var r=this;if(D(t))this.each(function(t,n){(W(n)||P(n)||I(n))&&_t(n)});else if(k(t))$(n)&&(e=n,n=""),B(z(t),function(t,i){var o=yt(i),u=o[0],s=o[1],c=vt(u),a=u!==c;r.each(function(t,r){(W(r)||P(r)||I(r))&&(_t(r,c,s,n,e),a&&_t(r,u,s,n,e))})});else for(var i in t)this.off(i,t[i]);return this},S.on=function(t,n,e,r,i){var o=this;if(!k(t)){for(var u in t)this.on(u,n,e,t[u],i);return this}return k(n)||(D(n)||H(n)?n="":D(e)?(e=n,n=""):(r=e,e=n,n="")),$(r)||(r=e,e=void 0),r?(B(z(t),function(t,u){var s=yt(u),c=s[0],a=s[1],f=vt(c),l=c!==f,h=c in ht;f&&o.each(function(t,o){if(W(o)||P(o)||I(o)){var u=function t(u){if((!l||!(u.___ot?u.___ot!==c:u.type!==c||u.target["___i"+c]&&(delete u.target["___i"+c],u.stopImmediatePropagation(),1)))&&(!u.namespace||at(a,u.namespace.split(lt)))){var s=o;if(n){for(var d=u.target;!R(d,n);){if(d===o)return;if(!(d=d.parentNode))return}s=d,u.___cd=!0}else if(h&&u.___ot===c&&o!==u.target&&o.contains(u.target))return;u.___cd&&Object.defineProperty(u,"currentTarget",{configurable:!0,get:function(){return s}}),Object.defineProperty(u,"data",{configurable:!0,get:function(){return e}});var p=r.call(s,u,u.___td);i&&_t(o,f,a,n,t),!1===p&&(u.preventDefault(),u.stopPropagation())}};u.guid=r.guid=r.guid||T.guid++,mt(o,f,a,n,u),l&&mt(o,c,a,n,u)}})}),this):this},S.one=function(t,n,e,r){return this.on(t,n,e,r,!0)},S.ready=function(t){var n=function(){return setTimeout(t,0,T)};return"loading"!==e.readyState?n():e.addEventListener("DOMContentLoaded",n),this},S.trigger=function(t,n){if(k(t)){var r=yt(t),i=r[0],o=r[1],u=vt(i);if(!u)return this;var s=pt.test(u)?"MouseEvents":"HTMLEvents";(t=e.createEvent(s)).initEvent(u,!0,!0),t.namespace=o.join(lt),t.___ot=i}t.___td=n;var c=t.___ot in ht;return this.each(function(n,e){c&&$(e[t.___ot])&&(e["___i"+t.___ot]=!0,e[t.___ot]()),e.dispatchEvent(t)})};var xt=/%20/g,Ct=/\r?\n/g;var Et=/file|reset|submit|button|image/i,wt=/radio|checkbox/i;S.serialize=function(){var t="";return this.each(function(n,e){B(e.elements||[e],function(n,e){if(!(e.disabled||!e.name||"FIELDSET"===e.tagName||Et.test(e.type)||wt.test(e.type)&&!e.checked)){var r=bt(e);if(!D(r))B(f(r)?r:[r],function(n,r){t+=function(t,n){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(n.replace(Ct,"\r\n")).replace(xt,"+")}(e.name,r)})}})}),t.slice(1)},S.val=function(t){return arguments.length?this.each(function(n,e){var r=e.multiple&&e.options;if(r||wt.test(e.type)){var i=f(t)?v.call(t,String):H(t)?[]:[String(t)];r?B(e.options,function(t,n){n.selected=i.indexOf(n.value)>=0},!0):e.checked=i.indexOf(e.value)>=0}else e.value=D(t)||H(t)?"":t}):this[0]&&bt(this[0])},S.clone=function(){return this.map(function(t,n){return n.cloneNode(!0)})},S.detach=function(t){return j(this,t).each(function(t,n){n.parentNode&&n.parentNode.removeChild(n)}),this};var Nt=/^\s*<(\w+)[^>]*>/,St=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Tt={"*":u,tr:c,td:a,th:a,thead:s,tbody:s,tfoot:s};function At(t){if(!k(t))return[];if(St.test(t))return[o(RegExp.$1)];var n=Nt.test(t)&&RegExp.$1,e=Tt[n]||Tt["*"];return e.innerHTML=t,T(e.childNodes).detach().get()}T.parseHTML=At,S.empty=function(){return this.each(function(t,n){for(;n.firstChild;)n.removeChild(n.firstChild)})},S.html=function(t){return arguments.length?D(t)?this:this.each(function(n,e){W(e)&&(e.innerHTML=t)}):this[0]&&this[0].innerHTML},S.remove=function(t){return j(this,t).detach().off(),this},S.text=function(t){return D(t)?this[0]?this[0].textContent:"":this.each(function(n,e){W(e)&&(e.textContent=t)})},S.unwrap=function(){return this.parent().each(function(t,n){if("BODY"!==n.tagName){var e=T(n);e.replaceWith(e.children())}}),this},S.offset=function(){var t=this[0];if(t){var n=t.getBoundingClientRect();return{top:n.top+r.pageYOffset,left:n.left+r.pageXOffset}}},S.offsetParent=function(){return this.map(function(t,n){for(var e=n.offsetParent;e&&"static"===G(e,"position");)e=e.offsetParent;return e||i})},S.position=function(){var t=this[0];if(t){var n="fixed"===G(t,"position"),e=n?t.getBoundingClientRect():this.offset();if(!n){for(var r=t.ownerDocument,i=t.offsetParent||r.documentElement;(i===r.body||i===r.documentElement)&&"static"===G(i,"position");)i=i.parentNode;if(i!==t&&W(i)){var o=T(i).offset();e.top-=o.top+V(i,"borderTopWidth"),e.left-=o.left+V(i,"borderLeftWidth")}}return{top:e.top-V(t,"marginTop"),left:e.left-V(t,"marginLeft")}}},S.children=function(t){return j(T(Y(J(this,function(t){return t.children}))),t)},S.contents=function(){return T(Y(J(this,function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes})))},S.find=function(t){return T(Y(J(this,function(n){return w(t,n)})))};var Lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Bt=/^$|^module$|\/(java|ecma)script/i,Mt=["type","src","nonce","noModule"];function Rt(t,n,e,r,u){var s,c,a;r?t.insertBefore(n,e?t.firstChild:null):t.parentNode.insertBefore(n,e?t:t.nextSibling),u&&(s=n,c=t.ownerDocument,(a=T(s)).filter("script").add(a.find("script")).each(function(t,n){if(Bt.test(n.type)&&i.contains(n)){var e=o("script");e.text=n.textContent.replace(Lt,""),B(Mt,function(t,r){n[r]&&(e[r]=n[r])}),c.head.insertBefore(e,null),c.head.removeChild(e)}}))}function Ot(t,n,e,r,i,o,u,s){return B(t,function(t,o){B(T(o),function(t,o){B(T(n),function(n,u){var s=e?u:o,c=e?t:n;Rt(e?o:u,c?s.cloneNode(!0):s,r,i,!c)},s)},u)},o),n}S.after=function(){return Ot(arguments,this,!1,!1,!1,!0,!0)},S.append=function(){return Ot(arguments,this,!1,!1,!0)},S.appendTo=function(t){return Ot(arguments,this,!0,!1,!0)},S.before=function(){return Ot(arguments,this,!1,!0)},S.insertAfter=function(t){return Ot(arguments,this,!0,!1,!1,!1,!1,!0)},S.insertBefore=function(t){return Ot(arguments,this,!0,!0)},S.prepend=function(){return Ot(arguments,this,!1,!0,!0,!0,!0)},S.prependTo=function(t){return Ot(arguments,this,!0,!0,!0,!1,!1,!0)},S.replaceWith=function(t){return this.before(t).remove()},S.replaceAll=function(t){return T(t).replaceWith(this),this},S.wrapAll=function(t){for(var n=T(t),e=n[0];e.children.length;)e=e.firstElementChild;return this.first().before(n),this.appendTo(e)},S.wrap=function(t){return this.each(function(n,e){var r=T(t)[0];T(e).wrapAll(n?r.cloneNode(!0):r)})},S.wrapInner=function(t){return this.each(function(n,e){var r=T(e),i=r.contents();i.length?i.wrapAll(t):r.append(t)})},S.has=function(t){var n=k(t)?function(n,e){return w(t,e).length}:function(n,e){return e.contains(t)};return this.filter(n)},S.is=function(t){var n=F(t);return y.call(this,function(t,e){return n.call(t,e,t)})},S.next=function(t,n,e){return j(T(Y(J(this,"nextElementSibling",n,e))),t)},S.nextAll=function(t){return this.next(t,!0)},S.nextUntil=function(t,n){return this.next(n,!0,t)},S.not=function(t){var n=F(t);return this.filter(function(e,r){return(!k(t)||W(r))&&!n.call(r,e,r)})},S.parent=function(t){return j(T(Y(J(this,"parentNode"))),t)},S.index=function(t){var n=t?T(t)[0]:this[0],e=t?this:T(n).parent().children();return p.call(e,n)},S.closest=function(t){var n=this.filter(t);if(n.length)return n;var e=this.parent();return e.length?e.closest(t):n},S.parents=function(t,n){return j(T(Y(J(this,"parentElement",!0,n))),t)},S.parentsUntil=function(t,n){return this.parents(n,t)},S.prev=function(t,n,e){return j(T(Y(J(this,"previousElementSibling",n,e))),t)},S.prevAll=function(t){return this.prev(t,!0)},S.prevUntil=function(t,n){return this.prev(n,!0,t)},S.siblings=function(t){return j(T(Y(J(this,function(t){return T(t).parent().children().not(t)}))),t)},"undefined"!=typeof exports?module.exports=T:r.cash=r.$=T}();
},{}],"jSTH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("./helper")),e=n(require("cash-dom"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var r=function(){function n(){var t=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o(this,n),this.version="1.0.1",this.ta="zec",this.fn={},this.debug=!0,this.body=(0,e.default)("body"),this.docu=(0,e.default)(document),a&&this.docu.ready(function(){t.init()})}return i(n,[{key:"init",value:function(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.body,a=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ta,(0,e.default)(".".concat(this.ta),o));this.log("".concat(this.ta," init.")),a.toggleClass("".concat(this.ta," zing")),a.map(function(o){var i=[],r=(0,e.default)(a[o]),c=r.data("do");t.default.isset(c)&&c.replace(/\s/,"").split(",").forEach(function(t){var e=t.split(":");i.push({type:e[0],func:e[1]})});r.data("plant",i),i.map(function(t){var e=t.func;n.check(e)?"init"===t.type.toLowerCase()?n.exec(e,r):r.on(t.type,function(t){r.event=t,n.handler.call(n,r)}):n.error("".concat(e," load fail."))})}),a.toggleClass("zing",!1)}},{key:"exec",value:function(t,e){var n=this.fn[t]||this.notfound;return this.log("EXEC::".concat(t)),n.call(this,e)}},{key:"handler",value:function(t){var e=this,n=t.data("plant"),o=t.attr("data-nopde");this.log("EXEC::handler ".concat(t.event.type)),1===parseInt(o,10)&&(t.event.preventDefault(),this.log("NOPDE")),n.find(function(n){n.type===t.event.type&&e.exec(n.func,t)})}},{key:"hook",value:function(t,e,n){this.check(t)?this.log("".concat(t," overwrite")):this.fn[t]=e}},{key:"notfound",value:function(){this.error()}},{key:"check",value:function(e){return t.default.isset(this.fn[e])}},{key:"log",value:function(){var e;if(!t.default.isset(console)||!1===this.debug)return!0;(e=console).log.apply(e,arguments)}},{key:"error",value:function(){var e;if(!t.default.isset(console)||!1===this.debug)return!0;for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];(e=console).error.apply(e,["%cZEC::Error::","color: #ffcc00"].concat(o))}}]),n}();exports.default=r;
},{"./helper":"YaYI","cash-dom":"A6Ov"}]},{},["jSTH"], null)
//# sourceMappingURL=/zec.js.map