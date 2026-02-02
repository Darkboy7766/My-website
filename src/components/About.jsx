import React from 'react'
import Title from './Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
            <Title title="Какво предлагаме" subTitle="Консултация и подбор на оптималната система за вашия автомобил"/>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-37 border border-solid" src={assets.brc_logo} alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">BRC - Италианско Качество и Иновации.</h3>
                    <p className="text-sm text-slate-600 mt-1"> Като официални партньори, предлагаме най-новите решения от този италиански лидер в производството на газови уредби. BRC системите са синоним на надеждност, икономичност и дългосрочна експлоатация.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-38 border border-solid" src={assets.prins_logo} alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Prins - Холандска Прецизност.</h3>
                    <p className="text-sm text-slate-600 mt-1">Сертифицирани сме за монтаж и обслужване на Prins системи - холандската марка, известна със своите високотехнологични решения и безкомпромисно качество. Идеални за най-взискателните клиенти.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-39 border border-solid" src={assets.aeb_logo} alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">AEB - Проверено Европейско Качество.</h3>
                    <p className="text-sm text-slate-600 mt-1">Работим с AEB - италиански производител с богата история и отлична репутация. Техните системи са оптималното съчетание между цена и качество.</p>
                </div>
            </div>
    </div>

    
  )
}

export default About
