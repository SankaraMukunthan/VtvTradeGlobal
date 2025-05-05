import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProductTabsProps {
  activeTab: 'export' | 'import';
  onTabChange: (tab: 'export' | 'import') => void;
}

const ProductTabs = ({ activeTab, onTabChange }: ProductTabsProps) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['/api/products'],
  });

  const exportProducts = products?.filter(product => product.type === 'export') || [];
  const importProducts = products?.filter(product => product.type === 'import') || [];
  
  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            onClick={() => onTabChange('export')}
            className={`px-8 py-3 text-sm font-medium rounded-l-lg ${
              activeTab === 'export' 
                ? 'bg-primary text-white' 
                : 'bg-gray-medium text-foreground'
            }`}
            id="export-tab"
          >
            Export Products
          </button>
          <button 
            type="button" 
            onClick={() => onTabChange('import')}
            className={`px-8 py-3 text-sm font-medium rounded-r-lg ${
              activeTab === 'import' 
                ? 'bg-primary text-white' 
                : 'bg-gray-medium text-foreground'
            }`}
            id="import-tab"
          >
            Import Products
          </button>
        </div>
      </div>
      
      {/* Export Products Tab Content */}
      <div id="export-products" className={`tab-content ${activeTab === 'export' ? 'block' : 'hidden'}`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
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
            // Actual export products
            exportProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
      
      {/* Import Products Tab Content */}
      <div id="import-products" className={`tab-content ${activeTab === 'import' ? 'block' : 'hidden'}`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
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
          ) : importProducts.length > 0 ? (
            // Actual import products
            importProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            // Coming Soon Notice if no import products
            <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center bg-white rounded-lg shadow-md p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                  <Clock className="text-white text-2xl" />
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
