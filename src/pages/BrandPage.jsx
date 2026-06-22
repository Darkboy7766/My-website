import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModelCard from "../components/ModelCard";
import { ArrowLeft } from "lucide-react";
import Promo from "../components/Promo";

const BrandPage = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/carBrands.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBrand = data.find((b) => b.id === brandId);
        setBrand(foundBrand);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Грешка:", err);
        setLoading(false);
      });
  }, [brandId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
    </div>
  );

  if (!brand) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
      <p className="text-slate-500 text-lg font-medium">Марката не е намерена.</p>
      <Link to="/galeriya" className="text-sm text-red-600 font-bold hover:underline">← Назад към Галерия</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">

      <Promo 
        title={brand.name} 
        subTitle={`Професионално инсталирани газови системи за всички модели на ${brand.name}`}
      />
      
      {/* Brand Hero Section */}
      <section className="relative py-12 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Logo & Info */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-6 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                  {brand.name}
                </h1>
                <div className="h-1 w-16 bg-red-600 mx-auto md:mx-0 my-3"></div>
                <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                  <span className="text-red-600 font-bold">{brand.models.length}</span> реализирани проекта от Аутогаз-Варна
                </p>
              </div>
            </div>

            {/* Back Button */}
            <Link
              to="/galeriya"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/40"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider">Назад към Галерия</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Models Grid/List */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase">
                Модели с <span className="text-red-600">Газов Инжекцион</span>
            </h2>
            <div className="flex-1 h-px bg-slate-200 hidden md:block"></div>
        </div>

        {/* Използваме Grid за ModelCards, ако са много, или List ако предпочиташ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.models.map((model) => (
            <ModelCard key={model.id} model={model} brandId={brand.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandPage;