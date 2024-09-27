import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About />
       
      <Portfolio />
      <Experience />
      <SocialLinks />
    </div>
  )
}

export default App