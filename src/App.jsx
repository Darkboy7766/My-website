import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BrandPage from './pages/BrandPage';
import ModelGalleryPage from './pages/ModelGalleryPage';

const App = () => {

  return (
    <div>
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Services' element={<Services />}/>
          <Route path='/Gallery' element={<Gallery />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/brand/:brandId' element={<BrandPage />} />
          <Route path='/brand/:brandId/model/:modelId' element={<ModelGalleryPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
