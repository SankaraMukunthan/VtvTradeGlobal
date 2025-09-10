import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { getProductsByType } from "@/lib/dataService";

const ProductsPreview = () => {
  const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
  
  // Fetch products by type using the data service
  const { data: exportProducts = [], isLoading: isLoadingExport } = useQuery({
    queryKey: ['/api/products/type/export'],
    queryFn: () => getProductsByType('export')
  });
  
  const { data: importProducts = [], isLoading: isLoadingImport } = useQuery({
    queryKey: ['/api/products/type/import'],
    queryFn: () => getProductsByType('import')
  });
  
  const isLoading = isLoadingExport || isLoadingImport;
  
  const handleTabChange = (tab: 'export' | 'import') => {
    setActiveTab(tab);
  };

  return (
    <section id="products" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-4">
            Our Premium Products
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            We specialize in exporting high-quality Indian agricultural products and importing 
            select premium goods to meet diverse market demands.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              onClick={() => handleTabChange('export')}
              className={`px-8 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'export' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-medium text-foreground'
              }`}
            >
              Export Products
            </button>
            <button 
              type="button" 
              onClick={() => handleTabChange('import')}
              className={`px-8 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'import' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-medium text-foreground'
              }`}
            >
              Import Products
            </button>
          </div>
        </div>
        
        {/* Export Products Tab Content */}
        <div className={activeTab === 'export' ? 'block' : 'hidden'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show loading placeholders
              Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
                  <div className="h-56 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            ) : (
              // Show actual export products
              exportProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        
        {/* Import Products Tab Content */}
        <div className={activeTab === 'import' ? 'block' : 'hidden'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show loading placeholders
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
                  <div className="h-56 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            ) : (
              // Show actual import products
              importProducts.length > 0 ? (
                importProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                // Coming Soon Notice - Only if there are no import products
                <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center bg-white rounded-lg shadow-md p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-merriweather font-bold text-primary mb-4">More Products Coming Soon</h3>
                    <p className="text-foreground mb-6 max-w-xl mx-auto">
                      We're constantly expanding our import product range to serve the Indian market. 
                      Contact us to discuss your specific import requirements and explore potential partnerships.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                        Discuss Import Opportunities
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        
        {/* View All Products Link */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
