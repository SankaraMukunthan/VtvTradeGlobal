import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product, Testimonial } from '@/lib/api';

type AppContextType = {
  products: Product[];
  testimonials: Testimonial[];
  loading: {
    products: boolean;
    testimonials: boolean;
  };
  error: {
    products: string | null;
    testimonials: string | null;
  };
  featuredProducts: Product[];
  getProductsByCategory: (category: string) => Product[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState({
    products: true,
    testimonials: true,
  });
  const [error, setError] = useState({
    products: null as string | null,
    testimonials: null as string | null,
  });

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.exportProducts || []);
      } catch (err) {
        setError(prev => ({ ...prev, products: 'Failed to load products' }));
      } finally {
        setLoading(prev => ({ ...prev, products: false }));
      }
    };

    fetchProducts();
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/data/testimonials.json');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data.testimonials || []);
      } catch (err) {
        setError(prev => ({ ...prev, testimonials: 'Failed to load testimonials' }));
      } finally {
        setLoading(prev => ({ ...prev, testimonials: false }));
      }
    };

    fetchTestimonials();
  }, []);

  const featuredProducts = products.filter(product => product.featured);

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        testimonials,
        loading,
        error,
        featuredProducts,
        getProductsByCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
