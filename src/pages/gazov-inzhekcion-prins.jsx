import React from 'react';
import { motion } from 'motion/react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const GazovInzhekcionPrins = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-5">
        <Title 
        title="Газов инжекцион PRINS" 
        subTitle="" 
      />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter uppercase">
              Prins <span className="text-slate-900 lowercase underline decoration-2 underline-offset-8">Autogassystemen</span> <br/>
              <span className="text-slate-700 text-2xl">Премиум технология от Нидерландия</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Prins е синоним на иновация. Като лидери в системите за двигатели с директно впръскване (GDI, TSI), те предлагат решения, които не влияят на динамиката на автомобила и гарантират минимален бензинов разход.
            </p>
            <div className="flex gap-4">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">Премиум Качество</span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-bold text-sm">Надеждна Технология</span>
            </div>
          </div>
          <div className="flex-1">
            <img src={assets.PRINS_EDDY} alt="Prins Logo" className="w-64 mx-auto drop-shadow-xl" />
          </div>
        </div>

        

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100 shadow-inner">
            <h3 className="text-2xl font-bold mb-6">Защо да изберете Prins?</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">01.</span>
                <p><strong>Keihin Инжектори:</strong> Най-прецизните инжектори в света, разработени в Япония, осигуряващи перфектно впръскване.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">02.</span>
                <p><strong>VSI-3 DI Система:</strong> Последно поколение технология, специално за мощни двигатели с директно впръскване.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">03.</span>
                <p><strong>Максимална Икономия:</strong> Изключително ниска консумация на бензин при работа на газ (под 5%).</p>
              </li>
            </ul>
          </div>
          <div className="rounded-4xl overflow-hidden shadow-2xl bg-white">
             <img src={assets.PRINS_SHEMA} alt="Prins Газов инжекцион" className="p-5 w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center">
          <Link to="/tseni-gazov-inzhekcion" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg">
            Вижте цените за монтаж на Prins
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GazovInzhekcionPrins;