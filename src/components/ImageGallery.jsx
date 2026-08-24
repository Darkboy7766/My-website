import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images, modelName }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const goToPrevious = () => setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer bg-slate-200 border-2 border-transparent hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <img
              src={image.thumbnail}
              alt={`${modelName} - ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-100 bg-slate-950/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-all duration-300 z-110"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-110 border border-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] flex items-center justify-center pointer-events-none">
            <img
              src={images[selectedIndex].original}
              alt={modelName}
              className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-110 border border-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-8 flex flex-col items-center gap-2">
            <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-bold tracking-widest uppercase">
              {modelName} — {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
