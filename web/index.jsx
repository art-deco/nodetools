import idio from '@idio/idio'
import render from '@depack/render'
import api from './routes/api'

const PREACT = 'https://cdnjs.cloudflare.com/ajax/libs/' +
               'preact/8.5.3/preact.umd.js'

;(async () => {
  const PROD = process.env.CLOSURE
  const { app, url, router } = await idio({
    static: {
      root: 'docs',
      use: PROD,
    },
    frontend: {
      directory: 'frontend',
      use: !PROD,
    },
  })
  router.get('/', (ctx) => {
    const script = PROD ?
      <script src="index.js"/> :
      <script type="module" src="frontend/"/>
    ctx.body = render(<div>
      <h1>Hello World</h1>
      <div id="app" />
      <script src={PREACT}/>
      {script}
    </div>, {
      addDoctype: true,
    })
  })
  router.get('/api', api)
  app.use(router.routes())
  console.log(url)
})()