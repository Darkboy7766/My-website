import { motion } from 'motion/react'
import { Calculator, ArrowRight, TrendingDown } from 'lucide-react'

const CalculatorPromoBanner = () => {
  return (
    <section className="py-5 md:py-6">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <a href="/kalkulator/" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-800 p-3 md:p-4 transition-all duration-300 group-hover:border-indigo-400/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <div className="shrink-0 p-4 bg-indigo-500/15 rounded-2xl border border-indigo-500/20 group-hover:bg-indigo-500/25 transition-all duration-300">
                <Calculator size={32} className="text-indigo-400" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1.5 tracking-tight">
                  Калкулатор за спестявания
                </h3>
                <p className="text-slate-400 text-sm md:text-base font-medium">
                  Разберете за колко километра ще се изплати газовата уредба на вашия автомобил.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 text-sm uppercase tracking-wider group-hover:gap-3">
                <TrendingDown size={18} />
                <span>Изчисли</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  )
}

export default CalculatorPromoBanner
