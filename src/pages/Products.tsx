import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ProductTabs from "@/components/products/ProductTabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/dataService";

const Products = () => {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    initialData: [] // Ensure we always have an array
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check URL hash to set active tab
    if (location.includes('#import-products')) {
      setActiveTab('import');
    } else {
      setActiveTab('export');
    }
  }, [location]);

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Our Premium Products
            </h1>
            <p className="text-lg text-foreground mb-0 max-w-3xl mx-auto">
              We specialize in exporting high-quality Indian agricultural products and importing 
              select premium goods to meet diverse market demands.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <ProductTabs 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            products={Array.isArray(products) ? products : []}
            isLoading={isLoading}
          />
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary rounded-lg p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-white mb-4">
              Interested in our products?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for detailed product specifications, pricing, and availability.
              Our team is ready to assist you with your import or export requirements.
            </p>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                Request Product Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
