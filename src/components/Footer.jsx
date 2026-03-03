import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (e, sectionId) => {
    // 1. Ако секцията е на текущата страница
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Височината на вашия фиксиран хедър
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    } 
    // 2. Ако сме на друга страница, navigate ще ни заведе в Home, а там трябва да имате логика за скрол
    else {
        // Оставяме Link да си свърши работата към "/"
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Колона 1: Лого и Описание */}
          <div className="space-y-6">
            <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex flex-col items-start group no-underline">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-red-500 drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">
                  АУТОГАЗ
                </span>
                <span className="text-2xl font-light tracking-widest text-red-500 group-hover:text-slate-400">
                  ВАРНА
                </span>
              </div>
              <div className="h-0.5 w-0 group-hover:w-full bg-red-500 transition-all duration-300 mb-1"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-slate-400 group-hover:text-white transition-colors">
                Professional Gas Systems
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Професионален монтаж и сервиз на автомобилни газови уредби с над 20 години опит във Варна. Гарантирано качество и икономия.
            </p>
            <nav className="flex items-center gap-4 text-indigo-500">
              <a href="https://www.facebook.com/profile.php?id=100082925620596" target="_blank" rel="noopener noreferrer" aria-label="Последвайте ни във Facebook" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/autogas_varna/" target="_blank" rel="noopener noreferrer" aria-label="Последвайте ни във Instagram" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Instagram size={20} /></a>
              {/* Премахнати празни линкове за Twitter/Linkedin, за да не дават грешка в Lighthouse */}
            </nav>
          </div>

          {/* Колона 2: Бързи връзки */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навигация</h3>
            <ul className="space-y-4 text-sm" role="list">
              <li><Link to="/" onClick={(e) => handleFooterClick(e, 'hero')} className="hover:text-red-500 transition-colors">Начало</Link></li>
              <li><Link to="/" onClick={(e) => handleFooterClick(e, 'about')} className="hover:text-red-500 transition-colors">За нас</Link></li>
              <li><Link to="/" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-red-500 transition-colors">Услуги</Link></li>
              <li><Link to="/" onClick={(e) => handleFooterClick(e, 'faq')} className="hover:text-red-500 transition-colors ">Въпроси</Link></li>
            </ul>
          </nav>

          {/* Колона 3: Контакти */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Контакти</h3>
            <ul className="space-y-4 text-sm" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-500 shrink-0" />
                <a href="https://maps.google.com/?q=гр.+Варна,+бул.+Хр.Смирненски" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">гр. Варна, бул. "Хр. Смирненски"</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <a href="tel:+359879005051" className="hover:text-white transition-colors">0879 00 50 51</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <a href="tel:+359887675981" className="hover:text-white transition-colors">0887 67 59 81</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500 shrink-0" />
                <a href="mailto:info@autogas-varna.com" className="hover:text-white transition-colors">info@autogas-varna.com</a>
              </li>
            </ul>
          </div>

          {/* Колона 4: Работно време */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Работно време</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Пон - Пет:</span>
                <span className="text-white font-medium">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-slate-300 border-b border-slate-800 pb-2">
                <span>Събота:</span>
                <span>Почивен ден</span>
              </li>
              <li className="flex justify-between text-slate-300 border-b border-slate-800 pb-2">
                <span>Неделя:</span>
                <span>Почивен ден</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 italic">
          <p>© {currentYear} Аутогаз-Варна. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer