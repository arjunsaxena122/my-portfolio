import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import Service from './components/services/Service'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contact/>  
      <Footer/>
    </>
  )
}

export default App