import { render, Component } from 'preact'
import fetch from 'unfetch'
import './style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      /** @type {_nodetools.User} */
      user: null,
    }
  }
  render() {
    const { error, loading, user } = this.state
    if (loading) return (<div>Loading...</div>)
    if (error) return (<div className="Error">Error: {error}</div>)
    return (<div>
      Hello From Preact Component
      {user && ', '}
      {user && <span className="UserName">{user.name}</span>}
    </div>)
  }
  componentDidMount() {
    this.fetch()
  }
  async fetch() {
    this.setState({ loading: true })
    try {
      const res = await fetch('/api')
      const { error, user } =
        /** @type {!_nodetools.ServerResponse} */ (await res.json())
      if (error) return this.setState({ error })
      this.setState({ user })
    } catch(err) {
      let error = err
      if (err instanceof Event) {
        error = { message: 'Network error' }
      }
      this.setState({ error })
    } finally {
      this.setState({ loading: false })
    }
  }
}

render(<App />, window['app'])

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').ServerResponse} _nodetools.ServerResponse
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').User} _nodetools.User
 */