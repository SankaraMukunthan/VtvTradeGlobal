export type Product = {
  name: string;
  description: string;
  type: 'export' | 'import';
  category: string;
  imageUrl: string;
  slug: string;
  featured: boolean;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  initials: string;
};

export async function fetchProducts(): Promise<{ exportProducts: Product[] }> {
  const response = await fetch('/data/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function fetchTestimonials(): Promise<{ testimonials: Testimonial[] }> {
  const response = await fetch('/data/testimonials.json');
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return response.json();
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { exportProducts } = await fetchProducts();
  return exportProducts.filter(product => product.featured);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { exportProducts } = await fetchProducts();
  return exportProducts.filter(product => product.category === category);
}
