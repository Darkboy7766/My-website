import React from "react";
import { Mail } from 'lucide-react';
import { Clock8 } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';

const Topbar = () => {

    return (
       
        <div className="hidden w-full md:flex py-2.5 px-1 font-medium text-xs  bg-white/80 text-slate-800 cursor-default" >
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
            

    );
};

export default Topbar;