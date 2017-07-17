import React, { Component } from 'react'
import Routes from './routes/routes'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </div>
    )
  }
}

export default App
