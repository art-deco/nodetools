function Z(){return M.apply(this,arguments)||this}A(Z,M);Z.load=function(a){T(a)};Z.prototype.render=function(a){var b=a["api-key"],c=a.host;a=document.createElement("script");a.src="https://static.akashic.page/akashic.js";a.onload=function(){document.getElementById("comments-div").innerText="";window.Akashic.comments({host:c,api_key:b,scope:"/nodetools/",container:"comments-div"})};document.body.appendChild(a);return L("div",{id:"comments-div"})};var na={"styles/sidebar.css":I};G();H();var oa={"akashic-comments":Z,"akashic-emails":V,"github-badge":W,"social-buttons":X},pa=O();
[{key:"github-badge",id:"cacd9",props:{l:"art-deco",name:"nodetools"}},{key:"akashic-emails",id:"emails-div",props:{"api-key":"akashic"}},{key:"akashic-comments",id:"comments-div",props:{"api-key":"akashic"}},{key:"social-buttons",id:"cb16d",props:{url:"https://art-deco.github.io/nodetools/discussion.html",c:!0,className:"b-xq b-Hk"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=oa[b],p=f.plain||/^\s*class\s+/.test(f.toString())&&!M.isPrototypeOf(f);
d.i={f:"/nodetools/",o:function(g){return J(na[g])}};c.split(",").forEach(function(g){var l=N(g,b),n=l.parent,h=l.b;if(h){var k={key:b,id:g,plain:p},m;h.render=function(){return m=Q(k,f,m,h,n,d,e)};h.render.c=k;pa.observe(h)}})});

//# sourceMappingURL=discussion.js.map