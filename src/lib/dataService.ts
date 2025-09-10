// Data service to fetch data from JSON files

// Define our local types
export interface Product {
  id?: number;
  name: string;
  description: string;
  type: 'export' | 'import';
  category: string;
  imageUrl: string;
  slug: string;
  featured?: boolean;
  createdAt?: string;
}

export interface Testimonial {
  id?: number;
  name: string;
  role: string;
  company: string;
  content: string;
  quote?: string;      // Optional: Alternative to content for testimonial text
  initials?: string;   // Optional: For avatar fallback
  title?: string;      // Optional: Person's job title/position
  avatarUrl?: string;
  rating: number;
  createdAt?: string;
};

// Cache for storing loaded data
let productsCache: Product[] | null = null;
let testimonialsCache: Testimonial[] | null = null;

async function fetchJson<T>(path: string): Promise<T> {
  // If the path starts with /data, it's a public asset
  const fullPath = path.startsWith('/data') ? path : `/data/${path}`;
  const response = await fetch(fullPath);
  if (!response.ok) {
    console.error(`Failed to fetch ${fullPath}: ${response.statusText}`);
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}

export async function getProducts(): Promise<Product[]> {
  if (productsCache) return productsCache;
  
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data = await response.json();
    
    // Handle the nested structure of the products data
    let products: Product[] = [];
    
    if (data.exportProducts && Array.isArray(data.exportProducts)) {
      products = [...products, ...data.exportProducts];
    }
    
    if (data.importProducts && Array.isArray(data.importProducts)) {
      products = [...products, ...data.importProducts];
    }
    
    if (products.length === 0) {
      console.error('No products found in the data:', data);
      return [];
    }
    
    // Add IDs if they don't exist
    products = products.map((product, index) => ({
      ...product,
      id: product.id || index + 1,
      // Ensure all required fields have default values
      name: product.name || 'Unnamed Product',
      description: product.description || '',
      type: product.type || 'export',
      category: product.category || 'other',
      imageUrl: product.imageUrl || '/assets/products/default.png',
      slug: product.slug || `product-${index + 1}`
    }));
    
    productsCache = products;
    return productsCache;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(product => product.slug === slug) || null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(product => product.featured);
}

export async function getProductsByType(type: 'export' | 'import'): Promise<Product[]> {
  const products = await getProducts();
  // If no type is provided, return all products
  if (!type) return products;
  // Otherwise, filter by type
  return products.filter(product => product.type === type);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (testimonialsCache) return testimonialsCache;
  
  try {
    testimonialsCache = await fetchJson<Testimonial[]>('/data/testimonials.json');
    return testimonialsCache || [];
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return [];
  }
}
