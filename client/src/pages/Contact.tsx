import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-foreground mb-0 max-w-3xl mx-auto">
              Have questions about our products, services, or want to discuss a potential partnership?
              Reach out to our team, and we'll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                          <MapPin className="text-white h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-foreground">Corporate Office</h4>
                        <p className="text-foreground">
                          No 1022, Nehru Street, Vellore<br />
                          Kadapperi, Tamil Nadu 632508<br />
                          India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                          <Phone className="text-white h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-foreground">
                          +91 98415 19093
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                          <Mail className="text-white h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-foreground">
                          abiindo3333@gmail.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                          <Clock className="text-white h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-foreground">Business Hours</h4>
                        <p className="text-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                          Saturday: 9:00 AM - 2:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-4">Our Location</h3>
                  <div className="h-80 rounded-lg overflow-hidden">
                    <GoogleMap />
                  </div>
                </CardContent>
              </Card>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
