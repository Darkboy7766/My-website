import { useState, useEffect, Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react';
import Home from './pages/Home';
import Header from './components/Header';
import CookieBanner from './components/CookieBanner';

const BrandPage = lazy(() => import('./pages/BrandPage'));
const ModelGalleryPage = lazy(() => import('./pages/ModelGalleryPage'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const TseniGazovInzhekcion = lazy(() => import('./pages/tseni-gazov-inzhekcion'));
const Galeriya = lazy(() => import('./pages/galeriya'));
const Kontakti = lazy(() => import('./pages/kontakti'));
const GazovInzhekcionBrc = lazy(() => import('./pages/gazov-inzhekcion-brc'));
const GazovInzhekcionAeb = lazy(() => import('./pages/gazov-inzhekcion-aeb'));
const GazovInzhekcionPrins = lazy(() => import('./pages/gazov-inzhekcion-prins'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Kalkulator = lazy(() => import('./pages/kalkulator'));

const App = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    setShowScrollTop(scroll > 400);
  });

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <ReactLenis root>
        <ScrollToTop />
        <div className="relative z-10">
          <Header />
          <main>
            <Suspense fallback={<div className='loading'>Зареждане...</div>}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/tseni-gazov-inzhekcion' element={<TseniGazovInzhekcion />}/>
                <Route path='/galeriya' element={<Galeriya />}/>
                <Route path='/kontakti' element={<Kontakti />}/>
                <Route path='/brand/:brandId' element={<BrandPage />} />
                <Route path='/brand/:brandId/model/:modelId' element={<ModelGalleryPage />} />
                <Route path="/gazov-inzhekcion-brc" element={<GazovInzhekcionBrc />} />
                <Route path="/gazov-inzhekcion-prins" element={<GazovInzhekcionPrins />} />
                <Route path="/gazov-inzhekcion-aeb" element={<GazovInzhekcionAeb />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/kalkulator" element={<Kalkulator />} />
              </Routes>
            </Suspense>
          </main>
        </div>

        {showScrollTop && (
          <button
            onClick={() => lenis?.scrollTo(0)}
            aria-label="Върни се нагоре"
            className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] z-[1000000] bg-[#7c86ff] text-white border-none rounded-full cursor-pointer flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-opacity duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        )}
      </ReactLenis>
      <CookieBanner />
    </>
  )
}

export default App
