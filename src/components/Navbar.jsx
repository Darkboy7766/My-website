import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Провери името на пакета (обикновено е framer-motion)

const Navbar = () => {
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/Prices' },
        { name: 'Галерия', path: '/Gallery' },
        { name: 'Контакти', path: '/Contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Функция за скролване или навигация
    const handleActionClick = (e) => {
        // Предотвратяваме стандартното поведение на Link само ако сме на същата страница
        if (location.pathname === '/Contact') {
            e.preventDefault();
            setIsMenuOpen(false);
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
        <nav 
            aria-label="Основна навигация"
            className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-9999 
            ${isScrolled 
                ? "fixed top-0 bg-white/90 py-3 shadow-md" 
                : "bg-transparent text-white"}`}
        >

            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group no-underline" aria-label="Автогаз Варна - Начало">
                <div className="flex items-center space-x-1">
                    <span className="text-xl lg:text-2xl font-black tracking-tighter transition-all duration-300 group-hover:text-red-600">
                        АУТОГАЗ
                    </span>
                    <span className="text-xl lg:text-2xl font-light tracking-widest transition-all duration-300 text-red-600 group-hover:text-slate-900">
                        ВАРНА
                    </span>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-red-600"></div>
                <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 text-slate-500 group-hover:text-slate-950">
                    Professional Gas Systems
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <ul className="flex items-center gap-4 lg:gap-8" role="list">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <Link 
                                to={link.path} 
                                aria-current={location.pathname === link.path ? "page" : undefined}
                                className={`group flex flex-col gap-0.5 font-medium transition-colors ${isScrolled ? "text-slate-950" : "text-white"}`}
                            >
                                {link.name}
                                <div className={`h-0.5 w-0 group-hover:w-full transition-all ${isScrolled ? "bg-red-600" : "bg-white"} ${location.pathname === link.path ? "w-full" : ""}`} />
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Desktop Button - Обвит в Link за SEO */}
                <Link to="/Contact" onClick={handleActionClick}>
                    <motion.div 
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
                    </motion.div>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-70">
                <button
                    aria-label={isMenuOpen ? "Затвори менюто" : "Отвори менюто"} 
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
                >
                    <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                        ${isMenuOpen ? "rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    <span className={`w-full h-1 rounded-full transition-all duration-300 
                        ${isMenuOpen ? "opacity-0" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                    <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                        ${isMenuOpen ? "-rotate-45 bg-slate-950" : (isScrolled ? "bg-slate-950" : "bg-white")}`} />
                </button>
            </div>
    
            {/* Mobile Menu Overlay */}
            <div 
                aria-hidden={!isMenuOpen}
                className={`fixed inset-0 w-full h-screen bg-white text-slate-950 flex flex-col items-center justify-center gap-8 font-bold text-2xl transition-all duration-500 z-60 
                ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            >
                <ul className="flex flex-col items-center gap-8" role="list">
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
                
                <Link to="/Contact" onClick={handleActionClick} className={isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 transition-all duration-500 delay-300"}>
                    <motion.div 
                        variants={pulseVariants}
                        animate="active"
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#cd2122] text-white px-10 py-4 rounded-full mt-4 shadow-xl shadow-red-500/30 font-black tracking-widest text-sm text-center"
                    >
                        ЗАПАЗИ ЧАС
                    </motion.div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;