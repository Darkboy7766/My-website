import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const About = () => {
  const brands = [
    {
      img: assets.brc_logo,
      title: "BRC - Италианско Качество и Иновации.",
      desc: "Като официални партньори, предлагаме най-новите решения от този италиански лидер. BRC системите са синоним на надеждност и дългосрочна експлоатация.",
      width: "w-32"
    },
    {
      img: assets.prins_logo,
      title: "Prins - Холандска Прецизност.",
      desc: "Сертифицирани сме за монтаж и обслужване на Prins системи - холандската марка, известна със своите високотехнологични решения и безкомпромисно качество.",
      width: "w-36"
    },
    {
      img: assets.aeb_logo,
      title: "AEB - Проверено Европейско Качество.",
      desc: "Работим с AEB - италиански производител с богата история. Техните системи са оптималното съчетание между цена и качество за всеки автомобил.",
      width: "w-36"
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <Title 
        title="Какво предлагаме" 
        subTitle="Консултация и подбор на оптималната система за вашия автомобил"
      />
      
      <div className="flex flex-wrap items-stretch justify-center gap-8 mt-16 max-w-7xl mx-auto">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }} // Повдигане при посочване
            className="max-w-sm flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="h-20 flex items-center mb-6">
              <img 
                className={`${brand.width} grayscale-30 hover:grayscale-0 transition-all duration-500 object-contain`} 
                src={brand.img} 
                alt={brand.title} 
              />
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
              {brand.title}
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              {brand.desc}
            </p>

            <div className="mt-auto pt-6">
              <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About