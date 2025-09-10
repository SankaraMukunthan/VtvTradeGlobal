import { useState, useEffect } from 'react';
import { Product, Testimonial } from '@/lib/api';

type DataType<T> = T extends 'products' 
  ? { exportProducts: Product[] } 
  : T extends 'testimonials' 
    ? { testimonials: Testimonial[] }
    : never;

export function useFetchData<T extends 'products' | 'testimonials'>(
  dataType: T
): {
  data: DataType<T> | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<DataType<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/data/${dataType}.json`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${dataType}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataType]);

  return { data, loading, error };
}
