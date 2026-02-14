import React from 'react'
import Hero2 from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import BlogCard from '../components/BlogCard'
import Stats from '../components/Stats'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header />
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
