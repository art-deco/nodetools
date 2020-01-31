##! Advanced Concepts

Now that we've transferred the source code rewritten as ECMA modules, documented it with initial examples, designed the API via types in XML, and unit-tested our library with masks and snapshots, we can move on to discussing more serious concepts such as compilation, wikis and binary functionality in the next part of this tutorial. But first, let's ~take a selfie~ actually implement the logic that we needed for our package, that is, the comment preservation feature.

In _DropCSS_ all comments are stripped prior to parsing of the CSS file.

```js
// src/css.js
function parse(css) {
  // strip comments (for now)
  css = css.replace(COMMENTS, '');
  return tokenize(css);
}
```

We make a very simple change that allows to preserve the *keepAlternate* comment. After the change is made, we run <yarn test/> to validate that all tests now pass, since we've already created a test case for `/* @alternate */` in masks in <abbr title="Test Driven Development">_TDD_</abbr> fashion.

```js
export function parse(css, keepAlternate) {
  // strip comments (for now)
  css = css.replace(COMMENTS, keepAlternate ? (m) => {
    if (/^\s*\/\* @alternate \*\/\s*$/.test(m)) return m
    return ''
  } : '')
  return tokenize(css)
}
```

Whenever the second new attribute, `keepAlternate` is passed, instead of stripping all comments that it finds, our method will test if the comment is the *alternate* block comment using a regex, and keep it if required. Although this could potentially break the parser in places, because we had tests, we don't need to be afraid of side effects introduced by this change. The author of the original package mentioned that he doesn't like the fact that such feature would have negative impact on speed, however there's no impact at all if the second argument is actually not truthy. If my advice can be of any value, please don't concern yourself with micro-optimisations and imaginary split millisecond gains at times when humanity is starting to use quantum computers.

If you need a feature, implement it regardless in what way without bothering with performance because our machines are made for computation so give them something to do. A new feature can branch out in unexpected ways and help you explore new ideas. But it's also true for when trying to overcome somebody's resistance to change, or bugs. Keep positive and treat any obstacle as a personal opportunity to create something amazing. Focus on yourself first and foremost, as you're programming for your own pleasure/business goals and don't need anyone else to tell you what is acceptable and not. You're in charge of your programs. _NodeTools_ helps you remain the master of your work.

<a btn btn-large btn-success href="trapcss2"/>

<section-break />

##! Comments

<akashic-comments api-key="akashic" />

</div>