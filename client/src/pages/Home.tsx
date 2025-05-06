import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductsPreview from "@/components/home/ProductsPreview";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scroll-smooth">
      <Hero />
      <Features />
      <section id="about-preview" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="section-title text-3xl md:text-4xl font-merriweather font-bold text-primary mb-6">
                About VTV Enterprises
              </h2>
              <p className="text-foreground mb-6">
                Founded with a vision to showcase India's premium agricultural products to the world,
                VTV Enterprises has established itself as a trusted global trading company committed to quality,
                sustainability, and customer satisfaction.
              </p>
              <p className="text-foreground mb-6">
                Our experienced team understands the complexities of international trade, navigating
                regulations, logistics, and quality control to ensure seamless transactions for our
                clients across the globe.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">10+</span>
                  </div>
                  <span className="text-foreground">Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">25+</span>
                  </div>
                  <span className="text-foreground">Countries Served</span>
                </div>
              </div>
              <a href="/contact" className="inline-block bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                Contact Us
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/assets/team/ceo.jpg" 
                  alt="Venu Gopal V - Founder & CEO" 
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                  style={{ height: "500px" }}
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary font-merriweather font-bold text-2xl">VTV</span>
                    </div>
                    <div>
                      <span className="block text-white font-merriweather font-bold">Venu Gopal V</span>
                      <span className="text-white text-sm">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductsPreview />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;
