import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageGallery from "../components/ImageGallery";
import { ArrowLeft, Camera } from "lucide-react";
import Promo from "../components/Promo";

const ModelGalleryPage = () => {
  const { brandId, modelId } = useParams();
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
    </div>
  );

  if (!brand || !model) return {/* запазваш си логиката за грешка */};

  return (
    <div className="min-h-screen bg-slate-50">
      <Promo 
        title={` ${model.name}`} 
        subTitle="Детайлен преглед на инсталираната газова система и компоненти."
      />

      {/* Detail Header Section */}
      <section className="bg-white border-b border-slate-200 shadow-sm relative overflow-hidden">
        {/* Декоративен елемент - името на марката на заден план */}
        <div className="absolute right-0 top-0 text-[120px] font-black text-slate-50 select-none leading-none translate-x-1/4 -translate-y-1/4 uppercase italic">
          {brand.name}
        </div>

        <div className="container relative mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 text-xs font-black bg-red-600 text-white rounded-full uppercase tracking-widest">
                  {brand.name}
                </span>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium uppercase tracking-widest">
                  <Camera className="w-4 h-4" />
                  <span>{model.images.length} Снимки</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic italic-none">
                {model.name}
              </h1>
              <div className="h-1.5 w-24 bg-red-600 mt-4"></div>
            </div>

            <Link
              to={`/brand/${brand.id}`}
              className="group flex items-center gap-3 self-start md:self-center px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold uppercase text-xs tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Всички модели {brand.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white p-4 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
          <ImageGallery images={model.images} modelName={model.name} />
        </div>
        
        {/* Инфо блок под галерията */}
        <div className="mt-12 p-8 bg-slate-800 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Харесва ли Ви този монтаж?</h4>
            <p className="text-slate-400">Свържете се с нас за консултация и оферта за Вашия автомобил.</p>
          </div>
          <Link 
            to="/Contact" 
            className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-black uppercase tracking-widest rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Запитване за монтаж
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModelGalleryPage;