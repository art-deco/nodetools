export default class Mask {
  static get 'plain'() {
    return true
  }
  static async 'load'(a, b, { file }) {
    const img = document.createElement('img')
    img.src = file
    img.onload = () => {
      a(null, { img })
    }
    img.onerror = () => {
      a(new Error('Could not load the image.'))
    }
  }
  /**
   * @param {!Element} el
   */
  constructor(el) {
    this.div = el
    /** @type {!HTMLCanvasElement} */
    this.canvas = el.firstElementChild
    this.ctx = this.canvas.getContext('2d')
    this.ctx.font = '1rem "Ruda"'
    this.ctx.fillText('Problem space is loading...', 10, 50)
    this.a = this.canvas.nextElementSibling
  }
  /**
   * @param {{ img: HTMLImageElement }} props
   */
  render({ img }) {
    this.img = img
    this.width = img.width
    this.height = img.height
    this.canvas.width = this.width
    this.canvas.height = this.height

    img.style['max-width'] = '100%'
    img.style.opacity = 0.125
    img.style.position = 'absolute'
    img.style.top = 0
    img.style.left = 0
    this.div.insertBefore(img, this.canvas)

    this.redraw({ x: -this.width, y: -this.height })

    this.listener = (e) => {
      const mouse = getMouse(e, this.canvas)
      this.redraw(mouse)
    }

    img.addEventListener('mousemove', this.listener, false)

    let lightsOn = false

    this.a.onclick = (ev) => {
      ev.preventDefault()
      lightsOn = !lightsOn
      this.a.innerHTML = lightsOn ? 'Lights Off' : 'Lights On'
      img.style.opacity = lightsOn ? 0.85 : 0.125
      return false
    }
  }
  unrender() {
    this.img.removeEventListener('mousemove', this.listener)
    this.div.removeChild(this.img)
  }
  redraw(mouse) {
    const { canvas: can, img, ctx } = this
    can.width = can.width
    ctx.drawImage(img, 0, 0)
    ctx.beginPath()
    ctx.rect(0,0,this.width,this.height)
    ctx.arc(mouse.x, mouse.y, 70, 0, Math.PI*2, true)
    ctx.clip()
    ctx.fillRect(0,0,this.width,this.height)
    ctx.font = '1rem "Ruda"'
    ctx.fillStyle = 'white'
    ctx.fillText('Mask', mouse.x - 20, mouse.y - 80)
  }
}


function getMouse(e, canvas) {
  var element = canvas,
    offsetX = 0,
    offsetY = 0,
    mx, my

  // Compute the total offset. It's possible to cache this if you want
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft
      offsetY += element.offsetTop
    } while ((element = element.offsetParent))
  }

  mx = e.pageX - offsetX
  my = e.pageY - offsetY

  // We return a simple javascript object with x and y defined
  return {
    x: mx,
    y: my,
  }
}