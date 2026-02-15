import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react'; // Увери се, че импортът съвпада с твоята инсталация

const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-5 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/09copy.webp")] bg-no-repeat bg-cover bg-center h-screen overflow-hidden'>
      
      {/* Overlay за по-добър контраст */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <motion.div layout
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}    
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 bg-black/20 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl'
      >
        {/* Анимиран бутон/линк */}
        <motion.a layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          href="./Contact" 
          className="inline-flex items-center gap-5 lg:gap-10 xl:gap-12 bg-slate-800/80 border border-slate-700 rounded-full text-sm hover:bg-slate-700/90 transition-all group mb-6"
        >
          <span className="bg-indigo-600 text-xs px-4 py-2.5 rounded-full font-bold uppercase tracking-wider">
            Свържи се с нас
          </span>
          <p className="flex items-center gap-2 pr-4 text-gray-200">
            <span className="hidden sm:inline">Започни да спестяваш сега.</span>
            <img 
              src={assets.arrowIcon} 
              alt="arrow-icon" 
              className="invert w-4 h-4 group-hover:translate-x-2 transition-transform" 
            />
          </p>
        </motion.a>

        {/* Анимирано заглавие */}
        <motion.h1 layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start text-4xl leading-tight md:text-6xl font-bold max-w-4xl drop-shadow-2xl"
        >
          Монтаж и сервиз на <br />
          <span className="text-indigo-400">автомобилни газови уредби.</span>
        </motion.h1>

        {/* НОВИЯТ СЕКЦИЯ СЪС СТАТИСТИКИ */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          
          {/* Статистика 1 */}
          <motion.div layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-black text-indigo-400 tracking-tighter">
              50%
            </div>
            <div className="text-sm md:text-base leading-tight text-gray-300">
              По-ниски разходи <br /> за гориво
            </div>
          </motion.div>

          {/* Статистика 2 */}
          <motion.div layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-black text-indigo-400 tracking-tighter">
              20
            </div>
            <div className="text-sm md:text-base leading-tight text-gray-300">
              Години доказан <br /> опит в LPG
            </div>
          </motion.div>

        </div>

        <motion.p layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-start text-gray-400 max-w-xl mt-6 italic border-l-2 border-indigo-500 pl-4"
        >
          Доверете се на сертифицирани експерти за Вашата сигурност на пътя.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;