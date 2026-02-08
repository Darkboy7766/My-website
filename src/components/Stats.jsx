import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useInView } from "motion/react";

const Counter = ({ value, title, suffix = "+" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-5xl md:text-6xl font-extrabold text-indigo-800 flex items-center">
        <span ref={ref}>0</span>
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <p className="text-slate-600 mt-3 font-semibold text-lg uppercase tracking-wide">
        {title}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className=" bg-gray-50 text-slate-900 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Кратко заглавие за контекст */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Лидер в газовите системи
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter value={20} title="Години опит" />
          <Counter value={1500} title="Клиенти" />
          <Counter value={100} title="Гаранция" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Stats;