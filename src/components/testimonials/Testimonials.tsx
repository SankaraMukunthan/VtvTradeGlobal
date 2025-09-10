import React from 'react';
import { useAppContext } from '@/context/AppContext';

const Testimonials: React.FC = () => {
  const { testimonials, loading, error } = useAppContext();

  if (loading.testimonials) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error.testimonials) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading testimonials: {error.testimonials}</p>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null; // Don't render anything if no testimonials
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
