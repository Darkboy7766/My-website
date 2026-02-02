import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import BlogCard from '../components/BlogCard'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import TrustedBrands from '../components/TrustedBrands'

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <BlogCard />
      <About />
      <TrustedBrands />
      <Faq />
      <Footer />
    </>
  )
}

export default Home
