import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Добавихме useLocation
import { assets } from "../assets/assets";

const Navbar = () => {
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/Prices' },
        { name: 'Галерия', path: '/Gallery' },
        { name: 'Контакти', path: '/Contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const location = useLocation(); // Следи къде се намираме в сайта

    return (
        <nav className="sticky top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-9999 bg-white/70 py-3 shadow-md">

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                    src={assets.logoLight} 
                    alt="Logo" 
                    className="h-6 lg:h-7" 
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        className="group flex flex-col gap-0.5 font-medium transition-colors text-slate-950"
                    >
                        {link.name}
                        <div className="bg-slate-800 h-0.5 w-0 group-hover:w-full" />
                    </Link>
                ))}
                <button className="border px-6 py-2 text-sm font-bold rounded-full cursor-pointer transition-all 
                    border-[#cd2122] text-[#cd2122] hover:bg-[#cd2122] hover:text-white">
                    ЗАПАЗИ ЧАС
                </button>
            </div>

            {/* Mobile Menu Button (Animated) */}
                        <div className="md:hidden flex items-center z-70">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
                            >
                                {/* Горна линия */}
                                <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                                    ${isMenuOpen ? "rotate-45 bg-slate-950" :"bg-slate-950"}`} />
                                
                                {/* Средна линия */}
                                <span className={`w-full h-1 rounded-full transition-all duration-300 
                                    ${isMenuOpen ? "opacity-0" : "bg-slate-950"}`} />
                                
                                {/* Долна линия */}
                                <span className={`w-full h-1 rounded-full transition-all duration-300 origin-left 
                                    ${isMenuOpen ? "-rotate-45 bg-slate-950" : "bg-slate-950"}`} />
                            </button>
                        </div>
            
                        {/* Mobile Menu Overlay */}
                        <div className={`fixed inset-0 w-full h-screen bg-white text-slate-950 flex flex-col items-center justify-center gap-8 font-bold text-2xl transition-all duration-500 z-60 
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
                            
                            <button className="bg-[#cd2122] text-white px-10 py-2 rounded-full mt-4 shadow-lg active:scale-95 transition-transform">
                                ЗАПАЗИ ЧАС
                            </button>
                        </div>
        </nav>
    );
};

export default Navbar;