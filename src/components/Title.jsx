import { motion } from 'motion/react'

const Title = ({ title, subTitle }) => {
  return (
    <div className='text-center mb-16 overflow-hidden px-4'>
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
        viewport={{ once: true }}
        className="text-indigo-600 font-bold text-xs uppercase mb-3 block tracking-widest"
      >
        Autogas Varna
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight'
      >
        {title}
      </motion.h2>

      <div className="relative flex justify-center items-center mb-8">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='h-1.5 bg-linear-to-r from-indigo-600 to-blue-400 rounded-full'
        ></motion.div>
      </div>

      {subTitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-slate-600 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed'
        >
          {subTitle}
        </motion.p>
      )}
    </div>
  )
}

export default Title
