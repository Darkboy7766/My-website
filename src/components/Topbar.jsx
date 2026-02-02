import React from "react";
import { TbClock } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

const Topbar = () => {

    return (
       
        <div className="w-full flex py-2.5 px-5 font-medium text-sm text-white bg-slate-800" >
        {/* Topbar left */}
        <div className="flex w-1/2 items-center justify-start ml-2 xl:ml-10">
            <TbClock />
            <p><span className="py-1 mr-2"></span>Пн-Пт : 08-17 ч.</p>
        </div>
            {/* Topbar Right */}
            <div className="flex w-1/2 items-center justify-end mr-2 sm:mr-5 md:mr-8 lg:mr-10 xl:mr-10">
            <TbPhoneCall />
            <p><span className="py-1 ml-2">052 50 12 19</span></p>
        </div>
    </div>
            

    );
};

export default Topbar;