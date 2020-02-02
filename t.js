import dropcss from 'dropcss'
import { readFileSync } from 'fs'

dropcss({
  html: readFileSync('docs/trapcss-2-advanced-nodetools.html', 'utf8'),
  css: '',
})

// const { 'a': a } = require(/* dpck */'package')
// console.log(a)