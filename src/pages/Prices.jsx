import React from 'react'
import Promo from '../components/Promo'
import PriceCard from '../components/PriceCard'
import Footer from '../components/Footer'

const Prices = () => {
  return (
    <div>
      <Promo 
        title="Цени на газови уредби" 
        subTitle="Прозрачни цени без скрити такси. Вашата газова уредба се изплаща за броени месеци." 
      />
      <PriceCard />
      <Footer />
      
    </div>
  )
}

export default Prices
