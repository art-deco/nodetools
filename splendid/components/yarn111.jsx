// export default class Yarn {
//   static get 'plain'() {
//     return true
//   }
//   /**
//    * @param {HTMLSpanElement} el
//    */
//   constructor(el) {
//     this.span = el.firstElementChild
//   }
//   render() {
//     this.span.update = (man) => {
//       if (man == 'npm') {
//         const cmd = ['npm']
//         const arg = this.span.nextElementSibling.textContent.trim()
//         if (arg != 'test') cmd.push('run')
//         this.span.textContent = cmd.join(' ')
//         this.span.parentElement.classList.remove('YarnManager')
//         this.span.parentElement.classList.add('NpmManager')
//       } else if (man == 'yarn') {
//         this.span.textContent = 'yarn'
//         this.span.parentElement.classList.add('YarnManager')
//         this.span.parentElement.classList.remove('NpmManager')
//       }
//     }
//     const current = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
//     if (current) this.span.update(current)
//   }
// }

// /**
//  * @typedef {import('splendid')} Splendid
//  */