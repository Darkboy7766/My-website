import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ModelCard = ({ model, brandId,}) => {
  
 const thumbnail = model.images[0]?.thumbnail;

  return (
    <Link
      to={`/brand/${brandId}/model/${model.id}`}
      className="group flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(202,138,4,0.1)]"
    >
      <div className="flex items-center gap-4">
        <div className="w-24 h-18 rounded-lg bg-gray-700 overflow-hidden border border-gray-600">
          
            <img src={thumbnail} alt={model.name} className="w-full h-full object-cover" />
          
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{model.name}</h3>
          <p className="text-sm text-gray-800">
             {model.images.length} снимки в галерията
          </p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};

export default ModelCard;