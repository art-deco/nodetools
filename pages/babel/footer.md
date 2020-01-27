##! Conclusion

To quickly sum up, it's time to debunk myths that Open Source means free software, that popular packages are good packages, and that JavaScript is deficient because it misses types. Truly free software is the one that cares about you as a developer by honestly attempting to show as little of its presence as possible and letting you do your job rather than dictating how you must work. 4911 linking dependencies, complete negligence to documentation techniques and culture in which it's maintainers of such software who get to participate in conferences and events to lobby for the future of the language pretty much only because we've been extorted to use this software, does not make _Babel_ free.

You don't even need _Babel_ if you code Node.JS (unless for imports) because since Node 8 you have all the Ecma features that are needed - <code>async</code>, destructuring and arrow functions (with an exception of unicode property regexes), yet for some reasons, there are testing frameworks like Ava that advertise the ability to write code in latest proposals as a feature &mdash; who at all needs that? You know I feel like staying on Node 8 forever, it's like ditching a smartphone for a simpler phone. It's like a game, to ditch all too technological things in life: you start by thinking "but I've _always needed it_" and then you receive your liberation because of realisation that everything in life is artificial apart from soul, face-to-face communication and your human integrity.

<!-- <plate alt="me with art deco logo" responsive sizes="(min-width: 768px) 45vw" webp="photo" src="img/one-year/alamode/art-deco2.JPG" class="img-fluid">The only ideology that I do belong to, is _Art Deco_. It's been quite a lot of work this week on all the material, so please share it using the buttons in the top left corner so that my company does get a chance to live (and earn me some money I can spend on food 😜). -->

 <!-- and I've lost some weight from what I have remaining of my semi-vegan bones already  If you liked the article, . Remember, the aim of all this is to stand up for the truth, hard work and art of development against corporate cheats who pretend like they care for community while having done nothing for it. -->
<!-- </plate> -->

Moreover, it is the fault of _Node.JS_ who for [5 years](https://2ality.com/2014/09/es6-modules-final.html) could not add <code>imports</code> that we were under tyranny of _Babel_ and _TypeScript_. Standards don't code programs, people code programs, and it's an important take away that we should not create artificial constraints on ourselves that hamper the development process, and if risk is involved, then proper response mechanisms should be put in place instead of rejecting innovation. To quote Seneca: "It is not that we have a short time to live, but that we waste a lot of it" and we must use technology as our instruments to achieving our real goals, instead of worshipping the sacredness of our <ins>tools</ins>.

<!-- The world has gone astray and to fill in the gap in our spiritual longing we invent such sophisticated technology that is not really needed, and is there to serve rich capitalists enslaving us more and more by imprinting artificial cultural values where iPhone is your new Jesus and 5G is the Holy Spirit and to become a "unicorn" is to go to heaven. But it doesn't have to be like that. Even if you're not religious, find what makes you *human* to receive <ins>your</ins> *freedom*. For me, this is what _Art Deco_ software is about. -->

Another "free" software, _TypeScript_ is completely proprietary because you cannot go anywhere without `tsserver` binary. More and more code that you write in TypeScript, take you further and further away from pure _JavaScript_. Microsoft does not prioritise fixing bugs that prevent proper functioning of _JSDoc_, such as that types from level 2+ files are not imported which results in poor experience for developers, their confusion and subsequent switch to _TypeScript_ typings. Moreover, instead of admitting the presence of such bugs in _VS Code_ IDE, Microsoft calls for developers to switch to _TypeScript_ to avoid issues. This is not *freedom* &mdash; it's nothing less than vendor lock-in and abuse of trust that developers put in.

I hope that on the other hand, my transpiler, [ÀLaMode](alamode) can match the criteria of free software because:

<ol>
* It has 0 dependencies, so that it will not waste developer time for linking of itself and future packages.
<table style="max-width:100%;">
<tbody><tr><th>ÀLaMode: 8 yarn.lock lines</th><th>Babel: 1650 yarn.lock Lines</th></tr>
<tr><td>
<img src="./img/yarn-add-alamode.gif" alt="Installing ÀLaMode in 1 sec" img-fluid />
</td>
<td>
<img src="./img/yarn-add-babel2.gif" alt="Linking Babel's Dependencies in 20 sec" img-fluid />
</td></tr>
</tbody></table>
* It does not change anything in source code apart from <code>import</code> and <code>export</code> statements, which looks exactly like a human would write it if they were writing it using require.
* It skips adding any _interop_s that force their own interoperability standard such as `__esModule` notation.
* It solves the problem of easily importing modules, without making a cult out of transpilation and ES6 modules specification.
* It preserves _JSDoc_, allows to debug programs using a source-map generation hack, and avoids constructing ASTs which is computationally much more expensive than using regular expressions.
* Regarding freedom, using _RegExes_ means that anyone can fork my project and make simple changes (e.g., implement unnamed imports such as `import 'example'`) with minimum effort/knowledge, i.e., there's no need to dive deep into compiler theories with its visitor patterns _etc_.
<!-- * It can replace the locations of imports from <code>import t from 'package'</code> to <code>import t from '../stdlib/package'</code> to facilitate creation of  -->
</ol>

There are some limitations to ÀLaMode, such as it currently does not transpile <code>import 'example'</code> or dynamic imports, or that it might choke on `//` inside of template literals. However, it also allows to write `JSX` and can replace the locations of imports from <code>import t from 'package'</code> to <code>import t from '../stdlib/package'</code> to creation of 0-dependency packages. These features are subjects of next articles.

I hope you enjoyed reading this blog post hope you don't get the wrong impression about me some bits are personal and in the end I doubted if I should even talk of these things since not everyone will understand &#91;the place I was in &#93; but oh well it's the work that matters, so see you in next posts. Feel free to share, comment below and don't forget to [add your signature](signature)! Happy _JSDoc_ing.

<!-- end section -->
<section-break />

##! Comments

  <akashic-comments api-key="akashic" />

</div>