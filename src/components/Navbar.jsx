import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";

const Navbar = () => {
    const lenis = useLenis();
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/tseni-gazov-inzhekcion' },
        { name: 'Галерия', path: '/galeriya' },
        { name: 'Контакти', path: '/kontakti' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Функция за скролване или навигация
    const handleActionClick = (e) => {
        // Затваряме мобилното меню веднага
        setIsMenuOpen(false);

        if (location.pathname === '/kontakti') {
            e.preventDefault();
            const contactSection = document.getElementById('contact-form-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Ако не сме на страницата, навигираме
            navigate('/kontakti');
            // Timeout за изчакване на рендирането
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
        <nav 
            className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-9999 
            ${isScrolled ? "fixed top-0 bg-white/90 py-3 shadow-md" : "absolute top-0 bg-transparent py-6 text-white"}`}
        >

            {/* Logo */}
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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <ul className="flex items-center gap-4 lg:gap-8 list-none">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <Link 
                                to={link.path} 
                                className={`group flex flex-col gap-0.5 font-medium transition-colors ${isScrolled ? "text-slate-950" : "text-white"}`}
                            >
                                {link.name}
                                <div className={`h-0.5 transition-all ${isScrolled ? "bg-red-600" : "bg-white"} ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <Link to="/kontakti" onClick={handleActionClick}>
                    <motion.div 
                        variants={pulseVariants}
                        animate={isScrolled ? "active" : "stop"}
                        whileHover={{ scale: 1.05 }}
                        className={`border px-6 py-2 text-sm font-bold rounded-full cursor-pointer transition-all 
                        ${isScrolled 
                            ? "border-red-600 text-red-600" 
                            : "border-white text-white hover:bg-white hover:text-slate-900"}`}
                    >
                        ЗАПАЗИ ЧАС
                    </motion.div>
                </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative w-8 h-6 flex flex-col justify-between items-center z-100"
                    aria-label={isMenuOpen ? "Затвори менюто" : "Отвори менюто"}
                    aria-expanded={isMenuOpen}
                >
                    <span className={`w-full h-1 rounded-full transition-all ${isMenuOpen ? "rotate-45 translate-y-2.5 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    <span className={`w-full h-1 rounded-full transition-all ${isMenuOpen ? "opacity-0" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    <span className={`w-full h-1 rounded-full transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2.5 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                </button>
            </div>
    
            {/* Mobile Menu Overlay */}
            <div
                aria-hidden={!isMenuOpen}
                className={`fixed inset-0 w-full h-screen bg-white text-slate-950 flex flex-col items-center justify-center gap-8 transition-all duration-500 z-90
                ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
            >
                <ul className="flex flex-col items-center gap-8 font-bold text-2xl">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Тук оправихме мобилния бутон */}
                <button onClick={handleActionClick} className="mt-4" aria-label="Отвори менюто">
                    <motion.div 
                        variants={pulseVariants}
                        animate="active"
                        className="bg-red-600 text-white px-10 py-4 rounded-full shadow-xl font-black tracking-widest text-sm"
                    >
                        ЗАПАЗИ ЧАС
                    </motion.div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;