import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // ЗАМЕНИ ТЕЗИ ТРИ СТОЙНОСТИ С ТВОИТЕ ОТ EMAILJS
    const SERVICE_ID = import.meta.env.VITE_CONTACT_FORM_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_CONTACT_FORM_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_CONTACT_FORM_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSent(true);
          setIsSending(false);
          form.current.reset(); // Изчиства формата
          setTimeout(() => setIsSent(false), 5000); // Скрива съобщението след 5 сек
      }, (error) => {
          alert("Грешка при изпращането, моля опитайте пак.");
          setIsSending(false);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-sm"
    >
      {isSent ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-4 text-green-600"
        >
          <CheckCircle size={40} className="mb-2" />
          <p className="font-bold">Благодарим Ви! Запитването е изпратено успешно.</p>
        </motion.div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              name="name" // Трябва да съвпада с шаблона в EmailJS
              type="text" 
              placeholder="Вашето име"
              className="flex-1 px-5 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
              required
            />
            <input 
              name="phone" // Трябва да съвпада с шаблона в EmailJS
              type="tel" 
              placeholder="Телефон"
              className="flex-1 px-5 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <textarea 
              name="message" // Трябва да съвпада с шаблона в EmailJS
              placeholder="Модел автомобил или въпрос..."
              rows="2"
              className="flex-1 px-5 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
            ></textarea>
            
            <button 
              type="submit"
              disabled={isSending}
              className={`w-full md:w-auto px-8 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg ${
                isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200 text-white'
              }`}
            >
              {isSending ? 'Изпращане...' : 'Изпрати'} <Send size={16} />
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;