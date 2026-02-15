import { react, useEffect } from 'react';
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import Services from '../components/Services'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

useEffect(() => {
    // Проверяваме дали сме дошли тук с "инструкция" за скролване
    if (location.state?.scrollToId) {
      const id = location.state.scrollToId;
      
      // Малко изчакване, за да сме сигурни, че елементите са заредени
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 300);

      // Изчистваме състоянието, за да не скролва пак при refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);
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
