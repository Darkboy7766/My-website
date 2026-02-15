import React from 'react'
import { motion } from 'motion/react'

const Promo = ({ title, subTitle }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Секция с фоново изображение и Overlay */}
      <section className="relative flex flex-col items-center justify-center mx-auto w-full text-center py-24 md:py-32 bg-[url('/src/assets/09copy.webp')] bg-cover bg-center bg-no-repeat">
        
        {/* Тъмен слой за по-добър контраст */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Съдържание с анимация */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-5xl font-black text-white max-w-4xl tracking-tighter uppercase">
            {title}
          </h1>
          
          <div className="h-1 w-24 mx-auto my-6 bg-indigo-500 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl font-medium">
            {subTitle}
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Promo