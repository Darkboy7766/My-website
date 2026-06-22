import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Clock8, Phone, Smartphone } from 'lucide-react';
import { motion } from "motion/react";
import { useLenis } from "lenis/react";

const Header = () => {
    const lenis = useLenis();
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/tseni-gazov-inzhekcion' },
        { name: 'Галерия', path: '/galeriya' },
        { name: 'Контакти', path: '/kontakti' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleActionClick = (e) => {
        if (location.pathname === '/kontakti') {
            e.preventDefault();
            setIsMenuOpen(false);
            const contactSection = document.getElementById('contact-form-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/kontakti');
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
            if (isMobile) {
                setIsScrolled(true);
                return;
            }
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
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        },
        stop: { scale: 1 }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-9999 transition-all duration-300">
            {/* TOPBAR - Коригиран за 3 номера */}
            <div className={`hidden md:flex w-full px-4 lg:px-10 font-medium text-[11px] lg:text-xs bg-white text-slate-800 border-b border-gray-100 transition-all duration-500 ease-in-out items-center justify-between ${isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-10 opacity-100"}`} >
                
                {/* Лява част: Време и Имейл */}
                <div className="flex items-center gap-4 shrink-0">
                    <div className="flex items-center gap-1.5">
                        <Clock8 size={14} className="text-red-600 shrink-0" />
                        <span className="whitespace-nowrap">Пон - Пет: 08 - 17 ч.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Mail size={14} className="text-red-600 shrink-0" />
                        <a href="mailto:info@autogas-varna.com" className="hover:text-red-600 transition-colors whitespace-nowrap">info@autogas-varna.com</a>
                    </div>
                </div>
                
                {/* Дясна част: 3-те Телефона */}
                <div className="flex items-center gap-3 lg:gap-5 shrink-0 ml-4">
                    <div className="flex items-center gap-1">
                        <Phone size={13} className="text-red-600 shrink-0" />
                        <a href="tel:+35952501219" className="hover:text-red-600 transition-colors whitespace-nowrap">052 50 12 19</a>
                    </div>
                    <div className="flex items-center gap-1">
                        <Smartphone size={13} className="text-red-600 shrink-0" />
                        <a href="tel:+359887675981" className="hover:text-red-600 transition-colors whitespace-nowrap">0887 67 59 81</a>
                    </div>
                    <div className="flex items-center gap-1">
                        <Smartphone size={13} className="text-red-600 shrink-0" />
                        <a href="tel:+359879005051" className="hover:text-red-600 transition-colors whitespace-nowrap">0879 00 50 51</a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav 
                aria-label="Основна навигация"
                className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 
                ${isScrolled ? "bg-white/95 py-3 shadow-md" : "bg-transparent py-4 text-white"}`}
            > 
                {/* Logo Section */}
                <Link
                    to="/"
                    onClick={() => lenis?.scrollTo(0)}
                    className="flex flex-col items-start group no-underline outline-none"
                >
                    <div className="flex items-center space-x-1">
                        <span className={`text-xl lg:text-2xl font-black tracking-tighter transition-all duration-300 ${isScrolled ? 'text-slate-900 group-hover:text-red-600' : 'text-white group-hover:text-red-500'}`}>
                            АУТОГАЗ
                        </span>
                        <span className={`text-xl lg:text-2xl font-light tracking-widest transition-all duration-300 ${isScrolled ? 'text-red-600 group-hover:text-slate-900' : 'text-red-500 group-hover:text-white'}`}>
                            ВАРНА
                        </span>
                    </div>
                    <div className="h-0.5 w-0 group-hover:w-full bg-red-500 transition-all duration-300 mb-1"></div>
                    <span className={`text-[8px] lg:text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-slate-300'} group-hover:text-red-500`}>
                        Professional Gas Systems
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <ul className="flex items-center gap-4 lg:gap-8 list-none m-0 p-0">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    to={link.path}
                                    className={`group flex flex-col gap-0.5 font-medium transition-colors ${isScrolled ? "text-slate-950" : "text-white"}`}
                                >
                                    {link.name}
                                    <div className={`${isScrolled ? "bg-red-600" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300 ${location.pathname === link.path ? "w-full" : ""}`} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <Link to="/kontakti" onClick={handleActionClick}>
                        <motion.div 
                            variants={pulseVariants}
                            animate={isScrolled ? "active" : "stop"}
                            whileHover={{ scale: 1.05 }}
                            className={`px-6 py-2 text-sm font-bold rounded-full transition-all border
                            ${isScrolled 
                                ? "border-red-600 text-red-600 shadow-lg shadow-red-500/10" 
                                : "border-white text-white hover:bg-white hover:text-slate-900"}`}
                        >
                            ЗАПАЗИ ЧАС
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none z-100" aria-label={isMenuOpen ? "Затвори менюто" : "Отвори менюто"} aria-expanded={isMenuOpen}>
                        <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left ${isMenuOpen ? "rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                        <span className={`w-full h-1 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                        <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left ${isMenuOpen ? "-rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    </button>
                </div>

                {/* Mobile Overlay */}
                <div 
                    aria-hidden={!isMenuOpen}
                    className={`fixed inset-0 w-full h-screen bg-white text-slate-950 flex flex-col items-center justify-center gap-8 transition-all duration-500 z-90 
                    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                >
                    <ul className="flex flex-col items-center gap-8 font-bold text-2xl" role="list">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    to={link.path} 
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{ transitionDelay: isMenuOpen ? `${i * 100}ms` : "0ms" }}
                                    className={`block transform transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/kontakti" onClick={handleActionClick} className={`transition-all duration-500 delay-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <motion.div 
                            variants={pulseVariants}
                            animate="active"
                            className="bg-red-600 text-white px-10 py-4 rounded-full shadow-xl shadow-red-500/30 font-black tracking-widest text-sm"
                        >
                            ЗАПАЗИ ЧАС
                        </motion.div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;