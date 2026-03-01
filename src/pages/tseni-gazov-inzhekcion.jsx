import React from 'react'
import Promo from '../components/Promo'
import PriceCard from '../components/PriceCard'
import Footer from '../components/Footer'

const TseniGazovInzhekcion = () => {
  return (
    <div>

      <title>Цени за Газов Инжекцион Варна | Автогаз Сервиз</title>
  <meta name="description" content="Вижте нашите цени за монтаж на газов инжекцион, диагностика и обслужване във Варна. Предлагаме системи за 4, 6 и 8 цилиндъра с гаранция и опция на изплащане." />
  <link rel="canonical" href="https://autogas-varna.com/prices" />

  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ценоразпис на услугите - Аутогаз Варна",
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "Автогаз Услуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Монтаж на газов инжекцион"
          },
          "priceCurrency": "EUR",
          "price": "715.00" // Примерна цена
        }
      ]
    }
  })}
</script>

      <Promo 
        title="Цени на газови уредби" 
        subTitle="Прозрачни цени без скрити такси. Вашата газова уредба се изплаща за броени месеци." 
      />
      <PriceCard />
      <Footer />
      
    </div>
  )
}

export default TseniGazovInzhekcion
