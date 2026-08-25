import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Fuel, TrendingDown, Gauge, Wrench, ArrowRight, CheckCircle, Info } from 'lucide-react';

const InputField = ({ id, label, icon: Icon, value, onChange, suffix, hint, step = '0.01', min = '0' }) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <label htmlFor={id} className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2 tracking-wide">
        <Icon size={16} className="text-indigo-400" />
        {label}
      </label>
      <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused
          ? 'border-indigo-500 bg-slate-800/80 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
        }`}>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step={step}
          min={min}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-white text-lg font-medium px-4 py-3.5 rounded-xl outline-none placeholder:text-slate-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0.00"
        />
        {suffix && (
          <span className="text-slate-400 text-sm font-medium pr-4 whitespace-nowrap select-none">
            {suffix}
          </span>
        )}
      </div>
      {hint && (
        <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5 pl-1">
          <Info size={12} className="shrink-0" />
          {hint}
        </p>
      )}
    </motion.div>
  );
};

const ResultCard = ({ label, value, unit, icon: Icon, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={`relative overflow-hidden rounded-2xl border p-6 ${color === 'indigo'
        ? 'bg-gradient-to-br from-indigo-600/20 to-indigo-900/30 border-indigo-500/30'
        : 'bg-gradient-to-br from-emerald-600/20 to-emerald-900/30 border-emerald-500/30'
      }`}
  >
    <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl ${color === 'indigo' ? 'bg-indigo-500/20' : 'bg-emerald-500/20'
      }`} />

    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-2 rounded-lg ${color === 'indigo' ? 'bg-indigo-500/20' : 'bg-emerald-500/20'
          }`}>
          <Icon size={20} className={color === 'indigo' ? 'text-indigo-400' : 'text-emerald-400'} />
        </div>
        <span className="text-sm font-medium text-slate-400">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl md:text-4xl font-black tracking-tight ${color === 'indigo' ? 'text-indigo-300' : 'text-emerald-300'
            }`}
        >
          {value}
        </motion.span>
        <span className={`text-sm font-medium ${color === 'indigo' ? 'text-indigo-400/70' : 'text-emerald-400/70'
          }`}>
          {unit}
        </span>
      </div>
    </div>
  </motion.div>
);

const Kalkulator = () => {
  const [petrolPrice, setPetrolPrice] = useState('1.47');
  const [petrolConsumption, setPetrolConsumption] = useState('8');
  const [gasPrice, setGasPrice] = useState('0.75');
  const [gasConsumption, setGasConsumption] = useState('');
  const [installationCost, setInstallationCost] = useState('715');
  const [gasConsumptionManual, setGasConsumptionManual] = useState(false);

  const effectiveGasConsumption = useMemo(() => {
    if (gasConsumptionManual && gasConsumption !== '') {
      return parseFloat(gasConsumption);
    }
    const petrol = parseFloat(petrolConsumption);
    if (!isNaN(petrol) && petrol > 0) {
      return parseFloat((petrol * 1.1).toFixed(2));
    }
    return 0;
  }, [petrolConsumption, gasConsumption, gasConsumptionManual]);

  const calculations = useMemo(() => {
    const pPrice = parseFloat(petrolPrice);
    const pConsumption = parseFloat(petrolConsumption);
    const gPrice = parseFloat(gasPrice);
    const gConsumption = effectiveGasConsumption;
    const iCost = parseFloat(installationCost);

    if ([pPrice, pConsumption, gPrice, gConsumption, iCost].some(v => isNaN(v) || v <= 0)) {
      return null;
    }

    const petrolCostPer100 = pPrice * pConsumption;
    const gasCostPer100 = gPrice * gConsumption;
    const savingsPer100 = petrolCostPer100 - gasCostPer100;

    if (savingsPer100 <= 0) {
      return { error: true };
    }

    const kmToPayoff = (iCost / savingsPer100) * 100;

    return {
      petrolCostPer100: petrolCostPer100.toFixed(2),
      gasCostPer100: gasCostPer100.toFixed(2),
      savingsPer100: savingsPer100.toFixed(2),
      kmToPayoff: Math.round(kmToPayoff).toLocaleString('bg-BG'),
      error: false,
    };
  }, [petrolPrice, petrolConsumption, gasPrice, effectiveGasConsumption, installationCost]);

  const handleGasConsumptionChange = useCallback((e) => {
    const val = e.target.value;
    setGasConsumption(val);
    setGasConsumptionManual(val !== '');
  }, []);

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,6,23,0.8)_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            className="text-indigo-500 font-bold text-xs uppercase mb-4 block tracking-widest"
          >
            Autogas Varna
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight"
          >
            Калкулатор за{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              спестявания
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 100, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 rounded-full mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
          >
            Разберете за колко километра ще се изплати газовата уредба на вашия автомобил.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                  <Calculator size={22} className="text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Входни данни</h2>
                  <p className="text-xs text-slate-500">Попълнете стойностите за вашия автомобил</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Fuel size={14} className="text-amber-400" />
                    Бензин
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="petrol-price"
                      label="Цена на бензин"
                      icon={Fuel}
                      value={petrolPrice}
                      onChange={(e) => setPetrolPrice(e.target.value)}
                      suffix="€/л"
                    />
                    <InputField
                      id="petrol-consumption"
                      label="Среден разход"
                      icon={Gauge}
                      value={petrolConsumption}
                      onChange={(e) => setPetrolConsumption(e.target.value)}
                      suffix="л/100 км"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                  <ArrowRight size={16} className="text-indigo-500" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Fuel size={14} className="text-emerald-400" />
                    Газ (LPG)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="gas-price"
                      label="Цена на газ"
                      icon={Fuel}
                      value={gasPrice}
                      onChange={(e) => setGasPrice(e.target.value)}
                      suffix="€/л"
                    />
                    <InputField
                      id="gas-consumption"
                      label="Среден разход на газ"
                      icon={Gauge}
                      value={gasConsumptionManual ? gasConsumption : effectiveGasConsumption || ''}
                      onChange={handleGasConsumptionChange}
                      suffix="л/100 км"
                      hint={!gasConsumptionManual ? 'Автоматично: +10% спрямо бензин' : 'Ръчно въведена стойност'}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                  <Wrench size={16} className="text-indigo-500" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

                <InputField
                  id="installation-cost"
                  label="Цена на уредбата с монтаж"
                  icon={Wrench}
                  value={installationCost}
                  onChange={(e) => setInstallationCost(e.target.value)}
                  suffix="€"
                  step="1"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <AnimatePresence mode="wait">
              {calculations && !calculations.error ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <ResultCard
                    label="Инвестицията се изплаща след"
                    value={calculations.kmToPayoff}
                    unit="км"
                    icon={TrendingDown}
                    color="indigo"
                    delay={0}
                  />

                  <ResultCard
                    label="Спестявате на всеки 100 км"
                    value={calculations.savingsPer100}
                    unit="€"
                    icon={CheckCircle}
                    color="emerald"
                    delay={0.1}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6"
                  >
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                      Детайли
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-slate-800">
                        <span className="text-sm text-slate-400">Разход за 100 км на бензин</span>
                        <span className="text-sm font-bold text-amber-400">{calculations.petrolCostPer100} €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-800">
                        <span className="text-sm text-slate-400">Разход за 100 км на газ</span>
                        <span className="text-sm font-bold text-emerald-400">{calculations.gasCostPer100} €</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-slate-400">Разход на газ (л/100 км)</span>
                        <span className="text-sm font-bold text-white">{effectiveGasConsumption}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : calculations && calculations.error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center"
                >
                  <p className="text-red-400 font-medium">
                    При тези стойности газът не е по-изгоден от бензина. Моля, проверете въведените данни.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-900/50 border border-slate-800 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[260px]"
                >
                  <Calculator size={40} className="text-slate-700 mb-4" />
                  <p className="text-slate-500 text-sm font-medium">
                    Попълнете всички полета, за да видите резултатите.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href="/kontakti/"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Запишете се за монтаж
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Kalkulator;
