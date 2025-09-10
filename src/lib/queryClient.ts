import { QueryClient, QueryFunction, QueryKey } from "@tanstack/react-query";
import { 
  getProducts, 
  getProductBySlug, 
  getFeaturedProducts, 
  getProductsByType,
  getTestimonials,
  Product,
  Testimonial
} from "./dataService";

type QueryResult = 
  | Product[] 
  | Product 
  | Testimonial[] 
  | null
  | undefined;

// Custom query function that maps API paths to our data service functions
const customQueryFn: QueryFunction<QueryResult, QueryKey> = async ({ queryKey }) => {
  const [path] = queryKey as [string];
  
  try {
    // Map API paths to data service functions
    switch (path) {
      case '/api/products':
        return await getProducts();
        
      case '/api/products/featured':
        return await getFeaturedProducts();
        
      case '/api/products/type/export':
        return await getProductsByType('export');
        
      case '/api/products/type/import':
        return await getProductsByType('import');
        
      case '/api/testimonials':
        return await getTestimonials();
        
      default:
        if (path.startsWith('/api/products/')) {
          const slug = path.replace('/api/products/', '');
          if (slug) {
            return await getProductBySlug(slug);
          }
        }
        throw new Error(`No handler for query: ${path}`);
    }
  } catch (error) {
    console.error('Error in customQueryFn:', error);
    throw error;
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: customQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
