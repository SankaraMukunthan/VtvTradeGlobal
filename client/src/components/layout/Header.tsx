import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-merriweather font-bold text-2xl">VTV</span>
              <span className="text-accent font-merriweather ml-1 text-2xl">Enterprises</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase ${location === '/' ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase ${location === '/about' ? 'text-primary' : ''}`}>
              About Us
            </Link>
            
            <div className="relative group">
              <Link href="/products" className={`nav-link text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase ${location === '/products' ? 'text-primary' : ''}`}>
                Products
              </Link>
              <div className="absolute left-0 mt-1 w-48 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md py-2">
                  <Link href="/products#export-products" className="block px-4 py-2 text-foreground hover:bg-gray-light hover:text-primary transition duration-300">
                    Export Products
                  </Link>
                  <Link href="/products#import-products" className="block px-4 py-2 text-foreground hover:bg-gray-light hover:text-primary transition duration-300">
                    Import Products
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/services" className={`nav-link text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase ${location === '/services' ? 'text-primary' : ''}`}>
              Services
            </Link>
            <Link href="/contact" className={`nav-link text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase ${location === '/contact' ? 'text-primary' : ''}`}>
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-5 rounded-md transition duration-300 text-sm uppercase">
              Get In Touch
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase py-2"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className="text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase py-2"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link 
                href="/services" 
                className="text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-foreground hover:text-primary font-medium transition duration-300 text-sm uppercase py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center text-sm uppercase"
                onClick={closeMobileMenu}
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
