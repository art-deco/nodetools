export default () => {
  /* eslint-env browser */
  const b = document.querySelector('#BandcampBabylon')
  window['bandcampLoaded'] = () => {
    b.removeChild(b.querySelector('img'))
    b.removeChild(b.querySelector('div'))
    b.querySelector('iframe').style.height = '42px'
  }
  if (b) {
    const div = /** @type {HTMLDivElement} */ (b.querySelector('#BandcampBabylon div'))
    if (div) div.onclick = () => {
      div.querySelector('span').innerHTML = 'Loading...'
      div.onclick = null
      b.innerHTML += '<iframe onload="bandcampLoaded()" style="border: 0; width: 100%; height: 0;" src="https://bandcamp.com/EmbeddedPlayer/track=2501984252/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="http://ruffdiamondmusic.bandcamp.com/track/babylon-shall-fall-lola-ft-william-spring">Babylon shall fall - Lola Ft William Spring by Roll &amp; Record</a></iframe>'
    }
  }
}