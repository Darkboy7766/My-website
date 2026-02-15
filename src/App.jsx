import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import ScrollToTop from './components/ScrollToTop';
import { ReactLenis, useLenis } from 'lenis/react';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root> {/* Lenis като самозатварящ се таг е най-добре за root */}
      
      <div className="relative z-10">
        {location.pathname === '/' ? <Header /> : <Navbar />}
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Prices' element={<Prices />}/>
            <Route path='/Gallery' element={<Gallery />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
        </main>
      </div>

      <ScrollToTop />

      </ReactLenis> 
    </>
  )
}

export default App
