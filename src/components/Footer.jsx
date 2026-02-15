import React from 'react'
import { motion } from 'motion/react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Github, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (sectionId) => {
    // 1. Ако вече сме на началната страница ('/')
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        // Изчисляваме позицията ръчно с отместване (offset) от 80px
        const offset = 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    } 
    // 2. Ако сме на друга страница (например /Prices или /Gallery)
    else {
      // Пренасочваме към началото и предаваме ID-то като "състояние" (state)
      navigate('/', { state: { scrollToId: sectionId } });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Основна секция на футъра */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Колона 1: Лого и Описание */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              АУТОГАЗ<span className="text-indigo-500">-ВАРНА</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Професионален монтаж и сервиз на автомобилни газови уредби с над 20 години опит. Гарантирано качество и икономия за Вашия автомобил.
            </p>
            <div className="flex items-center gap-4 text-indigo-400">
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Колона 2: Бързи връзки */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навигация</h3>
            <ul className="space-y-4 text-sm">
              <li><a onClick={() => handleFooterClick('hero')} className="hover:text-indigo-400 transition-colors cursor-pointer">Начало</a></li>
              <li><a onClick={() => handleFooterClick('about')} className="hover:text-indigo-400 transition-colors cursor-pointer">За нас</a></li>
              <li><a onClick={() => handleFooterClick('services')} className="hover:text-indigo-400 transition-colors cursor-pointer">Услуги</a></li>
              <li><a onClick={() => handleFooterClick('faq')} className="hover:text-indigo-400 transition-colors cursor-pointer">Въпроси</a></li>
            </ul>
          </div>

          {/* Колона 3: Контакти */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Контакти</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-500 shrink-0" />
                <span>гр. Варна, Западна промишлена зона</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <span>+359 888 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500 shrink-0" />
                <span>office@autogas-varna.com</span>
              </li>
            </ul>
          </div>

          {/* Колона 4: Работно време */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Работно време</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Пон - Пет:</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Събота:</span>
                <span className="text-white font-medium">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-indigo-400">
                <span>Неделя:</span>
                <span>Почивен ден</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Долна линия и Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 italic">
          <p>© {currentYear} Аутогаз-Варна. Всички права запазени.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика за поверителност</a>
            <a href="#" className="hover:text-white transition-colors">Общи условия</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer