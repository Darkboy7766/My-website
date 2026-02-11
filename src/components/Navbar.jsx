/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Добавихме useLocation
import { assets } from "../assets/assets";

const Navbar = () => {
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/Prices' },
        { name: 'Галерия', path: '/Gallery' },
        { name: 'Контакти', path: '/Contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Следи къде се намираме в сайта

    useEffect(() => {
        const handleScroll = () => {
            // Ако НЕ сме на началната страница, винаги е "scrolled" (бял фон)
            if (location.pathname !== '/') {
                setIsScrolled(true);
            } else {
                // Ако сме на началната, зависим от скрола
                setIsScrolled(window.scrollY > 10);
            }
        };

        // Извикваме веднага, за да се обнови при смяна на страницата
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Важно: ефектът се рестартира при смяна на URL

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-700 z-50 
            ${isScrolled 
                ? "bg-white/70 text-slate-950 backdrop-blur-md py-3 shadow-md" 
                : "top-[36px] bg-transparent text-white py-5"}`}>

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                    src={isScrolled ? assets.logoLight : assets.logoDark} 
                    alt="Logo" 
                    className="h-8 transition-all duration-300" 
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
                <button className={`border px-6 py-2 text-sm font-bold rounded-full cursor-pointer transition-all 
                    ${isScrolled ? 'border-[#cd2122] text-[#cd2122] hover:bg-[#cd2122] hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`}>
                    ЗАПАЗИ ЧАС
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <img 
                    src={assets.menuIcon} 
                    onClick={() => setIsMenuOpen(true)} 
                    alt="Menu" 
                    className={`h-6 cursor-pointer ${isScrolled ? "" : "invert"}`} 
                />
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 w-full h-screen bg-white text-gray-800 flex flex-col items-center justify-start pt-24 gap-8 font-semibold text-xl transition-transform duration-500 z-[60] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button 
                    className="absolute top-6 right-6" 
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} alt="close" className="h-8" />
                </button>

                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-[#cd2122] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                
                <button className="bg-[#cd2122] text-white px-8 py-3 rounded-full mt-4">
                    ЗАПАЗИ ЧАС
                </button>
            </div>
        </nav>
    );
};

export default Navbar;