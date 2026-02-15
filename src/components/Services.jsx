import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Services = () => {
  const brands = [
    {
      img: assets.brc_logo,
      title: "BRC Gas Equipment",
      subtitle: "Италианско Качество и Иновации",
      desc: "Като официални партньори, предлагаме най-новите решения от италианския лидер. Синоним на надеждност и дългосрочна експлоатация.",
      width: "w-32",
      accent: "from-blue-600 to-indigo-600"
    },
    {
      img: assets.prins_logo,
      title: "Prins Autogassystemen",
      subtitle: "Холандска Прецизност",
      desc: "Сертифициран монтаж на Prins - холандската марка, известна със своите високотехнологични решения за двигатели с директно впръскване.",
      width: "w-36",
      accent: "from-indigo-600 to-purple-600"
    },
    {
      img: assets.aeb_logo,
      title: "AEB Alternative Fuel",
      subtitle: "Проверено Европейско Качество",
      desc: "Италиански производител с богата история. Техните системи предлагат оптимално съчетание между цена и качество за всеки автомобил.",
      width: "w-36",
      accent: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      {/* Декоративен фон за дълбочина */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-50"></div>

      <Title 
        title="Нашите Партньори" 
        subTitle="Работим само с доказани световни лидери в производството на газови системи, за да гарантираме сигурност и икономия."
      />
      
      <div className="flex flex-wrap items-stretch justify-center gap-8 mt-16 max-w-7xl mx-auto">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -12 }} 
            className="group relative max-w-sm flex flex-col p-10 rounded-4xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
          >
            {/* Градиентен акцент при Hover */}
            <div className={`absolute top-0 left-0 w-full h-2 rounded-t-4xl bg-linear-to-r ${brand.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="h-24 flex items-start mb-8">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                className={`${brand.width} grayscale group-hover:grayscale-0 transition-all duration-700 object-contain drop-shadow-sm`} 
                src={brand.img} 
                alt={brand.title} 
              />
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1">
                {brand.title}
              </h3>
              <p className={`inline-block text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 rounded-full bg-linear-to-r ${brand.accent} text-white`}>
                {brand.subtitle}
              </p>
            </div>
            
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {brand.desc}
            </p>

            <div className="mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm cursor-pointer group/link">
              Научи повече
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services