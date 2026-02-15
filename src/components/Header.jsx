import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Добавихме useLocation
import { assets } from "../assets/assets";
import { Mail } from 'lucide-react';
import { Clock8 } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { motion } from "motion/react";

const Header = () => {
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/Prices' },
        { name: 'Галерия', path: '/Gallery' },
        { name: 'Контакти', path: '/Contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Следи къде се намираме в сайта
    const navigate = useNavigate(); // За пренасочване

     // Функция за скролване или навигация
    const handleActionClick = () => {
        setIsMenuOpen(false); // Затваря мобилното меню ако е отворено

        if (location.pathname === '/Contact') {
            // Ако сме на страницата, само скролваме
            const contactSection = document.getElementById('contact-form-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Ако сме другаде, отиваме на Контакти с "anchor"
            navigate('/Contact');
            // Малък timeout, за да изчакаме зареждането на страницата преди скрола
            setTimeout(() => {
                const contactSection = document.getElementById('contact-form-section');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    useEffect(() => {
  const handleScroll = () => {
    const isMobile = window.innerWidth < 768;

    // Ако сме на мобилно, винаги е "scrolled" (бял фон, фиксиран горе)
    if (isMobile) {
      setIsScrolled(true);
      return;
    }

    // Логика за десктоп
    if (location.pathname !== '/') {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 10);
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, [location.pathname]);

const pulseVariants = {
        active: {
            scale: [1, 1.03, 1],
            transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
            }
        },
        stop: {
            scale: 1
        }
        };

    return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

       <div className={`hidden md:flex w-full px-1 font-medium text-xs bg-white text-slate-800 border-b border-gray-100 transition-all duration-300 ${isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-10"}`} >
        {/* Topbar left */}
        <div className="flex md:w-auto lg, xl:w-1/2 items-center justify-start ml-3 xl:ml-10">
            <Clock8 size={14} className="ml-2 lg:ml-5" />
            <p><span className="py-1 mr-2"></span>Понеделник - Петък : 08 - 17 ч.</p>
            <Mail  size={14} className="ml-2 lg:ml-5" />
            <p><span className="py-1 mr-2"></span>info@autogas-varna.com</p>
        </div>
        
            {/* Topbar Right */}
            <div className="flex md:w-auto lg, xl:w-1/2 items-center justify-end ml-4 mr-3 xl:mr-10">
            <Phone  size={14} />
            <p><span className="py-1 ml-2">052 50 12 19</span></p>
            <Smartphone size={14} className="ml-2 md:ml-3 lg:ml-5" />
            <p><span className="py-1 mr-2"></span>0887 67 59 81</p>
            <Smartphone size={14} className="ml-2 md:ml-3 lg:ml-5" />
            <p><span className="py-1 mr-2"></span>0879 00 50 51</p>
        </div>
    </div>

        <nav className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 
            ${isScrolled 
                ? "bg-white/85 backdrop-blur-md py-3 shadow-md" 
        : "bg-transparent py-5 text-white"}`}> 

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                    src={isScrolled ? assets.logoLight : assets.logoDark} 
                    alt="Logo" 
                    className="h-6 lg:h-7 transition-all duration-300" 
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        className={`group flex flex-col gap-0.5 font-medium transition-colors ${isScrolled ? "text-slate-950" : "text-white"}`}
                    >
                        {link.name}
                        <div className={`${isScrolled ? "bg-slate-800" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}
                {/* Desktop Button */}
                <motion.button 
                    onClick={handleActionClick}
                    variants={pulseVariants}
                    animate={isScrolled ? "active" : "stop"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border px-6 py-2 text-sm font-bold rounded-full cursor-pointer transition-all 
                    ${isScrolled 
                        ? "border-[#cd2122] text-[#cd2122] shadow-lg shadow-red-500/10" 
                        : "border-white text-white hover:bg-white hover:text-slate-900"}`}
                >
                    ЗАПАЗИ ЧАС
                </motion.button>
            </div>

            {/* Mobile Menu Button (Animated) */}
            <div className="md:hidden flex items-center z-70">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
                >
                    {/* Горна линия */}
                    <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                        ${isMenuOpen ? "rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    
                    {/* Средна линия */}
                    <span className={`w-full h-1 rounded-full transition-all duration-300 
                        ${isMenuOpen ? "opacity-0" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    
                    {/* Долна линия */}
                    <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                        ${isMenuOpen ? "-rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 w-full h-screen bg-white text-slate-950 flex flex-col items-center justify-center gap-8 font-bold text-2xl transition-all duration-500 z-60 active:scale-95 
                ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                
                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className={`transform transition-all duration-500 delay-[${i * 100}ms] ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        {link.name}
                    </Link>
                ))}
                {/* Mobile Button */}
                <motion.button 
                                    onClick={handleActionClick}
                                    variants={pulseVariants}
                                    animate="active" // Винаги пулсира в мобилното меню
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-[#cd2122] text-white px-10 py-4 rounded-full mt-4 shadow-xl shadow-red-500/30 font-black tracking-widest text-sm"
                                >
                                    ЗАПАЗИ ЧАС
                                </motion.button>
            </div>
        </nav>
    </header>
    );
};

export default Header;