import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { getProductImageUrl } from '@/utils/assets';

const FeaturedProducts: React.FC = () => {
  const { featuredProducts, loading, error } = useAppContext();

  if (loading.products) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error.products) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading products: {error.products}</p>
      </div>
    );
  }

  if (featuredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p>No featured products available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={getProductImageUrl(product.imageUrl)} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image in case the original fails to load
                    (e.target as HTMLImageElement).src = '/assets/placeholder-product.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <button 
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                    onClick={() => {
                      // Navigate to product detail page
                      window.location.href = `/products/${product.slug}`;
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
