function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function r(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},t;
if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var ca={v:!0},v={};try{v.__proto__=ca;u=v.v;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var w=t;
function x(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(w)w(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}function da(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var y=da(this),ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function z(a,b){if(b){var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ea(c,a,{configurable:!0,writable:!0,value:b})}}z("globalThis",function(a){return a||y});
var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};z("Object.assign",function(a){return a||fa});
z("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});
z("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function A(){var a=r(document.querySelectorAll("div[data-section]")).concat();if(a.length){var b=new IntersectionObserver(function(c){c.forEach(function(d){var f=d.target.id;d.isIntersecting?document.querySelector('[data-heading="'+f+'"]').classList.add("Active"):document.querySelector('[data-heading="'+f+'"]').classList.remove("Active")})},{});a.forEach(function(c){b.observe(c)})}};function B(){var a=document.getElementById("HideMenu"),b=document.getElementById("ShowMenu");a&&(a.onclick=function(c){c.target.parentElement.classList.remove("sidebarshowing");return!1});b&&(b.onclick=function(c){c.target.parentElement.classList.add("sidebarshowing");return!1})};var C={SideBarContent:"a"};var D={};function E(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var f=a[d];return f?f:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var F=window.preact,G=F.h,H=F.Component,ha=F.render;function I(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,a:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function J(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var f=new IntersectionObserver(function(e){e.forEach(function(n){var g=n.target,k=g.render.b,m=k.key,h=k.id,l=k.plain;if(n.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",l?"":" Preact",m,h,g);try{var p=g.render();p&&!p.unrender&&f.unobserve(g)}catch(ia){d&&console.warn(ia)}}else k.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",l?"":" Preact",m,h,g),k.instance.unrender())})},Object.assign({},{rootMargin:c},a));return f}function K(a,b,c,d){this.j=d;this.o=c;this.a=a;this.parent=b;this.unrender=this.c=null}
K.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.c)this.c.componentDidMount&&this.c.componentDidMount(),this.c.forceUpdate();else{this.j.render(this.j.h(this.o,b,a),this.parent,this.a);var c=this.a._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.c=c}};
function L(a,b,c,d,f,e,n){function g(){c.render(Object.assign({},e,{children:n}));a.instance=c}var k={render:ha,Component:H,h:G},m=a.plain;!c&&m?c=new b(d,f):c||(c=new K(d,f,b,k));b.load?b.load(function(h,l){l&&Object.assign(e,l);h?console.warn(h):g()},d,e):g();return c};function M(a,b){this.loaded=this.c=null;this.o=[a];this.j=[b]}M.prototype.error=function(a){this.c=a;this.j.forEach(function(b){b(a)})};M.prototype.load=function(a){this.loaded=a;this.o.forEach(function(b){b(a)})};function ja(a,b,c){var d=document.createElement("script");d.src=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)}function ka(a,b,c){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)};function la(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function N(a,b){var c=O(a,ka,P[a],function(d){return b(null,d)},function(d){return b(d)},a.nocache);c&&(P[a]=c)}
function O(a,b,c,d,f,e){if(e)b(a,d,f);else if(c&&c.loaded)d(c.loaded);else if(c&&c.c)f(c.c);else if(c)c.o.push(d),c.j.push(f);else{var n=new M(d,f);b(a,function(g){n.load(g)},function(g){n.error(g)});return n}}function Q(a,b){var c=!1,d=[],f=0;a.forEach(function(e,n){function g(m){c||(c=m,b(m))}function k(m){c||(f++,d[n]=m,f==a.length&&b(null,d))}e.endsWith(".json")?la(e,function(m,h){m?g(m):k(h)}):ma(e,k,g)})}var R={},P={};function ma(a,b,c){(b=O(a,ja,R[a],b,c,a.nocache))&&(R[a]=b)};function S(){return H.apply(this,arguments)||this}x(S,H);S.load=function(a){N("https://static.akashic.page/comments.css",a)};S.prototype.render=function(a){var b=a["api-key"],c=a.host;a=document.createElement("script");a.src="https://static.akashic.page/akashic.js";a.onload=function(){document.getElementById("emails-div").innerText="";window.Akashic.emails({host:c,api_key:b,project:"nodetools",container:"emails-div"})};document.body.appendChild(a);return G("div",{id:"emails-div"})};function T(){return H.apply(this,arguments)||this}x(T,H);T.load=function(a){N("https://static.akashic.page/comments.css",a)};
T.prototype.render=function(a){var b=Object.assign({},a),c=a["api-key"],d=a.host;a=(delete b["api-key"],delete b.host,b);if(!("serviceWorker"in navigator&&"PushManager"in window))return G("div",Object.assign({},a),"Your browser doesn't support web-push.");b=document.createElement("script");b.src="https://static.akashic.page/akashic.js";b.onload=function(){document.getElementById("updates-div").innerText="";window.Akashic.updates({host:d,container:"updates-div",scope:"/nodetools/",api_key:c})};document.body.appendChild(b);
return G("div",Object.assign({},a,{id:"updates-div"}))};function U(a){this.a=a}U.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.i+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.F);else{var f=d.stargazers_count;b.a.title=d.description;d=b.a.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,f)}};c.send()};
y.Object.defineProperties(U,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function na(a,b,c,d){var f=void 0===f?{}:f;var e=window.top,n=e.outerHeight,g=e.screenY,k=e.outerWidth,m=e.screenX;e=[];c&&e.push("width="+c,"left="+(k/2+m-c/2));d&&e.push("top="+(n/2+g-d/2-50),"height="+d);c=Object.keys(f).map(function(h){return h+"="+f[h]});e.push.apply(e,r(c));window.open(a,b,e.join(","))};function V(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,f=a.s,e=a.title,n=a.borderRadius,g=a.b,k=a.g.f;a=(delete b.size,delete b.url,delete b.s,delete b.title,delete b.borderRadius,delete b.b,delete b.g,b);delete a.g;if(g){g=document.querySelector('meta[name="description"]');if(!g)return G("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");e=g.content;f||(f=g.content)}return G("span",Object.assign({},a),Object.entries(oa).reduce(function(m,h){var l=
q(h);h=l.next().value;var p=l.next().value;l=Object.assign({},p);p=p.color;l=(delete l.color,l);m.push(G(pa,Object.assign({},l,{size:c,B:h,color:"rgb("+p+")",f:k,title:e,url:d,s:f,borderRadius:n,A:"email"==h}))," ");return m},[]))}
function pa(a){var b=a.size,c=a.href,d=a.B,f=a.color,e=a.alt,n=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,k=void 0===a.borderRadius?"4px":a.borderRadius,m=a.A,h=void 0===a.f?"/":a.f,l=c(a.url,a.title,a.s);a=G("img",{src:h+"buttons/"+d+".svg",width:b,height:b,alt:e,style:"background:"+f+"; border-radius:"+k});return m?G("a",{href:l},a):G("a",{onClick:function(p){na(l,e,n,g);p.preventDefault();return!1},href:"#"},a)}
function W(a){return Object.entries(a).map(function(b){var c=q(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var oa={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+W({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+W({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+W({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
W({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+W({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};function X(){return H.apply(this,arguments)||this}x(X,H);X.load=function(a){N("https://static.akashic.page/comments.css",a)};X.prototype.render=function(a){var b=a["api-key"],c=a.host;a=document.createElement("script");a.src="https://static.akashic.page/akashic.js";a.onload=function(){document.getElementById("comments-div").innerText="";window.Akashic.comments({host:c,api_key:b,scope:"/nodetools/",container:"comments-div"})};document.body.appendChild(a);return G("div",{id:"comments-div"})};function Y(a){this.a=a}Y.load=function(a,b,c){b=void 0===c.C?"default":c.C;var d=c.lang;c=c.g.f;d||a(Error("The language was not specified."));var f=d.split(",").map(qa);Q([c+"js/highlight.pack.js"],function(e){if(e)return a(e);Q(f,a)});b&&N(c+"highlight.js/styles/"+b+".css",function(){})};Y.prototype.render=function(){hljs.highlightBlock(this.a.querySelector("code"))};y.Object.defineProperties(Y,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});
function qa(a){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/languages/"+a+".min.js"};

//# sourceMappingURL=common.js.map