/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/* ========================================================================
 * Bootstrap: tooltip.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml)
    }

    // IE 8 and below don't support createHTMLDocument
    if (!document.implementation || !document.implementation.createHTMLDocument) {
      return unsafeHtml
    }

    var createdDocument = document.implementation.createHTMLDocument('sanitization')
    createdDocument.body.innerHTML = unsafeHtml

    var whitelistKeys = $.map(whiteList, function (el, i) { return i })
    var elements = $(createdDocument.body).find('*')

    for (var i = 0, len = elements.length; i < len; i++) {
      var el = elements[i]
      var elName = el.nodeName.toLowerCase()

      if ($.inArray(elName, whitelistKeys) === -1) {
        el.parentNode.removeChild(el)

        continue
      }

      var attributeList = $.map(el.attributes, function (el) { return el })
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])

      for (var j = 0, len2 = attributeList.length; j < len2; j++) {
        if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
          el.removeAttribute(attributeList[j].nodeName)
        }
      }
    }

    return createdDocument.body.innerHTML
  }

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    },
    sanitize : true,
    sanitizeFn : null,
    whiteList : DefaultWhitelist
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    var dataAttributes = this.$element.data()

    for (var dataAttr in dataAttributes) {
      if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
        delete dataAttributes[dataAttr]
      }
    }

    options = $.extend({}, this.getDefaults(), dataAttributes, options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    if (options.sanitize) {
      options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn)
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    if (this.options.html) {
      if (this.options.sanitize) {
        title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn)
      }

      $tip.find('.tooltip-inner').html(title)
    } else {
      $tip.find('.tooltip-inner').text(title)
    }

    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

  Tooltip.prototype.sanitizeHtml = function (unsafeHtml) {
    return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn)
  }

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
;
/* ========================================================================
 * Bootstrap: popover.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.4.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    if (this.options.html) {
      var typeContent = typeof content

      if (this.options.sanitize) {
        title = this.sanitizeHtml(title)

        if (typeContent === 'string') {
          content = this.sanitizeHtml(content)
        }
      }

      $tip.find('.popover-title').html(title)
      $tip.find('.popover-content').children().detach().end()[
        typeContent === 'string' ? 'html' : 'append'
      ](content)
    } else {
      $tip.find('.popover-title').text(title)
      $tip.find('.popover-content').children().detach().end().text(content)
    }

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
        o.content.call($e[0]) :
        o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
;
/**
 * @file
 * Applies accessibility enhancements that are not easy to make through Twig.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.social_core_accessibility = {
    attach: function (context, _) {
      // Ensure links that are excluded from the accessibility tree can't be
      // focused with the keyboard because this is confusing.
      $('[aria-hidden="true"] a', context)
        .once('social_core_accessibility')
        .attr('tabindex', -1)
        .attr('aria-hidden', "true");
    }
  }
})(jQuery);
;
/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.4.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    selector    = selector === '#' ? [] : selector
    var $parent = $(document).find(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
;
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return t.Waves=e.call(t),t.Waves}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";function t(t){return null!==t&&t===t.window}function e(e){return t(e)?e:9===e.nodeType&&e.defaultView}function n(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function o(t){return n(t)&&t.nodeType>0}function a(t){var e=f.call(t);return"[object String]"===e?d(t):n(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e)&&t.hasOwnProperty("length")?t:o(t)?[t]:[]}function i(t){var n,o,a={top:0,left:0},i=t&&t.ownerDocument;return n=i.documentElement,void 0!==t.getBoundingClientRect&&(a=t.getBoundingClientRect()),o=e(i),{top:a.top+o.pageYOffset-n.clientTop,left:a.left+o.pageXOffset-n.clientLeft}}function r(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function s(t,e,n){if(n){n.classList.remove("waves-rippling");var o=n.getAttribute("data-x"),a=n.getAttribute("data-y"),i=n.getAttribute("data-scale"),s=n.getAttribute("data-translate"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),"mousemove"===t.type&&(u=150);var c="mousemove"===t.type?2500:v.duration;setTimeout(function(){var t={top:a+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":i+" "+s,"-moz-transform":i+" "+s,"-ms-transform":i+" "+s,"-o-transform":i+" "+s,transform:i+" "+s};n.setAttribute("style",r(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c)},u)}}function u(t){if(!1===h.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function c(t){var e=u(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(h.registerEvent(t),"touchstart"===t.type&&v.delay){var n=!1,o=setTimeout(function(){o=null,v.show(t,e)},v.delay),a=function(a){o&&(clearTimeout(o),o=null,v.show(t,e)),n||(n=!0,v.hide(a,e)),r()},i=function(t){o&&(clearTimeout(o),o=null),a(t),r()};e.addEventListener("touchmove",i,!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1);var r=function(){e.removeEventListener("touchmove",i),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)}}else v.show(t,e),m&&(e.addEventListener("touchend",v.hide,!1),e.addEventListener("touchcancel",v.hide,!1)),e.addEventListener("mouseup",v.hide,!1),e.addEventListener("mouseleave",v.hide,!1)}}var l=l||{},d=document.querySelectorAll.bind(document),f=Object.prototype.toString,m="ontouchstart"in window,v={duration:750,delay:200,show:function(t,e,n){if(2===t.button)return!1;e=e||this;var o=document.createElement("div");o.className="waves-ripple waves-rippling",e.appendChild(o);var a=i(e),s=0,u=0;"touches"in t&&t.touches.length?(s=t.touches[0].pageY-a.top,u=t.touches[0].pageX-a.left):(s=t.pageY-a.top,u=t.pageX-a.left),u=u>=0?u:0,s=s>=0?s:0;var c="scale("+e.clientWidth/100*3+")",l="translate(0,0)";n&&(l="translate("+n.x+"px, "+n.y+"px)"),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-x",u),o.setAttribute("data-y",s),o.setAttribute("data-scale",c),o.setAttribute("data-translate",l);var d={top:s+"px",left:u+"px"};o.classList.add("waves-notransition"),o.setAttribute("style",r(d)),o.classList.remove("waves-notransition"),d["-webkit-transform"]=c+" "+l,d["-moz-transform"]=c+" "+l,d["-ms-transform"]=c+" "+l,d["-o-transform"]=c+" "+l,d.transform=c+" "+l,d.opacity="1";var f="mousemove"===t.type?2500:v.duration;d["-webkit-transition-duration"]=f+"ms",d["-moz-transition-duration"]=f+"ms",d["-o-transition-duration"]=f+"ms",d["transition-duration"]=f+"ms",o.setAttribute("style",r(d))},hide:function(t,e){for(var n=(e=e||this).getElementsByClassName("waves-rippling"),o=0,a=n.length;o<a;o++)s(t,e,n[o]);m&&(e.removeEventListener("touchend",v.hide),e.removeEventListener("touchcancel",v.hide)),e.removeEventListener("mouseup",v.hide),e.removeEventListener("mouseleave",v.hide)}},p={input:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");n.className=t.className+" waves-input-wrapper",t.className="waves-button-input",e.replaceChild(n,t),n.appendChild(t);var o=window.getComputedStyle(t,null),a=o.color,i=o.backgroundColor;n.setAttribute("style","color:"+a+";background:"+i),t.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");e.replaceChild(n,t),n.appendChild(t)}}},h={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&h.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?h.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){h.touches&&(h.touches-=1)},500)}};return l.init=function(t){var e=document.body;"duration"in(t=t||{})&&(v.duration=t.duration),"delay"in t&&(v.delay=t.delay),m&&(e.addEventListener("touchstart",c,!1),e.addEventListener("touchcancel",h.registerEvent,!1),e.addEventListener("touchend",h.registerEvent,!1)),e.addEventListener("mousedown",c,!1)},l.attach=function(t,e){t=a(t),"[object Array]"===f.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var n,o,i=0,r=t.length;i<r;i++)o=(n=t[i]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(p[o](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},l.ripple=function(t,e){var n=(t=a(t)).length;if(e=e||{},e.wait=e.wait||0,e.position=e.position||null,n)for(var o,r,s,u={},c=0,l={type:"mousedown",button:1};c<n;c++)if(o=t[c],r=e.position||{x:o.clientWidth/2,y:o.clientHeight/2},s=i(o),u.x=s.left+r.x,u.y=s.top+r.y,l.pageX=u.x,l.pageY=u.y,v.show(l,o),e.wait>=0&&null!==e.wait){var d={type:"mouseup",button:1};setTimeout(function(t,e){return function(){v.hide(t,e)}}(d,o),e.wait)}},l.calm=function(t){for(var e={type:"mouseup",button:1},n=0,o=(t=a(t)).length;n<o;n++)v.hide(e,t[n])},l.displayEffect=function(t){l.init(t)},l});

jQuery,Drupal.behaviors.initWaves={attach:function(t,a){"undefined"!=typeof Waves&&(Waves.attach(".btn-default:not(.btn-icon):not(.btn-float)",["waves-btn"]),Waves.attach(".btn-flat:not(.btn-icon):not(.btn-float)",["waves-btn"]),Waves.attach(".btn-primary:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-secondary:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-accent:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-icon-toggle, .btn-float",["waves-circle"]),Waves.init({duration:750,delay:200}))}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @param {underscore} _
 * @param {jQuery} $
 * @param {Drupal} Drupal
 * @param {drupalSettings} drupalSettings
 */
(function (_, $, Drupal, drupalSettings) {
  'use strict';

  /**
   * @typedef Drupal.bootstrap
   */
  var Bootstrap = {
    processedOnce: {},
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Creates a jQuery plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.createPlugin = function (id, plugin, noConflict) {
    // Immediately return if plugin doesn't exist.
    if ($.fn[id] !== void 0) {
      return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.', {'@id': id});
    }

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin', {'@id': id, '@plugin':  plugin});
    }

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Diff object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of the first passed object that are not present
   *   in all other passed objects.
   */
  Bootstrap.diffObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.difference.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Extends a jQuery Plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A constructor function used to initialize the for the jQuery plugin.
   *
   * @return {Function|Boolean}
   *   The jQuery plugin constructor or FALSE if the plugin does not exist.
   */
  Bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback', {'@id': id, '@callback':  callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);
    if (!$.isPlainObject(plugin)) {
      return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj', {'@obj':  plugin});
    }

    this.wrapPluginConstructor(constructor, plugin, true);

    return $.fn[id];
  };

  Bootstrap.superWrapper = function (parent, fn) {
    return function () {
      var previousSuper = this.super;
      this.super = parent;
      var ret = fn.apply(this, arguments);
      if (previousSuper) {
        this.super = previousSuper;
      }
      else {
        delete this.super;
      }
      return ret;
    };
  };

  /**
   * Provide a helper method for displaying when something is went wrong.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   An arguments to use in message.
   *
   * @return {Boolean}
   *   Always returns FALSE.
   */
  Bootstrap.fatal = function (message, args) {
    if (this.settings.dev && console.warn) {
      for (var name in args) {
        if (args.hasOwnProperty(name) && typeof args[name] === 'object') {
          args[name] = JSON.stringify(args[name]);
        }
      }
      Drupal.throwError(new Error(Drupal.formatString(message, args)));
    }
    return false;
  };

  /**
   * Intersects object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of first passed object that intersects with all
   *   other passed objects.
   */
  Bootstrap.intersectObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.intersection.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Normalizes an object's values.
   *
   * @param {Object} obj
   *   The object to normalize.
   *
   * @return {Object}
   *   The normalized object.
   */
  Bootstrap.normalizeObject = function (obj) {
    if (!$.isPlainObject(obj)) {
      return obj;
    }

    for (var k in obj) {
      if (typeof obj[k] === 'string') {
        if (obj[k] === 'true') {
          obj[k] = true;
        }
        else if (obj[k] === 'false') {
          obj[k] = false;
        }
        else if (obj[k].match(/^[\d-.]$/)) {
          obj[k] = parseFloat(obj[k]);
        }
      }
      else if ($.isPlainObject(obj[k])) {
        obj[k] = Bootstrap.normalizeObject(obj[k]);
      }
    }

    return obj;
  };

  /**
   * An object based once plugin (similar to jquery.once, but without the DOM).
   *
   * @param {String} id
   *   A unique identifier.
   * @param {Function} callback
   *   The callback to invoke if the identifier has not yet been seen.
   *
   * @return {Bootstrap}
   */
  Bootstrap.once = function (id, callback) {
    // Immediately return if identifier has already been processed.
    if (this.processedOnce[id]) {
      return this;
    }
    callback.call(this, this.settings);
    this.processedOnce[id] = true;
    return this;
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   */
  Bootstrap.option = function (key, value) {
    var options = $.isPlainObject(key) ? $.extend({}, key) : {};

    // Get all options (clone so it doesn't reference the internal object).
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Get/set single option.
    if (typeof key === "string") {
      // Handle nested keys in dot notation.
      // e.g., "foo.bar" => { foo: { bar: true } }
      var parts = key.split('.');
      key = parts.shift();
      var obj = options;
      if (parts.length) {
        for (var i = 0; i < parts.length - 1; i++) {
          obj[parts[i]] = obj[parts[i]] || {};
          obj = obj[parts[i]];
        }
        key = parts.pop();
      }

      // Get.
      if (arguments.length === 1) {
        return obj[key] === void 0 ? null : obj[key];
      }

      // Set.
      obj[key] = value;
    }

    // Set multiple options.
    $.extend(true, this.options, options);
  };

  /**
   * Adds a ".noConflict()" helper method if needed.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.pluginNoConflict = function (id, plugin, noConflict) {
    if (plugin.noConflict === void 0 && (noConflict === void 0 || noConflict)) {
      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
    }
  };

  /**
   * Creates a handler that relays to another event name.
   *
   * @param {HTMLElement|jQuery} target
   *   A target element.
   * @param {String} name
   *   The name of the event to trigger.
   * @param {Boolean} [stopPropagation=true]
   *   Flag indicating whether to stop the propagation of the event, defaults
   *   to true.
   *
   * @return {Function}
   *   An even handler callback function.
   */
  Bootstrap.relayEvent = function (target, name, stopPropagation) {
    return function (e) {
      if (stopPropagation === void 0 || stopPropagation) {
        e.stopPropagation();
      }
      var $target = $(target);
      var parts = name.split('.').filter(Boolean);
      var type = parts.shift();
      e.target = $target[0];
      e.currentTarget = $target[0];
      e.namespace = parts.join('.');
      e.type = type;
      $target.trigger(e);
    };
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A callback function that is immediately invoked and must return a
   *   function that will be used as the plugin constructor.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.replacePlugin = function (id, callback, noConflict) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback', {'@callback': callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin', {'@id': id, '@plugin': plugin});
    }

    this.wrapPluginConstructor(constructor, plugin);

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a fairly complete modern implementation. If things aren't
   * working quite the way you intend (in older browsers), you may wish to use
   * the jQuery.simulate plugin. If it's available, this method will defer to
   * that plugin.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement|jQuery} element
   *   A DOM element to dispatch event on. Note: this may be a jQuery object,
   *   however be aware that this will trigger the same event for each element
   *   inside the jQuery collection; use with caution.
   * @param {String|String[]} type
   *   The type(s) of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   *
   * @return {Boolean}
   *   The return value is false if event is cancelable and at least one of the
   *   event handlers which handled this event called Event.preventDefault().
   *   Otherwise it returns true.
   */
  Bootstrap.simulate = function (element, type, options) {
    // Handle jQuery object wrappers so it triggers on each element.
    var ret = true;
    if (element instanceof $) {
      element.each(function () {
        if (!Bootstrap.simulate(this, type, options)) {
          ret = false;
        }
      });
      return ret;
    }

    if (!(element instanceof HTMLElement)) {
      this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.', {
        '@type': typeof element,
      });
    }

    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return true;
    }

    var event;
    var ctor;
    var types = [].concat(type);
    for (var i = 0, l = types.length; i < l; i++) {
      type = types[i];
      for (var name in this.eventMap) {
        if (this.eventMap[name].test(type)) {
          ctor = name;
          break;
        }
      }
      if (!ctor) {
        throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
      }
      var opts = {bubbles: true, cancelable: true};
      if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
        $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
      }
      if (ctor === 'MouseEvent') {
        $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
      }
      if (options) {
        $.extend(opts, options);
      }
      if (typeof window[ctor] === 'function') {
        event = new window[ctor](type, opts);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (document.createEvent) {
        event = document.createEvent(ctor);
        event.initEvent(type, opts.bubbles, opts.cancelable);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (typeof element.fireEvent === 'function') {
        event = $.extend(document.createEventObject(), opts);
        if (!element.fireEvent('on' + type, event)) {
          ret = false;
        }
      }
      else if (typeof element[type]) {
        element[type]();
      }
    }
    return ret;
  };

  /**
   * Strips HTML and returns just text.
   *
   * @param {String|Element|jQuery} html
   *   A string of HTML content, an Element DOM object or a jQuery object.
   *
   * @return {String}
   *   The text without HTML tags.
   *
   * @todo Replace with http://locutus.io/php/strings/strip_tags/
   */
  Bootstrap.stripHtml = function (html) {
    if (html instanceof $) {
      html = html.html();
    }
    else if (html instanceof Element) {
      html = html.innerHTML;
    }
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/^[\s\n\t]*|[\s\n\t]*$/, '');
  };

  /**
   * Provide a helper method for displaying when something is unsupported.
   *
   * @param {String} type
   *   The type of unsupported object, e.g. method or option.
   * @param {String} name
   *   The name of the unsupported object.
   * @param {*} [value]
   *   The value of the unsupported object.
   */
  Bootstrap.unsupported = function (type, name, value) {
    Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value', {
      '@type': type,
      '@name': name,
      '@value': typeof value === 'object' ? JSON.stringify(value) : value
    });
  };

  /**
   * Provide a helper method to display a warning.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   Arguments to use as replacements in Drupal.formatString.
   */
  Bootstrap.warn = function (message, args) {
    if (this.settings.dev && console.warn) {
      console.warn(Drupal.formatString(message, args));
    }
  };

  /**
   * Wraps a plugin with common functionality.
   *
   * @param {Function} constructor
   *   A plugin constructor being wrapped.
   * @param {Object|Function} plugin
   *   The plugin being wrapped.
   * @param {Boolean} [extend = false]
   *   Whether to add super extensibility.
   */
  Bootstrap.wrapPluginConstructor = function (constructor, plugin, extend) {
    var proto = constructor.prototype;

    // Add a jQuery UI like option getter/setter method.
    var option = this.option;
    if (proto.option === void(0)) {
      proto.option = function () {
        return option.apply(this, arguments);
      };
    }

    if (extend) {
      // Handle prototype properties separately.
      if (plugin.prototype !== void 0) {
        for (var key in plugin.prototype) {
          if (!plugin.prototype.hasOwnProperty(key)) continue;
          var value = plugin.prototype[key];
          if (typeof value === 'function') {
            proto[key] = this.superWrapper(proto[key] || function () {}, value);
          }
          else {
            proto[key] = $.isPlainObject(value) ? $.extend(true, {}, proto[key], value) : value;
          }
        }
      }
      delete plugin.prototype;

      // Handle static properties.
      for (key in plugin) {
        if (!plugin.hasOwnProperty(key)) continue;
        value = plugin[key];
        if (typeof value === 'function') {
          constructor[key] = this.superWrapper(constructor[key] || function () {}, value);
        }
        else {
          constructor[key] = $.isPlainObject(value) ? $.extend(true, {}, constructor[key], value) : value;
        }
      }
    }
  };

  // Add Bootstrap to the global Drupal object.
  Drupal.bootstrap = Drupal.bootstrap || Bootstrap;

})(window._, window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * @class Attributes
   *
   * Modifies attributes.
   *
   * @param {Object|Attributes} attributes
   *   An object to initialize attributes with.
   */
  var Attributes = function (attributes) {
    this.data = {};
    this.data['class'] = [];
    this.merge(attributes);
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @return {String}
   *   A rendered string suitable for inclusion in HTML markup.
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Renders the Attributes object as a plain object.
   *
   * @return {Object}
   *   A plain object suitable for inclusion in DOM elements.
   */
  Attributes.prototype.toPlainObject = function () {
    var object = {};
    var name, value;
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      object[name] = value;
    }
    return object;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var args = Array.prototype.slice.call(arguments);
    this.data['class'] = this.sanitizeClasses(this.data['class'].concat(args));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @return {Object}
   */
  Attributes.prototype.getData = function () {
    return _.extend({}, this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    return this.get('class', []);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} className
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (className) {
    className = this.sanitizeClasses(Array.prototype.slice.call(arguments));
    var classes = this.getClasses();
    for (var i = 0, l = className.length; i < l; i++) {
      // If one of the classes fails, immediately return false.
      if (_.indexOf(classes, className[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {Attributes|Node|jQuery|Object} object
   *   An Attributes object with existing data, a Node DOM element, a jQuery
   *   instance or a plain object where the key is the attribute name and the
   *   value is the attribute value.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (object, recursive) {
    // Immediately return if there is nothing to merge.
    if (!object) {
      return this;
    }

    // Get attributes from a jQuery element.
    if (object instanceof $) {
      object = object[0];
    }

    // Get attributes from a DOM element.
    if (object instanceof Node) {
      object = Array.prototype.slice.call(object.attributes).reduce(function (attributes, attribute) {
        attributes[attribute.name] = attribute.value;
        return attributes;
      }, {});
    }
    // Get attributes from an Attributes instance.
    else if (object instanceof Attributes) {
      object = object.getData();
    }
    // Otherwise, clone the object.
    else {
      object = _.extend({}, object);
    }

    // By this point, there should be a valid plain object.
    if (!$.isPlainObject(object)) {
      setTimeout(function () {
        throw new Error('Passed object is not supported: ' + object);
      });
      return this;
    }

    // Handle classes separately.
    if (object && object['class'] !== void 0) {
      this.addClass(object['class']);
      delete object['class'];
    }

    if (recursive === void 0 || recursive) {
      this.data = $.extend(true, {}, this.data, object);
    }
    else {
      this.data = $.extend({}, this.data, object);
    }

    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {...string|Array} className
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (className) {
    var remove = this.sanitizeClasses(Array.prototype.slice.apply(arguments));
    this.data['class'] = _.without(this.getClasses(), remove);
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(this.sanitizeClasses(oldValue), classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Ensures classes are flattened into a single is an array and sanitized.
   *
   * @param {...String|Array} classes
   *   The class or classes to sanitize.
   *
   * @return {Array}
   *   A sanitized array of classes.
   */
  Attributes.prototype.sanitizeClasses = function (classes) {
    return _.chain(Array.prototype.slice.call(arguments))
      // Flatten in case there's a mix of strings and arrays.
      .flatten()

      // Split classes that may have been added with a space as a separator.
      .map(function (string) {
        return string.split(' ');
      })

      // Flatten again since it was just split into arrays.
      .flatten()

      // Filter out empty items.
      .filter()

      // Clean the class to ensure it's a valid class name.
      .map(function (value) {
        return Attributes.cleanClass(value);
      })

      // Ensure classes are unique.
      .uniq()

      // Retrieve the final value.
      .value();
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    var obj = $.isPlainObject(name) ? name : {};
    if (typeof name === 'string') {
      obj[name] = value;
    }
    return this.merge(obj);
  };

  /**
   * Prepares a string for use as a CSS identifier (element, class, or ID name).
   *
   * Note: this is essentially a direct copy from
   * \Drupal\Component\Utility\Html::cleanCssIdentifier
   *
   * @param {string} identifier
   *   The identifier to clean.
   * @param {Object} [filter]
   *   An object of string replacements to use on the identifier.
   *
   * @return {string}
   *   The cleaned identifier.
   */
  Attributes.cleanClass = function (identifier, filter) {
    filter = filter || {
      ' ': '-',
      '_': '-',
      '/': '-',
      '[': '-',
      ']': ''
    };

    identifier = identifier.toLowerCase();

    if (filter['__'] === void 0) {
      identifier = identifier.replace('__', '#DOUBLE_UNDERSCORE#');
    }

    identifier = identifier.replace(Object.keys(filter), Object.keys(filter).map(function(key) { return filter[key]; }));

    if (filter['__'] === void 0) {
      identifier = identifier.replace('#DOUBLE_UNDERSCORE#', '__');
    }

    identifier = identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g, '');
    identifier = identifier.replace(['/^[0-9]/', '/^(-[0-9])|^(--)/'], ['_', '__']);

    return identifier;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} [attributes]
   *   An object to initialize attributes with.
   *
   * @return {Attributes}
   *   An Attributes instance.
   *
   * @constructor
   */
  Attributes.create = function (attributes) {
    return new Attributes(attributes);
  };

  window.Attributes = Attributes;

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap, Attributes) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes.create(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme('bootstrapIcon', 'refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes.create(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }

      // Attempt to, intelligently, provide a default button "type".
      if (!attributes.exists('type')) {
        attributes.set('type', attributes.hasClass('form-submit') ? 'submit' : 'button');
      }

      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
 * @file
 * Extends methods from core/misc/form.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Behavior for "forms_has_error_value_toggle" theme setting.
   */
  Drupal.behaviors.bootstrapForm = {
    attach: function (context) {
      if (drupalSettings.bootstrap && drupalSettings.bootstrap.forms_has_error_value_toggle) {
        var $context = $(context);
        $context.find('.form-item.has-error:not(.form-type-password.has-feedback)').once('error').each(function () {
          var $formItem = $(this);
          var $input = $formItem.find(':input');
          $input.on('keyup focus blur', function () {
            if (this.defaultValue !== void 0) {
              $formItem[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('has-error');
              $input[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('error');
            }
          });
        });
      }
    }
  };


})(jQuery, this, Drupal, drupalSettings);
;
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});;
!function(a){Drupal.behaviors.textareaAutogrow={attach:function(o,t){a(".form-control--autogrow",o).once("textareaAutogrow").each(function(){autosize.destroy(a(".form-control--autogrow")),autosize(a(".form-control--autogrow")),autosize.update(a(".form-control--autogrow"))})}},Drupal.behaviors.textareaFocus={attach:function(o,t){a("textarea:last").focusin(function(){a(this).parents(".main-container").toggleClass("open-keyboard")}),a("textarea:last").focusout(function(){a(this).parents(".main-container").toggleClass("open-keyboard")})}}}(jQuery);;
/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
;
!function(a){Drupal.behaviors.navbarCollapse={attach:function(n,o){a(".dropdown-toggle, #content").on("click",function(){a(".navbar-collapse").collapse("hide")})}}}(jQuery);;
!function(e){Drupal.behaviors.navbarProfileDropdown={attach:function(n,o){function a(){900<=window.innerWidth?e(".dropdown-menu",".dropdown.profile.not-logged-in").removeClass().addClass("menu nav navbar-nav"):e(".menu.nav.navbar-nav",".dropdown.profile.not-logged-in").removeClass().addClass("dropdown-menu")}a(),e(window).resize(_.debounce(function(){a()},500))}}}(jQuery);;
!function(a){Drupal.behaviors.initNavbarSearch={attach:function(e,o){a(".navbar__open-search-block").on("click",function(e){e.preventDefault(),a("body").addClass("mode-search"),a(".search-take-over .form-text").focus()}),a(".btn--close-search-take-over").on("click",function(){a("body").removeClass("mode-search"),a(".search-take-over .form-text").blur()}),a("body").keydown(function(e){27==e.keyCode&&(a("body").removeClass("mode-search"),a(".search-take-over .form-text").blur())})}}}(jQuery);;
!function(n){Drupal.behaviors.navbarMainMenu={attach:function(a,e){n(".menu-main > .main > .expanded > .dropdown-menu > .expanded > a").removeAttr("data-toggle").removeClass("dropdown-toggle")}}}(jQuery);;
!function(n,l){function i(){}window.likeAndDislikeService=(i.vote=function(t,a,i){n.ajax({type:"GET",url:drupalSettings.path.baseUrl+"like_and_dislike/"+a+"/"+i+"/"+t,success:function(i){n("#like-container-"+a+"-"+t+" a").get(0).className=i.operation.like,n("#dislike-container-"+a+"-"+t+" a").get(0).className=i.operation.dislike;var e=l.formatPlural(i.likes,"@count like","@count likes");n("#like-container-"+a+"-"+t).nextAll(".vote__count").find("a").html(e).attr("data-dialog-options",'{"title":"'+e+'", "width":"auto"}')}})},i)}(jQuery,Drupal);;
(function ($, Drupal) {

  Drupal.behaviors.tooltip = {
    attach: function (context, settings) {

      var tag = $('.profile-organization-tag');

      tag.on('mouseenter', (event) => {
        $(event.currentTarget).addClass('open');
      });

      tag.on('mouseout', (event) => {
        $(event.currentTarget).removeClass('open');
      });
    }
  }

})(jQuery, Drupal);
;
/**
 * @file
 * Bootstrap Popovers.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  var $document = $(document);

  /**
   * Extend the Bootstrap Popover plugin constructor class.
   */
  Bootstrap.extendPlugin('popover', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.popover_animation,
        autoClose: !!settings.popover_auto_close,
        enabled: settings.popover_enabled,
        html: !!settings.popover_html,
        placement: settings.popover_placement,
        selector: settings.popover_selector,
        trigger: settings.popover_trigger,
        title: settings.popover_title,
        content: settings.popover_content,
        delay: parseInt(settings.popover_delay, 10),
        container: settings.popover_container
      }
    };
  });

  /**
   * Bootstrap Popovers.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapPopovers = {
    $activePopover: null,
    attach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      var _this = this;

      $document
        .on('show.bs.popover', '[data-toggle=popover]', function () {
          var $trigger = $(this);
          var popover = $trigger.data('bs.popover');

          // Only keep track of clicked triggers that we're manually handling.
          if (popover.options.originalTrigger === 'click') {
            if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($trigger)) {
              _this.$activePopover.popover('hide');
            }
            _this.$activePopover = $trigger;
          }
        })
        // Unfortunately, :focusable is only made available when using jQuery
        // UI. While this would be the most semantic pseudo selector to use
        // here, jQuery UI may not always be loaded. Instead, just use :visible
        // here as this just needs some sort of selector here. This activates
        // delegate binding to elements in jQuery so it can work it's bubbling
        // focus magic since elements don't really propagate their focus events.
        // @see https://www.drupal.org/project/bootstrap/issues/3013236
        .on('focus.bs.popover', ':visible', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($target) && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('click.bs.popover', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('keyup.bs.popover', function (e) {
          if (_this.$activePopover && _this.getOption('autoClose') && e.which === 27) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
      ;

      var elements = $(context).find('[data-toggle=popover]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());

        // Store the original trigger.
        options.originalTrigger = options.trigger;

        // If the trigger is "click", then we'll handle it manually here.
        if (options.trigger === 'click') {
          options.trigger = 'manual';
        }

        // Retrieve content from a target element.
        var target = options.target || $element.is('a[href^="#"]') && $element.attr('href');
        var $target = $document.find(target).clone();
        if (!options.content && $target[0]) {
          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
        }

        // Initialize the popover.
        $element.popover(options);

        // Handle clicks manually.
        if (options.originalTrigger === 'click') {
          // To ensure the element is bound multiple times, remove any
          // previously set event handler before adding another one.
          $element
            .off('click.drupal.bootstrap.popover')
            .on('click.drupal.bootstrap.popover', function (e) {
              $(this).popover('toggle');
              e.preventDefault();
              e.stopPropagation();
            })
          ;
        }
      }
    },
    detach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Destroy all popovers.
      $(context).find('[data-toggle="popover"]')
        .off('click.drupal.bootstrap.popover')
        .popover('destroy')
      ;
    },
    getOption: function(name, defaultValue, element) {
      var $element = element ? $(element) : this.$activePopover;
      var options = $.extend(true, {}, $.fn.popover.Constructor.DEFAULTS, ($element && $element.data('bs.popover') || {}).options);
      if (options[name] !== void 0) {
        return options[name];
      }
      return defaultValue !== void 0 ? defaultValue : void 0;
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(d,r){"object"===typeof exports&&"undefined"!==typeof module?r(exports):"function"===typeof define&&define.amd?define(["exports"],r):(d=d||self,r(d.React={}))})(this,function(d){function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function w(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca}function da(){}function L(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca}function ea(a,b,c){var g,e={},fa=null,d=null;if(null!=b)for(g in void 0!==b.ref&&(d=b.ref),void 0!==b.key&&(fa=""+b.key),b)ha.call(b,g)&&!ia.hasOwnProperty(g)&&(e[g]=b[g]);var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){for(var k=Array(h),f=0;f<h;f++)k[f]=arguments[f+2];e.children=k}if(a&&a.defaultProps)for(g in h=a.defaultProps,
h)void 0===e[g]&&(e[g]=h[g]);return{$$typeof:x,type:a,key:fa,ref:d,props:e,_owner:M.current}}function va(a,b){return{$$typeof:x,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===x}function wa(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ja(a,b,c,g){if(C.length){var e=C.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=g;e.count=0;return e}return{result:a,keyPrefix:b,func:c,
context:g,count:0}}function ka(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>C.length&&C.push(a)}function O(a,b,c,g){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var d=!1;if(null===a)d=!0;else switch(e){case "string":case "number":d=!0;break;case "object":switch(a.$$typeof){case x:case xa:d=!0}}if(d)return c(g,a,""===b?"."+P(a,0):b),1;d=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){e=a[f];var h=b+P(e,f);d+=O(e,h,c,g)}else if(null===a||
"object"!==typeof a?h=null:(h=la&&a[la]||a["@@iterator"],h="function"===typeof h?h:null),"function"===typeof h)for(a=h.call(a),f=0;!(e=a.next()).done;)e=e.value,h=b+P(e,f++),d+=O(e,h,c,g);else if("object"===e)throw c=""+a,Error(r(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return d}function Q(a,b,c){return null==a?0:O(a,"",b,c)}function P(a,b){return"object"===typeof a&&null!==a&&null!=a.key?wa(a.key):b.toString(36)}function ya(a,b,c){a.func.call(a.context,b,
a.count++)}function za(a,b,c){var g=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,g,c,function(a){return a}):null!=a&&(N(a)&&(a=va(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(ma,"$&/")+"/")+c)),g.push(a))}function R(a,b,c,g,e){var d="";null!=c&&(d=(""+c).replace(ma,"$&/")+"/");b=ja(b,d,g,e);Q(a,za,b);ka(b)}function t(){var a=na.current;if(null===a)throw Error(r(321));return a}function S(a,b){var c=a.length;a.push(b);a:for(;;){var g=c-1>>>1,e=a[g];if(void 0!==
e&&0<D(e,b))a[g]=b,a[c]=e,c=g;else break a}}function n(a){a=a[0];return void 0===a?null:a}function E(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var g=0,e=a.length;g<e;){var d=2*(g+1)-1,f=a[d],h=d+1,k=a[h];if(void 0!==f&&0>D(f,c))void 0!==k&&0>D(k,f)?(a[g]=k,a[h]=c,g=h):(a[g]=f,a[d]=c,g=d);else if(void 0!==k&&0>D(k,c))a[g]=k,a[h]=c,g=h;else break a}}return b}return null}function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function F(a){for(var b=n(u);null!==
b;){if(null===b.callback)E(u);else if(b.startTime<=a)E(u),b.sortIndex=b.expirationTime,S(p,b);else break;b=n(u)}}function T(a){y=!1;F(a);if(!v)if(null!==n(p))v=!0,z(U);else{var b=n(u);null!==b&&G(T,b.startTime-a)}}function U(a,b){v=!1;y&&(y=!1,V());H=!0;var c=m;try{F(b);for(l=n(p);null!==l&&(!(l.expirationTime>b)||a&&!W());){var g=l.callback;if(null!==g){l.callback=null;m=l.priorityLevel;var e=g(l.expirationTime<=b);b=q();"function"===typeof e?l.callback=e:l===n(p)&&E(p);F(b)}else E(p);l=n(p)}if(null!==
l)var d=!0;else{var f=n(u);null!==f&&G(T,f.startTime-b);d=!1}return d}finally{l=null,m=c,H=!1}}function oa(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var f="function"===typeof Symbol&&Symbol.for,x=f?Symbol.for("react.element"):60103,xa=f?Symbol.for("react.portal"):60106,Aa=f?Symbol.for("react.fragment"):60107,Ba=f?Symbol.for("react.strict_mode"):60108,Ca=f?Symbol.for("react.profiler"):60114,Da=f?Symbol.for("react.provider"):60109,
Ea=f?Symbol.for("react.context"):60110,Fa=f?Symbol.for("react.forward_ref"):60112,Ga=f?Symbol.for("react.suspense"):60113,Ha=f?Symbol.for("react.memo"):60115,Ia=f?Symbol.for("react.lazy"):60116,la="function"===typeof Symbol&&Symbol.iterator,pa=Object.getOwnPropertySymbols,Ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,I=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+
String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var g,e=1;e<arguments.length;e++){var d=Object(arguments[e]);
for(var f in d)Ja.call(d,f)&&(c[f]=d[f]);if(pa){g=pa(d);for(var h=0;h<g.length;h++)Ka.call(d,g[h])&&(c[g[h]]=d[g[h]])}}return c},ca={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,b,c,d){}},ba={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(r(85));this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=
function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};da.prototype=w.prototype;f=L.prototype=new da;f.constructor=L;I(f,w.prototype);f.isPureReactComponent=!0;var M={current:null},ha=Object.prototype.hasOwnProperty,ia={key:!0,ref:!0,__self:!0,__source:!0},ma=/\/+/g,C=[],na={current:null},X;if("undefined"===typeof window||"function"!==typeof MessageChannel){var A=null,qa=null,ra=function(){if(null!==A)try{var a=q();A(!0,a);A=null}catch(b){throw setTimeout(ra,0),b;}},La=Date.now();var q=
function(){return Date.now()-La};var z=function(a){null!==A?setTimeout(z,0,a):(A=a,setTimeout(ra,0))};var G=function(a,b){qa=setTimeout(a,b)};var V=function(){clearTimeout(qa)};var W=function(){return!1};f=X=function(){}}else{var Y=window.performance,sa=window.Date,Ma=window.setTimeout,Na=window.clearTimeout;"undefined"!==typeof console&&(f=window.cancelAnimationFrame,"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof Y&&"function"===typeof Y.now)q=function(){return Y.now()};else{var Oa=sa.now();q=function(){return sa.now()-Oa}}var J=!1,K=null,Z=-1,ta=5,ua=0;W=function(){return q()>=ua};f=function(){};X=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):
ta=0<a?Math.floor(1E3/a):5};var B=new MessageChannel,aa=B.port2;B.port1.onmessage=function(){if(null!==K){var a=q();ua=a+ta;try{K(!0,a)?aa.postMessage(null):(J=!1,K=null)}catch(b){throw aa.postMessage(null),b;}}else J=!1};z=function(a){K=a;J||(J=!0,aa.postMessage(null))};G=function(a,b){Z=Ma(function(){a(q())},b)};V=function(){Na(Z);Z=-1}}var p=[],u=[],Pa=1,l=null,m=3,H=!1,v=!1,y=!1,Qa=0;B={ReactCurrentDispatcher:na,ReactCurrentOwner:M,IsSomeRendererActing:{current:!1},assign:I};I(B,{Scheduler:{__proto__:null,
unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=m;m=a;try{return b()}finally{m=c}},unstable_next:function(a){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var c=m;m=b;try{return a()}finally{m=c}},unstable_scheduleCallback:function(a,b,c){var d=q();if("object"===typeof c&&null!==c){var e=c.delay;
e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:oa(a)}else c=oa(a),e=d;c=e+c;a={id:Pa++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,S(u,a),null===n(p)&&a===n(u)&&(y?V():y=!0,G(T,e-d))):(a.sortIndex=c,S(p,a),v||H||(v=!0,z(U)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=m;return function(){var c=m;m=b;try{return a.apply(this,arguments)}finally{m=c}}},unstable_getCurrentPriorityLevel:function(){return m},
unstable_shouldYield:function(){var a=q();F(a);var b=n(p);return b!==l&&null!==l&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<l.expirationTime||W()},unstable_requestPaint:f,unstable_continueExecution:function(){v||H||(v=!0,z(U))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return n(p)},get unstable_now(){return q},get unstable_forceFrameRate(){return X},unstable_Profiling:null},SchedulerTracing:{__proto__:null,__interactionsRef:null,__subscriberRef:null,
unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Qa},unstable_trace:function(a,b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},unstable_unsubscribe:function(a){}}});d.Children={map:function(a,b,c){if(null==a)return a;var d=[];R(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ja(null,null,b,c);Q(a,ya,b);ka(b)},count:function(a){return Q(a,function(){return null},null)},
toArray:function(a){var b=[];R(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(r(143));return a}};d.Component=w;d.Fragment=Aa;d.Profiler=Ca;d.PureComponent=L;d.StrictMode=Ba;d.Suspense=Ga;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B;d.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(r(267,a));var d=I({},a.props),e=a.key,f=a.ref,m=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,m=M.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var h=
a.type.defaultProps;for(k in b)ha.call(b,k)&&!ia.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==h?h[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){h=Array(k);for(var l=0;l<k;l++)h[l]=arguments[l+2];d.children=h}return{$$typeof:x,type:a.type,key:e,ref:f,props:d,_owner:m}};d.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:Ea,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Da,_context:a};return a.Consumer=
a};d.createElement=ea;d.createFactory=function(a){var b=ea.bind(null,a);b.type=a;return b};d.createRef=function(){return{current:null}};d.forwardRef=function(a){return{$$typeof:Fa,render:a}};d.isValidElement=N;d.lazy=function(a){return{$$typeof:Ia,_ctor:a,_status:-1,_result:null}};d.memo=function(a,b){return{$$typeof:Ha,type:a,compare:void 0===b?null:b}};d.useCallback=function(a,b){return t().useCallback(a,b)};d.useContext=function(a,b){return t().useContext(a,b)};d.useDebugValue=function(a,b){};
d.useEffect=function(a,b){return t().useEffect(a,b)};d.useImperativeHandle=function(a,b,c){return t().useImperativeHandle(a,b,c)};d.useLayoutEffect=function(a,b){return t().useLayoutEffect(a,b)};d.useMemo=function(a,b){return t().useMemo(a,b)};d.useReducer=function(a,b,c){return t().useReducer(a,b,c)};d.useRef=function(a){return t().useRef(a)};d.useState=function(a){return t().useState(a)};d.version="16.14.0"});
;
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(I,ea){"object"===typeof exports&&"undefined"!==typeof module?ea(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],ea):(I=I||self,ea(I.ReactDOM={},I.React))})(this,function(I,ea){function k(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function ji(a,b,c,d,e,f,g,h,m){yb=!1;gc=null;ki.apply(li,arguments)}function mi(a,b,c,d,e,f,g,h,m){ji.apply(this,arguments);if(yb){if(yb){var n=gc;yb=!1;gc=null}else throw Error(k(198));hc||(hc=!0,pd=n)}}function lf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=mf(c);mi(d,b,void 0,a);a.currentTarget=null}function nf(){if(ic)for(var a in cb){var b=cb[a],c=ic.indexOf(a);if(!(-1<c))throw Error(k(96,a));if(!jc[c]){if(!b.extractEvents)throw Error(k(97,a));jc[c]=b;c=b.eventTypes;for(var d in c){var e=
void 0;var f=c[d],g=b,h=d;if(qd.hasOwnProperty(h))throw Error(k(99,h));qd[h]=f;var m=f.phasedRegistrationNames;if(m){for(e in m)m.hasOwnProperty(e)&&of(m[e],g,h);e=!0}else f.registrationName?(of(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(k(98,d,a));}}}}function of(a,b,c){if(db[a])throw Error(k(100,a));db[a]=b;rd[a]=b.eventTypes[c].dependencies}function pf(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!cb.hasOwnProperty(c)||cb[c]!==d){if(cb[c])throw Error(k(102,c));cb[c]=
d;b=!0}}b&&nf()}function qf(a){if(a=rf(a)){if("function"!==typeof sd)throw Error(k(280));var b=a.stateNode;b&&(b=td(b),sd(a.stateNode,a.type,b))}}function sf(a){eb?fb?fb.push(a):fb=[a]:eb=a}function tf(){if(eb){var a=eb,b=fb;fb=eb=null;qf(a);if(b)for(a=0;a<b.length;a++)qf(b[a])}}function ud(){if(null!==eb||null!==fb)vd(),tf()}function uf(a,b,c){if(wd)return a(b,c);wd=!0;try{return vf(a,b,c)}finally{wd=!1,ud()}}function ni(a){if(wf.call(xf,a))return!0;if(wf.call(yf,a))return!1;if(oi.test(a))return xf[a]=
!0;yf[a]=!0;return!1}function pi(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function qi(a,b,c,d){if(null===b||"undefined"===typeof b||pi(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function L(a,
b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}function xd(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qi(b,c,e,d)&&(c=null),d||null===e?ni(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,
d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}function zb(a){if(null===a||"object"!==typeof a)return null;a=zf&&a[zf]||a["@@iterator"];return"function"===typeof a?a:null}function ri(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}function na(a){if(null==a)return null;
if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ma:return"Fragment";case gb:return"Portal";case kc:return"Profiler";case Af:return"StrictMode";case lc:return"Suspense";case yd:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Bf:return"Context.Consumer";case Cf:return"Context.Provider";case zd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Ad:return na(a.type);
case Df:return na(a.render);case Ef:if(a=1===a._status?a._result:null)return na(a)}return null}function Bd(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=na(a.type);c=null;d&&(c=na(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(si,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function va(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;
default:return""}}function Ff(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function ti(a){var b=Ff(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,
b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}}function mc(a){a._valueTracker||(a._valueTracker=ti(a))}function Gf(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ff(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Cd(a,b){var c=b.checked;return M({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=
c?c:a._wrapperState.initialChecked})}function Hf(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=va(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function If(a,b){b=b.checked;null!=b&&xd(a,"checked",b,!1)}function Dd(a,b){If(a,b);var c=va(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==
""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ed(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ed(a,b.type,va(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function Jf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=
b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function Ed(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function ui(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Fd(a,b){a=M({children:void 0},b);if(b=ui(b.children))a.children=b;return a}function hb(a,b,c,d){a=a.options;if(b){b={};
for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+va(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Gd(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(k(91));return M({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}
function Kf(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(k(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(k(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:va(c)}}function Lf(a,b){var c=va(b.value),d=va(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Mf(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==
b&&null!==b&&(a.value=b)}function Nf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hd(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function nc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function oc(a){if(Id[a])return Id[a];
if(!ib[a])return a;var b=ib[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Of)return Id[a]=b[c];return a}function Jd(a){var b=Pf.get(a);void 0===b&&(b=new Map,Pf.set(a,b));return b}function Na(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Qf(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Rf(a){if(Na(a)!==
a)throw Error(k(188));}function vi(a){var b=a.alternate;if(!b){b=Na(a);if(null===b)throw Error(k(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Rf(e),a;if(f===d)return Rf(e),b;f=f.sibling}throw Error(k(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=
f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(k(189));}}if(c.alternate!==d)throw Error(k(190));}if(3!==c.tag)throw Error(k(188));return c.stateNode.current===c?a:b}function Sf(a){a=vi(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function jb(a,b){if(null==
b)throw Error(k(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Kd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function pc(a){null!==a&&(Ab=jb(Ab,a));a=Ab;Ab=null;if(a){Kd(a,wi);if(Ab)throw Error(k(95));if(hc)throw a=pd,hc=!1,pd=null,a;}}function Ld(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:
a}function Tf(a){if(!wa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Uf(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>qc.length&&qc.push(a)}function Vf(a,b,c,d){if(qc.length){var e=qc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}function Wf(a){var b=
a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Bb(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Ld(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,m=0;m<jc.length;m++){var n=jc[m];n&&(n=n.extractEvents(d,b,f,e,g))&&(h=jb(h,n))}pc(h)}}function Md(a,
b,c){if(!c.has(a)){switch(a){case "scroll":Cb(b,"scroll",!0);break;case "focus":case "blur":Cb(b,"focus",!0);Cb(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":Tf(a)&&Cb(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Db.indexOf(a)&&w(a,b)}c.set(a,null)}}function xi(a,b){var c=Jd(b);Nd.forEach(function(a){Md(a,b,c)});yi.forEach(function(a){Md(a,b,c)})}function Od(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,
container:d}}function Xf(a,b){switch(a){case "focus":case "blur":xa=null;break;case "dragenter":case "dragleave":ya=null;break;case "mouseover":case "mouseout":za=null;break;case "pointerover":case "pointerout":Eb.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fb.delete(b.pointerId)}}function Gb(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Od(b,c,d,e,f),null!==b&&(b=Hb(b),null!==b&&Yf(b)),a;a.eventSystemFlags|=d;return a}function zi(a,b,c,d,e){switch(b){case "focus":return xa=
Gb(xa,a,b,c,d,e),!0;case "dragenter":return ya=Gb(ya,a,b,c,d,e),!0;case "mouseover":return za=Gb(za,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Eb.set(f,Gb(Eb.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fb.set(f,Gb(Fb.get(f)||null,a,b,c,d,e)),!0}return!1}function Ai(a){var b=Bb(a.target);if(null!==b){var c=Na(b);if(null!==c)if(b=c.tag,13===b){if(b=Qf(c),null!==b){a.blockedOn=b;Pd(a.priority,function(){Bi(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=
3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function rc(a){if(null!==a.blockedOn)return!1;var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Hb(b);null!==c&&Yf(c);a.blockedOn=b;return!1}return!0}function Zf(a,b,c){rc(a)&&c.delete(b)}function Ci(){for(Rd=!1;0<fa.length;){var a=fa[0];if(null!==a.blockedOn){a=Hb(a.blockedOn);null!==a&&Di(a);break}var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:fa.shift()}null!==
xa&&rc(xa)&&(xa=null);null!==ya&&rc(ya)&&(ya=null);null!==za&&rc(za)&&(za=null);Eb.forEach(Zf);Fb.forEach(Zf)}function Ib(a,b){a.blockedOn===b&&(a.blockedOn=null,Rd||(Rd=!0,$f(ag,Ci)))}function bg(a){if(0<fa.length){Ib(fa[0],a);for(var b=1;b<fa.length;b++){var c=fa[b];c.blockedOn===a&&(c.blockedOn=null)}}null!==xa&&Ib(xa,a);null!==ya&&Ib(ya,a);null!==za&&Ib(za,a);b=function(b){return Ib(b,a)};Eb.forEach(b);Fb.forEach(b);for(b=0;b<Jb.length;b++)c=Jb[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Jb.length&&
(b=Jb[0],null===b.blockedOn);)Ai(b),null===b.blockedOn&&Jb.shift()}function Sd(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Td.set(d,b);cg.set(d,f);dg[e]=f}}function w(a,b){Cb(b,a,!1)}function Cb(a,b,c){var d=Td.get(b);switch(void 0===d?2:d){case 0:d=Ei.bind(null,b,1,a);break;case 1:d=Fi.bind(null,b,1,a);break;default:d=sc.bind(null,b,1,a)}c?a.addEventListener(b,
d,!0):a.addEventListener(b,d,!1)}function Ei(a,b,c,d){Oa||vd();var e=sc,f=Oa;Oa=!0;try{eg(e,a,b,c,d)}finally{(Oa=f)||ud()}}function Fi(a,b,c,d){Gi(Hi,sc.bind(null,a,b,c,d))}function sc(a,b,c,d){if(tc)if(0<fa.length&&-1<Nd.indexOf(a))a=Od(null,a,b,c,d),fa.push(a);else{var e=Qd(a,b,c,d);if(null===e)Xf(a,d);else if(-1<Nd.indexOf(a))a=Od(e,a,b,c,d),fa.push(a);else if(!zi(e,a,b,c,d)){Xf(a,d);a=Vf(a,d,null,b);try{uf(Wf,a)}finally{Uf(a)}}}}function Qd(a,b,c,d){c=Ld(d);c=Bb(c);if(null!==c){var e=Na(c);if(null===
e)c=null;else{var f=e.tag;if(13===f){c=Qf(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=Vf(a,d,c,b);try{uf(Wf,a)}finally{Uf(a)}return null}function fg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Kb.hasOwnProperty(a)&&Kb[a]?(""+b).trim():b+"px"}function gg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=fg(c,b[c],d);"float"===
c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function Ud(a,b){if(b){if(Ii[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(k(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(k(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(k(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(k(62,""));}}function Vd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function oa(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Jd(a);b=rd[b];for(var d=0;d<b.length;d++)Md(b[d],a,c)}function uc(){}function Wd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function hg(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ig(a,b){var c=hg(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,
offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=hg(c)}}function jg(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?jg(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function kg(){for(var a=window,b=Wd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Wd(a.document)}return b}
function Xd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function lg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Yd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&
null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function kb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function mg(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ng||c===Zd||c===$d){if(0===b)return a;b--}else c===og&&b++}a=a.previousSibling}return null}function Bb(a){var b=a[Aa];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Lb]||c[Aa]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=mg(a);null!==
a;){if(c=a[Aa])return c;a=mg(a)}return b}a=c;c=a.parentNode}return null}function Hb(a){a=a[Aa]||a[Lb];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(k(33));}function ae(a){return a[vc]||null}function pa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function pg(a,b){var c=a.stateNode;if(!c)return null;var d=td(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(k(231,b,typeof c));return c}function qg(a,b,c){if(b=pg(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a)}function Ji(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=pa(b);for(b=c.length;0<b--;)qg(c[b],
"captured",a);for(b=0;b<c.length;b++)qg(c[b],"bubbled",a)}}function be(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=pg(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a))}function Ki(a){a&&a.dispatchConfig.registrationName&&be(a._targetInst,null,a)}function lb(a){Kd(a,Ji)}function rg(){if(wc)return wc;var a,b=ce,c=b.length,d,e="value"in Ba?Ba.value:Ba.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=
c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return wc=e.slice(a,1<d?1-d:void 0)}function xc(){return!0}function yc(){return!1}function R(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?xc:yc;this.isPropagationStopped=yc;return this}function Li(a,b,c,d){if(this.eventPool.length){var e=
this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function Mi(a){if(!(a instanceof this))throw Error(k(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function sg(a){a.eventPool=[];a.getPooled=Li;a.release=Mi}function tg(a,b){switch(a){case "keyup":return-1!==Ni.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function ug(a){a=a.detail;return"object"===typeof a&&"data"in
a?a.data:null}function Oi(a,b){switch(a){case "compositionend":return ug(b);case "keypress":if(32!==b.which)return null;vg=!0;return wg;case "textInput":return a=b.data,a===wg&&vg?null:a;default:return null}}function Pi(a,b){if(mb)return"compositionend"===a||!de&&tg(a,b)?(a=rg(),wc=ce=Ba=null,mb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return xg&&"ko"!==b.locale?null:b.data;default:return null}}function yg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qi[a.type]:"textarea"===b?!0:!1}function zg(a,b,c){a=R.getPooled(Ag.change,a,b,c);a.type="change";sf(c);lb(a);return a}function Ri(a){pc(a)}function zc(a){var b=Pa(a);if(Gf(b))return a}function Si(a,b){if("change"===a)return b}function Bg(){Mb&&(Mb.detachEvent("onpropertychange",Cg),Nb=Mb=null)}function Cg(a){if("value"===a.propertyName&&
zc(Nb))if(a=zg(Nb,a,Ld(a)),Oa)pc(a);else{Oa=!0;try{ee(Ri,a)}finally{Oa=!1,ud()}}}function Ti(a,b,c){"focus"===a?(Bg(),Mb=b,Nb=c,Mb.attachEvent("onpropertychange",Cg)):"blur"===a&&Bg()}function Ui(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return zc(Nb)}function Vi(a,b){if("click"===a)return zc(b)}function Wi(a,b){if("input"===a||"change"===a)return zc(b)}function Xi(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Yi[a])?!!b[a]:!1}function fe(a){return Xi}
function Zi(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function Ob(a,b){if(Qa(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!$i.call(b,c[d])||!Qa(a[c[d]],b[c[d]]))return!1;return!0}function Dg(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(ge||null==nb||nb!==Wd(c))return null;c=nb;"selectionStart"in c&&Xd(c)?c={start:c.selectionStart,
end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Pb&&Ob(Pb,c)?null:(Pb=c,a=R.getPooled(Eg.select,he,a,b),a.type="select",a.target=nb,lb(a),a)}function Ac(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function q(a,b){0>ob||(a.current=ie[ob],ie[ob]=null,ob--)}function y(a,b,c){ob++;
ie[ob]=a.current;a.current=b}function pb(a,b){var c=a.type.contextTypes;if(!c)return Ca;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Fg(a,b,c){if(B.current!==Ca)throw Error(k(168));y(B,b);y(G,c)}
function Gg(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(k(108,na(b)||"Unknown",e));return M({},c,{},d)}function Bc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Ca;Ra=B.current;y(B,a);y(G,G.current);return!0}function Hg(a,b,c){var d=a.stateNode;if(!d)throw Error(k(169));c?(a=Gg(a,b,Ra),d.__reactInternalMemoizedMergedChildContext=a,q(G),q(B),y(B,a)):q(G);y(G,c)}function Cc(){switch(aj()){case Dc:return 99;
case Ig:return 98;case Jg:return 97;case Kg:return 96;case Lg:return 95;default:throw Error(k(332));}}function Mg(a){switch(a){case 99:return Dc;case 98:return Ig;case 97:return Jg;case 96:return Kg;case 95:return Lg;default:throw Error(k(332));}}function Da(a,b){a=Mg(a);return bj(a,b)}function Ng(a,b,c){a=Mg(a);return je(a,b,c)}function Og(a){null===qa?(qa=[a],Ec=je(Dc,Pg)):qa.push(a);return Qg}function ha(){if(null!==Ec){var a=Ec;Ec=null;Rg(a)}Pg()}function Pg(){if(!ke&&null!==qa){ke=!0;var a=0;
try{var b=qa;Da(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});qa=null}catch(c){throw null!==qa&&(qa=qa.slice(a+1)),je(Dc,ha),c;}finally{ke=!1}}}function Fc(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function aa(a,b){if(a&&a.defaultProps){b=M({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function le(){Gc=qb=Hc=null}function me(a){var b=Ic.current;q(Ic);a.type._context._currentValue=b}function Sg(a,b){for(;null!==a;){var c=
a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function rb(a,b){Hc=a;Gc=qb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(ia=!0),a.firstContext=null)}function W(a,b){if(Gc!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Gc=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===qb){if(null===
Hc)throw Error(k(308));qb=b;Hc.dependencies={expirationTime:0,firstContext:b,responders:null}}else qb=qb.next=b}return a._currentValue}function ne(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function oe(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function Ea(a,b){a={expirationTime:a,suspenseConfig:b,tag:Tg,payload:null,callback:null,next:null};return a.next=
a}function Fa(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}function Ug(a,b){var c=a.alternate;null!==c&&oe(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}function Qb(a,b,c,d){var e=a.updateQueue;Ga=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&
(h.baseQueue=g))}if(null!==f){h=f.next;var m=e.baseState,n=0,k=null,ba=null,l=null;if(null!==h){var p=h;do{g=p.expirationTime;if(g<d){var t={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===l?(ba=l=t,k=m):l=l.next=t;g>n&&(n=g)}else{null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null});Vg(g,p.suspenseConfig);a:{var q=a,r=p;g=b;t=c;switch(r.tag){case 1:q=
r.payload;if("function"===typeof q){m=q.call(t,m,g);break a}m=q;break a;case 3:q.effectTag=q.effectTag&-4097|64;case Tg:q=r.payload;g="function"===typeof q?q.call(t,m,g):q;if(null===g||void 0===g)break a;m=M({},m,g);break a;case Jc:Ga=!0}}null!==p.callback&&(a.effectTag|=32,g=e.effects,null===g?e.effects=[p]:g.push(p))}p=p.next;if(null===p||p===h)if(g=e.shared.pending,null===g)break;else p=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===l?k=m:l.next=ba;e.baseState=k;e.baseQueue=
l;Kc(n);a.expirationTime=n;a.memoizedState=m}}function Wg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(k(191,d));d.call(e)}}}function Lc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:M({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}function Xg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,
f,g):b.prototype&&b.prototype.isPureReactComponent?!Ob(c,d)||!Ob(e,f):!0}function Yg(a,b,c){var d=!1,e=Ca;var f=b.contextType;"object"===typeof f&&null!==f?f=W(f):(e=N(b)?Ra:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?pb(a,e):Ca);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Mc;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Zg(a,
b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Mc.enqueueReplaceState(b,b.state,null)}function pe(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=$g;ne(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=W(f):(f=N(b)?Ra:B.current,e.context=pb(a,f));Qb(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;
"function"===typeof f&&(Lc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Mc.enqueueReplaceState(e,e.state,null),Qb(a,c,e,d),e.state=a.memoizedState);"function"===
typeof e.componentDidMount&&(a.effectTag|=4)}function Rb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(k(309));var d=c.stateNode}if(!d)throw Error(k(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===$g&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(k(284));if(!c._owner)throw Error(k(290,
a));}return a}function Nc(a,b){if("textarea"!==a.type)throw Error(k(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}function ah(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,
b),b=b.sibling;return a}function e(a,b){a=Sa(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=qe(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function m(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Rb(a,b,c),d.return=a,d;d=Oc(c.type,
c.key,c.props,null,a.mode,d);d.ref=Rb(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=re(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ha(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function ba(a,b,c){if("string"===typeof b||"number"===typeof b)return b=qe(""+b,a.mode,c),b.return=a,b;if("object"===
typeof b&&null!==b){switch(b.$$typeof){case Pc:return c=Oc(b.type,b.key,b.props,null,a.mode,c),c.ref=Rb(a,null,b),c.return=a,c;case gb:return b=re(b,a.mode,c),b.return=a,b}if(Qc(b)||zb(b))return b=Ha(b,a.mode,c,null),b.return=a,b;Nc(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Pc:return c.key===e?c.type===Ma?l(a,b,c.props.children,d,e):m(a,b,c,
d):null;case gb:return c.key===e?n(a,b,c,d):null}if(Qc(c)||zb(c))return null!==e?null:l(a,b,c,d,null);Nc(a,c)}return null}function t(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Pc:return a=a.get(null===d.key?c:d.key)||null,d.type===Ma?l(b,a,d.props.children,e,d.key):m(b,a,d,e);case gb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(Qc(d)||zb(d))return a=a.get(c)||null,l(b,a,d,e,null);
Nc(b,d)}return null}function q(e,g,h,m){for(var n=null,k=null,l=g,r=g=0,C=null;null!==l&&r<h.length;r++){l.index>r?(C=l,l=null):C=l.sibling;var O=p(e,l,h[r],m);if(null===O){null===l&&(l=C);break}a&&l&&null===O.alternate&&b(e,l);g=f(O,g,r);null===k?n=O:k.sibling=O;k=O;l=C}if(r===h.length)return c(e,l),n;if(null===l){for(;r<h.length;r++)l=ba(e,h[r],m),null!==l&&(g=f(l,g,r),null===k?n=l:k.sibling=l,k=l);return n}for(l=d(e,l);r<h.length;r++)C=t(l,e,r,h[r],m),null!==C&&(a&&null!==C.alternate&&l.delete(null===
C.key?r:C.key),g=f(C,g,r),null===k?n=C:k.sibling=C,k=C);a&&l.forEach(function(a){return b(e,a)});return n}function w(e,g,h,n){var m=zb(h);if("function"!==typeof m)throw Error(k(150));h=m.call(h);if(null==h)throw Error(k(151));for(var l=m=null,r=g,C=g=0,O=null,v=h.next();null!==r&&!v.done;C++,v=h.next()){r.index>C?(O=r,r=null):O=r.sibling;var q=p(e,r,v.value,n);if(null===q){null===r&&(r=O);break}a&&r&&null===q.alternate&&b(e,r);g=f(q,g,C);null===l?m=q:l.sibling=q;l=q;r=O}if(v.done)return c(e,r),m;
if(null===r){for(;!v.done;C++,v=h.next())v=ba(e,v.value,n),null!==v&&(g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);return m}for(r=d(e,r);!v.done;C++,v=h.next())v=t(r,e,C,v.value,n),null!==v&&(a&&null!==v.alternate&&r.delete(null===v.key?C:v.key),g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);a&&r.forEach(function(a){return b(e,a)});return m}return function(a,d,f,h){var m="object"===typeof f&&null!==f&&f.type===Ma&&null===f.key;m&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case Pc:a:{n=
f.key;for(m=d;null!==m;){if(m.key===n){switch(m.tag){case 7:if(f.type===Ma){c(a,m.sibling);d=e(m,f.props.children);d.return=a;a=d;break a}break;default:if(m.elementType===f.type){c(a,m.sibling);d=e(m,f.props);d.ref=Rb(a,m,f);d.return=a;a=d;break a}}c(a,m);break}else b(a,m);m=m.sibling}f.type===Ma?(d=Ha(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Oc(f.type,f.key,f.props,null,a.mode,h),h.ref=Rb(a,d,f),h.return=a,a=h)}return g(a);case gb:a:{for(m=f.key;null!==d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===
f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=re(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=qe(f,a.mode,h),d.return=a,a=d),g(a);if(Qc(f))return q(a,d,f,h);if(zb(f))return w(a,d,f,h);n&&Nc(a,f);if("undefined"===typeof f&&!m)switch(a.tag){case 1:case 0:throw a=
a.type,Error(k(152,a.displayName||a.name||"Component"));}return c(a,d)}}function Ta(a){if(a===Sb)throw Error(k(174));return a}function se(a,b){y(Tb,b);y(Ub,a);y(ja,Sb);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Hd(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Hd(b,a)}q(ja);y(ja,b)}function tb(a){q(ja);q(Ub);q(Tb)}function bh(a){Ta(Tb.current);var b=Ta(ja.current);var c=Hd(b,a.type);b!==c&&(y(Ub,a),y(ja,c))}function te(a){Ub.current===
a&&(q(ja),q(Ub))}function Rc(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===$d||c.data===Zd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ue(a,b){return{responder:a,props:b}}
function S(){throw Error(k(321));}function ve(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Qa(a[c],b[c]))return!1;return!0}function we(a,b,c,d,e,f){Ia=f;z=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;Sc.current=null===a||null===a.memoizedState?dj:ej;a=c(d,e);if(b.expirationTime===Ia){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(k(301));f+=1;J=K=null;b.updateQueue=null;Sc.current=fj;a=c(d,e)}while(b.expirationTime===Ia)}Sc.current=Tc;b=null!==K&&null!==K.next;
Ia=0;J=K=z=null;Uc=!1;if(b)throw Error(k(300));return a}function ub(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===J?z.memoizedState=J=a:J=J.next=a;return J}function vb(){if(null===K){var a=z.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===J?z.memoizedState:J.next;if(null!==b)J=b,K=a;else{if(null===a)throw Error(k(310));K=a;a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===J?z.memoizedState=
J=a:J=J.next=a}return J}function Ua(a,b){return"function"===typeof b?b(a):b}function Vc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,m=e;do{var n=m.expirationTime;if(n<Ia){var l={expirationTime:m.expirationTime,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,
next:null};null===h?(g=h=l,f=d):h=h.next=l;n>z.expirationTime&&(z.expirationTime=n,Kc(n))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,next:null}),Vg(n,m.suspenseConfig),d=m.eagerReducer===a?m.eagerState:a(d,m.action);m=m.next}while(null!==m&&m!==e);null===h?f=d:h.next=g;Qa(d,b.memoizedState)||(ia=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,
c.dispatch]}function Wc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Qa(f,b.memoizedState)||(ia=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function xe(a){var b=ub();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Ua,
lastRenderedState:a};a=a.dispatch=ch.bind(null,z,a);return[b.memoizedState,a]}function ye(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=z.updateQueue;null===b?(b={lastEffect:null},z.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function dh(a){return vb().memoizedState}function ze(a,b,c,d){var e=ub();z.effectTag|=a;e.memoizedState=ye(1|b,c,void 0,void 0===d?null:d)}function Ae(a,b,c,d){var e=vb();
d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&ve(d,g.deps)){ye(b,c,f,d);return}}z.effectTag|=a;e.memoizedState=ye(1|b,c,f,d)}function eh(a,b){return ze(516,4,a,b)}function Xc(a,b){return Ae(516,4,a,b)}function fh(a,b){return Ae(4,2,a,b)}function gh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function hh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;
return Ae(4,2,gh.bind(null,b,a),c)}function Be(a,b){}function ih(a,b){ub().memoizedState=[a,void 0===b?null:b];return a}function Yc(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function jh(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Ce(a,b,c){var d=Cc();Da(98>d?98:d,function(){a(!0)});Da(97<d?97:d,function(){var d=
X.suspense;X.suspense=void 0===b?null:b;try{a(!1),c()}finally{X.suspense=d}})}function ch(a,b,c){var d=ka(),e=Vb.suspense;d=Va(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===z||null!==f&&f===z)Uc=!0,e.expirationTime=Ia,z.expirationTime=Ia;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.eagerReducer=f;e.eagerState=h;if(Qa(h,g))return}catch(m){}finally{}Ja(a,d)}}function kh(a,b){var c=la(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function lh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?
null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function De(a){if(Wa){var b=Ka;if(b){var c=b;if(!lh(a,b)){b=kb(c.nextSibling);if(!b||!lh(a,b)){a.effectTag=a.effectTag&-1025|2;Wa=!1;ra=a;return}kh(ra,c)}ra=a;Ka=kb(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Wa=!1,ra=a}}function mh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ra=a}function Zc(a){if(a!==ra)return!1;if(!Wa)return mh(a),Wa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==
b&&!Yd(b,a.memoizedProps))for(b=Ka;b;)kh(a,b),b=kb(b.nextSibling);mh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(k(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===og){if(0===b){Ka=kb(a.nextSibling);break a}b--}else c!==ng&&c!==Zd&&c!==$d||b++}a=a.nextSibling}Ka=null}}else Ka=ra?kb(a.stateNode.nextSibling):null;return!0}function Ee(){Ka=ra=null;Wa=!1}function T(a,b,c,d){b.child=null===a?Fe(b,null,c,d):wb(b,a.child,c,d)}function nh(a,
b,c,d,e){c=c.render;var f=b.ref;rb(b,e);d=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,d,e);return b.child}function oh(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ge(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ph(a,b,g,d,e,f);a=Oc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<
f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Ob,c(e,d)&&a.ref===b.ref))return sa(a,b,f);b.effectTag|=1;a=Sa(g,d);a.ref=b.ref;a.return=b;return b.child=a}function ph(a,b,c,d,e,f){return null!==a&&Ob(a.memoizedProps,d)&&a.ref===b.ref&&(ia=!1,e<f)?(b.expirationTime=a.expirationTime,sa(a,b,f)):He(a,b,c,d,f)}function qh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function He(a,b,c,d,e){var f=N(c)?Ra:B.current;f=pb(b,f);rb(b,e);c=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=
a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,c,e);return b.child}function rh(a,b,c,d,e){if(N(c)){var f=!0;Bc(b)}else f=!1;rb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Yg(b,c,d),pe(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var m=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n));var l=c.getDerivedStateFromProps,k="function"===
typeof l||"function"===typeof g.getSnapshotBeforeUpdate;k||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n);Ga=!1;var p=b.memoizedState;g.state=p;Qb(b,d,g,e);m=b.memoizedState;h!==d||p!==m||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),m=b.memoizedState),(h=Ga||Xg(b,c,h,d,p,m,n))?(k||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&
g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,oe(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:aa(b.type,h),m=g.context,n=c.contextType,"object"===typeof n&&null!==
n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n)),l=c.getDerivedStateFromProps,(k="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n),Ga=!1,m=b.memoizedState,g.state=m,Qb(b,d,g,e),p=b.memoizedState,h!==d||m!==p||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),p=b.memoizedState),(l=Ga||Xg(b,c,h,d,m,p,n))?(k||"function"!==typeof g.UNSAFE_componentWillUpdate&&
"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,p,n),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,p,n)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===
a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=p),g.props=d,g.state=p,g.context=n,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return Ie(a,b,c,d,f,e)}function Ie(a,b,c,d,e,f){qh(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hg(b,c,!1),sa(a,b,f);d=b.stateNode;gj.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?
null:d.render();b.effectTag|=1;null!==a&&g?(b.child=wb(b,a.child,null,f),b.child=wb(b,null,h,f)):T(a,b,h,f);b.memoizedState=d.state;e&&Hg(b,c,!0);return b.child}function sh(a){var b=a.stateNode;b.pendingContext?Fg(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Fg(a,b.context,!1);se(a,b.containerInfo)}function th(a,b,c){var d=b.mode,e=b.pendingProps,f=D.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===
a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);y(D,f&1);if(null===a){void 0!==e.fallback&&De(b);if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;b.memoizedState=Je;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Fe(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;
c=Sa(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sa(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=Je;b.child=c;return d}c=wb(b,a.child,e.children,c);b.memoizedState=null;return b.child=c}a=a.child;if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==
a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=Je;b.child=e;return c}b.memoizedState=null;return b.child=wb(b,a,e.children,c)}function uh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);Sg(a.return,b)}function Ke(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,
lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}function vh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;T(a,b,d.children,c);d=D.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&uh(a,c);else if(19===a.tag)uh(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===
a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(D,d);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Rc(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ke(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Rc(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ke(b,
!0,c,null,f,b.lastEffect);break;case "together":Ke(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}function sa(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Kc(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(k(153));if(null!==b.child){a=b.child;c=Sa(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sa(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function $c(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function hj(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return N(b.type)&&(q(G),q(B)),
null;case 3:return tb(),q(G),q(B),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Zc(b)||(b.effectTag|=4),wh(b),null;case 5:te(b);c=Ta(Tb.current);var e=b.type;if(null!==a&&null!=b.stateNode)ij(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(k(166));return null}a=Ta(ja.current);if(Zc(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Aa]=b;d[vc]=f;switch(e){case "iframe":case "object":case "embed":w("load",
d);break;case "video":case "audio":for(a=0;a<Db.length;a++)w(Db[a],d);break;case "source":w("error",d);break;case "img":case "image":case "link":w("error",d);w("load",d);break;case "form":w("reset",d);w("submit",d);break;case "details":w("toggle",d);break;case "input":Hf(d,f);w("invalid",d);oa(c,"onChange");break;case "select":d._wrapperState={wasMultiple:!!f.multiple};w("invalid",d);oa(c,"onChange");break;case "textarea":Kf(d,f),w("invalid",d),oa(c,"onChange")}Ud(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=
f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):db.hasOwnProperty(g)&&null!=h&&oa(c,g)}switch(e){case "input":mc(d);Jf(d,f,!0);break;case "textarea":mc(d);Mf(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=uc)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=Nf(e));"http://www.w3.org/1999/xhtml"===
a?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Aa]=b;a[vc]=d;jj(a,b,!1,!1);b.stateNode=a;g=Vd(e,d);switch(e){case "iframe":case "object":case "embed":w("load",a);h=d;break;case "video":case "audio":for(h=0;h<Db.length;h++)w(Db[h],a);h=d;break;case "source":w("error",a);
h=d;break;case "img":case "image":case "link":w("error",a);w("load",a);h=d;break;case "form":w("reset",a);w("submit",a);h=d;break;case "details":w("toggle",a);h=d;break;case "input":Hf(a,d);h=Cd(a,d);w("invalid",a);oa(c,"onChange");break;case "option":h=Fd(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=M({},d,{value:void 0});w("invalid",a);oa(c,"onChange");break;case "textarea":Kf(a,d);h=Gd(a,d);w("invalid",a);oa(c,"onChange");break;default:h=d}Ud(e,h);var m=h;for(f in m)if(m.hasOwnProperty(f)){var n=
m[f];"style"===f?gg(a,n):"dangerouslySetInnerHTML"===f?(n=n?n.__html:void 0,null!=n&&xh(a,n)):"children"===f?"string"===typeof n?("textarea"!==e||""!==n)&&Wb(a,n):"number"===typeof n&&Wb(a,""+n):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(db.hasOwnProperty(f)?null!=n&&oa(c,f):null!=n&&xd(a,f,n,g))}switch(e){case "input":mc(a);Jf(a,d,!1);break;case "textarea":mc(a);Mf(a);break;case "option":null!=d.value&&a.setAttribute("value",""+va(d.value));break;case "select":a.multiple=
!!d.multiple;c=d.value;null!=c?hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=uc)}lg(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)kj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(k(166));c=Ta(Tb.current);Ta(ja.current);Zc(b)?(c=b.stateNode,d=b.memoizedProps,c[Aa]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?
c:c.ownerDocument).createTextNode(d),c[Aa]=b,b.stateNode=c)}return null;case 13:q(D);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Zc(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||
0!==(D.current&1))F===Xa&&(F=ad);else{if(F===Xa||F===ad)F=bd;0!==Xb&&null!==U&&(Ya(U,P),yh(U,Xb))}if(c||d)b.effectTag|=4;return null;case 4:return tb(),wh(b),null;case 10:return me(b),null;case 17:return N(b.type)&&(q(G),q(B)),null;case 19:q(D);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)$c(d,!1);else{if(F!==Xa||null!==a&&0!==(a.effectTag&64))for(f=b.child;null!==f;){a=Rc(f);if(null!==a){b.effectTag|=64;$c(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=
e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,
e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;y(D,D.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=Rc(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),$c(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*Y()-d.renderingStartTime>d.tailExpiration&&
1<c&&(b.effectTag|=64,e=!0,$c(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=Y()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=Y(),c.sibling=null,b=D.current,y(D,e?b&1|2:b&1),c):null}throw Error(k(156,b.tag));}function lj(a,b){switch(a.tag){case 1:return N(a.type)&&(q(G),q(B)),b=a.effectTag,b&4096?
(a.effectTag=b&-4097|64,a):null;case 3:tb();q(G);q(B);b=a.effectTag;if(0!==(b&64))throw Error(k(285));a.effectTag=b&-4097|64;return a;case 5:return te(a),null;case 13:return q(D),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return q(D),null;case 4:return tb(),null;case 10:return me(a),null;default:return null}}function Le(a,b){return{value:a,source:b,stack:Bd(b)}}function Me(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bd(c));null!==c&&na(c.type);b=b.value;null!==a&&1===a.tag&&
na(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function mj(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Za(a,c)}}function zh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Za(a,c)}else b.current=null}function nj(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===
b.type?c:aa(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(k(163));}function Ah(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Bh(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function oj(a,b,c,d){switch(c.tag){case 0:case 11:case 15:case 22:Bh(3,
c);return;case 1:a=c.stateNode;c.effectTag&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:aa(c.type,b.memoizedProps),a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Wg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Wg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.effectTag&4&&lg(c.type,c.memoizedProps)&&
a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&bg(c))));return;case 19:case 17:case 20:case 21:return}throw Error(k(163));}function Ch(a,b,c){"function"===typeof Ne&&Ne(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;Da(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Za(g,
h)}}a=a.next}while(a!==d)})}break;case 1:zh(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&mj(b,c);break;case 5:zh(b);break;case 4:Dh(a,b,c)}}function Eh(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Eh(b)}function Fh(a){return 5===a.tag||3===a.tag||4===a.tag}function Gh(a){a:{for(var b=a.return;null!==
b;){if(Fh(b)){var c=b;break a}b=b.return}throw Error(k(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(k(161));}c.effectTag&16&&(Wb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Fh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;
else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Oe(a,c,b):Pe(a,c,b)}function Oe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=uc));else if(4!==d&&(a=a.child,null!==a))for(Oe(a,b,c),a=a.sibling;null!==a;)Oe(a,b,c),a=a.sibling}
function Pe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Pe(a,b,c),a=a.sibling;null!==a;)Pe(a,b,c),a=a.sibling}function Dh(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(k(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=
a,m=d,n=c,l=m;;)if(Ch(h,l,n),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===m)break a;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}g?(h=f,m=d.stateNode,8===h.nodeType?h.parentNode.removeChild(m):h.removeChild(m)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ch(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===
b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}function Qe(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Ah(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[vc]=d;"input"===a&&"radio"===d.type&&null!=d.name&&If(c,d);Vd(a,e);b=Vd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],
h=f[e+1];"style"===g?gg(c,h):"dangerouslySetInnerHTML"===g?xh(c,h):"children"===g?Wb(c,h):xd(c,g,h,b)}switch(a){case "input":Dd(c,d);break;case "textarea":Lf(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?hb(c,!!d.multiple,d.defaultValue,!0):hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(k(162));b.stateNode.nodeValue=b.memoizedProps;
return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,bg(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,Re=Y());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=fg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?
"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Hh(b);return;case 19:Hh(b);return;case 17:return}throw Error(k(163));}function Hh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=
new pj);b.forEach(function(b){var d=qj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Ih(a,b,c){c=Ea(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){cd||(cd=!0,Se=d);Me(a,b)};return c}function Jh(a,b,c){c=Ea(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Me(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&
(null===La?La=new Set([this]):La.add(this),Me(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ka(){return(p&(ca|ma))!==H?1073741821-(Y()/10|0):0!==dd?dd:dd=1073741821-(Y()/10|0)}function Va(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Cc();if(0===(b&4))return 99===d?1073741823:1073741822;if((p&ca)!==H)return P;if(null!==c)a=Fc(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=Fc(a,150,100);break;case 97:case 96:a=
Fc(a,5E3,250);break;case 95:a=2;break;default:throw Error(k(326));}null!==U&&a===P&&--a;return a}function ed(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&
(U===e&&(Kc(b),F===bd&&Ya(e,P)),yh(e,b));return e}function fd(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Kh(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}function V(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=Og(Te.bind(null,a));else{var b=fd(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=ka();
1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Qg&&Rg(c)}a.callbackExpirationTime=b;a.callbackPriority=d;b=1073741823===b?Og(Te.bind(null,a)):Ng(d,Lh.bind(null,a),{timeout:10*(1073741821-b)-Y()});a.callbackNode=b}}}function Lh(a,b){dd=0;if(b)return b=ka(),Ue(a,b),V(a),null;var c=fd(a);if(0!==c){b=a.callbackNode;if((p&(ca|ma))!==H)throw Error(k(327));
xb();a===U&&c===P||$a(a,c);if(null!==t){var d=p;p|=ca;var e=Mh();do try{rj();break}catch(h){Nh(a,h)}while(1);le();p=d;gd.current=e;if(F===hd)throw b=id,$a(a,c),Ya(a,c),V(a),b;if(null===t)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=F,U=null,d){case Xa:case hd:throw Error(k(345));case Oh:Ue(a,2<c?2:c);break;case ad:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(1073741823===ta&&(e=Re+Ph-Y(),10<e)){if(jd){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=
c;$a(a,c);break}}f=fd(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=We(ab.bind(null,a),e);break}ab(a);break;case bd:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(jd&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;$a(a,c);break}e=fd(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}1073741823!==Yb?d=10*(1073741821-Yb)-Y():1073741823===ta?d=0:(d=10*(1073741821-ta)-5E3,e=Y(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=
(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*sj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=We(ab.bind(null,a),d);break}ab(a);break;case Xe:if(1073741823!==ta&&null!==kd){f=ta;var g=kd;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=Y()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Ya(a,c);a.timeoutHandle=We(ab.bind(null,a),d);break}}ab(a);break;default:throw Error(k(329));}V(a);if(a.callbackNode===b)return Lh.bind(null,a)}}return null}function Te(a){var b=
a.lastExpiredTime;b=0!==b?b:1073741823;if((p&(ca|ma))!==H)throw Error(k(327));xb();a===U&&b===P||$a(a,b);if(null!==t){var c=p;p|=ca;var d=Mh();do try{tj();break}catch(e){Nh(a,e)}while(1);le();p=c;gd.current=d;if(F===hd)throw c=id,$a(a,b),Ya(a,b),V(a),c;if(null!==t)throw Error(k(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;ab(a);V(a)}return null}function uj(){if(null!==bb){var a=bb;bb=null;a.forEach(function(a,c){Ue(c,a);V(c)});ha()}}function Qh(a,b){var c=p;p|=1;try{return a(b)}finally{p=
c,p===H&&ha()}}function Rh(a,b){var c=p;p&=-2;p|=Ye;try{return a(b)}finally{p=c,p===H&&ha()}}function $a(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,vj(c));if(null!==t)for(c=t.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(q(G),q(B));break;case 3:tb();q(G);q(B);break;case 5:te(d);break;case 4:tb();break;case 13:q(D);break;case 19:q(D);break;case 10:me(d)}c=c.return}U=a;t=Sa(a.current,null);
P=b;F=Xa;id=null;Yb=ta=1073741823;kd=null;Xb=0;jd=!1}function Nh(a,b){do{try{le();Sc.current=Tc;if(Uc)for(var c=z.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}Ia=0;J=K=z=null;Uc=!1;if(null===t||null===t.return)return F=hd,id=b,t=null;a:{var e=a,f=t.return,g=t,h=b;b=P;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var m=h;if(0===(g.mode&2)){var n=g.alternate;n?(g.updateQueue=n.updateQueue,g.memoizedState=
n.memoizedState,g.expirationTime=n.expirationTime):(g.updateQueue=null,g.memoizedState=null)}var l=0!==(D.current&1),k=f;do{var p;if(p=13===k.tag){var q=k.memoizedState;if(null!==q)p=null!==q.dehydrated?!0:!1;else{var w=k.memoizedProps;p=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:l?!1:!0}}if(p){var y=k.updateQueue;if(null===y){var r=new Set;r.add(m);k.updateQueue=r}else y.add(m);if(0===(k.mode&2)){k.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var O=
Ea(1073741823,null);O.tag=Jc;Fa(g,O)}g.expirationTime=1073741823;break a}h=void 0;g=b;var v=e.pingCache;null===v?(v=e.pingCache=new wj,h=new Set,v.set(m,h)):(h=v.get(m),void 0===h&&(h=new Set,v.set(m,h)));if(!h.has(g)){h.add(g);var x=xj.bind(null,e,m,g);m.then(x,x)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);h=Error((na(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
Bd(g))}F!==Xe&&(F=Oh);h=Le(h,g);k=f;do{switch(k.tag){case 3:m=h;k.effectTag|=4096;k.expirationTime=b;var A=Ih(k,m,b);Ug(k,A);break a;case 1:m=h;var u=k.type,B=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof u.getDerivedStateFromError||null!==B&&"function"===typeof B.componentDidCatch&&(null===La||!La.has(B)))){k.effectTag|=4096;k.expirationTime=b;var H=Jh(k,m,b);Ug(k,H);break a}}k=k.return}while(null!==k)}t=Sh(t)}catch(cj){b=cj;continue}break}while(1)}function Mh(a){a=gd.current;gd.current=
Tc;return null===a?Tc:a}function Vg(a,b){a<ta&&2<a&&(ta=a);null!==b&&a<Yb&&2<a&&(Yb=a,kd=b)}function Kc(a){a>Xb&&(Xb=a)}function tj(){for(;null!==t;)t=Th(t)}function rj(){for(;null!==t&&!yj();)t=Th(t)}function Th(a){var b=zj(a.alternate,a,P);a.memoizedProps=a.pendingProps;null===b&&(b=Sh(a));Uh.current=null;return b}function Sh(a){t=a;do{var b=t.alternate;a=t.return;if(0===(t.effectTag&2048)){b=hj(b,t,P);if(1===P||1!==t.childExpirationTime){for(var c=0,d=t.child;null!==d;){var e=d.expirationTime,
f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}t.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=t.firstEffect),a.lastEffect=t.lastEffect),1<t.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=t:a.firstEffect=t,a.lastEffect=t))}else{b=lj(t);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=
2048)}b=t.sibling;if(null!==b)return b;t=a}while(null!==t);F===Xa&&(F=Xe);return null}function Ve(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function ab(a){var b=Cc();Da(99,Aj.bind(null,a,b));return null}function Aj(a,b){do xb();while(null!==Zb);if((p&(ca|ma))!==H)throw Error(k(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(k(177));a.callbackNode=null;a.callbackExpirationTime=
0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ve(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(t=U=null,P=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=p;p|=ma;Uh.current=null;Ze=tc;var g=kg();if(Xd(g)){if("selectionStart"in
g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var m=h.getSelection&&h.getSelection();if(m&&0!==m.rangeCount){h=m.anchorNode;var n=m.anchorOffset,q=m.focusNode;m=m.focusOffset;try{h.nodeType,q.nodeType}catch(sb){h=null;break a}var ba=0,w=-1,y=-1,B=0,D=0,r=g,z=null;b:for(;;){for(var v;;){r!==h||0!==n&&3!==r.nodeType||(w=ba+n);r!==q||0!==m&&3!==r.nodeType||(y=ba+m);3===r.nodeType&&(ba+=r.nodeValue.length);if(null===(v=r.firstChild))break;z=r;
r=v}for(;;){if(r===g)break b;z===h&&++B===n&&(w=ba);z===q&&++D===m&&(y=ba);if(null!==(v=r.nextSibling))break;r=z;z=r.parentNode}r=v}h=-1===w||-1===y?null:{start:w,end:y}}else h=null}h=h||{start:0,end:0}}else h=null;$e={activeElementDetached:null,focusedElem:g,selectionRange:h};tc=!1;l=e;do try{Bj()}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);l=e;do try{for(g=a,h=b;null!==l;){var x=l.effectTag;x&16&&Wb(l.stateNode,"");if(x&128){var A=l.alternate;if(null!==A){var u=
A.ref;null!==u&&("function"===typeof u?u(null):u.current=null)}}switch(x&1038){case 2:Gh(l);l.effectTag&=-3;break;case 6:Gh(l);l.effectTag&=-3;Qe(l.alternate,l);break;case 1024:l.effectTag&=-1025;break;case 1028:l.effectTag&=-1025;Qe(l.alternate,l);break;case 4:Qe(l.alternate,l);break;case 8:n=l,Dh(g,n,h),Eh(n)}l=l.nextEffect}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);u=$e;A=kg();x=u.focusedElem;h=u.selectionRange;if(A!==x&&x&&x.ownerDocument&&jg(x.ownerDocument.documentElement,
x)){null!==h&&Xd(x)&&(A=h.start,u=h.end,void 0===u&&(u=A),"selectionStart"in x?(x.selectionStart=A,x.selectionEnd=Math.min(u,x.value.length)):(u=(A=x.ownerDocument||document)&&A.defaultView||window,u.getSelection&&(u=u.getSelection(),n=x.textContent.length,g=Math.min(h.start,n),h=void 0===h.end?g:Math.min(h.end,n),!u.extend&&g>h&&(n=h,h=g,g=n),n=ig(x,g),q=ig(x,h),n&&q&&(1!==u.rangeCount||u.anchorNode!==n.node||u.anchorOffset!==n.offset||u.focusNode!==q.node||u.focusOffset!==q.offset)&&(A=A.createRange(),
A.setStart(n.node,n.offset),u.removeAllRanges(),g>h?(u.addRange(A),u.extend(q.node,q.offset)):(A.setEnd(q.node,q.offset),u.addRange(A))))));A=[];for(u=x;u=u.parentNode;)1===u.nodeType&&A.push({element:u,left:u.scrollLeft,top:u.scrollTop});"function"===typeof x.focus&&x.focus();for(x=0;x<A.length;x++)u=A[x],u.element.scrollLeft=u.left,u.element.scrollTop=u.top}tc=!!Ze;$e=Ze=null;a.current=c;l=e;do try{for(x=a;null!==l;){var F=l.effectTag;F&36&&oj(x,l.alternate,l);if(F&128){A=void 0;var E=l.ref;if(null!==
E){var G=l.stateNode;switch(l.tag){case 5:A=G;break;default:A=G}"function"===typeof E?E(A):E.current=A}}l=l.nextEffect}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);l=null;Cj();p=f}else a.current=c;if(ld)ld=!1,Zb=a,$b=b;else for(l=e;null!==l;)b=l.nextEffect,l.nextEffect=null,l=b;b=a.firstPendingTime;0===b&&(La=null);1073741823===b?a===af?ac++:(ac=0,af=a):ac=0;"function"===typeof bf&&bf(c.stateNode,d);V(a);if(cd)throw cd=!1,a=Se,Se=null,a;if((p&Ye)!==H)return null;
ha();return null}function Bj(){for(;null!==l;){var a=l.effectTag;0!==(a&256)&&nj(l.alternate,l);0===(a&512)||ld||(ld=!0,Ng(97,function(){xb();return null}));l=l.nextEffect}}function xb(){if(90!==$b){var a=97<$b?97:$b;$b=90;return Da(a,Dj)}}function Dj(){if(null===Zb)return!1;var a=Zb;Zb=null;if((p&(ca|ma))!==H)throw Error(k(331));var b=p;p|=ma;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Ah(5,c),Bh(5,c)}}catch(d){if(null===
a)throw Error(k(330));Za(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}p=b;ha();return!0}function Vh(a,b,c){b=Le(c,b);b=Ih(a,b,1073741823);Fa(a,b);a=ed(a,1073741823);null!==a&&V(a)}function Za(a,b){if(3===a.tag)Vh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Vh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===La||!La.has(d))){a=Le(b,a);a=Jh(c,a,1073741823);Fa(c,a);c=ed(c,1073741823);null!==
c&&V(c);break}}c=c.return}}function xj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&P===c?F===bd||F===ad&&1073741823===ta&&Y()-Re<Ph?$a(a,P):jd=!0:Kh(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,V(a)))}function qj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=ka(),b=Va(b,a,null));a=ed(a,b);null!==a&&V(a)}function Ej(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=
b.inject(a);bf=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(f){}};Ne=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}function Fj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=
null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Ge(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Gj(a){if("function"===typeof a)return Ge(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===zd)return 11;if(a===Ad)return 14}return 2}function Sa(a,b){var c=a.alternate;null===c?(c=la(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=
null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Oc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ge(a)&&(g=1);else if("string"===typeof a)g=
5;else a:switch(a){case Ma:return Ha(c.children,e,f,b);case Hj:g=8;e|=7;break;case Af:g=8;e|=1;break;case kc:return a=la(12,c,b,e|8),a.elementType=kc,a.type=kc,a.expirationTime=f,a;case lc:return a=la(13,c,b,e),a.type=lc,a.elementType=lc,a.expirationTime=f,a;case yd:return a=la(19,c,b,e),a.elementType=yd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Cf:g=10;break a;case Bf:g=9;break a;case zd:g=11;break a;case Ad:g=14;break a;case Ef:g=16;d=null;break a;case Df:g=
22;break a}throw Error(k(130,null==a?a:typeof a,""));}b=la(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ha(a,b,c,d){a=la(7,a,d,b);a.expirationTime=c;return a}function qe(a,b,c){a=la(6,a,null,b);a.expirationTime=c;return a}function re(a,b,c){b=la(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Ij(a,b,c){this.tag=b;this.current=null;this.containerInfo=
a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Kh(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Ya(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;
c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}function yh(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Ue(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function md(a,b,c,d){var e=b.current,f=ka(),g=Vb.suspense;f=Va(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(Na(c)!==c||1!==c.tag)throw Error(k(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(N(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(k(171));}if(1===c.tag){var m=c.type;if(N(m)){c=Gg(c,m,h);break a}}c=h}else c=Ca;null===b.context?b.context=c:b.pendingContext=c;b=Ea(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Fa(e,b);Ja(e,f);return f}function cf(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Wh(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function df(a,b){Wh(a,b);(a=a.alternate)&&Wh(a,b)}function ef(a,b,c){c=null!=c&&!0===c.hydrate;var d=new Ij(a,b,c),e=la(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ne(e);a[Lb]=d.current;c&&0!==b&&
xi(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}function bc(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Jj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ef(a,0,b?{hydrate:!0}:void 0)}function nd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;
if("function"===typeof e){var h=e;e=function(){var a=cf(g);h.call(a)}}md(b,g,a,e)}else{f=c._reactRootContainer=Jj(c,d);g=f._internalRoot;if("function"===typeof e){var m=e;e=function(){var a=cf(g);m.call(a)}}Rh(function(){md(b,g,a,e)})}return cf(g)}function Kj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:gb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Xh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;
if(!bc(b))throw Error(k(200));return Kj(a,b,null,c)}if(!ea)throw Error(k(227));var ki=function(a,b,c,d,e,f,g,h,m){var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(C){this.onError(C)}},yb=!1,gc=null,hc=!1,pd=null,li={onError:function(a){yb=!0;gc=a}},td=null,rf=null,mf=null,ic=null,cb={},jc=[],qd={},db={},rd={},wa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),M=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,
sd=null,eb=null,fb=null,ee=function(a,b){return a(b)},eg=function(a,b,c,d,e){return a(b,c,d,e)},vd=function(){},vf=ee,Oa=!1,wd=!1,Z=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Lj=Z.unstable_cancelCallback,ff=Z.unstable_now,$f=Z.unstable_scheduleCallback,Mj=Z.unstable_shouldYield,Yh=Z.unstable_requestPaint,Pd=Z.unstable_runWithPriority,Nj=Z.unstable_getCurrentPriorityLevel,Oj=Z.unstable_ImmediatePriority,Zh=Z.unstable_UserBlockingPriority,ag=Z.unstable_NormalPriority,Pj=Z.unstable_LowPriority,
Qj=Z.unstable_IdlePriority,oi=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf=Object.prototype.hasOwnProperty,yf={},xf={},E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=
new L(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new L(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new L(a,2,!1,a.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new L(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=
new L(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){E[a]=new L(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){E[a]=new L(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){E[a]=new L(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){E[a]=new L(a,5,!1,a.toLowerCase(),null,!1)});var gf=/[\-:]([a-z])/g,hf=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(gf,hf);E[b]=new L(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!1)});E.xlinkHref=new L("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!0)});var da=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;da.hasOwnProperty("ReactCurrentDispatcher")||(da.ReactCurrentDispatcher={current:null});da.hasOwnProperty("ReactCurrentBatchConfig")||(da.ReactCurrentBatchConfig={suspense:null});var si=/^(.*)[\\\/]/,Q="function"===typeof Symbol&&Symbol.for,Pc=Q?Symbol.for("react.element"):60103,gb=Q?Symbol.for("react.portal"):
60106,Ma=Q?Symbol.for("react.fragment"):60107,Af=Q?Symbol.for("react.strict_mode"):60108,kc=Q?Symbol.for("react.profiler"):60114,Cf=Q?Symbol.for("react.provider"):60109,Bf=Q?Symbol.for("react.context"):60110,Hj=Q?Symbol.for("react.concurrent_mode"):60111,zd=Q?Symbol.for("react.forward_ref"):60112,lc=Q?Symbol.for("react.suspense"):60113,yd=Q?Symbol.for("react.suspense_list"):60120,Ad=Q?Symbol.for("react.memo"):60115,Ef=Q?Symbol.for("react.lazy"):60116,Df=Q?Symbol.for("react.block"):60121,zf="function"===
typeof Symbol&&Symbol.iterator,od,xh=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{od=od||document.createElement("div");od.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=od.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Wb=function(a,
b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},ib={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Id={},Of={};wa&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete ib.animationend.animation,delete ib.animationiteration.animation,delete ib.animationstart.animation),"TransitionEvent"in
window||delete ib.transitionend.transition);var $h=oc("animationend"),ai=oc("animationiteration"),bi=oc("animationstart"),ci=oc("transitionend"),Db="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new ("function"===typeof WeakMap?WeakMap:Map),Ab=null,wi=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;
if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)lf(a,b[d],c[d]);else b&&lf(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},qc=[],Rd=!1,fa=[],xa=null,ya=null,za=null,Eb=new Map,Fb=new Map,Jb=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
yi="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" "),dg={},cg=new Map,Td=new Map,Rj=["abort","abort",$h,"animationEnd",ai,"animationIteration",bi,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata",
"loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ci,"transitionEnd","waiting","waiting"];Sd("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Sd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Sd(Rj,2);(function(a,b){for(var c=0;c<a.length;c++)Td.set(a[c],b)})("change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),0);var Hi=Zh,Gi=Pd,tc=!0,Kb={animationIterationCount:!0,
borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,
strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sj=["Webkit","ms","Moz","O"];Object.keys(Kb).forEach(function(a){Sj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Kb[b]=Kb[a]})});var Ii=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ng="$",og="/$",$d="$?",Zd="$!",Ze=null,$e=null,We="function"===typeof setTimeout?setTimeout:void 0,vj="function"===
typeof clearTimeout?clearTimeout:void 0,jf=Math.random().toString(36).slice(2),Aa="__reactInternalInstance$"+jf,vc="__reactEventHandlers$"+jf,Lb="__reactContainere$"+jf,Ba=null,ce=null,wc=null;M(R.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==
typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){this.isPersistent=xc},isPersistent:yc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=yc;this._dispatchInstances=this._dispatchListeners=null}});R.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||
Date.now()},defaultPrevented:null,isTrusted:null};R.extend=function(a){function b(){return c.apply(this,arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;M(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=M({},c.Interface,a);b.extend=c.extend;sg(b);return b};sg(R);var Tj=R.extend({data:null}),Uj=R.extend({data:null}),Ni=[9,13,27,32],de=wa&&"CompositionEvent"in window,cc=null;wa&&"documentMode"in document&&(cc=document.documentMode);var Vj=wa&&"TextEvent"in window&&
!cc,xg=wa&&(!de||cc&&8<cc&&11>=cc),wg=String.fromCharCode(32),ua={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},
dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vg=!1,mb=!1,Wj={eventTypes:ua,extractEvents:function(a,b,c,d,e){var f;if(de)b:{switch(a){case "compositionstart":var g=ua.compositionStart;break b;case "compositionend":g=ua.compositionEnd;break b;case "compositionupdate":g=
ua.compositionUpdate;break b}g=void 0}else mb?tg(a,c)&&(g=ua.compositionEnd):"keydown"===a&&229===c.keyCode&&(g=ua.compositionStart);g?(xg&&"ko"!==c.locale&&(mb||g!==ua.compositionStart?g===ua.compositionEnd&&mb&&(f=rg()):(Ba=d,ce="value"in Ba?Ba.value:Ba.textContent,mb=!0)),e=Tj.getPooled(g,b,c,d),f?e.data=f:(f=ug(c),null!==f&&(e.data=f)),lb(e),f=e):f=null;(a=Vj?Oi(a,c):Pi(a,c))?(b=Uj.getPooled(ua.beforeInput,b,c,d),b.data=a,lb(b)):b=null;return null===f?b:null===b?f:[f,b]}},Qi={color:!0,date:!0,
datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ag={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},Mb=null,Nb=null,kf=!1;wa&&(kf=Tf("input")&&(!document.documentMode||9<document.documentMode));var Xj={eventTypes:Ag,_isInputEventSupported:kf,extractEvents:function(a,b,c,d,e){e=b?Pa(b):window;var f=
e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Si;else if(yg(e))if(kf)g=Wi;else{g=Ui;var h=Ti}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Vi);if(g&&(g=g(a,b)))return zg(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ed(e,"number",e.value)}},dc=R.extend({view:null,detail:null}),Yi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},di=0,ei=0,fi=!1,gi=!1,ec=dc.extend({screenX:null,
screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=di;di=a.screenX;return fi?"mousemove"===a.type?a.screenX-b:0:(fi=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=ei;ei=a.screenY;return gi?"mousemove"===
a.type?a.screenY-b:0:(gi=!0,0)}}),hi=ec.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fc={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout",
"pointerover"]}},Yj={eventTypes:fc,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Bb(b):null,null!==b){var h=Na(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var m=ec;var n=fc.mouseLeave;
var l=fc.mouseEnter;var k="mouse"}else if("pointerout"===a||"pointerover"===a)m=hi,n=fc.pointerLeave,l=fc.pointerEnter,k="pointer";a=null==g?f:Pa(g);f=null==b?f:Pa(b);n=m.getPooled(n,g,c,d);n.type=k+"leave";n.target=a;n.relatedTarget=f;c=m.getPooled(l,b,c,d);c.type=k+"enter";c.target=f;c.relatedTarget=a;d=g;k=b;if(d&&k)a:{m=d;l=k;g=0;for(a=m;a;a=pa(a))g++;a=0;for(b=l;b;b=pa(b))a++;for(;0<g-a;)m=pa(m),g--;for(;0<a-g;)l=pa(l),a--;for(;g--;){if(m===l||m===l.alternate)break a;m=pa(m);l=pa(l)}m=null}else m=
null;l=m;for(m=[];d&&d!==l;){g=d.alternate;if(null!==g&&g===l)break;m.push(d);d=pa(d)}for(d=[];k&&k!==l;){g=k.alternate;if(null!==g&&g===l)break;d.push(k);k=pa(k)}for(k=0;k<m.length;k++)be(m[k],"bubbled",n);for(k=d.length;0<k--;)be(d[k],"captured",c);return 0===(e&64)?[n]:[n,c]}},Qa="function"===typeof Object.is?Object.is:Zi,$i=Object.prototype.hasOwnProperty,Zj=wa&&"documentMode"in document&&11>=document.documentMode,Eg={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},
dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},nb=null,he=null,Pb=null,ge=!1,ak={eventTypes:Eg,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=Jd(e);f=rd.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(yg(e)||"true"===e.contentEditable)nb=e,he=b,Pb=null;break;case "blur":Pb=he=nb=null;
break;case "mousedown":ge=!0;break;case "contextmenu":case "mouseup":case "dragend":return ge=!1,Dg(c,d);case "selectionchange":if(Zj)break;case "keydown":case "keyup":return Dg(c,d)}return null}},bk=R.extend({animationName:null,elapsedTime:null,pseudoElement:null}),ck=R.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),dk=dc.extend({relatedTarget:null}),ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",
Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",
224:"Meta"},gk=dc.extend({key:function(a){if(a.key){var b=ek[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Ac(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?fk[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fe,charCode:function(a){return"keypress"===a.type?Ac(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Ac(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),hk=ec.extend({dataTransfer:null}),ik=dc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fe}),jk=R.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),kk=ec.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?
-a.wheelDelta:0},deltaZ:null,deltaMode:null}),lk={eventTypes:dg,extractEvents:function(a,b,c,d,e){e=cg.get(a);if(!e)return null;switch(a){case "keypress":if(0===Ac(c))return null;case "keydown":case "keyup":a=gk;break;case "blur":case "focus":a=dk;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=ec;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
hk;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=ik;break;case $h:case ai:case bi:a=bk;break;case ci:a=jk;break;case "scroll":a=dc;break;case "wheel":a=kk;break;case "copy":case "cut":case "paste":a=ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hi;break;default:a=R}b=a.getPooled(e,b,c,d);lb(b);return b}};(function(a){if(ic)throw Error(k(101));
ic=Array.prototype.slice.call(a);nf()})("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){td=a;rf=b;mf=c})(ae,Hb,Pa);pf({SimpleEventPlugin:lk,EnterLeaveEventPlugin:Yj,ChangeEventPlugin:Xj,SelectEventPlugin:ak,BeforeInputEventPlugin:Wj});var ie=[],ob=-1,Ca={},B={current:Ca},G={current:!1},Ra=Ca,bj=Pd,je=$f,Rg=Lj,aj=Nj,Dc=Oj,Ig=Zh,Jg=ag,Kg=Pj,Lg=Qj,Qg={},yj=Mj,Cj=void 0!==Yh?Yh:function(){},qa=null,
Ec=null,ke=!1,ii=ff(),Y=1E4>ii?ff:function(){return ff()-ii},Ic={current:null},Hc=null,qb=null,Gc=null,Tg=0,Jc=2,Ga=!1,Vb=da.ReactCurrentBatchConfig,$g=(new ea.Component).refs,Mc={isMounted:function(a){return(a=a._reactInternalFiber)?Na(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;d=Va(d,a,e);e=Ea(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;
d=Va(d,a,e);e=Ea(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ka(),d=Vb.suspense;c=Va(c,a,d);d=Ea(c,d);d.tag=Jc;void 0!==b&&null!==b&&(d.callback=b);Fa(a,d);Ja(a,c)}},Qc=Array.isArray,wb=ah(!0),Fe=ah(!1),Sb={},ja={current:Sb},Ub={current:Sb},Tb={current:Sb},D={current:0},Sc=da.ReactCurrentDispatcher,X=da.ReactCurrentBatchConfig,Ia=0,z=null,K=null,J=null,Uc=!1,Tc={readContext:W,useCallback:S,useContext:S,
useEffect:S,useImperativeHandle:S,useLayoutEffect:S,useMemo:S,useReducer:S,useRef:S,useState:S,useDebugValue:S,useResponder:S,useDeferredValue:S,useTransition:S},dj={readContext:W,useCallback:ih,useContext:W,useEffect:eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ze(4,2,gh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ze(4,2,a,b)},useMemo:function(a,b){var c=ub();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=
ub();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=ch.bind(null,z,a);return[d.memoizedState,a]},useRef:function(a){var b=ub();a={current:a};return b.memoizedState=a},useState:xe,useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=xe(a),d=c[0],e=c[1];eh(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
xe(!1),c=b[0];b=b[1];return[ih(Ce.bind(null,b,a),[b,a]),c]}},ej={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Vc,useRef:dh,useState:function(a){return Vc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Vc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=Vc(Ua),c=b[0];b=b[1];return[Yc(Ce.bind(null,
b,a),[b,a]),c]}},fj={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Wc,useRef:dh,useState:function(a){return Wc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Wc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=Wc(Ua),c=b[0];b=b[1];return[Yc(Ce.bind(null,b,a),[b,a]),c]}},ra=null,Ka=null,Wa=
!1,gj=da.ReactCurrentOwner,ia=!1,Je={dehydrated:null,retryTime:0};var jj=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};var wh=function(a){};var ij=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ta(ja.current);a=null;switch(c){case "input":f=
Cd(g,f);d=Cd(g,d);a=[];break;case "option":f=Fd(g,f);d=Fd(g,d);a=[];break;case "select":f=M({},f,{value:void 0});d=M({},d,{value:void 0});a=[];break;case "textarea":f=Gd(g,f);d=Gd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=uc)}Ud(c,d);var h,m;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===h)for(m in g=f[h],g)g.hasOwnProperty(m)&&(c||(c={}),c[m]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==
h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(db.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var k=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&k!==g&&(null!=k||null!=g))if("style"===h)if(g){for(m in g)!g.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(c||(c={}),c[m]="");for(m in k)k.hasOwnProperty(m)&&g[m]!==k[m]&&(c||(c={}),c[m]=k[m])}else c||(a||(a=[]),a.push(h,c)),c=k;else"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,g=g?g.__html:void 0,null!=k&&g!==k&&(a=a||
[]).push(h,k)):"children"===h?g===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(h,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(db.hasOwnProperty(h)?(null!=k&&oa(e,h),a||g===k||(a=[])):(a=a||[]).push(h,k))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};var kj=function(a,b,c,d){c!==d&&(b.effectTag|=4)};var pj="function"===typeof WeakSet?WeakSet:Set,wj="function"===typeof WeakMap?WeakMap:Map,sj=Math.ceil,gd=da.ReactCurrentDispatcher,
Uh=da.ReactCurrentOwner,H=0,Ye=8,ca=16,ma=32,Xa=0,hd=1,Oh=2,ad=3,bd=4,Xe=5,p=H,U=null,t=null,P=0,F=Xa,id=null,ta=1073741823,Yb=1073741823,kd=null,Xb=0,jd=!1,Re=0,Ph=500,l=null,cd=!1,Se=null,La=null,ld=!1,Zb=null,$b=90,bb=null,ac=0,af=null,dd=0,Ja=function(a,b){if(50<ac)throw ac=0,af=null,Error(k(185));a=ed(a,b);if(null!==a){var c=Cc();1073741823===b?(p&Ye)!==H&&(p&(ca|ma))===H?Te(a):(V(a),p===H&&ha()):V(a);(p&4)===H||98!==c&&99!==c||(null===bb?bb=new Map([[a,b]]):(c=bb.get(a),(void 0===c||c>b)&&bb.set(a,
b)))}};var zj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||G.current)ia=!0;else{if(d<c){ia=!1;switch(b.tag){case 3:sh(b);Ee();break;case 5:bh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Bc(b);break;case 4:se(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;y(Ic,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return th(a,b,c);y(D,D.current&1);b=sa(a,b,c);return null!==b?b.sibling:null}y(D,D.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return vh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);y(D,D.current);if(!d)return null}return sa(a,b,c)}ia=!1}}else ia=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=pb(b,B.current);rb(b,c);e=we(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(N(d)){var f=!0;Bc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ne(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Lc(b,d,g,a);e.updater=Mc;b.stateNode=e;e._reactInternalFiber=b;pe(b,d,a,c);b=Ie(null,b,d,!0,f,c)}else b.tag=0,T(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ri(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Gj(e);a=aa(e,a);switch(f){case 0:b=He(null,b,e,a,c);break a;case 1:b=rh(null,b,e,a,c);break a;case 11:b=nh(null,b,e,a,c);break a;case 14:b=oh(null,b,e,aa(e.type,a),d,c);break a}throw Error(k(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),He(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),rh(a,b,d,e,c);
case 3:sh(b);d=b.updateQueue;if(null===a||null===d)throw Error(k(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;oe(a,b);Qb(b,d,null,c);d=b.memoizedState.element;if(d===e)Ee(),b=sa(a,b,c);else{if(e=b.stateNode.hydrate)Ka=kb(b.stateNode.containerInfo.firstChild),ra=b,e=Wa=!0;if(e)for(c=Fe(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else T(a,b,d,c),Ee();b=b.child}return b;case 5:return bh(b),null===a&&De(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Yd(d,e)?g=null:null!==f&&Yd(d,f)&&(b.effectTag|=16),qh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(T(a,b,g,c),b=b.child),b;case 6:return null===a&&De(b),null;case 13:return th(a,b,c);case 4:return se(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=wb(b,null,d,c):T(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),nh(a,b,d,e,c);case 7:return T(a,b,b.pendingProps,c),b.child;case 8:return T(a,
b,b.pendingProps.children,c),b.child;case 12:return T(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;y(Ic,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Qa(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!G.current){b=sa(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var m=h.dependencies;if(null!==
m){g=h.child;for(var l=m.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ea(c,null),l.tag=Jc,Fa(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);Sg(h.return,c);m.expirationTime<c&&(m.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}T(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,rb(b,c),e=W(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,T(a,b,d,c),b.child;case 14:return e=b.type,f=aa(e,b.pendingProps),f=aa(e.type,f),oh(a,b,e,f,d,c);case 15:return ph(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Bc(b)):a=!1,rb(b,c),Yg(b,d,e),pe(b,d,e,c),Ie(null,
b,d,!0,a,c);case 19:return vh(a,b,c)}throw Error(k(156,b.tag));};var bf=null,Ne=null,la=function(a,b,c,d){return new Fj(a,b,c,d)};ef.prototype.render=function(a){md(a,this._internalRoot,null,null)};ef.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;md(null,a,null,function(){b[Lb]=null})};var Di=function(a){if(13===a.tag){var b=Fc(ka(),150,100);Ja(a,b);df(a,b)}};var Yf=function(a){13===a.tag&&(Ja(a,3),df(a,3))};var Bi=function(a){if(13===a.tag){var b=ka();b=Va(b,a,null);Ja(a,
b);df(a,b)}};sd=function(a,b,c){switch(b){case "input":Dd(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ae(d);if(!e)throw Error(k(90));Gf(d);Dd(d,e)}}}break;case "textarea":Lf(a,c);break;case "select":b=c.value,null!=b&&hb(a,!!c.multiple,b,!1)}};(function(a,b,c,d){ee=a;eg=b;vd=c;vf=d})(Qh,function(a,b,c,d,e){var f=p;p|=4;
try{return Da(98,a.bind(null,b,c,d,e))}finally{p=f,p===H&&ha()}},function(){(p&(1|ca|ma))===H&&(uj(),xb())},function(a,b){var c=p;p|=2;try{return a(b)}finally{p=c,p===H&&ha()}});var mk={Events:[Hb,Pa,ae,pf,qd,lb,function(a){Kd(a,Ki)},sf,tf,sc,pc,xb,{current:!1}]};(function(a){var b=a.findFiberByHostInstance;return Ej(M({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:da.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Sf(a);
return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Bb,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;I.createPortal=Xh;I.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===
b){if("function"===typeof a.render)throw Error(k(188));throw Error(k(268,Object.keys(a)));}a=Sf(b);a=null===a?null:a.stateNode;return a};I.flushSync=function(a,b){if((p&(ca|ma))!==H)throw Error(k(187));var c=p;p|=1;try{return Da(99,a.bind(null,b))}finally{p=c,ha()}};I.hydrate=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!0,c)};I.render=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!1,c)};I.unmountComponentAtNode=function(a){if(!bc(a))throw Error(k(40));return a._reactRootContainer?
(Rh(function(){nd(null,null,a,!1,function(){a._reactRootContainer=null;a[Lb]=null})}),!0):!1};I.unstable_batchedUpdates=Qh;I.unstable_createPortal=function(a,b){return Xh(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};I.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!bc(c))throw Error(k(200));if(null==a||void 0===a._reactInternalFiber)throw Error(k(38));return nd(a,b,c,!1,d)};I.version="16.14.0"});
;
!function(e){var r={};function t(a){if(r[a])return r[a].exports;var s=r[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(a,s,function(r){return e[r]}.bind(null,s));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(e,r){e.exports=React},function(e,r,t){e.exports=t(3)()},function(e,r){e.exports=ReactDOM},function(e,r,t){"use strict";var a=t(4);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,r,t,s,n,o){if(o!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:s};return t.PropTypes=t,t}},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";t.r(r);var a=t(0),s=t.n(a),n=t(2),o=t.n(n),l=t(1),c=t.n(l),i="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/Suggestion.jsx";function u(e){var r=e.query,t=e.type,a=e.label,n=e.url,o=e.tags,l=function(e,r){var t,a=(t=e.trim(),t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).replace(/\s/,"|"),n=new RegExp("(".concat(a,")"),"gi"),o=r.split(n),l=[];for(var c in o)n.test(o[c])?l.push(s.a.createElement("b",{key:c,__self:this,__source:{fileName:i,lineNumber:42,columnNumber:17}},o[c])):l.push(o[c]);return l}(r,a),c=[];for(var u in o)c.push(s.a.createElement("span",{key:u,className:"search-suggestion__tag badge badge-default badge--pill",__self:this,__source:{fileName:i,lineNumber:61,columnNumber:7}},o[u]));return s.a.createElement("a",{className:"search-suggestion",href:n,tabIndex:"0",__self:this,__source:{fileName:i,lineNumber:71,columnNumber:5}},s.a.createElement("div",{className:"search-suggestion__type",__self:this,__source:{fileName:i,lineNumber:72,columnNumber:7}},t),s.a.createElement("div",{className:"search-suggestion__body",__self:this,__source:{fileName:i,lineNumber:73,columnNumber:7}},s.a.createElement("div",{className:"search-suggestion__label",__self:this,__source:{fileName:i,lineNumber:74,columnNumber:9}},l),o.length?s.a.createElement("div",{className:"search-suggestion__tags",__self:this,__source:{fileName:i,lineNumber:76,columnNumber:11}},c):null))}u.propTypes={query:c.a.string.isRequired,type:c.a.string.isRequired,label:c.a.string.isRequired,url:c.a.string.isRequired,tags:c.a.arrayOf(c.a.string)},u.defaultProps={tags:[]};var m=u,f=s.a.createContext({t:function(e){return e},formatPlural:function(e){return e}}),_="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/SearchSuggestions.jsx";function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function g(e){var r=e.searchBase,t=e.query,n=e.suggestions,o=Object(a.useContext)(f);if(!t.length||!n.length)return null;var l=[];for(var c in n)l.push(s.a.createElement(m,p({key:c,query:t},n[c],{__self:this,__source:{fileName:_,lineNumber:21,columnNumber:18}})));var i="".concat(r,"/").concat(encodeURIComponent(t));return s.a.createElement(s.a.Fragment,{__self:this,__source:{fileName:_,lineNumber:27,columnNumber:5}},s.a.createElement("div",{className:"search-suggestions",__self:this,__source:{fileName:_,lineNumber:28,columnNumber:7}},l),s.a.createElement("div",{className:"search-suggestions__all",__self:this,__source:{fileName:_,lineNumber:29,columnNumber:7}},s.a.createElement("a",{href:i,className:"btn btn-default btn-raised",__self:this,__source:{fileName:_,lineNumber:30,columnNumber:9}},o.t("See all results"))))}g.propTypes={searchBase:c.a.string.isRequired,query:c.a.string,suggestions:c.a.arrayOf(c.a.shape({type:c.a.string.isRequired,label:c.a.string.isRequired,url:c.a.string.isRequired,tags:c.a.arrayOf(c.a.string)}))},g.defaultProps={query:"",suggestions:[]};var h=g,d="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/Spinner.jsx";function b(){return s.a.createElement("div",{className:"spinner",__self:this,__source:{fileName:d,lineNumber:5,columnNumber:5}},s.a.createElement("div",{className:"bounce1",__self:this,__source:{fileName:d,lineNumber:6,columnNumber:7}}),s.a.createElement("div",{className:"bounce2",__self:this,__source:{fileName:d,lineNumber:7,columnNumber:7}}),s.a.createElement("div",{className:"bounce3",__self:this,__source:{fileName:d,lineNumber:8,columnNumber:7}}))}var N="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/index.jsx";!function(e,r){function t(e){return e.replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(r)})).replace(/&amp;/g,"&")}var a="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):""),n={t:r.t.bind(r),formatPlural:r.formatPlural.bind(r)};r.behaviors.initSocialSearchAutocomplete={attach:function(r,l){var c=this,i=e(".social-search-suggestions",r);if(i.length){var u,m,_,p=(u=a+l.socialSearchAutocomplete.basePath,m=l.socialSearchAutocomplete.searchApiUrl,_=null,function(r,a){null!==_&&(4!==_.readyState&&_.abort(),_=null),r.length?_=e.get({url:"".concat(m,"/").concat(encodeURIComponent(r)),headers:{Accept:"application/json","Content-Type":"application/hal+json"},success:function(e){var s=e.map((function(e){return{type:t(e.type),label:t(e.label),url:u+e.path}}));a(r,s)}}):a(r,[])});i.each((function(r,t){var a,i=function(r){var t=e(r).attr("data-search-suggestions-for");if(!t)throw new Error("Search suggestion element does not have an associated search field (".concat(r,")."));var a=e("#".concat(t));if(!a.length)throw new Error("Could not find search element with id '".concat(t,"'"));return a.first()}(t),u=(a=null,function(e,r){a&&(clearTimeout(a),a=null),a=setTimeout((function(){a=null,e()}),r)}),m=function(e,r){o.a.render(s.a.createElement(f.Provider,{value:n,__self:c,__source:{fileName:N,lineNumber:185,columnNumber:13}},s.a.createElement(h,{searchBase:l.socialSearchAutocomplete.searchPath,query:e,suggestions:r,__self:c,__source:{fileName:N,lineNumber:186,columnNumber:15}})),t)},_=null,g=i.parent();i.on("keyup",(function(e){var r=e.target.value;r!==_&&(u((function(){o.a.render(s.a.createElement(b,{__self:c,__source:{fileName:N,lineNumber:210,columnNumber:31}}),t),p(r,m)}),200),_=r),38===e.keyCode?g.find(".search-suggestions .search-suggestion").get(-1).focus():40===e.keyCode&&g.find(".search-suggestions .search-suggestion").get(0).focus()})),g.find(".social-search-suggestions").on("keyup",(function(r){if(38===r.keyCode){var t=e(r.target).prev();t.length||(t=e(r.target).parent().is(".search-suggestions__all")?e(".search-suggestions .search-suggestion").last():i),t.focus()}else if(40===r.keyCode){var a=e(r.target).next();a.length||(a=e(r.target).parent().is(".search-suggestions__all")?i:e(".search-suggestions__all a").first()),a.focus()}})),m("",[])}))}}}}(jQuery,Drupal)}]);
