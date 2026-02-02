import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center mt-20 mb-10 ${align === "left" && "md:items-start md:text-left"}`}>
      <h2 className={`text-3xl md:text-[40px] ${font || "font-raleway"}`}>{title}</h2>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 mx-0.5 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title
