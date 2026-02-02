import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // 1. Добавяме hooks
import ModelCard from "../components/ModelCard";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";

const BrandPage = () => {
  const { brandId } = useParams();
  
  // 2. Дефинираме state за марката и състоянието на зареждане
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Извличаме данните от JSON файла
  useEffect(() => {
    fetch("/data/carBrands.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBrand = data.find((b) => b.id === brandId);
        setBrand(foundBrand);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Грешка при зареждане на данните:", err);
        setLoading(false);
      });
  }, [brandId]);

  // 4. Показваме скелет или индикатор за зареждане
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground animate-pulse">Зареждане на марката...</div>
      </div>
    );
  }

  // 5. Обработка на несъществуваща марка
  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Марката не е намерена</h1>
          <Link to="/Gallery" className="text-primary hover:underline">
            Обратно към галерията
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Promo />
      
      {/* Brand Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-4 bg-card rounded-2xl border border-border shadow-sm">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                {brand.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {brand.models.length} налични монтажа
              </p>
            </div>
          </div>

          <Link
            to="/Gallery"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mt-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Обратно към марките
          </Link>
        </div>
      </section>

      {/* Models List */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Монтажи на газов инжекцион на {brand.name}
        </h2>
        <div className="grid gap-4">
          {brand.models.map((model) => (
            <ModelCard key={model.id} model={model} brandId={brand.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandPage;