import { Link } from "wouter";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  FacebookIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-white font-merriweather font-bold text-2xl">VTV</span>
              <span className="text-secondary font-merriweather ml-1 text-2xl">Enterprises</span>
            </Link>
            <p className="text-white/80 mb-6">
              Your trusted partner for global trade, connecting India's finest agricultural products 
              to international markets and bringing premium imports to domestic customers.
            </p>
            {/* Social media links removed as requested */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-merriweather font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-secondary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products#export-products" className="text-white/80 hover:text-secondary transition duration-300">
                  Export Products
                </Link>
              </li>
              <li>
                <Link href="/products#import-products" className="text-white/80 hover:text-secondary transition duration-300">
                  Import Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-secondary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-merriweather font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products#export" className="text-white/80 hover:text-secondary transition duration-300">
                  Turmeric (Haldi)
                </Link>
              </li>
              <li>
                <Link href="/products#export" className="text-white/80 hover:text-secondary transition duration-300">
                  Rice
                </Link>
              </li>
              <li>
                <Link href="/products#export" className="text-white/80 hover:text-secondary transition duration-300">
                  Pulses (Toor, Urad, Moong)
                </Link>
              </li>
              <li>
                <Link href="/products#export" className="text-white/80 hover:text-secondary transition duration-300">
                  Nuts (Groundnut, Cashew)
                </Link>
              </li>
              <li>
                <Link href="/products#export" className="text-white/80 hover:text-secondary transition duration-300">
                  Sugar & Salt
                </Link>
              </li>
              <li>
                <Link href="/products#import" className="text-white/80 hover:text-secondary transition duration-300">
                  Gum Damar
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-merriweather font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPinIcon className="h-5 w-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                <span className="text-white/80">No 1022, Nehru Street, Vellore, Kadapperi, Kadapperi, Kadaperi, Tamil Nadu, India, 632508</span>
              </li>
              <li className="flex">
                <PhoneIcon className="h-5 w-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                <span className="text-white/80">+91 98415 19093</span>
              </li>
              <li className="flex">
                <MailIcon className="h-5 w-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                <span className="text-white/80">abiindo3333@gmail.com</span>
              </li>
              <li className="flex">
                <ClockIcon className="h-5 w-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                <span className="text-white/80">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} VTV Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
