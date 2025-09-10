import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/dataService";
import { getProductImageUrl } from "@/utils/assets";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-56 overflow-hidden">
        <img 
          src={getProductImageUrl(product.imageUrl)} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105" 
          onError={(e) => {
            // Fallback to a placeholder image if the image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/assets/products/default.png';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-merriweather font-bold text-primary mb-2">
          {product.name}
        </h3>
        <p className="text-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <Link 
            href={`/products/${product.slug}`} 
            className="text-secondary hover:text-primary font-semibold inline-flex items-center transition duration-300"
          >
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/contact" 
            className="text-sm bg-primary/10 hover:bg-primary/20 text-primary font-medium py-1.5 px-3 rounded-md transition duration-300"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
