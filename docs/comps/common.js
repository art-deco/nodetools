function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function r(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},t;
if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var ca={D:!0},da={};try{da.__proto__=ca;u=da.D;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=t;function fa(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var w=fa(this),x="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function y(a,b){if(b){var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];g in c||(c[g]={});c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&x(c,a,{configurable:!0,writable:!0,value:b})}}
y("Promise",function(a){function b(f){this.b=0;this.m=void 0;this.a=[];var e=this.f();try{f(e.resolve,e.reject)}catch(l){e.reject(l)}}function c(){this.a=null}function d(f){return f instanceof b?f:new b(function(e){e(f)})}if(a)return a;c.prototype.b=function(f){if(null==this.a){this.a=[];var e=this;this.f(function(){e.m()})}this.a.push(f)};var g=w.setTimeout;c.prototype.f=function(f){g(f,0)};c.prototype.m=function(){for(;this.a&&this.a.length;){var f=this.a;this.a=[];for(var e=0;e<f.length;++e){var l=
f[e];f[e]=null;try{l()}catch(m){this.i(m)}}}this.a=null};c.prototype.i=function(f){this.f(function(){throw f;})};b.prototype.f=function(){function f(m){return function(k){l||(l=!0,m.call(e,k))}}var e=this,l=!1;return{resolve:f(this.L),reject:f(this.i)}};b.prototype.L=function(f){if(f===this)this.i(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.O(f);else{a:switch(typeof f){case "object":var e=null!=f;break a;case "function":e=!0;break a;default:e=!1}e?this.K(f):this.A(f)}};
b.prototype.K=function(f){var e=void 0;try{e=f.then}catch(l){this.i(l);return}"function"==typeof e?this.P(e,f):this.A(f)};b.prototype.i=function(f){this.B(2,f)};b.prototype.A=function(f){this.B(1,f)};b.prototype.B=function(f,e){if(0!=this.b)throw Error("Cannot settle("+f+", "+e+"): Promise already settled in state"+this.b);this.b=f;this.m=e;this.J()};b.prototype.J=function(){if(null!=this.a){for(var f=0;f<this.a.length;++f)h.b(this.a[f]);this.a=null}};var h=new c;b.prototype.O=function(f){var e=this.f();
f.F(e.resolve,e.reject)};b.prototype.P=function(f,e){var l=this.f();try{f.call(e,l.resolve,l.reject)}catch(m){l.reject(m)}};b.prototype.then=function(f,e){function l(p,v){return"function"==typeof p?function(Y){try{m(p(Y))}catch(Z){k(Z)}}:v}var m,k,n=new b(function(p,v){m=p;k=v});this.F(l(f,m),l(e,k));return n};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.F=function(f,e){function l(){switch(m.b){case 1:f(m.m);break;case 2:e(m.m);break;default:throw Error("Unexpected state: "+
m.b);}}var m=this;null==this.a?h.b(l):this.a.push(l)};b.resolve=d;b.reject=function(f){return new b(function(e,l){l(f)})};b.race=function(f){return new b(function(e,l){for(var m=q(f),k=m.next();!k.done;k=m.next())d(k.value).F(e,l)})};b.all=function(f){var e=q(f),l=e.next();return l.done?d([]):new b(function(m,k){function n(Y){return function(Z){p[Y]=Z;v--;0==v&&m(p)}}var p=[],v=0;do p.push(void 0),v++,d(l.value).F(n(p.length-1),k),l=e.next();while(!l.done)})};return b});
function ha(a,b){this.a=a;x(this,"description",{configurable:!0,writable:!0,value:b})}ha.prototype.toString=function(){return this.a};var ia=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();y("globalThis",function(a){return a||w});
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(a[g]=d[g])}return a};y("Object.assign",function(a){return a||ja});
y("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});
y("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function z(){var a;window["set-manager"]=function(b){a&&document.documentElement.classList.remove(a);document.documentElement.classList.add(b);a=b}};function A(){var a=r(document.querySelectorAll("div[data-section]")).concat();if(a.length){var b=new IntersectionObserver(function(c){c.forEach(function(d){var g=d.target.id;d.isIntersecting?document.querySelector('[data-heading="'+g+'"]').classList.add("Active"):document.querySelector('[data-heading="'+g+'"]').classList.remove("Active")})},{});a.forEach(function(c){b.observe(c)})}};function B(){var a=document.getElementById("HideMenu"),b=document.getElementById("ShowMenu");a&&(a.onclick=function(c){c.target.parentElement.classList.remove("sidebarshowing");return!1});b&&(b.onclick=function(c){c.target.parentElement.classList.add("sidebarshowing");return!1})};var C={SideBarContent:"a"};var D={};function E(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var g=a[d];return g?g:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var ka=window.preact,F=ka.h,G=ka.Component,la=ka.render;function H(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,c:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function I(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var g=new IntersectionObserver(function(h){h.forEach(function(f){var e=f.target,l=e.render.g,m=l.key,k=l.id,n=l.plain;if(f.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",n?"":" Preact",m,k,e);try{var p=e.render();p&&!p.unrender&&g.unobserve(e)}catch(v){d&&console.warn(v)}}else l.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",n?"":" Preact",m,k,e),l.instance.unrender())})},Object.assign({},{rootMargin:c},a));return g}function ma(a,b,c,d){this.b=d;this.f=c;this.c=a;this.parent=b;this.unrender=this.a=null}
ma.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.a)this.a.componentDidMount&&this.a.componentDidMount(),this.a.forceUpdate();else{this.b.render(this.b.h(this.f,b,a),this.parent,this.c);var c=this.c._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.a=c}};
function J(a,b,c,d,g,h,f){function e(){c.render(Object.assign({},h,{children:f}));a.instance=c}var l={render:la,Component:G,h:F},m=a.plain;!c&&m?c=new b(d,g):c||(c=new ma(d,g,b,l));b.load?b.load(function(k,n){n&&Object.assign(h,n);k?console.warn(k):e()},d,h):e();return c};function na(a,b){this.loaded=this.a=null;this.f=[a];this.b=[b]}na.prototype.error=function(a){this.a=a;this.b.forEach(function(b){b(a)})};na.prototype.load=function(a){this.loaded=a;this.f.forEach(function(b){b(a)})};function oa(a,b,c){var d=document.createElement("script");d.src=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)}function pa(a,b,c){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)};function qa(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function K(a,b){var c=ra(a,pa,sa[a],function(d){return b(null,d)},function(d){return b(d)},a.nocache);c&&(sa[a]=c)}
function ra(a,b,c,d,g,h){if(h)b(a,d,g);else if(c&&c.loaded)d(c.loaded);else if(c&&c.a)g(c.a);else if(c)c.f.push(d),c.b.push(g);else{var f=new na(d,g);b(a,function(e){f.load(e)},function(e){f.error(e)});return f}}function ta(a,b){var c=!1,d=[],g=0;a.forEach(function(h,f){function e(m){c||(c=m,b(m))}function l(m){c||(g++,d[f]=m,g==a.length&&b(null,d))}h.endsWith(".json")?qa(h,function(m,k){m?e(m):l(k)}):ua(h,l,e)})}var va={},sa={};function ua(a,b,c){(b=ra(a,oa,va[a],b,c,a.nocache))&&(va[a]=b)};function L(){return G.apply(this,arguments)||this}L.prototype=ba(G.prototype);L.prototype.constructor=L;if(ea)ea(L,G);else for(var M in G)if("prototype"!=M)if(Object.defineProperties){var wa=Object.getOwnPropertyDescriptor(G,M);wa&&Object.defineProperty(L,M,wa)}else L[M]=G[M];L.load=function(a){K("https://static.akashic.page/comments.css",a)};
L.prototype.render=function(a){var b=a["api-key"],c=a.host;a=document.createElement("script");a.src="https://static.akashic.page/akashic.js";a.onload=function(){document.getElementById("emails-div").innerText="";window.Akashic.emails({host:c,api_key:b,project:"nodetools",container:"emails-div"})};document.body.appendChild(a);return F("div",{id:"emails-div"})};function N(a){this.c=a}N.load=function(a){K("https://static.akashic.page/comments.css",a)};N.prototype.render=function(a){var b=this,c=a.s,d=a.host;"serviceWorker"in navigator&&"PushManager"in window?(a=document.createElement("script"),a.src="https://static.akashic.page/akashic.js",a.onload=function(){b.c.innerText="";window.Akashic.updates({host:d,container:"updates-div",scope:"/nodetools/",api_key:c})},document.body.appendChild(a)):this.c.innerText="Your browser doesn't support web-push."};
w.Object.defineProperties(N,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function O(a){this.c=a}O.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.o+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.R);else{var g=d.stargazers_count;b.c.title=d.description;d=b.c.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,g)}};c.send()};
w.Object.defineProperties(O,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function P(a){this.a=a}P.prototype.render=function(){var a=this.a.firstElementChild,b;a.onchange=function(){var d=a.value;if(d!=b&&(b=d,document.cookie="manager="+d+";path=/nodetools;max-age=31536000",window["set-manager"]))window["set-manager"](d)};var c=document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/,"$1");c&&(a.value=c);a.onchange()};w.Object.defineProperties(P,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xa(a,b,c,d){var g=void 0===g?{}:g;var h=window.top,f=h.outerHeight,e=h.screenY,l=h.outerWidth,m=h.screenX;h=[];c&&h.push("width="+c,"left="+(l/2+m-c/2));d&&h.push("top="+(f/2+e-d/2-50),"height="+d);c=Object.keys(g).map(function(k){return k+"="+g[k]});h.push.apply(h,r(c));window.open(a,b,h.join(","))};function Q(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,g=a.C,h=a.title,f=a.borderRadius,e=a.g,l=a.l.j;a=(delete b.size,delete b.url,delete b.C,delete b.title,delete b.borderRadius,delete b.g,delete b.l,b);delete a.l;if(e){e=document.querySelector('meta[name="description"]');if(!e)return F("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");h=e.content;g||(g=e.content)}return F("span",Object.assign({},a),Object.entries(ya).reduce(function(m,k){var n=
q(k);k=n.next().value;var p=n.next().value;n=Object.assign({},p);p=p.color;n=(delete n.color,n);m.push(F(za,Object.assign({},n,{size:c,M:k,color:"rgb("+p+")",j:l,title:h,url:d,C:g,borderRadius:f,H:"email"==k}))," ");return m},[]))}
function za(a){var b=a.size,c=a.href,d=a.M,g=a.color,h=a.alt,f=void 0===a.width?900:a.width,e=void 0===a.height?650:a.height,l=void 0===a.borderRadius?"4px":a.borderRadius,m=a.H,k=void 0===a.j?"/":a.j,n=c(a.url,a.title,a.C);a=F("img",{src:k+"buttons/"+d+".svg",width:b,height:b,alt:h,style:"background:"+g+"; border-radius:"+l});return m?F("a",{href:n},a):F("a",{onClick:function(p){xa(n,h,f,e);p.preventDefault();return!1},href:"#"},a)}
function R(a){return Object.entries(a).map(function(b){var c=q(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var ya={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+R({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+R({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+R({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
R({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+R({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};function S(a){this.c=a}S.load=function(a){K("https://static.akashic.page/comments.css",a)};S.prototype.render=function(a){var b=this,c=a["api-key"],d=a.host;a=document.createElement("script");a.src="https://static.akashic.page/akashic.js";a.onload=function(){b.c.innerText="";window.Akashic.comments({host:d,api_key:c,scope:"/nodetools/",container:b.c.id})};document.body.appendChild(a)};w.Object.defineProperties(S,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function T(a){this.c=a}T.load=function(a,b,c){b=void 0===c.N?"default":c.N;var d=c.lang;c=c.l.j;d||a(Error("The language was not specified."));var g=d.split(",").map(Aa);ta([c+"js/highlight.pack.js"],function(h){if(h)return a(h);ta(g,a)});b&&K(c+"highlight.js/styles/"+b+".css",function(){})};T.prototype.render=function(){hljs.highlightBlock(this.c.querySelector("code"))};w.Object.defineProperties(T,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});
function Aa(a){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/languages/"+a+".min.js"};var U={};

//# sourceMappingURL=common.js.map