import React from 'react'
import Title from './Title'

const CarLogo = () => {
    const modules = import.meta.glob(
    "../assets/CarLogo/*.{jpg,jpeg,png,webp}",
    { eager: true }
  );

  const images = Object.values(modules).map(module => module.default);
  return (
    <div className='pt-10'>
      <Title title="Галерия с монтажи на газови уредби" subTitle="" />
      <section className="m-10 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="h-20 w-22 rounded object-cover"
        />
      ))}
    </section>
    </div>
  )
}

export default CarLogo
