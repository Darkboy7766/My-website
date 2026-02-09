/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const navLinks = [
        { name: 'Начало', path: '/' },
        { name: 'Цени', path: '/Services' },
        { name: 'Галерия', path: '/Gallery' },
        { name: 'Контакти', path: '/Contact' },
    ];


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        if(location.pathname !== '/') {
            setIsScrolled(true);
            return;
        }else {
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
       
            <nav className={`fixed left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "top-0 bg-white/80 text-slate-800 backdrop-blur-lg py-3 md:py-4" : "py-2 md:py-3"}`}>

                {/* Logo */}
                <Link to="/">
                    <img src={isScrolled ? assets.logoLight : assets.logoDark} alt="Logo" className="h-6" />
                    {/* <img src={assets.logoLight} alt="Logo" className="h-6" /> */}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-slate-800" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-slate-800" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-400`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-[#cd2122]' : 'text-[#FFF]'} transition-all`}>
                        ЗАПАЗИ ЧАС
                    </button>
                </div>

                {/* Desktop Right */}
                

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <img src={assets.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} alt="" className={`${isScrolled && "invert"} h-4.5`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-start pt-20 gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className={`top-4 absolute right-4`} onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>

    );
}

export default Navbar