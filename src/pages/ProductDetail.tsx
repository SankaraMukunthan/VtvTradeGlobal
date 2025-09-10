import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { getProductBySlug } from "@/lib/dataService";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['/api/products/' + slug],
    queryFn: () => getProductBySlug(slug!)
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
        <p className="text-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/products">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/products" className="inline-block mb-8">
          <Button variant="ghost" className="text-primary hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-2">
                {product.type === 'export' ? 'Export Product' : 'Import Product'}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Product Details</h2>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900">Category</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                
                <div className="mt-6">
                  <Link href="/contact" className="inline-block">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Request Information
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
