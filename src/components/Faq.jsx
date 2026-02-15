import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Title from "./Title";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div 
      className={`mb-4 rounded-2xl transition-all duration-300 border ${
        isOpen ? "bg-white border-indigo-100 shadow-md" : "bg-slate-50 border-transparent"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="w-full py-6 px-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className={`w-5 h-5 ${isOpen ? "text-indigo-600" : "text-slate-400"} transition-colors`} />
          <span className={`text-lg font-bold ${isOpen ? "text-indigo-600" : "text-slate-800"} md:text-xl transition-colors tracking-tight`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className={`${isOpen ? "text-indigo-600" : "text-slate-400"} ml-4`}
        >
          <ChevronDown size={24} strokeWidth={3} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 ml-9">
              <div className="w-full h-px bg-slate-100 mb-6"></div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Безопасна ли е газовата уредба?',
      answer: 'Газовите уредби са изключително безопасни при спазване на стандартите за монтаж. Съвременните системи разполагат с автоматични клапани при удар и защита от изтичане. Резервоарът е многократно по-здрав от обикновения горивен резервоар. При нас всеки монтаж се извършва според европейските стандарти ECE R67/R115.'
    },
    {
      question: 'Колко струва монтажът и за колко се изплаща?',
      answer: 'Инвестицията обикновено се възвръща за около 12 месеца при средно шофиране. При цена на газта около 50-60% по-ниска от тази на бензина, спестяванията започват веднага след първото зареждане.'
    },
    {
      question: 'Губи ли се мощност на двигателя?',
      answer: 'При правилна настройка загубата е между 3% и 5%, което е незабележимо. Системите от BRC и Prins са проектирани да запазват оригиналната динамика на вашия автомобил.'
    },
    {
      question: 'Мога ли да монтирам АГУ на двигател с директно впръскване?',
      answer: 'Да! Специализираните системи 5-то и 6-то поколение за TSI, GDI и FSI двигатели гарантират пълна защита и ефективност. Притежаваме пълното техническо оборудване за такъв монтаж.'
    },
    {
      question: 'Каква е поддръжката?',
      answer: 'На всеки 10 000 - 15 000 км се препоръчва смяна на филтри и диагностика. Това гарантира дълъг живот на системата и оптимален разход. Ние предлагаме пълно сервизно обслужване.'
    },
  ];

  return (
    <section className="py-24 bg-white px-5 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Title 
          title="Въпроси и Отговори" 
          subTitle="Всичко, което трябва да знаете за преминаването на алтернативно гориво." 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Допълнителен CTA блок */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-4xl bg-indigo-600 text-center text-white shadow-xl shadow-indigo-200"
        >
          <h3 className="text-xl font-bold mb-2">Имате друг въпрос?</h3>
          <p className="text-indigo-100 mb-6 text-sm">Нашите експерти са на Ваше разположение за безплатна консултация.</p>
          <a href="/Contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
            Свържи се с нас
          </a>
        </motion.div>
      </div>

      {/* Фон декор */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-60"></div>
    </section>
  );
};

export default FAQ;