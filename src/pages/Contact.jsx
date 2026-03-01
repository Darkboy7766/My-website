import React from 'react'
import Promo from '../components/Promo'
import Location from '../components/Location'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <title>Аутогаз Варна | Адрес и Контакти на сервиза за АГУ</title>
      <meta name="description" content="Свържете се с нас за професионален монтаж на АГУ във Варна. Над 20 години опит, диагностика и ремонт на газови уредби." />
      <link rel="canonical" href="https://autogas-varna.com/contact" />
      
      <Promo 
        title="Запазете Час" 
        subTitle="Намерете ни във Варна или се свържете с нас за безплатна консултация още днес." 
      />
      <Location />
      <Footer />
      
    </div>
  )
}

export default Contact
