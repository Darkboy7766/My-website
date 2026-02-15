import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
import { motion } from 'motion/react'

const About = () => {
  // Каскадна анимация за текстовите елементи
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-20 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Title title="За нас" subTitle="Вашият надежден партньор в икономичното шофиране." />
      </motion.div>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-6 max-w-7xl mx-auto">
        
        {/* ЛЯВА ЧАСТ: Изображение с декоративна рамка */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group w-full lg:w-1/2"
        >
          <div className="relative z-10 shadow-2xl rounded-3xl overflow-hidden border-4 border-white">
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto object-cover rounded-2xl"
              src={assets.banner}
              alt="Сервиз Аутогаз Варна" 
            />
          </div>
          {/* Декоративни елементи, които препращат към Hero секцията */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          {/* Малка "статистика" върху снимката за дълбочина */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 -right-4 md:right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-indigo-100 hidden sm:block"
          >
            <p className="text-indigo-600 font-bold text-xl leading-none">100%</p>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-tighter">Гаранция за качество</p>
          </motion.div>
        </motion.div>

        {/* ДЯСНА ЧАСТ: Текст и функционални карти */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-2">
              Аутогаз-Варна
            </h2>
            <div className="w-20 h-1.5 rounded-full bg-indigo-600 mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              С над <span className="text-indigo-600 font-bold">20 години професионален опит</span>, ние не просто монтираме уредби – ние прецизно настройваме Вашия автомобил за оптимална работа и максимална икономия.
            </p>
          </motion.div>

          {/* Grid с технологиите - Bento style light */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              variants={itemVariants}
              className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors"
            >
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                DI / TSI / GDI
              </h3>
              <p className="text-sm text-slate-500">
                Експерти в директното впръскване. Използваме софтуер от последно поколение.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors"
            >
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Класически MPI
              </h3>
              <p className="text-sm text-slate-500">
                Надеждни секвенциални системи за масовите двигатели с перфектна настройка.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="bg-indigo-600 p-6 rounded-2xl text-white shadow-xl shadow-indigo-200"
          >
            <p className="text-sm opacity-90 italic">
              "Нашата мисия е да предоставим сигурност и ефективност, които се изплащат с всеки изминат километър."
            </p>
          </motion.div>
        </motion.div>

      </section>
    </div>
  )
}

export default About