import React from 'react'
import { motion } from 'motion/react'

const Title = ({ title, subTitle }) => {
  return (
    <div className='text-center mb-10 overflow-hidden'>
      {/* Основното заглавие - изплува отдолу нагоре */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4'
      >
        {title}
      </motion.h1>

      {/* Декоративната линия - разпъва се от центъра настрани */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='h-1.5 bg-indigo-600 mx-auto rounded-full mb-6'
      ></motion.div>

      {/* Подзаглавието - появява се плавно след линията */}
      {subTitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-slate-500 max-w-2xl mx-auto px-4 text-base md:text-lg'
        >
          {subTitle}
        </motion.p>
      )}
    </div>
  )
}

export default Title