import React from 'react'
import { Blog, Possibility, Feature, Whatai, Header, Footer } from "./container"
import { Navbar, Cta, Brand } from "./components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatai />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App