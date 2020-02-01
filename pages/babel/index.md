<critical-path-font text="Babel: When Open Source Is Not Free Software" family="Mr De Haviland">
  h1 { font-family: 'Mr De Haviland' }
</critical-path-font>

# Babel: When Open Source Is Not Free Software

<span text-monospace style="color:grey;">_12 August 2019_</span>

<tldr>Babel is the most relied upon software in the Node.JS ecosystem, yet it leaves out ridiculous bugs that take away essential user *freedoms* such as ability to write _JSDoc_, while its owners get paid up to $10k a month for maintenance without fixing these issues for years. _TypeScript_ also comes for free, but also has bugs of the same nature that make developers switch to the OOP ideology that is characterised by self-righteous "Open Source" community who feel free to lash out on everyone who disagrees with them. My simple software offers solutions to restore the *freedom* of the development process. It's aim is not to become popular and known, but to help ME and others program freely.</tldr>

##! Free Software VS Software For Free

When you're studying a particular topic, and express your interest in a certain area of this vast world, not only you actively find more information and opinions, but so it happens that bits of the puzzle actually find you in unexpected ways. One of this bits was a blog post ["My Personal Journey From MIT To GPL"](journey), that I came across by chance. Despite the randomness of the encounter, this article marked a milestone in my _Open Source_ career: I finally began to grasp the significance of differences between Open Source licensing models. A little bit later, I also discovered other source of knowledge from the same domain, that is, the Free Software Foundation's [philosophy](https://www.gnu.org/philosophy/free-sw.html) regarding the relation of _Open Source_ to user freedoms.

<p mb-0>
  <img img-fluid webp="photo" src="./img/IMG-9090.JPG" alt="A tower building under construction in London." />
</p>

<bandcamp-babylon />

<!-- <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=2501984252/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="http://ruffdiamondmusic.bandcamp.com/track/babylon-shall-fall-lola-ft-william-spring">Babylon shall fall - Lola Ft William Spring by Roll &amp; Record</a></iframe> -->
<div mb-3></div>

In short, the difference between `MIT`, which I used to license all my packages with just because that's how I'd been doing it from day one by following example of all other packages that did the same, and `GPL` is that anyone can take a piece of MIT work, use it in proprietary software, and start selling it without any responsibilities to the author other than retaining the copyright notice and license copy, whereas GPL requires them to publish the source code of all derived products that link to GPL-licensed code (linking means using as a dependency). This point didn't really matter to me until I realised, that the _permissive_ MIT license allowed anyone to not just use my work in their projects, but make a product out of what I'd invested hours of coding into, and then compete with me. That's probably not such big risk for when coding is your hobby, but when you accumulate a large code base that form the basis of your business operations, you start to think about certain safeguards since world is cold unless you pay for gas.

That's why I'm now releasing all my software under `AGPL` too ("*A*" meaning that it can't be installed on a server for SaaS purposes either, as my [Node.JS development company in London](https://www.artd.eco) specialises in web software). The best point of reference to understanding professional Open Source licensing is the GNU website that outlines the [Free Software Foundation philosophy](https://www.gnu.org/philosophy/open-source-misses-the-point.html). It confirmed my suspicions that there is a difference between Open Source, and Free software. In one sentence, the word *free* is used to highlight essential human freedoms and rights, such as:

<ul>
  * freedom of expression;
  <li>right for privacy &mdash; [Article 8](privacy) of the European Convention of Human Rights;</li>
  * right for data protection &mdash; [recital 1 of the GDPR](data-protection);
  * and others.
</ul>

Open Source does not really mean that software which anyone can download and which has its source code released to public, is free in humanist terms. Humans are probably the only animals that can understand respect, but there's little respect left in today's Open Source that only uses the fact that the software is provided for free to hide its incompetence. _AGPL_ is an alternative for real professionals who value their own work and pay respect to their users by putting effort into making sure that their software is of a high standard. ``AGPL`` is the license of true Open Source held on shoulders of expert software developers, whereas `MIT` is the license of poser Open Source that only swims in popularity but doesn't know a thing about quality (I'm exercising my freedom of expression).

Every society has its myths. The lack of professionalism within the "community" of developers led to sprouting of a convenient myth that those who make software without being paid, make good, quality and _free_ software. The Open Source Initiative puts it that "_the promise of open source is better quality, higher reliability, more flexibility, lower cost, and an end to predatory vendor lock-in_". Now I'm going to prove to you that one of the most installed, essential and well-known Node.JS packages, ``babel`` achieves exactly opposite objectives while justifying its shortcomings by referring to the "Open Source" label.

<section-break />