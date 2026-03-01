import React from "react";
import { Mail, Clock8, Phone, Smartphone } from 'lucide-react';

const Topbar = () => {
    return (
        /* Използваме flex-wrap, за да може ако няма място, елементите да не изчезват, 
           а да се пренаредят, и намаляваме леко размера на текста за по-добра съвместимост */
        <div className="hidden md:flex w-full py-2 px-4 lg:px-10 font-medium text-[11px] lg:text-xs bg-white/80 text-slate-800 border-b border-slate-100 items-center justify-between">
            
            {/* Лява секция */}
            <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-1.5">
                    <Clock8 size={14} className="text-slate-500" />
                    <span className="whitespace-nowrap">Пон - Пет: 08 - 17 ч.</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-slate-500" />
                    <span className="whitespace-nowrap underline decoration-slate-300">info@autogas-varna.com</span>
                </div>
            </div>
            
            {/* Дясна секция - Телефони */}
            <div className="flex items-center gap-3 lg:gap-5 ml-4">
                <div className="flex items-center gap-1 shrink-0">
                    <Phone size={13} className="text-slate-500" />
                    <span className="whitespace-nowrap">052 50 12 19</span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                    <Smartphone size={13} className="text-slate-500" />
                    <span className="whitespace-nowrap">0887 67 59 81</span>
                </div>
                {/* Тук е третият номер - добавяме му min-width, за да сме сигурни, че се рендира */}
                <div className="flex items-center gap-1 shrink-0 min-w-fit">
                    <Smartphone size={13} className="text-slate-500" />
                    <span className="whitespace-nowrap">0879 00 50 51</span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;