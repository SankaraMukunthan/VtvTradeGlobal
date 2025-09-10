import { useState } from "react";
import { Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/dataService";
import ProductCard from "./ProductCard";

interface ProductTabsProps {
  activeTab: 'export' | 'import';
  onTabChange: (tab: 'export' | 'import') => void;
  products?: Product[];
  isLoading?: boolean;
}

const ProductTabs = ({ activeTab, onTabChange, products = [], isLoading = false }: ProductTabsProps) => {

  // Search and filtering state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Extract all categories
  const allCategories = Array.isArray(products) ? 
    Array.from(new Set(products.map((product: Product) => product.category))) : 
    [];

  // Filter products based on search term, category, and type
  const filterProducts = (productList: Product[] = []) => {
    if (!Array.isArray(productList)) {
      console.error('Expected an array of products but got:', productList);
      return [];
    }
    return productList.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  };

  // Filter products based on active tab
  const currentProducts = Array.isArray(products) 
    ? products.filter(product => product.type === activeTab)
    : [];
    
  const filteredProducts = filterProducts(currentProducts);

  if (isLoading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="text-center py-10">No products found.</div>;
  }

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center mb-8">
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
      
      {/* Search and Filter */}
      <div className="mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div>
            <div className="space-y-2">
              <Label htmlFor="category-filter" className="text-sm font-medium">
                Filter by Category
              </Label>
              <Select
                value={categoryFilter}
                onValueChange={setCategoryFilter}
              >
                <SelectTrigger id="category-filter" className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Content */}
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
        ) : filteredProducts.length > 0 ? (
          // Display filtered products
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          // No products found message
          <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-merriweather font-bold text-primary mb-4">
                {activeTab === 'export' ? 'No Export Products Found' : 'More Products Coming Soon'}
              </h3>
              <p className="text-foreground mb-6 max-w-xl mx-auto">
                {activeTab === 'export' 
                  ? 'We couldn\'t find any products matching your search criteria. Please try different filters.'
                  : 'We\'re constantly expanding our import product range to serve the Indian market. Contact us to discuss your specific import requirements.'
                }
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                  {activeTab === 'export' ? 'Contact Us' : 'Discuss Import Opportunities'}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
