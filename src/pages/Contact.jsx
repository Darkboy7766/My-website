import React from 'react'
import Promo from '../components/Promo'
import Location from '../components/Location'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
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
