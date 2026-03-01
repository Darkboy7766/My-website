import { React, useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Gallery from './pages/galeriya';
import Kontakti from './pages/kontakti';
import BrandPage from './pages/BrandPage';
import ModelGalleryPage from './pages/ModelGalleryPage';
import ScrollToTop from './components/ScrollToTop';
import { ReactLenis, useLenis } from 'lenis/react';
import GazovInzhekcionBrc from './pages/gazov-inzhekcion-brc';
import GazovInzhekcionPrins from './pages/gazov-inzhekcion-prins';
import GazovInzhekcionAeb from './pages/gazov-inzhekcion-aeb';
import TseniGazovInzhekcion from './pages/tseni-gazov-inzhekcion';

const App = () => {
  const location = useLocation();
  const [scrollPos, setScrollPos] = useState(0);
  const isHomePage = location.pathname === '/';
  
 useLenis(({ scroll }) => {
    // Взимаме бутона директно от документа
    const btn = document.getElementById('manual-scroll-top');
    if (btn) {
      if (scroll > 400) {
        btn.style.display = 'flex';
        btn.style.opacity = '1';
      } else {
        btn.style.display = 'none';
        btn.style.opacity = '0';
      }
    }
  });

  useEffect(() => {
    // Създаваме бутона ръчно веднъж при зареждане
    if (!document.getElementById('manual-scroll-top')) {
      const button = document.createElement('button');
      button.id = 'manual-scroll-top';
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
      
      // Брутален стил, който не зависи от нищо
      Object.assign(button.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        zIndex: '1000000',
        backgroundColor: '#7c86ff',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'none', // Първоначално скрит
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        transition: 'opacity 0.3s ease'
      });

      button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.appendChild(button);
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
}

    // Почистване при изтриване на компонента
    return () => {
      const btn = document.getElementById('manual-scroll-top');
      if (btn) btn.remove();
    };
  }, []);

  return (
    <>
      <ReactLenis root> 
      <ScrollToTop />
      <div className="relative z-10">
        {location.pathname === '/' ? <Header /> : <Navbar />}
        <main>
          <Routes>

            <Route path='/' element={<Home />}/>

            <Route path='/tseni-gazov-inzhekcion' element={<TseniGazovInzhekcion />}/>

            <Route path='/galeriya' element={<Gallery />}/>

            <Route path='/kontakti' element={<Kontakti />}/>

            <Route path='/brand/:brandId' element={<BrandPage />} />

            <Route path='/brand/:brandId/model/:modelId' element={<ModelGalleryPage />} />

            <Route path="/" element={<Home />} />
            
            <Route path="/gazov-inzhekcion-brc" element={<GazovInzhekcionBrc />} />

            <Route path="/gazov-inzhekcion-prins" element={<GazovInzhekcionPrins />} />

            <Route path="/gazov-inzhekcion-aeb" element={<GazovInzhekcionAeb />} />

          </Routes>
        </main>
      </div>

      </ReactLenis>
    </>
  )
}

export default App
