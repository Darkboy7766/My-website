import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images, modelName }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const goToPrevious = () => setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="aspect-video rounded-xl overflow-hidden cursor-pointer border border-gray-700 hover:border-amber-500/50 group"
          >
            {/* ТУК: Използваме .thumbnail за бързо зареждане в мрежата */}
            <img 
              src={image.thumbnail} 
              alt={`${modelName} - ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedIndex(null)} 
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-60"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }} 
            className="absolute left-4 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-60"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* ТУК: Използваме .original за високо качество при преглед */}
          <div className="relative w-full h-full flex items-center justify-center" onClick={() => setSelectedIndex(null)}>
            <img 
              src={images[selectedIndex].original} 
              alt={modelName} 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
              onClick={(e) => e.stopPropagation()} // Предотвратява затваряне при клик върху самата снимка
            />
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); goToNext(); }} 
            className="absolute right-4 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-60"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-6 px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;