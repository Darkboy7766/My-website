import React from 'react';
import { assets } from '../assets/assets';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-5 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/09copy.webp")] bg-no-repeat bg-cover bg-center h-screen overflow-hidden'>
      
      {/* Overlay за по-добър контраст */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }} // Започва отляво и е прозрачно
        animate={{ opacity: 1, x: 0 }}    // Отива на мястото си
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl'
      >
        {/* Анимиран бутон/линк */}
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          href="./Contact" 
          className="inline-flex items-center gap-5 lg:gap-10 xl:gap-12 bg-slate-800/80 border border-slate-700 rounded-full text-sm hover:bg-slate-700/90 transition-all group mb-6"
        >
          <span className="bg-indigo-600 text-xs px-4 py-2.5 rounded-full font-bold uppercase tracking-wider">
            Свържи се с нас
          </span>
          <p className="flex items-center gap-2 pr-4">
            <span className="hidden sm:inline">Започни да спестяваш сега.</span>
            <img 
              src={assets.arrowIcon} 
              alt="arrow-icon" 
              className="invert w-4 h-4 group-hover:translate-x-2 transition-transform" 
            />
          </p>
        </motion.a>

        {/* Анимирано заглавие */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start text-[40px] leading-tight md:text-6xl xs:text-4xl md:leading-[1.1] font-bold max-w-4xl drop-shadow-2xl"
        >
          Монтаж и сервиз на <br />
          <span className="text-indigo-400">автомобилни газови уредби.</span>
        </motion.h1>

        {/* Анимиран параграф */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-start text-lg md:text-xl text-gray-200 max-w-2xl mt-6 leading-relaxed"
        >
          Спестете до **50%** от разходите за гориво с качествен монтаж на LPG системи. 
          Доверете се на експертите с над **20 години опит**.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;