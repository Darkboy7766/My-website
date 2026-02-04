import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-5 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/09copy.webp")] bg-no-repeat bg-cover bg-center h-screen'>
          <div className='bg-black/30 rounded-lg '>
            <a href="./Contact" className="flex items-center gap-2 mx-5 my-5 max-w-sm bg-slate-800/60 border border-slate-700 rounded-full text-sm hover:translate-x-1 transition-all">
          <span className="bg-indigo-600 text-xs px-3 py-2.5 rounded-full">Свържи се с нас</span>
          <p className="flex items-center gap-2 ">
            <span>Започни да спестяваш сега.</span>
          </p>
          <img src={assets.arrowIcon} alt="arrow-icon" className="invert mr-3" />
        </a>
        <h1 className="text-start text-[40px] leading-12 md:text-6xl md:leading-17.5 mt-4 mx-4 text-shadow-lg font-semibold max-w-4xl">
          Монтаж и сервиз на автомобилни газови уредби.
        </h1>
        <p className="text-center text-xl text-shadow-lg max-w-2xl mt-4">
          Спестете до 50% от разходите за гориво с качествен монтаж на LPG системи. Доверете се на експертите с над 20 години опит.
        </p>
          </div>
    </div>
  )
}

export default Hero
