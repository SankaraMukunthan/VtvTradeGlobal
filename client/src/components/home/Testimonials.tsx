import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  initials: string;
}

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Default testimonials in case API fails or is loading
  const defaultTestimonials: Testimonial[] = [
    {
      id: 2,
      quote: "We appreciate VTV's commitment to quality and reliability. Their documentation expertise and compliance knowledge have made importing Gum Damar into India a smooth process for our business.",
      name: "Subramanian",
      title: "Andhra",
      initials: "S"
    },
    {
      id: 3,
      quote: "VTV Enterprises has been our trusted supplier of premium turmeric for over 5 years. Their quality is consistently excellent, and their logistics support makes international sourcing seamless.",
      name: "Sankara Mukunthan",
      title: "Chennai",
      initials: "SM"
    }
  ];

  // Use data from API if available, otherwise use default testimonials
  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            We've built lasting relationships with clients around the world who trust our products and services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {isLoading ? (
            // Testimonial skeletons while loading
            Array(2).fill(0).map((_, index) => (
              <Card key={index} className="bg-white shadow-md animate-pulse">
                <CardContent className="p-8">
                  <div className="h-24 bg-gray-200 rounded mb-6"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-40"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual testimonials
            displayTestimonials.map((testimonial: Testimonial) => (
              <Card key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md relative h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="absolute -top-4 left-8 text-5xl text-secondary opacity-50">"</div>
                  <p className="text-foreground italic mb-6 relative z-10 flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-merriweather font-bold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
