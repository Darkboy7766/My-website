import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react' // Внасяме motion

const BlogCard = () => {
  // Вариант за плавно излизане на текста един по един
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Време между появата на всеки параграф
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title title="За нас" subTitle="Професионален сервиз за автомобилни газови уредби. Вашият надежден партньор." />
      </motion.div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 max-md:px-4 mt-10 max-w-7xl mx-auto">
        
        {/* ЛЯВА ЧАСТ: Изображение с лек зуум и плаваща сянка */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          <div className="relative shadow-2xl shadow-indigo-600/30 rounded-2xl overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.05 }} // Лек зуум при посочване с мишката
              transition={{ duration: 0.4 }}
              className="max-w-lg w-full object-cover rounded-2xl"
              src={assets.banner}
              alt="Сервиз Аутогаз Варна" 
            />
          </div>
          {/* Декоративен елемент зад снимката */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full -z-10 blur-2xl opacity-60"></div>
        </motion.div>

        {/* ДЯСНА ЧАСТ: Текст с каскадно появяване */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base text-slate-600 max-w-lg leading-relaxed"
        >
          <motion.h2 variants={itemVariants} className="text-2xl uppercase font-bold text-slate-800 flex items-center gap-3">
            Аутогаз-Варна
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 rounded-full bg-linear-to-r from-indigo-600 to-indigo-300 mb-6"
          ></motion.div>

          <motion.p variants={itemVariants} className="mb-4 text-slate-700">
            Добре дошли в нашия специализиран сервиз! С дългогодишен опит и експертиза, ние предлагаме пълна гама от услуги за монтаж и поддръжка на системи от водещи световни производители.
          </motion.p>

          <motion.p variants={itemVariants} className="font-bold text-slate-800 border-l-4 border-indigo-500 pl-4 py-1 my-6 bg-indigo-50/50">
            Предлагаме специализирани решения за всеки тип двигател.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            <div>
              <p className="font-bold text-slate-800 tracking-tight">Двигатели с директно впръскване (DI/FSI/TSI/GDI)</p>
              <p className="text-sm">Притежаваме оборудване за монтаж на газови системи на най-съвременните двигатели.</p>
            </div>

            <div>
              <p className="font-bold text-slate-800 tracking-tight">Двигатели с индиректно впръскване (MPI)</p>
              <p className="text-sm">За класическите двигатели предлагаме проверени и надеждни решения:</p>
              <ul className="mt-2 space-y-1 text-sm italic">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Секвенциални системи от 4-то поколение
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Оптимална настройка за всяка марка
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

      </section>
    </div>
  )
}

export default BlogCard