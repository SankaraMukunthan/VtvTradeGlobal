import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    slug: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-56 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-merriweather font-bold text-primary mb-2">
          {product.name}
        </h3>
        <p className="text-foreground mb-4">
          {product.description}
        </p>
        <Link href="/contact" className="text-secondary hover:text-primary font-semibold inline-flex items-center transition duration-300">
          Request Information <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
