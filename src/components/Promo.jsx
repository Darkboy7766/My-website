import React from 'react'

const Promo = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 w-full text-center py-20 md:py-24 bg-[url('/src/assets/09copy.webp')] bg-cover bg-center bg-no-repeat">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Карай повече. Плащай по-малко.</h1>
                <div className="h-0.75 w-32 my-1 bg-linear-to-l from-transparent to-white"></div>
                <p className="text-sm md:text-base text-gray-100 max-w-xl">
                    50% икономия. 100% качество. 0% компромиси.
                </p>
                
            </section>
    </div>
  )
}

export default Promo
