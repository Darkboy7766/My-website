import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import BlogCard from '../components/BlogCard'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <BlogCard />
      <About />
      <Faq />
      <Footer />
    </>
  )
}

export default Home
