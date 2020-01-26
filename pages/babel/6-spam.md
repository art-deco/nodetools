##! A Sad Spammer Is All I Am

In October, I was casually browsing the web and found out about the recent release of React, where the link was posted to [an issue on GitHub](https://github.com/sindresorhus/ama/issues/446) that relates to ES5 transpilation. In there I saw:

<row mb-3 class="markdown-body">
  <col sm-1>
    <img alt="sindresorhus avatar" img-fluid src="https://avatars1.githubusercontent.com/u/170270?s=88&v=4" />
  </col>
  <col border-radius="3px" padding-right="0" padding-left="0" margin-right="15px" border="1px solid #e1e4e8!important">
    <table>
      <tr>
        <td class="timeline-comment-header">
        [sindresorhus](https://github.com/sindresorhus) commented on 20 Feb 2017
        </td>
      </tr>
      <tr><td style="padding: 15px;">
      While most of my modules also work in the browser, I make them mainly for Node.js. I love how dependencies in Node.js just work (1) without having to resort to a bundler, compile-step, and a huge config file. ... The web on the other hand is a mess.  ... It would also be hard for individual packages to know what Babel (2) config to use.
      </td></tr>
    </table>
  </col>
</row>

2 things to take away:

<ul>
  * Although <code>import</code> is a language feature since 2017, many people, including the top Node.JS Open Source developer, use `require` because it just works. This is also true for other packages such as Koa, Express, _etc_.
  * Babel IS de-facto what powers the web and you know that, you can't live without Babel.
</ul>

For me, keeping using `require` is not a solution when I can see how pretty <code>imports</code> are. It's like still using callbacks/promises when you can use async. Why should we all be limited in expressing ourselves using the richness of our language only because of outdated infrastructure that we have?

I knew who Sindre was because I saw how much donations he collects, but I didn't have good opinion of him exactly because of those donations. Not that I was jealous of money, I just have an issue with professionalism and whereas I don't doubt Sindre's talent or ability, it's the herd of developers that don't create anything themselves and only consume packages, donating to the Open Source "stars" because of a cult of personality. Again, controversial thinking, but I have the right to express myself. If you take into the account the fact that when I applied for Tech Nation Visa, and gave them an example of how I created a testing framework, and they called it, a "tool made using frameworks which is not used by anyone" you might be able to excuse me. I knew that if Sindre applied for the visa, he would immediately get it just because of how well he's known in the community. That's not how things should be?

For a second I thought I'm wrong about Mr Sorhus, maybe that he's actually really cool and chilled guy. So I commented on the post, "Epic I don't want to transpile anything as I also write for Node :P *@sindresorhus* you can use import and export in your packages without Babel by installing my regex-based transpiler alamode: https://github.com/a-la/alamode! It's super-fast, has a require hook and works without building any AST! You can even debug with no problems." Then I explained the bug in _Babel_.

<p>
  <img alt="my comment marked as spam on github" src="./img/spam1.png" img-fluid />
</p>

That really ticked me off. If I was a revered _Node.JS_ star, and somebody commented on one of my issues on GitHub, showing how _Babel_ is destroying JSDoc, I think I would have been like "Oh OK thank you brother/sister, I'll probably keep using <code>require</code> but thanks for your work!". It was the [second time](https://github.com/mafintosh/csv-parser/pull/91) when I showed off my work which nobody wanted, and then I vowed never to give a crap about my packages getting downloads ever again. I knew I was doing all this work for MYSELF, not for anyone. I would greatly appreciate if you skip giving me stars on _GitHub_ I really don't care. The work I've done is for my company first of all, and for the community secondly, but only community that can appreciate the importance of _JSDoc_, not community that for years doesn't see how _Babel_ is ruining it.

I only had one thought in my head, it was "it's just packages mate, just packages"... Although I do realise, that the language that I used was not appropriate, I said "🔩 (scr**) corporate Babel" and I have to issue an apology for this rude language to everyone, it's not great to talk like that. But the meaning of this word is "used to express anger or contempt" and I had nothing less than contempt for _Babel_, an essential piece of _Node.JS_ ecosystem that EVERYONE depends on, who's authors can't write a single test for _JSDoc_. Open Source: because everyone can be a professional Software Developer on the internet.
<!-- This is what I mean when I say I cherish quality and professionalism,  -->

<row color="#332725" background="#dfe7ef" border-radius="5px" margin="0" overflow="hidden" mb-3>
  <col md-7 p-3 class="order-2 order-md-1" d-flex align-self-center>
    <block-quote class="Quote" mb-0>
      <details><summary>[To be noble](http://cw.routledge.com/textbooks/alevelphilosophy/data/A2/Nietzsche/NietzscheNobility.pdf), one’s response to suffering, in oneself as much as in others, must not be to alleviate it, but to use it in becoming greater still. The noble person suffers greatly but is unwilling to cease their commitment to being great. Nor will they invite pity. So they will not try to display their suffering, but will hide it behind a mask, e.g. a mask that treats all suffering casually (§270).</summary>
      The terrible suffering of the higher person, and the herd morality that encourages the alleviation of suffering, means they often come to ruin (§269). They need to forget what they know about life and themselves, their contempt and revulsion; and so they become seduced by flattery and lose their nobility to become someone ‘great’, revered by the herd.</details>
    </block-quote>
  </col>
  <col md-5 class="order-1 order-md-2" padding-left=".1px" padding-right="0" d-flex flex-column>
    <img alt="eagle photo" responsive webp="photo" src="img/one-year/alamode/eagle.jpg" class="img-fluid mt-auto" />
  </col>
</row>

Nobility or strive for it means a lot to me, but it's not measured in money at all. I might not have the visa, I might have no money on my account and in a year I might have only bought 1 piece of clothes which is track suite bottoms that I wear almost every day, what I do have is my commitment to quality software, own _Node.JS_ stack and independence. I don't need to be told how to think or how to do things. I never needed any _Tech Nation_ experts to comment on my work, I know that I am the best expert out of all of them put together. So I'm sorry for reacting like I do now towards the state of _Node.JS_ today, but what am I supposed to be when the most important thing that I have in life, my work, is said to be made using frameworks by corrupt uneducated liars like _Tech Nation_ who pretend to be an endorsing body in the UK? Please add your signature if words "professional", "quality" and "noble" mean something for you too.

<block-quote>
  <add-file>audio/hive.m4a</add-file>
  <audio src="audio/hive.m4a" controls>
    Your browser does not support the audio tag.
  </audio>
  [We are unknown](https://www.gutenberg.org/files/52319/52319-h/52319-h.htm), we knowers, ourselves to ourselves: this has its own good reason. We have never searched for ourselves—how should it then come to pass, that we should ever find ourselves? Rightly has it been said: "Where your treasure is, there will your heart be also." Our treasure is there, where stand the hives of our knowledge. It is to those hives that we are always striving; as born creatures of flight, and as the honey-gatherers of the spirit, we care really in our hearts only for one thing—to bring something "home to the hive!" <small>Nietzsche is medicine to soul.</small>
</block-quote>

<!-- <p>When I was 13 and started to learn _ActionScript_, I used to hang out on a forum with other developers, so I know what a community means. Now I don't belong to any community and don't hang out anywhere, it's not a subject at uni like "Being Part Of Developer Community" and due to experiences in life, coding was my means of dealing with stuff, and I don't think it's wrong to dedicate my time to programming instead of hanging out on Twitter or anywhere else doing and thinking the same things everyone else does. When Tech Nation tell me that I have no community profile which wasn't my criteria, and ignore my programming work, it's the biggest insult to a creative person they can make. I love Nietzsche and when his audiobooks come up in my iPod, all the pain is soothed. </p> -->

<section-break />