var Ua={"styles/bandcamp.css":{},"styles/sidebar.css":C,"styles/on-this-page.css":D};(function(){var a=document.querySelector("#BandcampBabylon");window.bandcampLoaded=function(){a.removeChild(a.querySelector("img"));a.removeChild(a.querySelector("div"));a.querySelector("iframe").style.height="42px"};if(a){var b=a.querySelector("#BandcampBabylon div");b&&(b.onclick=function(){b.querySelector("span").innerHTML="Loading...";b.onclick=null;a.innerHTML+='<iframe onload="bandcampLoaded()" style="border: 0; width: 100%; height: 0;" src="https://bandcamp.com/EmbeddedPlayer/track=2501984252/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="http://ruffdiamondmusic.bandcamp.com/track/babylon-shall-fall-lola-ft-william-spring">Babylon shall fall - Lola Ft William Spring by Roll &amp; Record</a></iframe>'})}})();
z();A();B();var Va={"akashic-comments":T,"akashic-emails":N,"akashic-updates":O,"github-badge":P,highlightjs:U,manager:Q,"social-buttons":R},Wa=J();
[{key:"akashic-updates",id:"updates-div",props:{v:"akashic"}},{key:"github-badge",id:"cacd9",props:{s:"art-deco",name:"nodetools"}},{key:"highlightjs",id:"ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9",props:{lang:"javascript"}},{key:"social-buttons",id:"cef93",props:{url:"https://art-deco.github.io/nodetools/babel-when-open-source-is-not-free-sofware.html",i:!0,className:"b-xq b-Hk"}},{key:"akashic-emails",id:"emails-div",props:{"api-key":"akashic"}},
{key:"akashic-comments",id:"comments-div",props:{"api-key":"akashic"}},{key:"manager",id:"ca13e"}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,g=void 0===a.children?[]:a.children,h=Va[b],f=h.plain||/^\s*class\s+/.test(h.toString())&&!H.isPrototypeOf(h);d.m={l:"/nodetools/",C:function(e){return E(Ua[e])}};c.split(",").forEach(function(e){var k=I(e,b),m=k.parent,l=k.f;if(l){var n={key:b,id:e,plain:f},p;l.render=function(){return p=K(n,h,p,l,m,d,g)};l.render.i=n;Wa.observe(l)}})});

//# sourceMappingURL=babel.js.map