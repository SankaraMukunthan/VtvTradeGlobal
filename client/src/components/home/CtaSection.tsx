import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-white mb-6">
          Ready to Explore Global Trade Opportunities?
        </h2>
        <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Whether you're looking to import premium products into India or export high-quality 
          Indian agricultural goods to international markets, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300 w-full sm:w-auto">
              Contact Us Today
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-md transition duration-300 w-full sm:w-auto">
              View Our Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
