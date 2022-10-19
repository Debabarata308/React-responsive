import React from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Shop from './components/Shop'
import Menu from './components/Menu'
import Clients from './components/Clients'
import Prices from './components/Prices'

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  )
}

export default App

