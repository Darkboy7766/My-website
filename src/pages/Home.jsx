import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import Services from '../components/Services'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="faq"><Faq /></div>
      <Footer />
    </>
  )
}

export default Home
