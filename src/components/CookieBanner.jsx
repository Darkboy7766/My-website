import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Малък timeout, за да не изскача банерът веднага при зареждане
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm text-slate-800 p-5 z-10000 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] border-t-2 border-red-600">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm md:text-base max-w-3xl">
                <p className="text-sm">
                    Този сайт използва бисквитки за подобряване на потребителското изживяване. 
                    Продължавайки да използвате сайта, вие се съгласявате с нашата <Link 
                            to="/PrivacyPolicy" 
                            className="text-red-600 font-bold hover:underline underline-offset-4"
                        >
                            Политика за поверителност
                        </Link>.
            </p>
            </div>
            <div className="flex gap-4 shrink-0"></div>
            <button 
                onClick={acceptCookies}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all text-xs shrink-0"
            >
                ПРИЕМАМ
            </button>
            </div>
        </div>
    );
};

export default CookieBanner;