/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // 1. Добавяме hooks
import ImageGallery from "../components/ImageGallery";
import { ArrowLeft, Camera } from "lucide-react";
import Promo from "../components/Promo";

const ModelGalleryPage = () => {
  const { brandId, modelId } = useParams();
  
  // 2. Дефинираме state
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Зареждаме данните
  useEffect(() => {
    fetch("/data/carBrands.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBrand = data.find((b) => b.id === brandId);
        const foundModel = foundBrand?.models.find((m) => m.id === modelId);
        
        setBrand(foundBrand);
        setModel(foundModel);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Грешка:", err);
        setLoading(false);
      });
  }, [brandId, modelId]);

  // 4. Логика за зареждане и липсващи данни
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Зареждане на галерията...</div>
      </div>
    );
  }

  if (!brand || !model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Моделът не е намерен</h1>
          <Link to="/" className="text-primary hover:underline">
            Обратно към началото
          </Link>
        </div>
      </div>
    );
  }

  const shareImage = window.location.origin + (model.images[0]?.original || "");

  return (
    <div className="min-h-screen">
      {/* Мета таговете е добре да са в <Helmet> или друг SEO компонент, 
          но за целите на примера ги оставяме така, както бяха в твоя код */}
      <Promo />

      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full">
                  {brand.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                {model.name}
              </h1>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                <span>{model.images.length} снимки</span>
              </div>
            </div>
          </div>

          <Link
            to={`/brand/${brand.id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mt-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Обратно към {brand.name}
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <ImageGallery images={model.images} modelName={model.name} />
      </section>
    </div>
  );
};

export default ModelGalleryPage;