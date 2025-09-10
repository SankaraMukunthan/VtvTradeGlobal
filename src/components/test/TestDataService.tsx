import { useQuery } from "@tanstack/react-query";
import { Product } from "@/lib/dataService";

export function TestDataService() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products']
  });

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;
  if (!products) return <div>No products found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products (from JSON)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.slug} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {product.type}
              </span>
              {product.featured && (
                <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestDataService;
