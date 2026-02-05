import React from 'react'
import {assets} from '../assets/assets'
import Title from './Title'

const BlogCard = () => {
  return (
    <div>
        <Title title="За нас" subTitle="Професионален сервиз за автомобилни газови уредби. Вашият надежден партньор." />
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-5">

                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-lg w-full object-cover rounded-2xl"
                        src={assets.banner}
                        alt="" />
                    
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h2 className="text-xl uppercase font-semibold text-slate-700">Аутогаз-Варна</h2>
                    <div className="w-24 h-0.75 rounded-full bg-linear-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">Добре дошли в нашия специализиран сервиз за автомобилни газови уредби! С дългогодишен опит и експертиза, ние предлагаме пълна гама от услуги за монтаж, поддръжка и ремонт на Автомобилни газови системи от водещи световни производители. </p>
                    <p className=' mt-2 font-bold'>Предлагаме специализирани решения за всеки тип двигател.</p>
                    <p className="mt-2 font-semibold">Двигатели с директно впръскване (DI/FSI/TSI/GDI). </p>
                    <p>Притежаваме експертиза и оборудване за монтаж на газови системи на съвременните двигатели с директно впръскване на гориво.</p>
                    <p className="mt-2 font-semibold">Двигатели с индиректно впръскване (MPI).</p>
                    <p className="">За класическите двигатели с индиректно впръскване предлагаме проверени и надеждни решения:</p>
                    <p className='mt-1'>- Секвенциални системи от 4-то поколение</p>
                    <p className='mt-1'>- Оптимална настройка за всяка марка и модел</p>
                    
                </div>
            </section>
    </div>
  )
}

export default BlogCard
