import { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm text-slate-800 p-5 z-10000 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] border-t-2 border-red-600">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm max-w-3xl">
                    Този сайт използва бисквитки за подобряване на потребителското изживяване.
                    Вижте нашата{' '}
                    <a
                        href="/PrivacyPolicy/"
                        className="text-red-600 font-bold hover:underline underline-offset-4"
                    >
                        Политика за поверителност
                    </a>.
                </p>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={declineCookies}
                        className="border border-slate-400 text-slate-600 hover:border-slate-600 hover:text-slate-800 px-6 py-2 rounded-full font-bold transition-all text-xs"
                    >
                        САМО НЕОБХОДИМИ
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all text-xs"
                    >
                        ПРИЕМАМ ВСИЧКИ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
