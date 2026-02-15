import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'
import Title from './Title' // Използваме твоя нов Title компонент

const PriceTable = ({ brand, logo, prices, delay }) => {
  // Когато дойде време да премахнеш левовете, просто промени това на false
  const showBGN = true; 
  const euroToBgnRate = 1.95583;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden w-full max-w-87.5 group hover:border-indigo-200 transition-colors"
    >
      {/* Header */}
      <div className="p-6 bg-slate-50 flex items-center justify-between border-b border-slate-100">
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <img className="h-8 object-contain" src={logo} alt={brand} />
        </div>
        <span className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
          {brand}
        </span>
      </div>

      {/* Prices List */}
      <div className="p-6 space-y-5">
        {prices.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-bold">{item.cyl} цил.</span>
              
              <div className="text-right">
                {/* Основна цена в ЕВРО */}
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-2xl font-black text-indigo-600 tracking-tight">
                    {item.priceEuro}
                  </span>
                  <span className="text-lg font-bold text-indigo-600">€</span>
                </div>

                {/* Втора цена в ЛЕВА (Зависи от променливата showBGN) */}
                {showBGN && (
                  <div className="text-xs font-bold text-slate-400 -mt-0.5">
                    {Math.round(item.priceEuro * euroToBgnRate).toLocaleString()} лв.
                  </div>
                )}
              </div>
            </div>
            {index < prices.length - 1 && (
              <div className="w-full h-px bg-slate-50 mt-4"></div>
            )}
          </div>
        ))}
      </div>

      <div className="px-6 pb-6 text-center">
         <p className="text-[10px] text-slate-400 mb-4 italic uppercase">Курс: 1.95583 BGN = 1 EUR</p>
         <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300">
          Детайли
        </button>
      </div>
    </motion.div>
  );
};

const PriceCard = () => {
  const mpiData = [
    { brand: 'BRC', logo: assets.brc_logo, prices: [{cyl: 4, priceEuro: 1900}, {cyl: 6, priceEuro: 2400}, {cyl: 8, priceEuro: 2900}] },
    { brand: 'PRINS', logo: assets.prins_logo_90, prices: [{cyl: 4, priceEuro: 2100}, {cyl: 6, priceEuro: 2800}, {cyl: 8, priceEuro: 3400}] },
    { brand: 'AEB', logo: assets.aeb_logo_90, prices: [{cyl: 4, priceEuro: 1400}, {cyl: 6, priceEuro: 1900}, {cyl: 8, priceEuro: 2400}] },
  ];

  const diData = [
    { brand: 'BRC', logo: assets.brc_logo, prices: [{cyl: 4, priceEuro: 2300}, {cyl: 6, priceEuro: 2900}, {cyl: 8, priceEuro: 3600}] },
    { brand: 'PRINS', logo: assets.prins_logo_90, prices: [{cyl: 4, priceEuro: 2600}, {cyl: 6, priceEuro: 3200}, {cyl: 8, priceEuro: 3900}] },
    { brand: 'AEB', logo: assets.aeb_logo_90, prices: [{cyl: 4, priceEuro: 1800}, {cyl: 6, priceEuro: 2400}, {cyl: 8, priceEuro: 2900}] },
  ];

  return (
    <div className="bg-slate-50/50 py-20 px-5 space-y-32">
      {/* Секция MPI */}
      <section className="max-w-7xl mx-auto">
        <Title 
          title="Цени за двигатели MPI" 
          subTitle="Газови уредби за автомобили с индиректно впръскване" 
        />
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {mpiData.map((data, idx) => (
            <PriceTable key={idx} {...data} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      {/* Секция Direct Injection */}
      <section className="max-w-7xl mx-auto">
        <Title 
          title="Цени за двигатели DI" 
          subTitle="Специализирани системи за FSI, TFSI, TSI, GDI" 
        />
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {diData.map((data, idx) => (
            <PriceTable key={idx} {...data} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      {/* Допълнителна инфо бележка */}
      <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-indigo-50 border border-indigo-100 text-slate-600 text-sm leading-relaxed">
        <strong>* Забележка:</strong> Посочените цени са ориентировъчни и включват монтаж с цилиндрична бутилка и зарядно устройство на задната броня. Крайната цена зависи от спецификите на конкретния автомобил.
      </div>
    </div>
  )
}

export default PriceCard;