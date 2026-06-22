import { useEffect } from 'react';
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Faq from '../components/Faq'
import Services from '../components/Services'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

useEffect(() => {
    // Проверяваме дали сме дошли тук с "инструкция" за скролване
    if (location.state?.scrollToId) {
      const id = location.state.scrollToId;
      
      // Малко изчакване, за да сме сигурни, че елементите са заредени
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 300);

      // Изчистваме състоянието, за да не скролва пак при refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <>
    {/* Тези тагове автоматично отиват в <head> */}
      <title>Аутогаз Варна | Газови Инжекциони и Сервиз</title>
      <meta name="description" content="Професионален монтаж на АГУ във Варна. Над 20 години опит, диагностика и ремонт на газови уредби." />
      <link rel="canonical" href="https://autogas-varna.com/" />
      <meta property="og:title" content="Аутогаз-Варна" />
      <meta property="og:image" content="https://autogas-varna.com/logo-seo.png" />
      <meta name="twitter:image" content="https://autogas-varna.com/logo-seo.png" />

      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://autogas-varna.com", // Твоят официален домейн
    "name": "Аутогаз Варна - Сервиз за газови уредби",
    "image": [
      "https://autogas-varna.com/logo-seo.png", // Линк към логото ти
       // Снимка на сервиза
    ],
    "url": "https://autogas-varna.com",
    "telephone": "+359887675981", // ТВОЯТ ТЕЛЕФОН
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "бул. ХРИСТО СМИРНЕНСКИ", // ТВОЯТ АДРЕС
      "addressLocality": "ВАРНА",
      "postalCode": "9000",
      "addressCountry": "BG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2244555, // Вземи ги от Google Maps
      "longitude": 27.9066218
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      
    ],
    "description": "Професионален монтаж и диагностика на газови уредби и инжекциони във Варна. Официален сервиз на Prins, BRC, AEB.",
    "brand": [
      "Prins", "BRC", "Romano", "AEB", "Lovato",  // Марките, с които работите
    ],

    "sameAs": [
  "https://www.facebook.com/profile.php?id=100082925620596"
]
  })}
</script>
{/* Схема за FAQ - добавяш я точно под първата */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Безопасна ли е газовата уредба?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Газовите уредби са изключително безопасни при спазване на стандартите за монтаж. Съвременните системи разполагат с автоматични клапани при удар и защита от изтичане. Резервоарът е многократно по-здрав от обикновения горивен резервоар. В нашия сервиз във Варна всеки монтаж се извършва според европейските стандарти ECE R67/R115."
          }
        },
        {
          "@type": "Question",
          "name": "Колко струва монтажът и за колко се изплаща?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Инвестицията обикновено се възвръща за около 12 месеца при средно шофиране. При цена на газта около 50-60% по-ниска от тази на бензина, спестяванията започват веднага след първото зареждане."
          }
        },
        {
          "@type": "Question",
          "name": "Губи ли се мощност на двигателя?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При правилна настройка загубата е между 3% и 5%, което е незабележимо. Системите от BRC и Prins са проектирани да запазват оригиналната динамика на вашия автомобил."
          }
        },
        {
          "@type": "Question",
          "name": "Мога ли да монтирам АГУ на двигател с директно впръскване?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да! Специализираните системи 5-то и 6-то поколение за TSI, GDI и FSI двигатели гарантират пълна защита и ефективност. Притежаваме пълното техническо оборудване за такъв монтаж във Варна."
          }
        },
        {
          "@type": "Question",
          "name": "Каква е поддръжката?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "На всеки 15 000 км се препоръчва смяна на филтри и диагностика. Това гарантира дълъг живот на системата и оптимален разход. Ние от Аутогаз-Варна ООД предлагаме пълно сервизно обслужване."
          }
        },

        // Добави останалите въпроси тук...
      ]
    })}
  </script>

      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="faq"><Faq /></div>
      <Footer />
    </>
  )
}

export default Home
