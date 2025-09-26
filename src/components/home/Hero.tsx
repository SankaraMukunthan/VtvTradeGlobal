import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero_section.png" 
          alt="Global agricultural trading and shipping" 
          className="w-full h-full object-cover" 
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-white leading-tight mb-6">
            Connecting India's Finest to Global Markets
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8 max-w-2xl">
            VTV Enterprises specializes in exporting premium Indian agricultural products
            and importing high-quality goods from international markets.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/products#export-products">
              <Button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300 w-full sm:w-auto">
                Explore Export Products
              </Button>
            </Link>
            <Link href="/products#import-products">
              <Button variant="outline" className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-primary font-semibold py-3 px-8 rounded-md transition duration-300 w-full sm:w-auto">
                View Import Offerings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
