import { useState, useEffect } from "react"; // 1. Добавяме hooks
import BrandCard from "../components/BrandCard";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import TitleH3 from "../components/TitleH3";

const Gallery = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/carBrands.json")
      .then((response) => response.json())
      .then((data) => {
        setCarBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Грешка:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen"> {/* Светъл фон за контраст */}
      <Promo 
        title="Нашите Проекти" 
        subTitle="Вижте прецизния монтаж и вниманието към детайла при всяка инсталирана система." 
      />
      
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-left">
           <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
             Галерия <span className="text-red-600 underline decoration-2 underline-offset-8">Монтажи</span>
           </h3>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : (
          /* По-динамична мрежа (Grid) */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {carBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;