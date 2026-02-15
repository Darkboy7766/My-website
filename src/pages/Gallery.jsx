import { useState, useEffect } from "react"; // 1. Добавяме hooks
import BrandCard from "../components/BrandCard";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import TitleH3 from "../components/TitleH3";

const Gallery = () => {
  // 2. Създаваме state за марките
  const [carBrands, setCarBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Зареждаме JSON файла при първоначалното рендиране
  useEffect(() => {
    fetch("/data/carBrands.json") // Пътят е спрямо папката public
      .then((response) => response.json())
      .then((data) => {
        setCarBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Грешка при зареждане на марките:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    {/* Този div ще заеме мястото под Navbar-а без да влияе на неговото позициониране */}
      <div className="h-17.5 md:h-27.5"></div>
      <Promo />
      <TitleH3 title="Галерия с монтажи на газови уредби" subTitle="" />
      
      {/* Brands Grid */}
      <section className="container mx-auto px-4 pb-20">
        {loading ? (
          <div className="text-center py-10">Зареждане на галерията...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {carBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Gallery;