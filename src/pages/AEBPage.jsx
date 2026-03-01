import React from 'react';
import { motion } from 'motion/react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const AEBPage = () => {
  return (
    
    <div className="min-h-screen bg-white pt-24 pb-16 px-5">
         <Title 
        title="Газов инжекцион AEB" 
        subTitle="" 
      />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter uppercase">
              AEB <span className="text-slate-900 lowercase underline decoration-2 underline-offset-8">Alternative Fuel</span> <br/>
              <span className="text-slate-700 text-2xl">Електроника за газови инжекциони</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              AEB е италианска компания, специализирана в електрониката за газови инжекциони. Тяхната технология е универсална, надеждна и позволява най-фината настройка за широка гама от автомобили.
            </p>
            <div className="flex gap-4">
              <span className="bg-slate-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">Смарт решения</span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-bold text-sm">Добра цена</span>
            </div>
          </div>
          <div className="flex-1">
            <img src={assets.AEB_Autogas} alt="AEB Logo" className="w-64 mx-auto drop-shadow-xl" />
          </div>
        </div>

        

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100 shadow-inner">
            <h3 className="text-2xl font-bold mb-6">Защо да изберете AEB?</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">01.</span>
                <p><strong>Прецизен софтуер:</strong> Възможност за коригиране на горивните времена във всяка точка от оборотите.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">02.</span>
                <p><strong>Универсалност:</strong> Отлично работи както с по-стари, така и с по-нови атмосферни двигатели.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">03.</span>
                <p><strong>Достъпна поддръжка:</strong> Лесна за диагностика и с изключително изгодна цена за поддръжка.</p>
              </li>
            </ul>
          </div>
          <div className="rounded-4xl overflow-hidden shadow-2xl bg-slate-200">
             <img src={assets.MP48_OBD} alt="AEB ECU" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center">
          <Link to="/prices" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg">
            Вижте цените за монтаж на AEB
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AEBPage;