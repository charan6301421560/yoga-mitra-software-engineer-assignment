import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn ? (
          <button type="button">Login</button>
        ) : (
          <button type="button">Logout</button>
        )}
      </div>
    )
  }
}

export default App
