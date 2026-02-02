import React from 'react'
import Title from './Title'
import {MdOutlineEmail} from "react-icons/md";
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';

const Location = () => {
  return (
    <div>

    <Title title="Свържете се с нас" subTitle="За всички въпроси за Автомобилните газови уредби"  />
        <div className="grid grid-cols-1 gap-12 m-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
                
                <span className="p-3 mt-2 text-3xl text-blue-500 rounded-full bg-blue-100/80 ">
                    <MdOutlinePhone />
                </span>
                <div className="h-0.75 w-32 my-5 bg-linear-to-l from-transparent to-blue-500"></div>
                <p className="mt-2 font-medium text-gray-600 dark:text-gray-700">0887 67 59 81</p>
                <p className="mt-2 font-medium text-gray-600 dark:text-gray-700">0879 00 50 51</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 mt-2 text-3xl text-blue-500 rounded-full bg-blue-100/80 ">
                    <MdOutlineLocationOn />
                </span>
                <div className="h-0.75 w-32 my-5 bg-linear-to-l from-transparent to-blue-500"></div>
                <p className="mt-2 font-medium text-gray-600 dark:text-gray-700">Варна</p>
                <p className="mt-2 mb-2 font-medium text-gray-600 dark:text-gray-700">бул."Хр. Смирненски" до ( OMV )</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 mt-2 text-3xl text-blue-500 rounded-full bg-blue-100/80 ">
                    <MdOutlineEmail />
                </span>
                <div className="h-0.75 w-32 my-5 bg-linear-to-l from-transparent to-blue-500"></div>
                <p className="mt-2 font-medium text-gray-600 dark:text-gray-700">info@autogas-varna.com</p>
                <p className="mt-2 mb-2 font-medium text-gray-600 dark:text-gray-700">autogas_varna@abv.bg</p>
                
            </div>
        </div>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3799.310766763347!2d27.9068559917292!3d43.22641931575579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x5d40fca96735882c!2z0JDRg9GC0L7Qs9Cw0Lct0JLQsNGA0L3QsCDQntCe0JQ!5e0!3m2!1sbg!2sbg!4v1463323092278" className='w-full h-120 mt-20'></iframe>

      
    </div>
  )
}

export default Location
