import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BrandPage from './pages/BrandPage';
import ModelGalleryPage from './pages/ModelGalleryPage';
import Prices from './pages/Prices';
import ScrollToTop from './components/ScrollToTop';
import { ReactLenis, useLenis } from 'lenis/react';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    
    <div>
      <ReactLenis root />
        <ScrollToTop />
      <div className='min-h-[70vh]'>
        {/* Ако пътят е '/', покажи Header, иначе покажи Navbar */}
      {location.pathname === '/' ? <Header /> : <Navbar />}
        <main className={isHomePage ? "" : ""}>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Prices' element={<Prices />}/>
          <Route path='/Gallery' element={<Gallery />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/brand/:brandId' element={<BrandPage />} />
          <Route path='/brand/:brandId/model/:modelId' element={<ModelGalleryPage />} />
        </Routes>
        </main>

      </div>
    </div>
  )
}

export default App
