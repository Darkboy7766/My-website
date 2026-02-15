import React from 'react'
import { motion } from 'motion/react'

const TitleH3 = ({ title, subTitle }) => {
  return (
    <div className='text-center my-10 overflow-hidden'>
      {/* Основното заглавие - изплува отдолу нагоре */}
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-4'
      >
        {title}
      </motion.h3>

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

export default TitleH3