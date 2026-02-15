import React from 'react'
import Title from './Title' // Използваме основния Title за консистенция
import { motion } from 'motion/react'
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md'
import Obfuscate from 'react-obfuscate'
import ContactForm from './ContactForm'

const Location = () => {
  const contactDetails = [
    {
      icon: <MdOutlinePhone />,
      title: "Телефон",
      content: ["0887 67 59 81", "0879 00 50 51", "052 50 12 19"],
      delay: 0.2,
      isEmail: false
    },
    {
      icon: <MdOutlineLocationOn />,
      title: "Адрес",
      content: ["гр. Варна", 'бул. "Хр. Смирненски" до OMV'],
      delay: 0.4,
      isEmail: false
    },
    {
      icon: <MdOutlineEmail />,
      title: "Имейл",
      content: ["info@autogas-varna.com", "autogas_varna@abv.bg"],
      delay: 0.6,
      isEmail: true
    }
  ];

  return (
    <div className="py-20 bg-white">
      <Title 
        title="Свържете се с нас" 
        subTitle="Нашите експерти са на Ваше разположение за консултация и записване на час." 
      />
      
      <div className="max-w-7xl mx-auto px-6 mt-16flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-4xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group transition-all"
            >
              {/* Икона с динамичен фон */}
              <div className="p-5 text-4xl text-white rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                {item.title}
              </h3>

              <div className="space-y-2">
                {item.content.map((line, i) => (
                  <p key={i} className="font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    {item.isEmail ? <Obfuscate email={line} /> : line}
                  </p>
                ))}
              </div>

              {/* Декоративна линия */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-600 group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        <div id="contact-form-section" className="w-full max-w-4xl mt-12 mx-auto px-4"> 
          <ContactForm />
        </div>

        {/* Секция с картата */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-20 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50"
        >
          <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.653456789!2d27.9000!3d43.2100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEyJzM2LjAiTiAyN8KwNTQnMDAuMCJF!5e0!3m2!1sbg!2sbg!4v1234567890" 
            className='w-full h-125 grayscale hover:grayscale-0 transition-all duration-1000 border-none'
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          
          {/* Инфо кутия върху картата (Desktop само) */}
          <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hidden lg:block max-w-xs">
            <p className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-2">Работно Време</p>
            <p className="text-slate-800 font-bold">Пон - Пет: 09:00 - 18:00</p>
            <p className="text-slate-500 text-sm mt-2 font-medium italic">Заповядайте на място за безплатна диагностика на Вашата газова система!</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Location;