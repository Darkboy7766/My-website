import React from 'react'
import Hero2 from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import BlogCard from '../components/BlogCard'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero2 />
      <About />
      <Stats />
      <BlogCard />
      <Faq />
      <Footer />
    </>
  )
}

export default Home
