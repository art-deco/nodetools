#![##Introduction] Babel: When Open Source Is Not Free Software

<span style="color:grey;">
  _12 August 2019_ | <span text-monospace>Originally published on technation.sucks</span>.
  <br>
  > This article was written after I was attacked by a malfeasant criminal manager from Tech Nation, so just bear this in mind when you try to understand what's going on with examples.
</span>

<tldr>Babel is the most relied upon software in the Node.JS ecosystem, yet it leaves out ridiculous bugs that take away essential user *freedoms* such as an ability to write _JSDoc_, while its owners get paid up to $10k a month for maintenance and attending events. _TypeScript_ also comes for free, but also has bugs of the same nature that make developers switch to the OOP ideology that is characterised by self-righteous "Open Source" community who feel free to lash out on everyone who disagrees with them. My simple software offers solutions to restore the *freedom* of the development process. It's aim is not to become popular and known, but to help people program freely.</tldr>

## Introduction

When you are studying a particular topic, and become interested in a certain area of this vast world, not only you actively find more information and opinions, but so it happens that bits of the puzzle actually find you in a completely random and unexpected ways. One of this bits was a blog post ["My Personal Journey From MIT To GPL"](journey), that I came across I don't even know how. Despite the randomness of the encounter, this article had a tremendous impact on me: I finally started to understand the significance of differences in Open Source licensing models, but more crucially, I was ready to discover other knowledge related to the same topic, that is, the meaning of Open Source and its relation to freedoms.

<p mb-0>
  <img img-fluid webp="photo" src="./img/IMG-9090.JPG" alt="A tower building under construction in London." />
</p>

<bandcamp-babylon />

<!-- <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=2501984252/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="http://ruffdiamondmusic.bandcamp.com/track/babylon-shall-fall-lola-ft-william-spring">Babylon shall fall - Lola Ft William Spring by Roll &amp; Record</a></iframe> -->
<div mb-3></div>

In short, the difference between MIT, which I put on all of my packages just because that's how I'd been doing it from day one by following the lead of all other packages that did the same, and GPL is that anyone can take a piece of MIT work, use it in proprietary software, and start selling it for cash without any responsibilities to the author (other than retaining the copyright notice and license copy), whereas GPL requires them to publish the source code of all derived products that link to GPL-licensed code (linking means using as a dependency). This point didn't really come home until I realised, that the _permissive_ MIT license allowed corporate entities to not just use my work in their work, but make a product out of what I'd invested hours of coding into, and then compete with me! That's probably not such a big risk, until you accumulate a large code base that actually makes a difference to your business operations.

That's why I'm now releasing my software under AGPL as well ("*A*" meaning that it can't be installed on a server for SaaS purposes either). However, it's not this decision that is the main point of this section, but the fact that after browsing web in search for more info on licensing, I discovered the GNU website which outlines the [Free Software Foundation philosophy](https://www.gnu.org/philosophy/open-source-misses-the-point.html), that confirmed my suspicions that there is a difference between Open Source, and Free software. In one sentence, what everyone should remember is that *free* is used to highlight essential human freedoms and rights, such as:

<ul>
  * freedom of expression;
  <li>right for privacy &mdash; [Article 8](privacy) of the European Convention of Human Rights;</li>
  * right for data protection &mdash; [recital 1 of the GDPR](data-protection);
  * and others.
</ul>

Open Source does not really mean that software which anyone can download and which has its source code released for public is free in humanist terms.

As they say, the biggest feat of Devil is that he convinced the world he doesn't exist. Same with Open Source: the myth is that just because software is made by a "community" of developers without being paid in traditional ways, just because anyone is allowed to fork it and upgrade it, and just because it can be very popular, everyone must believe that such software is quality, good and free. The Open Source Initiative puts it that "_the promise of open source is better quality, higher reliability, more flexibility, lower cost, and an end to predatory vendor lock-in_". Now I'm going to prove to you that one of the most installed, essential and well-known Node.JS packages, `babel` achieves exactly opposite objectives while justifying its shortcomings by referring to the "Open Source" label.

<section-break />