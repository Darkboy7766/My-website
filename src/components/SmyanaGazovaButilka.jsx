import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Clock, Wrench, AlertTriangle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Задължителна ли е смяната на бутилката след 10 години?',
    a: 'Да. Съгласно европейската директива ECE R67 и българското законодателство, газовите бутилки за автомобилна употреба имат максимален срок на експлоатация от 10 години от датата на производство, отбелязана върху тях. След изтичане на този срок употребата е забранена и превозното средство не може да премине технически преглед с газова уредба.',
  },
  {
    q: 'Как да разбера кога е произведена моята бутилка?',
    a: 'Датата на производство е щампована директно върху корпуса на бутилката – обикновено под формата на месец и година (напр. „06/2015"). Ако не можете да я намерите сами, нашите техници могат да я проверят при безплатна диагностика.',
  },
  {
    q: 'Колко време отнема смяната на бутилката?',
    a: 'При наличност на подходяща бутилка услугата се извършва в рамките на 2–3 часа. Включва демонтаж на старата бутилка, монтаж на новата, проверка на уплътненията, тест за течове и издаване на протокол за смяна на бутилката.',
  },
  {
    q: 'Трябва ли да сменя и другите части на уредбата?',
    a: 'Не е задължително. При смяна на бутилката извършваме комплексна проверка на цялата газова система. Ако открием износени компоненти – маркучи, клапан, редуктор – ще ви информираме предварително, без да налагаме ненужни разходи.',
  },
  {
    q: 'Новата бутилка вписва ли се в документите на автомобила?',
    a: 'Да. След монтажа издаваме протокол за извършената услуга с данни за новата бутилка. На база на този протокол можете да актуализирате техническите документи на автомобила и да преминете успешно ГТП.',
  },
];

const steps = [
  { num: '01', title: 'Проверка и диагностика', text: 'Демонтираме старата бутилка и проверяваме компонентите – клапани, тръби, уплътнения и електрически връзки.' },
  { num: '02', title: 'Избор на подходяща бутилка', text: 'Предлагаме бутилки от различни обеми (30–120 л), сертифицирани по ECE R67-01, с 10-годишен експлоатационен срок.' },
  { num: '03', title: 'Монтаж и уплътнение', text: 'Монтираме новата бутилка в оригиналната позиция, подменяме всички уплътнения и правим тест за течове под налягане.' },
  { num: '04', title: 'Документация и регистрация', text: 'Издаваме протокол за извършената услуга с данни за новата бутилка, който се изисква за ГТП .' },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="shrink-0 text-indigo-600" /> : <ChevronDown className="shrink-0 text-slate-400" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SmyanaGazovaButilka = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">

      {/* Intro */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Задължителна подмяна</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">
            Газовата бутилка не е{' '}
            <span className="text-red-600 underline decoration-2 underline-offset-8">вечна</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-5">
            Всяка газова бутилка за автомобил има строго определен живот от <strong>10 години</strong>, считано от датата на производство. Това не е маркетингов ход – то произтича от физическото износване на стоманата под постоянно налягане и температурни промени.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Дори видимо непокътната бутилка може да крие микропукнатини или корозия по вътрешните стени, невидими с просто око. Навременната подмяна е единственият начин да сте сигурни, че системата ви работи безопасно.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold text-sm border border-green-200">
              <ShieldCheck size={16} /> Сертифицирани бутилки
            </span>
            <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm border border-blue-200">
              <Clock size={16} /> Услугата за 2–3 часа
            </span>
            <span className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-semibold text-sm border border-slate-200">
              <Wrench size={16} /> Актуализация на документи
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full"
        >
          <img src="/assets/LPG_bottles.webp" alt="Газови бутилки за автомобил – тороидална и цилиндрична" className="w-full rounded-2xl" />
        </motion.div>
      </div>

      {/* Warning signs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-red-50 border border-red-200 rounded-3xl p-8 md:p-12 mb-24"
      >
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="text-red-600 shrink-0" size={28} />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Кога да действате незабавно</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Изтекъл 10-годишен срок', text: 'Проверете датата върху бутилката. Ако е надхвърлена, автомобилът технически не трябва да работи на газ.' },
            { title: 'Предстоящ технически преглед', text: 'Expired бутилка е директна причина за отказан ГТП. Подменете я предварително, за да избегнете двоен разход.' },
            { title: 'Мирис на газ в купето', text: 'Дори слаб мирис около багажника е сериозен сигнал. Не чакайте – веднага спрете употребата на газ и ни потърсете.' },
            { title: 'Видима корозия или деформация', text: 'Всяка ръжда, издутина или механично увреждане по корпуса прави бутилката опасна, независимо от срока.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-red-600 font-black text-xl shrink-0">0{i + 1}.</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Process steps */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3 block">Как работим</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Процесът на подмяна</h2>
          <div className="h-1.5 w-24 bg-indigo-600 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-7 shadow-sm"
            >
              <span className="text-4xl font-black text-indigo-100 block mb-3">{step.num}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image gallery placeholders */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Снимки от монтажи</h2>
          <p className="text-slate-500 mt-3">Реални примери от нашия сервиз</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="/assets/montaj-1.webp"
            alt="Демонтаж на стара газова бутилка"
            loading="lazy"
            className="w-full aspect-video object-cover rounded-2xl"
          />
          <img
            src="/assets/montaj-2.webp"
            alt="Монтаж на нова газова бутилка"
            loading="lazy"
            className="w-full aspect-video object-cover rounded-2xl"
          />
          <img
            src="/assets/montaj-3.webp"
            alt="Готов монтаж на газова бутилка"
            loading="lazy"
            className="w-full aspect-video object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3 block">Имате въпроси?</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Най-честите въпроси</h2>
          <div className="h-1.5 w-24 bg-indigo-600 rounded-full mx-auto mt-6" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-slate-900 rounded-3xl p-10 md:p-16"
      >
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
          Готови за подмяна?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Свържете се с нас за безплатна проверка на газовата ви бутилка и точна оферта за подмяна.
        </p>
        <a
          href="/kontakti"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-indigo-500/30 text-base"
        >
          Запазете час
          <ArrowRight size={20} />
        </a>
      </motion.div>
    </div>
  );
};

export default SmyanaGazovaButilka;
