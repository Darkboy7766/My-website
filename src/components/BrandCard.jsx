import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <Link
      to={`/brand/${brand.id}`}
      className="group relative flex flex-col items-center justify-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(202,138,4,0.15)] hover:-translate-y-2"
    >
      <img src={brand.logo} alt={brand.name} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
      <p className="text-sm text-gray-400">{brand.models.length} монтажа</p>
    </Link>
  );
};

export default BrandCard;
